import { getHome } from "./homePage";
import { getAbout } from "./aboutPage";
import { getMenu } from "./menuPage";
import './style.css';

const content = document.querySelector('#content');
const homebtn = document.querySelector('#hbtn');
const menubtn = document.querySelector('#mbtn');
const aboutbtn = document.querySelector('#abtn');

homebtn.addEventListener("click", ()=>{
    clear();
    content.append(getHome());  
})

menubtn.addEventListener("click", ()=>{
    clear();
    content.append(getMenu());
})

aboutbtn.addEventListener("click", ()=>{
    clear();
    content.append(getAbout());
})


function clear(){
    content.innerHTML=``;
}
content.append(getHome());