let textButton = document.querySelector('#text-btn');


textButton.addEventListener('click',()=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET','./data/message.txt',true);
    xhr.send();
    xhr.onload = (data)=>{
        if(xhr.status ===200){
            let data = xhr.responseText;
            document.querySelector('#text-card').innerHTML = `<h3>${data}</h3>`;
        }
    };
});