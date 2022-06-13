// All the Code for All Students Page Goes Here
let arrFromLS = JSON.parse(localStorage.getItem("admission"));

document.querySelector("#filter").addEventListener("change",courseSort);
function courseSort(){
    let dochange = document.querySelector("#filter").value;
    let selectedCourse = arrFromLS.filter(function(elem){
        return elem.studentCourse==dochange;
    });
    displayTable(selectedCourse)
}

let acceptedStudentData = JSON.parse(localStorage.getItem("admission-accepted")) || [];
let rejectedStudentData = JSON.parse(localStorage.getItem("admission-rejected")) || [];

displayTable(arrFromLS);

function displayTable(arrFromLS){
    document.querySelector("tbody").innerHTML="";
    arrFromLS.forEach(function(elem){
        let tr = document.createElement("tr");

        let td1 = document.createElement("td");
            td1.innerText=elem.studentName;
        let td2 = document.createElement("td");
            td2.innerText=elem.studentEmail;
        let td3 = document.createElement("td");
            td3.innerText=elem.studentCourse;
        let td4 = document.createElement("td");
            td4.innerText=elem.studentGender;
        let td5 = document.createElement("td");
            td5.innerText=elem.studentPhone;
        let td6 = document.createElement("td");
            td6.innerText="Accept";
            td6.addEventListener("click",function(){
                admissionAccept(elem);
                // deleteFromLS(elem);
            });
        let td7 = document.createElement("td");
            td7.innerText="Reject";
            td7.addEventListener("click",function(){
                admissionReject(elem);
            });

        tr.append(td1,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
    });
}

function admissionAccept(elem){
    acceptedStudentData.push(elem);
    localStorage.setItem("admission-accepted", JSON.stringify(acceptedStudentData));
}

function admissionReject(elem){
    rejectedStudentData.push(elem);
    localStorage.setItem("admission-rejected", JSON.stringify(rejectedStudentData));
}