import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

export default function Hero() {
  return (
    <div className=" relative isolate overflow-hidden pt-24 pb-5 sm:pt-32 sm:pb-12lg:overflow-visible lg:px-0 2xl:translate-x-24">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7  font-semibold text-blue-500">
                Streamer No.1 Dunia
              </h2>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-pretty text-white sm:text-5xl">
                NiceGuy Sound Board
              </h1>
              <p className="mt-6 text-xl/8 text-gray-300">
                Buat para streamer laper yang pengen naik kereta Bigmo via
                Soundboard telah kami sediakan aplikasi yang sudah sepaket
                dengan sound2 yang sering digunakan oleh rektor kita BIGMO.
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="/image/image.png"
            className="w-3xl max-w-100    rounded-xl bg-gray-800 shadow-xl ring-1 ring-white/10 sm:w-228"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4"></div>
        </div>
      </div>
    </div>
  );
}
