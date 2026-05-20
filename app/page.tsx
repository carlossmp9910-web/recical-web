"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Leaf,
  Recycle,
  Clock,
  CheckCircle2,
  MessageCircle
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";


const MessageCircle_NUMBER = "593983502892"; // <--- Reemplaza por tu número real (ej: 593987654321)
const COMPANY_ADDRESS = "Quito, Ecuador"; // <--- Reemplaza por tu dirección
const COMPANY_EMAIL = "vicvincal@hotmail.com"; // <--- Reemplaza por tu correo
const COMPANY_PHONE = "+593983502892"; // <--- Reemplaza por tu teléfono
const MAP_EMBED_SRC =
  "https://www.google.com/maps?q=-0.1178293,-78.4731237&z=20&output=embed";
const MAP_EMBED_SRC2 =
  "https://www.google.com/maps?q=-0.1018445,-78.4192381&z=19&output=embed"; // Google Maps - Quito
const MAP_LOCATIONS = [
  { title: "Av. Eloy Alfaro y De Las Higueras", src: MAP_EMBED_SRC, description: "Bodega principal Centro-Norte" },
  { title: "Panamericana Norte y Lizardo Becerra", src: MAP_EMBED_SRC2, description: "Bodega secundaria Norte" },
];
export default function RecicleLanding() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", mensaje: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Correo no válido";
    if (form.telefono && !/^\+?\d[\d\s-]{6,}$/.test(form.telefono)) e.telefono = "Teléfono no válido";
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10) e.mensaje = "Cuéntanos más (mín. 10 caracteres)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (k: string, v: string) => setForm(prev => ({ ...prev, [k]: v }));

