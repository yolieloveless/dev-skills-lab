// We're going to make a Dev Skills App
// We need a user to type in a dev skill
// The we will get the value of the skill
// Add functionality to the button so that we get the value
// We will build a DOM element using that value
// Then we will add that element to the DOM
// Add a delete button - span tag with an X as it's content
// Add a function that will remove the skills from the DOM

// State Variables
let $inputVal

// Event Listeners
$('button').on('click', getInputText)

// Functions

function getInputText(){
    $inputVal = $('input').val()
    $('input').val('')
    createElement($inputVal)
}


function createElement(str){
    $skillElement = $(`<li><span>X</span>${str}</li>`)
    addSkill($skillElement)
}

function addSkill(element){
    $('section ul').append(element)
    $('span').on('click', removeSkill)
}

function removeSkill(evt) {
    $(evt.target).parent().remove()
}