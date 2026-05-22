"use client";
import { useState } from "react";
import {
  MessageCircle,
  Shield,
  Lightbulb,
  Sparkles,
  ShowerHead,
  Beer,
  Trophy,
  GraduationCap,
  Dumbbell,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Menu,
  X,
} from "lucide-react";
import { WhatsAppFab } from "./components/WhatsAppFab";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=5493644729381";
const heroImg = "/assets/hero-padel.jpg";
const cantinaImg = "/assets/cantina.jpg";

export default function HomePage() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 isolate backdrop-blur-xl bg-[#050816]/96 md:bg-background/72 border-b border-blue-500/35 shadow-[0_8px_30px_rgba(0,0,0,0.34)]">
        <nav className="max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 text-primary">
            <span className="h-2.5 w-2.5 rounded-full shadow-neon-sm" style={{ backgroundColor: "#2d7dff" }} />
            <span className="font-display text-lg tracking-tight text-slate-50">STUPADEL</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-50">
            <a href="#instalaciones" className="hover:text-foreground transition-colors">Instalaciones</a>
            <a href="#cantina" className="hover:text-foreground transition-colors">Cantina</a>
            <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="#contacto" className="hover:text-foreground transition-colors">Contacto</a>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full text-primary-foreground px-4 py-2 text-sm font-semibold hover:brightness-110 transition shadow-neon-sm"
            style={{ backgroundColor: "#2d7dff" }}
          >
            <MessageCircle className="h-4 w-4" /> Reservar
          </a>
          <button
            type="button"
            aria-label="Abrir menú"
            onClick={() => setMobileOpen((s) => !s)}
            className="md:hidden ml-2 inline-flex items-center justify-center rounded-md p-2 text-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary/80"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
        {mobileOpen && (
          <div className="md:hidden">
            <div className="mx-4 mb-4 rounded-2xl border border-blue-500/40 bg-[#050816]/98 px-5 py-4 space-y-3 shadow-[0_18px_60px_rgba(0,0,0,0.5)]">
              <a href="#instalaciones" onClick={() => setMobileOpen(false)} className="block text-lg font-medium text-foreground">Instalaciones</a>
              <a href="#cantina" onClick={() => setMobileOpen(false)} className="block text-lg font-medium text-foreground">Cantina</a>
              <a href="#servicios" onClick={() => setMobileOpen(false)} className="block text-lg font-medium text-foreground">Servicios</a>
              <a href="#contacto" onClick={() => setMobileOpen(false)} className="block text-lg font-medium text-foreground">Contacto</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full text-primary-foreground px-4 py-2 text-sm font-semibold hover:brightness-110 transition shadow-neon-sm"
                style={{ backgroundColor: "#2d7dff" }}
              >
                <MessageCircle className="h-4 w-4" /> Reservar
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20">
        <img
          src={heroImg}
          alt="Cancha de pádel iluminada"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-slate-950/35" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-8 text-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/35 bg-slate-950/55 px-4 py-1.5 text-xs uppercase tracking-widest text-blue-100 mb-6 shadow-lg backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
            CANCHAS PREMIUM · EXPERIENCIA COMPLETA
          </span>
          <h1 className="font-italic-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] uppercase">
            Tu mejor <br />
            <span className="text-primary text-shadow-neon">partido</span> <br />
            empieza acá.
          </h1>
          <p className="mt-8 text-base md:text-xl text-slate-200 max-w-2xl mx-auto">
            Canchas premium, cafetería y el mejor ambiente para jugar cualquier día de la semana.
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full text-primary-foreground px-7 sm:px-10 py-5 sm:py-6 text-base sm:text-lg font-bold shadow-neon hover:brightness-110 hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "#2d7dff" }}
            >
              <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.5} />
              Reservar Ahora
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-muted-foreground/70">
          ↓ Scroll
        </div>
      </section>

      {/* INSTALACIONES */}
      <section id="instalaciones" className="py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-primary text-sm uppercase tracking-widest mb-3" style={{ color: "#1d66ff" }}>01 — Instalaciones</p>
            <h2 className="font-italic-display text-5xl md:text-7xl uppercase leading-none">
              <span style={{ color: "#f8fafc" }}>Equipamiento</span>{" "}
              <span className="text-primary drop-shadow-[0_0_12px_rgba(45,125,255,0.9)]" style={{ color: "#2d7dff" }}>
                premium
              </span>.{" "}
              <span style={{ color: "#f8fafc" }}>Cero excusas.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-5 auto-rows-[minmax(200px,auto)]">
            <FeatureCard
              className="md:col-span-4 md:row-span-2 md:border-t-0"
              icon={Shield}
              title="Canchas Panorámicas"
              description="Blindex de alta resistencia. Visión 360° para jugadores y público. Rebote perfecto en cada pared."
              big
            />
            <FeatureCard
              className="md:col-span-2 md:border-t-0"
              icon={Lightbulb}
              title="Iluminación LED Pro"
              description="Cero sombras, visibilidad perfecta a toda hora."
            />
            <FeatureCard
              className="md:col-span-2"
              icon={Sparkles}
              title="Superficie Premium"
              description="Los mejores materiales del mercado para un juego óptimo."
            />
            <FeatureCard
              className="md:col-span-3"
              icon={ShowerHead}
              title="Vestuarios & Duchas"
              description="Espacios amplios, agua caliente y lockers seguros para tus pertenencias."
            />
            <FeatureCard
              className="md:col-span-3"
              icon={Dumbbell}
              title="Zona de Calentamiento"
              description="Área dedicada para activar el cuerpo antes del primer saque."
            />
          </div>
        </div>
      </section>

      {/* TERCER TIEMPO */}
      <section id="cantina" className="py-24 md:py-32 px-5 md:px-8 bg-card/40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[4/4] shadow-neon-sm border border-blue-500/25 panel-glow">
            <img
              src={cantinaImg}
              alt="Cantina del club"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
              <Beer className="h-6 w-6 text-primary" />
              <span className="font-display text-sm uppercase tracking-widest">Después del partido</span>
            </div>
          </div>

          <div>
            <p className="text-primary text-sm uppercase tracking-widest mb-3" style={{ color: "#1d66ff" }}>02 — El tercer tiempo</p>
            <h2 className="font-italic-display text-5xl md:text-7xl uppercase leading-[0.95]">
              <span style={{ color: "#f8fafc" }}>El partido</span>{" "}
              <span className="text-primary drop-shadow-[0_0_12px_rgba(45,125,255,0.9)]" style={{ color: "#2d7dff" }}>
                no termina
              </span>{" "}
              <span style={{ color: "#f8fafc" }}>en la cancha.</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Viví el tercer tiempo en nuestra cafetería: buen café, algo rico para comer y el espacio ideal para compartir después de cada partido.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Cafe premium', 'Tostados & Bakery', 'Vista a la cancha', 'Wifi & Relax'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 md:py-32 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-primary text-sm uppercase tracking-widest mb-3" style={{ color: "#1d66ff" }}>03 — Servicios</p>
            <h2 className="font-italic-display text-5xl md:text-7xl uppercase leading-none">
              <span style={{ color: "#f8fafc" }}>Todo lo que necesitás para</span>{" "}
              <span className="text-primary drop-shadow-[0_0_12px_rgba(45,125,255,0.9)]" style={{ color: "#2d7dff" }}>
                jugar
              </span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <ServiceCard
              icon={Dumbbell}
              title="Alquiler de Equipo"
              description="Paletas y pelotas profesionales disponibles en recepción. No traés nada, jugás igual."
            />
            <ServiceCard
              icon={GraduationCap}
              title="Clases & Escuelita"
              description="Profesores certificados para todos los niveles. Clases particulares, grupales y escuelita infantil."
            />
            <ServiceCard
              icon={Trophy}
              title="Torneos & Ligas"
              description="Organizamos torneos por categoría y americanos. Sumate y competí cada semana."
            />
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="contacto" className="py-24 md:py-32 px-5 md:px-8 bg-card/40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-primary text-sm uppercase tracking-widest mb-3" style={{ color: "#1d66ff" }}>04 — Ubicación</p>
            <h2 className="font-italic-display text-5xl md:text-7xl uppercase leading-none">
              <span style={{ color: "#f8fafc" }}>Vení a</span>{" "}
              <span className="text-primary drop-shadow-[0_0_12px_rgba(45,125,255,0.9)]" style={{ color: "#2d7dff" }}>
                conocernos
              </span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
            <div className="rounded-3xl overflow-hidden border border-blue-500/25 panel-glow aspect-[4/3] md:aspect-auto md:min-h-[420px] relative">
              <div className="w-full h-full overflow-hidden rounded-3xl border border-blue-400/25 bg-secondary/80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587.674303091797!2d-60.63428312381134!3d-25.94591695350618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94404d175b1d9ff7%3A0xea0c4a949e20a594!2sSTUPADEL!5e0!3m2!1ses!2sar!4v1779470644253!5m2!1ses!2sar"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full"
                    title="Ubicación de STUPADEL en Google Maps"
                  />
                </div>
            </div>

            <div className="space-y-5">
              <InfoRow
                icon={MapPin}
                title="Dirección"
                lines={["Juan José Castelli, Chaco, Argentina"]}
              />
              <InfoRow
                icon={Clock}
                title="Horarios"
                lines={["Lunes a Lunes", "08:00 – 00:00 hs"]}
              />
              <InfoRow
                icon={Phone}
                title="Contacto"
                lines={["+54 364 444-9444", "stupadelclub@gmail.com"]}
              />
              <InfoRow
                icon={Instagram}
                title="Seguinos"
                lines={["@stupadelclub"]}
                href="https://www.instagram.com/stupadelclub/"
              />

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-3 rounded-full text-primary-foreground px-8 py-5 text-base font-bold shadow-neon-sm hover:brightness-110 hover:scale-105 transition-transform"
                style={{ backgroundColor: "#2d7dff" }}
              >
                <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
                Reservar Turno
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/25 py-10 px-5 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-display tracking-tight">STUPADEL CLUB</span>
          </div>
          <p>© {new Date().getFullYear()} STUPADEL CLUB. Todos los derechos reservados.</p>
        </div>
      </footer>

      <WhatsAppFab />

      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
      />
    </div>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  className = "",
  big = false,
}: {
  icon: typeof Shield;
  title: string;
  description: string;
  className?: string;
  big?: boolean;
}) {
  return (
    <div
      className={`group relative rounded-3xl border border-blue-500/45 bg-card p-6 md:p-8 overflow-hidden transition-all duration-500 hover:border-primary hover:-translate-y-1 transform-gpu will-change-transform panel-glow no-artifact ${className}`}>
      <div className="relative flex flex-col h-full">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-primary/18 text-primary mb-5 border border-blue-500/20">
          <Icon className={big ? "h-7 w-7" : "h-6 w-6"} strokeWidth={2} />
        </div>
        <h3 className={`font-display uppercase text-slate-50 ${big ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"} leading-tight`}>
          {title}
        </h3>
        <p className="mt-3 text-slate-300 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Trophy;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-3xl border border-blue-500/45 bg-card p-7 hover:border-primary transition-all duration-300 hover:-translate-y-1 transform-gpu will-change-transform panel-glow no-artifact">
      <Icon className="h-9 w-9 text-primary mb-5 drop-shadow-[0_0_10px_rgba(29,102,255,0.7)]" strokeWidth={1.8} />
      <h3 className="font-display uppercase text-xl text-slate-50 mb-3">{title}</h3>
      <p className="text-slate-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  title,
  lines,
  href,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  href?: string;
}) {
  return (
    <div className="flex gap-4 rounded-2xl border border-blue-500/40 bg-card p-5 panel-glow">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/20 text-primary border border-blue-500/35">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-blue-200 mb-1">{title}</p>
        {lines.map((l) =>
          href ? (
            <a
              key={l}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-slate-50 font-medium hover:text-primary transition-colors"
            >
              {l}
            </a>
          ) : (
            <p key={l} className="text-slate-50 font-medium">
              {l}
            </p>
          ),
        )}
      </div>
    </div>
  );
}
