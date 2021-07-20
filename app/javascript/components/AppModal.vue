<template>
  <div class="modal fade"
       tabindex="-1"
       v-show="show"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Modal from 'bootstrap/js/src/modal';

  export default {
    name: 'app-modal',
    props: {
      show: {
        type: Boolean,
        default: false
      },
      onOpen: {
        type: Function,
        default: null
      },
      onClose: {
        type: Function,
        default: null
      }
    },
    data() {
      return {
        modalInstance: null
      }
    },
    methods: {
      open() {
        if (this.modalInstance) {
          this.modalInstance.show();
        }
      },
      close() {
        if (this.modalInstance) {
          this.modalInstance.hide()
        }
      }
    },
    watch: {
      show(value) {
        console.log('show:', this.value)
        if (value) {
          this.open()
        } else if (!value) {
          this.close()
        }
      }
    },
    mounted() {
      this.modalInstance = new Modal(this.$el, {
        backdrop: 'static',
        keyboard: false,
        focus: true
      });
      console.log('appmodal mounted:', this.$el)
      if (this.show) {
        this.modalInstance.show()
      }
    },
    beforeDestroy() {
      if (this.modalInstance) {
        this.modalInstance.dispose()
        this.modalInstance = null;
      }
    }
  }
</script>