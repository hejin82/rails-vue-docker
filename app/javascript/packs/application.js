// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from '@rails/ujs';
import Turbolinks from 'turbolinks';
import * as ActiveStorage from '@rails/activestorage';
import '../channels';
import '../../assets/stylesheets/application.scss';
import Switch from '../lib/Switch';

import AppPj from './app-pj';

require('../controllers');

console.log('AppPj:', AppPj);

Rails.handleConfirm = (link) => {
    console.log('link:', link);
    return false;
};
const handleConfirm = (link) => {
    console.log(link);
};

// Add event listener before the other Rails event listeners like the one
// for `method: :delete`
Rails.delegate(document, 'a[data-confirm-test]', 'click', handleConfirm);

Rails.start();
Turbolinks.start();
ActiveStorage.start();

document.addEventListener('DOMContentLoaded', () => {
    const switchElement = document.querySelectorAll('.has-switch');
    switchElement.forEach((element) => {
        if (element) {
            const switchObj = new Switch(element, {});
            element.addEventListener('change.app.switch', (event) => {
                console.log('tiger event', event);
            });
            switchObj.show();
        }
    });
});
