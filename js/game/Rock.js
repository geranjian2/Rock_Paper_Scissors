import { objects } from './enums/enums.js';
class Rock {
    type = objects.ROCK;
    image = './images/icon-rock.svg';
    classHtml = "border-rock circle-shadow-rock";
}
export const rock = new Rock();