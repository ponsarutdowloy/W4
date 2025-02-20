const express = require('express')
const app = express()

const events = [
    { id: 1, name: 'Tech Conference', location: 'Bangkok', date: '2025-02-15' },
    { id: 2, name: 'Art Exhibition', location: 'Chiang Mai', date: '2025-03-10' },
    { id: 3, name: 'Music Festival', location: 'Bangkok', date: '2025-02-20' }
  ]
  app.get('/events/search', (req, res) => {
    const { name, min_price, max_price } = req.query
    let results = events
    if (name) {
      results = results.filter(events =>
        events.name.toLowerCase().includes(name.toLowerCase())
      )
    }
    if (min_price) {
      results = results.filter(events => events.price >= parseInt(min_price))
    }
    if (max_price) {
      results = results.filter(events => events.price <= parseInt(max_price))
    }
    res.json(results)
  })

app.listen(3000, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:3000`)
})