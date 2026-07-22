"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-heading shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

/** Two-field lead-magnet form: email address and company name only. */
export function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-lg border border-border bg-background p-5 text-sm text-foreground"
        role="status"
      >
        Thank you. Check your inbox for the checklist.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-end" noValidate>
      <div className="flex-1">
        <label htmlFor="lead-email" className="sr-only">
          Email address
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          required
          placeholder="Work email"
          autoComplete="email"
          className={fieldClasses}
        />
      </div>
      <div className="flex-1">
        <label htmlFor="lead-company" className="sr-only">
          Company name
        </label>
        <input
          id="lead-company"
          name="company"
          type="text"
          placeholder="Company"
          autoComplete="organization"
          className={fieldClasses}
        />
      </div>
      <Button type="submit" disabled={status === "submitting"} className="shrink-0">
        {status === "submitting" ? "Sending…" : "Get the checklist"}
      </Button>
      {status === "error" ? (
        <p className="w-full text-sm text-destructive sm:order-last" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
