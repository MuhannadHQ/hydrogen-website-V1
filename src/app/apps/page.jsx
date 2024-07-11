import AndriodFilled from "assets/icons/AndriodFilled";
import AppleFilled from "assets/icons/AppleFilled";
import React from 'react'

function page() {
  return (
    <main className="py-16 bg-secondary min-h-full">
      <h2 className="text-gray-700  font-semibold">تطبيق الجوال</h2>

      <div className="flex flex-col items-center gap-6 mt-16">
        <button className="border-primary rounded-xl text-primary font-semibold border py-1 px-6 w-44 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://apps.apple.com/sa/app/%D9%87%D9%8A%D8%AF%D8%B1%D9%88%D8%AC%D9%8A%D9%86/id1546619911"
          >
            <AppleFilled />
          </a>
        </button>
        <button className="border-primary rounded-xl text-primary font-semibold border py-1 px-6 w-44 flex justify-center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://play.google.com/store/apps/details?id=com.iot.hydrojeen"
          >
            <AndriodFilled />
          </a>
        </button>
      </div>
    </main>
  );
}

export default page
