import React from 'react';
import ProductQuantity from './ProductQuantity';  

function ProductRow({item}){

    return(
        <tr>
            <td>{item.company}</td>
            <td>{item.product}</td>
            <td>{item.price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
            <td><ProductQuantity/></td>
        </tr>
    );
}
export default ProductRow;