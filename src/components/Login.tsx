import { FaLock } from "react-icons/fa";
import { SlEnvolopeLetter } from "react-icons/sl";

export const Login = () => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <Form></Form>
    </section>
  );
};

export const Form = () => {
  const eventButton = () => {
    alert("Presionaste el boton!");
  };

  return (
    <article className="w-[440px] h-[500px] bg-transparent backdrop-blur-xl border-white border-3 rounded-2xl shadow-2xl relative">
      <form
        method="get"
        action="/"
        className="relative w-full h-full flex justify-center items-center flex-col text-white px-[70px]"
      >
        <h2 className="text-5xl font-bold absolute top-0 pt-10 select-none">
          Login
        </h2>

        {/* input-block */}

        <div className="relative w-full my-[25px] mx-0 border-b-2">
          <span className="absolute right-0 mt-4 mr-2">
            <SlEnvolopeLetter />
          </span>
          <input
            type="text"
            name="email"
            placeholder=" "
            required
            maxLength={30}
            className="peer w-full h-[50px] !bg-none border-none outline-none pl-[15px] pr-[5px] "
          />
          <label
            htmlFor="email"
            className="absolute text-[15px] top-[50%] left-[5px] duration-700 transform translate-y-[-50%] pointer-events-none
              peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-[15px]
              peer-focus:-top-[5px] peer-focus:translate-y-0 peer-focus:text-[10px] peer-not-placeholder-shown:-top-[5px] peer-not-placeholder-shown:text-[10px]"
          >
            Email
          </label>
        </div>

        {/* input-block */}

        <div className="relative w-full my-[25px] mx-0 border-b-2 ">
          <span className="absolute right-0 mt-4 mr-2">
            <FaLock />
          </span>
          <input
            type="text"
            name="password"
            placeholder=" "
            required
            maxLength={30}
            className="peer w-full h-[50px] bg-transparent border-none outline-none pl-[15px] pr-[5px] file:select-none "
          />
          <label
            htmlFor="password"
            className="absolute text-[15px] top-[50%] left-[5px] duration-700 transform translate-y-[-50%] pointer-events-none
              peer-placeholder-shown:top-[50%] peer-placeholder-shown:translate-y-[-50%] peer-placeholder-shown:text-[15px]
              peer-focus:-top-[5px] peer-focus:translate-y-0 peer-focus:text-[10px] peer-not-placeholder-shown:-top-[5px] peer-not-placeholder-shown:text-[10px]"
          >
            Password
          </label>
        </div>

        {/* check-block */}
        <div className="relative w-full flex justify-between text-[13px]">
          <div className="flex items-center">
            <input type="checkbox" required />
            <p>Remenber me</p>
          </div>
          <a href="#" className="hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* button-block */}

        <button
          type="button"
          onClick={eventButton}
          className="border cursor-pointer w-full h-[50px] rounded-4xl border-none mt-8 text-black bg-white hover:bg-black hover:text-white duration-300 ease-out "
        >
          Login
        </button>

        {/* register-block */}

        <p className="absolute bottom-0 mb-4">
          Don't have an account?{" "}
          <a href="#" className="text-blue-800 font-bold hover:underline">
            Register
          </a>
        </p>
      </form>
    </article>
  );
};
