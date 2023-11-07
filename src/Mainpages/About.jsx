import React, { useEffect, useState } from 'react';
import styles from './../Component/cardCss/Test.module.css';
import './Accordion.css';
import Card from './../Component/card/Card';
import Card1 from '../Component/card/Card1';
import Cardairtel from '../Component/card/Cardairtel';
import Cardbsnl from '../Component/card/Cardbsnl';
import Cardjio from '../Component/card/Cardjio';
import plus from './../assets/images/add.png';
import minus from './../assets/images/minus.png';
import Airtel from './../assets/images/air.png';
import Jio from './../assets/images/jio1.png';
import Vodafone_idea from './../assets/images/vodaidea.png';
import bsnl from './../assets/images/bsnl.jpg';
import Dishtv from './../assets/images/dishtv1.webp';
import Videocon from './../assets/images/videocon.png';
import TataSky from './../assets/images/tatasky.jpg';
import SunDirect from './../assets/images/sun.png';












function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const groupedItems = {};
  const [data, setData] = useState(null);
  const [items, setItems] = useState([]); 

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
        responseData.result.forEach((product) => {
          const provider = product.provider;
          if (!groupedItems[provider]) {
            groupedItems[provider] = [];
          }
          groupedItems[provider].push(product);
        });
        console.log(responseData)
        setItems(Object.keys(groupedItems).map((provider, index) => ({
          title: provider,
          content: groupedItems[provider].map((product, subIndex) => (
            <div key={subIndex}>
              <div className={styles.wrapper}>
                <div className={styles.left}>
                  <div className={styles.logo} key={subIndex}>
                    {renderProviderLogo(product.provider)}
                  </div>
                </div>
                <div className={styles.center} key={subIndex}>
                  <div className={styles.up}>
                    {product.title} <span >data</span>
                  </div>
                  <div className={styles.down} key={subIndex}> {product.description}</div>
      
                </div>
                <div className={styles.right} key={subIndex}>
                  <div>
                    ₹ {product.amount}
                  </div>
                  <div> <button type='submit' className='btn btn-primary'>buy</button></div>
      
                </div>
                <span className={styles.top}></span>
                <span className={styles.right1}></span>
                <span className={styles.button}></span>
                <span classN={styles.left1}></span>
              </div>
            </div>
          )),
        })))

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  function renderProviderLogo(provider) {
    switch (provider) {
      case 'Airtel':
        return <img src={Airtel} alt="Airtel" />;
      case 'Jio':
        return <img src={Jio} alt="Jio" />;
      case 'Vodafone-idea':
        return <img src={Vodafone_idea} alt="vodaidea" />;
      case 'DishTv':
        return <img src={Dishtv} alt="dishtv" />;
      case 'VideconApp':
        return <img src={Videocon} alt="Videocon" />;
      case 'Bsnl':
        return <img src={bsnl} alt="bsnl" />;
      case 'Tatasky':
        return <img src={TataSky} alt="Tatasky" />;
      case 'SunDirect':
        return <img src={SunDirect} alt="sundirect" />;


      // Add more cases for other providers
      default:
        return <img src="/default-logo.png" alt="Default" />;
    }
  }
  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };



  return (
    <div className='wrapper-accordion'>
      <div className='wrapper'>
        <h2> Packages</h2>
        <div className='wrapper-according'>
          {
            items? (<>
             {items.map((item, index) => (
            <div key={index}>
              <div
                className={`accordion-item ${index === activeIndex ? 'active' : ''}`}
                onClick={() => handleClick(index)}
              >
                <div className="accordion-header">
                  {index === activeIndex ? (
                    <img src={minus} alt="" className='plus' />

                  ) : (
                    <img src={plus} alt="" className='plus' />


                  )}
                  {item.title}

                </div>

                {index === activeIndex && (
                  <div className="accordion-content" style={{"flex-wrap" : "wrap"}}>
                    {item.content.map((div, divIndex) => (
                      <div key={divIndex}>{div}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
            </>): (<></>)
          }
         
        </div>
      </div>
    </div>
  );
}

export default Accordion;
