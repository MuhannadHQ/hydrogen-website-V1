import api from "apis/baseAPI"

const fetch_devices = async () =>
{
  try
  {
    const res = await api.get( "v1/product-orders/contact-us" )
    return res.data
  }
  catch ( error )
  {
    console.log( error )
  }
}

export default fetch_devices

