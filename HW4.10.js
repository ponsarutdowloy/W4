const express = require('express')
const app = express()

const products = [ 
    { id: 1, name: 'Laptop', price: 30000 }, 
    { id: 2, name: 'Smartphone', price: 15000 }, 
    { id: 3, name: 'Tablet', price: 12000 }, 
    { id: 4, name: 'Smartwatch', price: 8000 },
]

app.use(express.json())

app.get('/products/searchByName', (req, res) => {
    const query = req.query.q
  if (query) {
    const results = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    res.json(results)
  } else {
    res.json(products)
  }
})

app.listen(3000, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:3000`)
})