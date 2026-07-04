import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ChevronDown, Calendar, Phone, MapPin, User, Loader2 } from "lucide-react";

const services = [
  "Premium Laundry",
  "Steam Press",
  "Dry Cleaning",
  "Wash & Fold",
  "Shoe Laundry",
  "Saree Rolling",
];

const timeSlots = [
  "9:00 AM – 11:00 AM",
  "11:00 AM – 1:00 PM",
  "1:00 PM – 3:00 PM",
  "3:00 PM – 5:00 PM",
  "5:00 PM – 7:00 PM",
];

interface Props {
  open: boolean;
  onClose: () => void;
}

type Step = "form" | "success";

export function BookingModal({ open, onClose }: Props) {
  const [step, setStep] = useState<Step>("form");
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const valid =
    form.name.trim() &&
    form.phone.trim().length >= 10 &&
    form.address.trim() &&
    form.service &&
    form.date &&
    form.time;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setStep("success");
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("form");
      setForm({ name: "", phone: "", address: "", service: "", date: "", time: "" });
    }, 400);
  };

  // Min date = today
  const today = new Date().toISOString().split("T")[0];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[101] flex items-end sm:items-center justify-center pointer-events-none px-0 sm:px-4"
          >
            <div
              className="pointer-events-auto w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div
                className="relative px-7 pt-7 pb-6"
                style={{ background: "linear-gradient(135deg, #0D6EFD 0%, #2A52BE 100%)" }}
              >
                <div className="absolute top-4 right-4">
                  <button
                    onClick={handleClose}
                    className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
                <p className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase mb-1">Smart Wash</p>
                <h2 className="text-white font-black text-2xl font-heading leading-tight">
                  {step === "success" ? "Booking Confirmed!" : "Schedule Your Pickup"}
                </h2>
                {step === "form" && (
                  <p className="text-white/70 text-sm mt-1">Free collection & delivery at your doorstep.</p>
                )}
              </div>

              {/* Body */}
              <AnimatePresence mode="wait">
                {step === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-7 py-10 flex flex-col items-center text-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-2">We'll be there!</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-1">
                      Your pickup for <span className="font-semibold text-slate-700">{form.service}</span> is scheduled on{" "}
                      <span className="font-semibold text-slate-700">{form.date}</span> between{" "}
                      <span className="font-semibold text-slate-700">{form.time}</span>.
                    </p>
                    <p className="text-slate-500 text-sm mb-8">
                      We'll call <span className="font-semibold text-slate-700">{form.phone}</span> to confirm.
                    </p>
                    <button
                      onClick={handleClose}
                      className="w-full py-3.5 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors"
                    >
                      Done
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={submit}
                    className="px-7 py-6 space-y-4 max-h-[65vh] overflow-y-auto"
                  >
                    {/* Name */}
                    <Field icon={<User className="w-4 h-4" />} label="Your Name">
                      <input
                        type="text"
                        placeholder="Full name"
                        value={form.name}
                        onChange={set("name")}
                        required
                        className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                      />
                    </Field>

                    {/* Phone */}
                    <Field icon={<Phone className="w-4 h-4" />} label="Phone Number">
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={set("phone")}
                        required
                        className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                      />
                    </Field>

                    {/* Address */}
                    <Field icon={<MapPin className="w-4 h-4" />} label="Pickup Address">
                      <input
                        type="text"
                        placeholder="Door / flat, street, area"
                        value={form.address}
                        onChange={set("address")}
                        required
                        className="w-full bg-transparent outline-none text-slate-800 placeholder:text-slate-400 text-sm"
                      />
                    </Field>

                    {/* Service */}
                    <Field icon={<ChevronDown className="w-4 h-4" />} label="Select Service">
                      <select
                        value={form.service}
                        onChange={set("service")}
                        required
                        className="w-full bg-transparent outline-none text-sm appearance-none cursor-pointer"
                        style={{ color: form.service ? "#1e293b" : "#94a3b8" }}
                      >
                        <option value="" disabled>Choose a service</option>
                        {services.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </Field>

                    {/* Date + Time row */}
                    <div className="grid grid-cols-2 gap-3">
                      <Field icon={<Calendar className="w-4 h-4" />} label="Pickup Date">
                        <input
                          type="date"
                          min={today}
                          value={form.date}
                          onChange={set("date")}
                          required
                          className="w-full bg-transparent outline-none text-slate-800 text-sm appearance-none cursor-pointer"
                        />
                      </Field>

                      <Field icon={<ChevronDown className="w-4 h-4" />} label="Time Slot">
                        <select
                          value={form.time}
                          onChange={set("time")}
                          required
                          className="w-full bg-transparent outline-none text-sm appearance-none cursor-pointer"
                          style={{ color: form.time ? "#1e293b" : "#94a3b8" }}
                        >
                          <option value="" disabled>Pick slot</option>
                          {timeSlots.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={!valid || loading}
                      className="w-full py-4 rounded-full font-bold text-sm text-white transition-all duration-300 flex items-center justify-center gap-2"
                      style={{
                        background: valid ? "linear-gradient(135deg, #0D6EFD, #2A52BE)" : "#cbd5e1",
                        cursor: valid ? "pointer" : "not-allowed",
                        boxShadow: valid ? "0 8px 24px rgba(13,110,253,0.3)" : "none",
                      }}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Confirming…
                        </>
                      ) : (
                        "Confirm Pickup"
                      )}
                    </button>

                    <p className="text-center text-xs text-slate-400 pb-1">
                      Free collection & delivery. We'll call to confirm.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-slate-200 bg-slate-50 focus-within:border-primary/50 focus-within:bg-white transition-all duration-200"
    >
      <span className="text-slate-400 flex-shrink-0">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</p>
        {children}
      </div>
    </div>
  );
}
