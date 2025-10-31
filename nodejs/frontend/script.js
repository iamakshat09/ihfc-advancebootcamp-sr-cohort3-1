const status1=document.querySelector("#status");

async function getdata(){
    const url="http://localhost:3000/";
    const res=await fetch(url)
    const data=await res.json();
    console.log(data)
    status1.textContent=data.status;
}

getdata();