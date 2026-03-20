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
        className="absolute left-6 top-6 z-20 text-lg text-[#2b241f] transition-opacity duration-200 hover:opacity-80"
        style={{ fontFamily: '"A Day Without Sun Text Regular", ui-sans-serif, system-ui' }}
      >
        Join us <span aria-hidden="true">&gt;</span>
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
