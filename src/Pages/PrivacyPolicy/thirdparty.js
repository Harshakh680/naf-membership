import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "./privacypolicy.css";

const ThirdPartyPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ color: '#FCFCFC', marginLeft: "50px", marginRight: "50px", paddingTop: "150px" }}>
      <Typography className='headings-h1' variant="h3" gutterBottom>
        THIRD-PARTY INTEGRATIONS
      </Typography>

      {/* 1. Introduction */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          1. Introduction
        </Typography>

        <Box>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            This document describes the third-party services, tools, libraries, and infrastructure components ("Third-Party Integrations") used by{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              NAF
            </Typography>{' '}
            — New Age of Food UG (haftungsbeschränkt) ("NAF", "we", "us", "our").
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            These integrations support the operation, security, scalability, analytics, communication, payments, and user experience of:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              the{' '}
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                Vendinaf Website
              </Typography>,
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              the{' '}
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                NAF Cloud System
              </Typography>, and
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              the{' '}
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                NAF Mobile App
              </Typography>.
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Where third parties process personal data on behalf of NAF, they act as{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              data processors
            </Typography>{' '}
            within the meaning of Article 28 GDPR.
          </Typography>
        </Box>
      </Box>

      {/* 2. General Principles for Third-Party Use */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          2. General Principles for Third-Party Use
        </Typography>

        {/* 2.1 Purpose Limitation */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            2.1 Purpose Limitation
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Third-party services are integrated only where necessary to:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              deliver core platform functionality,
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              ensure security and reliability,
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              process payments,
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              provide communication services,
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              meet legal and operational obligations.
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            No third-party service is permitted to process personal data for its own independent purposes.
          </Typography>
        </Box>

        {/* 2.2 Data Minimisation */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            2.2 Data Minimisation
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Only the minimum amount of data required for a specific function is shared with third-party providers.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF does not sell personal data and does not permit third parties to use personal data for advertising or profiling beyond the defined scope.
          </Typography>
        </Box>

        {/* 2.3 Contractual Safeguards */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            2.3 Contractual Safeguards
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Where required:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Data Processing Agreements (DPAs) are in place
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Processing occurs only on documented instructions from NAF
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Technical and organisational safeguards are enforced
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            Legal basis:
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            Article 6 GDPR<br />
            Article 28 GDPR
          </Typography>
        </Box>
      </Box>

      {/* 3. Core Infrastructure and Cloud Hosting */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          3. Core Infrastructure and Cloud Hosting
        </Typography>

        {/* 3.1 Amazon Web Services (AWS) */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            3.1 Amazon Web Services (AWS)
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Used by:
            </Typography>{' '}
            Website, Cloud System, Mobile App (Backend)
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            AWS is used for:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Application hosting
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Database hosting
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              File and asset storage
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Backend services
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Scalability and redundancy
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Data processed may include:
            </Typography>
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Account and membership data
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Reservation records
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Transaction metadata
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              System and security logs
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Primary hosting location is within the{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              European Union
            </Typography>.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Where data is processed outside the EU, approved safeguards are applied.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            Legal basis:
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            Article 6(1)(b) GDPR<br />
            Article 6(1)(f) GDPR
          </Typography>
        </Box>
      </Box>

      {/* 4. Payment Processing */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          4. Payment Processing
        </Typography>

        {/* 4.1 Stripe */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            4.1 Stripe
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Used by:
            </Typography>{' '}
            Website, Cloud System, Mobile App
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Stripe is the{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              sole payment processor
            </Typography>{' '}
            used by NAF.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Stripe processes:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Card payment data
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Payment authentication
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Transaction confirmation
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Does{' '}
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                not
              </Typography>{' '}
              store card numbers or CVV data
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Stores only payment references, status, and timestamps
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Stripe may process data outside the EU under Standard Contractual Clauses (SCCs).
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            Legal basis:
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            Article 6(1)(b) GDPR<br />
            Articles 44–49 GDPR
          </Typography>
        </Box>
      </Box>

      {/* 5. Email and Communication Services */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          5. Email and Communication Services
        </Typography>

        {/* 5.1 Amazon Simple Email Service (SES) */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            5.1 Amazon Simple Email Service (SES)
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Used by:
            </Typography>{' '}
            Website, Cloud System, Mobile App
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Amazon SES is used to send:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Transactional emails
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Account notifications
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Security alerts
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Opt-in marketing emails
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Data processed:
            </Typography>
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Email address
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Message content
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Delivery metadata
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Marketing emails are sent only with explicit user consent.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            Legal basis:
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            Article 6(1)(b) GDPR<br />
            Article 6(1)(a) GDPR
          </Typography>
        </Box>
      </Box>

      {/* 6. Analytics, Monitoring, and Diagnostics */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          6. Analytics, Monitoring, and Diagnostics
        </Typography>

        {/* 6.1 Website Analytics Tools */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            6.1 Website Analytics Tools
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Used by:
            </Typography>{' '}
            Vendinaf Website
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Tools include:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Google Analytics
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Google Tag Manager
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Microsoft Clarity
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Ahrefs
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Google Play Console (store diagnostics)
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            These tools may process:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Page views
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Interaction events
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Browser and device information
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Performance metrics
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            A cookie consent banner is displayed before non-essential analytics are loaded.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            Legal basis:
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            Article 6(1)(a) GDPR
          </Typography>
        </Box>

        {/* 6.2 Mobile App Analytics and Crash Reporting */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            6.2 Mobile App Analytics and Crash Reporting
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Used by:
            </Typography>{' '}
            NAF Mobile App
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Analytics and crash reporting:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Are disabled by default
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Are enabled only if the user explicitly opts in via Privacy Settings
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            When enabled, data may include:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              App usage events
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Performance metrics
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Crash logs
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
            Legal basis:
          </Typography>
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
            Article 6(1)(a) GDPR
          </Typography>
        </Box>
      </Box>

      {/* 7. Mapping and Geolocation Services */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          7. Mapping and Geolocation Services
        </Typography>

        {/* 7.1 Mapping Providers */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            7.1 Mapping Providers
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Used by:
            </Typography>{' '}
            Website, Cloud System, Mobile App
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Providers include:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Google Maps
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Apple Maps
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              HERE Maps
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              MapTiler
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Leaflet
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Purpose:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Display vending machine locations
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Support navigation and proximity features
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Data processed:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Approximate location (if permitted)
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Map interaction data
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 8. Frontend UI, Styling, and Animation Libraries */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          8. Frontend UI, Styling, and Animation Libraries
        </Typography>

        {/* 8.1 UI Frameworks */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            8.1 UI Frameworks
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Used primarily on:
            </Typography>{' '}
            Website and Cloud System
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Libraries include:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              @mui/material
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              @mui/icons-material
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              @emotion/react
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              @emotion/styled
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              styled-components
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            These libraries:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Do not independently process personal data
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Are used solely for UI rendering
            </Typography>
          </Box>
        </Box>

        {/* 8.2 Animation and Interaction Libraries */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            8.2 Animation and Interaction Libraries
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Used to enhance user experience:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Framer Motion
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              GSAP
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Lottie (lottie-react)
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Swiper
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              React Slick
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              React Fast Marquee
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            These tools do not transmit personal data on their own.
          </Typography>
        </Box>
      </Box>

      {/* 9. Internationalisation (i18n) */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          9. Internationalisation (i18n)
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          Used to provide multilingual support:
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            i18next
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            react-i18next
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            i18next-browser-languagedetector
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            i18next-http-backend
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
            Data processed:
          </Typography>
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Language preferences
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Browser locale
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
          Legal basis:
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
          Article 6(1)(f) GDPR
        </Typography>
      </Box>

      {/* 10. Backend Frameworks and Services */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          10. Backend Frameworks and Services
        </Typography>

        {/* 10.1 Core Backend Technologies */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            10.1 Core Backend Technologies
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Used across all platforms:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Spring Boot
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              JHipster Framework
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Hibernate / JPA
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              MySQL
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Liquibase
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            These components manage:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              User accounts
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Reservations
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Wallet transactions
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Machine communication
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Business logic
            </Typography>
          </Box>
        </Box>

        {/* 10.2 IoT and Machine Communication */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            10.2 IoT and Machine Communication
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Used by:
            </Typography>{' '}
            Cloud System & Backend
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ ml: 2 }}>
            • Eclipse Paho MQTT is used for secure machine ↔ server communication
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Machine data includes:
            </Typography>
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Stock levels
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Machine status
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Temperature state
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Error codes
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Machine data is generally non-personal but may be linked to reservations during issue investigation.
          </Typography>
        </Box>
      </Box>

      {/* 11. Security, Monitoring, and Quality Assurance Tools */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          11. Security, Monitoring, and Quality Assurance Tools
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          Used internally to ensure reliability and security:
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Spring Security
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            OAuth2
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Hazelcast
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Micrometer / Prometheus
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            SonarQube
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            JacCoCo
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Testcontainers
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          These tools may process limited technical data for monitoring and debugging.
        </Typography>
      </Box>

      {/* 12. Build, CI/CD, and Deployment Tools */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          12. Build, CI/CD, and Deployment Tools
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          Used for development and deployment:
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Maven
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Jib
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Checkstyle
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Spotless
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Git Commit ID Plugin
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          These tools do not process end-user personal data.
        </Typography>
      </Box>

      {/* 13. Third-Party Assets, Media, and Design Resources */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          13. Third-Party Assets, Media, and Design Resources
        </Typography>

        {/* 13.1 Icons and UI Assets */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            13.1 Icons and UI Assets
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF uses icons and UI-related assets sourced from the following platforms:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • The Noun Project
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Iconify
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Figma Community
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Icons and UI assets are:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Selected exclusively from free, open-license, or community-provided resources
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Used in accordance with the respective platform's license terms
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Not sourced from paid subscriptions or restricted-license files
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            NAF does not upload user personal data to these platforms, and these services do not process user data on behalf of NAF.
          </Typography>
        </Box>

        {/* 13.2 Images, Videos, SVGs, and Media Assets */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            13.2 Images, Videos, SVGs, and Media Assets
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF uses images, videos, illustrations, SVGs, and other media assets sourced from:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Freepik
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Unsplash
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Pexels
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            All media assets are:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Obtained from free-to-use, royalty-free, or open-license libraries
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Used in compliance with the applicable license terms of each platform
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Not sourced from paid accounts, premium subscriptions, or restricted content libraries
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            These assets are used for:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Website visuals
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Mobile app UI elements
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Marketing and informational content
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Placeholder and illustrative purposes
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            No personal data of users is shared with or processed by these platforms.
          </Typography>
        </Box>

        {/* 13.3 License Compliance and Attribution */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            13.3 License Compliance and Attribution
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Where required by license terms:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Attribution is provided within design files, documentation, or platform acknowledgements
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Assets are not redistributed outside the scope permitted by their licenses
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Assets are not represented as proprietary works of NAF
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            NAF periodically reviews asset usage to ensure ongoing compliance with applicable open-source and free-license requirements.
          </Typography>
        </Box>

        {/* 13.4 No Paid or Restricted Asset Usage */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            13.4 No Paid or Restricted Asset Usage
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF confirms that:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              No paid asset accounts are used for icons or media
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              No premium or restricted-license files are incorporated
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              No user-generated content is sourced from these platforms
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            All asset usage aligns with principles of transparency, legal compliance, and ethical design sourcing.
          </Typography>
        </Box>
      </Box>

      {/* 14. International Data Transfers */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          14. International Data Transfers
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          Some third-party providers may process data outside the EU.
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          Where applicable:
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Standard Contractual Clauses (SCCs) are used
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Additional technical safeguards are applied
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
          Legal basis:
        </Typography>
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
          Articles 44–49 GDPR
        </Typography>
      </Box>

      {/* 15. Changes to Third-Party Integrations */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          15. Changes to Third-Party Integrations
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          NAF may add, remove, or replace third-party integrations to:
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Improve security
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Enhance performance
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            Comply with legal obligations
          </Typography>
        </Box>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
          Material changes will be reflected in this document.
        </Typography>
      </Box>

      {/* 16. Document Control */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          16. Document Control
        </Typography>

        <Box component="ul" sx={{ 
          pl: 4, 
          mb: 3,
          '& li': {
            marginBottom: 0.5
          }
        }}>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Document Name:
            </Typography>{' '}
            DOCUMENT 3 — Third-Party Integrations
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Applies to:
            </Typography>{' '}
            Vendinaf Website, NAF Cloud System, NAF Mobile App
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Version:
            </Typography>{' '}
            1.0
          </Typography>
          <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Owner:
            </Typography>{' '}
            New Age of Food UG (haftungsbeschränkt)
          </Typography>
        </Box>
      </Box>

      {/* 17. NAF Mobile App — Third-Party Integrations and Dependencies */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          17. NAF Mobile App — Third-Party Integrations and Dependencies
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          This section describes the third-party frameworks, libraries, native dependencies, and external services used specifically by the NAF Mobile App (Android and iOS).
        </Typography>

        {/* 17.1 Core Framework and Runtime Environment */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            17.1 Core Framework and Runtime Environment
          </Typography>

          {/* 17.1.1 Primary Framework */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.1.1 Primary Framework
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              The NAF Mobile App is developed using Flutter, a cross-platform mobile application framework provided by Google.
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Framework:
                </Typography>{' '}
                Flutter
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  SDK Version:
                </Typography>{' '}
                &gt;= 3.35.0
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Source:
                </Typography>{' '}
                https://flutter.dev
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              Flutter enables a single shared codebase for Android and iOS while maintaining native performance and platform-specific behavior.
            </Typography>
          </Box>

          {/* 17.1.2 Programming Language */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.1.2 Programming Language
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Language:
                </Typography>{' '}
                Dart
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  SDK Version:
                </Typography>{' '}
                &gt;= 3.9.0 and &lt; 4.0.0
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Source:
                </Typography>{' '}
                https://dart.dev
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              Dart is used exclusively for application logic, UI rendering, and state management.
            </Typography>
          </Box>

          {/* 17.1.3 Platform Support */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.1.3 Platform Support
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              The NAF Mobile App supports:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Android -
                </Typography>{' '}
                Minimum SDK: Flutter default - Target SDK: 36 - Compile SDK: 36
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  iOS -
                </Typography>{' '}
                Minimum supported version: iOS 14.0
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* 17.2 Direct Dependencies (Production) */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            17.2 Direct Dependencies (Production)
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            The following third-party packages are included in the production build of the Mobile App. All packages are sourced from pub.dev unless otherwise stated.
          </Typography>

          {/* 17.2.1 State Management */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.2.1 State Management
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                • provider
              </Box>{' '}
              (version ^6.0.5, actual: 6.1.5+1)
            </Typography>
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              Used for application-wide state management and dependency injection.
            </Typography>
          </Box>

          {/* 17.2.2 Networking and HTTP Communication */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.2.2 Networking and HTTP Communication
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                • http
              </Box>{' '}
              (version ^1.1.0, actual: 1.6.0)
            </Typography>
            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              Used for secure communication with the NAF Cloud System API, including authentication, reservations, wallet operations, and data retrieval.
            </Typography>
          </Box>

          {/* 17.2.3 Localization and Internationalization */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.2.3 Localization and Internationalization
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • flutter_localizations (Flutter SDK)
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • intl (version ^0.20.2)
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              Used to support multilingual content, regional formatting, and locale-aware UI behavior.
            </Typography>
          </Box>

          {/* 17.2.4 Location Services */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.2.4 Location Services
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                • geolocator
              </Box>{' '}
              (version ^10.1.0, actual: 10.1.1)
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Used to access device location <Box component="span" sx={{ fontWeight: 700 }}>only while the App is in the foreground</Box>, in order to:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Display nearby vending machines
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Sort machines by distance
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              Location access is governed by OS-level permissions and user consent.
            </Typography>
          </Box>

          {/* 17.2.5 Permissions Management */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.2.5 Permissions Management
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                • permission_handler
              </Box>{' '}
              (version ^11.0.1, actual: 11.4.0)
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Used to request and manage runtime permissions such as:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Location access
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Camera access
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              Permissions are requested contextually and only when required for a specific feature.
            </Typography>
          </Box>

          {/* 17.2.6 UI, Media, and Image Handling */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.2.6 UI, Media, and Image Handling
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>lottie</Box> (version ^1.4.3)
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>cached_network_image</Box> (version ^3.3.0, actual: 3.4.1)
                <Box component="ul" sx={{ pl: 4, mt: 0.5 }}>
                  <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body2">
                    - Dependencies:
                  </Typography>
                  <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ pl: 4 }}>
                    • flutter_cache_manager (3.4.1)
                  </Typography>
                  <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ pl: 4 }}>
                    • octo_image (2.1.0)
                  </Typography>
                </Box>
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Used for:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Animated UI elements
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Efficient image loading
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Caching of remote assets
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              These libraries do not independently transmit personal data.
            </Typography>
          </Box>

          {/* 17.2.7 Device Features and System Integration */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.2.7 Device Features and System Integration
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>mobile_scanner</Box> (version ^5.2.3)
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  Used for QR code scanning during vending machine pickup.
                </Typography>
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>url_launcher</Box> (version ^6.2.1, actual: 6.3.2)
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  Used to open external links (e.g., Google Maps, Stripe checkout) in the device browser or native apps.
                </Typography>
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>webview_flutter</Box> (version ^4.4.2, actual: 4.13.0)
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  Used to display secure web-based content such as payment checkout flows.
                </Typography>
              </Typography>
            </Box>
          </Box>

          {/* 17.2.8 Local Storage */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.2.8 Local Storage
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              <Box component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                • shared_preferences
              </Box>{' '}
              (version ^2.2.0, actual: 2.5.3)
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Used to store non-sensitive local preferences such as:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Language selection
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                UI settings
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Feature toggles
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              Sensitive data such as credentials or payment details are not stored using this mechanism.
            </Typography>
          </Box>

          {/* 17.3 Development Dependencies */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.3 Development Dependencies
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              The following dependencies are used exclusively during development and are not included in production builds:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • flutter_test (Flutter SDK)
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • flutter_lints (version ^1.0.0)
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                • flutter_launcher_icons (version ^0.9.2)
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              These tools support testing, code quality enforcement, and application branding.
            </Typography>
          </Box>
        </Box>

        {/* 17.4 Android Native Dependencies */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            17.4 Android Native Dependencies
          </Typography>

          {/* 17.4.1 Build and Tooling */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.4.1 Build and Tooling
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Android Gradle Plugin:
                </Typography>{' '}
                8.6.0
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Gradle:
                </Typography>{' '}
                (via gradle-wrapper)
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Kotlin:
                </Typography>{' '}
                2.1.0
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Java Version:
                </Typography>{' '}
                17
              </Typography>
            </Box>
          </Box>

          {/* 17.4.2 Android SDK Configuration */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.4.2 Android SDK Configuration
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  compileSdkVersion:
                </Typography>{' '}
                36
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  targetSdkVersion:
                </Typography>{' '}
                36
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  buildToolsVersion:
                </Typography>{' '}
                36.1.0
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  NDK Version:
                </Typography>{' '}
                26.1.10909125
              </Typography>
            </Box>
          </Box>

          {/* 17.4.3 Android Permissions */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.4.3 Android Permissions
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              The Android app declares the following permissions:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  android.permission.INTERNET
                </Typography>
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  Required for network communication.
                </Typography>
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  android.permission.ACCESS_FINE_LOCATION
                </Typography>
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  Required for precise location-based machine discovery.
                </Typography>
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  android.permission.ACCESS_COARSE_LOCATION
                </Typography>
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  Required for approximate location.
                </Typography>
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  android.permission.CAMERA
                </Typography>
                <Typography className='bodyRegularText3 shantellSansFont' variant="body2" sx={{ ml: 2 }}>
                  Required for QR code scanning during item pickup.
                </Typography>
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              Permissions are requested dynamically and only when the corresponding feature is used.
            </Typography>
          </Box>
        </Box>

        {/* 17.5 iOS Native Dependencies */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            17.5 iOS Native Dependencies
          </Typography>

          {/* 17.5.1 Build and Tooling */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.5.1 Build and Tooling
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                Xcode
              </Typography>
            </Typography>
          </Box>

          {/* 17.5.2 iOS Platform Requirements */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.5.2 iOS Platform Requirements
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                Minimum supported iOS version:
              </Typography>{' '}
              14.0
            </Typography>
          </Box>
        </Box>

        {/* 17.6 Third-Party Services and APIs */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            17.6 Third-Party Services and APIs
          </Typography>

          {/* 17.6.1 Backend API - NAF Cloud System */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.6.1 Backend API - NAF Cloud System
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              The Mobile App communicates with the NAF Cloud System API for:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                User authentication
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Email verification
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                MPIN recovery
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Wallet management
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Payment processing
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Machine reservations
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Reservation validation and pickup confirmation
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              This API is operated and controlled exclusively by NAF.
            </Typography>
          </Box>

          {/* 17.6.2 Payment Processing — Stripe */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.6.2 Payment Processing — Stripe
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Stripe is used for:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Wallet top-ups
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Card-based payments
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Key details:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Minimum payment amount:
                </Typography>{' '}
                €1.00
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Integration method:
                </Typography>{' '}
                Secure WebView checkout
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Source:
                </Typography>{' '}
                https://stripe.com
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Privacy Policy:
                </Typography>{' '}
                https://stripe.com/privacy
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              NAF does not store card details.
            </Typography>
          </Box>

          {/* 17.6.3 Location and Maps — Google Maps */}
          <Box sx={{ mb: 3 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.6.3 Location and Maps — Google Maps
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Google Maps is used for:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Navigation support
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Viewing machine locations
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Integration is performed via url_launcher, opening the external Google Maps app or browser.
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Source:
                </Typography>{' '}
                https://maps.google.com
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
                  Privacy Policy:
                </Typography>{' '}
                https://policies.google.com/privacy
              </Typography>
            </Box>
          </Box>

          {/* 17.7 Open-Source Licenses */}
          <Box sx={{ mb: 4 }}>
            <Typography 
              className='headings-h5' 
              variant="subtitle1" 
              gutterBottom
              sx={{ 
                color: '#fcfcfc',
                fontWeight: 600,
                mb: 1
              }}
            >
              17.7 Open-Source Licenses
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Most Flutter and Dart packages used by the Mobile App are licensed under:
            </Typography>

            <Box component="ul" sx={{ 
              pl: 4, 
              mb: 2,
              '& li': {
                marginBottom: 0.5
              }
            }}>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                BSD-style licenses
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                MIT License
              </Typography>
              <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
                Apache License 2.0
              </Typography>
            </Box>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
              Individual license details can be reviewed at: https://pub.dev/packages[/package-name]
            </Typography>

            <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
              NAF complies with all applicable open-source license requirements.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* APPENDIX A — Credits and Acknowledgements */}
      <Box my={5}>
        <Typography 
          className='headings-h4' 
          variant="h5" 
          sx={{ 
            color: '#fcfcfc',
            fontWeight: 600,
            mb: 2
          }}
        >
          APPENDIX A — Credits and Acknowledgements
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          This appendix provides formal acknowledgements for third-party platforms, tools, libraries, and asset providers whose resources have contributed to the development, design, and operation of NAF platforms.
        </Typography>

        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          NAF acknowledges and respects the work of open-source contributors, free-license creators, and community-driven platforms.
        </Typography>

        {/* A.1 Software Frameworks and Libraries */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            A.1 Software Frameworks and Libraries
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF platforms make use of various open-source software frameworks and libraries, including but not limited to frontend UI libraries, backend frameworks, animation engines, internationalisation tools, and infrastructure components.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            These tools are used in accordance with their respective open-source licenses (such as MIT, Apache 2.0, BSD, or similar permissive licenses).
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Where required, license texts and notices are retained within internal repositories or build artifacts.
          </Typography>
        </Box>

        {/* A.2 Icon and UI Asset Credits */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            A.2 Icon and UI Asset Credits
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Icons and UI-related visual assets used across the Vendinaf Website, NAF Cloud System, and NAF Mobile App are sourced from:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • The Noun Project
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Iconify
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Figma Community
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            These assets are selected exclusively from:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Free-to-use collections
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Open-license or community-shared resources
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF does not use paid subscriptions or restricted-license icon sets from these platforms.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Where attribution is required by the license terms, appropriate credit is provided within design documentation or acknowledgements.
          </Typography>
        </Box>

        {/* A.3 Images, Videos, Illustrations, and Media */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            A.3 Images, Videos, Illustrations, and Media
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Images, videos, illustrations, SVGs, and other media assets used across NAF platforms are sourced from:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Freepik
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Unsplash
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              • Pexels
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            All media assets are:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Free to use under applicable license terms
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Used for illustrative, informational, or UI purposes
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Not associated with paid, premium, or restricted accounts
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            NAF does not upload user-generated content to these platforms and does not share user personal data with these asset providers.
          </Typography>
        </Box>

        {/* A.4 Design Inspiration and Community Resources */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            A.4 Design Inspiration and Community Resources
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Certain UI patterns, layout concepts, and interaction ideas have been inspired by publicly shared resources available via the <Box component="span" sx={{ fontWeight: 700 }}>Figma Community</Box>.
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Such inspirations are:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Used as reference only
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Adapted and implemented independently
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Not copied verbatim from proprietary or restricted designs
            </Typography>
          </Box>
        </Box>

        {/* A.5 Third-Party Service Providers */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            A.5 Third-Party Service Providers
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF acknowledges the role of third-party infrastructure and service providers that enable platform functionality, including but not limited to:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Cloud hosting and infrastructure providers
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Payment processors
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Email and communication services
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Mapping and geolocation providers
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            These providers are documented in detail in the <Box component="span" sx={{ fontWeight: 700 }}>Third-Party Integrations</Box> sections of this document.
          </Typography>
        </Box>

        {/* A.6 No Endorsement or Partnership Implied */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            A.6 No Endorsement or Partnership Implied
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            The use of third-party tools, libraries, or assets does not imply:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Endorsement by the respective providers
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Partnership, sponsorship, or affiliation
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Ownership of third-party trademarks or brands
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            All trademarks, logos, and brand names remain the property of their respective owners.
          </Typography>
        </Box>

        {/* A.7 Ongoing Review and Compliance */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            className='headings-h5' 
            variant="h6" 
            gutterBottom
            sx={{ 
              color: '#fcfcfc',
              fontWeight: 600,
              mb: 2
            }}
          >
            A.7 Ongoing Review and Compliance
          </Typography>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF periodically reviews:
          </Typography>

          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Third-party dependencies
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Asset licenses
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Attribution requirements
            </Typography>
          </Box>

          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            This ensures continued compliance with licensing terms and evolving legal standards.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ThirdPartyPage;