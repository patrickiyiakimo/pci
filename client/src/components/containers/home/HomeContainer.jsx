import Hero from "@/components/home/Hero";
import IntroStats from "@/components/home/IntroStats";
import CaseStudies from "@/components/home/CaseStudies";
// import ClientMarquee from "@/components/home/ClientMarquee";
import WhatWeDo from "@/components/home/WhatWeDo";
import TechStack from "@/components/home/TechStack";
import Awards from "@/components/home/Awards";
import Testimonials from "@/components/home/Testimonials";
import LetsTalk from "@/components/home/LetsTalk";

export default function HomeContainer() {
  return (
    <>
      <Hero />
      <IntroStats />
      <CaseStudies />
      {/* <ClientMarquee /> */}
      <WhatWeDo />
      <TechStack />
      <Awards />
      <Testimonials />
      <LetsTalk />
    </>
  );
}