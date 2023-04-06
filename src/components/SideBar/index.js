import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";

const SideBar = () => {
    return (
        <div className={css.SideBar}>
            <div className={css.Logo}>
                <Logo />
            </div>
            <Menu />
        </div>
    )
};

export default SideBar;