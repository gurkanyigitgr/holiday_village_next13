"use client";
interface UserMenuItemProps {
  name: string;
  onClick: () => void;
}
const UserMenuItem: React.FC<UserMenuItemProps> = ({ name, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="text-md font-semibold px-3 py-2 hover:bg-secondaryColor cursor-pointer rounded-md"
    >
      {name}
    </div>
  );
};

export default UserMenuItem;
