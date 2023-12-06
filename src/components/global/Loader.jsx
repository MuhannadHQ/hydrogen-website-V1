import "styles/loader.css"
export const Loader = ({fullScreen}) =>
{
  return (
    <div className={fullScreen && "full-page-loader"}>
      <div className="loader"></div>
    </div>
  )
}