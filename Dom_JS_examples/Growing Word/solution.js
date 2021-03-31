// function growingWord() {

//   let heading = document.querySelector('h1');
//   let currentColorElement = document.querySelector

//   if (!heading.style.fontSize){
//       let firstColourElement = document.getElementById('blueDiv');
//       firstColourElement.setAttribute('current-color',true);
      

//      heading.style.fontSize '2px';
//      heading.style.color='blue';
//   } else {
//     let size = parseInt(heading.style.fontSize)*2;
//      heading.style.fontSize = `${size}px`;

//      let colorsElelemnts= document.querySelector('#colors');
    

//   } 


// }


  function solution() {

    let parentElement = document.getElementById('exercise');
    let growingWorldElement =parentElement.lastElementChild;
    
    
      if(!growingWorldElement.style.fontSize) {
          growingWorldElement.style.fontSize = '2px';
      } else {
        growingWorldElement.style.fontSize = (parseInt(growingWorldElement.style.fontSize)*2)+'px';

      }

}