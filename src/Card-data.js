// import React from 'react';
import CardList from './Card-list';

var keynr;
export default () => {
  // console.log(JSON.parse(localStorage.recipesFCC));
  let data;
  if(localStorage.recipesFCC) {
    data = JSON.parse(localStorage.getItem('recipesFCC'));
    console.log('localstorage present');
  }
  // if(!localStorage.recipesFCC) {
  else {
    console.log("No localstorage");
    localStorage.recipesFCC = JSON.stringify([
      {
        key: 0,
        recipeTitle: 'Pizza',
        recipeSubTitle: 'Mediteranian Pizza',
        ingredients: ['pizza bottom', 'Tomato Sauce', 'Ham', 'Cheese'],
        instructions: 'Fist roll out the pizza bottom and spread the tomatosauce on it. Then put on the ham and lastly put on the cheese.',
        img: 'https://img.grouponcdn.com/deal/akLMq2jHuyusEMN1sjJW/wx-2048x1229/v1/t440x300.jpg',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 1,
        recipeTitle: 'Pita',
        recipeSubTitle: 'Turkish Pita',
        ingredients: ['pita bread', 'Letuce', 'Ham', 'Cheese', 'Yogurt', 'Garlic'],
        instructions: 'Heat the pita bread. Cut them open and fill them with vegetables, ham and garlic dressing.',
        img: 'http://lorempixel.com/300/180/food',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 2,
        recipeTitle: 'Roast Chicken',
        recipeSubTitle: 'Roast Sticky Chicken-Rotisserie Style',
        ingredients: ['4 teaspoons salt', '2 teaspoons paprika', '1 teaspoon onion powder', '1 teaspoon dried thyme', '1 teaspoon white pepper', '1/2 teaspoon cayenne pepper', '1/2 teaspoon black pepper', '1/2 teaspoon garlic powder', '2 onions, quartered', '2 (4 pound) whole chickens'],
        instructions: 'In a small bowl, mix together salt, paprika, onion powder, thyme, white pepper, black pepper, cayenne pepper, and garlic powder. Remove and discard giblets from chicken. Rinse chicken cavity, and pat dry with paper towel. Rub each chicken inside and out with spice mixture. Place 1 onion into the cavity of each chicken. Place chickens in a resealable bag or double wrap with plastic wrap. Refrigerate overnight, or at least 4 to 6 hours. Preheat oven to 250 degrees F (120 degrees C). Place chickens in a roasting pan. Bake uncovered for 5 hours, to a minimum internal temperature of 180 degrees F (85 degrees C). Let the chickens stand for 10 minutes before carving.',
        img: 'http://lorempixel.com/300/181/food',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 3,
        recipeTitle: 'Pizza',
        recipeSubTitle: 'Mediteranian Pizza',
        ingredients: ['pizza bottom', 'Tomato Sauce', 'Ham', 'Cheese'],
        instructions: 'Fist roll out the pizza bottom and spread the tomatosauce on it. Then put on the ham and lastly put on the cheese.',
        img: 'http://lorempixel.com/300/179/food',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 4,
        recipeTitle: 'Pizza',
        recipeSubTitle: 'Mediteranian Pizza',
        ingredients: ['pizza bottom', 'Tomato Sauce', 'Ham', 'Cheese'],
        instructions: 'Fist roll out the pizza bottom and spread the tomatosauce on it. Then put on the ham and lastly put on the cheese.',
        img: 'http://lorempixel.com/300/182/food',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 5,
        recipeTitle: 'Pizza',
        recipeSubTitle: 'Mediteranian Pizza',
        ingredients: ['pizza bottom', 'Tomato Sauce', 'Ham', 'Cheese'],
        instructions: 'Fist roll out the pizza bottom and spread the tomatosauce on it. Then put on the ham and lastly put on the cheese.',
        img: 'http://lorempixel.com/300/183/food',
        cat: ['pizza', 'dinner', 'kosher']
      }
    ]);
    // storedRecipe = localStorage.getItem(JSON.parse(localStorage.recipesFCC))
    data = JSON.parse(localStorage.getItem('recipesFCC'));
  }
  // data = localStorage.getItem(JSON.parse(localStorage.recipesFCC));
  console.log(data.length);
  // console.log(localStorage.key(0));
  keynr = data.length;
  return (
    {data}
  );
};

export function addEntry(props) {
  let data = JSON.parse(localStorage.getItem('recipesFCC'));
  
  let newRecipe = {
    key: keynr,
    recipeTitle: props.recipeTitle,
    recipeSubTitle: props.recipeSub,
    ingredients: props.recipeIng,
    instructions: props.recipeDirections,
    img: props.recipeImg,
    cat: props.recipeCat
  };
  data.push(newRecipe);
  // console.log(data);
  localStorage.setItem('recipesFCC', JSON.stringify(data));
  new CardList();
}


// storage.setItem(keyName, keyValue);

// Object
// classes:"modal"
// recipeCat:"cddc"
// recipeDirections:"cdsd"
// recipeImg:"cddc"
// recipeIng:"cdscdscv"
// recipeSub:"few"
// recipeTitle:"xxc"