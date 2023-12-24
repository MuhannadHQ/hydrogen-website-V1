import api from "apis/baseAPI"

const fetch_payment = async ( { formData } ) =>
{
  try
  {
    const res = await api.post( `v1/product-orders/create-payment`, formData )
    return res.data
  }
  catch ( error )
  {
    console.log( error )
  }
}

export default fetch_payment

