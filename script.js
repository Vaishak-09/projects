let text="";
let x=0,y=0,s=0,ps=0,fs=0,sdif=0,flag=0;
function load()
{
    flag=0;
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
        alert("Choose the correct color within 2 Seconds");

        let d=new Date();
        fs=d.getSeconds();
        document.getElementById("scorebtn").disabled=false;
        document.getElementById("lbtn").disabled=false;
        document.getElementById("rbtn").disabled=false;
        document.getElementById('startbtn').innerHTML="Stop n show score";
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
}
function lclick()
{   
    y=checktime();
    if(y==1)
    {
    x=checkans("lbtn",text);
    if(x==1)
    {
     randomcolor();
    }
    }
   
}
function rclick()
{ 
    y=checktime();
    if(y==1)
    {
    x=checkans("rbtn",text);
    if(x==1)
    {
      randomcolor();
    }
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
function checktime()
{
    let d=new Date();
    s=d.getSeconds();
    if(flag==0)
    {
        flag=1;
        if(fs>s)
        {
            sdif=60-ps+s;
        }
        else
        {
            sdif=s-fs;
        }
    }
    else if(ps>s)
    {

        sdif=60-ps+s;
    }
    else
    {
        sdif=s-ps;
    }
    ps=s;
    if(sdif<=2)
    {
        return 1;
    }
    else
    {
        alert("time up");
        score();
        load();
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



