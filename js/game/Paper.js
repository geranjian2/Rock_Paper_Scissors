import { objects } from './enums/enums.js';
class Paper {
    type = objects.PAPER;
    image = './images/icon-paper.svg';
    classHtml = "border-paper circle-shadow-paper";
}
export const paper = new Paper();