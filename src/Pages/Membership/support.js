// import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
    Box,
    Typography,
    TextField,
    MenuItem,
    Button,
    Checkbox,
    FormControlLabel,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import React, { useEffect, useState } from 'react';
import CustomTextField from '../MachinesPage/MantaincePage/CustomTextField';
import CustomSelect from '../MachinesPage/MantaincePage/CustomSelect';
import {
    ArrowDropDown,
} from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { UploadIcon } from '../../Componenets/CustomIcons';
import { useTranslation } from 'react-i18next';

import AnimateButton from "../../Componenets/CommonComponents/AnimateButton";
import i18n from '../../i18n';

const Support = () => {
    const navigate = useNavigate()
    const { lang } = useParams()
    const { t } = useTranslation();
    const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

    useEffect(() => {
        if (lang && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang]);

    const [formTab0, setFormTab0] = useState({
        companyName: '',
        willingToPurchaseMachine: '',
        fullName: '',
        email: '',
        phoneNumber: '',
        machineIdLocation: '',
        accountType: '',
        requestType: '',
        subject: '',
        message: '',
        media: [],
    });

    const handleChange = (e, tabIndex) => {
        const { name, value, type, files } = e.target;
        if (tabIndex === 0) {
            if (type === 'file') {
                setFormTab0(prev => ({
                    ...prev,
                    media: [...prev.media, ...files]
                }));
            } else {
                setFormTab0(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        }
    };

    const handleDelete = (index) => {
        setFormTab0(prev => ({
            ...prev,
            media: prev.media.filter((_, i) => i !== index)
        }));
    };

    const faqData = [
        {
            question: t('support.faq.question1'),
            answer: t('support.faq.answer1')
        },
        {
            question: t('support.faq.question2'),
            answer: t('support.faq.answer2')
        },
        {
            question: t('support.faq.question3'),
            answer: t('support.faq.answer3')
        },
        {
            question: t('support.faq.question4'),
            answer: t('support.faq.answer4')
        }
    ];


    const steps = [
        {
            step: "1",
            title: t('support.workflow.step1Title'),
            desc: t('support.workflow.step1Desc'),
        },
        {
            step: "2",
            title: t('support.workflow.step2Title'),
            desc: t('support.workflow.step2Desc'),
        },
        {
            step: "3",
            title: t('support.workflow.step3Title'),
            desc: t('support.workflow.step3Desc'),
        },

    ];


    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: "#1D1D1F",
                boxSizing: "border-box",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "200px",
                px: { xs: 2, md: 10 },
            }}
        >


            {/* Header */}
            <Typography className='bodyMediumText1'
                sx={{
                    color: "#7CFF7C !important",

                    mb: 2,
                }}
            >
                {t('support.header')}
            </Typography>

            <Typography className='headings-h1'
                sx={{
                    color: "#FCFCFC",
                    fontSize: { xs: "32px", md: "48px" },
                    fontWeight: 700,
                    textAlign: "center",
                    mb: 2,
                }}
            >
                {t('support.mainHeading')}
            </Typography>

            <Typography className='bodyRegularText3'
                sx={{
                    color: "#C2C2C4",
                    maxWidth: 700,
                    textAlign: "center",
                    mb: 6,
                    lineHeight: 1.6,
                }}
            >
                {t('support.description')}
            </Typography>

            {/* Form Card */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: 1020,
                    background: "#1D1D1F",
                    border: "1px solid #525252",
                    borderRadius: "12px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                    p: { xs: 1, sm: 2, md: 15 },
                    py: { xs: 2, md: 10 },
                    mt: "90px",
                }}
            >
                <Typography className='headings-h4'
                    sx={{
                        color: "#FCFCFC",

                        mb: 4,
                        textAlign: "center",
                    }}
                >
                    {t('support.formTitle')}
                </Typography>

                {/* Inputs */}
                <Box sx={{ display: "flex", flexDirection: "column", gap: 3, padding: { xs: 1, md: 3 } }}>
                    <CustomTextField
                        required
                        label={t('support.fullName')}
                        name="fullName"
                        value={formTab0.fullName || ''}
                        onChange={(e) => handleChange(e, 0)}
                    />
                    <CustomTextField
                        required
                        label={t('support.email')}
                        name="email"
                        value={formTab0.email || ''}
                        onChange={(e) => handleChange(e, 0)}
                    />

                    <CustomTextField
                        label={t('support.phoneNumber')}
                        name="phoneNumber"
                        value={formTab0.phoneNumber || ''}
                        onChange={(e) => handleChange(e, 0)}
                    />

                    <CustomTextField
                        label={t('support.machineIdLocation')}
                        name="machineIdLocation"
                        value={formTab0.machineIdLocation || ''}
                        onChange={(e) => handleChange(e, 0)}
                    />

                    <CustomSelect
                        required
                        label={t('support.accountType')}
                        name="accountType"
                        value={formTab0.accountType || ''}
                        onChange={(e) => handleChange(e, 0)}
                        options={[
                            { value: 'user', label: t('support.userMember') },
                            { value: 'business', label: t('support.businessPartner') },
                        ]}
                    />

                    <CustomSelect
                        required
                        label={t('support.requestType')}
                        name="requestType"
                        value={formTab0.requestType || ''}
                        onChange={(e) => handleChange(e, 0)}
                        options={[
                            { value: 'technical', label: t('support.technicalIssue') },
                            { value: 'payment', label: t('support.paymentIssue') },
                            { value: 'machine', label: t('support.machineIssue') },
                            { value: 'account', label: t('support.accountMembership') },
                            { value: 'feedback', label: t('support.feedbackSuggestion') },
                            { value: 'other', label: t('support.other') },
                        ]}
                    />

                    <CustomTextField
                        required
                        label={t('support.subject')}
                        name="subject"
                        value={formTab0.subject || ''}
                        onChange={(e) => handleChange(e, 0)}
                    />

                    <CustomTextField
                        required
                        label={t('support.messageDescription')}
                        name="message"
                        value={formTab0.message || ''}
                        onChange={(e) => handleChange(e, 0)}
                        multiline
                        rows={4}
                    />

                    <Box sx={{ mt: 2 }}>
                        <label
                            htmlFor="media-upload"
                            className="bodyRegularText4"
                            style={{
                                color: '#C2C2C4',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#F4F4F4',
                                    borderRadius: '50%',
                                    padding: '10px',
                                    cursor: 'pointer'
                                }}
                            >
                                <UploadIcon />
                            </div>
                            {t('Maintenance.UploadMedia')}
                        </label>

                        <input
                            hidden
                            id="media-upload"
                            accept="image/*,video/*,audio/*"
                            type="file"
                            name="media"
                            onChange={(e) => handleChange(e, 0)}
                            multiple
                        />
                    </Box>

                    {formTab0.media.length > 0 && (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 2 }}>
                            {formTab0.media.map((file, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        position: 'relative',
                                        display: 'flex',
                                        alignItems: 'center',
                                        margin: '8px',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            backgroundColor: '#eee',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: '4px',
                                            overflow: 'hidden',
                                            marginRight: '8px',
                                        }}
                                    >
                                        {file.type.startsWith('image') ? (
                                            <img src={URL.createObjectURL(file)} alt={file.name} width="60" height="60" />
                                        ) : (
                                            <Typography sx={{ color: '#C2C2C4', fontSize: '12px' }}>{t('Maintenance.media')}</Typography>
                                        )}
                                    </Box>
                                    <CloseIcon
                                        onClick={() => handleDelete(index)}
                                        sx={{
                                            position: 'absolute',
                                            top: '-8px',
                                            right: '-8px',
                                            cursor: 'pointer',
                                            color: '#FCFCFC',
                                            fontSize: '16px',
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    )}

                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                        <input
                            type="radio"
                            id="privacyConsent"
                            name="privacyConsent"
                            // checked={isConsentChecked}
                            // onChange={(e) => setIsConsentChecked(e.target.checked)}
                            style={{
                                marginTop: '4px',
                                accentColor: '#7FEE64', // green color for selected
                                width: '16px',
                                height: '16px',
                            }}
                        />
                        <label htmlFor="privacyConsent" className='bodyRegularText4' style={{ color: '#FCFCFC', fontSize: '14px' }}>
                            {t('contactus.privacypolicy1')}{' '}
                            <a
                                style={{
                                    color: '#FCFCFC',
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                }}
                                onClick={() => navigate(`/${lang}/privacy-policy`)}
                            >
                                {t('contactus.privacypolicy2')}
                            </a>

                        </label>
                    </div>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        mx: "auto",
                        position: "relative",
                        zIndex: 1,
                        marginBottom: { xs: "1rem", sm: "1rem", md: "2rem" }
                    }}>

                        <div style={{ cursor: 'pointer' }}>
                            <AnimateButton text1="Submit" text2="Now" />
                        </div>
                        {/* )} */}
                    </Box>

                </Box>
            </Box>



            <Box sx={{ mt: "250px", mb: 20 }}>
                <Box
                    sx={{
                        width: "100%",
                    }}
                >
                    {/* Title */}
                    <Typography className="headings-h2"
                        sx={{
                            textAlign: "center",
                            mb: 8,
                        }}
                    >
                        {t('support.workflow.title')}
                    </Typography>

                    {/* Steps Row */}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            gap: 4,
                            flexWrap: "wrap",
                        }}
                    >
                        {steps.map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    flex: "1 1 220px",
                                    minWidth: 220,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",

                                }}
                            >
                                {/* Circle */}
                                <Box className="headings-h4"
                                    sx={{
                                        display: "flex",
                                        width: "100px",
                                        padding: "30px",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        aspectRatio: "1 / 1",
                                        borderRadius: "50%",
                                        background: "#393939",
                                        color: '#9D9EA1',
                                        mb: 5,
                                    }}
                                >
                                    {item.step}
                                </Box>

                                {/* Title */}
                                <Typography className="bodyMediumText1"
                                    sx={{
                                        color: "#FCFCFC",
                                        mb: 1,
                                    }}
                                >
                                    {item.title}
                                </Typography>

                                {/* Description */}
                                <Typography className="bodyRegularText3"
                                    sx={{
                                        color: "#C2C2C4",
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>



            {/* FAQ Section */}
            <Box sx={{ mt: { xs: 10, md: 12 }, py: { xs: 6, md: 8 }, width: '100%' }}>
                <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
                    <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
                        {t('transportation.faq.title')}
                    </Typography>
                    <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
                        {t('support.faq.subtitle')}
                    </Typography>
                </Box>

                <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' }, mx: 'auto' }}>
                    {faqData.map((faq, index) => (
                        <Accordion
                            key={index}
                            expanded={expandedFaqIndex === index}
                            onChange={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
                            sx={{
                                py: 2,
                                border: '1px solid #393939',
                                backgroundColor: 'transparent',
                                color: '#C2C2C4',
                                borderRadius: '12px !important',
                                boxShadow: 'none',
                                mb: 2,
                                '&::before': { display: 'none' },
                            }}
                        >
                            <AccordionSummary expandIcon={<ArrowDropDown sx={{ color: '#C2C2C4' }} />}>
                                <Typography className="bodyRegularText4" sx={{ fontWeight: '700' }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="bodyRegularText4">
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>

            </Box>
        </Box>
    );
}

export default Support