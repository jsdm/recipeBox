import React, { Component } from 'react';
import './styles/Modal.css';

 class Modal extends Component {
   constructor() {
     super();
     this.state = { classes: 'modal hidden' };
     this.openCloseModal = this.openCloseModal.bind(this);
   }
  openCloseModal() {
    if(this.state.classes === 'modal hidden') this.setState({classes: 'modal shown'});
    else this.setState({classes: 'modal hidden'});
  }
  render() {
    return (
      <div>
        <button id="myBtn" onClick={this.openCloseModal} >Open Modal</button>
        <div className={ this.state.classes } >
          <div className="modal-content">
            <span className="close" onClick={this.openCloseModal}>x</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;