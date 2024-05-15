import Image from "next/image";
import Nav from "@/Components/Nav";
import TagList from "@/Components/TagList";
import ContainerDefault from "@/Components/ContainerDefault";
import Aside from "@/Components/Aside";
import Footer from "@/Components/Footer";
import ConvertMain from "@/Components/ConvertMain";
import ConvertContainer from "@/Components/ConvertContainer";

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        <ContainerDefault>
          {/* <TagList /> */}
          <ConvertContainer />
          <Aside />
        </ContainerDefault>

      </main>

      <Footer />

    </>
  );
}
