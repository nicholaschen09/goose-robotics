import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#ede8dd] text-[#2b241f]">
      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-10 pt-6">
        <header className="flex flex-wrap items-center gap-4 rounded-2xl border border-[#d2ccc2] bg-[#ece9e1] px-5 py-4 text-[#2b241f]">
          <div className="flex items-center gap-3">
            <Image
              src="/goose.png"
              alt="Goose Robotics logo"
              width={36}
              height={36}
              className="rounded-full object-cover"
              priority
            />
            <p className="text-sm font-semibold tracking-[0.14em] text-[#6e6559]">
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
              className="rounded-2xl bg-[#2b241f] px-6 py-3 text-base font-semibold text-[#f7f3ec]"
            >
              Join the Team
            </a>
          </nav>
        </header>

        <main id="home" className="flex flex-col items-center py-24 text-center">
          <h1 className="mt-3 text-5xl font-semibold leading-tight md:text-7xl">
            Building practical robots for real work.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-[#5b5247]">
            We design and deploy robotics products that help teams move faster,
            safer, and more reliably.
          </p>
        </main>

      </div>
    </div>
  );
}
