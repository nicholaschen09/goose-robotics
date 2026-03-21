import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden text-[#2b241f]">
      <Image
        src="/background-image.jpg"
        alt="Background"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <a
        href="https://www.linkedin.com/company/gooserobotics/posts/?feedView=all"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 left-1/2 z-20 -translate-x-1/2 origin-center transition-opacity duration-200 hover:opacity-100 md:left-2 md:top-2 md:translate-x-0 md:origin-bottom-left"
        aria-label="Join us"
      >
        <Image
          src="/join-us.png"
          alt=""
          width={150}
          height={35}
          className="h-auto w-[110px] object-contain brightness-0 invert transition-all duration-200 hover:brightness-110 sm:w-[130px] md:w-[150px]"
          priority
        />
      </a>
      <div className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col px-6 pb-10 pt-1">
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
