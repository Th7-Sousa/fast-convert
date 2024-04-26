import Image from "next/image";
import Nav from "@/Components/Nav";
import UnitTag from "@/Components/UnitTag";
import SectionTag from "@/Components/SectionTags";
import Container from "@/Components/Container";
import Aside from "@/Components/Aside";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <Container>
          <SectionTag />
          <Aside />
        </Container>

      </main>

      <Footer />

    </>
  );
}
