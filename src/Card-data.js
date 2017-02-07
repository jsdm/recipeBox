export default () => {
  let data;
  if(localStorage.recipesFCC) {
    data = JSON.parse(localStorage.getItem('recipesFCC'));
    // console.log('localstorage present');
  }
  else {
    // console.log("No localstorage");
    localStorage.recipesFCC = JSON.stringify([
      {
        key: 0,
        recipeTitle: 'Pizza',
        recipeSubTitle: 'Mediteranian Pizza',
        ingredients: ['pizza bottom', 'Tomato Sauce', 'Ham', 'Cheese'],
        instructions: 'Fist roll out the pizza bottom and spread the tomatosauce on it. Then put on the ham and lastly put on the cheese.',
        img: 'https://dummyimage.com/440x300/ff78ff/919191',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 1,
        recipeTitle: 'Pita',
        recipeSubTitle: 'Turkish Pita',
        ingredients: ['pita bread', 'Letuce', 'Ham', 'Cheese', 'Yogurt', 'Garlic'],
        instructions: 'Heat the pita bread. Cut them open and fill them with vegetables, ham and garlic dressing.',
        img: 'https://dummyimage.com/440x300/ff78ff/919191',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 2,
        recipeTitle: 'Roast Chicken',
        recipeSubTitle: 'Roast Sticky Chicken-Rotisserie Style',
        ingredients: ['4 teaspoons salt', '2 teaspoons paprika', '1 teaspoon onion powder', '1 teaspoon dried thyme', '1 teaspoon white pepper', '1/2 teaspoon cayenne pepper', '1/2 teaspoon black pepper', '1/2 teaspoon garlic powder', '2 onions, quartered', '2 (4 pound) whole chickens'],
        instructions: 'In a small bowl, mix together salt, paprika, onion powder, thyme, white pepper, black pepper, cayenne pepper, and garlic powder. Remove and discard giblets from chicken. Rinse chicken cavity, and pat dry with paper towel. Rub each chicken inside and out with spice mixture. Place 1 onion into the cavity of each chicken. Place chickens in a resealable bag or double wrap with plastic wrap. Refrigerate overnight, or at least 4 to 6 hours. Preheat oven to 250 degrees F (120 degrees C). Place chickens in a roasting pan. Bake uncovered for 5 hours, to a minimum internal temperature of 180 degrees F (85 degrees C). Let the chickens stand for 10 minutes before carving.',
        img: 'https://dummyimage.com/440x300/ff78ff/919191',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 3,
        recipeTitle: 'Pizza',
        recipeSubTitle: 'Mediteranian Pizza',
        ingredients: ['pizza bottom', 'Tomato Sauce', 'Ham', 'Cheese'],
        instructions: 'Fist roll out the pizza bottom and spread the tomatosauce on it. Then put on the ham and lastly put on the cheese.',
        img: 'https://dummyimage.com/440x300/ff78ff/919191',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 4,
        recipeTitle: 'Pizza',
        recipeSubTitle: 'Mediteranian Pizza',
        ingredients: ['pizza bottom', 'Tomato Sauce', 'Ham', 'Cheese'],
        instructions: 'Fist roll out the pizza bottom and spread the tomatosauce on it. Then put on the ham and lastly put on the cheese.',
        img: 'https://dummyimage.com/440x300/ff78ff/919191',
        cat: ['pizza', 'dinner', 'kosher']
      },
      {
        key: 5,
        recipeTitle: 'Pizza',
        recipeSubTitle: 'Mediteranian Pizza',
        ingredients: ['pizza bottom', 'Tomato Sauce', 'Ham', 'Cheese'],
        instructions: 'Fist roll out the pizza bottom and spread the tomatosauce on it. Then put on the ham and lastly put on the cheese.',
        img: 'https://dummyimage.com/440x300/ff78ff/919191',
        cat: ['pizza', 'dinner', 'kosher']
      }
    ]);
    data = JSON.parse(localStorage.getItem('recipesFCC'));
  }
  return (
    {data}
  );
};

export function addDataEntry(props) {
  let data = JSON.parse(localStorage.getItem('recipesFCC'));
  let keynr = data[data.length-1].key+1;
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
  localStorage.setItem('recipesFCC', JSON.stringify(data));
}
export function removeEntry(key) {
  let data = JSON.parse(localStorage.getItem('recipesFCC'));
  let index = data.findIndex(x => x.key==key);
  data.splice(index, 1);
  localStorage.setItem('recipesFCC', JSON.stringify(data));
}
export function editDataEntry(props,key) {
  let data = JSON.parse(localStorage.getItem('recipesFCC'));
  let index = data.findIndex(x => x.key==key);
  data.splice(index, 1);
  let newRecipe = {
    key: key,
    recipeTitle: props.recipeTitle,
    recipeSubTitle: props.recipeSub,
    ingredients: props.recipeIng,
    instructions: props.recipeDirections,
    img: props.recipeImg,
    cat: props.recipeCat
  };
  data.push(newRecipe);
  localStorage.setItem('recipesFCC', JSON.stringify(data));
}