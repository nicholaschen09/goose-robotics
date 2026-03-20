import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[#2b241f]">
      <Image
        src="/humanoid-img.png"
        alt="Humanoid background"
        fill
        className="object-contain blur-[14px]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-[#ede8dd]/52" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-10 pt-6">
        <header className="flex flex-wrap items-center gap-4 border border-[#d2ccc2] bg-[#ece9e1] px-5 py-4 text-[#2b241f]">
          <div className="flex items-center gap-3">
            <Image
              src="/goose.png"
              alt="Goose Robotics logo"
              width={36}
              height={36}
              className="object-cover"
              priority
            />
            <p className="text-sm font-semibold tracking-[0.14em]">
              GOOSE ROBOTICS
            </p>
          </div>
          <nav className="ml-auto flex flex-wrap items-center gap-6 text-sm font-semibold">
            <a href="#about" className="hover:opacity-75">
              Projects
            </a>
            <a href="#updates" className="hover:opacity-75">
              Blog
            </a>
            <a href="#order" className="hover:opacity-75">
              Contact
            </a>
            <a
              href="https://www.linkedin.com/company/gooserobotics/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-75"
            >
              Docs ↗
            </a>
            <a
              href="#careers"
              className="border border-[#2b241f] px-6 py-3 text-base font-semibold"
            >
              Join the Team
            </a>
          </nav>
        </header>

        <main id="home" className="grid flex-1 place-items-center py-12 text-center">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">humanoids.</h1>
        </main>

      </div>
    </div>
  );
}
