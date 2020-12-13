import React, { useEffect, useState }  from 'react';

const CartLogic = () => {
    const numOfCards = 12;
    const [maxArray, setMaxArray] = useState(numOfCards);

    const test = () => {
        const cartBtn = document.querySelector(".addToCartBtn")
        cartBtn.addEventListener("click", testTest)
    }

    const testTest = () => {
        "this is a test";
    }

    function tester(){
        console.log("this is a test");
    }


    return [
        "adlfkjsdjf",
        "dfkadjfkashdf",
        {why: testTest()}
    ];
    
}

export default CartLogic;