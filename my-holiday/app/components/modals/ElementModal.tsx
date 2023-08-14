"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import { AiOutlineDelete } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "@/app/redux/hooks";
import { elementModalFunc } from "@/app/redux/modalSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { categories } from "../navbar/Categories";
import CategorySelect from "../listings/CategorySelect";
import CounterSelect from "../listings/CounterSelect";
import CountrySelect from "../listings/CountrySelect";
import { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NameOfHotel from "../listings/NameOfHotel";
const ElementModal = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      imageSrc: "",
      category: "",
      roomCount: 20,
      location: null,
      hotelName: "",
    },
  });
  const [imgsSrc, setImgsSrc] = useState([]);
  const router = useRouter();
  const { elementModal } = useAppSelector((state) => state.modal);
  const dispatch = useAppDispatch();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .post("api/listings", data)
      .then(() => {
        toast.success("success");
        router.refresh();
        reset();
        dispatch(elementModalFunc());
      })
      .catch((err) => {
        toast.error("error");
        console.log(err, "err");
      });
  };

  const category = watch("category");
  const imageSrc = watch("imageSrc");
  const roomCount = watch("roomCount");
  const location = watch("location");
  const hotelName = watch("hotelName");

  const customSetValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const imageSelectFunc = (e: any) => {
    for (const file of e.target.files) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImgsSrc((imgs): any => [...imgs, reader.result]);
        return customSetValue("imageSrc", reader.result);
      };
      reader.onerror = () => {
        console.log(reader.error);
      };
    }
  };
  const handleDeleteImage = (index: any) => {
    const newImgsSrc = [...imgsSrc];
    newImgsSrc.splice(index, 1);
    setImgsSrc(newImgsSrc);
    if (newImgsSrc.length === 0) {
      customSetValue("imageSrc", "");
    }
  };
  const isImagesUploaded = imgsSrc.length > 0;
  const deleteButton = (
    <button
      className={`flex w-full justify-center mt-10 cursor-pointer ${
        isImagesUploaded ? "block" : "hidden"
      }`}
      onClick={() => handleDeleteImage(0)}
    >
      <AiOutlineDelete size={30} />
    </button>
  );

  const bodyElement = (
    <div className="modal-content max-h-[50vh]  overflow-y-auto p-4 bg-secondaryColor rounded-md">
      <div className="flex items-center justify-center my-5 space-x-10">
        {categories.map((cat, i) => (
          <CategorySelect
            key={i}
            name={cat.name}
            icon={cat.icon}
            onClick={(category) => customSetValue("category", category)}
            selected={category == cat.name}
          />
        ))}
      </div>
      <div>
        <NameOfHotel
          value={hotelName}
          onSubmit={(value) => {
            customSetValue("hotelName", value);
          }}
        />
      </div>

      <div className="flex items-center justify-center mb-5">
        <CountrySelect
          value={location}
          onChange={(value) => {
            customSetValue("location", value);
          }}
        />
      </div>
      <div>
        <CounterSelect
          title="Capacity of Guest"
          value={roomCount}
          onChange={(value) => {
            customSetValue("roomCount", value);
          }}
        />
      </div>
      <div className="m-5 rounded-md ">
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showArrows={true}
        >
          {imgsSrc.map((src, index) => (
            <div key={index}>
              <Image
                className="rounded-md  h-[300px] object-fit"
                src={src}
                width={500}
                height={100}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </Carousel>
      </div>
      {deleteButton}

      <div>
        <input
          multiple
          className="mb-4"
          type="file"
          name="file"
          onChange={(val) => imageSelectFunc(val)}
        />
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        bodyElement={bodyElement}
        isOpen={elementModal}
        onSubmit={handleSubmit(onSubmit)}
        onClose={() => {
          dispatch(elementModalFunc());
        }}
        btnLabel="Create"
        title="Create Listing"
      />
    </div>
  );
};

export default ElementModal;
