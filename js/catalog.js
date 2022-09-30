/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  // let option = document.createElement('option'); 
  // option.textContent = 'select item';
  // option.value = Product.allProducts[0].name;
  // selectElement.appendChild(option);

  for (let i in Product.allProducts) {
    let newOption =  document.createElement('option');
    newOption.textContent = Product.allProducts[i].name;
    newOption.value = Product.allProducts[i].name;
    selectElement.appendChild(newOption);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading

  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let item = document.getElementById('items').value;
  for (let i = 0; i < Product.allProducts; i++){
  if (Product.allProducts[i] === item){
    Cart.push(item);
  }
 }
  // TODO: get the quantity
  let quantity = parseInt(document.getElementById('quantity').value);
  // TODO: using those, add one item to the Cart
  if (quantity >0){
    cart.addItem(item, quantity);
  }else if (quantity === 0){
    }else {

    }
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() { 
let count = document.getElementById('itemCount');
count.textContent = cart.items.length;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form

  // TODO: Add a new element to the cartContents div with that information

  let viewCart = document.getElementById('cartContents');
  let item = document.getElementById('items').value;
  let quantity = document.getElementById('quantity').value;
  let view = document.createElement('p');
  view.textContent =  `${item}: ${quantity}`;
  viewCart.appendChild(view);
  
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
