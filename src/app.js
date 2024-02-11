const express = require('express');
const bodyParser = require('body-parser');
const RoutesCart = require('./RoutesCart');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use('/api/products', RoutesProducts);
app.use('/api/carts', RoutesCart);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
