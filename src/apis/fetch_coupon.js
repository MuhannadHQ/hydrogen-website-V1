import api from "apis/baseAPI"

const fetch_coupon = async ( coupon ) =>
{

    const res = await api.get( `v1/product-orders/verify-promo-code/${ coupon }` )
    return res.data


}

export default fetch_coupon

