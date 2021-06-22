// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "../../assets/stylesheets/application.scss"
require("../controllers");
import Switch from "../lib/Switch";
import Vue from "vue";
import App from "../app";

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('DOMContentLoaded', () => {
  let switchElement = document.querySelectorAll('.has-switch');
  switchElement.forEach(function (element) {

    if (element) {
      let switchObj = new Switch(element, {});
      element.addEventListener('change.app.switch', function (event) {
        console.log('tiger event')
      })
      switchObj.show()
    }
  });
})