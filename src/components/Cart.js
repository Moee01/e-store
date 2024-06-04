import React from 'react';
import { List, ListItem, ListItemText, Typography, Divider } from '@mui/material';

const Cart = ({ cartItems }) => {
    return (
        <div>
            <Typography variant="h4" gutterBottom>
                Shopping Cart
            </Typography>
            {cartItems.length === 0 ? (
                <Typography variant="body1">Your cart is empty</Typography>
            ) : (
                <List>
                    {cartItems.map(item => (
                        <div key={item.id}>
                            <ListItem>
                                <ListItemText primary={item.name} secondary={item.price} />
                            </ListItem>
                            <Divider />
                        </div>
                    ))}
                </List>
            )}
        </div>
    );
};

export default Cart;
