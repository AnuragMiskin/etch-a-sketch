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





