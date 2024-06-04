import React from 'react';
import Product from './Product';
import { Grid } from '@mui/material';

const ProductList = ({ products, addToCart }) => {
    return (
        <Grid container spacing={4}>
            {products.map(product => (
                <Grid item key={product.id} xs={12} sm={6} md={4}>
                    <Product product={product} addToCart={addToCart} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
