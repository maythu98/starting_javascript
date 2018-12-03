// var myimage = document.querySelector('img');
// myimage.onclick = function() {
// 	var getvalue = myimage.getAttribute('src');
// 	if (getvalue == 'images/firefox1.jpg') {
// 		getvalue = myimage.setAttribute('src', 'images/firefox2.jpg');
// 	}else {
// 		getvalue = myimage.setAttribute('src', 'images/firefox1.jpg');
// 	}
// }

var mybutton = document.querySelector('button');
var myheading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please Enter Name');
	localStorage.setItem('name', myName);
	myheading.textContent = 'Mozilla is cool, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var myName = localStorage.getItem('name');
	myheading.textContent = 'Mozilla is cool, ' + myName;
}

mybutton.onclick= function() {
	setUserName();
}