import React from 'react'

export default function CartItem({item, value}) {
    const {id, title, img, price, total, count} = item;
    const {increment, decrement, removeItem} = value;
  return (
   <div className="row my-1 text-capitalize text-center">
    <div className="col-10 mx-auto col-lg-2">
        <img src={img} style={{width:'5rem', height:'5rem'}} alt="product" className='img-fluid' />
    </div>
     <div className="col-10 mx-auto col-lg-2 fs-5">
        <span className='d-lg-none'>product :</span>
        {title}
        
     </div>
     {/* item container */}
      <div className="col-10 mx-auto col-lg-2 fs-5">
        <span className='d-lg-none'>price :</span>
        {price}        
     </div>
      <div className="col-10 mx-auto col-lg-2 my-lg-0 fs-5">
       <div className="d-flex justify-content-center">
        <div>
        <span className="btn btn-black mx-1 " onClick={()=>decrement(id)}>
            -
        </span>
        <span className=" btn btn-black mx-1  onClick">{count}</span>
         <span className="btn btn-black mx-1 " onClick={()=>increment(id)}>
            +
        </span>
        </div>       
   </div> 
      {/* item container end */}           
       </div> 
        <div className="col-10 mx-auto col-lg-2  ">
         <div className="cart-icon px-3" onClick={()=>removeItem(id)}>
            <i className="fas fa-trash"></i>
         </div>     
       </div>       
         <div className="col-10 mx-auto col-lg-2 ">
         <strong>item total : $ {total}</strong>
               
     </div>
               
     </div>
  )
}

