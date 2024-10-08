const buttons = document.querySelector('.buttons').childNodes;
// console.log(buttons);
const displayResult = document.querySelector('main input');
// console.log(displayResult);
// let result = '';

 
buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        try{
            if(button.textContent==='='){
                if(displayResult.value===''){
                    displayResult.value = displayResult.ariaPlaceholder;  
                }else{
                    displayResult.value = eval(displayResult.value);
                }
            }else
            if(button.textContent==="C"){
                displayResult.value = displayResult.ariaPlaceholder;
            }else{
                
                    displayResult.value += button.textContent;
            }
           
        }catch(error){
            displayResult.value ='Syntax Error';
        }
        
    })
})