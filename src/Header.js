import React, { Component } from 'react';
// import { addDataEntry, editDataEntry } from './Card-data';
import ModalEntry from './ModalEntry';
import './styles/Header.css';

export default class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {classes: 'hide'}
  }
  hide = () => {
    if(this.state.classes === 'hide') this.setState({classes: ''});
    else this.setState({classes: 'hide'});
  }
  render() {
    return (
      <div className='header'>
        <div className='line' >
          <h1 className='headline'>Recipe Box</h1>
          <button className='btn' onClick={ this.hide } >Add</button>
        </div>
        <div className={this.state.classes} >
          <ModalEntry data={ this.props.data } getData={ this.props.getData } modalClicked={ this.hide } />
        </div>
      </div>
    )
  }
}