import { ImageSlideshow } from "@/components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex flex-col gap-12 my-12 mx-auto w-[90%] max-w-[75rem] md:flex-row">
        <div className="w-auto h-[25rem] md:w-[40rem]">
          <ImageSlideshow />
        </div>
        <div className="flex flex-col justify-around">
          <div className="text-[#ddd6cb] text-2xl">
            <h1 className="text-4xl font-bold tracking-[0.15rem] uppercase bg-gradient-to-r from-orange-500 to-yellow-300 bg-clip-text text-transparent ">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p className="my-4">Taste & share food from all over the city.</p>
          </div>
          <div className="flex text-2xl	gap-4">
            <Link
              href="/community"
              className="inline-block	mt-4 py-2 px-4 rounded-lg decoration bg-transparent font-normal text-[#ff9b05] pl-0 hover:bg-transparent hover:text-[#f9b241] active:bg-transparent active:text-[#f9b241]"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className="inline-block	 mt-4 py-2 px-4 rounded-lg bg-gradient-to-r from-red-500 to-yellow-500 text-white font-bold decoration hover:bg-gradient-to-r hover:from-orange-600 hover:to-yellow-400 active:bg-gradient-to-r active:from-orange-600 active:to-yellow-400"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex flex-col items-center text-gray-300 text-[1.5rem] w-[90%] max-w-[50rem] mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold mt-16 mb-8">How it works</h2>
          <p className="text-base my-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-base my-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="lex flex-col items-center text-gray-300 text-[1.5rem] w-[90%] max-w-[50rem] mx-auto my-8 text-center">
          <h2 className="text-2xl font-bold mt-16 mb-8">Why NextLevel Food?</h2>
          <p className="text-base my-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-base my-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
