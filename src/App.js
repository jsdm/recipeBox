import React, { Component } from 'react';
import Data, { removeEntry } from './Card-data';
import Card from './Card.js';
import Header from './Header.js';
import './styles/App.css';
import './styles/Modal.css';

class App extends Component {
  constructor() {
    super();
    this.state = {classes: 'modal hidden',
                  modalHeader: '',
                  modalSubHeader: '',
                  modalIngredients: [],
                  modalHowToText: '',
                  modalImg: '',
                  modalCategories: [],
                  modalKey: 0,
                  data: new Data().data};
    this.invertModal = this.invertModal.bind(this);
    this.getData = this.getData.bind(this);
  }
  invertModal(e) {
    if(e !== undefined){
      this.setState({modalHeader: e.recipeTitle,
                    modalSubHeader: e.recipeSubTitle,
                    modalCategories: e.cat,
                    modalImg: e.img,
                    modalIngredients: e.ingredients,
                    modalHowToText: e.instructions,
                    modalKey: e.key
      });
    }
    if(this.state.classes === 'modal hidden') this.setState({classes: 'modal shown'});
    else this.setState({classes: 'modal hidden'});
  }
  closeModalOnClick(e) {
    if(e.target.className === 'modal shown' || e.target.className === 'close') this.invertModal();
  }
  showIngredients(ing, idx) {
    return (
      <li key={idx} className='ingr' >{ ing }</li>
    )
  }
  showCategories(cat, idx) {
    return (
      <li key={idx} className='modal-categories' >{ cat }</li>
    )
  }
  getData() {
    let updData = JSON.parse(localStorage.getItem('recipesFCC'));
    this.setState({data: updData});
  }
  deleteEntry(e) {
    removeEntry(e.target.value);
    this.getData();
    this.invertModal();
  }
  editEntry(e) {
    // Move Modal to external component to allow for editing
  }
  render() {
    return (
      <div className="App" onClick={ e => this.closeModalOnClick(e) } >
        <div className={ this.state.classes } >
          <div className="modal-content">
            <span className="close" onClick={e => this.closeModalOnClick(e)}>x</span>
            <h1 className='modal-heading' >{this.state.modalHeader}</h1>
            <h2 className='modal-sub-heading' >{this.state.modalSubHeader}</h2>
            <img className='modal-img' alt='fooditem' src={this.state.modalImg} />
            <ul className='modal-ingr' >{this.state.modalIngredients.map(this.showIngredients)}</ul>
            <h2 className='modal-directions-header' >Directions</h2>
            <h3 className='modal-directions'>{this.state.modalHowToText}</h3>
            <h6 className='modal-cat-headline' >Categories: </h6>
            <ul className='modal-categories' >{this.state.modalCategories.map(this.showCategories)}</ul>
            <button className='btn-delete' value={this.state.modalKey} onClick={e => this.deleteEntry(e)} >Delete</button>
            <button className='btn-edit' value={this.state.modalKey} onClick={e => this.editEntry(e)} >Edit</button>
          </div>
        </div>
        <Header Data={ this.state.data } getData={ this.getData } />
        <Card cardData={ this.state.data } showModal={ this.invertModal } />
      </div>
    );
  }
}

export default App;
// <Cardlist showModal={this.invertModal}  />