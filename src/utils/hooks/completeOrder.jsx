import { useState } from 'react';



const useCompleteOrder = ({orderData, paymentData}) =>
{

  const completeOrder = (data) => setOrderData(data);

  return { orderData, completeOrder };
}


