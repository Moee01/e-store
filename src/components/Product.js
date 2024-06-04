import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

const Product = ({ product, addToCart }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={product.image}
                alt={product.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.price}
                </Typography>
                <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
                    Add to Cart
                </Button>
            </CardContent>
        </Card>
    );
};

export default Product;
