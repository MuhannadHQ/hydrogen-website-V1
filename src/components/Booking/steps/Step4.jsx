'use client'
import { Packs } from "./Packs.jsx";


export const Step4 = ({
    setStep,
    cart,
    editQuantity,
    removeFromCart,
    bookingCart,
}) => {

    const handleMoveToStep2 = () => {
        setStep(2);
    };
    return (
        <>
            <Packs bookingCart={bookingCart} />
            <button
                disabled={cart.some((item) => !item.quantity) || !cart.length}
                onClick={handleMoveToStep2}
                className="btn btn-primary-contained w-80 my-5 disabled:opacity-50 disabled:cursor-not-allowed "
            >
                استمرار
            </button>
        </>
    );
};