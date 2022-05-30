let btn=document.getElementById("confirm");
btn.addEventListener("click",myfunc)
function myfunc()
{
    event.preventDefault()
    setTimeout(function(){
        alert("your order is Accepted")
    },);

    setTimeout (function(){
        alert("your order is ready")
    },3000) ;
    setTimeout(function(){
        alert("Your order has  been packed  ")
    },8000);

    setTimeout(function(){
        alert("Your order is out for service  ")
    },10000);
    setTimeout(function(){
        alert("Your order is delivery  ")
    },12000);
}