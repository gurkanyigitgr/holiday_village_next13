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
      <div className="bg-primarySecColor ">
        {listings?.map((list, i) => (
          <div className="container m-auto  mb-5 flex items-center justify-center">
            <div className=" flex p-2 flex-col items-center justify-center rounded-md ">
              <Image
                className="rounded-md"
                src={list.imageSrc}
                width={400}
                height={400}
                alt=""
              />
              <div className="text-white">
                {list.category} - {list.hotelName}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
