import { Trash } from "assets/icons/Trash";
import Image from "next/image";
import { FiVideo, FiFileText } from "react-icons/fi";
import Link from "next/link";
import { useEffect } from "react";

export const BuyCard = ({ cart, removeFromCart, editQuantity }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <ul className="bg-white border shadow-md mx-4 rounded-lg my-2 ">
      {cart.map((item, i) => (
        <li
          key={i}
          className="relative flex text-black gap-8 md:gap-20 md:text-start py-5 flex-col md:flex-row text-center items-center border-b"
        >
          {item.data.isCustomized && (
            <div className="absolute top-0 right-0 bg-blue-500 text-white py-2 px-4  text-sm font-semibold mt-4">
              الاختيار الأمثل{" "}
            </div>
          )}
          <div className="w-12 md:w-1/3 w-48 mt-8">
            <img
              className="w-full h-auto"
              src={item.data.productImage}
              alt={item.data.title}
            />
          </div>
          <div className="flex flex-col gap-5 md:gap-15 mt-8">
            <div>
              <h4 className="text-primary text-xl">{item.data.name}</h4>
              <p>
                {item.data.selectedPackage?.packagePriceDescription ||
                  item.data.packagePriceDescription}{" "}
                شاملة الضريبة{" "}
              </p>
            </div>
            <ul className="list-disc list-inside text-start whitespace-nowrap font-normal">
              {(
                item.data.selectedPackage?.guarantees || item.data.guarantees
              ).map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div className="flex justify-center gap-6 mt-8 w-full md:w-auto">
              <a
                href={`${item.data.path}#introduction`}
                className="flex items-center gap-2 text-blue-600 underline"
              >
                <FiVideo /> فيديو تعريفي
              </a>
              <a
                href={`${item.data.path}#specifications`}
                className="flex items-center gap-2 text-blue-600 underline"
              >
                <FiFileText /> المواصفات الفنية
              </a>
            </div>
          </div>
          <div className="mt-8">
            {editQuantity ? (
              <>
                <div className="flex flex-col gap-4 items-center">
                  <div>الكمية</div>

                  <ul className="flex justify-center items-center gap-2">
                    <li>
                      <button
                        disabled={item.quantity <= 1}
                        className="py-1 h-9 w-9 shadow border rounded-md hover:bg-gray-50 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        onClick={() =>
                          editQuantity(item.data._id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                    </li>
                    <li>{item.quantity}</li>
                    <li>
                      <button
                        className="py-1 h-9 w-9 shadow border rounded-md hover:shadow-lg shadow-white hover:bg-gray-50"
                        onClick={() =>
                          editQuantity(item.data._id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </li>
                  </ul>

                  <button
                    className="flex gap-2 items-center text-primary"
                    onClick={() => removeFromCart(item.data._id)}
                  >
                    حذف <Trash />
                  </button>
                </div>
              </>
            ) : (
              <div className="pt-10">
                <h4>الكمية: {item.quantity}</h4>
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};
