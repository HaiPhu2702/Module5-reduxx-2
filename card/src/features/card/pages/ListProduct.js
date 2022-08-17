import React from 'react';


import {productSelect} from '../productSlice'
import {useDispatch, useSelector} from "react-redux";

const ListProduct = () => {
    const listProduct=useSelector(productSelect)
   const dispatch=useDispatch()
    const addToCard=(id)=>{
        // dispatch(addCard(id))
    }
    return (
        <div>
            {listProduct.map(product=>(
                <div>
                    <p>{product.title} - ${product.price} x{product.inventory}</p>
                    <button onClick={()=>addToCard(product.id)}>Add to card</button>
                </div>
            ))}

        </div>
    );
};

export default ListProduct;