const server = 'http://localhost:8080/';
let id = 0;

$(document).ready(() =>{
   const nome = prompt('come ti chiami?');
   /*$('#send').submit(() =>{
         $.get(server + '?type=1&message=' + $('#message').val() + '&sender=' + nome);
         return false
   })*/
   $('#send').submit(() =>{
         $.post(server, 
         {
            message : $('#message').val(),
            sender : nome
         });
         $('#message').val('');
         return false;
   })

   load();

});

function load()
{
   $.get(server + '?id=' + id, (data)=>{
         //data è un array di oggetti
         
         /*let dataObj = JSON.parse(data);
         console.log(dataObj);*/
         
         data.forEach(row => {
            console.log(row);
            //message = messaggio, sender = chi l'ha inviato
            let div = document.createElement('div');
            let sender = document.createElement('p');
            let message = document.createElement('p');
            div.setAttribute('class', 'packet');
            sender.setAttribute('class', 'm sender');
            message.setAttribute('class', 'm message');
            sender.innerHTML= row.sender;
            message.innerHTML= row.message;
            div.appendChild(sender);
            div.appendChild(message);
            document.getElementById('chat').appendChild(div);
            id = row.id;
         });

         setTimeout(() => {
            load(); 
         }, 500);
   })
}