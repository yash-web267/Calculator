const input=document.querySelector("input");
const buttons=document.querySelectorAll(".btn");


let expression="";

buttons.forEach((button)=>{
button.addEventListener("click",()=>{
    
    let value=button.innerText;

   switch(value)
   {

    case "C":
                expression="";
                value="";
                input.value="";
                break;

     case "=":
               try{

                expression=Function("return " + expression)().toString();
                input.value=expression;

               }

               catch{
                input.value="Enter a valid expression!";
                expression="";
               }

               break;

     case "⌫":
                expression = expression.slice(0, -1);
                input.value = expression;
                break;


    default:
                expression+=value;
                input.value=expression;



   }




});
});