"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type AccordionItem = {
  question: string;
  answer: React.ReactNode;
};

function AccordionRow({ item }: { item: AccordionItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/30 last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left text-sm font-semibold hover:bg-muted/10"
      >
        <span>{item.question}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 text-sm text-muted-foreground [&_strong]:text-foreground">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function AccordionSection({
  title,
  description,
  items,
}: {
  title?: string;
  description?: string;
  items: AccordionItem[];
}) {
  return (
    <Card>
      {title ? (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {description ? (
            <CardDescription>{description}</CardDescription>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent className={title ? "pt-0" : undefined}>
        <div className="rounded-xl border">
          {items.map((item) => (
            <AccordionRow key={item.question} item={item} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
