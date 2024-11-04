import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="flex py-8 justify-evenly bg-pink-300 max-w-screen-2xl ">
        <h1 className="font-mono text-3xl hover:text-white flex justify-center ">EveryDay Shoppers</h1>
        <div className=" flex justify-end no-underline">
        <ul className="flex space-x-10 list-none" >
          <Link to={"/"} className="no-underline text-2xl text-black hover:text-white">
            <li >Home</li>
          </Link>
          <Link to={"/cart"} className="no-underline text-2xl text-black hover:text-white">
            <li>Cart</li>
          </Link>
        </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
