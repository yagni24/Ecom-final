let carts = document.querySelectorAll('.btn-danger');
let products = [
    {
        name: "Top",
        tag: "Womens Top",
        price: 124,
        inCart: 0
    }
   
]; 

carts[0].addEventListener('click',()=>{
    cartNumbers(products);
})
function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
    }
    else{
        localStorage.setItem('cartNumbers',1);
    }
    setItems(product);
}
function setItems(product){
    product.inCart = 1;

    let cartItems = {
        [product.tag]: product
    }
   
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
onLoadCartNumbers();