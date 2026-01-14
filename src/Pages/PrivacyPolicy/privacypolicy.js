import React, { useEffect } from 'react';
import { Box, Typography,Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow, } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "./privacypolicy.css";

import ThirdPartyPage from './thirdparty'
const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.title = `NAF Vending -${t('titles.about')}`; // Set tab title

  }, []);
  return (
    <Box sx={{ color: '#FCFCFC', marginLeft: "50px", marginRight: "50px", paddingTop: "150px" }}>
      {/* Header */}
      <Typography className='headings-h1' variant="h3" gutterBottom>
        {t('privacypolicy.privacyPolicy')}
      </Typography>

{/* Section 1 */}
     
<Box my={5}>
  <Typography className='headings-h4' variant="h5" gutterBottom>
    {t('privacypolicy.introductionTitle')}
  </Typography>
  
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    New Age of Food UG (haftungsbeschränkt) ("NAF", "we", "us", "our") is committed to protecting the privacy, confidentiality, and security of personal data processed through its digital platforms.
  </Typography>
  
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    This Privacy Policy explains how personal data is collected, processed, stored, shared, and protected when you use:
  </Typography>
  
  <Box sx={{ 
    pl: 3, 
    mb: 2,
    '& > div': {
      display: 'flex',
      alignItems: 'flex-start',
      marginBottom: 1
    }
  }}>
    <Box>
      <Typography component="span" sx={{ mr: 1, fontWeight: 600 }}>-</Typography>
      <Typography component="span" className='bodyRegularText3 shantellSansFont' variant="body1">
        <Box component="span" sx={{ fontWeight: 600 }}>the Vendinaf Website,</Box>
      </Typography>
    </Box>
    <Box>
      <Typography component="span" sx={{ mr: 1, fontWeight: 600 }}>-</Typography>
      <Typography component="span" className='bodyRegularText3 shantellSansFont' variant="body1">
        <Box component="span" sx={{ fontWeight: 600 }}>the NAF Cloud System, and</Box>
      </Typography>
    </Box>
    <Box>
      <Typography component="span" sx={{ mr: 1, fontWeight: 600 }}>-</Typography>
      <Typography component="span" className='bodyRegularText3 shantellSansFont' variant="body1">
        <Box component="span" sx={{ fontWeight: 600 }}>the NAF Mobile App.</Box>
      </Typography>
    </Box>
  </Box>
  
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
    This document applies uniformly to all platforms unless a platform-specific distinction is explicitly stated.
  </Typography>
</Box>


{/* Section 2 */}

      <Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      2.Scope and Interconnected Platforms
    </Typography>
  </Box>

  {/* Sub-heading */}
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
    2.1 Unified Platform Ecosystem
  </Typography>

  {/* First Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    The Vendinaf Website, NAF Cloud System, and NAF Mobile App operate as a <strong sx={{color:'#fcfcfc'}}>single integrated ecosystem</strong> supported by shared backend services, databases, authentication mechanisms, and security controls.
  </Typography>

  {/* Second Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    Personal data collected on one platform may be processed or referenced by another platform strictly for:
  </Typography>

  {/* Bullet List */}
  <Box component="ul" sx={{ 
    pl: 4, 
    mb: 2,
    '& li': {
      marginBottom: 1
    }
  }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      service delivery,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      security and fraud prevention,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      operational consistency,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      legal and regulatory compliance.
    </Typography>
  </Box>

  {/* Final Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
    Cross-platform access is governed by technical safeguards and role-based permissions.
  </Typography>
</Box>


      {/* Section 3 */}
      <Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      3.Definitions
    </Typography>
  </Box>

  {/* Introduction Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    For the purposes of this Privacy Policy:
  </Typography>

  {/* Definitions List */}
  <Box component="ul" sx={{ 
    pl: 4, 
    mb: 2,
    '& li': {
      marginBottom: 1.5
    }
  }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>Personal Data</Box> means any information relating to an identified or identifiable natural person.
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>Processing</Box> means any operation performed on personal data, including collection, storage, use, disclosure, or deletion.
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>User</Box> means any person accessing or using a NAF platform.
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>NAF Membership</Box> refers to a registered account enabling reservations, wallet usage, and transaction history.
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>NAF Wallet</Box> refers to a prepaid digital wallet linked to a NAF Membership.
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>Reservation</Box> means a paid hold of food items in a specific vending machine.
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>Controller</Box> refers to NAF — New Age of Food UG (haftungsbeschränkt).
    </Typography>
  </Box>

  {/* Final Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
    These definitions align with <Box component="span" sx={{ fontWeight: 600 }}>Article 4 GDPR</Box>.
  </Typography>
</Box>

{/* Section 4 */}
      <Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      4.Legal Bases for Processing
    </Typography>
  </Box>

  {/* Introduction Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    NAF processes personal data only where permitted under applicable data protection law, including:
  </Typography>

  {/* Legal Bases List */}
  <Box component="ul" sx={{ 
    pl: 4, 
    mb: 2,
    '& li': {
      marginBottom: 1
    }
  }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>Article 6(1)(a) GDPR</Box> — Consent
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>Article 6(1)(b) GDPR</Box> — Performance of a contract
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>Article 6(1)(c) GDPR</Box> — Compliance with a legal obligation
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      <Box component="span" sx={{ fontWeight: 600 }}>Article 6(1)(f) GDPR</Box> — Legitimate interests
    </Typography>
  </Box>

  {/* Final Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
    Each processing activity described below specifies its applicable legal basis.
  </Typography>
</Box>

      {/* Section 5 */}
     <Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     5. Vendinaf Website — Data Processing
    </Typography>
  </Box>

  {/*  5.1 Account and Contact Data*/}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 5.1 */}
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
      5.1 Account and Contact Data
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      When users create an account, contact NAF, subscribe to communications, or submit forms, the following data may be processed:
    </Typography>

    {/* Data List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Name
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Email address
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Phone number (if provided)
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Account credentials
      </Typography>
    </Box>

    {/* Purpose */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ fontWeight: 600, color: '#fcfcfc' }}>
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
        Account creation and management
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        User communication and support
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Service delivery
      </Typography>
    </Box>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600,color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
      Article 6(1)(b) GDPR
    </Typography>

    
  </Box>

  {/*5.2 Cookies and Website Analytics */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 5.2 */}
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
      5.2 Cookies and Website Analytics
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      The Vendinaf Website uses cookies and similar technologies to:
    </Typography>

    {/* Cookies Purpose List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        ensure technical functionality,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        analyze website usage,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        improve performance and content.
      </Typography>
    </Box>

    {/* Third-party tools */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Third-party tools may include Google Analytics, Google Tag Manager, Microsoft Clarity, and Ahrefs.
    </Typography>

    {/* Cookie consent */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      A cookie consent banner is displayed before non-essential cookies are loaded.
    </Typography>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600,color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
      Article 6(1)(a) GDPR
    </Typography>

  </Box>

  {/*5.3 Website Payments  */}
  <Box>
    {/* Sub-heading 5.3 */}
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
      5.3 Website Payments
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Payments made via the Vendinaf Website are processed exclusively through <Box component="span" sx={{ fontWeight: 600 }}>Stripe</Box>.
    </Typography>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      NAF does not store credit or debit card details. Only transaction identifiers and payment status are retained.
    </Typography>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600,color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Article 6(1)(b) GDPR
    </Typography>
  </Box>
</Box>

 {/* Section 6 */}
     <Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     6. NAF Cloud System — Data Processing
    </Typography>
  </Box>

  {/*  6.1 User Roles and Access Control  */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 6.1 */}
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
      6.1 User Roles and Access Control
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      The NAF Cloud System is accessed by:
    </Typography>

    {/* User Roles List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Super Admins
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Franchise Admins
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Employees
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Access is strictly role-based:
    </Typography>

    {/* Access Control List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Employees do not access sales, tax, or sensitive financial data
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Franchise Admins cannot create franchises or add new machines
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Super Admins retain full system access
      </Typography>
    </Box>
  </Box>

  {/* 6.2 Activity Logging */}
  <Box>
    {/* Sub-heading 6.2 */}
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
      6.2 Activity Logging
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      The Cloud System records:
    </Typography>

    {/* Records List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        user login history,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        actions performed (e.g. machine configuration, pricing changes).
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      The Cloud System does not record:
    </Typography>

    {/* Does Not Record List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        IP addresses,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        failed login attempts,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        audit trails for compliance purposes.
      </Typography>
    </Box>

    {/* Purpose */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ fontWeight: 600, color: "#fcfcfc" }}>
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
        platform security,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        accountability,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        operational stability.
      </Typography>
    </Box>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: "#fcfcfc" }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Article 6(1)(f) GDPR
    </Typography>
  </Box>
</Box>

  {/* Section 7 */}

     <Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     7. NAF Mobile App — Data Processing
    </Typography>
  </Box>

  {/*  7.1 Location Data  */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 7.1 */}
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
      7.1 Location Data
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      When users open the Home section, the App may request access to device location.
    </Typography>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:'#fcfcfc'}}>
      Location is:
    </Typography>

    {/* Location Characteristics List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        accessed only while the App is in use,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        never tracked in the background.
      </Typography>
    </Box>

    {/* Location Usage */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ fontWeight: 600,color:'#fcfcfc' }}>
      Location is used to:
    </Typography>
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        display nearby vending machines,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        sort machines by distance,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        improve usability.
      </Typography>
    </Box>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600,color:'#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
      Article 6(1)(a) GDPR<br />
      Article 6(1)(b) GDPR
    </Typography>

  
  </Box>

  {/*  7.2 Camera Access (Scan Feature) */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 7.2 */}
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
      7.2 Camera Access (Scan Feature)
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:'#fcfcfc'}}>
      Camera access is requested solely to:
    </Typography>

    {/* Camera Usage List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        scan QR codes on vending machines,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        verify machine identity during pickup.
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:'#fcfcfc'}}>
      The App does not capture photos or videos.
    </Typography>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600,color:'#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
      Article 6(1)(b) GDPR
    </Typography>

   
  </Box>

  {/* 7.3 Device Telemetry and Technical Records */}
  <Box>
    {/* Sub-heading 7.3 */}
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
      7.3 Device Telemetry and Technical Records
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:'#fcfcfc'}}>
      The App may collect:
    </Typography>

    {/* Data Collection List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        device model,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        operating system version,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        app version,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        connection status,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        interaction logs.
      </Typography>
    </Box>

    {/* Analytics Section */}
<Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:'#fcfcfc'}}>
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
        are disabled by default,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        are enabled only if explicitly activated by the user.
      </Typography>
    </Box>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600,color:'#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Article 6(1)(f) GDPR<br />
      Article 6(1)(a) GDPR (optional analytics)
    </Typography>
  </Box>
</Box>

 {/* Section 8 */}

 <Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     8. Reservations and Orders
    </Typography>
  </Box>

  {/* 8.1 Reservation Processing  */}
  <Box>
    {/* Sub-heading 8.1 */}
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
      8.1 Reservation Processing
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:"#fcfcfc"}}>
      When a user makes a reservation, NAF processes:
    </Typography>

    {/* Data Processing List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        selected machine,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        selected item(s),
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        reservation duration,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        payment confirmation,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        pickup confirmation.
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:"#fcfcfc"}}>
      Reservations:
    </Typography>

    {/* Reservation Rules List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        are created only after successful payment,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        are valid for a maximum of 7 days,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        expire on <Box component="span" sx={{ fontWeight: 600 }}>Sunday at 11:59 PM</Box> of the same week.
      </Typography>
    </Box>

    {/* Third Paragraph with bold text */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Expired reservations are automatically cancelled and are <Box component="span" sx={{ fontWeight: 600 }}>non-refundable</Box>.
    </Typography>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Article 6(1)(b) GDPR
    </Typography>
  </Box>
</Box>
    

 {/* Section 9 */}
     <Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      9.NAF Membership and Wallet
    </Typography>
  </Box>

  {/*  9.1 Membership Data  */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 9.1 */}
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
      9.1 Membership Data
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:'#fcfcfc'}}>
      NAF Membership data includes:
    </Typography>

    {/* Membership Data List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        account identifier,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        transaction history,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        reservation history,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        wallet balance.
      </Typography>
    </Box>
  </Box>

  {/* 9.2 Wallet Rules  */}
  <Box>
    {/* Sub-heading 9.2 */}
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
      9.2 Wallet Rules
    </Typography>

    {/* First Rule */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 1
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Minimum wallet top-up: €20 EUR
      </Typography>
    </Box>

    {/* Second Rule with sub-rules */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:'#fcfcfc'}}>
      Wallet funds:
    </Typography>
    
    <Box component="ul" sx={{ 
      pl: 8, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        are non-transferable,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        cannot be withdrawn as cash,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        can be used only within NAF platforms.
      </Typography>
    </Box>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Article 6(1)(b) GDPR
    </Typography>
  </Box>
</Box>

    {/*  10. Email Communications  */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
    10.Email Communications
    </Typography>
  </Box>

  {/* First Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:"#fcfcfc"}}>
    NAF sends:
  </Typography>

  {/* Email Types List */}
  <Box component="ul" sx={{ 
    pl: 4, 
    mb: 3,
    '& li': {
      marginBottom: 0.5
    }
  }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      transactional emails,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      account notifications,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      security alerts,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      marketing emails (opt-in only).
    </Typography>
  </Box>

  {/* Second Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    Marketing communications are sent only with explicit user consent.
  </Typography>

  {/* Legal Basis */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
    Legal basis:
  </Typography>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
    Article 6(1)(a) GDPR
  </Typography>
</Box>

{/* 11. Data Security  */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     11. Data Security
    </Typography>
  </Box>

  {/*  11.1 Technical and Organisational Measures*/}
  <Box>
    {/* Sub-heading 11.1 */}
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
      11.1 Technical and Organisational Measures
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:"#fcfcfc"}}>
      NAF applies appropriate security measures, including:
    </Typography>

    {/* Security Measures List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        encrypted communication (HTTPS/TLS),
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        role-based access control,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        secure authentication,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        system monitoring,
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        regular updates.
      </Typography>
    </Box>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600,color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Article 32 GDPR
    </Typography>
  </Box>
</Box>

{/* 12. Data Retention*/}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     12. Data Retention
    </Typography>
  </Box>

  {/* First Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:"#fcfcfc"}}>
    Personal data is retained only as long as necessary for:
  </Typography>

  {/* Retention Purposes List */}
  <Box component="ul" sx={{ 
    pl: 4, 
    mb: 3,
    '& li': {
      marginBottom: 0.5
    }
  }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      contractual obligations,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      legal requirements,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      legitimate operational needs.
    </Typography>
  </Box>

  {/* Final Sentence */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
    Retention periods vary by data category.
  </Typography>
</Box>

    {/*  13. International Data Transfers */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     13. International Data Transfers
    </Typography>
  </Box>

  {/* First Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    Primary data storage is located within the European Union.
  </Typography>

  {/* Second Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    Where third-party providers process data outside the EU, Standard Contractual Clauses (SCCs) and additional safeguards are applied.
  </Typography>

  {/* Legal Basis */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600 ,color:"#fcfcfc"}}>
    Legal basis:
  </Typography>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
    Articles 44-49 GDPR
  </Typography>
</Box>

{/*  14. Children's Privacy */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     14. Children's Privacy
    </Typography>
  </Box>

  {/* First Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    NAF platforms are not intended for children under the age of 13.
  </Typography>

  {/* Second Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
    NAF does not knowingly collect personal data from children under this age.
  </Typography>
</Box>


{/*  15. User Rights */}

<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     15. User Rights
    </Typography>
  </Box>

  {/* First Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{color:"#fcfcfc"}}>
    Users have the right to:
  </Typography>

  {/* User Rights List */}
  <Box component="ul" sx={{ 
    pl: 4, 
    mb: 3,
    '& li': {
      marginBottom: 0.5
    }
  }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      access personal data,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      correct inaccuracies,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      request erasure,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      restrict processing,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      receive data portability,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      object to processing,
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      withdraw consent.
    </Typography>
  </Box>
</Box>

{/* 16. Changes to This Policy  */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      16.Changes to This Policy
    </Typography>
  </Box>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
    This Privacy Policy may be updated to reflect legal, technical, or operational changes. Continued use indicates acceptance.
  </Typography>
</Box>

{/* 17. Data Controller and Contact*/}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
  
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     17. Data Controller and Contact
    </Typography>
  </Box>

  {/* Company Name */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    NAF — New Age of Food UG (haftungsbeschränkt)
  </Typography>

  {/* Address */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    Obere Straße 3, OT Halsbach<br />
    09599 Freiberg, Saxony, Germany
  </Typography>

  {/* Email */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
    Email: info@naf-halsbach.de
  </Typography>
</Box>

{/* ========== 18. Detailed Processing by Application Section ========== */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      18.Detailed Processing by Application Section
    </Typography>
  </Box>

  {/* 18.1 Home Section (Website & Mobile App)  */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 18.1 */}
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
      18.1 Home Section (Website & Mobile App)
    </Typography>

    {/*  18.1.1 Machine Discovery and Availability */}
    <Box sx={{ mb: 4 }}>
      {/* Sub-sub-heading 18.1.1 */}
      <Typography 
        className='headings-h5' 
        variant="subtitle1" 
        gutterBottom
        sx={{ 
          ml: 2,
          color: '#fcfcfc',
          fontWeight: 600,
          mb: 2
        }}
      >
        18.1.1 Machine Discovery and Availability
      </Typography>

      {/* First Paragraph */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
        When you access the Home section, the platform retrieves information about available vending machines, including machine ID, location, operational status, and live stock availability.
      </Typography>

      {/* Second Paragraph */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
        This processing may be linked to your user session to ensure that reservations and pickup actions are correctly assigned to your account. Machine data itself is generally non-personal but may be temporarily associated with reservation records.
      </Typography>

      {/* Purpose */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph sx={{ fontWeight: 600, color: '#fcfcfc' }}>
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
          Display available machines
        </Typography>
        <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
          Show real-time menu availability
        </Typography>
        <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
          Prevent overbooking or duplicate reservations
        </Typography>
      </Box>

      {/* Legal Basis */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
        Legal basis:
      </Typography>
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2, mb: 4 }}>
        Article 6(1)(b) GDPR (contract performance)<br />
        Article 6(1)(f) GDPR (legitimate interest in system reliability)
      </Typography>

      
    </Box>

    {/* 18.1.2 Location-Based Sorting (Mobile App)  */}
    <Box sx={{ mb: 4 }}>
      {/* Sub-sub-heading 18.1.2 */}
      <Typography 
        className='headings-h5' 
        variant="subtitle1" 
        gutterBottom
        sx={{ 
          ml: 2,
          color: '#fcfcfc',
          fontWeight: 600,
          mb: 2
        }}
      >
        18.1.2 Location-Based Sorting (Mobile App)
      </Typography>

      {/* First Paragraph */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
        If location permission is granted, the App processes approximate device location exclusively while the App is active in the foreground.
      </Typography>

      {/* Location Usage */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
        Location data is used to:
      </Typography>
      <Box component="ul" sx={{ 
        pl: 4, 
        mb: 3,
        '& li': {
          marginBottom: 0.5
        }
      }}>
        <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
          Sort machines by proximity
        </Typography>
        <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
          Improve navigation efficiency
        </Typography>
        <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
          Reduce user error when selecting a machine
        </Typography>
      </Box>

      {/* Third Paragraph */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
        Location data is not stored permanently and is not used for tracking or profiling.
      </Typography>

      {/* Legal Basis */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
        Legal basis:
      </Typography>
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
        Article 6(1)(a) GDPR (consent)<br />
        Article 6(1)(b) GDPR (functional necessity)
      </Typography>
    </Box>
  </Box>

  {/* 18.2 Menu and Item Display */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 18.2 */}
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
      18.2 Menu and Item Display
    </Typography>

    {/*  18.2.1 Menu Content */}
    <Box>
      {/* Sub-sub-heading 18.2.1 */}
      <Typography 
        className='headings-h5' 
        variant="subtitle1" 
        gutterBottom
        sx={{ 
          ml: 2,
          color: '#fcfcfc',
          fontWeight: 600,
          mb: 2
        }}
      >
        18.2.1 Menu Content
      </Typography>

      {/* First Paragraph */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
        Menu information displayed to users includes item names, descriptions, pricing, availability, and preparation requirements.
      </Typography>

      {/* Second Paragraph */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
        Menu content may be personalized based on:
      </Typography>

      {/* Personalization List */}
      <Box component="ul" sx={{ 
        pl: 4, 
        mb: 3,
        '& li': {
          marginBottom: 0.5
        }
      }}>
        <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
          Selected machine
        </Typography>
        <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
          Time-based availability
        </Typography>
        <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
          Reservation limits
        </Typography>
      </Box>

      {/* Third Paragraph */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
        No sensitive personal data is embedded in menu data.
      </Typography>

      {/* Legal Basis */}
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
        Legal basis:
      </Typography>
      <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
        Article 6(1)(b) GDPR
      </Typography>
    </Box>
  </Box>
</Box>

{/* 19. Reservation Lifecycle Processing */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      19.Reservation Lifecycle Processing
    </Typography>
  </Box>

  {/* 19.1 Reservation Creation */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 19.1 */}
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
      19.1 Reservation Creation
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      When a reservation is created, the following data points are processed:
    </Typography>

    {/* Data Points List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        User account identifier
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Machine identifier
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Item identifiers
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Payment reference
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Reservation start and expiry timestamps
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      This data is necessary to guarantee exclusive item availability during the reservation period.
    </Typography>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Article 6(1)(b) GDPR
    </Typography>

    
  </Box>

  {/*  19.2 Reservation Expiry and Release */}
  <Box>
    {/* Sub-heading 19.2 */}
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
      19.2 Reservation Expiry and Release
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      If a reservation expires:
    </Typography>

    {/* Expiry Actions List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        The reservation record is marked as expired
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        The item is automatically released back to machine inventory
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        No refund is triggered
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Expired reservation data may be retained for dispute resolution and accounting purposes.
    </Typography>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Article 6(1)(c) GDPR (legal obligation)<br />
      Article 6(1)(f) GDPR (legitimate interest)
    </Typography>
  </Box>
</Box>


{/* 20. Wallet and Financial Data Processing */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     20. Wallet and Financial Data Processing
    </Typography>
  </Box>
</Box>

{/* 20.1 Wallet Balance Management */}
<Box my={4} ml={3}>
  <Typography 
    className='headings-h5' 
    variant="h6" 
    sx={{ 
      color: '#fcfcfc',
      fontWeight: 600,
      mb: 1.5 
    }}
  >
    20.1 Wallet Balance Management
  </Typography>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    The NAF Wallet processes:
  </Typography>
  <Box component="ul" sx={{ pl: 4, mb: 2 }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Top-up amounts
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Deduction events
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Transaction timestamps
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Payment references
    </Typography>
  </Box>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    The minimum wallet top-up amount is 20 EUR. Wallet balances are prepaid credits and do not constitute stored monetary value under banking regulations.
  </Typography>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontStyle: 'italic' }}>
    Legal basis:<br />
    Article 6(1)(b) GDPR
  </Typography>
</Box>

{/* 20.2 Refund and Adjustment Records */}
<Box my={4} ml={3}>
  <Typography 
    className='headings-h5' 
    variant="h6" 
    sx={{ 
      color: '#fcfcfc',
      fontWeight: 600,
      mb: 1.5 
    }}
  >
    20.2 Refund and Adjustment Records
  </Typography>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    In cases of confirmed machine malfunction:
  </Typography>
  <Box component="ul" sx={{ pl: 4, mb: 2 }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Wallet credits may be adjusted
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Adjustment records are logged with reason codes
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Supporting machine telemetry may be linked
    </Typography>
  </Box>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
    Refund decisions are automated where possible and may be reviewed manually by authorized personnel.
  </Typography>
</Box>

{/* 21. Security Logging and Fraud Prevention */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      21.Security Logging and Fraud Prevention
    </Typography>
  </Box>
</Box>

{/* 21.1 Security Events */}
<Box my={4} ml={3}>
  <Typography 
    className='headings-h5' 
    variant="h6" 
    sx={{ 
      color: '#fcfcfc',
      fontWeight: 600,
      mb: 1.5 
    }}
  >
    21.1 Security Events
  </Typography>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    To protect platform integrity, NAF may process:
  </Typography>
  <Box component="ul" sx={{ pl: 4, mb: 2 }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Login timestamps
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Device identifiers
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Reservation anomalies
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Repeated failed actions (without storing failed login attempts)
    </Typography>
  </Box>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    This data is used exclusively for detecting abuse, fraud, or technical issues.
  </Typography>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontStyle: 'italic' }}>
    Legal basis:<br />
    Article 6(1)(f) GDPR
  </Typography>
</Box>



{/* 21.2 No Behavioral Profiling */}
<Box my={4} ml={3}>
  <Typography 
    className='headings-h5' 
    variant="h6" 
    sx={{ 
      color: '#fcfcfc',
      fontWeight: 600,
      mb: 1.5 
    }}
  >
    21.2 No Behavioral Profiling
  </Typography>
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    NAF does not:
  </Typography>
  <Box component="ul" sx={{ pl: 4, mb: 2 }}>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Perform behavioral profiling
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Create user scoring systems
    </Typography>
    <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
      Sell or trade personal data
    </Typography>
  </Box>
</Box>

{/*22. Data Access Within NAF  */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      22.Data Access Within NAF
    </Typography>
  </Box>


  {/* 22.1 Internal Access Controls */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 22.1 */}
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
      22.1 Internal Access Controls
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Personal data access within NAF is restricted by:
    </Typography>

    {/* Restrictions List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Role-based permissions
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Departmental separation
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Logging and review mechanisms
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Only authorized personnel may access personal data, and only for defined purposes.
    </Typography>

    
  </Box>
</Box>

{/*  23. Data Portability and Export */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     23. Data Portability and Export
    </Typography>
  </Box>

  {/* Content Section */}
  <Box>
    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Where technically feasible, users may request:
    </Typography>

    {/* Export Options List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Export of account data
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Export of transaction history
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Export of reservation records
      </Typography>
    </Box>
  </Box>
</Box>

{/*  24. Data Breach Handling  */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
      24.Data Breach Handling
    </Typography>
  </Box>

  {/* 24.1 Breach Detection and Response*/}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 24.1 */}
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
      24.1 Breach Detection and Response
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      NAF maintains internal procedures to:
    </Typography>

    {/* Procedures List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Detect data breaches
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Assess impact and risk
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Contain and remediate incidents
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Where legally required:
    </Typography>

    {/* Legal Requirements List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Supervisory authorities will be notified
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Affected users will be informed
      </Typography>
    </Box>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Articles 33 and 34 GDPR
    </Typography>
  </Box>
</Box>

{/*25. Automated Decision-Making  */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     25. Automated Decision-Making
    </Typography>
  </Box>

  {/* Content Section */}
  <Box>
    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      NAF uses limited automated processes for:
    </Typography>

    {/* Automated Processes List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Reservation confirmation
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Inventory locking
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Payment validation
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      No automated decision-making produces legal or similarly significant effects without human oversight.
    </Typography>

    {/* Legal Basis */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ fontWeight: 600, color: '#fcfcfc' }}>
      Legal basis:
    </Typography>
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ ml: 2 }}>
      Article 22 GDPR
    </Typography>
  </Box>
</Box>

{/* 26. Supervisory Authority */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     26. Supervisory Authority
    </Typography>
  </Box>

  {/* Content Section */}
  <Box>
    {/* Single Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
      Users have the right to lodge a complaint with a data protection supervisory authority in their country of residence or in Germany.
    </Typography>
  </Box>
</Box>
{/*  27. Final Provisions */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     27. Final Provisions
    </Typography>
  </Box>
</Box>

{/* 28. Data Categories and Retention Matrix */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     28. Data Categories and Retention Matrix
    </Typography>
  </Box>

  {/* Introduction Paragraph */}
  <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
    The following tables provide a structured overview of personal data categories processed by NAF, their purposes, legal bases, and retention periods.
  </Typography>

  {/*  28.1 Core Account and Identity Data  */}
  <Box sx={{ mb: 6, mt: 4 }}>
    {/* Sub-heading 28.1 */}
    <Typography 
      className='headings-h5' 
      variant="h6" 
      gutterBottom
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600,
        mb: 3
      }}
    >
      28.1 Core Account and Identity Data
    </Typography>

    {/* Table Container */}
    <Box sx={{ overflowX: 'auto' }}>
      <Table sx={{ 
        minWidth: 800,
        borderCollapse: 'collapse'
      }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#2a2a2a' }}>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Data Category
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Examples
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Platform(s)
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Purpose
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Legal Basis
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Retention
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Account Identifier Row */}
          <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Account Identifier
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              User ID, Membership ID
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Website, Cloud, App
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Account management
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Art. 6(1)(b) GDPR
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              While account active
            </TableCell>
          </TableRow>
          
          {/* Contact Information Row */}
          <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Contact Information
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Email address, phone number
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Website, App
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Communication & support access
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Art. 6(1)(b) GDPR
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Until account deletion
            </TableCell>
          </TableRow>
          
          {/* Authentication Data Row */}
          <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Authentication Data
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              MPIN, hashed credentials
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              All
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Secure access
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Art. 6(1)(f) GDPR
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              While account active
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  </Box>

  {/*  28.2 Transaction, Wallet, and Reservation Data  */}
  <Box sx={{ mb: 6 }}>
    {/* Sub-heading 28.2 */}
    <Typography 
      className='headings-h5' 
      variant="h6" 
      gutterBottom
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600,
        mb: 3
      }}
    >
      28.2 Transaction, Wallet, and Reservation Data
    </Typography>

    {/* Table Container */}
    <Box sx={{ overflowX: 'auto' }}>
      <Table sx={{ 
        minWidth: 800,
        borderCollapse: 'collapse'
      }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#2a2a2a' }}>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Data Category
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Examples
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Platform(s)
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Purpose
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Legal Basis
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Retention
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Payment References Row */}
          <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Payment References
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Stripe transaction IDs
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              All
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Payment verification
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Art. 6(1)(b) GDPR
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              As required by tax law
            </TableCell>
          </TableRow>
          
          {/* Wallet Balance Row */}
          <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Wallet Balance
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Credit amount
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              App, Cloud
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Prepaid services
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Art. 6(1)(b) GDPR
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              While wallet exists
            </TableCell>
          </TableRow>
          
          {/* Reservation Records Row */}
          <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Reservation Records
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Item, machine, expiry
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              App, Cloud
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Fulfillment & disputes
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Art. 6(1)(b) GDPR
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Up to 24 months
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  </Box>

  {/*  28.3 Technical and Usage Data */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 28.3 */}
    <Typography 
      className='headings-h5' 
      variant="h6" 
      gutterBottom
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600,
        mb: 3
      }}
    >
      28.3 Technical and Usage Data
    </Typography>

    {/* Table Container */}
    <Box sx={{ overflowX: 'auto' }}>
      <Table sx={{ 
        minWidth: 800,
        borderCollapse: 'collapse'
      }}>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#2a2a2a' }}>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Data Category
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Examples
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Platform(s)
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Purpose
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Legal Basis
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc', 
              fontWeight: 600,
              border: '1px solid #444'
            }}>
              Retention
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Device Data Row */}
          <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Device Data
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              OS version, app version
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              App
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Compatibility
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Art. 6(1)(f) GDPR
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              90 days
            </TableCell>
          </TableRow>
          
          {/* Usage Logs Row */}
          <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Usage Logs
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Screen views, actions
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              App, Website
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Performance
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Art. 6(1)(f) GDPR
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              90–180 days
            </TableCell>
          </TableRow>
          
          {/* Login History Row */}
          <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Login History
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Timestamped logins
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Cloud
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Security
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              Art. 6(1)(f) GDPR
            </TableCell>
            <TableCell sx={{ 
              color: '#fcfcfc',
              border: '1px solid #444'
            }}>
              180 days
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  </Box>
</Box>
{/*  29. Consent Management and User Controls */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     29. Consent Management and User Controls
    </Typography>
  </Box>

  {/* 29.1 Consent Collection */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 29.1 */}
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
      29.1 Consent Collection
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Consent is collected explicitly where required, including:
    </Typography>

    {/* Consent Types List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Cookie consent on the website
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Location access in the mobile app
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Optional analytics and crash reporting
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Marketing communications
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Consent is:
    </Typography>

    {/* Consent Principles List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Freely given
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Specific
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Informed
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Revocable at any time
      </Typography>
    </Box>

    
  </Box>

  {/* 29.2 Withdrawal of Consent */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 29.2 */}
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
      29.2 Withdrawal of Consent
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Users may withdraw consent:
    </Typography>

    {/* Withdrawal Methods List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Via website cookie settings
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Via mobile app privacy settings
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        By contacting NAF support
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
      Withdrawal of consent does not affect the lawfulness of processing carried out prior to withdrawal.
    </Typography>
  </Box>

  {/* 30. Platform-Specific Processing Overview */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
  
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     30. Platform-Specific Processing Overview
    </Typography>
  </Box>

  {/*  30.1 Vendinar Website  */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 30.1 */}
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
      30.1 Vendinar Website
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Primary processing includes:
    </Typography>

    {/* Processing List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Informational browsing
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Account creation
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Cookie-based analytics
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Payment initiation
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      The website does not:
    </Typography>

    {/* Restrictions List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Perform background tracking
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Access device sensors
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Store payment card data
      </Typography>
    </Box>

    
  </Box>

  {/* 30.2 NAF Cloud System */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 30.2 */}
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
      30.2 NAF Cloud System
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      The Cloud System is an operational platform and processes:
    </Typography>

    {/* Processing List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Administrative user accounts
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Machine configuration data
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Pricing and availability settings
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Operational logs
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Access is restricted by:
    </Typography>

    {/* Restrictions List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        User role
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Organizational scope
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Explicit permissions
      </Typography>
    </Box>


  </Box>

  {/*  30.3 NAF Mobile App */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 30.3 */}
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
      30.3 NAF Mobile App
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      The Mobile App processes:
    </Typography>

    {/* Processing List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Foreground-only location data
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        QR-based pickup verification
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Wallet-based payments
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Reservation lifecycle data
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      The App does not:
    </Typography>

    {/* Restrictions List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Track users in the background
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Access contacts or media
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Enable analytics without opt-in
      </Typography>
    </Box>
  </Box>
</Box>

{/* 31. Data Sharing Scenarios (Illustrative) */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     31. Data Sharing Scenarios (Illustrative)
    </Typography>
  </Box>

  {/* Content Section */}
  <Box>
    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Personal data may be shared internally in the following scenarios:
    </Typography>

    {/* Sharing Scenarios List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Reservation issue investigation (App ↔ Cloud)
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Payment dispute resolution (Website/App ↔ Cloud)
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Customer support requests (All platforms)
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
      No personal data is shared externally except with approved processors under contract.
    </Typography>
  </Box>
</Box>
</Box>

{/* 32. Data Minimisation and Privacy by Design  */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     32. Data Minimisation and Privacy by Design
    </Typography>
  </Box>

  {/* Content Section */}
  <Box>
    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      NAF follows the principles of:
    </Typography>

    {/* Principles List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Data minimisation
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Purpose limitation
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Privacy by design
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Privacy by default
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      New features undergo internal review to ensure:
    </Typography>

    {/* Review Criteria List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Only required data is collected
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        User controls are available
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Legal bases are documented
      </Typography>
    </Box>
  </Box>
</Box>

{/* 33. Data Deletion and Anonymisation */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     33. Data Deletion and Anonymisation
    </Typography>
  </Box>

  {/* 33.1 Deletion Triggers */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 33.1 */}
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
      33.1 Deletion Triggers
    </Typography>

    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Personal data may be deleted upon:
    </Typography>

    {/* Deletion Triggers List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Account deletion request
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Expiry of retention period
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Withdrawal of consent (where applicable)
      </Typography>
    </Box>

  
  </Box>

  {/* 33.2 Anonymisation  */}
  <Box sx={{ mb: 4 }}>
    {/* Sub-heading 33.2 */}
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
      33.2 Anonymisation
    </Typography>

    {/* Single Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
      Where full deletion is not possible due to legal obligations, data may be anonymised to remove personal identifiers while retaining statistical value.
    </Typography>
  </Box>
</Box>

{/* 34. Complaints and Supervisory Authorities */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     34. Complaints and Supervisory Authorities
    </Typography>
  </Box>

  {/* Content Section */}
  <Box>
    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      Users may lodge complaints with:
    </Typography>

    {/* Complaints List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Their local supervisory authority
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        The competent authority in Germany
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
      NAF encourages users to contact support first to resolve concerns efficiently.
    </Typography>
  </Box>
</Box>

{/*  35. Policy Governance and Review  */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
   
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     35. Policy Governance and Review
    </Typography>
  </Box>

  {/* Content Section */}
  <Box>
    {/* First Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
      This Privacy Policy is reviewed periodically to ensure:
    </Typography>

    {/* Review Criteria List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 0.5
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Legal compliance
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Technical accuracy
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        Operational relevance
      </Typography>
    </Box>

    {/* Second Paragraph */}
    <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
      Material changes are communicated appropriately.
    </Typography>
  </Box>
</Box>

{/* 36. Document Control */}
<Box my={5}>
  {/* Main Heading with Number */}
  <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 2 }}>
    
    <Typography 
      className='headings-h4' 
      variant="h5" 
      sx={{ 
        color: '#fcfcfc',
        fontWeight: 600 
      }}
    >
     36. Document Control
    </Typography>
  </Box>

  {/* Content Section */}
  <Box>
    {/* Document Control List */}
    <Box component="ul" sx={{ 
      pl: 4, 
      mb: 3,
      '& li': {
        marginBottom: 1
      }
    }}>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        <Typography component="span" sx={{ fontWeight: 600 }}>
          Document Name:
        </Typography>{' '}
        DOCUMENT 1 — Privacy Policy
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        <Typography component="span" sx={{ fontWeight: 600 }}>
          Applies to:
        </Typography>{' '}
        Vendinaf Website, NAF Cloud System, NAF Mobile App
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        <Typography component="span" sx={{ fontWeight: 600 }}>
          Owner:
        </Typography>{' '}
        New Age of Food UG (haftungsbeschränkt)
      </Typography>
      <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
        <Typography component="span" sx={{ fontWeight: 600 }}>
          Version:
        </Typography>{' '}
        1.0
      </Typography>
    </Box>
  </Box>


</Box>
{/* Divider */}
  <Box sx={{ borderBottom: '1px solid #e0e0e0', my: 3 }} />
 <ThirdPartyPage/>
</Box>




  );
}
export default PrivacyPolicyPage;