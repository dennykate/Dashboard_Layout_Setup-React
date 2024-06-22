import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="w-full h-screen bg-primary flex justify-center items-center">
      <div className="w-[95%] h-[95%] bg-white rounded-lg shadow-lg flex justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
