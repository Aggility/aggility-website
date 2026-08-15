import { ClosingContactSection } from "@/components/sections/contact-form";
import { Faq } from "@/components/sections/faq";
import { Gobtech } from "@/components/sections/gobtech";
import { Hero } from "@/components/sections/hero";
import { ProblemMirror } from "@/components/sections/problem-mirror";
import { Services } from "@/components/sections/services";
import { SocialProof } from "@/components/sections/social-proof";
import { WhyAggility } from "@/components/sections/why-aggility";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemMirror />
      <Services />
      <WhyAggility />
      <Gobtech />
      <SocialProof />
      <Faq />
      <ClosingContactSection />
    </>
  );
}
