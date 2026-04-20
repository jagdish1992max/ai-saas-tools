function generateTitle(){

let topic=document.getElementById("topic").value

let titles=[
"5 Secrets About "+topic,
"Top 7 Facts About "+topic,
"Why "+topic+" Is Trending Right Now",
"Things Nobody Told You About "+topic
]

let random=titles[Math.floor(Math.random()*titles.length)]

document.getElementById("result").innerText=random

}

function generateScript(){

let topic=document.getElementById("topic").value

document.getElementById("result").innerText=
"आज हम बात करने वाले हैं "+topic+" के बारे में। लेकिन जो आप जानने वाले हैं वो शायद आपने पहले कभी नहीं सुना होगा..."

}

function generateHook(){

let topic=document.getElementById("topic").value

document.getElementById("result").innerText=
"अगर आप "+topic+" के बारे में वीडियो बना रहे हो तो यह trick आपकी वीडियो को viral कर सकती है..."

}

function generateIdea(){

let topic=document.getElementById("topic").value

document.getElementById("result").innerText=
topic+" के बारे में 3 shocking facts जो लोग नहीं जानते"

}
