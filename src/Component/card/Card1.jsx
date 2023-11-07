import React from 'react';
import styles from './Card1.module.css';
import vidofone from './../../assets/images/vodaidea.png';

const Card1 = () => {
    return (
        <section>


            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src={vidofone} alt="Logo" />
                    </div>
                </div>
                <div className={styles.center}>
                    <div className={styles.up}>
                        1.5GB/Day <span >data</span>
                    </div>
                    <div className={styles.down}> 28 Days <span>validity</span></div>

                </div>
                <div className={styles.right}>
                    <div>
                        ₹ 699
                    </div>
                    <div> <button type='submit' className='btn btn-primary'>buy</button></div>

                </div>
                <span className={styles.top}></span>
                <span className={styles.right1}></span>
                <span className={styles.button}></span>
                <span classN={styles.left1}></span>

            </div>
        </section>
    );
}

export default Card1;
