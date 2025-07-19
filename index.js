let cont=document.getElementById('cont');
let a=document.getElementById('age');
let d=document.getElementById('course');
let inp=document.getElementById("name");
let btn=document.getElementById('btn');
btn.onclick=()=>{
    if(inp.value=="" || a.value=='' || d.value==""){
        alert("PLEASE Fill All DETAILS")
    }
    else{
    let p=document.createElement('h4');
    let h=document.createElement('h4');
    let c=document.createElement('h4');
    let sb=document.createElement('div');
    h.textContent="Name : "+inp.value;
    sb.appendChild(h);
    p.textContent="Age : "+a.value;
    sb.appendChild(p);
    c.textContent="Course : "+d.value;
    sb.appendChild(c)
    inp.value="";
    a.value="";
    d.value="";
    sb.classList.add('ele')
    cont.appendChild(sb);
    cont.classList.add('ad');
    }
}