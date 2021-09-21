// const listItems = document.querySelectorAll('li');


// listItems.forEach( list => {
//     list.addEventListener('mouseover', hoverEffect)
//     });

// function hoverEffect() {
//     console.log(this);
// }

const getStarted = document.querySelector('#start');
const newDiv = document.createElement('div');
newDiv.className = 'start-menu';
getStarted.addEventListener('mouseover', addDropDown);
getStarted.addEventListener('mouseleave', removeDropDown);

function addDropDown() {
    console.log('test');
    getStarted.appendChild(newDiv);
}

function removeDropDown() {
    getStarted.removeChild(newDiv);
}