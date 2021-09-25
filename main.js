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
    // console.log('test');
    getStarted.appendChild(newDiv);
}

function removeDropDown() {
    getStarted.removeChild(newDiv);
}



let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};
let callback = (entries,observer) => {
    entries.forEach(entry => {
        // console.log(entry.isIntersecting);
        // console.log(entry.target)
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target)
        }
    })};

let observer = new IntersectionObserver(callback, options);
let sectionTwoTarget = document.querySelectorAll('.image')

sectionTwoTarget.forEach ( image => {
    observer.observe(image);
})