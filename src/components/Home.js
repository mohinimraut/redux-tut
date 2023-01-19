import React from 'react'
import phone from '../assets/phone1.jpg';
import addtocart from '../assets/add-to-cart.png'

function Home() {
  return (
    <div>
      <div className='add-to-cart'>
        <img src={addtocart}/>
      </div>
      <h1>Home Component</h1>
      <div className='cart-wrapper'>
      <div className='img-wrapper item'>
        <img src={phone}/>
      </div>
      <div className='text-wrapper item'>
        <span>
          I-Phone
        </span>
        <span>
          Price: $1000.00
        </span>
      </div>

      <div className='btn-wrapper item'>
        <button>Add To Cart</button>
      </div>
      </div>
    </div>
  )
}

export default Home
