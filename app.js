var keys=document.querySelector('.calcKeys');
var display= document.querySelector('#display');

keys.addEventListener("click",event =>{
    let target=event.target;
    if(!target.matches('button')){return false; }
    if(target.matches('.equal')){
        try{
            let result = eval(display.value);
            display.value = result;
        }catch(e){
             console.log(e);
          if(e instanceof SyntaxError){
              Swal.fire({
                 icon: 'error',
                 text: 'Something went wrong! Please try again.',
               })
               display.value='';
            }
        }
    }else if(target.matches('.back')){
          let back=display.value;
          display.value=back.substring(0,back.length-1);
    }else if(target.matches('.clear')){
        display.value="";
    }else{
        display.value+= target.value;
    }
   
});