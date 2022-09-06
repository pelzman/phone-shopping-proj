import React, {Component} from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component{

    state = {
      // initially put product:storeProducts
        products: [ ], 
        detailProduct: detailProduct,
         cart: [],
         modalOpen:false,
         modalProduct:detailProduct,
         cartSubTotal:0,
         cartTax:0,
         cartTotal:0
    }
    // this is the code of function that used in invoking the setProducts values
    
    componentDidMount(){
      this.setProducts();
      
    };
   // this is the code of function that used in invoking the setProducts values

   //  code to display all the products in the data on the productList page 
    setProducts = ()=>{
     
      let tempProducts =[];
      storeProducts.forEach(item=>{
        const singleItem ={...item};
        tempProducts = [...tempProducts, singleItem];
      });
      this.setState(()=>{
        return {products:tempProducts};
       

      })
    }
      //  code to display all the products in the data on the productList page
      
      // method for rendering individual item in the products on the details page
    getItem=(id)=>{ 
      const product= this.state.products.find(item=>item.id ===id);
    return product;
    };
// method for rendering individual item in the products on the details page

// code for the image that linked to details page onClick
    handleDetail =(id)=>{
        const product= this.getItem(id);
        this.setState(()=>{
          return{detailProduct:product}
        })
    }
    // code for the image that linked to details page onClick
       
    // code for addTOCart button 
    addToCart =(id)=>{
        let tempProducts = [...this.state.products];  
        const index = tempProducts.indexOf(this.getItem(id))
         const product = tempProducts[index];
         product.cart = true;
         product.count = 1;
         const price =product.price;
         product.total= price;

         //before addTOtal function was called
        
         //  this.setState (
        //   ()=>{
        //     return {products:tempProducts, cart: [...this.state.cart, product] }
        //   },()=>{console.log(this.state)}
        //  );

         this.setState (
          ()=>{
            return {products:tempProducts, cart: [...this.state.cart, product] }
          },()=>{this.addTotals()}
         );

    };
    // code for addTOCart button 

    // openModal method CODE(to be use only in product and detail component)

    openModal = (id)=>{
      const product = this.getItem(id);
      this.setState(()=>{
        return {modalProduct:product, modalOpen:true};
      });

    }
     // openModal method CODE

    //  closing up code(to be use in modal component)
    closeModal =()=>{
      this.setState(()=>{
        return{modalOpen:false}
      }
      )
    };
    //  closing up code

    // cart section functionality methods
   
increment = (id)=>{
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item=>item.id ===id);

  const index = tempCart.indexOf(selectedProduct);
  const product= tempCart[index]
  product.count= product.count + 1
  product.total = product.count * product.price;

  this.setState(()=>{
    return{
      cart:[...tempCart]   
    }
  }, ()=>{this.addTotals()})
}


decrement = (id)=>{
  let tempCart = [...this.state.cart];
  const selectedProduct = tempCart.find(item=>item.id ===id);

  const index = tempCart.indexOf(selectedProduct);
  const product= tempCart[index];
  product.count= product.count -1;

  if(product.count===0){
    this.removeItem(id);
  }
  else{
    product.total= product.count * product.price;

     this.setState(()=>{
    return{
      cart:[...tempCart]   
    }
  }, ()=>{this.addTotals()})
  }

}
removeItem = (id)=>{
  let tempProducts= [...this.state.products]
  let tempCart = [...this.state.cart]
  tempCart= tempCart.filter(item=>item.id !==id);


  const index = tempProducts.indexOf(this.getItem(id));
  let removedProduct = tempProducts[index];
  removedProduct.cart= false;
   removedProduct.count = 0;   
   removedProduct.total=0;
   this.setState(()=>{
    return{
      cart: [...tempCart],
      products: [...tempProducts]
    }

    
      
   }, ()=>{
    this.addTotals()
   })
}

clearCart = ()=>{
  this.setState(()=>{
    return {cart:[]}
  }, ()=>{
        this.setProducts()
        this.addTotals()
      })
}

    // cart section functionality methods

    // fuctionality code of addTotals

    addTotals = ()=>{
      let subTotal= 0;
      this.state.cart.map((item)=>(subTotal+=item.total));
      const tempTax = subTotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax
      this.setState(()=>{
        return{
        cartSubTotal:subTotal,
        cartTax :tax,
        cartTotal: total
        }
      });

    }


  
    render(){
        return(
          <ProductContext.Provider value={{
            ...this.state,
            handleDetail:this.handleDetail,
            addToCart:this.addToCart,            
            openModal:this.openModal,
            closeModal:this.closeModal,
            increment:this.increment,
            decrement:this.decrement,
            removeItem:this.removeItem,
            clearItem:this.clearCart

          }}>
            {this.props.children}
          </ProductContext.Provider>
        )
    }    
    
}
const ProductConsumer = ProductContext.Consumer;

    export {ProductProvider, ProductConsumer};