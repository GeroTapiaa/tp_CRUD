const fs = require('fs');
const path = require('path');

const loadProduct = () =>{
    return JSON.parse(fs.readFileSync(path.join(__dirname, '../data/productsDataBase.json'), 'utf-8'));
}


const storeProduct = (products) =>{
    fs.writeFileSync(path.join(__dirname, '../data/productsDataBase.json'), JSON.stringify(products), 'utf-8');
}
module.exports ={
    loadProduct,
    storeProduct
}
