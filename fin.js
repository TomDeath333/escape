document.getElementById("button").onclick = function(){


    var anwser = document.getElementById("pin").value;
    if(anwser != 6245)
    {
        alert("Incorrect");
    }
    else
    {
        window.location = "https://confetti.js.org/"
    }

}