// On clicking remove button the item should be removed from DOM as well as localstorage.
let bucketlist=JSON.parse(localStorage.getItem("cofee"))
let bucket=document.getElementById('bucketlist');
bucketdata()

function bucketdata()
{   var sum=0;
    bucketlist.forEach(function(ele,index) {
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
        sum=sum+Number(ele.price)
        let btn=document.createElement("button")
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
          passs(ele,index)
        })
        
       box.append(img,Price,btn)
       bucket.append(box) 
      
    });
   
   
    
    //console.log(sum)
    var prce=document.getElementById("totalprice");
    prce.innerText=sum
    function passs(ele,index)
    {
        bucketlist.splice(index,1)
        localStorage.setItem("cofee",JSON.stringify(bucketlist));
        window.location.reload();
       
    }






}
