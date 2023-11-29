
const CartForm = ({changeInp, onSubmit, cart,textRef, isEdit}) => {
    const {text, price, amount} = cart
    return (
        <div className="box con1">
            <form onSubmit={onSubmit}>
                <p>
                    <label htmlFor="">품목</label>
                    <input type="text" onChange={changeInp} value={text} name="text" ref={textRef} />
                </p>
                <p>
                    <label htmlFor="">가격</label>
                    <input type="text" onChange={changeInp} value={price} name="price" />
                </p>
                <p>
                    <label htmlFor="">수량</label>
                    <input type="number" onChange={changeInp} value={amount} name="amount" />
                </p>
                <p>
                    <button type="submit">
                        {isEdit ? "수정" : "등록"}
                    </button>
                </p>
            </form>
        </div>
    );
};

export default CartForm;