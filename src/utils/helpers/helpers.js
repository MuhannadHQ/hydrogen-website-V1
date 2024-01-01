import LzString from "lz-string"

export const setCallbackUrl = (orderData, orderID) =>
{
  const orderDataString = LzString.compressToEncodedURIComponent(
    JSON.stringify({
      ...orderData,
      orderID,
    }));
  const url = `${ window.location.origin }/order?orderDetails=${ orderDataString }`;
  return url;
}