import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <>
      <header className="pt-4 fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b border-base-200 backdrop-blur-[12px] [--animation-delay:600ms]">
        <div className="container flex h-[3.5rem] items-center justify-center">
          <Link
            className="flex items-center text-md text-black"
            href="https://liamellis.dev"
            target="_blank"
          >
            <Image
              src="/alt-logo.png"
              alt="Anotherwrapper Logo"
              width={500}
              height={494}
              className="w-8 ml-1"
            />
            <span className="ml-2">Digital Mischief Group</span>
          </Link>
        </div>
      </header>
    </>
  )
}
