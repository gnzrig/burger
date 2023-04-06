import React, { Component } from "react";
import css from './style.module.css';
import BuildControl from "../BuildControl";

const BuildControls = props => {



    return (
        <div className={css.BuildControls}>
            <p>Бургерийн үнэ : <b>{props.price}₮</b></p>

            {Object.keys(props.ingredientsNames).map(el => (
                <BuildControl
                    key={el}
                    disabled={props.disabledIngredients}
                    ortsHasah={props.ortsHasah}
                    ortsNemeh={props.ortsNemeh}
                    type={el} orts={props.ingredientsNames[el]} />
            ))}

            <button
                onClick={props.showConfirmModal}
                disabled={props.disabled}
                className={css.OrderButton}
            > ЗАХИАЛАХ </button>
        </div>
    )
}

export default BuildControls;