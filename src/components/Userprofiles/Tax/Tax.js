import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoice } from '../../../Api/cadastre/Fetchcadastre'
import { setUserinvoice } from '../../../redux/Normaluser/User'

function Tax() {

  const dispatch = useDispatch()
  const userinvoice = useSelector((state)=>state.user.userinvoice)
  
  useEffect( ()=> {
    console.log("tax detaisl fetching")
    
    // method for fetching users invoice list
    const fetch_invoice = async ()=> {
      console.log("api")
      try{
        // we need only acrived invoice, which is needed to pay
        const queryParams = {active_invoice:'True'}
        const response = await fetchInvoice(queryParams)
        console.log(response)
        dispatch(setUserinvoice(response))
      }
      catch (error) {
        console.log("tax invoice api failed")
      }
    }

    // only call api to collect if the same data isnt in the redux
    if (!userinvoice) {
      fetch_invoice()
    }

  },[])

  return (
    <>
      tax
    </>
  )
}

export default Tax