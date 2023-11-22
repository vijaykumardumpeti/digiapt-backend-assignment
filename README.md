# digiapt-backend-assignment

# NodeJS CRUD APIs for Products

This project implements CRUD (Create, Read, Update, Delete) APIs for managing products. It provides endpoints to create, retrieve, update, and delete products with additional features like filtering and pagination.

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Create a Product](#1-create-a-product)
  - [Fetch a Product by ID](#2-fetch-a-product-by-id)
  - [Fetch All Products with Filters and Pagination](#3-fetch-all-products-with-filters-and-pagination)
  - [Delete a Product by ID](#4-delete-a-product-by-id)

## Features

1. **Create a Product API**: Create a new product with details such as id, product name, product category, image URL, and product description.

2. **Fetch a Product by ID API**: Retrieve a product by its unique identifier (id).

3. **Fetch All Products with Filters and Pagination API**: Retrieve all products with the option to filter by product name, category, and implement pagination.

4. **Delete a Product by ID API**: Remove a product from the database using its id.

## Requirements

1. Node.js and npm installed.
2. MongoDB or MySQL database.

## Getting Started

### Installation

1. Clone this repository:

   ```bash

   git clone (https://github.com/vijaykumardumpeti/digiapt-backend-assignment.git)https://github.com/vijaykumardumpeti/digiapt-backend-assignment.git
   cd digiapt-backend-assignment

API Endpoints

1. **Create a Product
Endpoint: /api/products
Method: POST
Request Payload:
json

**{
  **"productName": "Product Name",
  **"productCategory": "Electronics",
  **"imageUrl": "https://example.com/image.jpg",
  **"productDescription": "Product description goes here"
**}

2. **Fetch a Product by ID
Endpoint: /api/products/:productId
Method: GET

4. **Fetch All Products with Filters and Pagination
Endpoint: /api/products
Method: GET
  Query Parameters:
    page (optional): Page number for pagination.
    pageSize (optional): Number of products per page.
    productName (optional): Filter by product name.
    category (optional): Filter by product category.
   
5. **Delete a Product by ID
  Endpoint: /api/products/:productId
  Method: DELETE   

   
