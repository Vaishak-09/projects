function load()
{
    document.getElementById("lbtn").disabled=true;
    document.getElementById("rbtn").disabled=true;
    document.getElementById("ldiv").style.backgroundColor="black";
    document.getElementById("rdiv").style.backgroundColor="black";
    document.getElementById('startbtn').innerHTML="Start";
    m=0;


}
function changecolor(a,b)
{ 
    document.getElementById('ldiv').style.backgroundColor=a;
    document.getElementById('rdiv').style.backgroundColor=b;
    if(m>5)
    {
        score();
        load();
        
    }
    else{
    m=m+1;}
   
}


function score()
{ 
window.alert('score='+m);
}

function start()
{   if(document.getElementById('startbtn').innerHTML=="Stop n show score")
    {  
        score();
        load();
     }
    
    else if(document.getElementById('startbtn').innerHTML=="Start")
    {
        document.getElementById("lbtn").disabled=false;
        document.getElementById("rbtn").disabled=false;
        document.getElementById('startbtn').innerHTML="Stop n show score";
    document.getElementById('ldiv').style.backgroundColor='rgb(10,255,10)';
    document.getElementById('rdiv').style.backgroundColor='rgb(0,0,255)';
    
    }
}

