import React from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './SignInPage.css'; 
import Signin from './assets/Signin.png';
import logo from './assets/Group 18.png';

const SignInPage = () => {
    return (
        <div className="auth-container">
            <div className="auth-form">
                <Container maxWidth="xs">
                    <Typography variant="h4" align="center">
                        <img src={logo} alt='Logo'/>
                    </Typography>
                    <Typography variant="h6" align="center" gutterBottom>
                        Welcome back 
                    </Typography>
                    <Typography variant="h5" align="center" gutterBottom>
                        Sign in
                    </Typography>
                    <form noValidate>
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
                        <Button type="submit" fullWidth variant="contained" color="primary"><a href="/">Sign In</a></Button>
                        <Typography variant="body2" align="center">
                            <Link to="/signup">Don't have an account? Sign up</Link>
                        </Typography>
                    </form>
                </Container>
            </div>
            <div className="auth-image">
                <img src={Signin} alt="Auth Illustration" className="auth-illustration" />
            </div>
        </div>
    );
};

export default SignInPage;
