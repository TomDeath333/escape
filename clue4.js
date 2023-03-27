document.getElementById("button").onclick = function(){


    var anwser = document.getElementById("Answer").value;
    if(anwser != "tag")
    {
        alert("Incorrect");
    }
    else
    {
        window.location = "next3.html"
    }

}