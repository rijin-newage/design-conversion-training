import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto">
      <header className="flex py-8">
        <div className="flex-none">
          <Link href={"#"}>
            <Image
              src={"/static/images/Group 39708.png"}
              width={185}
              height={70}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="flex-grow pt-6">
          <ul className="grid grid-flow-col justify-center gap-8 content-end">
            <li className="inline-block">
              <Link href="#">Home</Link>
            </li>
            <li className="inline-block">
              <Link href="#">About</Link>
            </li>
            <li className="inline-block">
              <Link href="#">Places</Link>
            </li>
            <li className="inline-block">
              <Link href="#">Careers</Link>
            </li>
            <li className="inline-block">
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="flex-none pt-2">
          <button className="bg-primary px-6 py-2 rounded-full text-white">
            Connect
          </button>
        </div>
      </header>
      <section className="bg-banner rounded-xl mx-auto mb-24">
        <div className="grid place-content-center py-24">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-center text-white mb-4">
              TRAVEL TO EXPLORE
            </div>
            <p className="max-w-[480px] text-center text-white">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
              Eiusmod Tempor Incididunt Ut Labore Pretium Nibh Ipsum. Risus Sed
              Vulputate Odio Ut
            </p>
            <div className="flex bg-white shadow rounded-lg py-2 px-4 justify-between gap-4 mt-8 items-center">
              <div className="p-2">
                <h4 className="font-semibold">Where You Want to go</h4>
                <input
                  className="placeholder:text-sm"
                  placeholder="Search your location"
                />
              </div>
              <div className="border-l pl-8">
                <h4 className="font-semibold">Check In</h4>
                <input className="placeholder:text-sm" placeholder="Add Date" />
              </div>
              <div className="border-l pl-8">
                <h4 className="font-semibold">Check Out</h4>
                <input className="placeholder:text-sm" placeholder="Add Date" />
              </div>
              <div>
                <button className="bg-primary px-6 py-4 rounded text-white">
                  Explore Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="grid grid-cols-4 gap-12 mb-24">
        <div className="border shadow shadow-blue-100 rounded-lg flex flex-col p-4 cursor-pointer">
          <div className="grid w-24 h-24 bg-blue-50 rounded-lg mb-2 place-content-center">
            <Image
              src={"/static/images/Get Best Prices.svg"}
              width={54}
              height={68}
              alt=""
            />
          </div>
          <h3 className="text-lg font-bold mb-4">Get Best Prices</h3>
          <p>
            Pay through our application and save thousands and get amazing
            rewards
          </p>
        </div>
        <div className="border shadow shadow-blue-100 rounded-lg flex flex-col p-4 cursor-pointer">
          <div className="grid w-24 h-24 bg-blue-50 rounded-lg mb-2 place-content-center">
            <Image
              src={"/static/images/Covid Safe.svg"}
              width={54}
              height={68}
              alt=""
            />
          </div>
          <h3 className="text-lg font-bold mb-4">Covid Safe</h3>
          <p>
            Pay through our application and save thousands and get amazing
            rewards
          </p>
        </div>
        <div className="border shadow shadow-blue-100 rounded-lg flex flex-col p-4 cursor-pointer">
          <div className="grid w-24 h-24 bg-blue-50 rounded-lg mb-2 place-content-center">
            <Image
              src={"/static/images/Flexible Payment.svg"}
              width={54}
              height={68}
              alt=""
            />
          </div>
          <h3 className="text-lg font-bold mb-4">Flexible Payment</h3>
          <p>
            Pay through our application and save thousands and get amazing
            rewards
          </p>
        </div>
        <div className="border shadow shadow-blue-100 rounded-lg flex flex-col p-4 cursor-pointer">
          <div className="grid w-24 h-24 bg-blue-50 rounded-lg mb-2 place-content-center">
            <Image
              src={"/static/images/Nearby.svg"}
              width={54}
              height={68}
              alt=""
            />
          </div>
          <h3 className="text-lg font-bold mb-4">Find The Best Near You</h3>
          <p>
            Pay through our application and save thousands and get amazing
            rewards
          </p>
        </div>
      </section>
      <section className="bg-blue-50 py-20 px-12">
        <h1 className="text-center text-4xl font-bold mb-12">
          Recommended Destination
        </h1>
        <div>
          <div className="flex mx-auto w-fit text-xl font-semibold justify-center gap-16 mb-10 border-b">
            <div className="pb-2 cursor-pointer border-b-4 border-black">
              The Weekend Break
            </div>
            <div className="pb-2 cursor-pointer">The Package Holiday</div>
            <div className="pb-2 cursor-pointer">The Group Tour</div>
            <div className="pb-2 cursor-pointer">Long Term Slow Travel</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <div className="cursor-pointer">
            <Image
              src={"/static/images/Singapore.png"}
              width={560}
              height={400}
              alt=""
            />
            <div className="text-secondary px-2">
              <h3 className="font-bold text-lg">Singapore</h3>
              <p className="text-sm truncate mb-6">
                Singapore, officially the Republic of Singapore, is a sovereign
                island city-state in maritime Southeast Asia.
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_1135080.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_3720489.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Flight_2335320.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-sm">1000 Kms</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-right">₹ 38,800</div>
                  <div className="text-sm">Approx 2 night trip</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              src={"/static/images/Thailand.png"}
              width={560}
              height={400}
              alt=""
            />
            <div className="text-secondary px-2">
              <h3 className="font-bold text-lg">Thailand</h3>
              <p className="text-sm truncate mb-6">
                Thailand is a Southeast Asian country. It's known for tropical
                beaches, opulent royal palaces
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_1135080.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_3720489.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Flight_2335320.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-sm">1000 Kms</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-right">₹ 38,800</div>
                  <div className="text-sm">Approx 2 night trip</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              src={"/static/images/Paris.png"}
              width={560}
              height={400}
              alt=""
            />
            <div className="text-secondary px-2">
              <h3 className="font-bold text-lg">Paris</h3>
              <p className="text-sm truncate mb-6">
                Paris, France's capital, is a major European city and a global
                center for art, fashion, gastronomy and culture.
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_1135080.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_3720489.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Flight_2335320.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-sm">1000 Kms</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-right">₹ 38,800</div>
                  <div className="text-sm">Approx 2 night trip</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              src={"/static/images/New Zealand.png"}
              width={560}
              height={400}
              alt=""
            />
            <div className="text-secondary px-2">
              <h3 className="font-bold text-lg">New Zealand</h3>
              <p className="text-sm truncate mb-6">
                New Zealand is an island country in the southwestern Pacific
                Ocean. It consists of two main landmasses
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_1135080.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_3720489.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Flight_2335320.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-sm">1000 Kms</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-right">₹ 38,800</div>
                  <div className="text-sm">Approx 2 night trip</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              src={"/static/images/Bora Bora.png"}
              width={560}
              height={400}
              alt=""
            />
            <div className="text-secondary px-2">
              <h3 className="font-bold text-lg">Bora Bora</h3>
              <p className="text-sm truncate mb-6">
                Bora Bora is a small South Pacific island northwest of Tahiti in
                French Polynesia. Surrounded by sand
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_1135080.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_3720489.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Flight_2335320.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-sm">1000 Kms</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-right">₹ 38,800</div>
                  <div className="text-sm">Approx 2 night trip</div>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer">
            <Image
              src={"/static/images/London.png"}
              width={560}
              height={400}
              alt=""
            />
            <div className="text-secondary px-2">
              <h3 className="font-bold text-lg">London</h3>
              <p className="text-sm truncate mb-6">
                London, the capital of England and the United Kingdom, is a
                21st-century city with history stretching
              </p>
              <div className="flex justify-between">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_1135080.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Hotel_3720489.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                    <div className="w-6 h-6 bg-secondary rounded-full p-1">
                      <Image
                        src={"/static/images/noun_Flight_2335320.svg"}
                        className="w-4 h-4 text-center"
                        width={24}
                        height={24}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-sm">1000 Kms</div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="font-bold text-right">₹ 38,800</div>
                  <div className="text-sm">Approx 2 night trip</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-12">
        <h1 className="text-center text-4xl font-bold mb-12">Blogs</h1>
        <div className="grid grid-cols-7 gap-4">
          <div className="col-span-4 row-span-2 p-2 relative cursor-pointer">
            <Image
              src={"/static/images/luca-micheli-ruWkmt3nU58-unsplash.png"}
              width={960}
              height={580}
              alt=""
            />
            <h1 className="text-2xl font-bold text-white absolute top-[40%] left-[20%] w-[60%] text-center">
              The Ultimate Guide to Climbing Mount Kilimanjaro
            </h1>
          </div>
          <div className="col-span-3 relative cursor-pointer">
            <Image
              src={"/static/images/eva-darron-oCdVtGFeDC0-unsplash.png"}
              width={800}
              height={300}
              alt=""
            />
            <h1 className="text-xl font-bold text-white absolute top-[40%] left-[20%] w-[60%] text-center">
              12 Things I'd Tell Any New Traveler
            </h1>
          </div>
          <div className="col-span-3 relative cursor-pointer">
            <Image
              src={"/static/images/ibrahim-rifath-Y6tBl0pTe-g-unsplash.png"}
              width={800}
              height={300}
              alt=""
            />
            <h1 className="text-xl font-bold text-white absolute top-[40%] left-[20%] w-[60%] text-center">
              The Ultimate Packing List for Female Travelers
            </h1>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-20 px-12 bg-gradient-to-b from-white to-slate-50">
        <h1 className="text-center text-4xl font-bold mb-12">
          Happy Customers
        </h1>
        <div className="grid grid-cols-2 gap-16 pt-4">
          <div className="bg-white rounded-lg p-4">
            <div className="italic">
              &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ultricies mi eget mauris pharetra. Amet risus nullam eget felis
              eget nunc lobortis. Purus in massa tempor nec. Porta nibh
              venenatis cras sed.
            </div>
            <div className="flex pt-8 pb-4">
              <div className="w-16 h-16">
                <Image
                  src={"/static/images/avatar.png"}
                  width={100}
                  height={100}
                  alt="Avatar"
                  className=" rounded-full"
                />
              </div>
              <div className="flex flex-col pl-4 justify-center">
                <div className="font-semibold">Shalini Singh</div>
                <div className="text-gray-500">Project Manager</div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4">
            <div className="italic">
              &ldquo; Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ultricies mi eget mauris pharetra. Amet risus nullam eget felis
              eget nunc lobortis. Purus in massa tempor nec. Porta nibh
              venenatis cras sed.
            </div>
            <div className="flex pt-8 pb-4">
              <div className="w-16 h-16">
                <Image
                  src={"/static/images/avatar.png"}
                  width={100}
                  height={100}
                  alt="Avatar"
                  className=" rounded-full"
                />
              </div>
              <div className="flex flex-col pl-4 justify-center">
                <div className="font-semibold">Shalini Singh</div>
                <div className="text-gray-500">Project Manager</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-12">
        <div className="bg-blue-100 rounded-lg px-4 h-28 flex justify-between items-center">
          <div>Copyright © 2020 Travelo. All rights reserved</div>
          <div className="flex-grow">
            <ul className="grid grid-flow-col justify-center gap-8 content-end">
              <li className="inline-block">
                <Link href="#">Home</Link>
              </li>
              <li className="inline-block">
                <Link href="#">About</Link>
              </li>
              <li className="inline-block">
                <Link href="#">Places</Link>
              </li>
              <li className="inline-block">
                <Link href="#">Careers</Link>
              </li>
              <li className="inline-block">
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>
          <div className="flex gap-2">
            <Link href={"#"} className="cursor-pointer">
              <Image
                src={"/static/images/facebook.svg"}
                width={40}
                height={40}
                alt="Facebook"
              />
            </Link>
            <Link href={"#"} className="cursor-pointer">
              <Image
                src={"/static/images/LinkedIn.svg"}
                width={40}
                height={40}
                alt="LinkedIn"
              />
            </Link>
            <Link href={"#"} className="cursor-pointer">
              <Image
                src={"/static/images/Instagram.svg"}
                width={40}
                height={40}
                alt="Instagram"
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
