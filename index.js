const express = require('express')
const cors = require('cors')
const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())

const {open} = sqlite

const dbPath = path.join(__dirname, 'database.db')

let db = null
const initializeDBAndServer = async ()=>{
    db = await open({
        filename: dbPath,
        driver: sqlite3.Database
    })

    app.listen(3000, ()=>{
        console.log("Server Started at http://localhost:3000/");
    })
}

initializeDBAndServer()


// 2. Create an API to fetch a product by product id
app.get('/products/:productId', async (req, res) => {
    try {
        const productId = parseInt(req.params.productId);

        const queryToGetBasedOnId = 'SELECT * FROM products WHERE id = ?'
    
        const product = await db.get(queryToGetBasedOnId, [productId]);
        res.send(product)
    } catch (error) {
        console.log(error)
    }
});



// 3. Create an API to fetch all products with filters and pagination
app.get('/products', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;

        let productName = req.query.productName;
        let category = req.query.category;

        const startOffset = (page - 1) * pageSize;

        let sqlQuery = `
            SELECT * FROM products
            WHERE 1=1`; // Always true condition

        let queryParams = [];

        if (productName) {
            sqlQuery += ` AND lower(product_name) = ?`;
            queryParams.push(productName.toLowerCase());
        }

        if (category) {
            sqlQuery += ` AND lower(product_category) = ?`;
            queryParams.push(category.toLowerCase());
        }

        sqlQuery += `
            LIMIT ? OFFSET ?
        `;
        queryParams.push(pageSize, startOffset);

        const products = await db.all(sqlQuery, queryParams);
        res.send(products);
    } catch (e) {
        console.log(`Error: ${e.message}`);
        res.status(500).send('Failed to fetch products');
    }
});





// 4. Create an API to delete a product by id

app.delete('/products/:productId', async (req, res) => {
    try {
        const productId = parseInt(req.params.productId);

        const sqlQuery = 'DELETE FROM products WHERE id = ?';

        const response = await db.run(sqlQuery, [productId]);
        res.send(`product deleted successfully with id: ${response.lastID}`)
    } catch (e) {
        console.log(`Error: ${e.message}`);
        res.status(500).send('Failed to delete product');
    }
});
