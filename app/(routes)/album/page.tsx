import Image from "next/image";

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
  }
];

const AlbumPage = () => {
  return (
    <div className="md:columns-3 gap-4 max-w-screen-lg mx-auto my-10 md:my-24">
      {images.map((item) => (
        <Image
          key={item.id}
          src={item.src}
          alt=""
          width={1000}
          height={1000}
          className="aspect-auto w-full pb-4"
        />
      ))}
    </div>
  );
};

export default AlbumPage;
