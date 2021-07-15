import { Controller } from "stimulus";
import Rails from "@rails/ujs";
import SlimSelect from 'slim-select'


export default class extends Controller{
  static targets = [ "form", "query", "display"]

  connect() {
    new SlimSelect({
      select: '#hideSelectedOptionMultiple',
      hideSelectedOption: true,
      showSearch: false,
      closeOnSelect: false,
      selectByGroup: true,
      allowDeselect: true,
      deselectLabel: '<span class="multiple-delete-item"><i class="fas fa-times"></i></span>',
      'placeholder': ' ', 'text': 'placeholder text'
    })
    new SlimSelect({
      select: '#hideSelectedOptionMultiple2',
      hideSelectedOption: true,
      showSearch: false,
      closeOnSelect: false,
      selectByGroup: true,
      allowDeselect: true,
      deselectLabel: '<span class="multiple-delete-item"><i class="fas fa-times"></i></span>',
      'placeholder': ' ', 'text': 'placeholder text'
    })
    console.log('connect projects controller - js')
  }

  typeclickhandle(event) {
    console.log('typeclickhandle:', event)
    console.log('event.querySelector(\'checkbox\'):', event.target.querySelector('input[type=checkbox]'))
    let checkbox = event.target.querySelector('input[type=checkbox]')
    checkbox.checked = !checkbox.checked
    checkbox.indeterminate = true
  }

  itemClick(event) {
  }
  search(event) {
    const query = event.target.value.toLowerCase()
    console.log('query:', query)
    // Rails.fire(this.formTarget, 'submit')
    console.log(`${this.formTarget},${this.queryTarget},${this.dispalyTarget}`)
  }

  result(event) {

  }

  error(event) {
    console.log(event)
  }

}