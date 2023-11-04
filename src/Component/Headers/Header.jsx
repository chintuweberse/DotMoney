import React, { useEffect, useState } from 'react';
import styles from './header.module.css'
import './header.module.css';
import vidofone from './../../assets/images/vodafone.png';
import user from './../../assets/images/user.png';
import support from './../../assets/images/support.png';
import notification from './../../assets/images/notification.png';




const Header = () => {
  const [logedn,setLogedn] = useState(false)
  useEffect(() => {
    console.log(logedn);
  }, [logedn]);

  return (
   <div className={styles.wrapper}>
    
      <div className={styles.logo}>
        <img src="{} "alt="Logo" />
      </div>
      <ul className={styles.nav_links}>
        <li><a href="/home">Plan</a></li>
        <li><a href="/about"></a></li>
        <li><a href="/voucher">Add Voucher</a></li>

        <li><a href="/contact"></a></li>
      </ul>
      <div className={styles.auth_links}>
        {
          logedn ?(<>
          
        <img src={support} alt=""  className={styles.img-1} />
        <img src={notification} alt="" className={styles.img-1}/>
        <img src={user} alt=""  className={styles.img-1}/>
          </>):(<>
            <a href="/sign">Sign Up</a>
        <a href="/login">Login</a>
          </>)
        }
      
      
      
      </div>
    
   </div>
  
  );
}

export default Header;
