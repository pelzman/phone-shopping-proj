import React from 'react'
import styled from 'styled-components'



export default function CartColumns() {
  return (
    <CartContainer>
     <div className='container-fluid text-center d-none'id='flex-contain' >
    <div className="row " >      
      <div className="col-10 mx-auto  col-lg-2  flex-item">
        <p className="text-uppercase"> products</p>

      </div>
      <div className="col-10 mx-auto col-2 flex-item">
        <p className="text-uppercase">name of of product</p>

      </div>
    
    <div className="col-10 mx-auto col-2 flex-item">
        <p className="text-uppercase">price</p>

      </div>
    
    <div className="col-10 mx-auto col-2 flex-item">
        <p className="text-uppercase">quantity</p>

      </div>
    
    <div className="col-10 mx-auto col-2 flex-item">
        <p className="text-uppercase">remove</p>

      </div>
    
    <div className="col-10 mx-auto col-2 flex-item">
        <p className="text-uppercase">total</p>

      </div>
      </div>
      
    
    
    
    
      </div>
    </CartContainer>
   
  )
}

const CartContainer = styled.div`
@media screen and (max-width:600px) {
  .flex-contain{
    display:none;
  }
}

#flex-contain {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
}
.row {
  width: 100%;
 
}
.flex-item {
  color:var(--mainDark);
  padding: 0 25px;
  width: 278px;
  height: 150px;
  margin: 0 ;
  line-height: 150px;
  font-weight:bold; 
 
  
  font-size: 1rem;
  text-align: center;
}



`