import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import {
    Box,
    CircularProgress,
    Typography,
    Checkbox,
    FormControlLabel,
    Link,
    Snackbar,
    Alert,
    Button,
    Grid
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import CustomTextField from "../MachinesPage/MantaincePage/CustomTextField";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import './Membership.css';
import Image1 from '../../assets/NAF_lobby.webp';

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import MembersNafinfo from "./MembersNafinfo";



function Membership() {
    const { t, i18n } = useTranslation();
    const [step, setStep] = useState(1); // 1 = email, 2 = mpin, 3 = signup, 4 = temp mpin, 5 = create new mpin
    const [email, setEmail] = useState("");
    const [mpin, setMpin] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [countryCode, setCountryCode] = useState("+49"); // default Germany
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [showMpin, setShowMpin] = useState(false);

    const [termsAccepted, setTermsAccepted] = useState(false);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success", // "success" | "error" | "warning" | "info"
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    // New state for non-digit error snackbar
    const [nonDigitSnackbar, setNonDigitSnackbar] = useState({
        open: false,
        message: "",
    });


    // State for temporary MPIN
    const [tempMpin, setTempMpin] = useState("");
    const [tempMpinLoading, setTempMpinLoading] = useState(false);
    const [resendLoading, setResendLoading] = useState(false);
    const [tempMpinError, setTempMpinError] = useState("");
    const [resendCount, setResendCount] = useState(0);

    // State for MPIN error message
    const [mpinError, setMpinError] = useState("");

    // State for new MPIN (step 5)
    const [newMpin, setNewMpin] = useState("");
    const [confirmNewMpin, setConfirmNewMpin] = useState("");
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [newMpinError, setNewMpinError] = useState("");
    const [newMpinLoading, setNewMpinLoading] = useState(false);

    // Refs for temporary MPIN input boxes
    const tempMpinRefs = useRef(Array(6).fill().map(() => React.createRef()));

    // Refs for new MPIN input boxes
    const newMpinRefs = useRef(Array(6).fill().map(() => React.createRef()));
    const confirmNewMpinRefs = useRef(Array(6).fill().map(() => React.createRef()));

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const { lang } = useParams();
    const navigate = useNavigate();

    // Refs for MPIN input boxes
    const mpinRefs = useRef(Array(6).fill().map(() => React.createRef()));

    // -----------------------------
    // Force re-render when language changes
    // -----------------------------
    useEffect(() => {
    }, [i18n.language]);

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        const email = localStorage.getItem("authEmail");

        if (token && email) {
            axios.get("https://api.naf-cloudsystem.de/api/membership-cards/details", {
                headers: { Authorization: `Bearer ${token}` },
                params: { email }
            })
                .then(() => {
                    navigate(`/${lang}/dashboard`, { replace: true });
                })
                .catch(() => {
                    localStorage.removeItem("authToken");
                    localStorage.removeItem("authEmail");
                    navigate(`/${lang}/membership`, { replace: true });
                });
        }
    }, [navigate, lang]);

    // Validation helpers
    const isValidEmail = (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    const isValidPhone = (val) => /^[0-9]{7,15}$/.test(val);

    // Show non-digit snackbar at top
    const showNonDigitSnackbar = () => {
        setNonDigitSnackbar({
            open: true,
            message: t("membership.alert_enter_only_digits") || "Please enter only digits (0-9)"
        });
    };

    // Close non-digit snackbar
    const handleCloseNonDigitSnackbar = () => {
        setNonDigitSnackbar({ ...nonDigitSnackbar, open: false });
    };

    // Clear MPIN error when user starts typing
    useEffect(() => {
        if (mpin.length > 0) {
            setMpinError("");
            setMessage(""); // Clear any other messages too
        }
    }, [mpin]);

    // Clear temp MPIN error when user starts typing
    useEffect(() => {
        if (tempMpin.length > 0) {
            setTempMpinError("");
        }
    }, [tempMpin]);

    // Clear new MPIN error when user starts typing
    useEffect(() => {
        if (newMpin.length > 0) {
            setNewMpinError("");
        }
    }, [newMpin]);

    // Go to temporary MPIN page
    const goToTempMpinPage = () => {
        if (!isValidEmail(email)) {
            setSnackbar({
                open: true,
                message: t("membership.msg_enter_valid_email"),
                severity: "error",
            });
            return;
        }

        setTempMpinLoading(true);
        setTempMpin("");
        setTempMpinError("");

        // Call API to send temporary MPIN
        handleSendTempMpin();
    };

    // Send temporary MPIN
    const handleSendTempMpin = async () => {
        try {
            const response = await axios.post(
                "https://api.naf-cloudsystem.de/api/forgot-mpin",
                null,
                { params: { email } }
            );

            if (response.status === 200) {
                setStep(4); // Go to temporary MPIN page
                setTempMpinLoading(false);
                // Focus first temporary MPIN box
                setTimeout(() => {
                    if (tempMpinRefs.current[0] && tempMpinRefs.current[0].current) {
                        tempMpinRefs.current[0].current.focus();
                    }
                }, 100);
            } else {
                setTempMpinError(t("membership.msg_request_failed"));
                setTempMpinLoading(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setTempMpinError(t("membership.msg_something_wrong"));
            setTempMpinLoading(false);
        }
    };

    // Resend temporary MPIN
    const handleResendTempMpin = async () => {
        setResendLoading(true);
        setTempMpinError("");

        try {
            const response = await axios.post(
                "https://api.naf-cloudsystem.de/api/forgot-mpin",
                null,
                { params: { email } }
            );

            if (response.status === 200) {
                setResendLoading(false);
                setResendCount(prev => prev + 1);
                // Clear and refocus first box
                tempMpinRefs.current.forEach(ref => {
                    if (ref.current) ref.current.value = '';
                });
                setTempMpin("");
                setTimeout(() => {
                    if (tempMpinRefs.current[0] && tempMpinRefs.current[0].current) {
                        tempMpinRefs.current[0].current.focus();
                    }
                }, 100);
            } else {
                setTempMpinError(t("membership.msg_request_failed"));
                setResendLoading(false);
            }
        } catch (error) {
            console.error("Error:", error);
            setTempMpinError(t("membership.msg_something_wrong"));
            setResendLoading(false);
        }
    };

    // Handle temporary MPIN box input
    const handleTempMpinInput = (index, value) => {
        // Check if the value contains any non-digit characters
        if (value && /\D/.test(value)) {
            showNonDigitSnackbar();
            tempMpinRefs.current[index].current.value = '';
            return;
        }

        const digit = value.replace(/\D/g, "");

        if (digit) {
            const tempMpinArray = tempMpin.split('');
            tempMpinArray[index] = digit;
            const newTempMpin = tempMpinArray.join('');
            if (newTempMpin.length <= 6) {
                setTempMpin(newTempMpin);

                if (index < 5 && tempMpinRefs.current[index + 1]) {
                    tempMpinRefs.current[index + 1].current.focus();
                }

                // Auto-submit when all 6 digits are entered
                if (newTempMpin.length === 6) {
                    handleVerifyTempMpin();
                }
            }
        }
    };

    // Handle temporary MPIN key events
    const handleTempMpinKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            const tempMpinArray = tempMpin.split('');
            tempMpinArray[index] = '';
            const newTempMpin = tempMpinArray.join('');
            setTempMpin(newTempMpin);

            if (index > 0 && tempMpinRefs.current[index - 1]) {
                tempMpinRefs.current[index - 1].current.focus();
            }
        } else if (e.key === 'Delete') {
            e.preventDefault();
            const tempMpinArray = tempMpin.split('');
            for (let i = index; i < 6; i++) {
                tempMpinArray[i] = '';
            }
            const newTempMpin = tempMpinArray.join('');
            setTempMpin(newTempMpin);
            tempMpinRefs.current[index].current.focus();
        } else if (!/^\d$/.test(e.key) &&
            !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Escape'].includes(e.key)) {
            e.preventDefault();
            showNonDigitSnackbar();
        }
    };

    // Handle temporary MPIN paste
    const handleTempMpinPaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');

        if (/\D/.test(pastedData)) {
            showNonDigitSnackbar();
            return;
        }

        const digits = pastedData.replace(/\D/g, '').slice(0, 6);

        if (digits) {
            setTempMpin(digits);
            for (let i = 0; i < digits.length && i < 6; i++) {
                if (tempMpinRefs.current[i] && tempMpinRefs.current[i].current) {
                    tempMpinRefs.current[i].current.value = digits[i];
                }
            }
            const nextIndex = Math.min(digits.length, 5);
            if (tempMpinRefs.current[nextIndex] && tempMpinRefs.current[nextIndex].current) {
                tempMpinRefs.current[nextIndex].current.focus();
            }

            if (digits.length === 6) {
                handleVerifyTempMpin();
            }
        }
    };

    // Verify temporary MPIN - Updated to go to step 5 instead of dashboard
    const handleVerifyTempMpin = async () => {
        if (tempMpin.length !== 6) {
            setTempMpinError(t("membership.msg_mpin_six_digits"));
            return;
        }

        setTempMpinLoading(true);
        setTempMpinError("");

        try {
            const response = await axios.post(
                "https://api.naf-cloudsystem.de/api/membership/authenticate",
                null,
                { params: { email, mpin: tempMpin } }
            );

            if (response.data.refreshToken) {
                localStorage.setItem("tempAuthToken", response.data.refreshToken);
                localStorage.setItem("tempAuthEmail", email);
                setTempMpinLoading(false);
                // Go to step 5 (Create New MPIN) instead of dashboard
                setStep(5);
                // Focus first new MPIN box
                setTimeout(() => {
                    if (newMpinRefs.current[0] && newMpinRefs.current[0].current) {
                        newMpinRefs.current[0].current.focus();
                    }
                }, 100);
            } else {
                setTempMpinError(t("membership.msg_invalid_mpin"));
                setTempMpinLoading(false);
            }
        } catch (error) {
            setTempMpinError(t("membership.msg_login_failed"));
            setTempMpinLoading(false);
            console.error(error);
        }
    };

    // Handle new MPIN box input (step 5)
    const handleNewMpinInput = (index, value, type = 'new') => {
        // Check if the value contains any non-digit characters
        if (value && /\D/.test(value)) {
            showNonDigitSnackbar();
            if (type === 'new') {
                newMpinRefs.current[index].current.value = '';
            } else {
                confirmNewMpinRefs.current[index].current.value = '';
            }
            return;
        }

        const digit = value.replace(/\D/g, "");

        if (digit) {
            if (type === 'new') {
                const newMpinArray = newMpin.split('');
                newMpinArray[index] = digit;
                const newMpinValue = newMpinArray.join('');
                if (newMpinValue.length <= 6) {
                    setNewMpin(newMpinValue);

                    if (index < 5 && newMpinRefs.current[index + 1]) {
                        newMpinRefs.current[index + 1].current.focus();
                    }
                }
            } else {
                const confirmArray = confirmNewMpin.split('');
                confirmArray[index] = digit;
                const confirmValue = confirmArray.join('');
                if (confirmValue.length <= 6) {
                    setConfirmNewMpin(confirmValue);

                    if (index < 5 && confirmNewMpinRefs.current[index + 1]) {
                        confirmNewMpinRefs.current[index + 1].current.focus();
                    }
                }
            }
        }
    };

    // Handle new MPIN key events (step 5)
    const handleNewMpinKeyDown = (index, e, type = 'new') => {
        if (e.key === 'Backspace') {
            e.preventDefault();
            if (type === 'new') {
                const newMpinArray = newMpin.split('');
                newMpinArray[index] = '';
                const newMpinValue = newMpinArray.join('');
                setNewMpin(newMpinValue);

                if (index > 0 && newMpinRefs.current[index - 1]) {
                    newMpinRefs.current[index - 1].current.focus();
                }
            } else {
                const confirmArray = confirmNewMpin.split('');
                confirmArray[index] = '';
                const confirmValue = confirmArray.join('');
                setConfirmNewMpin(confirmValue);

                if (index > 0 && confirmNewMpinRefs.current[index - 1]) {
                    confirmNewMpinRefs.current[index - 1].current.focus();
                }
            }
        } else if (e.key === 'Delete') {
            e.preventDefault();
            if (type === 'new') {
                const newMpinArray = newMpin.split('');
                for (let i = index; i < 6; i++) {
                    newMpinArray[i] = '';
                }
                const newMpinValue = newMpinArray.join('');
                setNewMpin(newMpinValue);
                newMpinRefs.current[index].current.focus();
            } else {
                const confirmArray = confirmNewMpin.split('');
                for (let i = index; i < 6; i++) {
                    confirmArray[i] = '';
                }
                const confirmValue = confirmArray.join('');
                setConfirmNewMpin(confirmValue);
                confirmNewMpinRefs.current[index].current.focus();
            }
        } else if (!/^\d$/.test(e.key) &&
            !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Escape'].includes(e.key)) {
            e.preventDefault();
            showNonDigitSnackbar();
        }
    };

    // Handle new MPIN paste (step 5)
    const handleNewMpinPaste = (e, type = 'new') => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');

        if (/\D/.test(pastedData)) {
            showNonDigitSnackbar();
            return;
        }

        const digits = pastedData.replace(/\D/g, '').slice(0, 6);

        if (digits) {
            if (type === 'new') {
                setNewMpin(digits);
                for (let i = 0; i < digits.length && i < 6; i++) {
                    if (newMpinRefs.current[i] && newMpinRefs.current[i].current) {
                        newMpinRefs.current[i].current.value = digits[i];
                    }
                }
                const nextIndex = Math.min(digits.length, 5);
                if (newMpinRefs.current[nextIndex] && newMpinRefs.current[nextIndex].current) {
                    newMpinRefs.current[nextIndex].current.focus();
                }
            } else {
                setConfirmNewMpin(digits);
                for (let i = 0; i < digits.length && i < 6; i++) {
                    if (confirmNewMpinRefs.current[i] && confirmNewMpinRefs.current[i].current) {
                        confirmNewMpinRefs.current[i].current.value = digits[i];
                    }
                }
                const nextIndex = Math.min(digits.length, 5);
                if (confirmNewMpinRefs.current[nextIndex] && confirmNewMpinRefs.current[nextIndex].current) {
                    confirmNewMpinRefs.current[nextIndex].current.focus();
                }
            }
        }
    };

    // Create new MPIN (step 5)
    const handleCreateNewMpin = async () => {
        // Clear previous errors
        setNewMpinError("");

        // Validate new MPIN
        if (newMpin.length !== 6) {
            setNewMpinError(t("membership.msg_mpin_six_digits"));
            return;
        }

        if (confirmNewMpin.length !== 6) {
            setNewMpinError(t("membership.msg_confirm_mpin_six_digits") || "Confirm MPIN must be 6 digits");
            return;
        }

        if (newMpin !== confirmNewMpin) {
            setNewMpinError(t("membership.helper_mpin_match"));
            return;
        }

        setNewMpinLoading(true);

        try {
            // First, authenticate with temporary MPIN to get token
            const tempToken = localStorage.getItem("tempAuthToken");
            const tempEmail = localStorage.getItem("tempAuthEmail");

            if (!tempToken || !tempEmail) {
                setNewMpinError(t("membership.msg_session_expired") || "Session expired. Please try again.");
                setNewMpinLoading(false);
                return;
            }

            // Call API to update MPIN
            const response = await axios.post(
                "https://api.naf-cloudsystem.de/api/update-mpin",
                {
                    email: tempEmail,
                    newMpin: newMpin
                },
                {
                    headers: { Authorization: `Bearer ${tempToken}` }
                }
            );

            if (response.status === 200 || response.status === 201) {
                // Clear temporary storage
                localStorage.removeItem("tempAuthToken");
                localStorage.removeItem("tempAuthEmail");

                // Now authenticate with new MPIN
                const loginResponse = await axios.post(
                    "https://api.naf-cloudsystem.de/api/membership/authenticate",
                    null,
                    { params: { email: tempEmail, mpin: newMpin } }
                );

                if (loginResponse.data.refreshToken) {
                    localStorage.setItem("authToken", loginResponse.data.refreshToken);
                    localStorage.setItem("authEmail", tempEmail);
                    setNewMpinLoading(false);

                    setSnackbar({
                        open: true,
                        message: t("membership.msg_mpin_updated") || "MPIN updated successfully!",
                        severity: "success",
                    });

                    const queryParams = new URLSearchParams(window.location.search);
                    const redirect = queryParams.get("redirect");
                    if (redirect) {
                        const separator = redirect.includes("?") ? "&" : "?";
                        navigate(`/${lang}${redirect}${separator}skipMpin=true`, { replace: true });
                    } else {
                        navigate(`/${lang}/dashboard`, { replace: true });
                    }
                } else {
                    setNewMpinError(t("membership.msg_auto_login_failed") || "MPIN updated but auto-login failed");
                    setNewMpinLoading(false);
                }
            } else {
                setNewMpinError(t("membership.msg_mpin_update_failed") || "Failed to update MPIN");
                setNewMpinLoading(false);
            }
        } catch (error) {
            console.error("Error updating MPIN:", error);
            setNewMpinError(t("membership.msg_something_wrong"));
            setNewMpinLoading(false);
        }
    };

    // Step 1: Check email
    const handleCheckEmail = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setMessage(t("membership.msg_enter_valid_email"));
            return;
        }
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.get(
                `https://api.naf-cloudsystem.de/api/check-mail?email=${encodeURIComponent(
                    email
                )}`
            );

            if (response.data.emailExists) {
                setStep(2);
                setMessage(t("membership.msg_email_verified"));
                // Focus first MPIN box when entering step 2
                setTimeout(() => {
                    if (mpinRefs.current[0] && mpinRefs.current[0].current) {
                        mpinRefs.current[0].current.focus();
                    }
                }, 100);
            } else {
                setStep(3);
                setMessage(t("membership.msg_email_not_found"));
            }
        } catch (error) {
            setMessage(t("membership.msg_error_checking_email"));
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Handle MPIN box input change
    const handleMpinInput = (index, value) => {
        // Check if the value contains any non-digit characters
        if (value && /\D/.test(value)) {
            showNonDigitSnackbar();
            // Clear the invalid input
            mpinRefs.current[index].current.value = '';
            return;
        }

        // Allow only digits
        const digit = value.replace(/\D/g, "");

        if (digit) {
            // Update the mpin string
            const mpinArray = mpin.split('');
            mpinArray[index] = digit;
            const newMpinValue = mpinArray.join('');
            if (newMpinValue.length <= 6) {
                setMpin(newMpinValue);

                // Move to next box if available
                if (index < 5 && mpinRefs.current[index + 1]) {
                    mpinRefs.current[index + 1].current.focus();
                }
            }
        }
    };

    // Handle backspace in MPIN boxes
    const handleMpinKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            e.preventDefault();

            // Clear current box
            const mpinArray = mpin.split('');
            mpinArray[index] = '';
            setMpin(mpinArray.join(''));

            // Move to previous box if available
            if (index > 0 && mpinRefs.current[index - 1]) {
                mpinRefs.current[index - 1].current.focus();
            }
        } else if (e.key === 'Delete') {
            e.preventDefault();
            // Clear all boxes from current position
            const mpinArray = mpin.split('');
            for (let i = index; i < 6; i++) {
                mpinArray[i] = '';
            }
            setMpin(mpinArray.join(''));
            mpinRefs.current[index].current.focus();
        }
        // Prevent non-digit keys from being entered
        else if (!/^\d$/.test(e.key) &&
            !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Enter', 'Escape'].includes(e.key)) {
            e.preventDefault();
            showNonDigitSnackbar();
        }
    };

    // Handle paste in MPIN field
    const handleMpinPaste = (e) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text');

        // Check if pasted data contains non-digits
        if (/\D/.test(pastedData)) {
            showNonDigitSnackbar();
            return;
        }

        const digits = pastedData.replace(/\D/g, '').slice(0, 6);

        if (digits) {
            setMpin(digits);
            // Fill boxes with pasted digits
            for (let i = 0; i < digits.length && i < 6; i++) {
                if (mpinRefs.current[i] && mpinRefs.current[i].current) {
                    mpinRefs.current[i].current.value = digits[i];
                }
            }
            // Focus the next empty box or last box
            const nextIndex = Math.min(digits.length, 5);
            if (mpinRefs.current[nextIndex] && mpinRefs.current[nextIndex].current) {
                mpinRefs.current[nextIndex].current.focus();
            }
        }
    };

    // Step 2: Authenticate with MPIN - FIXED VALIDATION
    const handleAuthenticate = async (e) => {
        e.preventDefault();

        // Clear previous errors
        setMpinError("");
        setMessage("");

        // Check if MPIN is exactly 6 digits
        if (mpin.length !== 6) {
            setMpinError(t("membership.msg_mpin_six_digits"));
            return;
        }

        // Check if all 6 digits are filled
        const allBoxesFilled = mpinRefs.current.every(ref =>
            ref.current && ref.current.value && ref.current.value.length === 1
        );

        if (!allBoxesFilled) {
            setMpinError(t("membership.msg_mpin_six_digits"));
            return;
        }

        setLoading(true);

        try {
            const response = await axios.post(
                "https://api.naf-cloudsystem.de/api/membership/authenticate",
                null,
                { params: { email, mpin } }
            );

            if (response.data.refreshToken) {
                localStorage.setItem("authToken", response.data.refreshToken);
                localStorage.setItem("authEmail", email);
                setMessage(t("membership.msg_login_successful"));
                const queryParams = new URLSearchParams(window.location.search);
                const redirect = queryParams.get("redirect");
                if (redirect) {
                    const separator = redirect.includes("?") ? "&" : "?";
                    navigate(`/${lang}${redirect}${separator}skipMpin=true`, { replace: true });
                } else {
                    navigate(`/${lang}/dashboard`, { replace: true });
                }
            } else {
                setMpinError(t("membership.msg_invalid_mpin"));
            }
        } catch (error) {
            setMpinError(t("membership.msg_login_failed"));
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Step 3: Register new user
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!isValidEmail(email)) {
            setMessage(t("membership.msg_enter_valid_email"));
            return;
        }
        if (!firstName.trim()) {
            setMessage(t("membership.msg_first_name_required"));
            return;
        }
        if (!lastName.trim()) {
            setMessage(t("membership.msg_last_name_required"));
            return;
        }
        if (!isValidPhone(phone)) {
            setMessage(t("membership.msg_valid_phone_required"));
            return;
        }
        if (password.length !== 6) {
            setMessage(t("membership.msg_mpin_six_digits"));
            return;
        }
        if (confirmPassword !== password) {
            setMessage(t("membership.helper_mpin_match"));
            return;
        }
        if (!termsAccepted) {
            setMessage(t("membership.msg_terms_required"));
            return;
        }
        setLoading(true);
        setMessage("");

        try {
            const response = await axios.post(
                "https://api.naf-cloudsystem.de/api/membership/signup",
                {
                    email,
                    firstName,
                    lastName,
                    mobileNumber: `${countryCode} ${phone}`, // include country code with space
                    mpin: password,
                    type: 'Membership',
                }
            );

            if (response.data.message) {
                setMessage(t("membership.msg_registration_successful"));

                // Auto-login immediately
                const loginResponse = await axios.post(
                    "https://api.naf-cloudsystem.de/api/membership/authenticate",
                    null,
                    { params: { email, mpin: password } }
                );

                if (loginResponse.data.refreshToken) {
                    localStorage.setItem("authToken", loginResponse.data.refreshToken);
                    localStorage.setItem("authEmail", email);

                    navigate(`/${lang}/dashboard`, { replace: true });
                } else {
                    setMessage(t("membership.msg_signup_auto_login_failed"));
                    setStep(2);
                }
            } else {
                setMessage(t("membership.msg_registration_failed"));
            }
        } catch (error) {
            setMessage(t("membership.msg_error_registration"));
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    return (<>
        <Box className="section-container menucontainer" sx={{}}>
            <Box >
                <Box className="main-form-container"
                    sx={{
                        color: "white",
                        p: {    xs: 1, sm: 4,},
                        mb: 6
                    }}
                >
                    <Typography
                        variant="h3"
                        className="headings-h2"
                        fontWeight="bold"
                        sx={{
                            mb: 6,
                            color: '#FCFCFC',
                            textAlign: 'center',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            hyphens: 'auto',
                            px: { xs: 2, sm: 0 }
                        }}
                    >
                        {step === 4 ? t("membership.temp_mpin_title") || "Temporary MPIN" :
                            step === 5 ? t("membership.create_new_mpin_title") || "Create New MPIN" :
                                t("membership.title_login_signup")}
                    </Typography>
                    <Box className="form-container"
                        sx={{
                            color: "white",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 4,
                        }}>
                        {/* Step 1: Email */}
                        {step === 1 && (
                            <Box
                                component="form"
                                onSubmit={handleCheckEmail}
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                <Typography sx={{ mb: 2, color: '#FCFCFC', textAlign: 'center' }} className="bodyRegularText3">
                                    {t("membership.label_enter_email")}
                                </Typography>

                                <CustomTextField
                                    label={t("membership.field_email")}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleCheckEmail}>
                                        {loading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}
                        {/* Step 2: MPIN with 6 boxes */}
                        {step === 2 && (
                            <Box
                                component="form"
                                onSubmit={handleAuthenticate}
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                <Typography
                                    sx={{ mb: 2, color: '#FCFCFC', textAlign: 'center' }}
                                    className="bodyRegularText3"
                                >
                                    {t("membership.label_enter_mpin")}
                                </Typography>
                                {/* 6 MPIN boxes */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        gap: {
                                            xs: 1,
                                            sm: 1,
                                            md: 2,

                                            lg: 2
                                        },
                                        mb: 1
                                    }}
                                >
                                    {[...Array(6)].map((_, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                width: {
                                                    xs: 60,
                                                    sm: 55,
                                                    md: 50,
                                                    lg: 50,
                                                },
                                                height: {
                                                    xs: 40,
                                                    sm: 60,
                                                    md: 50,
                                                    lg: 50,
                                                }
                                            }}
                                        >
                                            <input
                                                ref={mpinRefs.current[index]}
                                                placeholder="0"
                                                type={showMpin ? "text" : "password"}
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength="1"
                                                value={mpin[index] || ''}
                                                onChange={(e) => handleMpinInput(index, e.target.value)}
                                                onKeyDown={(e) => handleMpinKeyDown(index, e)}
                                                onPaste={handleMpinPaste}

                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    fontSize: '24px',
                                                    color: '#ffffff',
                                                    backgroundColor: '#595D62',
                                                    borderRadius: '2px',
                                                    outline: 'none',
                                                    border: 'none',
                                                    boxShadow: 'none',
                                                }}

                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                                {/* Show / Hide MPIN + Forgot MPIN (same row) */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 3,
                                        px: 1
                                    }}
                                >
                                    {/* Show / Hide MPIN */}
                                    <Typography
                                        onClick={() => setShowMpin(!showMpin)}
                                        sx={{
                                            cursor: "pointer",
                                            color: "#c2c2c4",
                                            fontSize: "14px",
                                            textDecoration: "underline"
                                        }}
                                    >
                                        {showMpin ? t("memebersLogin.hide_mpin") : t("memebersLogin.show_mpin")}
                                    </Typography>
                                    {/* Forgot MPIN */}
                                    <Typography
                                        onClick={goToTempMpinPage}
                                        sx={{
                                            cursor: "pointer",
                                            color: "#EC6B53",
                                            fontSize: "14px",
                                            textDecoration: "underline"
                                        }}
                                        className="bodyRegularText4"
                                    >
                                        {t("memebersLogin.ForgotMpin")}
                                    </Typography>
                                </Box>
                                {/* MPIN error message */}
                                {mpinError && (
                                    <Typography
                                        sx={{
                                            textAlign: 'center',
                                            mb: 3,
                                            color: '#EC6B53',
                                            fontSize: '14px'
                                        }}
                                        className="bodyRegularText4"
                                    >
                                        {mpinError}
                                    </Typography>
                                )}
                                {/* Submit button */}
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleAuthenticate}>
                                        {loading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton
                                                text1={t("membership.btn_submit")}
                                                text2={t("membership.btn_now")}
                                            />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}

                        {/* Step 3: Sign-up */}
                        {step === 3 && (
                            <Box
                                component="form"
                                onSubmit={handleRegister}
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    {t("membership.label_enter_details")}
                                </Typography>

                                <CustomTextField
                                    label={t("membership.field_email")}
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_first_name")}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_last_name")}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_phone_number")}
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value.replace(/\s+/g, ""))}
                                    required
                                />

                                <CustomTextField
                                    label={t("membership.field_mpin")}
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    inputProps={{ maxLength: 6, pattern: "[0-9]{6}" }}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ""); // only digits
                                        if (value.length <= 6) setPassword(value);
                                    }}
                                    required
                                    error={password.length > 0 && password.length !== 6}
                                    helperText={
                                        password.length > 0 && password.length !== 6
                                            ? t("membership.helper_mpin_digits")
                                            : ""
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                                sx={{ color: "#C2C2C4" }}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                                <CustomTextField
                                    label={t("membership.field_confirm_mpin")}
                                    type={showConfirmPassword ? "text" : "password"}
                                    value={confirmPassword}
                                    inputProps={{ maxLength: 6, pattern: "[0-9]{6}" }}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, ""); // only digits
                                        if (value.length <= 6) setConfirmPassword(value);
                                    }}
                                    required
                                    error={
                                        (confirmPassword.length > 0 && confirmPassword.length !== 6) ||
                                        (confirmPassword.length === 6 && password.length === 6 && confirmPassword !== password)
                                    }
                                    helperText={
                                        confirmPassword.length > 0 && confirmPassword.length !== 6
                                            ? t("membership.helper_mpin_digits")
                                            : confirmPassword.length === 6 && password.length === 6 && confirmPassword !== password
                                                ? t("membership.helper_mpin_match")
                                                : ""
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                                edge="end"
                                                sx={{ color: "#C2C2C4" }}
                                            >
                                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />

                                {/* Terms & Conditions Checkbox */}
                                <Box sx={{ mt: 2, mb: 2, position: 'relative', }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={termsAccepted}
                                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                                sx={{
                                                    color: "#C2C2C4",
                                                    maxWidth: '10%',
                                                    '&.Mui-checked': {
                                                        color: "#FA7854",
                                                    },
                                                }}
                                            />
                                        }
                                        label={
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: "#C2C2C4",
                                                    fontSize: "0.875rem",
                                                    lineHeight: 1.4,
                                                    ml: 2
                                                }}
                                            >
                                                {t("membership.terms_conditions_text1")}{" "}
                                                <Link
                                                    href="#"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        navigate(`/${lang}/privacy-policy`);
                                                    }}
                                                    sx={{
                                                        color: "#FA7854",
                                                        textDecoration: "underline",
                                                        '&:hover': {
                                                            color: "#ff9470",
                                                            cursor: 'pointer'
                                                        }
                                                    }}
                                                >
                                                    {t("membership.terms_conditions_link")}
                                                </Link>
                                                .  {t("membership.terms_conditions_text2")}
                                            </Typography>
                                        }
                                        sx={{
                                            alignItems: "flex-start",
                                            mt: 1
                                        }}
                                    />
                                </Box>

                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleRegister}>
                                        {loading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton text1={t("membership.btn_submit")} text2={t("membership.btn_now")} />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}

                        {/* Step 4: Temporary MPIN page */}
                        {step === 4 && (
                            <Box
                                component="form"
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                {/* Description */}
                                <Typography
                                    className="bodyRegularText3"
                                    sx={{
                                        textAlign: 'center',
                                        mb: 4,
                                        color: '#fffffff',
                                        fontSize: '16px'
                                    }}
                                >
                                    {t("membership.temp_mpin_description", { email }) || `We've sent a 6-digit temporary MPIN to ${email}`}
                                </Typography>

                                {/* Temporary MPIN boxes */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        gap: { xs: 1, sm: 1, md: 2, lg: 2 },
                                        mb: 2
                                    }}>
                                    {[...Array(6)].map((_, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                width: {
                                                    xs: 60,
                                                    sm: 55,
                                                    md: 50,
                                                    lg: 50,
                                                },
                                                height: {
                                                    xs: 40,
                                                    sm: 60,
                                                    md: 50,
                                                    lg: 50,
                                                }
                                            }}>
                                            <input
                                                ref={tempMpinRefs.current[index]}
                                                type={showMpin ? "text" : "password"}
                                                placeholder="0"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength="1"
                                                value={tempMpin[index] || ""}
                                                onChange={(e) => handleTempMpinInput(index, e.target.value)}
                                                onKeyDown={(e) => handleTempMpinKeyDown(index, e)}
                                                onPaste={handleTempMpinPaste}
                                                disabled={tempMpinLoading}

                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    textAlign: "center",
                                                    fontSize: "24px",
                                                    color: "#ffffff",
                                                    backgroundColor: "#595D62",
                                                    borderRadius: "2px",
                                                    outline: "none",
                                                    boxShadow: "none",
                                                    border: "none",
                                                    opacity: tempMpinLoading ? 0.5 : 1,
                                                    cursor: tempMpinLoading ? "not-allowed" : "text"
                                                }}
                                                onFocus={(e) => {
                                                    if (!tempMpinLoading) {
                                                        e.target.style.borderColor = "#595D62";
                                                    }
                                                }}
                                                onBlur={(e) => {
                                                    e.target.style.borderColor =
                                                        tempMpinError && tempMpin.length !== 6
                                                            ? "#ffffff"
                                                            : "#C2C2C4";
                                                }}
                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                                {/* Error Message */}
                                {tempMpinError && (
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            mb: 3,
                                            color: "#EC6B53",
                                            fontSize: "14px"
                                        }}
                                        className="bodyRegularText4"
                                    >
                                        {tempMpinError}
                                    </Typography>
                                )}
                                {/* Didn't get it? + Resend + Show/Hide MPIN */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mb: 4,
                                        ml: { md: 1, lg: 1 }
                                    }}
                                >
                                    {/* Left side: Didn't get it? and Resend */}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                        }} >
                                        {/* Didn't get it? */}
                                        <Typography
                                            sx={{
                                                color: "#C2C2C4",
                                                fontSize: "14px"
                                            }}
                                            className="bodyRegularText4"
                                        >
                                            {t("membership.didnt_get_it") || "Didn't get it?"}
                                        </Typography>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                            <Typography
                                                onClick={handleResendTempMpin}
                                                sx={{
                                                    cursor: "pointer",
                                                    color: "#FA7854",
                                                    fontSize: "14px",
                                                    textDecoration: "underline",
                                                }}
                                                className="bodyRegularText4"
                                            >
                                                {t("membership.resend") || "Resend"}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    {/* Right side: Show / Hide MPIN */}
                                    <Typography
                                        onClick={() => setShowMpin(!showMpin)}
                                        sx={{
                                            cursor: "pointer",
                                            color: "#C2C2C4",
                                            fontSize: "14px",
                                            textDecoration: "underline"
                                        }}
                                        className="bodyRegularText4" >
                                        {showMpin ? t("memebersLogin.hide_mpin") : t("memebersLogin.show_mpin")}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button
                                        onClick={() => setStep(2)}
                                        sx={{
                                            mb: 2,
                                            color: '#C2C2C4',
                                            textDecoration: 'underline',
                                            textTransform: 'none',
                                            fontSize: '14px',
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                                color: '#FFFFFF'
                                            }
                                        }}
                                        className="bodyRegularText4"
                                    >
                                        {t("membership.back_to_mpin") || "Back to MPIN Login"}
                                    </Button>
                                </Box>
                                {/* Continue Button */}
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <div onClick={handleVerifyTempMpin}>
                                        {tempMpinLoading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton
                                                text1={t("membership.continue")}
                                                text2={t("membership.btn_now")}
                                            />
                                        )}
                                    </div>
                                </Box>

                            </Box>
                        )}

                        {/* Step 5: Create New MPIN page */}
                        {step === 5 && (
                            <Box
                                component="form"
                                sx={{ width: "100%", maxWidth: 400 }}
                            >
                                {/* Description */}
                                <Typography
                                    className="bodyRegularText3"
                                    sx={{
                                        textAlign: 'center',
                                        mt: -4,
                                        mb: 4,
                                        color: '#C2C2C4',
                                        fontSize: '16px'
                                    }}
                                >
                                    {t("membership.create_new_mpin_description") || "Enter a new 6-digit MPIN to secure your MPI account."}
                                </Typography>

                                {/* New MPIN Label */}
                                <Typography
                                    sx={{
                                        mb: 2,
                                        color: '#FCFCFC',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}
                                    className="bodyRegularText3"
                                >
                                    {t("membership.new_mpin_label") || "New MPIN"}
                                </Typography>

                                {/* 6 New MPIN boxes */}
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: { xs: 1, sm: 1, md: 2, lg: 2 },
                                    mb: 2
                                }}>
                                    {[...Array(6)].map((_, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                width: {
                                                    xs: 60,
                                                    sm: 55,
                                                    md: 50,
                                                    lg: 50,
                                                },
                                                height: {
                                                    xs: 40,
                                                    sm: 60,
                                                    md: 50,
                                                    lg: 50,
                                                }
                                            }}>

                                            <input
                                                ref={newMpinRefs.current[index]}
                                                type={showPassword ? "text" : "password"}
                                                placeholder="0"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength="1"
                                                value={newMpin[index] || ''}
                                                onChange={(e) => handleNewMpinInput(index, e.target.value, 'new')}
                                                onKeyDown={(e) => handleNewMpinKeyDown(index, e, 'new')}
                                                onPaste={(e) => handleNewMpinPaste(e, 'new')}
                                                disabled={newMpinLoading}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    fontSize: '24px',
                                                    color: '#FCFCFC',
                                                    backgroundColor: '#595D62',
                                                    border: 'none',
                                                    borderRadius: '2px',
                                                    outline: 'none',
                                                    shadow: 'none',

                                                    opacity: newMpinLoading ? 0.5 : 1,
                                                    cursor: newMpinLoading ? 'not-allowed' : 'text'
                                                }}

                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        </Box>
                                    ))}

                                </Box>
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <Typography
                                        onClick={() => setShowPassword(!showPassword)}
                                        sx={{
                                            cursor: "pointer",
                                            color: "#C2C2C4",
                                            fontSize: "14px",
                                            textDecoration: "underline"
                                        }}
                                        className="bodyRegularText4"
                                    >
                                        {showMpin ? t("memebersLogin.hide_mpin") : t("memebersLogin.show_mpin")}
                                    </Typography>
                                </Box>


                                {/* Confirm MPIN Label */}
                                <Typography
                                    sx={{
                                        mb: 2,
                                        color: '#ffffff',
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                        textAlign: 'center'
                                    }}
                                    className="bodyRegularText3"
                                >
                                    {t("membership.confirm_mpin_label") || "Confirm MPIN"}
                                </Typography>

                                {/* 6 Confirm MPIN boxes */}
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    gap: { xs: 1, sm: 1, md: 2, lg: 2 },
                                    mb: 2
                                }}>
                                    {[...Array(6)].map((_, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                width: {
                                                    xs: 60,
                                                    sm: 55,
                                                    md: 50,
                                                    lg: 50,
                                                },
                                                height: {
                                                    xs: 40,
                                                    sm: 60,
                                                    md: 50,
                                                    lg: 50,
                                                }
                                            }}
                                        >
                                            <input
                                                ref={confirmNewMpinRefs.current[index]}
                                                type={showConfirmNewPassword ? "text" : "password"}
                                                placeholder="0"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                maxLength="1"
                                                value={confirmNewMpin[index] || ''}
                                                onChange={(e) => handleNewMpinInput(index, e.target.value, 'confirm')}
                                                onKeyDown={(e) => handleNewMpinKeyDown(index, e, 'confirm')}
                                                onPaste={(e) => handleNewMpinPaste(e, 'confirm')}
                                                disabled={newMpinLoading}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    textAlign: 'center',
                                                    fontSize: '24px',
                                                    color: '#ffffff',
                                                    backgroundColor: '#595D62',
                                                    border: 'none',
                                                    borderRadius: '2px',
                                                    outline: 'none',
                                                    shadow: 'none',
                                                    opacity: newMpinLoading ? 0.5 : 1,
                                                    cursor: newMpinLoading ? 'not-allowed' : 'text'
                                                }}

                                                onContextMenu={(e) => e.preventDefault()}
                                            />
                                        </Box>
                                    ))}
                                </Box>
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "flex-end"
                                    }}
                                >
                                    <Typography
                                        onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                                        sx={{
                                            cursor: "pointer",
                                            color: "#C2C2C4",
                                            fontSize: "14px",
                                            textDecoration: "underline"
                                        }}
                                        className="bodyRegularText4"
                                    >
                                        {showMpin ? t("memebersLogin.hide_mpin") : t("memebersLogin.show_mpin")}
                                    </Typography>
                                </Box>

                                {/* Error message */}
                                {newMpinError && (
                                    <Typography
                                        sx={{
                                            textAlign: 'center',
                                            mb: 3,
                                            color: '#EC6B53',
                                            fontSize: '14px'
                                        }}
                                        className="bodyRegularText4"
                                    >
                                        {newMpinError}
                                    </Typography>
                                )}

                                {/* Create New MPIN button */}
                                <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
                                    <div onClick={handleCreateNewMpin}>
                                        {newMpinLoading ? (
                                            <CircularProgress size={24} sx={{ color: "white" }} />
                                        ) : (
                                            <AnimateButton
                                                text1={t("membership.create_new_mpin_button")}
                                                text2={t("membership.btn_now")}
                                            />
                                        )}
                                    </div>
                                </Box>
                            </Box>
                        )}
                    </Box>


                </Box>

                {/* Right Side - Image */}
                {/* <Box
                    sx={{
                        display: "block",
                        width: "100%",
                    }}
                >
                    <Box className="signUp_image_sec"
                        component="img"
                        src={Image1}
                        alt="NAF Machine"
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "fill",
                        }}
                    />
                </Box> */}








            </Box>
            <MembersNafinfo />
            {/* Non-digit Snackbar (Top Popup) */}
            <Snackbar
                open={nonDigitSnackbar.open}
                autoHideDuration={3000}
                onClose={handleCloseNonDigitSnackbar}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                sx={{
                    top: "50px",
                    '& .MuiSnackbarContent-root': {
                        backgroundColor: '#FA7854',
                        color: '#FFFFFF',
                        borderRadius: '8px',
                        padding: '16px 54px',
                    },
                    className: 'bodyRegularText3'
                }}
            >
                <Alert
                    onClose={handleCloseNonDigitSnackbar}
                    severity="error"
                    sx={{
                        width: '100%',
                        backgroundColor: '#FA7854',
                        color: '#FFFFFF',
                        '& .MuiAlert-icon': {
                            color: '#FFFFFF'
                        }
                    }}
                    icon={false}
                >
                    {nonDigitSnackbar.message}
                </Alert>
            </Snackbar>

            {/* Original Snackbar for other messages */}
            <Snackbar
                open={snackbar.open}
                autoHideDuration={5000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
            >
                <Alert
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    </>

    );
}

export default Membership;