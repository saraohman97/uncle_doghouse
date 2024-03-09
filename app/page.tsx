import Image from "next/image";
import Link from "next/link";

const OnePage = () => {
  return (
    <div className="h-screen">
      <Image
        src="/bg.svg"
        alt=""
        width={1000}
        height={1000}
        className="object-cover h-2/3 w-screen my-10 border-y-2 border-black"
      />

      <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto items-center">
        <div className="text-5xl uppercase mx-auto flex-1 flex justify-center text-center">
          Spelningar runt <br /> i Sverige, <br /> år 2024
        </div>
        <div className="w-full flex flex-col items-center justify-center flex-1">
          <div className="text-2xl font-semibold mt-8">2024</div>
          Lördag 16 mars: Release Party, Global Living Västerås. <br />
          Lördag 8 april: Bierkeller Västerås 20:45
          <div className="flex gap-6 my-8">
            <Link
              href="/tours"
              className="text-sm border-b font-extralight text-neutral-700 border-b-neutral-600 w-fit hover:text-red-500 hover:border-b-red-500"
            >
              {"<--"}Tours
            </Link>
            <Link
              href="/boka"
              className="text-sm border-b font-extralight text-neutral-700 border-b-neutral-600 w-fit hover:text-red-500 hover:border-b-red-500"
            >
              Boka spelning{"-->"}
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="max-w-screen-lg mx-auto grid grid-cols-2 items-center gap-10 my-20">
        <Image src="/cd.webp" width={600} height={600} alt="" />
        <div className="">
          <div className="text-2xl font-semibold my-8">2024</div>
          Lördag 16 mars: Release Party, Global Living Västerås. <br /> <br />
          Lördag 8 april: Bierkeller Västerås 20:45
          <div className="text-sm my-8 border-b font-extralight text-neutral-700 border-b-neutral-600 w-fit">
            Boka spelning -{">"}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OnePage;
