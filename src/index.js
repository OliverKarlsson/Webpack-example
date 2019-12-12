import {diceThrow} from "./randomDice";
import "./styles/main.scss";
import White1 from "./img/white1.png";
import White2 from "./img/white2.png";
import White3 from "./img/white3.png";
import White4 from "./img/white4.png";
import White5 from "./img/white5.png";
import White6 from "./img/white6.png";

const thrw = diceThrow();
console.log(thrw);
const img = document.body.querySelector("#dice");
switch(thrw){
    case 1:
        img.src = White1;
        break;
    case 2:
        img.src = White2;
        break;
    case 3:
        img.src = White3;
        break;
    case 4:
        img.src = White4;
        break;
    case 5:
        img.src = White5;
        break;
    case 6:
        img.src = White6;
        break;
}

document.body.querySelector("#dice").hidden = false;