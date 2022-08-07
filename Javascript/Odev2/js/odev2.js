let taskHolder = document.querySelector("#task")
let listDOM = document.querySelector("#list")



function newElement() {
    var li = document.createElement("li")
   let aa = taskHolder.value
   aa.trim()
    if(aa.trim()=="")
    {
        $('#liveToast').toast('show')
        taskHolder.value= ""
        
    }
    else {
        li.textContent = aa.trim()
        listDOM.appendChild(li)
        $('#liveToastSuccess').toast('show')
        localStorage.setItem("is",aa.trim())
        taskHolder.value= ""
        // Create a "close" button and append it to each list item

        var myNodelist = document.querySelectorAll("li");
        console.log(myNodelist)
        var i;
        for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
        }

        // Click on a close button to hide the current list item
        var close = document.getElementsByClassName("close");
        var i;
        for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
        }
            
        }
}
console.log(taskHolder.value)

// Create a "close" button and append it to each list item

var myNodelist = document.querySelectorAll("li");
console.log(myNodelist)
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
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

