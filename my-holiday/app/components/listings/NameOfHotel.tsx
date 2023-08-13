"use client";

type NameOfHotelProps = {
  value: string;
  onSubmit: (value: any) => void;
};

const NameOfHotel: React.FC<NameOfHotelProps> = ({ value, onSubmit }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-5 space-y-2">
      <label className="font-bold" htmlFor="hotelName">
        The Name Of Your Place
      </label>
      <input
        className="border border-gray-300 rounded-sm px-2 py-1.5 w-full"
        value={value}
        onChange={(e) => onSubmit(e.target.value)}
      />
    </div>
  );
};

export default NameOfHotel;
