import Image from "next/image";
import Nav from "@/Components/Nav";
import UnitTag from "@/Components/UnitTag";
import SectionTag from "@/Components/SectionTags";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">

      <Nav />

      <SectionTag />

    </main>
  );
}
