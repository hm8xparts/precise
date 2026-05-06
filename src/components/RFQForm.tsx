"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2, AlertCircle, Upload } from "lucide-react";

const schema = z.object({
  company: z.string().min(1, "Company is required"),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Select a project type"),
  material: z.string().optional(),
  tolerance: z.string().optional(),
  annualVolume: z.string().optional(),
  timeline: z.string().optional(),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const projectTypes = [
  "Surgical Instruments",
  "Orthopedic Implants",
  "Spherical Components",
  "Diagnostic / Robotic Navigation",
  "Porous Titanium / Test Specimens",
  "Prototype / R&D",
  "Other",
];

const tolerances = [
  "±0.005\" (commercial)",
  "±0.001\"",
  "±0.0005\"",
  "±0.0004\" (ultra-precision)",
  "Other / per drawing",
];

const volumes = [
  "Prototype (1–10)",
  "Low volume (10–500)",
  "Mid volume (500–10,000)",
  "Annual contract (10k+)",
];

const timelines = [
  "Standard",
  "Within 4 weeks",
  "Within 2 weeks",
  "Expedited",
];

export function RFQForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    setErrorMessage("");
    try {
      const fd = new FormData();
      Object.entries(values).forEach(([k, v]) => {
        if (v) fd.append(k, v);
      });
      files.forEach((f) => fd.append("files", f));

      const res = await fetch("/api/rfq", { method: "POST", body: fd });
      if (!res.ok) throw new Error("Submission failed");
      setStatus("success");
      reset();
      setFiles([]);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Unknown error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-precise-green/40 bg-precise-green/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-precise-green" aria-hidden="true" />
        <h2 className="mt-4 text-xl font-bold text-precise-navy">
          Quote request received.
        </h2>
        <p className="mt-2 text-sm text-precise-gray">
          A member of our quoting team will respond within one business day.
          For urgent requests, call us at{" "}
          <a href="tel:+19739282928" className="font-semibold text-precise-navy">
            (973) 928-2928
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex items-center rounded-md border border-precise-navy px-5 py-2 text-sm font-semibold text-precise-navy hover:bg-precise-navy hover:text-white"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-lg border border-precise-line bg-white p-6 shadow-card md:p-8"
      noValidate
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Company" error={errors.company?.message}>
          <input
            type="text"
            autoComplete="organization"
            {...register("company")}
            className={inputCls}
          />
        </Field>
        <Field label="Your name" error={errors.name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register("name")}
            className={inputCls}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register("email")}
            className={inputCls}
          />
        </Field>
        <Field label="Phone" optional>
          <input
            type="tel"
            autoComplete="tel"
            {...register("phone")}
            className={inputCls}
          />
        </Field>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Project type" error={errors.projectType?.message}>
          <select {...register("projectType")} className={inputCls} defaultValue="">
            <option value="" disabled>Select…</option>
            {projectTypes.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </Field>
        <Field label="Primary material" optional>
          <input
            type="text"
            placeholder="e.g. Titanium Grade 5, PEEK, 316 SS"
            {...register("material")}
            className={inputCls}
          />
        </Field>
        <Field label="Target tolerance" optional>
          <select {...register("tolerance")} className={inputCls} defaultValue="">
            <option value="">Select…</option>
            {tolerances.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
        <Field label="Annual volume" optional>
          <select {...register("annualVolume")} className={inputCls} defaultValue="">
            <option value="">Select…</option>
            {volumes.map((v) => (
              <option key={v} value={v}>{v}</option>
            ))}
          </select>
        </Field>
        <Field label="Timeline" optional className="md:col-span-2">
          <select {...register("timeline")} className={inputCls} defaultValue="">
            <option value="">Select…</option>
            {timelines.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Drawings / models" optional>
        <label className="flex cursor-pointer items-center justify-between rounded-md border border-dashed border-precise-line bg-precise-off-white px-4 py-3 text-sm text-precise-gray hover:border-precise-navy">
          <span className="flex items-center gap-2">
            <Upload className="h-4 w-4" aria-hidden="true" />
            {files.length > 0
              ? `${files.length} file${files.length === 1 ? "" : "s"} selected`
              : "Attach STEP, PDF, or DWG files"}
          </span>
          <input
            type="file"
            multiple
            accept=".step,.stp,.iges,.igs,.pdf,.dwg,.dxf,.zip,.x_t,.sldprt"
            onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
            className="sr-only"
          />
        </label>
      </Field>

      <Field label="Notes" optional>
        <textarea
          rows={5}
          placeholder="Quantities, drawing numbers, critical features, sterilization or surface-finish requirements…"
          {...register("notes")}
          className={`${inputCls} resize-y`}
        />
      </Field>

      {status === "error" ? (
        <div className="flex items-start gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            We couldn&apos;t submit your request{errorMessage ? ` (${errorMessage})` : ""}.
            Please try again or email{" "}
            <a href="mailto:sales@precisecomponent.com" className="font-semibold underline">
              sales@precisecomponent.com
            </a>
            .
          </span>
        </div>
      ) : null}

      <div className="flex flex-col items-start gap-3 border-t border-precise-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-precise-gray">
          By submitting, you agree to receive a follow-up from our quoting team.
          Files are handled in accordance with our quality and confidentiality protocols.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-md bg-precise-navy px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-precise-navy-dark disabled:opacity-60"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            "Submit RFQ"
          )}
        </button>
      </div>
    </form>
  );
}

const inputCls =
  "block w-full rounded-md border border-precise-line bg-white px-3 py-2.5 text-sm text-precise-navy shadow-sm placeholder:text-precise-gray/60 focus:border-precise-navy focus:outline-none focus:ring-2 focus:ring-precise-navy/20";

function Field({
  label,
  optional,
  error,
  children,
  className,
}: {
  label: string;
  optional?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className ?? ""}`}>
      <span className="mb-1.5 flex items-center gap-2 text-xs font-semibold uppercase tracking-eyebrow text-precise-gray">
        {label}
        {optional ? <span className="text-[10px] font-normal text-precise-gray/70">(optional)</span> : null}
      </span>
      {children}
      {error ? (
        <span className="mt-1 block text-xs text-red-600">{error}</span>
      ) : null}
    </label>
  );
}
