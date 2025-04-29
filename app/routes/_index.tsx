import { Outlet, Route } from "react-router";
import Navbar from "components/Navbar";
// import { Welcome } from "../welcome/welcome";
export default function Home() {
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h1 className="mb-4 text-3xl font-bold text-red-500">
        Welcome to SliceMate
      </h1>
      <p className="text-lg text-gray-700">
        Order your favorite pizzas online with fast delivery or pickup!
      </p>
    </div>
  );
}
