const result=document.querySelector("#answer")
const btn=document.querySelector("#btn");

btn.addEventListener("click",function(){
    let prompt=document.querySelector("#prompt").value;
    console.log(prompt);
    getdata(prompt)
})

async function getdata(prompt) {
    const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
            Authorization: 'Bearer <YOUR APIKEY>',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'tngtech/deepseek-r1t2-chimera:free',
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
        }),
    });
    const data = await res.json();
    console.log(data);
    console.log(data.choices[0].message.content)
    result.textContent=data.choices[0].message.content;
}
