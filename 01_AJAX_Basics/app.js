

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
// api button

let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click',function(){
    let xhr = new XMLHttpRequest();
    
});

// api data fetching 

let apiButton = document.querySelector('#api-btn');

apiButton.addEventListener('click',function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','jsonplaceholder.typicoder.com/users',true);
    xhr.send();
    xhr.onload = ()=>{
        if(xhr.status === 200){
            let data = xhr.responseText;
            console.log(data);
        }

    };

});
