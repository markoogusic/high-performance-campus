import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Location } from "@/components/sections/Location";
import { Team } from "@/components/sections/Team";
import { IndividualSessions } from "@/components/sections/IndividualSessions";
import { GymTraining } from "@/components/sections/GymTraining";
import { Technology } from "@/components/sections/Technology";
import { DailySchedule } from "@/components/sections/DailySchedule";
import { Gallery } from "@/components/sections/Gallery";
import { Registration } from "@/components/sections/Registration";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Location />
        <Team />
        <IndividualSessions />
        <GymTraining />
        <Technology />
        <DailySchedule />
        <Gallery />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
