import React from 'react'
import TinderCard from 'react-tinder-card';
import './TinderCard.css'
function TinderCards() {
  const [cars,setCars]=React.useState([
    {
      name:'Tesla',
      url:'https://cdn.shopify.com/s/files/1/0043/8471/8938/products/TeslaS_Q222_Site_WYD_812x.jpg?v=1655486695'
    },
    {
      name:'BMW',
      url:'https://21motoring.com/wp-content/uploads/2022/07/BMW-i8.jpg'
    },
    {
      name:'Lykan',
      url:'https://www.motorbiscuit.com/wp-content/uploads/2020/06/Lykan-Hypersport-cover.jpg?w=1024&h=512'
    },
    {
      name:'Porche',
      url:'https://www.un-ibiza.com/images/com_coche/30/foto1_30.jpg'
    },
    {
      name:'Lamborghini',
      url:'https://s1.cdn.autoevolution.com/images/models/LAMBORGHINI_LP780-4-Ultimae-Roadster-2022_main.jpg'
    },
    {
      name:'RossRoyal',
      url:'https://images.lifestyleasia.com/wp-content/uploads/sites/7/2020/05/06182231/25-cars-worth-waiting-for-2019-2022-rolls-royce-cullinan-placement-1526580466-2-1024x626.jpg'
    }
  ]);
  return (
    <div className='card-container'>
      {
        cars.map(car =>(
          <TinderCard
          className='swipe'
          key={car.name}
          preventSwipe={['up','down']}
          >
            <div 
            style={{backgroundImage:`url(${car.url})`}}
            className='card'>
              <h3>{car.name}</h3>
            </div>
          </TinderCard>
        ))
      }
    </div>
  )
}

export default TinderCards