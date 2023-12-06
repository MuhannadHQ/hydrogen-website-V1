import axios from "axios";


const LOGIN = "https://hydrojeenapp.herokuapp.com/api/v1/users/signin";

const FETCH_DEVICES = "https://hydrojeenapp.herokuapp.com/api/v1/users/alldevices/";
const CREATE_ORDER = "https://hydrojeenapp.herokuapp.com/api/v2/product-orders/create-order";
const CREATE_PAYMENT = "https://hydrojeenapp.herokuapp.com/api/v1/product-orders/order-payment";
const CONTACT_US = "https://hydrojeenapp.herokuapp.com/api/v1/product-orders/contact-us";
const COUPON_APPLY = "https://hydrojeenapp.herokuapp.com/api/v1/product-orders/verify-promo-code/";


const FETCH_DEVICE_CHART = "https://hydrojeenapp.herokuapp.com/api/v1/data/level-chart/";

const NEXT_PUBLIC_BASE_URL = "https://hydrojeenapp.herokuapp.com/api/v1/users/alldevices";

let headers;
{
  headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  };
}

export async function createOrder ( data )
{
  let ScCid = localStorage.getItem( 'ScCid' ) || 'ScCid'
  data.ScCid = ScCid;
  const res = await axios( {
    method: 'POST',
    url: CREATE_ORDER,
    headers: headers,
    data: data
  } )
    .then( ( res ) => res )
    .catch( () => Promise.reject( 'something went wrong' ) );
  return res.data
}

export async function createPayment ( data )
{
  const res = await axios( {
    method: 'POST',
    url: CREATE_PAYMENT,
    headers: headers,
    data: data
  } )
    .then( ( res ) => res )
    .catch( ( err ) => console.log( err ) );
  return res.data
}

export async function contactUS ( data )
{
  const res = await axios( {
    method: 'POST',
    url: CONTACT_US,
    headers: headers,
    data: data
  } )
    .then( ( res ) => res )
    .catch( ( err ) => console.log( err ) );
  return res.data
}

export async function applyCoupon ( coupon )
{
  const res = await axios( {
    method: 'GET',
    url: COUPON_APPLY + coupon,
    headers: headers,
  } )
    .then( ( res ) => res.data )
    .catch( () => Promise.reject( 'something went wrong' ) );
  return res
}

export async function fetchDeviceChart ( deviceId )
{
  console.log( 'call fetch' )
  const res = await axios( {
    method: 'GET',
    url: FETCH_DEVICE_CHART + deviceId,
    headers: headers,
  } )
    .then( ( res ) => res )
    .catch( () => Promise.reject( 'something went wrong' ) );
  return res
}