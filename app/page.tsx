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
      <button
        type="button"
        className="absolute left-2 top-2 z-20 transition-opacity duration-200 hover:opacity-80"
        aria-label="Join us"
      >
        <Image
          src="/join-us.png"
          alt=""
          width={150}
          height={35}
          className="h-auto w-[150px] object-contain"
          priority
        />
      </button>
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-10 pt-1">
        <div className="flex justify-center">
          <Image
            src="/goose-robotics.png"
            alt="Goose Robotics"
            width={250}
            height={80}
            className="h-auto w-full max-w-[250px] object-contain"
            priority
          />
        </div>

      </div>
    </div>
  );
}
