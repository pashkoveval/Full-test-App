const express = require('express');
const {
    random
} = require('lodash');
const fs = require('fs');
const {
    v4
} = require('uuid');
let bodyParser = require('body-parser');
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())
const port = process.env.SERVER_PORT || 3000;



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
// обработка запроса по адресу http://localhost:3000/goods-list
app.get('/goods-list', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./db.json'));
    res.json(data);
});
// обработка запроса по адресу http://localhost:3000/cart-list
app.get('/cart-list', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./cart.json'));
    res.json(data);
});
// Cart push item
app.post('/goods-list', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./cart.json'));
    const prod = {
        id: +req.body.id,
        price: req.body.price,
        productName: req.body.productName,
        img: req.body.img,
        quantity: 1,
        data: req.body.date
    }
    if (data.length) {
        let isProductExist = false;
        data.map((item) => {
            if (item.id === prod.id) {
                isProductExist = true;
                item.quantity++
            }
        })
        if (!isProductExist) {
            data.push(prod);
        }
    } else {
        data.push(prod);
    }
    fs.writeFileSync('cart.json', JSON.stringify(data))

    res.json({
        success: false
    });


})
// Cart delet item
app.post('/cart-list', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./cart.json'));
    const index = req.body.index;
    data.splice(index, 1);
    fs.writeFileSync('cart.json', JSON.stringify(data));
    res.json({
        success: false
    });
})
// Cart delet all products
app.post('/clear', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./cart.json'));
    if (req.body.clear) {

        fs.writeFileSync('cart.json', JSON.stringify([]));
    }
    console.log(req.body);

    res.json({
        success: false
    });
})
// Cart quantity-plus
app.post('/quantity-plus', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./cart.json'));
    data[req.body.index].quantity = +req.body.value;

    fs.writeFileSync('cart.json', JSON.stringify(data));
    res.json({
        success: false
    });
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});