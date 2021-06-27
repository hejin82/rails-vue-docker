import { Controller } from 'stimulus';

export default class extends Controller {
    initialize() {
        console.log('hello from stimulus');
    }

    static get targets() {
        return ['name', 'counter'];
    }

    countCharacters(event) {
        const characters = this.nameTarget.value.length;
        this.counterTarget.innerText = characters;
    }
}
