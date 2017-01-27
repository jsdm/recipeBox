import React from 'react';
import Card from './Card.js';
import Data from './Card-data';
import './styles/Card-list.css';

export default ({ showModal }) => {
  let data = new Data().data;
  console.log(data);
  return(
    <div>
     <Card cardData={data} showModal={showModal} />
    </div>
  )
}
// { this.props.data.data.map({Card}) }
// () => this.handleClick(i)
//  <Card cardData={data} showModal={props.showModal} />
// { data.map(Card) }