import { Arrow } from "assets/icons/Arrow"

export const Steps = ({ step = 0 }) =>
{
  return (
    <ul className="flex gap-2   steps">
      <li className="text-primary">
        <span>
        معلومات الطلب
        </span>
      </li>
      <li className={step >= 1 && "text-primary"}>
        <Arrow color={step < 1 && "#000" }/>
        <span className="mr-2">اختيار الباقة</span>
      </li>
      <li className={step >= 2 && "text-primary"}>
        <Arrow color={step < 2 && "#000" }/>
        <span className="mr-2">
        إتمام الشراء
        </span>
      </li>
    </ul>
  )
}
