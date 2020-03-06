result =document.getElementById("input");

function add()  
{
num=parseInt(result.value);
if(num>10)
{
    document.getElementById('inc').disabled=true;
      
}
  if(num<10)
  {
    results = num +1;
    document.getElementById('dec').disabled=false;
  }else 
  {
    alert("end");
      document.getElementById('inc').disabled=true;
  }
  
  document.getElementById("input").value =results;
}


function sub()
{
    num=parseInt(result.value);
    if(num>0) 
    {
      results = num -1;
      document.getElementById('inc').disabled=false;
    }
    else 
    {
        alert("end");
        document.getElementById('dec').disabled=true;
    }
    document.getElementById("input").value =results;
}
document.getElementById("inc").addEventListener('click',add);
document.getElementById("dec").addEventListener("click",sub);
