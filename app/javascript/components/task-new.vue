<script>
  import AppModal from './AppModal'

  export default {
    name: 'task-new',
    components: {
      AppModal
    },
    data() {
      return {
        message: 'task',
        showSearchModal: true,
        modalInstance: null,
        searchInput: "22222"
      }
    },
    methods: {
    },
    watch: {
      // Watch for a change in show, so we can call for open or close.
      showSearchModal(value) {
        if (value) {
          this.open()
        } else if ( ! value) {
          this.close()
        }
      }
    },
    mounted() {
      console.log('mounted')
    }
  }
</script>