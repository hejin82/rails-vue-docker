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
import flatpickr from "flatpickr";
import { Japanese } from "flatpickr/dist/l10n/ja";
flatpickr.localize(Japanese);

require('../controllers');
import "bootstrap";
import "@fortawesome/fontawesome-free/js/all"
import tablesort from 'tablesort';

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
Rails.delegate(document, 'a[data-dialog]', 'click', handleConfirm);

Rails.start();
Turbolinks.start();
ActiveStorage.start();

document.addEventListener('DOMContentLoaded', () => {
    // const switchElement = document.querySelectorAll('.has-switch');
    // switchElement.forEach((element) => {
    //     if (element) {
    //         const switchObj = new Switch(element, {});
    //         element.addEventListener('change.app.switch', (event) => {
    //             console.log('tiger event', event);
    //         });
    //         switchObj.show();
    //     }
    // });
    //
    // const switchCheckbox = document.getElementById('switchCheckbox');
    //  if (switchCheckbox) {
    //      switchCheckbox.addEventListener('click', function (event) {
    //          console.log('click:', event);
    //      });
    //      switchCheckbox.addEventListener('change', function (event) {
    //          console.log('change:', event);
    //      })
    //  }
    const a = flatpickr(".flatpickr", {
        allowInput: true,
        clickOpens: false,
    })
    console.log("a:", a)
    if (document.getElementById('table')) {
        tablesort(document.getElementById('table'))
    }

});
