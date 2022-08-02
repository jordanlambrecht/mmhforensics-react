import cn from "classnames";
import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import NavbarJS from "../js/navbar";

export default function Nav() {
  const MenuContent = () => {
    return (
      <ul className='navbar-nav list-md-inline d-md-flex flex-md-row justify-content-md-end'>
        <li className=' list-inline-item px-1 nav-item '>
          <NavLink
            exact
            onClick={(e) => handleIsOpen()}
            activeClassName='active'
            className='nav-link text-decoration-none pb-1 inline'
            to={"/"}
          >
            Home
          </NavLink>
        </li>

        <li className=' list-inline-item px-1 nav-item '>
          <NavLink
            exact
            activeClassName='active'
            onClick={(e) => handleIsOpen()}
            className='nav-link text-decoration-none pb-1 '
            to={"/team"}
          >
            Team
          </NavLink>
        </li>

        <li className=' list-inline-item px-1 nav-item '>
          <NavLink
            exact
            onClick={(e) => handleIsOpen()}
            className='nav-link text-decoration-none pb-1 '
            to={"/manifesto"}
          >
            Manifesto
          </NavLink>
        </li>
        <li className=' list-inline-item px-1 nav-item '>
          <NavLink
            exact
            onClick={(e) => handleIsOpen()}
            activeClassName='active'
            className='nav-link text-decoration-none pb-1 '
            to={"/mission"}
          >
            Mission
          </NavLink>
        </li>
      </ul>
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }
  useEffect(() => {
    NavbarJS();
  }, []);
  return (
    <header>
      <nav className='d-none d-md-block relative w-100 px-4 py-4'>
        <div className='container-fluid flex flex-row justify-content-end w-100'>
          <div className='flex flex-row justify-content-md-end'>
            <div />
            <MenuContent />
          </div>
        </div>
      </nav>
      <nav className='d-md-none navbar navbar-expand-md '>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='#'></Link>
          <button
            className={cn("navbar-toggler me-2 mt-2", { open: isOpen })}
            type='button'
            onClick={(e) => setIsOpen(!isOpen)}
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <div className={cn("icon nav-icon-5", { open: isOpen })}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div
            Style={{ backgroundColor: "black" }}
            className={cn(
              "duration-300 navbar-collapse d-md-flex justify-content-md-end w-100 bg-black",
              {
                "show opacity-100": isOpen,
                "collapse opacity-0": !isOpen,
              }
            )}
            id='navbarTogglerDemo01'
          >
            <MenuContent />
          </div>
        </div>
      </nav>
    </header>
  );
}
