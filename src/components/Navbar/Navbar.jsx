
import { useState } from "react";
import Link from "../Link/Link";
import { MdOutlineMenuOpen } from 'react-icons/md';
import { GrClose } from "react-icons/gr";


const Navbar = () => {
const [open, setOpen] = useState(false)

const routes = [
    { path: "/home", name: "Home", id: 1 },
    { path: "/about", name: "About", id: 2 },
    { path: "/services", name: "Services", id: 3 },
    { path: "/contact", name: "Contact", id: 4 },
    { path: "/gallery", name: "Gallery", id: 5 }
  ];
  
    return (
        <nav className="text-xl p-2 bg-rose-300">
            <div className="md:hidden" onClick={() => {setOpen(!open)}}>
                {
                    open === true ? <GrClose></GrClose> : < MdOutlineMenuOpen></MdOutlineMenuOpen>
                }
            
            </div>

           <ul className={`md:flex duration-1000 absolute md:static bg-rose-400 md:bg-rose-300 p-2
            ${open ? 'top-10' : '-top-60'}
            `}>
           {
            routes.map(route => <Link key={route.id} route={route}></Link>)
           }
           </ul>
        </nav>
    );
};

export default Navbar;