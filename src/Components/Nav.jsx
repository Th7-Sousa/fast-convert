import Image from "next/image";

export default function Nav() {
  return (
    <header className="w-full flex px-32 bg-mainPurple-100
    max-sm:px-2
    ">
      <nav className="w-full flex max-sm:justify-center">
        <Image
          src="/Images/logo.svg"
          alt="Logotipo Fast Convert"
          width={120}
          height={120}
          priority
        />
      </nav>
    </header>
  )
}