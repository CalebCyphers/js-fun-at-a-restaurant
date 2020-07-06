
function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(menuNewName, price, type) {
  return menuItem = {
    name: menuNewName,
    price: price,
    type: type
}
}



 function addIngredients(newIngredient, ingredientArray) {
    for (var i = 0; i < ingredientArray.length; i++){
      if (ingredientArray[i] !== newIngredient) {

      } else {
        ingredientArray.splice(i,1)
      }
    }
  ingredientArray.push(newIngredient)
}

function formatPrice(badPrice) {
return `$${badPrice}`
}

function decreasePrice(tooHighPrice) {
return tooHighPrice * 0.9
}

function createRecipe(x, y, z) {
  return recipe = {
    title: x,
    ingredients: y,
    type: z
  }
}




module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
