import { Beyond } from "@/components/Beyond";
import { CatchingUp } from "@/components/CatchingUp";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Motto } from "@/components/Motto";
import { Projects } from "@/components/Projects";
import { Tools } from "@/components/Tools";

export default function Home() {
  return (
    // The project carousel reaches past the column; clip it at the screen edge.
    <div className="overflow-x-clip">
      <main className="mx-auto w-full max-w-[1040px] px-5 md:px-8">
        <Header />
        <Hero />
        <Motto />
        <Experience />
        <Projects />
        <Tools />
        <Beyond />
        <CatchingUp />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
