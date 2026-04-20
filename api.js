‎async function askAI(prompt){
‎
‎let response=await fetch("https://api.openai.com/v1/chat/completions",{
‎
‎method:"POST",
‎
‎headers:{
‎"Content-Type":"application/json",
‎"Authorization":"Bearer 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"
‎},
‎
‎body:JSON.stringify({
‎
‎model:"gpt-4o-mini",
‎
‎messages:[
‎{role:"user",content:prompt}
‎]
‎
‎})
‎
‎})
‎
‎let data=await response.json()
‎
‎return data.choices[0].message.content
‎
‎}
