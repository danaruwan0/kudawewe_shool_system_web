// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Box,
    InputAdornment,
    IconButton,
    Fade,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {
    Visibility,
    VisibilityOff,
    Person,
    Lock,
    School
} from "@mui/icons-material";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { keyframes, styled } from "@mui/system";
import './Login.css';

// Floating animation for the logo
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

// =====================
// Styled Components
// =====================

// Full page container with white background
const AnimatedBox = styled(Box)({
    minHeight: "100vh",          // full viewport height
    margin: 0,
    display: "flex",             // center the card horizontally
    justifyContent: "center",
    alignItems: "center",        // center the card vertically
    background: "#ffffff",       // page background color (white)
    padding: "20px"
});

// Login card with light blue background and border
const GlassCard = styled(Card)({
    backdropFilter: "blur(12px)",            // subtle glass effect
    background: "#e3f2fd",                   // light blue card background
    borderRadius: "16px",                    // rounded corners
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)", // soft shadow
    border: "1px solid rgba(23, 105, 170, 0.3)", // #1769aa border with transparency
    width: "100%",
    maxWidth: "400px",                       // card max width
    overflow: "hidden",
});

// Logo container with floating animation
const LogoContainer = styled(Box)({
    display: "flex",
    justifyContent: "center",
    marginBottom: "18px",
    animation: `${floatAnimation} 4s ease-in-out infinite`,
});

// TextFields style (username & password inputs)
const StyledTextField = styled(TextField)({
    marginBottom: "18px",
    "& .MuiOutlinedInput-root": {
        borderRadius: "10px",                   // rounded input corners
        transition: "all 0.3s ease",            // smooth transition
        "&:hover fieldset": {
            borderColor: "#1769aa",               // border color on hover
        },
        "&.Mui-focused fieldset": {
            borderColor: "#1769aa",               // border color when focused
            boxShadow: "0 0 0 2px rgba(23, 105, 170, 0.2)", // subtle focus glow
        },
        color: "#333",                           // input text color
    },
    "& .MuiInputLabel-root": {
        color: "#555",                           // label text color
    },
    "& .MuiOutlinedInput-input": {
        color: "#333",                           // typed text color
    },
});

// Login button style
const GradientButton = styled(Button)({
    background: "#1769aa",                      // main button color
    borderRadius: "10px",                       // rounded corners
    padding: "10px",                            // inner padding
    fontWeight: "bold",
    textTransform: "none",                      // no uppercase
    fontSize: "15px",
    color: "#fff",                              // text color
    boxShadow: "0 4px 12px rgba(23, 105, 170, 0.3)", // soft shadow
    transition: "all 0.3s ease",               // smooth hover effect
    "&:hover": {
        transform: "translateY(-2px)",           // move button slightly up
        boxShadow: "0 6px 18px rgba(23, 105, 170, 0.4)", // deeper shadow
        background: "#115293",                   // darker shade on hover
    },
    "&:active": {
        transform: "translateY(0)",              // reset when pressed
    },
});

// =====================
// Login Component
// =====================

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const handleLogin = (e) => {
        e.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            if (username === "admin" && password === "1234") {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful!",
                    text: "Welcome back, redirecting to dashboard",
                    timer: 1500,
                    showConfirmButton: false,
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#ffffff",
                    customClass: {
                        title: 'swal-title',
                        content: 'swal-text'
                    }
                }).then(() => {
                    navigate("/dashboard");
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Login Failed",
                    text: "Invalid username or password. Please try again",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "#ffffff",
                    customClass: {
                        title: 'swal-title',
                        content: 'swal-text'
                    }
                });
            }
            setIsLoading(false);
        }, 1200);

    };

    return (
        <AnimatedBox>
            <Fade in={true} timeout={800}>
                <GlassCard>
                    <CardContent sx={{ p: isMobile ? 3 : 4 }}>
                        <LogoContainer>
                            <School
                                sx={{
                                    fontSize: 60,
                                    color: "#1769aa",                  // logo color
                                    filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.2))" // subtle shadow
                                }}
                            />
                        </LogoContainer>

                        <Typography
                            variant="h4"
                            gutterBottom
                            align="center"
                            fontWeight="bold"
                            sx={{
                                mb: 3,
                                color: "#1769aa",                   // title color
                            }}
                        >
                            Student Portal
                        </Typography>

                        <Typography
                            variant="body2"
                            align="center"
                            sx={{ mb: 3, color: "#555" }}
                        >
                            Sign in to access your dashboard
                        </Typography>

                        <form onSubmit={handleLogin}>
                            <StyledTextField
                                label="Username"
                                variant="outlined"
                                fullWidth
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Person sx={{ color: "#1769aa" }} />  {/* icon color */}
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <StyledTextField
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock sx={{ color: "#1769aa" }} />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff sx={{ color: "#1769aa" }} /> : <Visibility sx={{ color: "#115293" }} />}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <GradientButton
                                type="submit"
                                fullWidth
                                disabled={isLoading}
                                sx={{ mt: 2 }}
                            >
                                {isLoading ? "Signing in..." : "Sign In"}
                            </GradientButton>
                        </form>

                        <Box sx={{ mt: 3, textAlign: "center" }}>
                            <Typography variant="caption" color="#555">
                                enter username and password to login
                            </Typography>
                        </Box>
                    </CardContent>
                </GlassCard>
            </Fade>
        </AnimatedBox>
    );
}
