import MyPagination from "@/components/my/MyPagination";
import StudioCard from "./components/StudioCard";

const List = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Studio List</h2>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2, 3]?.map((index: number) => (
          <StudioCard key={index} />
        ))}
      </div>
      <div className="w-full flex justify-end ">
        <MyPagination total={5} />
      </div>
    </div>
  );
};

export default List;
