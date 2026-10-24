import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero-breath.jpg";

const TITLE = "Taller de Breathwork | Respira y vuelve a ti";
const DESC = "Una experiencia vivencial de respiración consciente para soltar tensión, calmar la mente y reconectar con tu cuerpo.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const WHATSAPP = "https://wa.me/34658454195";

const EVENT = {
  city: "Alcázar de San Juan",
  date: "Viernes, 20 de noviembre",
  time: "A las 17:00 h",
  place: "Alcázar de San Juan",
  location: "Instituto Holístico",
  address: "(Av. Álvarez Guerra, 22)",


  price: "22 €",
  facilitator: "Ana María",
};

const faqs: [string, string[]][] = [
  ["¿Necesito experiencia previa con breathwork o meditación?", ["No necesitas ningún tipo de experiencia previa. Absolutamente ninguna. Solo necesitas la voluntad de querer hacer un trabajo por ti, dejarte guiar y abrirte al proceso de respirar. El resto lo hace tu cuerpo."]],
  ["¿Qué ocurre durante la sesión? ¿Qué hago yo?", ["La sesión se lleva a cabo tumbados en una esterilla (la llevas tú), con los ojos cerrados y auriculares inalámbricos que llevamos nosotros. Bajo nuestra guía, siguiendo el proceso de respiración, disfrutas del viaje y la experiencia. Tú no tienes que hacer nada más que respirar y dejarte llevar. El proceso fisiológico hace el resto."]],
  ["¿Es seguro? ¿Qué pasa si me pierdo o me asusto?", ["Sí, es completamente seguro. Nuestros facilitadores están contigo en todo momento y saben guiarte y sostenerte ante cualquier emoción que surja. De hecho, que surjan emociones intensas es parte del proceso: es el cuerpo liberando lo que lleva tiempo guardado. Estás en manos expertas."]],
  ["¿Cómo es la política de cancelación?", ["Queremos asegurarnos de que tu experiencia sea inolvidable, por lo que dedicamos mucho cuidado y recursos a cada detalle del evento. Por esta razón, no es posible realizar cancelaciones ni cambios de fecha una vez hecha la reserva.", "Sin embargo, si no puedes asistir, estaremos encantados de ayudarte a transferir tu lugar a otra persona que pueda disfrutar del evento en tu lugar, siempre y cuando lo notifiques con antelación.", "En caso de cancelación del evento por parte de la organización, se procede a la devolución íntegra del importe abonado."]],
  ["¿Existen contraindicaciones?", ["Todo el mundo puede beneficiarse del poder del breathwork. De hecho, si estás atravesando alguna dificultad, te animamos especialmente a venir para ayudar a equilibrar tu cuerpo y tu sistema nervioso.", "Informa al facilitador si tienes: problemas cardiovasculares no controlados (angina, infarto, hipertensión no controlada), aneurisma, epilepsia, problemas psiquiátricos graves, trastorno bipolar, osteoporosis, cirugía reciente, glaucoma o si estás embarazada.", "Las personas con asma deben traer su inhalador e informar al facilitador."]],
  ["¿Por qué este evento es diferente a otros retiros o talleres?", ["Porque no enseñamos teoría. No damos charlas.", "Lo que ocurre en el espacio es un proceso fisiológico real; la química de tu cuerpo no volverá a ser la misma. Además, te guiarán profesionales en un entorno creado para que tu sistema nervioso se sienta seguro y pueda soltar. El cambio ocurre en el cuerpo, no en la cabeza."]],
  ["¿Cuál es el valor total del evento?", ["El coste total del evento es de 22 €.", "El pago que realizas ahora es solo para reservar tu plaza y se descontará del coste total.", "El resto se abona el día del evento a tu llegada. Puedes pagar con tarjeta de débito o crédito, o en efectivo.", "Tu reserva te garantiza un lugar dentro del aforo limitado del evento."]],
  ["¿Pueden asistir menores?", ["No. Nuestros eventos presenciales no están diseñados específicamente para menores.", "Si te interesa una experiencia en familia o una sesión específica para niños, puedes hablar directamente con nuestros facilitadores después del evento para explorar opciones especiales."]],
];

