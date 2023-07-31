import React from 'react'

const MenuCard = ({menuDataa}) => {

  return (
    <div>
        <section className='main-card--cointainer'>
        {menuDataa.map((curElem)=>{
            return (
                <>
                <div className='card-container'>
            <div className='card'>
                <div className='card-body'>
                    <span className='card-number card-circle subtle'>{curElem.id}</span>
                    <span className='card-author subtle' style={{color:"red"}}>{curElem.name}</span>
                    <h2 className='card-title'>{curElem.name}</h2>
                    <span className='card-description subtle'>
                    {curElem.description}
                    </span>
                    <div className='card-read'>Read</div>

                </div>
                <img src={curElem.image} alt="images" className='card-media'></img>
                <span className='card-tag subtle'>Order Now</span>
            </div>
      </div>
      </>
            )
        })}
      </section>
    </div>
  )
}

export default MenuCard
