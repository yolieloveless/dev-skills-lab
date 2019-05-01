// We're going to make a Dev Skills App
// We need a user to type in a dev skill
// The we will get the value of the skill
// Add functionality to the button so that we get the value
// We will build a DOM element using that value
// Then we will add that element to the DOM

// State Variables
let $inputVal

// Event Listeners
$('button').on('click', getInputText)

// Functions

function getInputText() {
    alert('Button Clicked')
}