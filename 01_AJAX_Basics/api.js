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
            let users = JSON.parse(data);
            console.log(users);
            displayUsers(users);
        }
        else console.log("error");
       

    };

});

//display users
let displayUsers = (users)=>{
   let htmlTemplate = '';
   for(let user of users){
       htmlTemplate +=`<ul>
                            <li>ID : ${user.id}</li>
                            <li>Name ${user.name}</li>
                            <li>Email ${user.email}</li>
                            
                       </ul>`
        document.querySelector('#api-card').innerHTML = htmlTemplate;
   } 
}