document.getElementById("button").onclick = function(){


    var anwser = document.getElementById("Answer").value;
    if(anwser != "math")
    {
        alert("Incorrect");
    }
    else
    {
        window.location = "fin.html"
    }

}