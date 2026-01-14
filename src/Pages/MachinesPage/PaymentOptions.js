import React, { useState } from "react";
import { 
  Box,
  Button, 
  Typography, 
  Modal, 
  TextField, 
  IconButton,
  CircularProgress,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  FormControl,
  FormHelperText
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { PaymentOptionsIcon1, PaymentOptionsIcon2, PaymentOptionsIcon3 } from "../../Componenets/CustomIcons";
import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import { useTranslation } from 'react-i18next';
import { useParams } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";



const PaymentOptions = () => {
    const { t } = useTranslation();
    const { lang } = useParams();
    const [open, setOpen] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [currentOption, setCurrentOption] = useState(null);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        purchaseMethod: "",
        machine: "",
        email: "",
        phone: "",
        fullName: "",
        company: "",
        description: "",
        acceptedPolicy: false
    });
    const [formErrors, setFormErrors] = useState({
        purchaseMethod: "",
        machine: "",
        email: "",
        phone: "",
        fullName: "",
        company: "",
        description: "",
        acceptedPolicy: ""
    });
    const [touched, setTouched] = useState({
        purchaseMethod: false,
        machine: false,
        email: false,
        phone: false,
        fullName: false,
        company: false,
        description: false,
        acceptedPolicy: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const paymentOptions = [
        {
            title: t('machines.LeasingTitle'),
            description: t('machines.Leasingtext'),
            points: [
                t('machines.Leasingpoints1'),
                t('machines.Leasingpoints2'),
                t('machines.Leasingpoints3'),
            ],
            icon: PaymentOptionsIcon1,
            type: "leasing"
        },
        {
            title: t('machines.RentalPurchase'),
            description: t('machines.Rentaltext'),
            points: [
                t('machines.Rentalpoints1'),
                t('machines.Rentalpoints2'),
                t('machines.Rentalpoints3'),
            ],
            icon: PaymentOptionsIcon2,
            type: "rental"
        },
        {
            title: t('machines.DirectPurchaseTitle'),
            description: t('machines.DirectPurchaseSubTitle'),
            points: [
                t('machines.Directpoints1'),
                t('machines.Directpoints2'),
            ],
            icon: PaymentOptionsIcon3,
            type: "purchase"
        },
    ];

    // Validation functions
  const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return t('productModal.email.error.required');
  if (!emailRegex.test(email)) return t('productModal.email.error.invalid');
  return "";
};

const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  if (phone && !phoneRegex.test(phone.replace(/\s+/g, ""))) {
    return t('productModal.phone.error');
  }
  return "";
};

  
  
  const validateRequired = (field, value) => {
  if (!value || value.trim() === "") {
    return t(`productModal.${field}.error.required`);
  }
  return "";
};

