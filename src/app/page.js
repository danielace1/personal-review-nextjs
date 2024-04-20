import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header className="h-64 bg-blue-300 py-20 text-center relative border-b-4 border-blue-500">
        <div>
          <h1 className="font-bold text-3xl text-white">
            Hi, I&apos;m Sudharsan
          </h1>
        </div>
        <div className="">
          <Image
            src={"https://github.com/danielace1.png"}
            width="200"
            height="200"
            alt="Sudharsan"
            className="object-cover rounded-full mx-auto absolute inset-x-0 top-36 shadow-2xl"
          />
        </div>
      </header>

      <main className="my-10 bg-white"></main>
    </div>
  );
}
