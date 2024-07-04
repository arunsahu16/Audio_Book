import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { GoogleButton } from 'react-google-button';
import userRegLogo from '../../Assets/userReg.jpg';
import HomeNavbar from '../../Components/Navbar';
import { Box, TextField, InputAdornment, Grid } from '@mui/material';
import './style.css';

export default function UserRegister() {
    const scrollRef = useRef();

    const [contactError, setContactError] = useState('');
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [contactNumber, setContactNumber] = useState('');
    const [countryCode, setCountryCode] = useState("91");
    const [password, setPassword] = useState("");
    const [referralCode, setReferralCode] = useState("");

    const handleContactChange = (event) => {
        const value = event.target.value;
        if (/^\d*$/.test(value)) {
            setContactNumber(value);
            if (value.length < 7 || value.length > 15) {
                setContactError('Contact number must be between 7 and 15 digits.');
            } else {
                setContactError('');
            }
        } else {
            setContactError('Invalid Contact Number');
        }
    };

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
                                    <div className="col-12 col-md-6 d-flex ">
                                        <img className="img-fluid rounded-start" loading="lazy" src={userRegLogo} alt="Sign Up and Be Part of Our Community!" />
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
                                                            <h4 className="text-center">Sign Up and Be Part of Our Community!</h4>
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
                                                        <p className="text-center  mb-4">Or register with</p>
                                                    </div>
                                                </div>
                                                <form action="#!">
                                                    <Box className="row gy-3 overflow-hidden">
                                                        <Box className="col-12">
                                                            <TextField
                                                                variant="outlined"
                                                                fullWidth
                                                                label="Full Name"
                                                                name="name"
                                                                id="name"
                                                                placeholder="Full Name"
                                                                required
                                                                onChange={(e) => setFullName(e.target.value)}
                                                                value={fullName}
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <i className="bi bi-person-fill"></i>
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
                                                                label="Email"
                                                                type="email"
                                                                name="email"
                                                                id="email"
                                                                placeholder="Email"
                                                                autoComplete="username"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                value={email}
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
                                                            <Grid container spacing={2}>
                                                                <Grid item xs={3}>
                                                                    <TextField
                                                                        variant="outlined"
                                                                        fullWidth
                                                                        label="Code"
                                                                        name="countryCode"
                                                                        id="countryCode"
                                                                        placeholder="91"
                                                                        onChange={(e) => setCountryCode(e.target.value)}
                                                                        value={countryCode}
                                                                        required
                                                                        inputProps={{
                                                                            maxLength: 5,
                                                                        }}
                                                                        InputProps={{
                                                                            startAdornment: (
                                                                                <InputAdornment position="start">
                                                                                    <i className="bi bi-flag-fill"></i>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }}
                                                                        margin="normal"
                                                                    />
                                                                </Grid>
                                                                <Grid item xs={9}>
                                                                    <TextField
                                                                        variant="outlined"
                                                                        fullWidth
                                                                        label="Contact Number"
                                                                        name="contact"
                                                                        id="contact"
                                                                        placeholder="Contact Number"
                                                                        required
                                                                        value={contactNumber}
                                                                        onChange={handleContactChange}
                                                                        error={!!contactError}
                                                                        helperText={contactError}
                                                                        InputProps={{
                                                                            startAdornment: (
                                                                                <InputAdornment position="start">
                                                                                    <i className="bi bi-telephone-fill"></i>
                                                                                </InputAdornment>
                                                                            ),
                                                                        }}
                                                                        margin="normal"
                                                                    />
                                                                </Grid>
                                                            </Grid>
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
                                                        <Box className="col-12">
                                                            <TextField
                                                                variant="outlined"
                                                                fullWidth
                                                                label="Referral Code"
                                                                name="referral"
                                                                id="referral"
                                                                placeholder="Referral Code (optional)"
                                                                onChange={(e) => setReferralCode(e.target.value)}
                                                                value={referralCode}
                                                                InputProps={{
                                                                    startAdornment: (
                                                                        <InputAdornment position="start">
                                                                            <i className="bi bi-gift-fill"></i>
                                                                        </InputAdornment>
                                                                    ),
                                                                }}
                                                                margin="normal"
                                                            />
                                                        </Box>
                                                        <div className="form-btn col-12">
                                                            <div className="d-grid">
                                                                <button className="btn btn-dark btn-lg" type="button">
                                                                    Sign up now
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </Box>
                                                </form>
                                                <div className="addn-info row">
                                                    <div className="col-12">
                                                        <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-5">
                                                            <Link
                                                                to="/login"
                                                                aria-current="page"
                                                                className="addn-info-text"
                                                            > Already a Member? Login  </Link>
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
            </section>
        </>
    )
}
