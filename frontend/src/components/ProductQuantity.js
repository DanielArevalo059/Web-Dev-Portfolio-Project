import React, { useState } from 'react';
import { BsFillCaretUpSquareFill, BsFillCaretDownSquareFill } from 'react-icons/bs';


function ProductQuantity() {
    
        const [quantityChange, setQuantity] = useState(0);
        const increaseQuantity = () => setQuantity(quantityChange === 10 ? quantityChange : quantityChange + 1);
        const decreaseQuantity = () => setQuantity(quantityChange === 0 ? 0 : quantityChange - 1);
    return (
        <>
            <BsFillCaretUpSquareFill onClick={increaseQuantity}/>
            &nbsp;{quantityChange}
            <BsFillCaretDownSquareFill onClick={decreaseQuantity}/>
        </>
    );
}
export default ProductQuantity