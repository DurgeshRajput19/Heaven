import { TbHomeFilled } from "react-icons/tb";
import { IoMdListBox, IoMdMailOpen } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = ({ containerStyles, toggleMenu, MenuOpened }) => {
  const navItems = [
    {
      to: "/",
      label: "Home",
      icon: <TbHomeFilled />,
    },
    {
      to: "/menu",
      label: "Menu",
      icon: <IoMdListBox />,
    },
    {
      to: "/contact",
      label: "Contact",
      icon: <IoMdMailOpen />,
    },
  ];

  return (
    <nav className={containerStyles}>
      {MenuOpened && (
        <>
         
          <FaRegWindowClose onClick={toggleMenu} />
          <Link to={"/"} className="bold-24 m-10">
            <h4 className="text-secondary">FlavourHeaven</h4>
          </Link>
        </>
      )}
      {navItems.map(({ to, label, icon }) => (
        <div key={label} className="inline-flex" >
          <NavLink
            to={to}
            className={({isActive}) =>
              isActive ? "active-link flexCenter gap-x-2" : "flexCenter gap-x-2"
            }
          >
            
            <span className="text-xl"  >{icon}</span>
            <h5 className="medium-16" >{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
