'use strict'


function getRandomInt(min, max) {
    min = Math.ceil(0);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min);
}


let form = document.getElementById('form');

let table = document.getElementById('table');

let headerArray = ['student Name', 'student Grade', 'Course'];


let studentArray = [];


function Student(name, courses, grades) {

    this.name = name;
    this.grades = getRandomInt();
    this.courses = courses;

    studentArray.push(this);

}


Student.prototype.renderForm = function () {

    let tr = document.createElement('tr');

    let name = document.createElement('td');
    name.textContent = this.name;

    let grades = document.createElement('td');
    grades.textContent = this.grades;

    let courses = document.createElement('td');
    courses.textContent = this.courses;

    tr.appendChild(name);
    tr.appendChild(grades);
    tr.appendChild(courses);
    table.appendChild(tr);

}


// if (grades >= 50 || grades < 100) {
//     let tr = document.createElement('tr')
//     let td = document.createElement('td')
//     td.textContent='PASS'
// }else if (grades<=50) {
   
//     let tr = document.createElement('tr')
//         let td = document.createElement('td')
//         td.textContent='PASS' 
// }


function getLocalStorage() {
    for (let i = 0; i < studentArray.length; i++) {

        let tr = document.createElement('tr');

        let name = document.createElement('td');
        name.textContent = studentArray[i].name;

        let grades = document.createElement('td');
        grades.textContent = studentArray[i].grades;

        let courses = document.createElement('td');
        courses.textContent = studentArray[i].courses;

        tr.appendChild(name);
        tr.appendChild(grades);
        tr.appendChild(courses);
        table.appendChild(tr);
    }

}


function checkLocalStorage() {
    if (localStorage.getItem('students')) {

        studentArray = JSON.parse(localStorage.getItem('students'));
        getLocalStorage();

    }

}

function headerRow() {
    let tr = document.createElement('tr');
    let th;

    for (let i = 0; i < headerArray.length; i++) {

        th = document.createElement('th');
        th.textContent = headerArray[i];
        tr.appendChild(th);
    }
    table.appendChild(tr);
}






form.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();

    let studentName = event.target.studentName.value;
    let courses = event.target.courses.value;

    let studentsForm = new Student(studentName, courses, 0);

    studentsForm.renderForm();


    localStorage.setItem('students', JSON.stringify(studentArray));

}


headerRow();
checkLocalStorage();