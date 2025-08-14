import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Contact from "@/components/contact/Contact";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home"><Hero /></div>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <TextAnimate className="dm-sans-regular text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight" duration={600}>
            Every project is a portal. A single idea bloomed into a digital realm, where dreams & possibilities intertwine.
          </TextAnimate>
        </div>
      </section>
      <div id="services"><Services /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}
