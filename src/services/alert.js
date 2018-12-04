const alertService = {
  config: {
    snackbar: {
      color: 'primary',
      timeout: 3000,
      text: '',
      show: false
    },
    dialog: {
      show: false,
      color: 'primary',
      text: ''
    },
    confirm: {
      show: false,
      text: '',
      callback: null,
      choice: function (result) {
        alertService.config.confirm.show = false
        alertService.config.confirm.callback(result)
      }
    }
  },
  toast: function (msg) {
    this.config.snackbar.color = 'primary'
    this.config.snackbar.text = msg
    this.config.snackbar.timeout = 3000
    this.config.snackbar.show = true
  },
  toastError: function (msg) {
    this.config.snackbar.color = 'error'
    this.config.snackbar.text = msg
    this.config.snackbar.timeout = 4000
    this.config.snackbar.show = true
  },

  ok: function (msg) {
    this.config.dialog.color = 'primary'
    this.config.dialog.text = msg
    this.config.dialog.show = true
  },
  error: function (msg) {
    this.config.dialog.color = 'error'
    this.config.dialog.text = msg
    this.config.dialog.show = true
  },

  confirm: function (msg, callback) {
    this.config.confirm.text = msg
    this.config.confirm.callback = callback
    this.config.confirm.show = true
  }
}

export default alertService
