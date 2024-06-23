import MyPagination from "@/components/my/MyPagination";
import CategoryCard from "./components/CategoryCard";

const List = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Category List</h2>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2, 3]?.map((index: number) => (
          <CategoryCard key={index} />
        ))}
      </div>
      <div className="w-full flex justify-end ">
        <MyPagination total={5} />
      </div>
    </div>
  );
};

export default List;
