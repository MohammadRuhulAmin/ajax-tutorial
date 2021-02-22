let textButton = document.querySelector('#text-btn');

textButton.addEventListener('click',function(){
    //create4d an Ajax request

    let xhr = new XMLHttpRequest();

    //Prepare the Request 
    xhr.open('GET','./data/message.txt',true);

    //Send Request 
    xhr.send();
    
    
    // Process the request 
    xhr.onload = ()=>{
        if(xhr.status === 200){
            let data = xhr.responseText;
            console.log(data);
            document.querySelector('#text-card').innerHTML = `<h3>${data}</h3>`;

        }
    };


});

// display text-data

let displayTextData = (data)=>{
  
}
