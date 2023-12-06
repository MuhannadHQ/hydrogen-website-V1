import api from "apis/baseAPI"

const conversionView = async ( data ) =>
{

  const res = await api.post( "v2/product-orders/conversion-view", data )
  return res.data


}

export default conversionView

