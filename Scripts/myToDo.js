//add an item to the list
function newList(){

    var add = document.createElement("li");
    var inputValue = document.getElementById("intext").value;
    var addValue = document.createTextNode(inputValue);
    add.appendChild(addValue);
    if(addValue === ''){
        alert("Add something");
    }else{
        document.getElementById("myList").appendChild(add);
    } 
    document.getElementById("intext").value = "";
    
    //ensure close of the list item
    var span = document.createElement("SPAN");
    var closebtn = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(closebtn);
    add.appendChild(span);
    
    for(i=0;i<close.length;i++){
        close[i].onclick = function(){
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    }
    
//create a close button for each item
var li = document.getElementsByTagName("LI");
var i;
for(i=0;i<li.length;i++){
var span = document.createElement("SPAN");
var closebtn = document.createTextNode("\u00D7");
span.appendChild(closebtn);
li[i].appendChild(span);
span.className = "close";
}

//implement the close button 
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

