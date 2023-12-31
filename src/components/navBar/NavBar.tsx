import { ActionIcon, Avatar } from "@mantine/core";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

interface PropsType {
  toggle: () => void;
}

const NavBar = ({ toggle }: PropsType) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    toggle();
  };

  return (
    <div className="w-full h-[70px] bg-white flex items-center justify-between lg:px-4 px-1">
      <ActionIcon onClick={onClickHandler}>
        <FaBarsStaggered color="black" className="lg:text-lg text-base" />
      </ActionIcon>

      <div className="flex items-center lg:gap-4 gap-2">
        <button className="flex items-center gap-1">
          <p className="lg:text-base text-sm ">Denny Kate</p>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ6O8ojjcSZRioKmwtpHKVkfvOD-XXSlsdTg&usqp=CAU"
            alt="Denny Kate"
            size="md"
            className="rounded-full"
          />
        </button>

        <ActionIcon>
          <IoSettings color="black" className="lg:text-xl text-lg" />
        </ActionIcon>
      </div>
    </div>
  );
};

export default NavBar;
