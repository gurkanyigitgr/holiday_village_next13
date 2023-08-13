import prisma from "@/app/libs/prismadb";
import Image from "next/image";
const Page = async () => {
  const listings = await prisma.listing.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div>
      {listings?.map((list, i) => (
        <div>
          <Image src={list.imageSrc} width={200} height={200} alt="" />
          <div>
            {list.category} - {list.locationValue}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
