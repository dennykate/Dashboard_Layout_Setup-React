import CastCard from "./components/CastCard";

const List = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">Cast List</h2>
      <div className="grid grid-cols-3 gap-4">
        {[0, 1, 2, 3]?.map((index: number) => (
          <CastCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default List;
