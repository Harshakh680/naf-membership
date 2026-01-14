import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';

// Images
import hotel from '../../assets/Home/Hotels-&-restaurants.png';
import camp from '../../assets/Home/Campgrounds.jpg';
import school from '../../assets/Home/Schools-&-universities.jpg';
import factory from '../../assets/Home/Companies-&-factories.jpg';
import clinic from '../../assets/Home/clinics.jpg';
import city from '../../assets/Home/Municipalities-&-public-authorities.jpg';
import senior from '../../assets/Home/SeniorHome.jpg';
import transport from '../../assets/Home/Gas-stations-&-rest-areas.jpg';
import events from '../../assets/Home/Events-&-festivals.jpg';
import office from '../../assets/Home/offices.jpg';

// Components
import ArrowButton from '../../Componenets/CommonComponents/ArrowButton';
import ScrollMaskHeadings from '../../Componenets/CommonComponents/ScrollMaskHeadings';
import ScrollMaskText from '../../Componenets/CommonComponents/ScrollMaskText';

const WhoWeServe = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  //  navigation handler
  const handleMachineClick = (route) => {
    navigate(`/${lang}/${route}`);
  };

  //  Cards data with routes
const cards = [
  {
    title: t('whoWeServe.hotels.title'),
    desc: t('whoWeServe.hotels.desc'),
    image: hotel,
    route: 'hotelsresorts',
  },
  {
    title: t('whoWeServe.campgrounds.title'),
    desc: t('whoWeServe.campgrounds.desc'),
    image: camp,
    route: 'campgrounds',
  },
  {
    title: t('whoWeServe.schools.title'),
    desc: t('whoWeServe.schools.desc'),
    image: school,
    route: 'schools-universities',
  },
  {
    title: t('whoWeServe.factories.title'),
    desc: t('whoWeServe.factories.desc'),
    image: factory,
    route: 'factories',
  },
  {
    title: t('whoWeServe.clinics.title'),
    desc: t('whoWeServe.clinics.desc'),
    image: clinic,
    route: 'clinics',
  },
  {
    title: t('whoWeServe.municipalities.title'),
    desc: t('whoWeServe.municipalities.desc'),
    image: city,
    route: 'municipalities',
  },
  {
    title: t('whoWeServe.seniorHomes.title'),
    desc: t('whoWeServe.seniorHomes.desc'),
    image: senior,
    route: 'senior-homes',
  },
  {
    title: t('whoWeServe.transport.title'),
    desc: t('whoWeServe.transport.desc'),
    image: transport,
    route: 'transportation',
  },
  {
    title: t('whoWeServe.events.title'),
    desc: t('whoWeServe.events.desc'),
    image: events,
    route: 'events-festivals',
  },
  {
    title: t('whoWeServe.offices.title'),
    desc: t('whoWeServe.offices.desc'),
    image: office,
    route: 'offices',
  },
];


  return (
    <Box className="section-container" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Heading */}
      <ScrollMaskHeadings text={t('whoWeServe.heading')} />
      <Box sx={{ mt: 2 }} className="bodyRegularText4">
       <ScrollMaskText text={t('whoWeServe.subheading')} />
      </Box>

      {/* Cards Grid */}
      <Box
        sx={{
          mt: 6,
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
          gap: '24px',
        }}
      >
        {cards.map((card, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: '#262626',
              borderRadius: '10px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={card.image}
              alt={card.title}
              sx={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
              }}
            />

            {/* Content */}
            <Box sx={{ p: 2, flexGrow: 1 }}>
              <Typography sx={{ color: '#FCFCFC', mb: 1 }} className="bodyRegularText3">
                {card.title}
              </Typography>

              <Typography
                sx={{ color: '#C2C2C4', fontSize: '14px', lineHeight: 1.6 }}
                className="bodyRegularText4"
              >
                {card.desc}
              </Typography>
            </Box>

            {/* Arrow Button */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2,
              }}
            >
              <ArrowButton
                onClick={() => handleMachineClick(card.route)}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhoWeServe;
