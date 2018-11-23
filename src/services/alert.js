const alertService = {
  snackbar: {
    color: 'primary',
    timeout: 3000,
    text: '',
    show: false
  },
  toast: function (msg) {
    this.snackbar.color = 'primary'
    this.snackbar.text = msg
    this.snackbar.timeout = 3000
    this.snackbar.show = true
  },
  toastError: function (msg) {
    this.snackbar.color = 'error'
    this.snackbar.text = msg
    this.snackbar.timeout = 4000
    this.snackbar.show = true
  }
}

export default alertService
