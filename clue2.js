document.getElementById("button").onclick = function(){


    var anwser = document.getElementById("Answer").value;
    if(anwser != "a magician")
    {
        alert("Incorrect");
    }
    else
    {
        window.location = "next1.html"
    }

}