import React, { Component } from 'react';
import Card from './Card.js';
import Data from './Card-data';
import './styles/Card-list.css';

class CardList extends Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {data: new Data().data}
    // ({ showModal })
    // this.state = { term: '' };
  }
  // let data = new Data().data;
  updtData = () =>  {
    this.setState({data: new Data().data});
  }
  // const isNewData = new Data().data;
  // console.log(data);
  render() {
    return(
      <div>
        <Card cardData={this.state.data} showModal={this.props.showModal} />
      </div>
    );
  }
}
// export function updtData () {
//     this.CardList.updtData();
//   }
export default CardList;
// { this.props.data.data.map({Card}) }
// () => this.handleClick(i)
//  <Card cardData={data} showModal={props.showModal} />
// { data.map(Card) }

// <Card cardData={data} showModal={showModal} />