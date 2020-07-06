
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}


function takeOrder(order, orderList) {
  if (orderList.length < 3) {
    orderList.push (order)
  } else { }
};

function refundOrder(orderNumberForRefund, orderList) {
var item = orderNumberForRefund - 1
  orderList.splice(item, 1)
}

function listItems(arr) {
  var newArray = ""
  arr.forEach(function(x){newArray = `${newArray}${x.item}, `})
  return newArray.slice(0,newArray.length-2)

}

function searchOrder(arr, term) {
  var check = false
    for (var i = 0; i < arr.length; i++) {

    if (arr[i].item == term) {check = true
    }
  }
  return check
}
