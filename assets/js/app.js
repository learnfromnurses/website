
const myButton = document.getElementById('myBtn');

// Show or hide the button
window.onscroll = function() {scrollFunction()};

function scrollFunction () {
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
        myButton.style.display = "block";
    }
    else {
        myButton.style.display = "none";
    }
}

//Scroll to the top function
myButton.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


