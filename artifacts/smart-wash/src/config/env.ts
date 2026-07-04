const rawApiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? "").trim();

export const env = {
  apiBaseUrl: rawApiBaseUrl.replace(/\/$/, ""),
  isApiConfigured: rawApiBaseUrl.length > 0,
  mode: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
};
