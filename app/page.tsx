import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[#2b241f]">
      <Image
        src="/background-image.jpg"
        alt="Background"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <details className="absolute left-2 top-2 z-30 md:hidden">
        <summary className="cursor-pointer list-none text-3xl leading-none text-white">
          <span aria-hidden="true">☰</span>
          <span className="sr-only">Open menu</span>
        </summary>
        <div className="mt-2 min-w-[140px] rounded-md bg-black/70 p-3 backdrop-blur-sm">
          <a
            href="https://www.linkedin.com/company/gooserobotics/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Join us
          </a>
        </div>
      </details>

      <a
        href="https://www.linkedin.com/company/gooserobotics/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-2 top-2 z-20 hidden origin-top-left transition-all duration-200 hover:scale-105 hover:opacity-80 md:block"
        aria-label="Join us"
      >
        <Image
          src="/join-us.png"
          alt=""
          width={150}
          height={35}
          className="h-auto w-[150px] object-contain brightness-0 invert"
          priority
        />
      </a>
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-10 pt-1">
        <div className="flex justify-center">
          <Image
            src="/goose-robotics.png"
            alt="Goose Robotics"
            width={250}
            height={80}
            className="h-auto w-full max-w-[250px] object-contain brightness-0 invert"
            priority
          />
        </div>

      </div>
    </div>
  );
}
