import { Controller } from "stimulus";
import Rails from "@rails/ujs";

export default class extends Controller{
  static targets = [ "form", "query", "display"]

  connect() {
    console.log('connect projects controller - js')
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