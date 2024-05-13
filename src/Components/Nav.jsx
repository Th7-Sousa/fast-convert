import Image from "next/image";

export default function Nav() {
  return (
    <header className="w-full flex px-6 bg-mainPurple-100
    max-sm:px-2
    ">
      <nav className="w-full flex justify-center py-4">
        <Image
          src="/Images/logo.svg"
          alt="Logotipo Fast Convert"
          width={170}
          height={170}
          priority
        />
      </nav>
    </header>
  )
}

