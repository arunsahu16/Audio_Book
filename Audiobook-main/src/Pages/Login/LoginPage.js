import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';
import sideImage from '../../Assets/background.avif';
import HomeNavbar from '../../Components/Navbar';
import { Box, TextField, InputAdornment } from '@mui/material';
import './style.css';

export default function LoginPage() {
    const scrollRef = useRef();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <div ref={scrollRef}></div>
            <HomeNavbar />
            <section className="login-back p-3 p-md-4 p-xl-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xxl-11">
                            <div className="card border-light-subtle shadow-sm">
                                <div className="row g-0">
                                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                        <img className="img-fluid rounded-start w-100 h-95 object-fit-cover" loading="lazy" src={sideImage} alt="Welcome back you've been missed!" />
                                    </div>
                                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                                        <div className="col-12 col-lg-11 col-xl-10">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="mb-4">
                                                            <div className="text-center mb-4">
                                                                <Link to="/" aria-current="page" className='logo-link'>
                                                                    {/* <img src={logoImage} alt="BootstrapBrain Logo" width="175" height="100" /> */}
                                                                </Link>
                                                            </div>
                                                            <h4 className="text-center">Welcome back you've been missed!</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="other-auth row mt-2">
                                                    <div className="col-12 d-flex flex-column align-items-center">
                                                        <div style={{ width: '300px' }}>
                                                            <div className="other-auth-btn d-flex justify-content-center gap-3">
                                                                <GoogleButton
                                                                    style={{ width: '100%' }}
                                                                    label='Continue with Google'
                                                                />
                                                            </div>
                                                            <div className="d-flex justify-content-center mt-3">
                                                                <div className="other-auth-btn btn btn-lg btn-dark w-100 d-flex justify-content-center gap-3">
                                                                    <i className="bi bi-apple me-auto"></i>
                                                                    <span className="mx-auto apple-text">Continue with Apple</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-center mt-2 mb-4">Or sign in with</p>
                                                    </div>
                                                </div>
                                                <form action="#!">
                                                    <Box className="row gy-3 overflow-hidden">
                                                        <Box className="col-12">
                                                            <TextField
                                                                variant="outlined"
                                                                fullWidth
                                                                label="Email"
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                value={email}
                                                                autoComplete="username"
                                                                required
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <i className="bi bi-envelope-fill"></i>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                                margin="normal"
                                                            />
                                                        </Box>
                                                        <Box className="col-12">
                                                            <TextField
                                                                variant="outlined"
                                                                fullWidth
                                                                label="Password"
                                                                type="password"
                                                                name="password"
                                                                id="password"
                                                                placeholder="Password"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                value={password}
                                                                required
                                                                autoComplete="current-password"
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <i className="bi bi-lock-fill"></i>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                                margin="normal"
                                                            />
                                                        </Box>
                                                        <div className="form-btn col-12">
                                                            <div className="d-grid">
                                                                <button className="btn btn-dark btn-lg" type="button">
                                                                    Sign in now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Box>
                                                </form>
                                                <div className="addn-info row">
                                                    <div className="col-12">
                                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                                                            <Link
                                                                to="/register"
                                                                aria-current="page"
                                                                className="addn-info-text"
                                                            > Create new account  </Link>
                                                            <Link
                                                                to="/"
                                                                aria-current="page"
                                                                className="addn-info-text"
                                                            > Forgot password</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}
