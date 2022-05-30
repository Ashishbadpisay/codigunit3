// Add the coffee to local storage with key "coffee"
var cofeearay=[];
let container=document.getElementById("container")
function coffedetail(cofee)
{
    console.log(cofee)
   cofee.forEach(function(ele,index) {
     var box=document.createElement("div");
     box.style.width="200px";
     box.style.height="300px";
     box.style.border="1px solid red"
     box.style.alignContent="center"
     box.style.marginBottom="10px"
     box.style.paddingLeft="20px"
     let img=document.createElement("img");
     img.src=ele.image;
     img.style.width="90%";
     img.style.height="70%";
     let Price=document.createElement("h3");
     Price.innerText=ele.price;
     let btn=document.createElement("button")
     btn.innerText="Add to buccket";
     btn.addEventListener("click",function(){
       passs(ele,index)
     })

    box.append(img,Price,btn)
    
    container.append(box)


   });
}
function passs(ele,index)
{
  
    cofeearay.push(ele);
    localStorage.setItem("cofee",JSON.stringify(cofeearay))
}




let url = "https://masai-mock-api.herokuapp.com/coffee/menu"
 async function getdata()
 {
     let res = await fetch(url);
     let cofee = await res.json();
     coffedetail(cofee.menu.data)



 }
getdata()