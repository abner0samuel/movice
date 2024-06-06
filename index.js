const btn = document.querySelector("#btn")
const link_box = document.querySelector(".link_box")
btn.addEventListener("click",()=>{
    if(link_box.style.display === "none"){
        link_box.style.display = "flex"
    }else{
        link_box.style.display ="none"
    }
})
const root = document.querySelector(".root")



window.addEventListener("loadstart",()=>{
    root.style.display  = "block"
})
function Link_display(){
    if( link_box.style.display === "flex" ){
        link_box.style.display ="none"
    }
}
document.cookie = "username = Abner ; expires=THU,15 May 2024 12:00:00 UTC:path/";
let allcookie = document.cookie;
console.log("all cookie :  "  +  allcookie);
let expirescookie = document.cookie = "username =; expires=THU,01 jan 1970 00:00:00 UTC;";
console.log("all cookie :  "  +  expirescookie);









const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 5fc515922e68aa8193e51d96aec98440'
    }
  };
  
  fetch('https://api.themoviedb.org/3/certification/movie/list', options)
    .then(response => response.json())
    
    .then(response => console.log(response))
    .catch(err => console.error(err));



//testing some code
// let Vplay = document.querySelector(".movie_box2 .inner_box2 video")
// console.log(Vplay);
// Vplay.addEventListener("click",()=>{
//     Vplay.onfullscreenchange
//     console.log(Vplay.onfullscreenchange);
// })