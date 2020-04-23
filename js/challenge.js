var intervalID = window.setInterval(myCallback, 1000);
let counterVal = 0;
let heartCount = 0;
let isPaused = false;
function myCallback()
{ 
    if(isPaused)
    {return}

    counterVal++;
    //console.log(counterVal);
    document.querySelector('#counter').textContent = counterVal.toString();

    if(heartCount > 0)
    {
        heart_list = document.querySelector('.likes');
        LI_to_add = document.createElement("LI");
        LI_to_add.textContent = `${counterVal} has been liked ${heartCount} times`;
        heart_list.appendChild(LI_to_add);
        heartCount = 0;
    }
}

let minus_button = document.querySelector('#minus');
let plus_button = document.querySelector('#plus');
let pause_button = document.querySelector('#pause');
let heart_button = document.querySelector('#heart');
let submit_button = document.querySelector('#submit');

minus_button.addEventListener('click',function() {counterVal--;});
plus_button.addEventListener('click',function() {counterVal++;});
pause_button.addEventListener('click', togglePause);
submit_button.addEventListener('submit', addComment);


heart_button = document.querySelector('#heart');
heart_button.addEventListener('click',function() {heartCount++;});

function togglePause(e)
{
    isPaused = !isPaused;
    minus_button.disabled = !minus_button.disabled;
    plus_button.disabled = !plus_button.disabled;
    heart_button.disabled = !heart_button.disabled;
    if (pause_button.innerText == "pause")
    {
        pause_button.innerText = "resume"
    }
    else
    {
        pause_button.innerText = "pause"
    }
}

function addComment(e)
{
    let comment_input = document.querySelector("comment-input");
    let comment_container = document.querySelector('#list');
    let p = comment_container.createElement("p");
    p.innerText = comment_input.innerText;

}



//pause the counter
//disable buttons except pause button
//change text to resume on pause button\
