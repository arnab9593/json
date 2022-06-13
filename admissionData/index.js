// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit",myFunction);
let studentArr=JSON.parse(localStorage.getItem("admission")) || [];

function myFunction(event){
    event.preventDefault();

    let studentObj={
        studentName: document.querySelector("#name").value,
        studentEmail: document.querySelector("#email").value,
        studentPhone: document.querySelector("#phone").value,
        studentGender: document.querySelector("#gender").value,
        studentCourse: document.querySelector("#course").value,
    };
    studentArr.push(studentObj);
    localStorage.setItem("admission",JSON.stringify(studentArr));

}
console.log(studentArr)