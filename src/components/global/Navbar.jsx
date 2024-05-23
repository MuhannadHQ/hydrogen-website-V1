"use client";
import conversionView from "apis/conversion-view"
import { Hydrogen } from "assets/icons/Hydrogen"
import { Store } from "assets/icons/Store"
import DeviceLeft from "components/device/DeviceLeft"
import { CartCount } from "components/global/CartCount"
import { NavbarItems } from "components/global/NavbarItems"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import { checkLocalStorageValidity } from "utils/helpers/localstorage"

export const Navbar = ({ show }) =>
{
  const searchParams = useSearchParams()

  const pathname = usePathname()
  const [bg, setBg] = useState(false)
  const isHome = pathname === "/" || pathname === "/contactus"

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () =>
  {
    setMenuOpen(!menuOpen);
  };
  const checkInViewport = () =>
  {
    if (window.scrollY > 5)
      setBg(true)
    else setBg(false)
  }
  useEffect(() =>
  {
    checkLocalStorageValidity()
    checkInViewport()
    window.addEventListener("scroll", checkInViewport);
    return () =>
    {
      window.removeEventListener("scroll", checkInViewport);
    };
  }, []);


  return ( isHome && !show ) ? null : (
    <>
    <header className="h-20">
      <nav
        className={ `flex items-center justify-between px-4 sm:px-12 fixed z-50 top-0 w-full h-20 ${ bg
          ? "bg-white shadow-lg"
          : "" }` }>
        <div className="flex items-center justify-center sm:gap-10 md:gap-20 ">
          <div>
            <Link href={ "/" }>
              <Hydrogen/>
            </Link>

          </div>
          <ul className="hidden gap-4 md:flex items-center">
            <NavbarItems/>
          </ul>
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <div className="relative cursor-pointer w-10 sm:hidden">
            <Link href={ "/cart" }>
              <Store/>
              <CartCount/>
            </Link>
          </div>
          <button
            className="md:hidden block text-4xl"
            onClick={ toggleMenu }
            aria-label="Toggle Menu"
          >
            &#9776;
          </button>
        </div>

        <Transition
          in={ menuOpen }
          mountOnEnter
          unmountOnExit
          timeout={ 300 }>
          { (state) => (
            <>
              <ul
                className={ `${
                  state === "entered" ? "h-full pt-5" : "h-0"
                } flex flex-col gap-4 px-4 border 
                  fixed text-s text-start top-0 
                  left-0 whitespace-nowrap 
                  bg-white rounded-lg shadow-lg z-40 w-menu mx-0.5
                  transition-all duration-300 overflow-hidden ease-in-out bg-secondary` }
              >
                  <span
                    className="absolute m-5  top-0 left-0 text-2xl cursor-pointer"
                    onClick={ toggleMenu }>
                    ✖️
                  </span>
                <li className="mb-5">

                  <Hydrogen/>
                </li>
                <NavbarItems setMenuOpen={ setMenuOpen }/>
              </ul>

            </>
          ) }
        </Transition>
      </nav>
    </header>
      {/* <DeviceLeft/> */}
    </>
  );
};



