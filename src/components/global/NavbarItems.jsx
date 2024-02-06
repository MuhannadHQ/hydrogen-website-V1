import { Store } from "assets/icons/Store"
import { CartCount } from "components/global/CartCount"
import { DropDown } from "components/global/DropDown"
import Link from "next/link"
import { paths } from "apis/data/devicesData"

export const NavbarItems = ({setMenuOpen= ()=>{}}) =>
{
  return (
    <>
        <li
          onClick={()=>setMenuOpen(false)}
          className="hover:text-primary transition-colors">
          <Link href={ "/" }>الرئيسية</Link>
        </li>
      <li
        onClick={()=>setMenuOpen(false)}
        className="hover:text-primary transition-colors">
        <Link href={ "/alpha" }>
          جهاز ألفا
        </Link>
      </li>
      {/*<li>*/}
      {/*  <DropDown title={"منتجاتنا"} paths={paths} handleClose={() => setMenuOpen(false)}/>*/}
      {/*</li>*/}
      {/*  <li*/}
      {/*    onClick={()=>setMenuOpen(false)}*/}
      {/*    className="hover:text-primary transition-colors">*/}
      {/*    <Link href={"/aboutus"}>عن هيدروجين</Link>*/}
      {/*  </li>*/}
      <li
        onClick={()=>setMenuOpen(false)}
        className="hover:text-primary transition-colors">
        <Link href={ "/questions" }>الأسئلة الشائعة</Link>
      </li>
      <li
        onClick={()=>setMenuOpen(false)}
        className="hover:text-primary transition-colors"
      >
        <Link href={ "/contactus" }>تواصل معنا
        </Link>
      </li>
      <li onClick={()=>setMenuOpen(false)} className="relative cursor-pointer hidden sm:block  w-14 ">
        <Link href={ "/cart" }>
          <Store/>
          <CartCount/>
        </Link>
      </li>
    </>
  )
}