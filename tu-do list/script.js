const btn=document.querySelector("#btn");
const list=document.querySelector("#list");

btn.addEventListener("click",function(){
    let input=document.querySelector("#data").value
    console.log(input);

    let li=document.createElement("li");
    li.textContent=input;
    list.appendChild(li);
    document.querySelector("#data").value="";
})