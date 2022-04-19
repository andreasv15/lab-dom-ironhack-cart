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

  const nameProductoDOM = document.querySelector(".create-product input[type=text]");
  let nameProductoValue = nameProductoDOM.value;
  
  const priceProductoDOM = document.querySelector(".create-product input[type=number]");
  let priceProductoValue = parseFloat(priceProductoDOM.value);
  //console.log(priceProductoValue);
  //console.log(typeof priceProductoValue);

  const tablaProductos = document.querySelector("#cart");
  const bodyProductos = tablaProductos.querySelector("tbody");
  //console.log(bodyProductos);
  const creaProductoTr = document.createElement("tr");
  creaProductoTr.classList.add("product");

  // creamos el elemento que guardará el nombre de producto
  const crearProductoTdName = document.createElement("td");
  crearProductoTdName.classList.add("name");
  crearProductoTdName.innerHTML = `<span>${nameProductoValue}</span>`;

  // creamos el elemento que guardará el precio de producto
  const crearProductoTdPrice = document.createElement("td");
  crearProductoTdPrice.classList.add("price");
  crearProductoTdPrice.innerHTML = `$<span>${priceProductoValue}</span>`;

  // creamos el elemento con la quantity
  const crearProductoTdQuantity = document.createElement("td");
  crearProductoTdQuantity.classList.add("quantity");
  crearProductoTdQuantity.innerHTML = `<input type="number" value="0" min="0" placeholder="Quantity" />`;

  //creamos elemento con el subtotal
  const crearProductoTdSubtotal = document.createElement("td");
  crearProductoTdSubtotal.classList.add("subtotal");
  crearProductoTdSubtotal.innerHTML = `$<span>0</span>`;

  // creamos el boton remove
  const crearProductoTdAction = document.createElement("td");
  crearProductoTdAction.classList.add("action");
  crearProductoTdAction.innerHTML = `<button class="btn btn-remove">Remove</button>`;


  //añadimos los elementos a la tabla, primero al tr de cada producto 
  /*
  creaProductoTr.append(crearProductoTdName);
  creaProductoTr.append(crearProductoTdPrice);
  creaProductoTr.append(crearProductoTdQuantity);
  creaProductoTr.append(crearProductoTdSubtotal);
  creaProductoTr.append(crearProductoTdAction);
  */

  creaProductoTr.append(crearProductoTdName,crearProductoTdPrice,crearProductoTdQuantity,crearProductoTdSubtotal,crearProductoTdAction);

  // y el tr lo agregamos al tbody
  bodyProductos.append(creaProductoTr);

  // y tbody a table
  tablaProductos.append(bodyProductos);

  crearProductoTdAction.addEventListener("click", function() {
    creaProductoTr.remove();
  });

}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtonAll = document.querySelectorAll(".btn-remove");
  removeButtonAll.forEach((eachButton) => {
    eachButton.addEventListener('click', removeProduct);
    
  });

  const addProduct = document.querySelector("#create");
  addProduct.addEventListener('click', createProduct);
   
});
