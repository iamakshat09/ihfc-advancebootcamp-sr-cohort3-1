const btn=document.querySelector("#btn");
const btn1=document.querySelector("#btn1")
const list=document.querySelector("#list");

btn.addEventListener("click",function(){
    let input=document.querySelector("#data").value
    console.log(input);

    let li=document.createElement("li");
    li.textContent=input;
    list.appendChild(li);
    document.querySelector("#data").value="";
    savedata();
})

btn1.addEventListener("click",function(){
    localStorage.removeItem("data");
})

function savedata(){
    localStorage.setItem("data",list.innerHTML)
}

function showdata(){
    list.innerHTML=localStorage.getItem("data");
}

showdata();