import React, {useContext} from "react";
import MyContext from "../context/MyContext";
import styles from "../css/Navbar.module.css";

const Navbar = (props) => {
    const {val} = useContext(MyContext)
    return (
        <div className={styles.navbar}>
            Hello, {val}!
        </div>
    )
}

export default Navbar;