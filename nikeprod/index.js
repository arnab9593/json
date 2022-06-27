//store the products array in localstorage as "data"

let prodData = JSON.parse(localStorage.getItem("data")) || [];

function myFunction(event){
    event.preventDefault();

    let form = document.getElementById("product_form");

    let brand = form.product_brand.value;
    let name = form.product_name.value;
    let price = form.product_price.value;
    let image = form.product_image.value;

    let product = new productobj(brand,name,price,image);

    prodData.push(product);
    localStorage.setItem("data",JSON.stringify(prodData));
    location.reload()

}

//obj creation

function productobj(b,n,p,i){
    this.brand = b;
    this.name = n;
    this.price = p;
    this.image = i;

}
