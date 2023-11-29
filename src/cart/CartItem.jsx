import React from 'react';

const CartItem = ({item, onDel, onEdit}) => {
    const {id,text, price, amount} = item
    return (
        <li>
            <p><span>타이틀</span>:<strong>{text}</strong></p>
            <p><span>가격</span>:<strong>{price}</strong></p>
            <p><span>수량</span>:<strong>{amount}</strong></p>
            <p><button><i className="xi-pen" onClick={()=>{onEdit(id)}}></i></button>
            <button><i className="xi-trash" onClick={()=>{onDel(id)}}></i></button></p> 
        </li>
    );
};

export default CartItem;