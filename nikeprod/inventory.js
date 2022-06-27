
let data  = JSON.parse(localStorage.getItem("data"));

function append(data){

    data.forEach(function(elem,index){
        data.innerHTML="";
        
        let showdiv = document.createElement("div")

        let image = document.createElement("img");
            image.setAttribute("src",elem.image);
        let brand = document.createElement("p");
            brand.innerText=elem.brand;
        let name = document.createElement("p");
            name.innerText=elem.name;
        let price = document.createElement("p");
            price.innerText=elem.price;
        let remove = document.createElement("button");
            remove.innerText="Remove";
            remove.setAttribute("id","remove_product");
            remove.addEventListener("click",function(){
                removeData(elem,index);
            });

        showdiv.append(image,brand,name,price,remove);
        document.querySelector("#products_data").append(showdiv)
    });
}

append(data);

//remove function

function removeData(elem,index){
    data.splice(index,1);
    localStorage.setItem("data", JSON.stringify(data));
    window.location.reload();
}
