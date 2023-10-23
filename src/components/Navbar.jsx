import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";

const LINKS = [
   { path: "/", name: "Home" },
   { path: "/cities", name: "Events" },
];

const Navbar = () => {
   return (
      <nav className=" flex bg-gradient-to-r from-sky-500 to-indigo-500 gap-8 justify-center py-2">
         {LINKS.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-teal-400">
               {" "}
               {link.name}{" "}
            </Link>
         ))}
         <AccountCircleIcon fontSize="medium" className="" />
      </nav>
   );
};

export default Navbar;
