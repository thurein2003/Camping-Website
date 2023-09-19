// This is button function of the review page
function addTask() {
    var nameInput = document.getElementById('name');
    var reviewInput = document.getElementById('review');
    var emailInput = document.getElementById('email');

    if (nameInput.value === '') {
        alert("Write Your Name");
    } else if (emailInput.value === '') {
        alert("Write Your Email");
    } else if (reviewInput.value ==='') {
        alert("Write your review");
    } else {
        alert("Thanks for giving time!");
    }
}


//This javascript file just testing my skill level

// const inputBox = document.getElementById('name');
// const review = document.getElementById('review');

// function addTask(){
//     if (inputBox.value === ''){
//         alert("please write a review for our page");
//     } else {
     
//     }
//     inputBox.value ='';
//     saveData();
// }



// function saveData(){
//     localStorage.setItem("data",listContainer.innerHTML);
// }
// function showtask(){
//     listContainer.innerHTML = localStorage.getItem("data");
// }
// showtask();

