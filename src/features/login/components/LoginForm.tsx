import MyButton from "@/components/my/MyButton";
import TextInput from "@/components/my/MyTextInput";

const LoginForm = () => {
  return (
    <div className="w-[350px] flex flex-col items-center gap-4">
      <h1 className="text-3xl font-bold">Burmese Bang</h1>

      <TextInput
        className="w-full"
        placeholder="Enter your username"
        label="Username"
      />

      <TextInput
        className="w-full"
        placeholder="Enter your password"
        label="Password"
      />

      <MyButton className="w-full mt-4">Login</MyButton>
    </div>
  );
};

export default LoginForm;
