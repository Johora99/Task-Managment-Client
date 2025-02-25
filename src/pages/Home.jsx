import { useNavigate } from "react-router";
import logo from "../assets/icons8-task-100.png";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/tasks");
  };

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-4/5 text-center text-white">
        <img
          src={logo}
          alt="Taskly Logo"
          className="w-48 h-48 object-cover rounded-full mb-8 shadow-lg border-[2px] border-teal-200"
        />
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg text-teal-500">
          Welcome to Task Managment App
        </h1>
        <p className="text-xl mb-6 opacity-90 drop-shadow-md text-teal-500">
          Your personal task management solution for seamless productivity.
        </p>
        <button onClick={handleGetStarted} className="border-[1px] border-teal-500 text-black px-5 py-2 rounded-lg text-2xl">
          Add Todo
        </button>
      </section>
    </div>
  );
};

export default Home;
