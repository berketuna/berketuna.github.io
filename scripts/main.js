let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/icedo.jpg') {
      myImage.setAttribute ('src','images/maltese.jpg');
    } else {
      myImage.setAttribute ('src','images/icedo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'İdefix Bilgilendirme Portalına Hoşgeldin, ' + myName;}
}


  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'İdefix Bilgilendirme Portalına Hoşgeldin, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }