import api from "apis/baseAPI"

const fetch_coupon = async ( { formData } ) =>
{

    console.log( formData )
    const res = await api.post( `v2/product-orders/create-order`, formData )
    return res.data

}

export default fetch_coupon

