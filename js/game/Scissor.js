import { objects } from './enums/enums.js';
class Scissors {
    type = objects.SCISSORS;
    image = './images/icon-scissors.svg';
    classHtml = "border-scissors circle-shadow-scissors";
}
export const scissors = new Scissors();