import React from 'react';
import { removeEntry } from './Card-data';
import ModalEntry from './ModalEntry';
import './styles/Modal.css';

var hidden = 'hidden';
export default function Modal({data, closeModalOnClick, getData, invertModal, editEntry}) {
  const showIngredients = (ing, idx) => {
    if(ing === []) return;
    return (
      <li key={idx} className='ingr' >{ ing }</li>
    )
  }
  const showCategories = (cat, idx) => {
    if(cat === []) return;
    return (
      <li key={idx} className='modal-categories' >{ cat }</li>
    )
  }
  const deleteEntry = (e) => {
    removeEntry(e.target.value);
    getData();
    invertModal();
  }
  const hide = () => {
    console.log(hidden);
    if(hidden === 'hidden') hidden =  '';
    else hidden = 'hidden';
  }
  const editEntryBtn = (e) => {
    invertModal();
    hide();
    // editEntry(data)
    // console.log(e.target);
    // Move Modal to external component to allow for editing
    // Or call method in header to put info from here to there
  }
  return (
    <div>
      <div className={ data.classes } >
        <div className="modal-content">
          <span className="close" onClick={e => this.props.closeModalOnClick(e)}>x</span>
          <h1 className='modal-heading' >{data.modalHeader}</h1>
          <h2 className='modal-sub-heading' >{data.modalSubHeader}</h2>
          <img className='modal-img' alt='fooditem' src={data.modalImg} />
          <ul className='modal-ingr' >{data.modalIngredients.map(showIngredients)}</ul>
          <h2 className='modal-directions-header' >Directions</h2>
          <h3 className='modal-directions'>{data.modalHowToText}</h3>
          <h6 className='modal-cat-headline' >Categories: </h6>
          <ul className='modal-categories' >{data.modalCategories.map(showCategories)}</ul>
          <button className='btn-delete' value={data.modalKey} onClick={e => deleteEntry(e)} >Delete</button>
          <button className='btn-edit' value={data.modalKey} onClick={e => editEntryBtn(e)} >Edit</button>
        </div>
      </div>
      <div className={hidden} >
        <ModalEntry data={ data } getData={ getData } modalClicked={ hide } />
      </div>
    </div>
  );
}
