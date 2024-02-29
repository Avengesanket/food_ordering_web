import Image from "next/image";
import Cart from "../icons/Cart";
export default function MenuItems() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold drop-shadow-md bg-gradient-to-r from-green-50 to-green-200 text-transparent bg-clip-text text-center ">
          Our Trending Menu
        </h1>
      </div>
      <section className="grid grid-cols-3 gap-3 my-5 mx-auto w-4/5">
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <Image
            src="/burger.jpg"
            alt="Burger"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-2xl font-semibold mt-2">BURGER</h3>
          <p className="text-lg font-semibold text-gray-500">
            Bite into happiness with our mouthwatering burger creations.
          </p>
          <button className="mt-9 flex gap-3 items-center justify-center bg-orange-400 text-white px-6 py-3 border-white hover:bg-white hover:border-2 hover:text-orange-400">
            ADD TO CART
            <Cart />
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <Image
            src="/chicken_nugget.jpg"
            alt="Chicken Nuggets"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-2xl font-semibold mt-2">CHICKEN NUGGETS</h3>
          <p className="text-lg font-semibold text-gray-500">
            Indulge in crispy perfection with our golden chicken nuggets.
          </p>
          <button className="mt-9 flex gap-3 items-center justify-center bg-orange-400 text-white px-6 py-3 border-white hover:bg-white hover:border-2 hover:text-orange-400">
            ADD TO CART
            <Cart />
          </button>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <Image
            src="/french_fries.jpg"
            alt="French Fries"
            width={300}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-2xl font-semibold mt-2">FRENCH FRIES</h3>
          <p className="text-lg font-semibold text-gray-500">
            Craving something crispy and delicious? Dive into our mouthwatering
            French fries.
          </p>
          <button className="mt-2 flex gap-3 items-center justify-center bg-orange-400 text-white px-6 py-3 border-white hover:bg-white hover:border-2 hover:text-orange-400">
            ADD TO CART
            <Cart />
          </button>
        </div>
      </section>
    </>
  );
}
