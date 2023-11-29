import { useEffect, useRef, useState } from "react";
import CartForm from "./CartForm";
import CartList from "./CartList";
import './style.scss'


const Cart = () => {
    const [data, setData] = useState([])
    // 자체 컴포넌트 안에서 처리해야함.
    const [cart, setCart] = useState({
        text:'', price: Number(), amount: Number()
    })
    const [isEdit, setIsEdit] = useState(false)
    const textRef = useRef()
    //추가
    const no = useRef(1)
    //일단 자식컴포넌트에 들어가야하는 것 
    const changeInp = (e) => {
        const {name, value} = e.target
        setCart({
            ...cart,
            [name]: value
        })
    }
    const {text, price, amount} = cart
    const onSubmit = (e) => {
        e.preventDefault()
        //텍스트가 공백이고 수량이 1보다 작으면 return 처리
        //amount => 문자 => 숫자
        if(!text && amount < 1) return
        if(isEdit){
            setData(data.map(item => item.id === cart.id ? cart : item))
            setCart({text:'', price: '', amount: '',total: ''})
            setIsEdit(false)
            textRef.current.focus()
        }else{
            cart.id = no.current++
            setData([...data, cart])
            setTotal(cart.amount * cart.price)
            setCart({text:'', price: '', amount: '',total: ''})
            textRef.current.focus()
        }
        cart.total = Number(price * amount)
    }
    const onDel = (id)=>{
        setData(data.filter(item=>item.id !== id))
    }
    const onDelAll = () => {
        setData([])
    }
    const onEdit = (id) => {
        setIsEdit(true)
        setCart(data.find(item => item.id === id))
    }
    useEffect(()=>{
        textRef.current.focus()
    },[isEdit])
    return (
        <>
             <div className="con-box">
                <CartForm changeInp={changeInp} onSubmit={onSubmit} cart={cart} textRef={textRef} isEdit={isEdit} />
                <CartList data={data} onDel={onDel} onDelAll={onDelAll} onEdit={onEdit}/>
            </div>
        </>
    );
};

export default Cart;