import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchInvoice } from '../../../Api/cadastre/Fetchcadastre'
import { setUserinvoice } from '../../../redux/Normaluser/User'
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Tax() {

  const dispatch = useDispatch()
  const userinvoice = useSelector((state)=>state.user.userinvoice)
  
  useEffect( ()=> {
    
    // method for fetching users invoice list
    const fetch_invoice = async ()=> {

      try{
        // we need only actived invoice, which is needed to pay
        const queryParams = {active_invoice:'True'}
        const response = await fetchInvoice(queryParams)
        dispatch(setUserinvoice(response))
        console.log("goooo",userinvoice)
        
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
      
      { 
        userinvoice &&(
          userinvoice.map((invoice,index)=> {
            
            return(
              <Accordion className='m-3'>

                <Accordion.Item eventKey="0">
                  <Accordion.Header>Tax invoice &emsp; | &emsp; invoide ID : {invoice.tax_invoice_id} &emsp; | &emsp; Tax date : {invoice.tax_date}</Accordion.Header>
                  <Accordion.Body>
                    
                    <h5>Total tax amount : {invoice.amount}</h5>
                    <Table responsive="sm">
                      <thead>
                        <tr>
                          <th>Payment ID</th>
                          <th>Payed Amount</th>
                          <th>Payment Date</th>

                        </tr>
                      </thead>
                      <tbody>
                        {invoice.payment_history &&(
                          
                          invoice.payment_history.map((payment,index)=> {

                            return (
                              <tr>
                                <td>{payment.tax_payment_id}</td>
                                <td>{payment.payed_amount}</td>
                                <td>{payment.payment_date}</td>
                                
                              </tr>
                            )
                            
                          })
                        )}

                      </tbody>
                    </Table>
                    
                    <Button variant="primary" as={Link} to={`taxpayment/${invoice.tax_invoice_id}`} >Pay Balance</Button>

                  </Accordion.Body>
                </Accordion.Item>
                        
              </Accordion>
            )
            
          }
          )
        )
        
      }
      
    </>
  )
}

export default Tax