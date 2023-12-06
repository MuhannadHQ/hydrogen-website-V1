import api from "apis/baseAPI"

const contactUs = async ( data ) =>
{

    const res = await api.post( "v1/product-orders/contact-us", data )
    return res.data


}

export default contactUs

