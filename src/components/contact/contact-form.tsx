"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-heading shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
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
        className="rounded-lg border border-border bg-muted p-6 text-sm text-foreground"
        role="status"
      >
        Thank you. Your note has been sent, and Chirag will be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="text-sm font-medium text-heading">
          Name <span className="text-amber-ink">*</span>
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-heading">
          Work email <span className="text-amber-ink">*</span>
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="company" className="text-sm font-medium text-heading">
          Company
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="locations" className="text-sm font-medium text-heading">
          Number of locations
        </label>
        <input id="locations" name="locations" type="text" inputMode="numeric" className={fieldClasses} />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-heading">
          Message
        </label>
        <textarea id="message" name="message" rows={4} className={fieldClasses} />
      </div>

      {status === "error" ? (
        <p className="text-sm text-destructive" role="alert">
          {error}
        </p>
      ) : null}

      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send a note"}
      </Button>
    </form>
  );
}
