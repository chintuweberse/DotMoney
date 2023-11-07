import React, { useEffect, useState } from 'react';
import styles from './../Component/cardCss/Test.module.css';
import Airtel from './../assets/images/airtel.png';
import Jio from './../assets/images/jio1.png';
import Vodafone_idea from './../assets/images/vodaidea.png';
import bsnl from './../assets/images/bsnl.jpg';
import Dishtv from './../assets/images/dishtv1.webp';
import Videocon from './../assets/images/videocon.png';
import TataSky from './../assets/images/tatasky.jpg';
import SunDirect from './../assets/images/sun.png';


 const Test = ()=> {
    const [data, setData] = useState(null);

  useEffect(() => {
    // Define the URL of the endpoint
    const endpointURL = 'http://localhost:7000/getPlan';

    // Make a GET request to the endpoint
    fetch(endpointURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((responseData) => {
        // Update the state with the fetched data
        setData(responseData.result);
        console.log(responseData)

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []); 
    
  function renderProviderLogo(provider) {
    switch (provider) {
      case 'airtel':
        return <img src={Airtel} alt="Airtel" />;
        case 'Jio':
            return <img src={Jio} alt="Jio" />;
        case 'Vodafone-idea':
           return <img src={Vodafone_idea} alt="vodaidea" />;
        case 'DishTv':
            return <img src={Dishtv} alt="dishtv" />;
         case 'Videocon':
                return <img src={Videocon} alt="Videocon" />;       
      case 'Bsnl':
        return <img src={bsnl}alt="bsnl" />;
        case 'Tatasky':
        return <img src={TataSky} alt="Tatasky" />;
        case 'SunDirect':
        return <img src={SunDirect} alt="sundirect" />;
    

      // Add more cases for other providers
      default:
        return <img src="/default-logo.png" alt="Default" />;
    }
  }


     return(
        <>
            <div className={styles.product}>

                {
                    data ? (
                        data.map((data, index) => (
                            <div className={styles.wrapper}>
                            <div className={styles.left}>
                                <div className={styles.logo} key={index}>
                                {renderProviderLogo(data.provider)}
                                </div>
                            </div>
                            <div className={styles.center} key={index}>
                                <div className={styles.up}>
                                    {data.title} <span >data</span>
                                </div>
                                <div className={styles.down} key={index}> {data.description}</div>
            
                            </div>
                            <div className={styles.right} key={index}>
                                <div>
                                    ₹ {data.amount}
                                </div>
                                <div> <button type='submit' className='btn btn-primary'>buy</button></div>
            
                            </div>
                            <span className={styles.top}></span>
                            <span className={styles.right1}></span>
                            <span className={styles.button}></span>
                            <span classN={styles.left1}></span>
            
                        </div>

                        ))

                       
                    ): (<></>)
                }
            
            </div>
        </>

     )

}
export default Test;




  // const items = [
  //   { title: 'Vodafone-idea', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
  //   { title: 'Airtel', content: [<div key="1"><Cardairtel/></div>, <div key="2"><Cardairtel/></div>, <div key="3"><Cardairtel/></div>] },
   
  //   { title: 'Bsnl', content: [<div key="1"><Cardbsnl/></div>, <div key="2"><Cardbsnl/></div>, <div key="3"><Cardbsnl/></div>] },
  //   { title: 'Jio', content: [<div key="5"><Cardjio/></div>, <div key="6"><Cardjio/></div>,<div key="6"><Cardjio/></div>] },
  //   { title: 'Dishtv', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
  //   { title: 'Tatasky', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
  //   { title: 'VideconApp', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
  //   { title: 'SunDirect', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
  //   { title: 'AirtelMoney', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },

  // ];