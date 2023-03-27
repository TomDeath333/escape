document.getElementById("button").onclick = function(){


    var anwser = document.getElementById("Answer").value;
    if(anwser != "the ace of spades")
    {
        alert("Incorrect");
    }
    else
    {
        window.location = "next.html"
    }

}