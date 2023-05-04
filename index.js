
const bota= document.querySelector("#btn1");
function hello(){
  console.log("oi");
}
function word(){
  console.log("gente");
  
}
//adcionar mecanica

bota.addEventListener("click", hello);
bota.addEventListener("click", word);



const bot = document.querySelector("#btn2");
bot.addEventListener("click", ()=>{
  hello();

  word();
}); 
