let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./data/mobiles.json',true);
    xhr.send();
    xhr.onload = ()=>{
        if(xhr.status === 200){
            let data = xhr.responseText;
             document.querySelector('#json-card').innerHTML = `<h3>${data}</h3>`;
             
            
        }
    };
});
 
