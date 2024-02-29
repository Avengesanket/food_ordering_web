import Image from "next/image";

export default function Hero() {
  return (
    <div className="my-5 flex items-center justify-between mx-auto gap-3 w-4/5">
      <div className="leading-8 drop-shadow-sm py-10">
        <h1 className="text-3xl font-bold text-white leading-relaxed">
          <span className="text-amber-300 text-5xl">Hungry?</span>
          <br /> We've Got You Covered!
        </h1>
        <p className="text-2xl font-semibold text-white leading-relaxed">
          <span className="text-orange-400 text-3xl drop-shadow">Food</span>{" "}
          that Speaks to Your{" "}
          <span className="text-orange-400 drop-shadow">Heart</span>, and Your
          Palate.
        </p>
        <div className="flex gap-6 mt-4">
          <button className="bg-orange-400 text-white border-white hover:bg-white hover:border-2 hover:text-orange-400">
            ORDER NOW
          </button>
          <button className="flex gap-2 items-center text-white hover:text-amber-300">
            Learn more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div>
        <Image
          src="/food.jpg"
          alt="Food Image"
          width={450}
          height={500}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
