const initState={
    products:[
        { id:1 ,name:'Red vintage dress', image:'1.jpg' , price: 3900, discount: 10, discountprice: 3900-390, qt: 1, desc: " Package Dimensions : 11.8 x 9.9 x 1.9 inches, 1.15 Pounds, Item model number : QF3236-1 , Department : Womens , Date First Available : August 15, 2016 "  },
       { id:2 ,name:'Light Blue Puffy Sleves', image:'2.jpg' , price: 1800, discount: 10, discountprice: 1800-180, qt: 1, desc: " Package Dimensions : 11.8 x 9.9 x 1.9 inches, 1.15 Pounds, Item model number : QF3236-1 , Department : Womens , Date First Available : August 15, 2016 " },
       { id:3 ,name:'White Vintage Sneakers', image:'3.jpg' , price: 900, discount: 0, discountprice: 900, qt: 1, desc: " Size : 36, Item model number : QF3236-1 , Department : Shoes , Date First Available : August 15, 2016"   },
       { id:4 ,name:'Purple vintage dress', image:'4.jpg' , price: 1900, discount: 10, discountprice: 1900-190, qt: 1, desc: " Package Dimensions : 11.8 x 9.9 x 1.9 inches, 1.15 Pounds, Item model number : QF3236-1 , Department : Womens , Date First Available : August 15, 2016 "  },
       { id:5 ,name:'Pastel Binni Cap', image:'5.jpg' , price: 700, discount: 10, discountprice:700-70, qt: 1, desc: " Package Dimensions : 11.8 x 9.9 x 1.9 inches, 1.15 Pounds, Item model number : QF3236-1 , Department : Womens , Date First Available : August 15, 2016 "  },
       { id:6 ,name:'Office Outfit Pair', image:'6.jpg' , price: 2700, discount: 10, discountprice:2700-270, qt: 1, desc: " Package Dimensions : 11.8 x 9.9 x 1.9 inches, 1.15 Pounds, Item model number : QF3236-1 , Department : Womens , Date First Available : August 15, 2016"   },
       { id:7 ,name:'Striped White Mini Skirt', image:'7.jpg' , price: 700, discount: 10, discountprice:700-70, qt: 1, desc: " Package Dimensions : 11.8 x 9.9 x 1.9 inches, 1.15 Pounds, Item model number : QF3236-1 , Department : Womens , Date First Available : August 15, 2016  " },
       { id:8 ,name:'Red PastelMid Dress', image:'8.jpg' , price: 1300, discount: 10, discountprice:1300-130, qt: 1, desc: " Package Dimensions : 11.8 x 9.9 x 1.9 inches, 1.15 Pounds, Item model number : QF3236-1 , Department : Womens , Date First Available : August 15, 2016 "  }
    ],
    product: {}
}
const Product =  (state=initState,action) => {
switch(action.type){
    case "PRODUCT":
        return {...state,product: state.products.find(product=> product.id === parseInt(action.id))}
    default: return state;
    
}
}
export default Product;