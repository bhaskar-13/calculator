document.body.innerHTML=`<table>
                        <tr>
                        <td colspan=4 class="textarea" id="result" id="num0">0</td>
                        </tr>
                         <tr>
                         <td id="clear">AC</td>
                         <td id="sign">+/-</td>
                         <td id="mod">%</td>
                         <td id="div">/</td>
                         </tr>
                         <tr>
                         <td id="num7">7</td>
                         <td id="num8">8</td>
                         <td id="num9">9</td>
                         <td id="mult">*</td>
                         </tr>
                         <tr>
                         <td id="num4">4</td>
                         <td id="num5">5</td>
                         <td id="num6">6</td>
                         <td id="sub">-</td>
                         </tr>
                         <tr>
                         <td id="num1">1</td>
                         <td id="num2">2</td>
                         <td id="num3">3</td>
                         <td id="add">+</td>
                         </tr>
                         <td colspan=2 id="num0">0</td>
                         <td id="decimal">.</td>
                         <td id="equal">=</td>
                         </tr>
                         </table>
`
function printSymbol(e)
{   
    let obj=e.target;
    if(result.innerHTML==0)
    {
    result.innerHTML=obj.innerHTML;
    }
    
    else
    {
    result.innerHTML=result.innerHTML+obj.innerHTML;
    }
}
let result=document.getElementById("result");
let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let num3=document.getElementById("num3");
let num4=document.getElementById("num4");
let num5=document.getElementById("num5");
let num6=document.getElementById("num6");
let num7=document.getElementById("num7");
let num8=document.getElementById("num8");
let num9=document.getElementById("num9");
let sub=document.getElementById("sub");
let add=document.getElementById("add");
let mult=document.getElementById("mult");
let div=document.getElementById("div");
let decimal=document.getElementById("decimal");
let num0=document.getElementById("num0");
let clear=document.getElementById("clear");
let equal=document.getElementById("equal");
let modulo=document.getElementById("mod");
let sign=document.getElementById("sign");




num1.addEventListener("click",printSymbol);
num2.addEventListener("click",printSymbol);
num3.addEventListener("click",printSymbol);
num4.addEventListener("click",printSymbol);
num5.addEventListener("click",printSymbol);
num6.addEventListener("click",printSymbol);
num7.addEventListener("click",printSymbol);
num8.addEventListener("click",printSymbol);
num9.addEventListener("click",printSymbol);
sub.addEventListener("click",printSymbol);
add.addEventListener("click",printSymbol);
mult.addEventListener("click",printSymbol);
div.addEventListener("click",printSymbol);
decimal.addEventListener("click",printSymbol);
num0.addEventListener("click",printSymbol);
modulo.addEventListener("click",printSymbol);

equal.addEventListener("click",()=>{
 result.innerHTML=eval(result.innerHTML);   
})

clear.addEventListener("click",()=> result.innerText=0);
sign.addEventListener("click",()=>{
    if(result.innerHTML>0){
        result.innerHTML=-result.innerHTML;
    }
    else{
        result.innerHTML=+(result.innerHTML);
    }
})

// result.addEventListener("keydown",(e)=>{
//     console.log(e);
// });
function keyboard(){

       addEventListener("keydown",(e)=>{
        if(e.key=="=")
        {
            result.innerHTML=eval(result.innerHTML);
        }

        else if((isNaN(e.key)))
        {
            alert("Enter a Number");
        }

        else
        {

        if(result.innerHTML==0)
        result.innerHTML=e.key;
        else
        result.innerHTML=result.innerHTML+e.key;
        }  
         

    })
}

keyboard();
