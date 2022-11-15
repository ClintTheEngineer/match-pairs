const firstSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[0]]}`;
   square1.onclick = () => {square1.appendChild(images), setTimeout(function()
     {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
        if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
        square1.removeChild(images)}, 2000);
   tempArr.push([imageFiles[fullGrid[0]], square1.id]);
};
    }
    firstSquare();




    const secondSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[1]]}`;
   square2.onclick = () => {square2.appendChild(images), setTimeout(function()
     {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
        square2.removeChild(images)}, 2000) 
   tempArr.push([imageFiles[fullGrid[1]], square2.id])
};
    }
    secondSquare();
    


   
    const thirdSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[2]]}`;
   square3.onclick = () => {square3.appendChild(images), setTimeout(function() 
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
        square3.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[2]], square3.id])
}; 

    }
    thirdSquare();


    const fourthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[3]]}`;
   square4.onclick = () => {square4.appendChild(images), setTimeout(function() 
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
        square4.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[3]],square4.id])
};
    }
    fourthSquare();


    const fifthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[4]]}`;
   square5.onclick = () => {square5.appendChild(images), setTimeout(function() 
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       }     
    square5.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[4]], square5.id])
};  
    }
    fifthSquare();


    const sixthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[5]]}`;
   square6.onclick = () => {square6.appendChild(images), setTimeout(function() 
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
        square6.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[5]], square6.id])
};   
    }
    sixthSquare();


    const seventhSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[6]]}`;
   square7.onclick = () => {square7.appendChild(images), setTimeout(function()
     {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
        square7.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[6]], square7.id])
}; 
    }
    seventhSquare();


    const eigthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[7]]}`;
   square8.onclick = () => {square8.appendChild(images), setTimeout(function() 
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       }    
    square8.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[7]], square8.id])
};  
    }
    eigthSquare();


    const ninthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[8]]}`;
   square9.onclick = () => {square9.appendChild(images), setTimeout(function() 
    
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       }   
    square9.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[8]], square9.id])
};   
    }
    ninthSquare();


    const tenthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[9]]}`;
   square10.onclick = () => {square10.appendChild(images), setTimeout(function() 
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
        square10.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[9]], square10.id])
}; 
    }
    tenthSquare();


    const eleventhSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[10]]}`;
   square11.onclick = () => {square11.appendChild(images), setTimeout(function() 
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       }     
    square11.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[10]], square11.id])
};  
    }
    eleventhSquare();


    const twelfthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[11]]}`;
   square12.onclick = () => {square12.appendChild(images), setTimeout(function()
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
       square12.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[11]], square12.id])
};   
    }
    twelfthSquare();


    const thirteenthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[12]]}`;
   square13.onclick = () => {square13.appendChild(images), setTimeout(function()
   {
    let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
    square13.removeChild(images)}, 2000)
   tempArr.push([imageFiles[fullGrid[12]], square13.id])
};   
    }
    thirteenthSquare();


    const fourteenthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[13]]}`;
   square14.onclick = () => {square14.appendChild(images), setTimeout(function()
    {
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       }    
     square14.removeChild(images)}, 2000)
     tempArr.push([imageFiles[fullGrid[13]], square14.id])
};  
    }
    fourteenthSquare();


    const fifteenthSquare = () => {
    const images = document.createElement('img');
    images.src = `${imageFiles[fullGrid[14]]}`;
   square15.onclick = () => {
    square15.appendChild(images), setTimeout(function() { 
        let tempArrLength = tempArr.length;
        let maxLength = 2;
       if (tempArrLength > 2){
           tempArr.splice(0, tempArrLength - maxLength)
       }
       if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
           clearTimeout(remove())
       } 
      square15.removeChild(images)}, 2000)
      tempArr.push([imageFiles[fullGrid[14]], square15.id])
};  
    }
    fifteenthSquare();


    const sixteenthSquare = () => {
    const images = document.createElement('img');
    images.setAttribute('id', 'sixteenth');
    images.src = `${imageFiles[fullGrid[15]]}`;
   square16.onclick = () => {
    square16.appendChild(images), setTimeout(function() {
        let tempArrLength = tempArr.length;
         let maxLength = 2;
        if (tempArrLength > 2){
            tempArr.splice(0, tempArrLength - maxLength)
        }
        if (tempArr[0][0] == tempArr[1][0] && tempArr[0][1] != tempArr[1][1]){
            clearTimeout(remove())
        } 
    square16.removeChild(images)
     }, 2000)
    tempArr.push([imageFiles[fullGrid[15]], square16.id]);
    
};   

   
    }
    sixteenthSquare();
