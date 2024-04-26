import Image from "next/image";

export default function Nav() {
  return (
    <header className="w-full flex px-6 bg-mainPurple-100
    max-sm:px-2
    ">
      <nav className="w-full flex max-sm:justify-center py-4">
        <Image
          src="/Images/logo2.svg"
          alt="Logotipo Fast Convert"
          width={170}
          height={100}
          priority
        />
      </nav>
    </header>
  )
}
