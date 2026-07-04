import { env } from "@/config/env";

export class ApiError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

interface RequestOptions {
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
}

export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<T> {
  if (!env.isApiConfigured) {
    throw new ApiError("No API is configured (VITE_API_BASE_URL is not set).");
  }

  const url = `${env.apiBaseUrl}${path.startsWith("/") ? path : `/${path}`}`;

  let response: Response;
  try {
    response = await fetch(url, {
      method: options.method ?? "GET",
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    });
  } catch {
    throw new ApiError(`Could not reach the server at ${url}. Check your connection and try again.`);
  }

  if (!response.ok) {
    const message = await response.text().catch(() => "");
    throw new ApiError(message || `Request failed with status ${response.status}`, response.status);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return (await response.json()) as T;
}
