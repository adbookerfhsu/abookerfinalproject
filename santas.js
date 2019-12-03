/*  Amy Booker
	 INF651 Web Dev I
	 FHSU - Prof David Gray
	 Final Project */

/////// Santa's clock ///////

function santaCountDown(){
    
    //Get today's date//
    var today = new Date();
 
    //Current Month +1 because getMonth starts at 0  for Jan//
    var currentMonth = (today.getMonth() + 1);
 
    //Current day of the month //
    var currentDay = today.getDate();
 
    //Calc you the next year after the clock expires //
    var nextSantaYear = today.getFullYear();
    if(currentMonth == 12 && currentDay > 25){
        nextSantaYear = nextSantaYear + 1;
    }
    var nextSantaDate = nextSantaYear + '-12-25T00:00:00.000Z';
    var hohohoDay = new Date(nextSantaDate);
 
    //Calc difference in days//
    var diffSeconds = Math.floor((hohohoDay.getTime() - today.getTime()) / 1000);
 
    var days = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;
 
    //Starts and resets the clock after Dec 25th //
    if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
        days = Math.floor(diffSeconds / (3600*24));
        diffSeconds  -= days * 3600 * 24;
        hours   = Math.floor(diffSeconds / 3600);
        diffSeconds  -= hours * 3600;
        minutes = Math.floor(diffSeconds / 60);
        diffSeconds  -= minutes * 60;
        seconds = diffSeconds;
    }
 
    //Prints the result to the HTML id="clock"//
    document.getElementById("clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
 
    //Forces the JS to reload every second//
    setTimeout(santaCountDown, 1000);
}
 
santaCountDown();



//////// TO DO LIST STARTS HERE /////

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on "close" to remove the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var listItem = this.parentElement;
    listItem.remove();
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("userInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must type something in the text box in order to add it the list or Santa will add you to the naugty list!!!");
  } else {
    document.getElementById("theList").appendChild(li);
  }
  document.getElementById("userInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

/* Create Print Button function */
function printButton(el) {
	var docbody = document.body.innerHTML;
	var printcontent = document.getElementById(el).innerHTML;
	document.body.innerHTML = printcontent;
	window.print();
	document.body.innerHTML = docbody;
}
