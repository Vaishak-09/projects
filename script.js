let text="";
let x=1;
function load()
{
    document.getElementById("lbtn").disabled=true;
    document.getElementById("rbtn").disabled=true;
    document.getElementById("lbtn").innerHTML="";
    document.getElementById("rbtn").innerHTML="";
    document.getElementById("lbtn").style.backgroundColor="black";
    document.getElementById("rbtn").style.backgroundColor="black";
    document.getElementById('startbtn').innerHTML="Start";
    document.getElementById("scorebtn").disabled=true;
    m=0;
}
function start()
{ 
    
    if(document.getElementById('startbtn').innerHTML=="Stop n show score")
    {   
        score();
        load();
     }
    
    else if(document.getElementById('startbtn').innerHTML=="Start")
    {
        document.getElementById("scorebtn").disabled=false;
        document.getElementById("lbtn").disabled=false;
        document.getElementById("rbtn").disabled=false;
        document.getElementById('startbtn').innerHTML="Stop n show score";
        document.getElementById("lbtn").innerHTML="";
    document.getElementById("rbtn").innerHTML="";
    const colors=["green","blue","red","white","yellow","grey","brown","orange","pink"];
    const col1=colors[Math.floor(Math.random()*colors.length)];
    const col2=colors[Math.floor(Math.random()*colors.length)];
    while(col1==col2)
    {
        col2=colors[Math.floor(Math.random()*colors.length)];
    }
    const texts=[col1,col2];
    text=texts[Math.floor(Math.random()*texts.length)];
    document.getElementById('lbtn').style.backgroundColor=col1;
    document.getElementById('rbtn').style.backgroundColor=col2;
    const division=["lbtn","rbtn"];
    const div1=division[Math.floor(Math.random()*division.length)];
    document.getElementById(div1).innerHTML=text;
     
    }
}
function lclick()
{   
    x=checkans("lbtn",text);
    if(x==1)
    {
     randomcolor();
    }
   
}
function rclick()
{   x=checkans("rbtn",text);
    if(x==1)
    {
      randomcolor();
    }
}
function randomcolor()
{
    document.getElementById("lbtn").innerHTML="";
    document.getElementById("rbtn").innerHTML="";
    const colors=["green","blue","red","white","yellow","grey","brown","orange","pink"];
    const col1=colors[Math.floor(Math.random()*colors.length)];
    const col2=colors[Math.floor(Math.random()*colors.length)];
    if(col1==col2)
    {
        randomcolor();
        
    }
    else
    {
    const texts=[col1,col2];
    text=texts[Math.floor(Math.random()*texts.length)];
    document.getElementById('lbtn').style.backgroundColor=col1;
    document.getElementById('rbtn').style.backgroundColor=col2;
    const division=["lbtn","rbtn"];
    const div1=division[Math.floor(Math.random()*division.length)];
    document.getElementById(div1).innerHTML=text;
    }
}
function checkans(a,d)
{  
    let e="";
    e=document.getElementById(a).style.backgroundColor;
    if(e==d)
    {
        m=m+1;
        return 1;
    }
    else{
        
        wrongans();
    }
}
function wrongans()
{
    alert("ufffff!!!!! wrong color");
    score();
    load();
}
function score()
{ 
window.alert('score='+m);
}



