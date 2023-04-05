import React, { Component } from "react";
import css from './style.module.css';
import BuildControl from "../BuildControl";

const BuildControls = props => {

    const controls = {
        bacon: "Гахайн мах",
        cheese: "Бяслаг",
        meat: "Үхрийн мах",
        salad: "Салад"
    }


    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ : <b>{props.price}₮</b></p>

            {Object.keys(controls).map(el => (
                <BuildControl
                    key={el}
                    disabled={props.disabledIngredients}
                    ortsHasah={props.ortsHasah}
                    ortsNemeh={props.ortsNemeh}
                    type={el} orts={controls[el]} />
            ))}

            <button disabled={props.disabled} className={css.OrderButton}> ЗАХИАЛАХ </button>
        </div>
    )
}

export default BuildControls;