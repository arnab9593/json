document.querySelector("button").addEventListener("click",myfunction)
let arr=JSON.parse(localStorage.getItem("userData"))||[];

function myfunction(event){
     event.preventDefault();
   
    let obj={
       "name": document.querySelector("#name").value,
       "mail": document.querySelector("#mail").value,
       "password": document.querySelector("#passwd").value,
   };
    arr.push(obj);
    localStorage.setItem("userData",JSON.stringify(arr));
    console.log(arr);
}

