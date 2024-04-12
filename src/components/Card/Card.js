import React, { Fragment } from 'react';
import styles from './Card.module.css'
const Card = ({ id. name, age, job, nationality, type}) => {
    return ( 
        <Fragment>
                <div className='styles.wrapper' key={index} style={{ backgroundColor: type === 'men' ? 'blueyellow' : 'greenyellow' }}>
            <div className='container'>
                <div> Name : {name}</div>
                <div> Age : {age}</div>
                <div> Job : {job}</div>
                <div> Nationality : {nationality} </div>
            </div>
            <button className={styles.delBtn}
                onClick={(event) => deleteFun(event, )}>
                X</button>
            </div>
            </Fragment>
     );
}
 
export default Card ;