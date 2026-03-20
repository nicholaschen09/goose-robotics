import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[#2b241f]">
      <Image
        src="/humanoid-img.png"
        alt="Humanoid background"
        fill
        className="object-contain blur-[22px]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-[#ede8dd]/52" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-10 pt-6">
        <div className="flex justify-center">
          <Image
            src="/goose.png"
            alt="Goose Robotics"
            width={520}
            height={165}
            className="h-auto w-full max-w-[520px] object-contain"
            priority
          />
        </div>

        <main id="home" className="grid flex-1 place-items-center py-12 text-center">
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl">humanoids.</h1>
        </main>

      </div>
    </div>
  );
}
