import UserAvatar from "../atoms/UserAvater";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="w-full flex flex-row justify-between items-center h-[100px] bg-transparent p-4">
      <h1 className="text-2xl text-white opacity-[0.87]">{title}</h1>
      <UserAvatar />
    </div>
  );
};

export default Header;
