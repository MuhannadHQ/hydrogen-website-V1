import { Trash } from "assets/icons/Trash"
import Image from "next/image"

export const BuyCard = ({ cart, removeFromCart, editQuantity }) =>
{

  return (
    <ul className="bg-white border shadow-md mx-4 rounded-lg my-2 px-3">
      {
        cart.map((item, i) => (
          <li key={ i }
              className="flex text-black gap-8 md:gap-20 md:text-start py-5 flex-col md:flex-row text-center items-center border-b">
            <div
              className="/12 md:w-1/3 w-48 ">
              <img
               className="w-full h-auto"
                src={ item.data.productImage } alt={ item.data.title }/>
            </div>

            <div
              className="flex flex-col gap-5 md:gap-20 ">
              <div>
                <h4 className="text-primary  text-xl">{ item.data.title
                }</h4>
                {/*<p>{ item.data.description }</p>*/}
              </div>
              <ul
                className="list-disc list-inside text-start whitespace-nowrap font-normal">
                { item.data.guarantees.map((feature, i) => (
                  <li

                    key={ i }>{ feature }</li>
                )) }
              </ul>
            </div>
            <div>
              {
                editQuantity ?
                  <>
                    <div className="flex flex-col gap-4 items-center">


                      <div>الكمية</div>

                      <ul className="flex justify-center items-center gap-2">
                        <li>
                          <button
                            disabled={ item.quantity <= 1 }
                            className={ `py-1 h-9 w-9 shadow border rounded-md  hover:bg-gray-50 disabled:bg-gray-300 disabled:-z-10 disabled:cursor-not-allowed` }
                            onClick={ () => editQuantity(item.data._id,
                              item.quantity - 1) }
                          >-
                          </button>
                        </li>
                        <li>
                          { item.quantity }
                        </li>
                        <li>
                          <button
                            className="py-1 h-9 w-9 shadow border rounded-md  hover:shadow-lg shadow-white hover:bg-gray-50 "
                            onClick={ () => editQuantity(item.data._id,
                              item.quantity + 1) }
                          >+
                          </button>

                        </li>
                      </ul>

                      <button
                        className="flex gap-2 items-center text-primary "
                        onClick={ () => removeFromCart(item.data._id) }
                      >حذف <Trash/>
                      </button>
                    </div>
                  </>

                  :
                  <div className="pt-10">
                    <h4>
                      الكمية:
                      { item.quantity }
                    </h4>
                  </div>
              }
            </div>
          </li> ))
      }
    </ul>
  )
}