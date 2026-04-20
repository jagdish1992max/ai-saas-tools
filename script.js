async function generateTitle(){

let topic=document.getElementById("topic").value

let result=await askAI("Give a viral YouTube title about "+topic)

document.getElementById("result").innerText=result

}

async function generateScript(){

let topic=document.getElementById("topic").value

let result=await askAI("Write a YouTube Shorts script about "+topic)

document.getElementById("result").innerText=result

}

async function generateHook(){

let topic=document.getElementById("topic").value

let result=await askAI("Give a viral hook line for "+topic)

document.getElementById("result").innerText=result

}

async function generateIdea(){

let topic=document.getElementById("topic").value

let result=await askAI("Give a viral video idea about "+topic)

document.getElementById("result").innerText=result

}
