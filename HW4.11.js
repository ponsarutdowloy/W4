const express = require('express')
const app = express()

const products = [ 
    { id: 1, name: 'Laptop', price: 30000 }, 
    { id: 2, name: 'Smartphone', price: 15000 }, 
    { id: 3, name: 'Tablet', price: 12000 }, 
    { id: 4, name: 'Smartwatch', price: 8000 },
]

app.get('/products/search', (req, res) => {
    const { name, minPrice, maxPrice } = req.query

    if (!name && !minPrice && !maxPrice) {
        return res.status(400).json({ message: 'กรุณาใส่คำค้นหาหรือช่วงราคา' })
    }
    let result = products
    if (name) {
        const lowerCaseName = name.toLowerCase()
        result = result.filter(product =>
            product.name.toLowerCase().includes(lowerCaseName)
        )
    }
    if (minPrice) {
        result = result.filter(product =>
            product.price >= parseFloat(minPrice)
        )
    }
    if (maxPrice) {
        result = result.filter(product =>
            product.price <= parseFloat(maxPrice)
        )
    }
    if (result.length === 0) {
        return res.status(404).json({ message: 'No products found matching the criteria' })
    }
    res.json(result)
})

app.listen(3000, () => {
    console.log(`เซิร์ฟเวอร์กำลังทำงานที่ http://localhost:3000`)
})