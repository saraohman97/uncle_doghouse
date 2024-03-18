import Image from "next/image";
import { BiExpand, BiTrash } from "react-icons/bi";

const images = [
  {
    id: 1,
    src: "/bg.svg",
  },
  {
    id: 2,
    src: "/logo.jpg",
  },
  {
    id: 3,
    src: "/bg.svg",
  },
  {
    id: 4,
    src: "/logo.jpg",
  },
  {
    id: 5,
    src: "/logo.jpg",
  },
  {
    id: 6,
    src: "/bg.svg",
  },
  {
    id: 7,
    src: "/logo.jpg",
  },
  {
    id: 8,
    src: "/bg.svg",
  },
];

const AdminPage = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div className="my-10">
          <div className="flex justify-between items-end">
            <div className="text-2xl font-extralight uppercase text-neutral-400">
              Bilder
            </div>

            <div className="bg-black py-2 px-4 rounded font-semibold hover:bg-neutral-800 text-white mb-4 cursor-pointer">
              Ladda upp bild
            </div>
          </div>

          <div className="md:columns-3 gap-4 border p-4 rounded">
            {images.map((item) => (
              <div key={item.id} className="group relative">
                <Image
                  src={item.src}
                  alt=""
                  width={1000}
                  height={1000}
                  className="aspect-auto w-full pb-4"
                />
                <div className="absolute opacity-0 group-hover:opacity-100 bottom-0 right-0 p-4 pb-8 space-y-2 transition-opacity duration-300">
                  <div className="bg-white/70 hover:bg-white rounded-full p-2 border-2 flex items-center justify-center cursor-pointer shadow">
                    <BiExpand size={15} />
                  </div>
                  <div className="bg-white/70 hover:bg-white rounded-full p-2 border-2 flex items-center justify-center cursor-pointer shadow">
                    <BiTrash size={15} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
