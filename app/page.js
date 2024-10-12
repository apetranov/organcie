import Image from "next/image";

export default function Home() {
  return (
    <div className="flex md:h-screen justify-center items-center">
      <div>
        <h1 className="text-black font-bold text-5xl md:text-7xl">
          Orga<span className="text-indigo-600">nice</span>
        </h1>
      </div>
    </div>
  );
}
