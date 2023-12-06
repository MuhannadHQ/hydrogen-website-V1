import { Arrow } from "assets/icons/Arrow"
import Link from "next/link"

export const MoreLink = ({link,color }) =>
{
  return (<Link href={link}>
    <div className={`flex justify-center items-center gap-1 whitespace-nowrap  ${color}`}>
      <span>اعرف المزيد</span>
      <Arrow/>
    </div>
    </Link>
  )
}