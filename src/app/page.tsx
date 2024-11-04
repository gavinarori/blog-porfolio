import Container from "@/components/Container";
import HeroSection from "@/components/herosection";
import { MainNav } from "@/components/main-nav";

export default function Home() {
  return (
    <Container>
      <MainNav />
      <main className="">
        <HeroSection/>
      </main>
    </Container>
  );
}
