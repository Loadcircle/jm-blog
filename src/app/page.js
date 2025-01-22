import Image from "next/image";
import Link from "next/link";
import { Toaster } from 'sonner'

export default function Home() {
  return (
    <>
      <Toaster closeButton />
      <main className="">
        <h1>Hello World</h1>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        
        <Link href="/admin/login" className="text-white hover:text-blue-200">Login</Link>
      </main>
      <footer className="">

      </footer>
    </>
  );
}
