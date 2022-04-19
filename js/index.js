// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //console.log(price);
  //console.log(quantity);
  //... your code goes here
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  const subtotal = product.querySelector(".subtotal span");

  
  const valueQuantity = quantity.value;
  const valuePrice = price.innerText;
  const precioTotal = valuePrice * valueQuantity;

  subtotal.innerText = precioTotal;
  
  return subtotal;

}

function calculateAll() {
  /*
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  */
  // ITERATION 2
  //... your code goes here
  // todos los productos
  const productos = document.querySelectorAll(".product");

  let sumaTotal = 0;
  // por CADA producto hace el update del subtotal
  productos.forEach((eachProduct) => {
    updateSubtotal(eachProduct);
    sumaTotal = sumaTotal + parseFloat(updateSubtotal(eachProduct).innerText);

  });

  // ITERATION 3
  //... your code goes here
  let totalValueDOM = document.querySelector("#total-value span");
  totalValueDOM.innerText = sumaTotal;

}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget; // producto al que hago click en remove
  //console.log('The target in remove is:', target);
  //... your code goes here
  let pNode = target.parentNode; // solo coge la td, que es el padre del button
  let grandParent = pNode.parentNode; // para coger la fila (elemento tr)

  let subtotalParent = grandParent.querySelector(".subtotal span"); // cogemos el subtotal del producto para actualizar el total del carrito
  let valorSubtotal = parseFloat(subtotalParent.innerText);

  let totalCarritoDOM = document.querySelector("#total-value span");
  let valorTotal = parseFloat(totalCarritoDOM.innerText);
  

  totalCarritoDOM.innerText = valorTotal - valorSubtotal;

  grandParent.remove();
}

// ITERATION 5
function createProduct() {
  //... your code goes here
  //console.log("funcionando!");
  const crearProductoDOM = document.querySelector(".create-product");



}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtonAll = document.querySelectorAll(".btn-remove");
  removeButtonAll.forEach((eachButton) => {
    eachButton.addEventListener('click', removeProduct);
    
  })

  const addProduct = document.querySelector("#create");
  addProduct.addEventListener('click', createProduct);
   
});
