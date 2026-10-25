import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Motto } from "@/components/Motto";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[1040px] px-5 md:px-8">
      <Header />
      <Hero />
      <About />
      <Motto />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}
