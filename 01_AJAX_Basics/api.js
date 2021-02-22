// api data fetching 

let apiButton = document.querySelector('#api-btn');

apiButton.addEventListener('click',function(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
    xhr.send();
    xhr.onload = ()=>{
        if(xhr.status === 200){
            let data = xhr.responseText;
            console.log(data);
        }
        else console.log("error");
       

    };

});
