"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import amplitude from "utils/amplitude";

const CustomizeProductPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user has already answered the popup question
    const hasAnswered = localStorage.getItem("helpmeAnswered");
    if (!hasAnswered) {
      setShowPopup(true);
    }
  }, []);

  const handleAnswer = (answer) => {
    // Save the answer in local storage
    localStorage.setItem("helpmeAnswered", answer);
    // Hide the initial popup
    setShowPopup(false);
    // Show promo popup if the answer is 'yes'
    if (answer === "yes") {
      router.push("/alpha/customize");
    } else {
      amplitude.logEvent("Declined Customize Product");
    }
  };

  // return (
  //   <>
  //     {showPopup && (
  //       <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
  //         <div className="bg-primary p-8 rounded-2xl text-center">
  //           <p className="mb-8 text-white text-2xl font-semibold">
  //             هل تحتاج مساعدة في اختيار نوع الجهاز المناسب؟
  //           </p>
  //           <div className="flex justify-center">
  //             <button
  //               className="text-primary bg-white hover:bg-gray-200 text-blue-500 font-bold py-3 px-6 rounded-full mx-2 text-lg"
  //               onClick={() => handleAnswer("yes")}
  //             >
  //               نعم
  //             </button>
  //             <button
  //               className="text-primary bg-white hover:bg-gray-200 text-blue-500 font-bold py-3 px-6 rounded-full mx-2 text-lg"
  //               onClick={() => handleAnswer("no")}
  //             >
  //               لا
  //             </button>
  //           </div>
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
};

export default CustomizeProductPopup;
