const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
var htmlpdf = require('html-pdf')

const pdf = app => {
  router.get('/example', (req, res) => {
    var html = fs.readFileSync('./reports/exemplo.html', 'utf8')

    htmlpdf.create(html, { width: '210mm', height: '297mm' }).toStream((err, stream) => {
      if (err) return res.end(err.stack)
      res.setHeader('Content-type', 'application/pdf')
      stream.pipe(res)
    })
  })

  app.use('/pdf', router)
}
module.exports = pdf
