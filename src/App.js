import React, { Component } from 'react';
import Data from './Card-data';
import Cardlist from './Card-list.js';
import Header from './Header.js';
// import Modal from './Modal.js';
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
                  data: new Data().data};
    this.invertModal = this.invertModal.bind(this);
  }
  invertModal(e) {
    if(e !== undefined){
      // console.log(e);
      this.setState({modalHeader: e.recipeTitle,
                    modalSubHeader: e.recipeSubTitle,
                    modalCategories: e.cat,
                    modalImg: e.img,
                    modalIngredients: e.ingredients,
                    modalHowToText: e.instructions
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
          </div>
        </div>
        <Header Data={ this.data } />
        <Cardlist showModal={this.invertModal}  />
      </div>
    );
  }
}

export default App;




// <Header newRecipe={this.addRecipe} />
// <Modal />

// <button
//   onClick={() => {
//     this.setState({ count: this.state.count + 1 });
//   }}
// >
// Conditional (ternary) Operator
// this.state.classes === 'modal hidden' ? this.setState({classes: 'modal shown'} : this.setState({classes: 'modal hidden'};
