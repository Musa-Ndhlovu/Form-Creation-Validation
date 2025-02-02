//steup and initial code struture
document.addEventListener("DOMContentLoaded", function (){

});

document.getElementById("registration-form")

const form = "registration-form"

document.addEventListener("DOMContentLoaded", function(){
    const feedbackDiv = document.ElementById("form-feedback");
 })

 //form submission and event prevention
 document.addEventListener("DOMContentLoaded", function() {
    const feedbackDiv = document.getElementById("submissions");

form.addEventListener("submit", functiion(event){
    event.preventDefault();

    const username = document.getElementById("username").Value.trim();
    const username = document.getElementById("email").Value.trim();
    const username = document.getElementById("password").Value.trim();

    if (!username || !email || !password) {
        feedbackDiv.textContent = "All fields are required!";
        return;
    }


    feedbackDiv.textContent = "Form submitted successfully!"
})
 })