const validateForm = () => {
  const errors = {
    purchaseMethod: validateRequired("purchaseMethod", formData.purchaseMethod),
    machine: validateRequired("machine", formData.machine),

    email: validateEmail(formData.email),
    phone: validatePhone(formData.phone),
    fullName: validateRequired("fullName", formData.fullName),
    company: "",
    description: "",
    acceptedPolicy: formData.acceptedPolicy
      ? ""
      : t('productModal.privacyPolicy.error'),
  };

  setFormErrors(errors);
  return Object.values(errors).every((error) => error === "");
};

    

    const handleOpenPopup = (option) => {
        setCurrentOption(option);
        setOpen(true);
        setFormData({ 
            purchaseMethod: option.type === "leasing" ? "Leasing" : 
           option.type === "rental" ? "Rental Purchase" : "Direct Purchase",
            machine: "",
            email: "",
            phone: "",
            fullName: "",
            company: "",
            description: "",
            acceptedPolicy: false
        });
        setFormErrors({
            purchaseMethod: "",
            machine: "",
            email: "",
            phone: "",
            fullName: "",
            company: "",
            description: "",
            acceptedPolicy: ""
        });
        setTouched({
            purchaseMethod: false,
            machine: false,
            email: false,
            phone: false,
            fullName: false,
            company: false,
            description: false,
            acceptedPolicy: false
        });
    };

    const handleClose = () => {
        setOpen(false);
        setCurrentOption(null);
        setFormData({ 
            purchaseMethod: "",
            machine: "",
            email: "",
            phone: "",
            fullName: "",
            company: "",
            description: "",
            acceptedPolicy: false
        });
        setFormErrors({
            purchaseMethod: "",
            machine: "",
            email: "",
            phone: "",
            fullName: "",
            company: "",
            description: "",
            acceptedPolicy: ""
        });
        setTouched({
            purchaseMethod: false,
            machine: false,
            email: false,
            phone: false,
            fullName: false,
            company: false,
            description: false,
            acceptedPolicy: false
        });
        setIsSubmitting(false);
    };

    const handleCloseSuccess = () => {
        setShowSuccess(false);
        handleClose();
    };

    const handleBlur = (field) => {
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));

        // Validate the specific field on blur
          let error = "";
  switch (field) {
    case "email":
      error = validateEmail(formData.email);
      break;
    case "phone":
      error = validatePhone(formData.phone);
      break;
    case "purchaseMethod":
      error = validateRequired("purchaseMethod", formData.purchaseMethod, t('productModal.purchaseMethod'));
      break;
   case "machine":
  error = validateRequired("machine", formData.machine);
  break;

   case "fullName":
  error = validateRequired("fullName", formData.fullName);
  break;

    case "acceptedPolicy":
      error = formData.acceptedPolicy ? "" : t('productModal.privacyPolicy.error');
      break;
    default:
      error = "";
  }
        setFormErrors(prev => ({
            ...prev,
            [field]: error
        }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Clear error when user starts typing
        if (formErrors[name]) {
            setFormErrors(prev => ({
                ...prev,
                [name]: ""
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Mark all fields as touched
        const allTouched = Object.keys(touched).reduce((acc, key) => {
            acc[key] = true;
            return acc;
        }, {});
        setTouched(allTouched);

        // Validate form
        if (!validateForm()) {
            // Scroll to first error
            const firstErrorField = Object.keys(formErrors).find(key => formErrors[key]);
            if (firstErrorField) {
                const element = document.querySelector(`[name="${firstErrorField}"]`);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
            return;
        }

        setIsSubmitting(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
           const templateParams = {
           name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          purchaseMethod: formData.purchaseMethod,
          machine: formData.machine,
          company: formData.company,
          message: formData.description,
          time: new Date().toLocaleString(),
        };
       await emailjs.send(
        "service_rsffzz7",  //service id
        "template_nlhzxhr",//template id
        templateParams,
        "RbiH3FHNdDfJZ9G3A" //publick key
     );

            
            // Show success message
            setShowSuccess(true);
            setOpen(false);
            
        } catch (error) {
            console.error('Error:', error);
            alert('There was an error submitting the form. Please try again.');
            setIsSubmitting(false);
        }
    };

    const PopupButtonWrapper = ({ option }) => (
        <Box 
            onClick={() => handleOpenPopup(option)}
            sx={{ 
                cursor: "pointer",
                width: "100%",
                display: "flex",
                justifyContent: "center" 
            }}
        >
            <Box sx={{ pointerEvents: "none" }}>
                <AnimateButton 
                    text1={t('AnimateBtn.request')} 
                    text2={t('AnimateBtn.quote')} 
                    route="#" 
                />
            </Box>
        </Box>
    );

    return (
        <>
            <Box className='section-container'>
                <Box sx={{ width: { xs: '100%', sm: '80%', lg: '50%' }, mb: { xs: 2, sm: 2, md: 3 } }}>
                    <div data-cursor="hover">
                        <Typography data-cursor="hover" variant='h2' className='headings-h2' sx={{ color: '#FCFCFC' }}>
                            {t('machines.FlexiblePaymentTitle')}
                        </Typography>
                    </div>
                    <Box sx={{ mb: 3 }} data-cursor="hover">
                        <Typography data-cursor="hover" className='bodyRegularText3' sx={{ color: '#C2C2C4', py: { xs: '8px', sm: '8px', md: '16px' } }}>
                            {t('machines.FlexiblePaymentsubTitle')}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', lg: 'row' },
                        justifyContent: 'center',
                        alignItems: 'stretch',
                        flexWrap: 'nowrap',
                    }}
                >
                    {paymentOptions.map((option, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                flex: { xs: '1 1 100%', lg: '1 1 33%' },
                                border: '1px solid #525252',
                                px: { xs: 2, sm: 3, md: 4 },
                                py: { xs: 3, sm: 4, md: 5 },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-start',
                                minHeight: { xs: '400px', sm: '500px', lg: '700px' },
                            }}
                        >
                            <Box sx={{ mb: 3, display: 'flex', justifyContent: 'center' }}>
                                <option.icon className='paymenticons' />
                            </Box>

                            <Box>
                                <Typography variant="h4" color="#FCFCFC" className="headings-h4">
                                    {option.title}
                                </Typography>

                                <Typography className="bodyRegularText3" sx={{ color: "#C2C2C4", my: 2 }}>
                                    {option.description}
                                </Typography>

                                <Box component="ul" sx={{ pl: 3, mb: 4, color: "#C2C2C4" }}>
                                    {option.points.map((point, i) => (
                                        <li key={i} style={{ marginBottom: "8px" }} className="bodyRegularText3">
                                            {point}
                                        </li>
                                    ))}
                                </Box>
                            </Box>

                            <PopupButtonWrapper option={option} />
                        </Box>
                    ))}
                </Box>
            </Box>
 {/* MODAL dialog box */}

<Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="payment-form-modal"
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}
>
    <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
            width: '800px',
            maxWidth: '95vw',
            maxHeight: '95vh',
            bgcolor: '#444444',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'auto',
             border: 'none',
            outline: 'none',
            boxShadow: 'none',
           
            '&::-webkit-scrollbar': {
                width: '1px',
            },
            '&::-webkit-scrollbar-track': {
                background: '#3a3a3a',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#666666',
                borderRadius: '4px',
            },
        }}
    >
        {/* Close Button - Exact match */}
        <IconButton
            onClick={handleClose}
            sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: '#E0A678',
                border: '1px solid #E0A678',
                borderRadius: '4px',
                width: '28px',
                height: '28px',
                padding: 0,
                
            }}
        >
            <CloseIcon sx={{ fontSize: '18px' }} />
        </IconButton>

        {/* Form Title */}
        <Box sx={{ pt: 6, pb: 4, px: 5 }}>
            <Typography 
                sx={{ 
                    color: '#FCFCFC',
                    fontWeight: 400,
                    fontSize: '36px',
                    textAlign: 'center',
                    letterSpacing: '0.5px'
                }}className='headings-h5'
            >
                {t('productModal.title')}
            </Typography>
        </Box>

        {/* Form Content */}
        <Box sx={{ px: 5, pb: 5 }} component="form" onSubmit={handleSubmit}>
            {/* Select Purchase Method - Dropdown with arrow */}
            <Box sx={{ mb: 3.5 }}>
                <FormControl 
                    fullWidth 
                    variant="standard"
                    error={touched.purchaseMethod && Boolean(formErrors.purchaseMethod)}
                    sx={{
                        '& .MuiInput-root': {
                            '&:before': {
                                borderBottom: touched.purchaseMethod && formErrors.purchaseMethod ? 
                                    '1px solid #f44336' : '1px solid  #c2c2c4',
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottom: touched.purchaseMethod && formErrors.purchaseMethod ? 
                                    '1px solid #f44336' : '1px solid  #c2c2c4',
                            },
                            '&:after': {
                                borderBottom: '1px solid  #c2c2c4',
                            },
                            "& .MuiInput-input": {
                                paddingBottom: "20px", 
                               lineHeight:1.5,
                               "&::placeholder": {
                               color: " #c2c2c4",
                               opacity: 1,
                            },
                        },
                      "& .MuiFormHelperText-root": {
                      marginLeft: 0,
                       },
                        }
                    }}
                >
                    <Select
                        name="purchaseMethod"
                        value={formData.purchaseMethod}
                        onChange={handleChange}
                        onBlur={() => handleBlur("purchaseMethod")}
                        displayEmpty
                        sx={{
                            color: formData.purchaseMethod ? ' #c2c2c4' : ' #c2c2c4',
                            fontSize: '14px',
                            '& .MuiSelect-icon': {
                                color: ' #c2c2c4',
                            }
                        }}
                        renderValue={(value) => value || t('productModal.purchaseMethod.placeholder')}
                    >
                        <MenuItem value="Leasing">{t('productModal.purchaseMethod.options.leasing')}</MenuItem>
                        <MenuItem value="Rental Purchase">{t('productModal.purchaseMethod.options.rentalPurchase')}</MenuItem>
                        <MenuItem value="Direct Purchase">{t('productModal.purchaseMethod.options.directPurchase')}</MenuItem>
                    </Select>
                    {touched.purchaseMethod && formErrors.purchaseMethod && (
                        <FormHelperText sx={{ color: '#f44336', fontSize: '12px', mt: 0.5 }}>
                            {formErrors.purchaseMethod}
                        </FormHelperText>
                    )}
                </FormControl>
            </Box>

            {/* Select Machine - Dropdown with arrow */}
            <Box sx={{ mb: 3.5 }}>
                <FormControl 
                    fullWidth 
                    variant="standard"
                    error={touched.machine && Boolean(formErrors.machine)}
                    sx={{
                        '& .MuiInput-root': {
                            '&:before': {
                                borderBottom: touched.machine && formErrors.machine ? 
                                    '1px solid #f44336' : '1px solid  #c2c2c4',
                            },
                            '&:hover:not(.Mui-disabled):before': {
                                borderBottom: touched.machine && formErrors.machine ? 
                                    '1px solid #f44336' : '1px solid  #c2c2c4',
                            },
                            '&:after': {
                                borderBottom: '1px solid  #c2c2c4',
                            },
                             "& .MuiInput-input": {
                                paddingBottom: "20px", 
                               lineHeight:1.5,
                               "&::placeholder": {
                               color: " #c2c2c4",
                               opacity: 1,
                            },
                        },
                      "& .MuiFormHelperText-root": {
                      marginLeft: 0,
                       },
                        }
                    }}
                >
                    <Select
                        name="machine"
                        value={formData.machine}
                        onChange={handleChange}
                        onBlur={() => handleBlur("machine")}
                        displayEmpty
                        sx={{
                            color: formData.machine ? ' #c2c2c4' : ' #c2c2c4',
                            fontSize: '14px',
                            '& .MuiSelect-icon': {
                                color: ' #c2c2c4',
                            }
                        }}
                        renderValue={(value) => value || t('productModal.machine.placeholder')}
                    >
                        <MenuItem value="Gourmet Machine">{t('productModal.machine.options.gourmet')}</MenuItem>
                        <MenuItem value="Pizza Machine">{t('productModal.machine.options.pizza')}</MenuItem>
                        <MenuItem value="Fries Machine">{t('productModal.machine.options.fries')}</MenuItem>
                        <MenuItem value="Soft Ice Cream Machine">{t('productModal.machine.options.softIceCream')}</MenuItem>
                        <MenuItem value="Cotton Candy Machine">{t('productModal.machine.options.cottonCandy')}</MenuItem>
                        <MenuItem value="Return Machine">{t('productModal.machine.options.return')}</MenuItem>
                    </Select>
                    {touched.machine && formErrors.machine && (
                        <FormHelperText sx={{ color: '#f44336', fontSize: '12px', mt: 0.5 }}>
                            {formErrors.machine}
                        </FormHelperText>
                    )}
                </FormControl>
            </Box>

    {/* Email */}
        <Box sx={{ mb: 3.5 }}>
            <TextField
              fullWidth
              name="email"
              type="email"
              placeholder={t('productModal.email.placeholder')}
              value={formData.email}
              onChange={handleChange}
              onBlur={() => handleBlur("email")}
              variant="standard"
              error={touched.email && Boolean(formErrors.email)}
              helperText={touched.email && formErrors.email}
              FormHelperTextProps={{
                sx: { color: "#f44336", fontSize: "12px", mt: 0.5 },
              }}
              sx={{
                "& .MuiInput-root": {
                  color: "#FCFCFC",
                  fontSize: "14px",
                  "&:before": {
                    borderBottom:
                      touched.email && formErrors.email
                        ? "1px solid #f44336"
                        : "1px solid  #c2c2c4",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom:
                      touched.email && formErrors.email
                        ? "1px solid #f44336"
                        : "1px solid  #c2c2c4",
                  },
                  "&:after": {
                    borderBottom: "1px solid  #c2c2c4",
                  },
                },
                "& .MuiInput-input": {
                  paddingBottom: "20px", 
                  lineHeight:1.5,
                  "&::placeholder": {
                    color: " #c2c2c4",
                    opacity: 1,
                  },
                },
                "& .MuiFormHelperText-root": {
                  marginLeft: 0,
                },
              }}
            />
          </Box>

            {/* Phone Number */}
            <Box sx={{ mb: 3.5 }}>
            <TextField
              fullWidth
              name="phone"
              placeholder={t('productModal.phone.placeholder')}
              value={formData.phone}
              onChange={handleChange}
              onBlur={() => handleBlur("phone")}
              variant="standard"
              error={touched.phone && Boolean(formErrors.phone)}
              helperText={touched.phone && formErrors.phone}
              FormHelperTextProps={{
                sx: { color: "#f44336", fontSize: "12px", mt: 0.5 },
              }}
              sx={{
                "& .MuiInput-root": {
                  color: "#FCFCFC",
                  fontSize: "14px",
                  "&:before": {
                    borderBottom:
                      touched.phone && formErrors.phone
                        ? "1px solid #f44336"
                        : "1px solid  #c2c2c4",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom:
                      touched.phone && formErrors.phone
                        ? "1px solid #f44336"
                        : "1px solid  #c2c2c4",
                  },
                  "&:after": {
                    borderBottom: "1px solid  #c2c2c4",
                  },
                },
                "& .MuiInput-input": {
                  paddingBottom: "20px", 
                  lineHeight:1.5,
                  "&::placeholder": {
                    color: " #c2c2c4",
                    opacity: 1,
                  },
                },
                "& .MuiFormHelperText-root": {
                  marginLeft: 0,
                },
              }}
            />
          </Box>


     {/* Full Name */}
        <Box sx={{ mb: 3.5 }}>
            <TextField
              fullWidth
              name="fullName"
              placeholder={t('productModal.fullName.placeholder')}
              value={formData.fullName}
              onChange={handleChange}
              onBlur={() => handleBlur("fullName")}
              variant="standard"
              error={touched.fullName && Boolean(formErrors.fullName)}
              helperText={touched.fullName && formErrors.fullName}
              FormHelperTextProps={{
                sx: { color: "#f44336", fontSize: "12px", mt: 0.5 },
              }}
              sx={{
                "& .MuiInput-root": {
                  color: "#FCFCFC",
                  fontSize: "14px",
                  "&:before": {
                    borderBottom:
                      touched.fullName && formErrors.fullName
                        ? "1px solid #f44336"
                        : "1px solid  #c2c2c4",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom:
                      touched.fullName && formErrors.fullName
                        ? "1px solid #f44336"
                        : "1px solid  #c2c2c4",
                  },
                  "&:after": {
                    borderBottom: "1px solid  #c2c2c4",
                  },
                },
                "& .MuiInput-input": {
                  paddingBottom: "20px", 
                  lineHeight:1.5,
                  "&::placeholder": {
                    color: " #c2c2c4",
                    opacity: 1,
                  },
                },
                "& .MuiFormHelperText-root": {
                  marginLeft: 0,
                },
              }}
            />
          </Box>

 {/* Company Name */}
     <Box sx={{ mb: 3.5 }}>
            <TextField
              fullWidth
              name="company"
              placeholder={t('productModal.company.placeholder')}
              value={formData.company}
              onChange={handleChange}
              onBlur={() => handleBlur("company")}
              variant="standard"
              sx={{
                "& .MuiInput-root": {
                  color: " #c2c2c4",
                  fontSize: "14px",
                  "&:before": {
                    borderBottom: "1px solid  #c2c2c4",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "1px solid  #c2c2c4",
                  },
                  "&:after": {
                    borderBottom: "1px solid  #c2c2c4",
                  },
                },
                "& .MuiInput-input": {
                  paddingBottom: "20px", 
                  lineHeight:1.5,
                  "&::placeholder": {
                    color: " #c2c2c4",
                    opacity: 1,
                  },
                },
              }}
            />
          </Box>

         {/* Description */}
           <Box sx={{ mb: 4 }}>
            <TextField
              fullWidth
              name="description"
              placeholder={t('productModal.description.placeholder')}
              value={formData.description}
              onChange={handleChange}
              onBlur={() => handleBlur("description")}
              variant="standard"
              multiline
              rows={3}
              sx={{
                "& .MuiInput-root": {
                  color: " #c2c2c4",
                  fontSize: "14px",
                  "&:before": {
                    borderBottom: "1px solid  #c2c2c4",
                  },
                  "&:hover:not(.Mui-disabled):before": {
                    borderBottom: "1px solid  #c2c2c4"
                  },
                  "&:after": {
                    borderBottom: "1px solid  #c2c2c4",
                  },
                },
                "& .MuiInput-input": {
                  paddingBottom: "20px", 
                  lineHeight:1.5,
                  "&::placeholder": {
                    color: " #c2c2c4",
                    opacity: 1,
                  },
                },
              }}
            />
          </Box>        
        {/* Privacy Policy Checkbox */}
         <Box className="policy-div"
          sx={{ display: 'flex', gap: '8px',alignItems:'center', marginTop: '16px' }}
        >
          <input
            type="radio"
            name="acceptedPolicy"
            checked={formData.acceptedPolicy}
            onChange={handleChange}
            onBlur={() => handleBlur("acceptedPolicy")}
            style={{
              accentColor: "#7FEE64",
              cursor: "pointer",
              width: "16px",
              height: "16px",
              mt:"8px !important"
        
            }}
          />
        
          <Typography
            className="bodyRegularText4"
            sx={{ color: "#C2C2C4", }}
          >
            {t('productModal.privacyPolicy.text')}{" "}
            <span
              onClick={() => navigate(`/${lang}/privacy-policy`)}
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "#C2C2C4",
              }}
            >
              {t('productModal.privacyPolicy.link')}
            </span>
          </Typography>
        </Box>
        {touched.acceptedPolicy && formErrors.acceptedPolicy && (
          <FormHelperText sx={{ color: "#f44336", fontSize: "12px", mt: 0.5 }}>
            {formErrors.acceptedPolicy}
          </FormHelperText>
        )}
                          
    {/* Submit Button - Exact circular green button */}
                        <Box sx={{
                            mt:5,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            mx: "auto",
                            position: "relative",
                            zIndex: 1,
                            marginBottom: { xs: "1rem", sm: "1rem", md: "2rem" },
                            color:'#c2c2c4'

                        }}>
                            {isSubmitting ? (
                                <Button disabled variant="contained" sx={{ borderRadius: '50px', px: 5, py: 1.5,
                                  '&.Mui-disabled': {
                                 color: '#fcfcfc',
              
                                 opacity: 1, 
                                }, }}>
                                    {t('productModal.submit.submitting')}
                                </Button>
                            ) : (
                                <div onClick={handleSubmit} style={{ cursor: 'pointer' }}>
                                    <AnimateButton  text1={t('contactus.SUBMIT')} text2={t('contactus.NOW')} />
                                </div>
                            )}
                        </Box>
                   </Box>
              </Box>
           </Modal>

