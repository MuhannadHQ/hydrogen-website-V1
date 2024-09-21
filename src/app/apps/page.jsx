"use client";

import { useEffect } from "react";
import amplitude from "utils/amplitude";

const page = () => {
  useEffect(() => {
    // Detect the user's device
    const userAgent = navigator.userAgent || window.opera;

    if (/android/i.test(userAgent)) {
      // Redirect to Android APK download link
      window.location.href = "/hydrojeen.apk";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to iOS download link
      window.location.href =
        "https://apps.apple.com/sa/app/%D9%87%D9%8A%D8%AF%D8%B1%D9%88%D8%AC%D9%8A%D9%86/id1546619911";
    }
  }, []);

  return (
    <section>
      <div className="my-10">
        <h2 className="text-center">تحميل</h2>
        <p className="text-center">قم بتنزيل تطبيق هيدروجين الخاص بنا</p>
        <ul className="flex flex-col items-center general-padding my-8 space-y-4">
          <li className="w-64">
            <button
              onClick={() => {
                window.open(
                  "https://apps.apple.com/sa/app/%D9%87%D9%8A%D8%AF%D8%B1%D9%88%D8%AC%D9%8A%D9%86/id1546619911",
                  "_blank"
                );

                amplitude.logEvent("App Download (iOS)");
              }}
              className={`btn btn-primary w-full`}
            >
              iOS (Apple Store)
            </button>
          </li>
          <li className="w-64">
            <button
              onClick={() => {
                window.open("/hydrojeen.apk", "_blank");
                amplitude.logEvent("App Download (Android)");
              }}
              className={`btn btn-primary w-full`}
            >
              Android (Direct Download)
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default page;
