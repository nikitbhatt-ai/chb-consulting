"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { mainNav, servicesNav } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CalendlyPopupButton } from "@/components/calendly/calendly-popup-button";

function Wordmark() {
  return (
    <Link
      href="/"
      className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      aria-label="CHB Food Safety Consulting, home"
    >
      <span className="font-serif text-xl font-semibold tracking-tight text-heading">
        CHB
      </span>
      <span className="text-[0.68rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Food Safety Consulting
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Wordmark />

        {/* Desktop navigation */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-1 lg:flex"
        >
          {mainNav.map((item) =>
            item.children ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-heading transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {servicesNav.map((service) => (
                    <DropdownMenuItem key={service.label} asChild>
                      <Link href={service.href}>{service.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.label}
                href={item.href ?? "/"}
                className="rounded-md px-3 py-2 text-sm font-medium text-heading transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop call-to-action */}
        <div className="hidden lg:block">
          <CalendlyPopupButton>Book a call</CalendlyPopupButton>
        </div>

        {/* Mobile menu */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="mb-6 font-serif">Menu</SheetTitle>
              <nav aria-label="Mobile" className="flex flex-col gap-1">
                {mainNav.map((item) =>
                  item.children ? (
                    <div key={item.label} className="py-2">
                      <p className="px-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <div className="mt-1 flex flex-col">
                        {servicesNav.map((service) => (
                          <SheetClose asChild key={service.label}>
                            <Link
                              href={service.href}
                              className="rounded-md px-2 py-2 text-sm text-heading hover:bg-accent"
                            >
                              {service.label}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <SheetClose asChild key={item.label}>
                      <Link
                        href={item.href ?? "/"}
                        className="rounded-md px-2 py-2.5 text-sm font-medium text-heading hover:bg-accent"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                )}
              </nav>
              <div className="mt-6 border-t border-border pt-6">
                <CalendlyPopupButton className="w-full">
                  Book a call
                </CalendlyPopupButton>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
