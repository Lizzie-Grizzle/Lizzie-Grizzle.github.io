$(document).ready(function() {
    var divWidth = $(".icon").width();
      
    $(".icon").mouseenter(function(){
        $(this).animate({
            width: "150px"
        });
    }).mouseleave(function(){
        $(this).animate({
            width: divWidth
        });
    });
});

$(document).ready(function(){
    $("#title").hover(function(){
        $(this).css("background-color", "lightblue");
    }, function(){
        $(this).css("background-color", "lightgray");
    });
});

function welcome(){
    alert("Welcome to My Personal Web Page!!")
}

let myObj;

$(document).ready(function(){
    let newRequest = new XMLHttpRequest();
    

    newRequest.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //document.getElementById("mySkills").innerHTML = " ";
            myObj = JSON.parse(this.responseText);
            console.info("AJAXReady")
            //console.log(myObj[0].name);
            
            
        };
        
    }; 
    newRequest.open("GET", "https://api.github.com/users/Lizzie-Grizzle/repos", true);
    newRequest.send();
});

function showRepos() {
    var ulist = document.getElementById("mySkills");
    console.log(ulist)
    console.log(myObj)
    // use myObj to populate the DOM
    console.log("showRepos")
    for(i=0; i < myObj.length; i++){
        var list = document.createElement("li");
        var newText = document.createTextNode(myObj[i].name);

        list.appendChild(newText);
        ulist.appendChild(list);
    }
}
