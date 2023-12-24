import api from "apis/baseAPI"

const createCart = async ( { formData } ) =>
{
  try
  {
    const res = await api.post( `v1/product-orders/cart`, formData )
    return res.data
  }
  catch ( error )
  {
    console.log( error )
  }
}

export default createCart

