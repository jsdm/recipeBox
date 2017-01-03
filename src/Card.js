import React from 'react';
import './styles/Card.css';

export default ({cardData, showModal, whoop}) => {
  // console.log(cardData);
  const renderCard = (card) => {
    // console.log(cardData);
    const handleClick = (e) => {
      // console.log(e);
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


//  onClick={this.wasClicked().bind(this)}
// <h6 className='categories'>Categories: {data.cat.join(' ')}</h6>
// {this.props.weather.map(this.renderCard)}

// class Card extends Component {
//   constructor(props) {
//     super(props);
//     var modal = props.showModal;
//     // console.log(modal);
//   }
  
  // renderCard (cardData) {
  //   // console.log(Card.props.modal);
  //   // const invertIt = invert;
  //   return (
  //     <div key={cardData.key} className='card' onClick={Card.modal} >
  //       <div className='card-block'>
  //         <h3 className='card-title'>{cardData.recipeTitle}</h3>
  //       </div>
  //       <img className='card-img-top' src={cardData.img} alt='fooditem' />
  //       <div className='card-block'>
  //         <h6 className='card-subtitle text-muted'>{cardData.recipeSubTitle}</h6>
  //         <h6 className='categories'>Categories: {cardData.cat}</h6>
  //       </div>
  //     </div>
  //   );
  // }
  
  
//   render() {
//     // const modal = this.props.showRecipe;
    
    // return(
    //   <div className='card-group'>
    //     {this.props.cardData.map(this.renderCard)}
    //   </div>
//     )
//   }
// }

// export default (props) => {
//   return(
//     <div key={props.key} className='card'>
//       <div className='card-block'>
//         <h3 className='card-title'>{props.recipeTitle}</h3>
//       </div>
//       <img className='card-img-top' src={props.img} alt='fooditem' />
//       <div className='card-block'>
//         <h6 className='card-subtitle text-muted'>{props.recipeSubTitle}</h6>
//         <h6 className='categories'>Categories: {props.cat}</h6>
//       </div>
//     </div>
//   )
// }