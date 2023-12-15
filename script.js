function load()
{
    document.getElementById("lbtn").disabled=true;
    document.getElementById("rbtn").disabled=true;
    document.getElementById("lbtn").style.backgroundColor="black";
    document.getElementById("rbtn").style.backgroundColor="black";
    document.getElementById('startbtn').innerHTML="Start";
    document.getElementById("scorebtn").disabled=true;
    m=-1;


}
function randomcolor()
{   
    document.getElementById("lbtn").innerHTML="";
    document.getElementById("rbtn").innerHTML="";
    const colors=["green","blue","red","white","yellow","grey","brown"];
    const col1=colors[Math.floor(Math.random()*colors.length)];
    const col2=colors[Math.floor(Math.random()*colors.length)];
    while(col1==col2)
    {
        const col2=colors[Math.floor(Math.random()*colors.length)];
    }
    const texts=[col1,col2];
    const text=texts[Math.floor(Math.random()*texts.length)];
    document.getElementById('lbtn').style.backgroundColor=col1;
    document.getElementById('rbtn').style.backgroundColor=col2;
    const division=["lbtn","rbtn"];
    const div1=division[Math.floor(Math.random()*division.length)];
    document.getElementById(div1).innerHTML=text; 
    const x=document.getElementById("lbtn"); 
    m=m+1;   
}
function score()
{ 
window.alert('score='+m);
}

function start()
{ 
    document.getElementById("scorebtn").disabled=false;
    if(document.getElementById('startbtn').innerHTML=="Stop n show score")
    {  
        score();
        load();
     }
    
    else if(document.getElementById('startbtn').innerHTML=="Start")
    {
        document.getElementById("lbtn").disabled=false;
        document.getElementById("rbtn").disabled=false;
        document.getElementById('startbtn').innerHTML="Stop n show score";
    randomcolor();
    
    }
}

clearbtn()
{
    document.getElementById("lbtn").innerHTML="";
    document.getElementById("rbtn").innerHTML="";
}
