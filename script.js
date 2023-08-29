for(let i=0;i<=16;i++){
const container=document.createElement('div');
container.setAttribute('class','boxcontainer');
    for(let j=0;j<=16;j++){
        const innerbox=document.createElement('div');
        innerbox.setAttribute('class','box');
        container.appendChild(innerbox);
    }
    document.body.appendChild(container);
}
document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('mouseover', () => {
      box.classList.add('active');
    });
  });  
/*
-need to add hover eventlistners for each box 
-and changing i and j from 16 to taking user input for square grid <100*/





