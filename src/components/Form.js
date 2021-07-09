import React, { useContext } from 'react';
import MyContext from '../context/MyContext';
import styles from "../css/Form.module.css";

export default () => {
    const {setVal} = useContext(MyContext);
    const handleChange = (e) => {
        setVal(e.target.value)
    }

    return (
        <form>
            <label htmlFor="name">Your Name:</label>
            <input className={styles.nameInput} name="name" type="text" onChange={handleChange}/>
        </form>
    )
}