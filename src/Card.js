import React from 'react';
import './styles/Card.css';

export default ({cardData, showModal, whoop}) => {
  const renderCard = (card) => {
    const handleClick = (e) => {
      showModal(e);
    }
    return (
      <div key={card.key} className='card' onClick={e => handleClick(card)} >
        <div className='card-block'>
          <h3 className='card-title'>{card.recipeTitle}</h3>
        </div>
        <img className='card-img-top' src={card.img} alt='fooditem' />
        <div className='card-block'>
          <h6 className='card-subtitle text-muted'>{card.recipeSubTitle}</h6>
          <h6 className='categories'>Categories: {card.cat}</h6>
        </div>
      </div>
    );
  }

  return(
    <div className='card-group'>
      {cardData.map(renderCard)}
    </div>
  )
}