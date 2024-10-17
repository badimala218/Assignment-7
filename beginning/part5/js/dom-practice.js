/*eslint-env browser*/

//STEP 1
const buttonClick = function(e)
{
    window.alert("I have been clicked");
};

//STEP 2
button2.onclick = function(e) 
{
    window.alert("I have been clicked");
};

//STEP 3
button3.addEventListener("click",
    buttonClick);

//STEP 4
button4.addEventListener("click",
    function(e) {
        window.alert("I have been clicked");
    }
);

//STEP 5
document.addEventListener("DOMContentLoaded", () =>
{
    document.getElementById("button5").addEventListener("click",
        function(e) {
            window.alert("I have been clicked");
        }
    );
});


