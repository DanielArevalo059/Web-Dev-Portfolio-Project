import React from 'react';
import ProductRow from '../components/ProductRow.js';
// import products from '../data/products.js'

function OrderPage({items}){
    return(
    <>
        <h2>Order</h2>
    <article>
    <p>
        Please select how many of each item you would like to purchase. Up to a quantity of 10 per item.
    </p>
            
            <legend><h3>Products for purchase.</h3></legend>
            <table>

                <caption>Please your items for purchase</caption>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) =>
                    <ProductRow item={item} key={i} />
                    )}
                </tbody>
            </table>
        </article>
     </>
    );
}
export default OrderPage;