import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './SignUpPage.css'; 
import Signup from './assets/Signup.png';
import logo from './assets/Group 18.png';

const SignUpPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-form">
                <Container maxWidth="xs">
                    <Typography variant="h4" align="center">
                        <img src={logo} alt='Logo'/>
                    </Typography>
                    <Typography variant="h6" align="center" gutterBottom>
                        Welcome back !!!
                    </Typography>
                    <Typography variant="h5" align="center" gutterBottom>
                        Sign up
                    </Typography>
                    <form noValidate>
                    <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Name"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                                                <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Surname"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Password Again"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <Button type="submit" fullWidth variant="contained" color="primary">
                            Sign Up
                        </Button>
                        <Typography variant="body2" align="center">
                            <Link to="/signin">Have an account? Sign in</Link>
                        </Typography>
                    </form>
                </Container>
            </div>
            <div className="auth-image">
                <img src={Signup} alt="Auth Illustration" className="auth-illustration" />
            </div>
        </div>
    );
};

export default SignUpPage;
