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

function lrandomcolor()
{   
    x=checkans("lbtn",text);
    if(x==1)
    {
    document.getElementById("lbtn").click=false;
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
    text=texts[Math.floor(Math.random()*texts.length)];
    document.getElementById('lbtn').style.backgroundColor=col1;
    document.getElementById('rbtn').style.backgroundColor=col2;
    const division=["lbtn","rbtn"];
    const div1=division[Math.floor(Math.random()*division.length)];
    document.getElementById(div1).innerHTML=text;  
}
else{
    alert("uffffff!! wrong color");
}

}

function rrandomcolor()
{   x=checkans("rbtn",text);
    if(x==1)
    {
    document.getElementById("lbtn").click=false;
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
    text=texts[Math.floor(Math.random()*texts.length)];
    document.getElementById('lbtn').style.backgroundColor=col1;
    document.getElementById('rbtn').style.backgroundColor=col2;
    const division=["lbtn","rbtn"];
    const div1=division[Math.floor(Math.random()*division.length)];
    document.getElementById(div1).innerHTML=text;  
    }
    else{
        alert("ufffff!!!!! wrong color");
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
        score();
        load();
        return 0;
    }
 
   
    
}
function score()
{ 
window.alert('score='+m);
}

function start()
{ 
    
    if(document.getElementById('startbtn').innerHTML=="Stop n show score")
    {   
        document.getElementById("scorebtn").disabled=true;
        document.getElementById("lbtn").innerHTML="";
        document.getElementById("rbtn").innerHTML="";
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
    const colors=["green","blue","red","white","yellow","grey","brown"];
    const col1=colors[Math.floor(Math.random()*colors.length)];
    const col2=colors[Math.floor(Math.random()*colors.length)];
    while(col1==col2)
    {
        const col2=colors[Math.floor(Math.random()*colors.length)];
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

