document.querySelector("form").addEventListener("submit",dsaRevsionApp)
let arr=JSON.parse(localStorage.getItem("queDet"))||[];
showtable(arr)

function dsaRevsionApp(event){
    event.preventDefault();
    let obj={
        title: document.querySelector("#title").value,
        link: document.querySelector("#link").value,
        difficulty: document.querySelector("#difficulty").value,
    };

    arr.push(obj);
    showtable(arr);
    localStorage.setItem("queDet",JSON.stringify(arr));
}

function showtable(arr){
    document.querySelector("tbody").innerHTML="";
    arr.forEach(function (elem){
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
            td1.innerText=elem.title;
        let td2=document.createElement("td");
            td2.innerText=elem.link;
        let td3=document.createElement("td");
            td3.innerText=elem.difficulty;
        let td4=document.createElement("td");
            if(elem.difficulty == "Easy"){
                td4.innerText="No";
            }
            else{
                td4.innerText="Yes";
            }
        tr.append(td1,td2,td3,td4);
        document.querySelector("tbody").append(tr);
    });
}