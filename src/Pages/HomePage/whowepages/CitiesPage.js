import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

import cityImg from '../../../assets/Home/Municipalities-&-public-authorities.avif';
import AnimateButton from '../../../Componenets/CommonComponents/AnimateButton';
import ArrowButton from '../../../Componenets/CommonComponents/ArrowButton';
import ProductEnquiryForm from './ProductEnquiryForm';

import Machine1 from '../../../assets/Home/Pizza-machine.png';
import Machine6 from '../../../assets/Home/Return-machine.png';
import Machine7 from '../../../assets/Home/Gourmet-machine.webp';

// Machine Icons
import MachineSmallIcon1 from '../../../assets/Home/MachineIcons/Machine1Icon1.svg';
import MachineSmallIcon2 from '../../../assets/Home/MachineIcons/Machine1Icon2.svg';
import Machine7SmallIcon1 from '../../../assets/Home/MachineIcons/Machine7Icon1.svg';
import Machine7SmallIcon2 from '../../../assets/Home/MachineIcons/Machine7Icon2.svg';

const CitiesPage = () => {
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

  const faqData = [
    {
      question: t('cities.faq.questions.question1'),
      answer: t('cities.faq.questions.answer1')
    },
    {
      question: t('cities.faq.questions.question2'),
      answer: t('cities.faq.questions.answer2')
    },
    {
      question: t('cities.faq.questions.question3'),
      answer: t('cities.faq.questions.answer3')
    },
    {
      question: t('cities.faq.questions.question4'),
      answer: t('cities.faq.questions.answer4')
    },
    {
      question: t('cities.faq.questions.question5'),
      answer: t('cities.faq.questions.answer5')
    },
    {
      question: t('cities.faq.questions.question6'),
      answer: t('cities.faq.questions.answer6')
    },
    {
      question: t('cities.faq.questions.question7'),
      answer: t('cities.faq.questions.answer7')
    }
  ];

  const machines = [
    {
      img: Machine7,
      name: t('machines.GourmetMachine'),
      alt: t('machines.GourmetMachineAlt'),
      button: t('cities.machines.title'),
      icons: [
        { src: Machine7SmallIcon1 },
        { src: Machine7SmallIcon2 }
      ]
    },
    {
      img: Machine1,
      name: t('machines.PizzaMachine'),
      alt: t('machines.PizzaMachineAlt'),
      button: t('cities.machines.title'),
      icons: [
        { src: MachineSmallIcon1 },
        { src: MachineSmallIcon2 }
      ]
    },
    {
      img: Machine6,
      name: t('machines.ReturnMachine'),
      alt: t('machines.ReturnMachineAlt'),
      button: t('cities.machines.title'),
      icons: []
    }
  ];

  const handleMachineClick = (machineName) => {
    navigate(`/${lang}/machine`, { state: { selectedMachine: machineName } });
  };

  return (
    <>
      {/* HERO */}
      <Box sx={{ mt: { xs: 8, md: 16 }, width: '100%' }}>
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
              rgba(0,0,0,0) 32.78%,
              rgba(0,0,0,0.5) 62.37%
            ), url(${cityImg}) lightgray 50% / cover no-repeat`
          }}
        >
          <Box sx={{ width: '50%' }}>
            <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
              {t('cities.hero.subtitle')}
            </Typography>
            <Typography className="headings-h3" sx={{ color: '#fcfcfc', mt: 1 }}>
              {t('cities.hero.title')}
            </Typography>
            <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4', mt: 2 }}>
              {t('cities.hero.description')}
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <AnimateButton onClick={handleScrollToContact} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CONTENT */}
      <Box sx={{ mt: 5,px: { xs: 2, sm: 2 }, py: 6 }}>
        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
          {t('cities.content.paragraph1')}
        </Typography>
        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4', mt: 3 }}>
          {t('cities.content.paragraph2')}
        </Typography>
      </Box>

      {/* FEATURES */}
      <Box sx={{ px: { xs: 2, sm: 6 }, mt: { xs: 8, md: 25 }, mb: 8 }}>
        <Typography className="headings-h3" sx={{ textAlign: 'center', color: '#fcfcfc', mb: 6 }}>
          {t('cities.advantages.title')}
        </Typography>
        <Grid container rowSpacing={{ xs: 10, md: 10 }} columnSpacing={{ xs: 2, sm: 3, md: 3 }}>
          {Object.values(t('cities.advantages.features', { returnObjects: true })).map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{
                height:'100%', 
                backgroundColor: '#161616', 
                border: '1px solid #393939', 
                borderRadius: '24px',
                 p: 2
              }}
                  >
                <Box sx={{ mb: 6 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="60" viewBox="0 0 50 60" fill="none">
                    <path d="M4.72153 30.6795H1.15602C0.740282 30.6795 0.403874 31.0154 0.403874 31.4297C0.403874 41.4225 6.55617 50.4072 15.8096 54.0785C14.8988 55.6514 14.4221 57.4209 14.4221 59.2498C14.4221 59.6641 14.7585 60 15.1742 60H34.5081C34.9238 60 35.2603 59.6641 35.2603 59.2498C35.2603 57.4202 34.7836 55.6503 33.8735 54.0778C43.1262 50.4068 49.2785 41.4221 49.2785 31.4297C49.2785 31.0154 48.942 30.6795 48.5263 30.6795H44.1656C46.3908 27.6465 47.8904 24.1176 48.527 20.3834C48.5968 19.975 48.3214 19.5875 47.9123 19.5179L43.6598 18.796C48.1355 13.8771 50.4136 7.3612 49.938 0.69713C49.9087 0.283954 49.5627 -0.0273933 49.1345 0.00190998L1.88392 3.35347C1.68487 3.36776 1.49977 3.46006 1.36903 3.61024C1.23828 3.76079 1.17291 3.95675 1.1876 4.15492C1.3794 6.84871 2.00709 9.44695 3.04712 11.9017L1.21478 11.5906C0.808592 11.5196 0.417096 11.7961 0.347317 12.2042C-0.766574 18.7269 0.827092 25.3728 4.72153 30.6795ZM32.4889 52.994C32.2671 53.0723 32.0945 53.25 32.0232 53.4738C31.952 53.6976 31.9895 53.9419 32.1253 54.1339C33.0464 55.4353 33.5922 56.9316 33.7244 58.4997H15.9579C16.0902 56.9323 16.6366 55.4364 17.5577 54.1346C17.6936 53.9426 17.7311 53.6983 17.6598 53.4745C17.5886 53.2507 17.416 53.0731 17.1941 52.9947C8.28815 49.8526 2.22914 41.5481 1.92065 32.1798H42.6137C42.6166 32.1799 42.6194 32.1813 42.6223 32.1813C42.6246 32.1813 42.6267 32.1798 42.629 32.1798H47.7617C47.4532 41.5477 41.3942 49.8519 32.4889 52.994ZM2.75285 4.79593L48.4793 1.55242C48.7227 7.86783 46.3373 13.9821 41.8704 18.4922L4.83143 12.2046C3.72232 9.86878 3.02109 7.38254 2.75285 4.79593ZM1.71572 13.1975L46.906 20.8691C46.1696 24.4694 44.5688 27.838 42.259 30.6795H6.62089C2.62872 25.7598 0.857988 19.4479 1.71572 13.1975Z" fill="#FA7854" />
                  </svg>
                </Box>
                <Typography className="bodyRegularText3" sx={{ color: '#fcfcfc' }}>
                  {feature.title}
                </Typography>
                <Typography className="bodyRegularText4" sx={{ color: '#c2c2c4', lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* MACHINES */}
        <Box sx={{ mt: { xs: 8, md: 35 }, mb: 8 }}>
          <Typography className="headings-h3" sx={{ color: '#fcfcfc', mb: 2 }}>
            {t('cities.machines.title')}
          </Typography>
          <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
            {t('cities.machines.description')}
          </Typography>
        </Box>
        <Box sx={{  mb: 8 }} className="machine-sec-homepage">
          <Swiper modules={[FreeMode, Mousewheel]} spaceBetween={16} slidesPerView={'auto'} freeMode grabCursor>
            {machines.map((machine, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <Box
                  className="machine-card"
                  sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '12px', background: '#262626', p: { xs: 1, sm: 2, md: 4 }, cursor: 'grab' }}
                >
                  <Box sx={{ height: { xs: 320, sm: 400, md: 500, xl: 650 } }}>
                    <Box component="img" src={machine.img} alt={machine.alt} sx={{ width: { xs: 200, sm: 250, md: 300, xl: 400 }, height: '100%', p: { xs: 3, sm: 4, md: 5 }, transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }} />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mt: 2, px: 1, gap: 2 }}>
                    <Typography className="bodyMediumText2" sx={{ color: '#fff' }}>
                      {machine.name}
                    </Typography>
                    <ArrowButton onClick={() => handleMachineClick(machine.name)} />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* PRODUCT ENQUIRY */}
      <Box sx={{  mt: { xs: 8, md: 25 }, mb: 8 }} id="contact">
        <ProductEnquiryForm />
      </Box>

      {/* FAQ */}
      <Box  sx={{ mt: { xs: 10, md: 25 }, py: { xs: 6, md: 8 } }}>
        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>
            {t('cities.faq.title')}
          </Typography>
          <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>
            {t('cities.faq.subtitle')}
          </Typography>
        </Box>
        <Box sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '40%' }, mx: 'auto' }}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              expanded={expandedFaqIndex === index}
              onChange={() => setExpandedFaqIndex(expandedFaqIndex === index ? null : index)}
              sx={{ py: 2, border: '1px solid #393939', backgroundColor: 'transparent', color: '#C2C2C4', borderRadius: '12px !important', boxShadow: 'none', mb: 2, '&::before': { display: 'none' } }}
            >
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

export default CitiesPage;
