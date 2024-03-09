import Image from "next/image";

const BookingPage = () => {
  return (
    <div className="pb-10">
      <div className="md:grid md:grid-cols-2 items-center h-full md:mt-20">
        <Image
          src="/bg.svg"
          alt=""
          width={1000}
          height={1000}
          className="object-cover my-10"
        />

        <div className="md:ml-20 flex flex-col items-start gap-4">
          <h2 className="text-xl uppercase font-semibold mb-4">Boka idag</h2>
          <input
            type="text"
            placeholder="Namn eller smeknamn"
            className="border py-2 px-4 w-72 max-md:w-full"
          />
          <input
            type="text"
            placeholder="Emailaddress"
            className="border py-2 px-4 w-72 max-md:w-full"
          />
          <textarea
            placeholder="Skriv ett meddelande"
            className="border py-2 px-4 w-72 max-md:w-full"
          />
          <div className="text-semibold uppercase text-xl border border-black rounded-full py-2 px-4 bg-black text-white hover:bg-white hover:text-black cursor-pointer">
            Skicka
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
