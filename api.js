async function askAI(prompt){

let response=await fetch("https://api.openai.com/v1/chat/completions",{

method:"POST",

headers:{
"Content-Type":"application/json",
"Authorization":"Bearer AIzaSyAX2Y_c-ryZVAmPe9gLJemoPdQBQCxmtYM"
},

body:JSON.stringify({

model:"gpt-4o-mini",

messages:[
{role:"user",content:prompt}
]

})

})

let data=await response.json()

return data.choices[0].message.content

}
