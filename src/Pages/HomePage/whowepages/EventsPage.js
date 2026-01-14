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
import events from '../../../assets/Home/Events-&-festivals.avif';
import AnimateButton from '../../../Componenets/CommonComponents/AnimateButton';
import ArrowButton from '../../../Componenets/CommonComponents/ArrowButton';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ProductEnquiryForm from './ProductEnquiryForm';
import { useTranslation } from 'react-i18next';

import Machine1 from '../../../assets/Home/Pizza-machine.png';
import Machine6 from '../../../assets/Home/Return-machine.png';
import Machine7 from '../../../assets/Home/Gourmet-machine.webp';

import Machine7SmallIcon1 from '../../../assets/Home/MachineIcons/Machine7Icon1.svg';
import Machine7SmallIcon2 from '../../../assets/Home/MachineIcons/Machine7Icon2.svg';
import MachineSmallIcon1 from '../../../assets/Home/MachineIcons/Machine1Icon1.svg';
import MachineSmallIcon2 from '../../../assets/Home/MachineIcons/Machine1Icon2.svg';
import MachineSmallIcon3 from '../../../assets/Home/MachineIcons/Machine1Icon3.svg';
import MachineSmallIcon4 from '../../../assets/Home/MachineIcons/Machine1Icon4.svg';
import MachineSmallIcon5 from '../../../assets/Home/MachineIcons/Machine1Icon5.svg';
import MachineSmallIcon6 from '../../../assets/Home/MachineIcons/Machine1Icon6.svg';

const EventsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const [expandedFaqIndex, setExpandedFaqIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
  };

  const faqData = [
    {
      question: t('events.faq.questions.question1'),
      answer: t('events.faq.questions.answer1'),
    },
    {
      question: t('events.faq.questions.question2'),
      answer: t('events.faq.questions.answer2'),
    },
    {
      question: t('events.faq.questions.question3'),
      answer: t('events.faq.questions.answer3'),
    },
    {
      question: t('events.faq.questions.question4'),
      answer: t('events.faq.questions.answer4'),
    },
    {
      question: t('events.faq.questions.question5'),
      answer: t('events.faq.questions.answer5'),
    },
    {
      question: t('events.faq.questions.question6'),
      answer: t('events.faq.questions.answer6'),
    },
    {
      question: t('events.faq.questions.question7'),
      answer: t('events.faq.questions.answer7'),
    },
  ];

  const machines = [
    {
      img: Machine7,
      name: t('machines.GourmetMachine'),
      button: t('machines.ExploreCombo'),
      alt: 'NAF Gourmet Vending Machine Delivering Fresh, High-Quality Food Options.',
      icons: [
        { src: Machine7SmallIcon1 },
        { src: Machine7SmallIcon2 },
      ],
    },
    {
      img: Machine1,
      name: t('machines.PizzaMachine'),
      button: t('machines.ExplorePizza'),
      alt: 'NAF Pizza Vending at Events & Festivals.',
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
      name: t('machines.ReturnMachine'),
      button: t('machines.ReturnMachine'),
      alt: 'NAF Automated Bowl Return Machine.',
      icons: [],
    },
  ];

  const handleMachineClick = (machineName) => {
    navigate(`/${lang}/machine`, { state: { selectedMachine: machineName } });
  };

  return (
    <>
      {/* HERO */}
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
            ), url(${events}) lightgray 50% / cover no-repeat`,
          }}
        >
          <Box sx={{ width: '50%' }}>
            <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
              {t('events.hero.subtitle')}
            </Typography>
            <Typography className="headings-h3" sx={{ color: '#fcfcfc', mt: 1 }}>
              {t('events.hero.title')}
            </Typography>
            <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4', mt: 2 }}>
              {t('events.hero.description')}
            </Typography>
            <Box sx={{ mt: 4, display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <AnimateButton onClick={handleScrollToContact} />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* CONTENT */}
      <Box sx={{  mt: 5, px: { xs: 2, sm: 6 }, py: 6 }}>
        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
          {t('events.content.paragraph1')}
        </Typography>
        <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4', mt: 3 }}>
          {t('events.content.paragraph2')}
        </Typography>
      </Box>

      {/* ADVANTAGES */}
      <Box sx={{ px: { xs: 2, sm: 6 }, mt: { xs: 8, md: 25 }, mb: 8 }}>
        <Typography className="headings-h3" sx={{ textAlign: 'center', color: '#fcfcfc', mb: 6 }}>
          {t('events.advantages.title')}
        </Typography>

        <Grid container rowSpacing={{ xs: 10, md: 10 }} columnSpacing={{ xs: 2, sm: 3, md: 3 }}>
          {Object.values(t('events.advantages.features', { returnObjects: true })).map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box sx={{height:'100%', backgroundColor: '#161616', border: '1px solid #393939', display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
 borderRadius: '24px', p: "32px", }}>
                <Box sx={{ mb: 6 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <circle cx="12" cy="12" r="12" fill="#FA7854"/>
</svg>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 1.5 }}>
                  <Typography className="bodyMediumText1" sx={{ color: '#fcfcfc' }}>{feature.title}</Typography>
                  <Typography className="bodyRegularText4" sx={{ color: '#c2c2c4', lineHeight: 1.6 }}>{feature.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* MACHINES */}
        <Box sx={{ mt: { xs: 8, md: 35 },  }}>
          <Typography className="headings-h3" sx={{ color: '#fcfcfc', mb: 2 }}>
            {t('events.machines.title')}
          </Typography>
          <Typography className="bodyRegularText3" sx={{ color: '#c2c2c4' }}>
            {t('events.machines.description')}
          </Typography>
        </Box>

        <Box sx={{ mt: { xs: 8, md: 5 }, mb: 8 }}className="machine-sec-homepage">
          <Swiper modules={[FreeMode, Mousewheel]} spaceBetween={16} slidesPerView={'auto'} freeMode grabCursor>
            {machines.map((machine, index) => (
              <SwiperSlide key={index} style={{ width: 'auto' }}>
                <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '12px', background: '#262626', p: { xs: 1, sm: 2, md: 4 }, cursor: 'grab' }}>
                  <Box sx={{ height: { xs: 320, sm: 400, md: 500, xl: 650 } }}>
                    <Box sx={{ position: 'relative', height: '90%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box component="img" src={machine.img} alt={machine.name} sx={{ width: { xs: 200, sm: 250, md: 300, xl: 400 }, height: '100%', p: { xs: 3, sm: 4, md: 5 }, transition: 'transform 0.3s ease', cursor: 'grab', zIndex: 2, '&:hover': { transform: 'scale(1.05)' } }} />
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mt: 2, px: 1, gap: 2 }}>
                    <Typography className="bodyMediumText2" sx={{ color: '#fff' }}>{machine.name}</Typography>
                    <ArrowButton onClick={() => handleMachineClick(machine.name)} />
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

      {/* CONTACT FORM */}
      <Box sx={{  mt: { xs: 8, md: 25 }, mb: 8 }} id="contact">
        <ProductEnquiryForm />
      </Box>

      {/* FAQ */}
      <Box sx={{ mt: { xs: 10, md: 25 }, py: { xs: 6, md: 8 }, width: '100%' }}>
        <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}>
          <Typography className="headings-h2" sx={{ color: '#fcfcfc' }}>{t('events.faq.title')}</Typography>
          <Typography className="bodyMediumText2" sx={{ color: '#C2C2C4' }}>{t('events.faq.subtitle')}</Typography>
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

export default EventsPage;