const forYou = [
  "Sientes que tu mente no para",
  "Vives con tensión o ansiedad en el cuerpo",
  "Te cuesta dormir o desconectar",
  "Estás atravesando un momento de cambio",
  "Quieres soltar emociones guardadas",
  "Buscas más energía, calma y claridad",
  "Quieres vivir una experiencia transformadora",
  "Buscas un espacio cuidado, humano y seguro",
];

const steps = [
  ["Llegada y aterrizaje", "Para dejar fuera el ruido y entrar en el espacio."],
  ["Despertar del cuerpo", "Movimiento suave para preparar la respiración."],
  ["Respiración consciente", "Técnicas guiadas para activar, liberar y soltar."],
  ["Viaje respiratorio", "Una sesión profunda acompañada de música."],
  ["Integración y escritura", "Para poner palabras a lo que has sentido."],
  ["Círculo y cierre", "Compartir desde la calma, en un espacio seguro."],
];

const phases = [
  ["Inhala", "Abrir"],
  ["Retén", "Sentir"],
  ["Exhala", "Soltar"],
  ["Pausa", "Habitar"],
];

function Btn({ children, href, variant = "primary" }: { children: React.ReactNode; href: string; variant?: "primary" | "ghost" }) {
  const base = "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm tracking-wide transition-all";
  const v =
    variant === "primary"
      ? "bg-primary text-primary-foreground hover:bg-deep shadow-lg shadow-primary/20"
      : "border border-gold text-foreground hover:bg-gold/10";
  return (
    <a href={href} className={`${base} ${v}`}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="bg-background text-foreground">
      <img src={hero} alt="Grupo practicando respiración consciente al aire libre" width={1600} height={1008} className="h-[52vh] w-full object-cover md:h-[70vh]" />
      <div className="h-1 bg-gold/70" />

      <section className="bg-deep px-6 py-8 text-center text-deep-foreground">
        <p className="kicker">Últimas plazas disponibles</p>
        <p className="mt-3 font-serif text-4xl md:text-5xl">{EVENT.city}</p>
        <p className="mt-1 font-serif text-2xl italic text-gold md:text-3xl">{EVENT.date}</p>
        <p className="mt-1 text-sm tracking-widest uppercase text-deep-foreground/75">{EVENT.time}</p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="relative mx-auto mb-8 h-20 w-20">
          <span className="absolute inset-0 rounded-full bg-gold/30 animate-breathe" />
          <span className="absolute inset-4 rounded-full border border-gold" />
        </div>
        <p className="kicker">Taller vivencial</p>
        <h1 className="mt-6 text-6xl leading-[0.95] text-primary md:text-8xl">
          Taller de <br />
          <em className="text-gold">Breathwork</em>
        </h1>
        <p className="mt-8 text-xl text-primary md:text-2xl font-serif italic">Respira. Suelta. Vuelve a ti.</p>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground leading-relaxed">
          Una experiencia de respiración consciente para liberar tensión, calmar la mente y reconectar con tu cuerpo y tus emociones.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">Plazas limitadas · Reserva tu plaza por WhatsApp</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Btn href={WHATSAPP}>Consultar próximos talleres</Btn>
          <Btn href="#que-es" variant="ghost">Quiero saber más</Btn>
        </div>
      </section>

      <section id="que-es" className="bg-secondary/60 px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="kicker">Qué es el taller</p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">Una mañana para <em className="text-gold">volver a respirar</em></h2>
          <div className="mt-8 space-y-5 leading-relaxed text-muted-foreground">
            <p>Respiramos unas 20.000 veces al día, casi siempre sin darnos cuenta. Cuando aprendemos a hacerlo con conciencia, la respiración se convierte en una puerta hacia la calma y la claridad.</p>
            <p>Durante cuatro horas te guiaremos a través de técnicas de breathwork, movimiento, música y escritura para que puedas soltar lo que pesa y escucharte.</p>
            <p className="font-serif text-2xl italic text-primary">No se explica. Se respira.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <p className="kicker">Para ti</p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">Este taller es para ti si…</h2>
        </div>
        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {forYou.map((t) => (
            <li key={t} className="flex items-center gap-4 rounded-2xl border border-border bg-card px-5 py-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">✓</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-deep px-6 py-20 text-deep-foreground">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="kicker">La experiencia</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Lo que vivirás</h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-deep-foreground/15 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(([t, d], i) => (
              <div key={t} className="bg-deep p-8">
                <p className="kicker">— {String(i + 1).padStart(2, "0")} —</p>
                <h3 className="mt-3 text-2xl">{t}</h3>
                <p className="mt-2 text-sm text-deep-foreground/70">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20 text-center">
        <p className="kicker">El viaje</p>
        <h2 className="mt-4 text-4xl text-primary md:text-5xl">El ritmo de la <em className="text-gold">respiración</em></h2>
        <p className="mx-auto mt-6 max-w-xl font-serif text-xl italic leading-relaxed text-muted-foreground">
          Vivimos en automático. Respiramos corto, deprisa, desde el pecho. En este taller te invitamos a recordar cómo se respira de verdad.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {phases.map(([a, b]) => (
            <div key={a} className="rounded-full border border-gold/50 py-8">
              <h4 className="text-2xl text-primary">{a}</h4>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-deep px-6 py-20 text-deep-foreground">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-4xl md:text-5xl">Información del evento</h2>
          <dl className="mt-10 grid gap-px overflow-hidden rounded-3xl bg-deep-foreground/15 sm:grid-cols-2">
            <div className="bg-deep p-6">
              <dt className="kicker">Fecha y hora</dt>
              <dd className="mt-2 font-serif text-2xl">
                {EVENT.date}
                <span className="mt-1 block text-lg text-deep-foreground/80">{EVENT.time}</span>
              </dd>
            </div>
            <div className="bg-deep p-6">
              <dt className="kicker">Facilitadora</dt>
              <dd className="mt-2 font-serif text-2xl">{EVENT.facilitator}</dd>
            </div>

            <div className="bg-deep p-6 sm:col-span-2">
              <dt className="kicker">Lugar</dt>
              <dd className="mt-2 font-serif text-2xl">{EVENT.place}</dd>
            </div>
            <div className="bg-deep p-6 sm:col-span-2">
              <dt className="kicker">Ubicación</dt>
              <dd className="mt-2 font-serif text-2xl">
                {EVENT.location}
                <span className="mt-1 block text-lg text-deep-foreground/80">{EVENT.address}</span>
              </dd>
            </div>



            <div className="bg-deep p-6 sm:col-span-2">
              <dt className="kicker">Precio</dt>
              <dd className="mt-2 font-serif text-2xl">{EVENT.price}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-secondary/60 px-6 py-20 text-center">
        <p className="kicker">Próximos talleres</p>
        <h2 className="mx-auto mt-4 max-w-xl text-4xl text-primary md:text-5xl">Reserva tu lugar en el próximo encuentro</h2>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">Plazas limitadas para cuidar cada detalle. Escríbenos y te confirmamos tu plaza.</p>
        <div className="mt-8">
          <Btn href={WHATSAPP}>Escríbenos por WhatsApp</Btn>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-20">
        <div className="text-center">
          <p className="kicker">Resuelve tus dudas</p>
          <h2 className="mt-4 text-4xl text-primary md:text-5xl">Preguntas frecuentes</h2>
          <p className="mt-4 text-muted-foreground">¿Tienes alguna duda antes de reservar tu plaza? Despliega las respuestas a continuación.</p>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-2xl border border-border bg-card px-5 py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-primary">
                {q}
                <span className="text-gold transition-transform group-open:rotate-45">+</span>
              </summary>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {a.map((p) => <p key={p}>{p}</p>)}
              </div>
            </details>
          ))}
        </div>
      </section>

      <footer className="py-10 text-center text-xs tracking-widest text-muted-foreground uppercase">Taller de Breathwork · Respira y vuelve a ti</footer>
    </main>
  );
}
