import MyButton from "@/components/my/MyButton";
import MyFileInput from "@/components/my/MyFileInput";
import MyTextInput from "@/components/my/MyTextInput";

const Edit = () => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4 ">Edit Category</h2>

      <div className="w-[400px] p-4 bg-white rounded-md shadow-md flex flex-col items-end gap-4">
        <MyFileInput
          label="Profile"
          placeholder="Choose profile"
          className="w-full"
        />
        <MyTextInput className="w-full" label="Name" placeholder="Enter name" />
        <MyButton>Update</MyButton>
      </div>
    </div>
  );
};

export default Edit;
