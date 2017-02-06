import React, { Component } from 'react';
import { addEntry } from './Card-data';
import './styles/Header.css';

 class Headline extends Component {
   constructor(props) {
     super(props);
     this.state = { classes: 'modal hide',
                    recipeTitle: '',
                    recipeImg: '',
                    recipeSub: '',
                    recipeCat: '',
                    recipeDirections: '',
                    recipeIng: '',
                    data: this.props.Data }
   }
  showInput = () => {
    if(this.state.classes === 'modal') this.setState({classes: 'modal hide'});
    else this.setState({classes: 'modal'});
  }
  closeModal = (dat) => {
    if(dat.target.className === 'modal' || dat.target.className === 'exit') this.setState({classes: 'modal hide'});
  }
  onSubmit(props) {
    props.preventDefault();
    this.setState({classes: 'modal hide'});
    addEntry(this.state);
    this.setState({recipeTitle: '', recipeImg: '', recipeSub: '', recipeCat: '', recipeDirections: '', recipeIng: ''});
    this.props.getData();
  }
  onInputChange(props) {
    switch (props.target.name) {
      case 'RecipeTitle':
        this.setState({recipeTitle: props.target.value});
        break;
      case 'ImgLink':
        this.setState({recipeImg: props.target.value});
        break;
      case 'RecipeSubtitle':
        this.setState({recipeSub: props.target.value});
        break;
      case 'Categories':
        this.setState({recipeCat: props.target.value.replace(/\n/g, ",").split(",")});
        break;
      case 'TextareaDir':
        this.setState({recipeDirections: props.target.value});
        break;
      case 'TextareaIng':
        this.setState({recipeIng: props.target.value.replace(/\n/g, ",").split(",")});
        break;
      default: break;
    }
  }
  render() {
  return (
      <div className='header'>
        <div className='line' >
          <h1 className='headline'>Recipe Box</h1>
          <button className='btn' onClick={this.showInput} >Add</button>
        </div>
        <div className={this.state.classes} onClick={data => this.closeModal(data)} >
          <div className='modal-content'>
            <span className="exit" onClick={data => this.closeModal(data)}>x</span>
            <form onSubmit={this.onSubmit.bind(this)} >
              <div className='formLine formLine1' >
                <label>Recipe Title: <input className='inp inp1' type="text" name="RecipeTitle" value={this.state.recipeTitle} onChange={this.onInputChange.bind(this)} /></label>
                <label>Image Link: <input className='inp inp3' type="text" name="ImgLink"  value={this.state.recipeImg} onChange={this.onInputChange.bind(this)}  /></label>
              </div>
              <div className='formLine' >
                <label>Recipe Subtitle: <input className='inp inp2' type="text" name="RecipeSubtitle" value={this.state.recipeSub} onChange={this.onInputChange.bind(this)} /></label>
                <label>Categories: <input className='inp inp3' type="text" name="Categories" value={this.state.recipeCat} onChange={this.onInputChange.bind(this)} /></label>
              </div>
              <hr />
              <div className='formLine' >
                <label className='textAreaDirLabel' htmlFor="textarea">Directions: </label>
                <label className='textAreaIngLabel' htmlFor="textarea">Ingredients: </label>
              </div>
              <div className='formLine formLine4' >
                <textarea className='textareaDir' rows="30" name="TextareaDir" value={this.state.recipeDirections} onChange={this.onInputChange.bind(this)} ></textarea>
                <textarea className='textareaIng' rows="30" name="TextareaIng" value={this.state.recipeIng} onChange={this.onInputChange.bind(this)} ></textarea>
              </div>
              <div className='formLine' >
                <button className='btns btnCancel' type="submit">Cancel</button>
                <button className='btns' type="submit">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Headline