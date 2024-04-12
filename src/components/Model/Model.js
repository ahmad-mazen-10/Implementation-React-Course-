import React, { Fragment } from 'react';
import ReactDom from 'react-dom';   
import styles from './Model.module.css'

const Backdrop = () => <div className={styles.backDrop}></div>;

const Overlay = () =>  <div className={styles.overlay}></div>;

const Model = () => {
    return ( 
        <Fragment>
            {ReactDom.createPortal(
                <Fragment>
                    <Backdrop />
                    <Overlay />
                </Fragment>
                , document.getElementById('modal')
            )}
        </Fragment>
     );
}
 
export default Model;