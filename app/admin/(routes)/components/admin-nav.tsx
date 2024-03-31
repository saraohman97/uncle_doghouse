'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RxAvatar } from "react-icons/rx";

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <div className="pt-10">
      <Link href="/" className="text-2xl text-black w-fit mt-10 p-4">
        UNCLE DOGHOUSE
      </Link>
      <hr className="mt-10" />
      <div className="flex items-center justify-between">
        <div className="p-4 gap-4 flex">
          <Link href='/admin/bokning' className={pathname === '/admin/bokning' ? '' : 'text-neutral-400'}>Kalender & bokningar</Link>
          <Link href='/admin/album' className={pathname === '/admin/album' ? '' : 'text-neutral-400'}>Fotoalbum</Link>
        </div>
        {/* <div className="bg-black rounded-full text-white w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-neutral-800 overflow-hidden">
          <Image
          src='/logo.jpg'
          alt=""
          width={500}
          height={500}
          className="h-full w-full object-cover p-1"
          />
        </div> */}
        <RxAvatar size={25} />
      </div>
    </div>
  );
};

export default AdminNav;