const handleSubmit = (ev: React.FormEvent) => {
  ev.preventDefault();
  if (!validate()) return;

  const text = `
Hola Recicle, quiero información:

Nombre/Empresa: ${form.nombre}
Correo: ${form.email}
Teléfono: ${form.telefono}

Mensaje:
${form.mensaje}
  `.trim();

  const url = `https://wa.me/${MessageCircle_NUMBER}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank");

  setSent(true);
  setForm({ nombre: "", email: "", telefono: "", mensaje: "" });
  setTimeout(() => setSent(false), 4000);
};
``

  const MessageCircleHref = `https://wa.me/${MessageCircle_NUMBER}?text=${encodeURIComponent(
    "Hola Recicle, necesito información sobre sus servicios de reciclaje."
  )}`;

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* NAV */}
      <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center align center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-emerald-600 grid place-items-center text-white">
              <Recycle className="h-5 w-5" />
            </div>
            <span className="font-semibold text-xl">Recicle</span>
          </div>
          
<nav className="hidden md:flex gap-6 text-sm">
  <a href="#servicios" className="hover:text-emerald-700">Servicios</a>
  <a href="#impacto" className="hover:text-emerald-700">Impacto</a>
  <a href="#contacto" className="hover:text-emerald-700">Contacto</a>
</nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-neutral-900">
              Reciclaje inteligente para un <span className="text-emerald-700">futuro circular</span>
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              En <strong>Recicle</strong> transformamos residuos en oportunidades. Recolección, clasificación y
              valorización para empresas que buscan sostenibilidad real.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contacto"><Button className="bg-emerald-600 hover:bg-emerald-700"><Send className="h-4 w-4 mr-2" /> Solicitar información</Button></a>
              <a href="#servicios"><Button variant="secondary" className="border-neutral-300">Ver servicios</Button></a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-emerald-700" /> Atención rápida</div>
              <div className="flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-700" /> Huella reducida</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-700" /> Cumplimiento normativo</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
            <div className="relative h-[360px] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://texlimca.com/api/wp-content/uploads/2024/10/Contenedores-de-reciclaje-segun-sus-colores-y-usos1-scaled.jpg"
                alt="Reciclaje industrial"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-600/90 text-xs">
                  <Recycle className="h-3.5 w-3.5" /> Operación certificada
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Servicios</h2>
        <p className="text-neutral-600 mt-2">Soluciones integrales para la gestión responsable de residuos.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            { title: "Recolección y logística", desc: "Rutas programadas y retiro bajo demanda para residuos reciclables empresariales." },
            { title: "Clasificación y acopio", desc: "Separación por tipo de material (papel, cartón, plásticos, metales, electrónicos)." },
            { title: "Valorización y reporte", desc: "Trazabilidad, certificados y métricas para tus reportes de sostenibilidad (ESG)." },
          ].map((s) => (
            <Card key={s.title} className="rounded-2xl border-neutral-200">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center">
                  <Recycle className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
                <p className="text-neutral-600 mt-1 text-sm">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* IMPACTO */}
      <section id="impacto" className="bg-gradient-to-b from-white to-emerald-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
          {[{ kpi: "1.2K+", label: "Toneladas recicladas" }, { kpi: "180+", label: "Empresas atendidas" }, { kpi: "95%", label: "Desvío de relleno sanitario" }].map((k) => (
            <Card key={k.label} className="rounded-2xl border-neutral-200">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-bold text-emerald-700">{k.kpi}</div>
                <div className="text-neutral-600 mt-1">{k.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Solicita información</h2>
            <p className="text-neutral-600 mt-2">Cuéntanos tus necesidades y te contactaremos en breve.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium">Nombre y empresa</label>
                <input
                  className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600 ${errors.nombre ? "border-red-400" : "border-neutral-300"}`}
                  placeholder="Ej. Ana Pérez — EcoLogistics S.A."
                  value={form.nombre}
                  onChange={(e) => handleChange("nombre", e.target.value)}
                />
                {errors.nombre && <p className="text-red-600 text-xs mt-1">{errors.nombre}</p>}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Correo</label>
                  <input
                    className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600 ${errors.email ? "border-red-400" : "border-neutral-300"}`}
                    placeholder="nombre@empresa.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium">Teléfono</label>
                  <input
                    className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600 ${errors.telefono ? "border-red-400" : "border-neutral-300"}`}
                    placeholder="+593 9 9999 9999"
                    value={form.telefono}
                    onChange={(e) => handleChange("telefono", e.target.value)}
                  />
                  {errors.telefono && <p className="text-red-600 text-xs mt-1">{errors.telefono}</p>}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Mensaje</label>
                <textarea
                  rows={5}
                  className={`mt-1 w-full rounded-xl border px-3 py-2 outline-none focus:ring-2 focus:ring-emerald-600 ${errors.mensaje ? "border-red-400" : "border-neutral-300"}`}
                  placeholder="¿Qué materiales manejas? ¿Con qué frecuencia necesitan recolección?"
                  value={form.mensaje}
                  onChange={(e) => handleChange("mensaje", e.target.value)}
                />
                {errors.mensaje && <p className="text-red-600 text-xs mt-1">{errors.mensaje}</p>}
              </div>
              <div className="flex items-center gap-3">
                <Button type="submit" disabled={sending} className="bg-emerald-600 hover:bg-emerald-700">
                  <Send className="h-4 w-4 mr-2" /> {sending ? "Enviando..." : "Enviar solicitud"}
                </Button>
                {sent && <span className="text-emerald-700 text-sm">¡Solicitud enviada! Te contactaremos pronto.</span>}
              </div>
            </form>

            <div className="mt-8 grid gap-4 text-sm text-neutral-700">
              <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-700" /> {COMPANY_EMAIL}</div>
              <div className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-700" /> {COMPANY_PHONE}</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-700" /> {COMPANY_ADDRESS}</div>
            </div>
          </div>

          <div className="grid gap-6">
            {MAP_LOCATIONS.map((map) => (
              <Card key={map.title} className="rounded-2xl overflow-hidden border-neutral-200">
                <div className="px-4 py-3 border-b border-neutral-200 bg-neutral-50">
                  <div className="text-sm font-semibold text-neutral-900">{map.title}</div>
                  <div className="text-xs text-neutral-500 mt-1">{map.description}</div>
                </div>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    <iframe
                      title={map.title}
                      src={map.src}
                      className="w-full h-full border-0"
                      loading="lazy"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-emerald-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold">¿Listos para reciclar mejor?</h3>
            <p className="text-emerald-100 mt-2">Agendemos una evaluación sin costo y diseñemos tu plan de gestión de residuos.</p>
          </div>
          <div className="flex md:justify-end gap-3">
            <a href={MessageCircleHref} target="_blank" rel="noreferrer">
              <Button className="bg-white text-emerald-700 hover:bg-emerald-100"><MessageCircle className="h-4 w-4 mr-2" /> Escribir por Whatsapp</Button>
            </a>
            <a href="#contacto"><Button variant="secondary" className="bg-emerald-600 hover:bg-emerald-800 text-white border-0">Solicitar info</Button></a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-neutral-900 text-neutral-300">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-emerald-600 grid place-items-center text-white">
                <Recycle className="h-4 w-4" />
              </div>
              <span className="font-semibold">Recicle</span>
            </div>
            <p className="text-sm mt-3 text-neutral-400">Reciclaje corporativo con trazabilidad y reportes para una economía circular real.</p>
          </div>
          <div>
            <h4 className="font-semibold">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-400" /> {COMPANY_EMAIL}</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-400" /> {COMPANY_PHONE}</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-400" /> {COMPANY_ADDRESS}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Horario</h4>
            <ul className="mt-3 space-y-1 text-sm text-neutral-400">
              <li>Lunes a Viernes: 08:30 - 18:00</li>
              <li>Sábados: 09:00 - 13:00</li>
              <li>Emergencias: 24/7 para clientes con contrato</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800">
          <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-neutral-500 flex items-center justify-between">
            <span>© 2026 Recicle. Todos los derechos reservados.</span>
            <a className="hover:text-neutral-300" href="#">Política de privacidad</a>
          </div>
        </div>
      </footer>

      {/* Botón flotante MessageCircle */}
      <a
        href={MessageCircleHref}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40"
        aria-label="MessageCircle"
      >
        <div className="h-14 w-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl grid place-items-center">
          <MessageCircle className="h-7 w-7" />
        </div>
      </a>
    </div>
  );
}