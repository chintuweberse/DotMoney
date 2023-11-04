import React, { useState } from 'react';
import './Accordion.css';
import Card from './../Component/card/Card';
import Card1 from '../Component/card/Card1';
import Cardairtel from '../Component/card/Cardairtel';
import Cardbsnl from '../Component/card/Cardbsnl';

import Cardjio from '../Component/card/Cardjio';
import plus from './../assets/images/add.png';
import minus from './../assets/images/minus.png';

function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    { title: 'Vodafone', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'Airtel', content: [<div key="1"><Cardairtel/></div>, <div key="2"><Cardairtel/></div>, <div key="3"><Cardairtel/></div>] },
   
    { title: 'Bsnl', content: [<div key="1"><Cardbsnl/></div>, <div key="2"><Cardbsnl/></div>, <div key="3"><Cardbsnl/></div>] },
    { title: 'Jio', content: [<div key="5"><Cardjio/></div>, <div key="6"><Cardjio/></div>,<div key="6"><Cardjio/></div>] },
    { title: 'Dishtv', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'Tatasky', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'VideconApp', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'SunDirect', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'AirtelMoney', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'JioPosLite', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'AeroVoyce', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'Airtel Mitra DTH', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'Bsnl Bill Payment', content: [<div key="1"><Card1/></div>, <div key="2"><Card1/></div>, <div key="3"><Card1/></div>] },
    { title: 'DishTV EasyPay', content: [<div key="5">Content 5</div>, <div key="6">Content 6</div>] },
    { title: 'D2H Pay', content: [<div key="5">Content 5</div>, <div key="6">Content 6</div>] },
    { title: 'AirtelThanks', content: [<div key="5">Content 5</div>, <div key="6">Content 6</div>] },
  ];

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
      {items.map((item, index) => (
        <div key={index}>
          <div
            className={`accordion-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
                <div className="accordion-header">
                {index === activeIndex ? (
              <img src={minus} alt="" className='plus'/>
               
              ) : (
              <img src={plus} alt="" className='plus' />

                
              )}
              {item.title}
              
            </div>
          
            {index === activeIndex && (
              <div className="accordion-content">
                {item.content.map((div, divIndex) => (
                  <div key={divIndex}>{div}</div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      </div>
    </div>
    </div>
  );
}

export default Accordion;
