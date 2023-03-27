document.getElementById("button").onclick = function(){


    var anwser = document.getElementById("Answer").value;
    if(anwser != "bedwars")
    {
        alert("Incorrect");
    }
    else
    {
        window.location = "next2.html"
    }

}