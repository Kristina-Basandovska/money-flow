import { useEffect } from "react";
import { Link } from "react-router-dom";
import useTheme from "../../Hooks/useTheme";

export default function Menu() {
  const { toggleDarkTheme,togglePinkTheme } = useTheme();
  return (
    <div className="sm:container md:w-[50%] mx-auto p-8">
      <Link to="/main" className="text-textColor font-medium text-3xl">
        X
      </Link>
      <div className="mt-10 flex flex-col">
        <Link to="/expense" className="text-textColor font-medium text-3xl pb-4">
          Exspenses
        </Link>
        <Link to="/income" className="text-textColor font-medium text-3xl pb-4">
          Incomes
        </Link>
        <Link to="/statistics" className="text-textColor font-medium text-3xl pb-4">
          Statistics
        </Link>
        <Link
          to="/changeBalance"
          className="text-textColor font-medium text-3xl pb-4"
        >
          Change balance
        </Link>
        <Link to="/settings" className="text-textColor font-medium text-3xl pb-4">
          Settings
        </Link>

        <div className="sm:container flex flex-wrap mt-60">
          <p className="text-lg text-textColor font-medium uppercase mb-4 w-[100%]">
            Change mode
          </p>
          <button
            className="flex justify-center items-center rounded-full border-2 border-textColor text-textColor mr-4 w-12 h-12"
            onClick={toggleDarkTheme}
          >
            <span>
              <svg
                class="w-6 h-6 ml-1"
                fill="yellow"
                stroke="yellow"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            </span>
          </button>
          <button  className="flex justify-center items-center rounded-full text-textColor w-12 h-12 bg-gradient-to-r from-pink-300 to-pink-400"    onClick={togglePinkTheme}>
          </button>
        </div>
      </div>
    </div>
  );
}
