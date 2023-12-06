import "styles/popup.css";

const PopupAlert = ({ response, setShowPopup, showPopup }) =>
{
  const handleClose = () =>
  {
    setShowPopup(false);
  };

  return (
    <div className={ `popup-alert ${ showPopup ? "active" : "" }` }
    >
      <div
        className={ `popup-content ${ response.status === "success"
          ? "text-green-500"
          : "text-red-500" }` }
      >
        <span className="close-btn" onClick={ handleClose }>
         x
        </span>

        <p> <span>
          { response.status === "success" ? "✔️" : " ✘" }
        </span> { response.msg }
        </p>
      </div>
    </div>
  );
};

export default PopupAlert;
