import prisma from "@/app/libs/prismadb";
import { User } from "@prisma/client";
import Image from "next/image";
const Page = async () => {
  const listings = await prisma.listing.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <div className="bg-primarySecColor  min-h-screen -z-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {listings?.map((list, i) => (
              <div
                key={i}
                className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
              >
                <div className="bg-white rounded-lg  p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer">
                  <Image
                    className="rounded-md block h-auto w-full"
                    src={list.imageSrc}
                    width={200}
                    height={200}
                    alt=""
                  />
                  <div className="text-black font-semibold flex items-center justify-between leading-tight p-2 md:p-4">
                    <div>
                      {list.category} - {list.hotelName}
                    </div>
                    <div className="text-gray-500 text-xs">
                      Capacity : {list.roomCount}
                    </div>
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

export default Page;
