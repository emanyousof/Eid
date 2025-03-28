document.getElementById('greet').addEventListener('click', function(){
    let name =document.getElementById('name'). value ;
    let message =document.getElementById('message');
    let cc =document.getElementById('cc'). value ;
    if (name){
       
        message.textContent= document. getElementById('name')  . value ,'عيدك مبارك يا';
     


    }else{
        message.textContent='من فضلك أدخل إسمك' ;
    }
 
});

