import Link from "next/link";
import { RiFacebookBoxFill, RiMailFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      {/* TOP NAVBAR */}
      <div className="bg-black w-full p-1 flex items-center justify-around uppercase text-sm text-white">
        <div>Nästa spelning: 1 mars 2024, kl 18 · Bierkeller, Västerås</div>
      </div>

      {/* HEADER */}
      <div className="text-center flex flex-col items-center">
        <Link href="/" className="text-2xl text-black w-fit mt-10 p-4">UNCLE DOGHOUSE</Link>

        <div className="space-x-4 uppercase text-black font-extralight flex flex-wrap justify-center items-center">
          <Link href="/">Hem</Link>
          <div>Musik</div>
          <Link href="/boka">Boka idag</Link>
          <Link href="/album">Album</Link>
          <div>
            <RiFacebookBoxFill />
          </div>
          <div>
            <RiMailFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
