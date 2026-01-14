import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import clinic from '../../../assets/Home/clinics.png';
import AnimateButton from '../../../Componenets/CommonComponents/AnimateButton';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowButton from '../../../Componenets/CommonComponents/ArrowButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ProductEnquiryForm from './ProductEnquiryForm';
import { useTranslation } from 'react-i18next';

import Machine1 from '../../../assets/Home/Pizza-machine.png';
import Machine6 from '../../../assets/Home/Return-machine.png';

import MachineSmallIcon1 from '../../../assets/Home/MachineIcons/Machine1Icon1.svg';
import MachineSmallIcon2 from '../../../assets/Home/MachineIcons/Machine1Icon2.svg';
import MachineSmallIcon3 from '../../../assets/Home/MachineIcons/Machine1Icon3.svg';
import MachineSmallIcon4 from '../../../assets/Home/MachineIcons/Machine1Icon4.svg';
import MachineSmallIcon5 from '../../../assets/Home/MachineIcons/Machine1Icon5.svg';
import MachineSmallIcon6 from '../../../assets/Home/MachineIcons/Machine1Icon6.svg';

const ClinicsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMachineClick = (machineName) => {
    navigate(`/${lang}/machine`, { state: { selectedMachine: machineName } });
  };

  // FAQ data using translations
  const faqData = [
    {
      question: t('clinics.faq.questions.question1'),
      answer: t('clinics.faq.questions.answer1'),
    },
    {
      question: t('clinics.faq.questions.question2'),
      answer: t('clinics.faq.questions.answer2'),
    },
    {
      question: t('clinics.faq.questions.question3'),
      answer: t('clinics.faq.questions.answer3'),
    },
    {
      question: t('clinics.faq.questions.question4'),
      answer: t('clinics.faq.questions.answer4'),
    },
    {
      question: t('clinics.faq.questions.question5'),
      answer: t('clinics.faq.questions.answer5'),
    },
    {
      question: t('clinics.faq.questions.question6'),
      answer: t('clinics.faq.questions.answer6'),
    },
    {
      question: t('clinics.faq.questions.question7'),
      answer: t('clinics.faq.questions.answer7'),
    },
  ];

  // Features / advantages
  const features = [
    'availability',
    'staffing',
    'hygiene',
    'quality',
    'integration',
    'deployment',
  ];

  // Machines for Clinics page
  const machines = [
    {
      img: Machine1,
      name: t('clinics.machines.title'),
      alt: t('clinics.machines.description'),
      icons: [
        { src: MachineSmallIcon1 },
        { src: MachineSmallIcon2 },
        { src: MachineSmallIcon3 },
        { src: MachineSmallIcon4 },
        { src: MachineSmallIcon5 },
        { src: MachineSmallIcon6 },
      ],
    },
    {
      img: Machine6,
      name: t('clinics.machines.title'),
      alt: 'Automated Bowl Return - Sustainable Vending',
      icons: [],
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <Box sx={{ mt: { xs: 8, md: 16 }, width: '100%', boxSizing: 'border-box' }}>
        <Box
          sx={{
            width: '100%',
            height: { xs: '60vh', sm: '70vh', md: '80vh' },
            display: 'flex',
            alignItems: 'center',
            p: { xs: 2, sm: 4, md: 6 },
            boxSizing: 'border-box',
            overflow: 'hidden',
            background: `linear-gradient(
              270deg,
              rgba(0, 0, 0, 0.00) 32.78%,
              rgba(0, 0, 0, 0.50) 62.37%
            ), url(${clinic}) lightgray 50% / cover no-repeat`,
          }}
        >
          <Box sx={{ width: '50%' }}>
            <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
              {t('clinics.hero.subtitle')}
            </Typography>
            <Typography className="headings-h3" sx={{ color: '#fcfcfc', mt: 1 }}>
              {t('clinics.hero.title')}
            </Typography>
            <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4', mt: 2 }}>
              {t('clinics.hero.description')}
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <AnimateButton onClick={handleScrollToContact} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CONTENT SECTION */}
      <Box sx={{  mt: 5,  px: { xs: 2, sm: 6 }, py: 6 }}>
        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
          {t('clinics.content.paragraph1')}
        </Typography>
        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4', mt: 3 }}>
          {t('clinics.content.paragraph2')}
        </Typography>
      </Box>

      {/* FEATURES SECTION */}
      <Box sx={{ px: { xs: 2, sm: 6 }, mt: { xs: 8, md: 25 }, mb: 8 }}>
        <Typography className="headings-h3" sx={{ textAlign: 'center', color: '#fcfcfc', mb: 6 }}>
          {t('clinics.advantages.title')}
        </Typography>

        <Grid container rowSpacing={{ xs: 10, md: 10 }} columnSpacing={{ xs: 2, sm: 3, md: 3 }}>
          {features.map((key, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{ height:'100%',backgroundColor: '#161616', border: '1px solid #393939', borderRadius: '24px', p: 2 }}>
                <Box sx={{ mb: 6 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 50 60" fill="none">
                    <path d="M4.72153 30.6795H1.15602C0.740282..." fill="#FA7854" />
                  </svg>
                </Box>
                <Box>
                  <Typography className="bodyRegularText3" sx={{ color: '#fcfcfc' }}>
                    {t(`clinics.advantages.features.${key}.title`)}
                  </Typography>
                  <Typography className="bodyRegularText4" sx={{ color: '#c2c2c4', lineHeight: 1.6 }}>
                    {t(`clinics.advantages.features.${key}.description`)}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Machines Section */}
        <Box sx={{ mt: { xs: 8, md: 35 }, mb: 4 }}>
          <Typography sx={{ display: 'flex', flexDirection: 'column', color: '#fcfcfc', mb: 2 }} className='headings-h3'>
            {t('clinics.machines.title')}
          </Typography>
          <Typography sx={{ color: '#c2c2c4' }} className='bodyRegularText3'>
            {t('clinics.machines.description')}
          </Typography>
        </Box>

        <Box className='machine-sec-homepage'>
          <Swiper modules={[FreeMode, Mousewheel]} spaceBetween={16} slidesPerView={'auto'} freeMode={true} grabCursor={true}>
            {machines.map((machine, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <Box className="machine-card" sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '12px', background: '#262626', p: { xs: 1, sm: 2, md: 4 }, cursor: 'grab' }}>
                  <Box sx={{ height: { xs: 320, sm: 400, md: 500, xl: 650 } }}>
                    <Box sx={{ position: 'relative', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box component="img" src={machine.img} alt={machine.alt} sx={{ width: { xs: 200, sm: 250, md: 300, xl: 400 }, height: '100%', p: { xs: 3, sm: 4, md: 5 }, transition: 'transform 0.3s ease', cursor: 'grab', zIndex: 2, '&:hover': { transform: 'scale(1.05)' } }} />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mt: 2, px: 1, gap: 2, zIndex: 2 }}>
                    <Box>
                      <h2 className='bodyMediumText2' style={{ color: '#fff' }}>{machine.name}</h2>
                    </Box>
                    <ArrowButton onClick={() => handleMachineClick(machine.name)} />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* Contact / Enquiry Form */}
      <Box sx={{  mt: { xs: 8, md: 25 }, mb: 8 }} id="contact">
        <ProductEnquiryForm />
      </Box>

      {/* FAQ Section */}
      <Box sx={{ mt: { xs: 10, md: 25 }, py: { xs: 6, md: 8 }, width: '100%' }}>
        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
            {t('clinics.faq.title')}
          </Typography>
          <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
            {t('clinics.faq.subtitle')}
          </Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' }, mx: 'auto' }}>
          {faqData.map((faq, index) => (
            <Accordion key={index} expanded={expandedFaqIndex === index} onChange={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)} sx={{ py: 2, border: '1px solid #393939', backgroundColor: 'transparent', color: '#C2C2C4', borderRadius: '12px !important', boxShadow: 'none', mb: 2, '&::before': { display: 'none' } }}>
              <AccordionSummary expandIcon={<ArrowDropDown sx={{ color: '#C2C2C4' }} />}>
                <Typography className="bodyRegularText4">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="bodyRegularText4">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default ClinicsPage;
