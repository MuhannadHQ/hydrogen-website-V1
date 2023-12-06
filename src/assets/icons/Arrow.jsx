export const Arrow = ({color}) =>
{
  return (
    <svg
      width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 1L1 6.15152L5 11" stroke={color || "#0074FB"} strokeWidth="1.5"/>
    </svg>

  )
}