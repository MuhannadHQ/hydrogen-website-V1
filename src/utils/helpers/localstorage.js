import { lastDateUpdated } from "apis/data/devicesData"

const calculateCount = ( cart ) => cart.reduce(
  ( acc, item ) => acc + parseInt( item.quantity ),
  0 )

export const setLocalStorage = ( cart ) =>
{
  window.localStorage.setItem( "cart", JSON.stringify( cart ) )
  window.localStorage.setItem( "count", calculateCount( cart ) )
  window.dispatchEvent( new Event( "storage" ) )

}

export const getLocalStorageItem = ( item ) => JSON.parse(
  window.localStorage.getItem( item ) )

export const checkLocalStorageValidity = () =>
{
  const lastUpdate = window.localStorage.getItem( "lastUpdate" )

  if ( !lastUpdate )
  {
    window.localStorage.setItem( "lastUpdate", new Date().toLocaleDateString() )
  }
  else if ( new Date( lastUpdate ) < new Date( lastDateUpdated ) )
  {
    window.localStorage.removeItem( "cart" )
    window.localStorage.removeItem( "count" )
    window.localStorage.setItem( "lastUpdate", new Date().toLocaleDateString() )
  }
} 