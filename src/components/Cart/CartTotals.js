import React from 'react'
import {Link} from 'react-router-dom'
import PaypalButton from './PaypalButton';
import styled from 'styled-components'

export default function CartTotals({value, history}) {
  const {cartSubTotal, cartTax, cartTotal, clearCart}= value;

  return (
    <React.Fragment>
      <div className="container ">
        <div className="row ">
          <BtnContainer>
              <div className="col-10 mt-2  ms-sm-5 ms-md-auto ms-lg-auto  text-capitalize text-right " >
          <Link to='/'>
            <button 
            className="btn btn-outline-danger text-uppercase mb-3 px-5" 
            type='button' onClick={()=>clearCart()}>
             clear cart
            </button>
          </Link>
          <h5>
            <span className='text-title ' >
              subtotal:
            </span>
            <strong>$ {cartSubTotal}</strong>
          </h5>
          <h5>
            <span className='text-title'>
              tax:
            </span>
            <strong>$ {cartTax}</strong>
          </h5>
          <h5>
            <span className='text-title'>
              total:
            </span>
            <strong>$ {cartTotal}</strong>
            <PaypalButton total={cartTotal}  clearCart={clearCart}
            history={history}/>
          </h5>

            </div> 
          </BtnContainer>
        
        </div>
      </div>
    </React.Fragment>
  )
}
const BtnContainer = styled.div`
 
 #div-btn{
  margin-left:auto;

  
 }

`