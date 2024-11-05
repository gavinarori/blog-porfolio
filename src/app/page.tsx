import Container from "@/components/Container";
import HeroSection from "@/components/herosection";
import { MainNav } from "@/components/main-nav";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="">
        <HeroSection/>
        <Skills />
      </main>
    </Container>
  );
}
