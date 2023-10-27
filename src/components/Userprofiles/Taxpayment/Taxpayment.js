import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchInvoice } from '../../../Api/cadastre/Fetchcadastre'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { BsWallet } from "react-icons/bs";
import { FaGooglePay } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { fetchuserWalletbalance } from '../../../Api/users/Users';
import { setUserWallet } from '../../../redux/Normaluser/User';

function Taxpayment() {

    //dispatch
    const dispatch = useDispatch()

    //selector
    const walletbalance = useSelector((state)=>state.user.userwalletbalance)

    //fetch invoice id
    const {tax_invoice_id} = useParams()
    
    // fetch all invloces
    const tax_invoice_list = useSelector((state)=> state.user.userinvoice)
    
    // find the perticular ivoice matched with tax_invoice_id
    const tax_invoice = tax_invoice_list.find((invoice)=>invoice.tax_invoice_id == tax_invoice_id)

    // faind total payed amount
    const payed_amount = tax_invoice.payment_history.reduce((accumulator, current)=> {return accumulator + current.payed_amount},0)

    // use effect for call api to fetch users wallet details
    useEffect( ()=> {
      console.log("fetch users wallet details")
      
      // call API
      const fetch_wallet_balance = async()=> {
        try{
          const response = await fetchuserWalletbalance()
          dispatch(setUserWallet(response))
        }

        catch (error) {
          console.log(error)
        }
      }

      if (!walletbalance) {
        fetch_wallet_balance()
        
      }
      
    },[])
    

  return (
    <>
        <Row className='my-3'>
            <Col md={8} className="">
                <Card bg={"secondary"} className="mb-2" >
                  <Card.Header> Tax Invoice </Card.Header>
                  <Card.Body>
                    <Card.Title> Invoice Number : {tax_invoice.tax_invoice_id} </Card.Title>
                    <Card.Text>

                        <Table>
                            <tbody>
                                <tr>
                                  <td>Invoice Amount</td>
                                  <td>{tax_invoice.amount}</td>
                                </tr>
                                <tr>
                                  <td>Total Payed amount</td>
                                  <td>{payed_amount}</td>
                                </tr>
                                <tr>
                                  <td>Balance amount</td>
                                  <td>{tax_invoice.amount - payed_amount}</td>
                                </tr>
                            </tbody>
                        </Table>

                        <h5>Payment History</h5>

                        <Table responsive="sm">
                          <thead>
                            <tr>
                              <th>Payment ID</th>
                              <th>Payed Amount</th>
                              <th>Payment Date</th>

                            </tr>
                          </thead>
                          <tbody>
                            
                            {
                              //iterate through payment history to show
                              tax_invoice.payment_history.map((payment)=> {
                                return(
                                  <tr>
                                    <td>{payment.tax_payment_id}</td>
                                    <td>{payment.payed_amount}</td>
                                    <td>{payment.payment_date}</td>
                                  </tr>
                                )
                              })
                            }
                            
                                

                          </tbody>
                        </Table>

                    </Card.Text>
                  </Card.Body>
                </Card>

            </Col>

            <Col md={4} className="">

              <Card bg={"secondary"} className="mb-2" >
                <Card.Header>Payment Options</Card.Header>
                <Card.Body>
                  <Card.Title> Deduct from wallet </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col sm={4}>
                        <BsWallet size={50}/>
                      </Col>
                      <Col sm={8}>
                        <p className='m-0 text-success'>My wallet</p>
                        <p className='m-0 text-success'>Balance : {walletbalance ? walletbalance.balance : 0.00}</p>

                      </Col>
                    </Row>
                            
                  </Card.Text>
                </Card.Body>
                <Button variant="success" className='m-3'> Deduct and  Pay</Button>
              </Card>


              <Card bg={"secondary"} className="mb-2" >
                <Card.Body>
                  <Card.Title> UPI Payment </Card.Title>
                  <Card.Text>
                    <Row>
                      <Col sm={4}>
                        <FaGooglePay size={50}/>
                      </Col>
                      <Col sm={8}>
                        <p className='m-0 text-success'>My wallet</p>
                        <p className='m-0 text-success'>Balance : 0.00</p>
                        
                      </Col>
                    </Row>
                            
                  </Card.Text>
                </Card.Body>
                <Button variant="success" className='m-3'>Pay</Button>
              </Card>



            </Col>
        </Row>
    </>
    
  )
}

export default Taxpayment