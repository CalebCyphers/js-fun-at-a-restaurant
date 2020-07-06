

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
function createRestaurant(nameOf) {
    var object = {
    name: nameOf,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
  }
  return object
}

function addMenuItem(restaurant, newItem) {
  for (var i = 0; i < restaurant.menus[newItem.type].length; i++){
    if (restaurant.menus[newItem.type][i] !== newItem) {

    } else {
      restaurant.menus[newItem.type].splice(i,1)
    }
  }
  restaurant.menus[newItem.type].push(newItem)
}

function removeMenuItem(restaurant, itemName, menuType) {
  for (var i = 0; i <= restaurant.menus[menuType].length; i++){
    if (restaurant.menus[menuType][i].name === itemName) {
        restaurant.menus[menuType].splice(i,1)
        return `No one is eating our ${itemName} - it has been removed from the ${menuType} menu!`
    }
  }
  return `Sorry, we don't sell ${itemName}, try adding a new recipe!`}
