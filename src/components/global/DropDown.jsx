import { Arrow } from "assets/icons/Arrow"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Transition } from "react-transition-group"

export const DropDown = ({ title = "", paths, handleClose }) =>
{
  const [show, setShow] = useState(false)


  return (
    <div className="relative">
      <button
        onClick={ () =>  setShow(!show)}
        className="flex items-center text-start gap-3 w-full "
      >
        <span className="">{ title }</span>
        <span className={`-rotate-90 transition-all duration-300 ${show && "rotate-90"}`}> <Arrow className="w-4 h-4"/></span>
      </button>

        <Transition
          in={ show }
          mountOnEnter
          unmountOnExit
          timeout={ 300 }>
          { (state) => (
        <div
          className={`sm:absolute whitespace-nowrap top-full rounded max-w-fit  -right-3 sm:-right-1/2 z-100 bg-white transition-all duration-300 ease-in-out overflow-hidden
          ${state === "entered" ? "sm:h-16 h-16 sm:py-1 py-2 sm:border sm:shadow" : "h-0"} `}>
          <ul className="flex flex-col bg-white  sm:divide-y  ">
            {
              paths.map((path, index) =>
                <li
                  onClick={ ()=> setShow(false) }
                  className="py-0.5 px-1 sm:px-5  hover:text-primary transition-colors  " key={ index }>
                  <Link
                    onClick={ handleClose }
                    href={ path.href } >

                    { path.title }
                  </Link>
                </li>,
              )
            }
          </ul>
        </div>
          )}
        </Transition>
         </div>
  )
}
