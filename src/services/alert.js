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
  },
  dialog: {
    show: false,
    color: 'primary',
    text: ''
  },
  ok: function (msg) {
    this.dialog.color = 'primary'
    this.dialog.text = msg
    this.dialog.show = true
  },
  error: function (msg) {
    this.dialog.color = 'error'
    this.dialog.text = msg
    this.dialog.show = true
  },
  confirmConfig: {
    show: false,
    text: '',
    callback: null,
    choice: function (result) {
      alertService.confirmConfig.show = false
      alertService.confirmConfig.callback(result)
    }
  },
  confirm: function (msg, callback) {
    this.confirmConfig.text = msg
    this.confirmConfig.callback = callback
    this.confirmConfig.show = true
  }
}

export default alertService
