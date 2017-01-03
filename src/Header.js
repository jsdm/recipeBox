import React, { Component } from 'react';
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
                    recipeIng: ''}
   }
  showInput = () => {
    if(this.state.classes === 'modal') this.setState({classes: 'modal hide'});
    else this.setState({classes: 'modal'});
  }
  closeModal = (data) => {
    if(data.target.className === 'modal' || data.target.className === 'exit') this.setState({classes: 'modal hide'})
  }
  onSubmit(props) {
    props.preventDefault();
    console.log(props);
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
                <label>Recipe Title: <input className='inp inp1' type="text" name="RecipeTitle" placeholder="Recipe Title" /></label>
                <label>Image Link: <input className='inp inp3' type="text" name="imgLink" placeholder="Image Link" /></label>
              </div>
              <div className='formLine' >
                <label>Recipe Subtitle: <input className='inp inp2' type="text" name="RecipeSubtitle" placeholder="Recipe Subtitle" /></label>
                <label>Categories: <input className='inp inp3' type="text" name="categories" placeholder="Categories" /></label>
              </div>
              <hr />
              <div className='formLine' >
                <label className='textAreaDirLabel' htmlFor="textarea">Directions: </label>
                <label className='textAreaIngLabel' htmlFor="textarea">Ingredients: </label>
              </div>
              <div className='formLine formLine4' >
                <textarea className='textareaDir' rows="30"></textarea>
                <textarea className='textareaIng' rows="30"></textarea>
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