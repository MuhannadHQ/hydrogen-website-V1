"use client";
import React, { useState, useEffect } from "react";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showPromo, setShowPromo] = useState(false);

  useEffect(() => {
    // Check if the user has already answered the popup question
    const hasAnswered = localStorage.getItem("waterSource");
    if (!hasAnswered) {
      setShowPopup(true);
    }
  }, []);

  const handleAnswer = (answer) => {
    // Save the answer in local storage
    localStorage.setItem("waterSource", answer);
    // Hide the initial popup
    setShowPopup(false);
    // Show promo popup if the answer is 'tank'
    if (answer === "tank") {
      setShowPromo(true);
    }
  };

  const handleClosePromo = () => {
    setShowPromo(false);
  };

  return (
    <>
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4 text-xl">ماهو مصدر المياه في منزلك؟</p>
            <button
              className="text-base mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mr-2 mb-2"
              onClick={() => handleAnswer("tank")}
            >
              صهريج/وايت
            </button>

            <button
              className="text-base mx-2 bg-blue-500  hover:bg-gray-700 text-white font-bold py-3 px-6 rounded mb-2"
              onClick={() => handleAnswer("national")}
            >
              الشركة الوطنية
            </button>
          </div>
        </div>
      )}

      {showPromo && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg text-center">
            <p className="mb-4">
              استخدم رمز الخصم <span className="font-bold">WTU24</span> للحصول
              على شحن مجاني واشتراك مجاني لمدة 3 أشهر
            </p>
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded"
              onClick={() => {
                navigator.clipboard.writeText("wtu24");
                handleClosePromo();
              }}
            >
              نسخ الرمز
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