{/* SUCCESS MESSAGE MODAL */}
<Modal
    open={showSuccess}
    onClose={handleCloseSuccess}
    aria-labelledby="success-message-modal"
    sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}
>
    <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
            width: '632px',
            maxWidth: '95vw',
            maxHeight: '95vh',
            bgcolor: '#444444',
            borderRadius: '8px',
            position: 'relative',
            overflow: 'auto',
            
            '&::-webkit-scrollbar': {
                width: '8px',
            },
            '&::-webkit-scrollbar-track': {
                background: '#3a3a3a',
            },
            '&::-webkit-scrollbar-thumb': {
                background: '#666666',
                borderRadius: '4px',
            },
        }}
    >
        {/* Close Button */}
        <IconButton
            onClick={handleCloseSuccess}
            sx={{
                position: 'absolute',
                right: 16,
                top: 16,
                color: '#E0A678',
                border: '1px solid #E0A678',
                borderRadius: '4px',
                width: '28px',
                height: '28px',
                padding: 0,
               
            }}
        >
            <CloseIcon sx={{ fontSize: '18px' }} />
        </IconButton>

        {/* Success Message Content */}
        <Box sx={{ pt: 8, pb: 6, px: 5, textAlign: 'center' }}>
            {/* Title */}
            <Typography 
                sx={{ 
                    color: '#FCFCFC',
                    fontWeight: 400,
                    fontSize: '32px',
                    textAlign: 'center',
                    letterSpacing: '0.5px',
                    mb: 2
                }}
                className='headings-h5'
            >
                {t('productModal.success.title')}
            </Typography>

            {/* Subtitle */}
            <Typography 
                sx={{ 
                    color: '#C2C2C4',
                    fontSize: '18px',
                    textAlign: 'center',
                    lineHeight: 1.6,
                    mb: 4
                }}
                className='bodyRegularText3'
            >
                {t('productModal.success.message')}
            </Typography>
        </Box>
    </Box>
</Modal>
        </>
    );
};

export default PaymentOptions;