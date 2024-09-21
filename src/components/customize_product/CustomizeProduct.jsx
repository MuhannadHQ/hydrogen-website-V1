"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { setLocalStorage } from "utils/helpers/localstorage";
import { devices } from "apis/data/devicesData";
import { useRouter } from "next/navigation";
import amplitude from "utils/amplitude";

const CustomizeProduct = ({ device }) => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({
    waterSource: null,
    tankType: null,
    subscriptionMethod: null,
  });

  const steps = [
    {
      label: "مصدر المياه",
      question: "ما هو مصدر المياه في منزلك؟",
      options: ["صهريج/وايت", "الشبكة الوطنية"],
      field: "waterSource",
    },
    {
      label: "نوع الخزان",
      question: "ما هو نوع الخزان الذي تريد مراقبته؟",
      options: ["خرساني", "بولي ايثلين", "فايبر جلاس"],
      field: "tankType",
    },
    {
      label: "طريقة الاشتراك",
      question: "ما هي طريقة الاشتراك المفضلة لديك؟",
      options: ["سعر منخفض باشتراك", "سعر أعلى بدون اشتراك"],
      field: "subscriptionMethod",
    },
  ];
  const handleSelection = (field, value) => {
    setSelectedOptions((prev) => ({ ...prev, [field]: value }));
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else if (currentStep == steps.length - 1) {
      // Log customize product
      amplitude.logEvent("Customize Product", {
        device: device,
        waterSource: selectedOptions.waterSource,
        tankType: selectedOptions.tankType,
        subscriptionMethod: value,
      });

      const deviceData = devices[device];
      deviceData.isCustomized = true;

      let index = 0;
      if (value == "سعر أعلى بدون اشتراك") {
        index = 1;
      }

      deviceData.selectedPackage = deviceData.packages[index];
      deviceData.selectedPackage.tankType = selectedOptions.tankType;

      const cart = [
        {
          data: deviceData,
          quantity: 1,
        },
      ];
      setLocalStorage(cart);
      router.push("/cart");
    }
  };

  const goToStep = (stepIndex) => {
    if (stepIndex <= currentStep) {
      setCurrentStep(stepIndex);
    }
  };

  return (
    devices[device] && (
      <div>
        <h2 className="text-3xl p-4 text-center">تقييم الاحتياج</h2>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="mb-8"
            initial={{ opacity: 0, x: index > currentStep ? 100 : -100 }}
            animate={{ opacity: currentStep === index ? 1 : 0.5, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`p-6 rounded-3xl m-6 ${
                currentStep >= index ? "bg-secondary" : "bg-gray-100"
              }`}
            >
              <h3
                onClick={() => goToStep(index)}
                className={`flex gap-1 justify-start items-center cursor-pointer font-medium ${
                  currentStep >= index ? "text-primary" : "text-gray-500"
                } text-2xl`}
              >
                <span
                  className={`flex justify-center items-center w-7 h-7 rounded-full border ${
                    currentStep >= index ? "border-primary" : "border-gray-500"
                  }`}
                >
                  {index + 1}
                </span>
                <span>{step.label}</span>
              </h3>
              {currentStep === index && (
                <div className="mt-4 text-right">
                  <p className="mb-4 text-2xl">{step.question}</p>
                  <div className="flex flex-row gap-3 items-start">
                    {step.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleSelection(step.field, option)}
                        className="bg-white text-primary py-2 px-4 rounded-3xl border border-primary text-lg hover:bg-blue-500 hover:text-white transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    )
  );
};

export default CustomizeProduct;
