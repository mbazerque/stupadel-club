"use client";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=5493644729381&text=Hola!%20Quiero%20reservar%20un%20turno%20de%20p%C3%A1del.";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reservar turno por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-60" style={{ backgroundColor: "#2d7dff" }} />
      <span
        className="relative flex h-16 w-16 items-center justify-center rounded-full text-primary-foreground shadow-neon transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: "#2d7dff" }}
      >
        <MessageCircle className="h-7 w-7" strokeWidth={2.5} />
      </span>
    </a>
  );
}
