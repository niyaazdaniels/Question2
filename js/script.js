let input = document.getElementById('input')
let displayBtn = document.getElementById('display').addEventListener('click', displayName)
let toggleBtn = document.getElementById('toggle').addEventListener('click', ascending)
let searchBtn = document.getElementById('search').addEventListener('click', ()=> searchName(input))
let output = document.querySelector('#output')

// array containing names 
const randomName = ['Yuti', 'Peter', 'Steve', 'Eve', 'X', 'Max', 'Igi', 'Alex', 'Brad', 'Zeke', 'Lee', 'Harry',
                'Luther', 'Carl', 'Dave', 'Fred', 'Wale', 'Nigel', 'Que', 'Richard' ];

// function to display names
function displayName (){
    let x = randomName.slice(' ');
    for(let x of randomName){
        output.textContent  = randomName;
    }
}
// function toggle
function ascending(){
    let z = randomName;
    output.textContent = z.sort((a, b) => a.localeCompare(b))
}
//function to search names in array and display if it matches
function searchName(inputTag) {
    if (randomName.includes(inputTag.value)){
        output.textContent = ' Match Found: '+ input.value;
    } else {
        output.textContent = "No match found";
    }
}