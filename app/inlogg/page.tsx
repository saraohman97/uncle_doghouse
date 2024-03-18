import Image from "next/image";

const Login = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black/70 relative">
      <Image
        src="/bg.svg"
        alt=""
        height={500}
        width={500}
        className="absolute inset-0 -z-10 object-cover w-full h-full"
      />
      <div className="border rounded-xl shadow-xl bg-white p-10 text-center">
        <div className="uppercase font-extralight mb-10 text-center underline underline-offset-4">
          Uncle doghouse
        </div>
        {/* <div className="bg-black py-6 rounded-t-xl">
          <Image
            src="/logo.jpg"
            alt=""
            height={500}
            width={500}
            className="object-contain h-20"
          />
        </div> */}

        <div className="flex gap-4 items-center justify-between">
          <div className="text-sm mb-4">Användarnamn</div>
          <div className="border rounded h-10 w-72 mb-6 mt-2" />
        </div>
        <div className="flex gap-4 items-center justify-between">
          <div className="text-sm mb-4">Lösenord</div>
          <div className="border rounded h-10 w-72 mb-6 mt-2" />
        </div>

        <div className="w-full flex justify-between items-end">
          <div className="mt-6 text-sm hover:underline underline-offset-4 cursor-pointer w-fit">
            {"<--"} Gå tillbaka till hemsidan
          </div>

          <div className="bg-black py-2 px-4 rounded font-semibold hover:bg-neutral-800 text-white cursor-pointer text-center text-sm w-fit">
            Logga in
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
