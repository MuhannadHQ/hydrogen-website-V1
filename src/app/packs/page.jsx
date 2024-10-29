'use client'
import { Packs } from "./packs";

export default function PacksPage() {

    return (
        <div>
            <Packs />
            <button
                // disabled={cart.some((item) => !item.quantity) || !cart.length}
                // onClick={handleMoveToStep2}
                className="btn btn-primary-contained w-80 my-5 disabled:opacity-50 disabled:cursor-not-allowed "
            >
                استمرار
            </button>
        </div>
    )
}