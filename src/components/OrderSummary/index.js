import React from "react";
import Button from "../General/Button";

const OrderSummary = (props) => {
    return (
        <div>
            <h3>Таны захиалга</h3>
            <p>Таны сонгосон орцууд: </p>
            <ul>
                {Object.keys(props.ingredients).map(el => (<li key={el}>{props.ingredientsNames[el]} : {props.ingredients[el]} ш</li>))}
            </ul>
            <p>Нийт үнийн дүн: <b>{props.totalPrice}₮</b></p>
            <p>Цаашаа үргэлжлүүлэх үү?</p>
            <Button clicked={props.onCancel} btnType="Danger" text="ТАТГАЛЗАХ" />
            <Button clicked={props.onContinue} btnType="Success" text="ҮРГЭЛЖЛҮҮЛЭХ" />
        </div>
    )
}

export default OrderSummary;