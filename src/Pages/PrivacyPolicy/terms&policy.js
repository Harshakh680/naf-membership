import React, { useEffect } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useTranslation } from 'react-i18next';
import "./privacypolicy.css";

const TermsOfUsePage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // document.title = `NAF Vending -${t('titles.about')}`; // Set tab title
  }, []);

  return (
    <Box sx={{ color: '#FCFCFC', marginLeft: "50px", marginRight: "50px", paddingTop: "150px" }}>
      {/* Header */}
      <Typography className='headings-h1' variant="h3" gutterBottom>
        TERMS OF USE
      </Typography>

      {/*  1. Introduction and Acceptance of Terms  */}
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
            1.Introduction and Acceptance of Terms
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            These Terms of Use ("Terms") govern access to and use of the digital platforms operated by NAF — New Age of Food UG (haftungsbeschränkt) ("NAF", "we", "us", "our"), including:
          </Typography>
      
          {/* Platform List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Vendinaf Website
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              NAF Cloud System
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              NAF Mobile App (Android & iOS)
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            By accessing or using any NAF platform, you confirm that you have read, understood, and agreed to be bound by these Terms, together with the Privacy Policy and any referenced policies.
          </Typography>
      
          {/* Third Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            If you do not agree with these Terms, you must not use the platforms.
          </Typography>
        </Box>
      </Box>
      
      {/*  2. Eligibility and Account Requirements */}
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
            2.Eligibility and Account Requirements
          </Typography>
        </Box>
      
        {/* 2.1 Minimum Age ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 2.1 */}
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
            2.1 Minimum Age
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF platforms are not intended for users under the age of{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              13
            </Typography>.
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            By using the platforms, you confirm that:
          </Typography>
      
          {/* Confirmation List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              You meet the minimum age requirement
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              You have the legal capacity to enter into a binding agreement
            </Typography>
          </Box>
      
        </Box>
      
        {/* ========== 2.2 Account Accuracy ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 2.2 */}
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
            2.2 Account Accuracy
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            You agree to:
          </Typography>
      
          {/* Agreement List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Provide accurate, complete, and up-to-date information
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Maintain the confidentiality of your login credentials
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Notify NAF immediately of any unauthorized account access
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            NAF is not responsible for losses resulting from inaccurate information or compromised credentials where reasonable safeguards were in place.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 3. Platform Overview and Permitted Use ========== */}
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
            3.Platform Overview and Permitted Use
          </Typography>
        </Box>
      
        {/* ========== 3.1 Vendinaf Website ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 3.1 */}
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
            3.1 Vendinaf Website
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            The Vendinaf Website allows users to:
          </Typography>
      
          {/* Website Features List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Access information about NAF services and machines
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Create and manage accounts
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Make payments
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Contact customer support
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            You agree to use the website only for lawful purposes.
          </Typography>
      
        
        </Box>
      
        {/* ========== 3.2 NAF Cloud System ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 3.2 */}
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
            3.2 NAF Cloud System
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            The NAF Cloud System is an administrative platform used by:
          </Typography>
      
          {/* Cloud System Users List */}
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
            Access is granted strictly based on assigned roles.
          </Typography>
      
          {/* Third Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Users of the Cloud System must not:
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
              Attempt to access restricted sections
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Modify data beyond their authorization
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Export or misuse system data
            </Typography>
          </Box>
      
        </Box>
      
        {/* ========== 3.3 NAF Mobile App ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 3.3 */}
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
            3.3 NAF Mobile App
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            The NAF Mobile App allows users to:
          </Typography>
      
          {/* App Features List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Discover vending machines
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              View live menus
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Reserve food items
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Make payments
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Use the NAF Wallet
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Scan machines for pickup
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Manage profile and settings
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Some features require an active{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              NAF Membership
            </Typography>{' '}
            and successful payment.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 4. NAF Membership ========== */}
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
           4. NAF Membership
          </Typography>
        </Box>
      
        {/* ========== 4.1 Membership Creation ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 4.1 */}
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
            4.1 Membership Creation
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            To access reservations, wallet features, and transaction history, users must create a NAF Membership account.
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Membership accounts are:
          </Typography>
      
          {/* Account Properties List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Personal
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Non-transferable
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Restricted to one individual
            </Typography>
          </Box>
      
        </Box>
      
        {/* ========== 4.2 Account Responsibility ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 4.2 */}
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
            4.2 Account Responsibility
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            You are responsible for:
          </Typography>
      
          {/* Responsibility List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              All actions performed under your account
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Ensuring your device and credentials are secure
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            NAF may suspend accounts where misuse or security risks are detected.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 5. Reservations ========== */}
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
            5.Reservations
          </Typography>
        </Box>
      
        {/* ========== 5.1 Reservation Conditions ========== */}
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
            5.1 Reservation Conditions
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Reservations allow users to hold specific food items in a selected vending machine.
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            A reservation:
          </Typography>
      
          {/* Reservation Properties List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Is created only after successful payment
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Is linked to a specific machine and item(s)
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Is time-limited
            </Typography>
          </Box>
  
        </Box>
      
        {/* ========== 5.2 Reservation Duration and Expiry ========== */}
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
            5.2 Reservation Duration and Expiry
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Maximum reservation duration:{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              7 days
            </Typography>
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            All reservations expire on{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Sunday at 11:59 PM
            </Typography>{' '}
            of the same calendar week
          </Typography>
      
          {/* Third Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Expired reservations:
          </Typography>
      
          {/* Expiry Consequences List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Are automatically cancelled
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Cannot be recovered
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Are non-refundable
            </Typography>
          </Box>
      
          
        </Box>
      
        {/* ========== 5.3 Pickup Responsibility ========== */}
        <Box sx={{ mb: 4 }}>
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
            5.3 Pickup Responsibility
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Users must:
          </Typography>
      
          {/* Pickup Requirements List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Visit the correct vending machine
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Pick up items before reservation expiry
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Use the Scan feature correctly
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Failure to pick up items in time does not entitle the user to a refund.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 6. NAF Wallet and Payments ========== */}
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
           6. NAF Wallet and Payments
          </Typography>
        </Box>
      
        {/* ========== 6.1 Wallet Overview ========== */}
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
            6.1 Wallet Overview
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            The NAF Wallet is a prepaid digital wallet linked to a NAF Membership.
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            It can be used across:
          </Typography>
      
          {/* Usage Platforms List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Vendinaf Website
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              NAF Cloud System
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              NAF Mobile App
            </Typography>
          </Box>
      
         
        </Box>
      
        {/* ========== 6.2 Minimum Top-Up and Usage Rules ========== */}
        <Box sx={{ mb: 4 }}>
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
            6.2 Minimum Top-Up and Usage Rules
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Minimum wallet top-up amount:{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              20 EUR
            </Typography>
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Wallet funds:
          </Typography>
      
          {/* Wallet Rules List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Are non-transferable
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Cannot be withdrawn as cash
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Can be used only for NAF services
            </Typography>
          </Box>
      
          {/* Third Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Wallet balances do not earn interest.
          </Typography>
      
       
        </Box>
      
        {/* ========== 6.3 Payment Processing ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 6.3 */}
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
            6.3 Payment Processing
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            All payments are processed exclusively via{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Stripe
            </Typography>.
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF:
          </Typography>
      
          {/* Payment Handling List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Does not store card details
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Stores only payment references and status
            </Typography>
          </Box>
      
        
        </Box>
      
        {/* ========== 6.4 Refund Policy ========== */}
        <Box sx={{ mb: 4 }}>
          {/* Sub-heading 6.4 */}
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
            6.4 Refund Policy
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Refunds are issued only if:
          </Typography>
      
          {/* Refund Conditions List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              A vending machine fails to dispense an item
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              The failure is confirmed by system or machine logs
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Refunds are not provided for:
          </Typography>
      
          {/* Non-Refundable Items List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Expired reservations
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Missed pickups
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              User error
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Change of mind
            </Typography>
          </Box>
        </Box>
      </Box>
      
      {/* ========== 7. Scan Feature ========== */}
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
            7.Scan Feature
          </Typography>
        </Box>
      
        {/* ========== 7.1 Purpose of Scan ========== */}
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
            7.1 Purpose of Scan
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            The Scan feature is used to:
          </Typography>
      
          {/* Purpose List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Verify the vending machine
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Authorize item pickup
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Prevent unauthorized access
            </Typography>
          </Box>
      
        </Box>
      
        {/* ========== 7.2 Prohibited Use ========== */}
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
            7.2 Prohibited Use
          </Typography>
      
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Users must not:
          </Typography>
      
          {/* Prohibited Actions List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Copy or manipulate QR codes
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Attempt unauthorized scans
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Use automated tools to bypass validation
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Violations may result in suspension or termination.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 8. Cloud System User Obligations ========== */}
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
            8.Cloud System User Obligations
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Cloud System users must:
          </Typography>
      
          {/* Obligations List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Respect role-based access limitations
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Maintain confidentiality
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Use the system only for authorized business purposes
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Unauthorized actions may result in immediate access revocation.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 9. Prohibited Conduct ========== */}
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
            9.Prohibited Conduct
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            Users must not:
          </Typography>
      
          {/* Prohibited Conduct List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Use platforms for unlawful purposes
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Interfere with system security
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Attempt to reverse-engineer software
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Exploit technical vulnerabilities
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Abuse reservation or refund mechanisms
            </Typography>
          </Box>
        </Box>
      </Box>
      
      {/* ========== 10. Suspension and Termination ========== */}
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
            10.Suspension and Termination
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF may suspend or terminate access if:
          </Typography>
      
          {/* Termination Conditions List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              These Terms are violated
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Fraud or abuse is suspected
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Platform security is threatened
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Legal obligations require it
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Termination may occur without prior notice in serious cases.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 11. Intellectual Property ========== */}
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
            11.Intellectual Property
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            All content, software, designs, logos, and systems are the exclusive property of NAF or its licensors.
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Users are granted a limited, non-exclusive, revocable license to use the platforms for their intended purpose only.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 12. Limitation of Liability ========== */}
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
           12. Limitation of Liability
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF is not liable for:
          </Typography>
      
          {/* Liability Exclusions List */}
          <Box component="ul" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 0.5
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              User errors
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Missed pickups
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Network or device failures
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Third-party outages
            </Typography>
          </Box>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            NAF remains responsible for verified system or machine failures directly attributable to its services.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 13. Force Majeure ========== */}
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
           13. Force Majeure
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* Single Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            NAF is not liable for delays or failures caused by events beyond reasonable control, including natural disasters, power outages, or network failures.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 14. Modifications to Services ========== */}
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
            14.Modifications to Services
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* Single Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            NAF may modify, suspend, or discontinue features to improve services or comply with legal requirements.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 15. Governing Law and Jurisdiction ========== */}
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
           15. Governing Law and Jurisdiction
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            These Terms are governed by the laws of{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Germany
            </Typography>.
          </Typography>
      
          {/* Second Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Where legally permitted, jurisdiction lies with the courts of{' '}
            <Typography component="span" sx={{ fontWeight: 700, color: '#fcfcfc' }}>
              Chemnitz, Germany
            </Typography>.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 16. Changes to These Terms ========== */}
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
           16. Changes to These Terms
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* Single Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            NAF may update these Terms from time to time. Continued use after changes constitutes acceptance.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 18. Appendices ========== */}
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
           18. Appendices
          </Typography>
        </Box>
      
        {/* ========== 18.1 Platform Feature Matrix ========== */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 18.1 */}
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
            18.1 Platform Feature Matrix
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
                    Feature / Capability
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Website
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Mobile App
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Cloud System
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Account Creation Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Account Creation
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* Membership Management Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Membership Management
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ (Admin view)
                  </TableCell>
                </TableRow>
                
                {/* Wallet Top-Up Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Wallet Top-Up
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* Reservations Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Reservations
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* QR Code Pickup Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    QR Code Pickup
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* Machine Discovery Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Machine Discovery
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                </TableRow>
                
                {/* Sales Reports Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Sales Reports
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ (Restricted)
                  </TableCell>
                </TableRow>
                
                {/* Machine Configuration Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Machine Configuration
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ (Restricted)
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
      
      {/* ========== 19. Cloud System Role and Permission Matrix ========== */}
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
           19. Cloud System Role and Permission Matrix
          </Typography>
        </Box>
      
        {/* Introduction Paragraph */}
        <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
          Access within the NAF Cloud System is governed by strict role-based permissions.
        </Typography>
      
        {/* ========== 19.1 User Role Permissions ========== */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 19.1 */}
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
            19.1 User Role Permissions
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
                    Action / Data Access
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Super Admin
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Franchise Admin
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444'
                  }}>
                    Employee
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Create Franchise Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Create Franchise
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* Add / Remove Machines Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Add / Remove Machines
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* Configure Pricing Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Configure Pricing
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* View Sales Data Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    View Sales Data
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* View Tax Reports Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    View Tax Reports
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* Edit Machine Content Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Edit Machine Content
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ (Limited)
                  </TableCell>
                </TableRow>
                
                {/* Access User Personal Data Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Access User Personal Data
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓ (Limited)
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Warning Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3 }}>
            Unauthorized attempts to access restricted features may result in suspension or termination.
          </Typography>
        </Box>
      </Box>
      
      {/* ========== 20. Reservation Rules Matrix ========== */}
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
           20. Reservation Rules Matrix
          </Typography>
        </Box>
      
        {/* 20.1 Reservation Conditions  */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 20.1 */}
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
            20.1 Reservation Conditions
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
                    border: '1px solid #444',
                    width: '35%'
                  }}>
                    Rule
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '65%'
                  }}>
                    Description
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Payment Requirement Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Payment Requirement
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Reservation is created only after successful payment
                  </TableCell>
                </TableRow>
                
                {/* Maximum Duration Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Maximum Duration
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    7 days
                  </TableCell>
                </TableRow>
                
                {/* Expiry Time Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Expiry Time
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Sunday at 11:59 PM (local machine time)
                  </TableCell>
                </TableRow>
                
                {/* Pickup Method Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Pickup Method
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    QR code scan at vending machine
                  </TableCell>
                </TableRow>
                
                {/* Refund Eligibility Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Refund Eligibility
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Only for verified machine failure
                  </TableCell>
                </TableRow>
                
                {/* Missed Pickup Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Missed Pickup
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    No refund
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Box>
      </Box>
      
      {/*  21. Wallet Rules and Financial Limitations*/}
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
            21.Wallet Rules and Financial Limitations
          </Typography>
        </Box>
      
        {/*  21.1 Wallet Usage Matrix  */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 21.1 */}
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
            21.1 Wallet Usage Matrix
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
                    border: '1px solid #444',
                    width: '35%'
                  }}>
                    Rule
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '65%'
                  }}>
                    Description
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Minimum Top-Up Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Minimum Top-Up
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    €20 EUR
                  </TableCell>
                </TableRow>
                
                {/* Maximum Balance Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Maximum Balance
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Subject to system limits
                  </TableCell>
                </TableRow>
                
                {/* Transferability Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Transferability
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Not transferable
                  </TableCell>
                </TableRow>
                
                {/* Cash Withdrawal Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Cash Withdrawal
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Not permitted
                  </TableCell>
                </TableRow>
                
                {/* Interest Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Interest
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Not accrued
                  </TableCell>
                </TableRow>
                
                {/* Usage Scope Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Usage Scope
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Only within NAF platforms
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Note Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3, fontStyle: 'italic' }}>
            Wallet balances represent prepaid service credit and do not constitute electronic money or a banking product.
          </Typography>
        </Box>
      </Box>
      
      {/*  22. Refund and Dispute Handling Matrix*/}
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
            22.Refund and Dispute Handling Matrix
          </Typography>
        </Box>
      
        {/*  22.1 Refund Eligibility */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 22.1 */}
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
            22.1 Refund Eligibility
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
                    border: '1px solid #444',
                    width: '70%'
                  }}>
                    Scenario
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '30%',
                    textAlign: 'center'
                  }}>
                    Refund Eligible
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Machine fails to dispense item Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Machine fails to dispense item
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✓
                  </TableCell>
                </TableRow>
                
                {/* Reservation expired Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Reservation expired
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* User arrives late Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    User arrives late
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* Incorrect machine selected Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Incorrect machine selected
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
                
                {/* Change of mind Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Change of mind
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444',
                    textAlign: 'center'
                  }}>
                    ✗
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Note Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3 }}>
            Refund decisions may be automated or manually reviewed based on machine telemetry and system logs.
          </Typography>
        </Box>
      </Box>
      
      {/* 23. Account Suspension and Termination Matrix  */}
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
            23. Account Suspension and Termination Matrix
          </Typography>
        </Box>
      
        {/*  23.1 Enforcement Actions */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 23.1 */}
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
            23.1 Enforcement Actions
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
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    Violation Type
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    Possible Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Repeated misuse of reservations Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Repeated misuse of reservations
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Temporary suspension
                  </TableCell>
                </TableRow>
                
                {/* QR code manipulation Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    QR code manipulation
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Immediate termination
                  </TableCell>
                </TableRow>
                
                {/* Unauthorized Cloud access Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Unauthorized Cloud access
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Access revocation
                  </TableCell>
                </TableRow>
                
                {/* Fraud or abuse Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Fraud or abuse
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Permanent ban
                  </TableCell>
                </TableRow>
                
                {/* Legal or regulatory breach Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Legal or regulatory breach
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Account termination
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Note Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3, fontStyle: 'italic' }}>
            NAF reserves the right to act without prior notice in cases involving security or legal risk.
          </Typography>
        </Box>
      </Box>
      
      {/*  24. Liability Allocation Matrix  */}
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
            24.Liability Allocation Matrix
          </Typography>
        </Box>
      
        {/*  24.1 Responsibility Breakdown */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 24.1 */}
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
            24.1 Responsibility Breakdown
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
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    Scenario
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    Responsibility
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Machine malfunction Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Machine malfunction
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    NAF
                  </TableCell>
                </TableRow>
                
                {/* Network outage Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Network outage
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Third-party provider
                  </TableCell>
                </TableRow>
                
                {/* User error Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    User error
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    User
                  </TableCell>
                </TableRow>
                
                {/* Device malfunction Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Device malfunction
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    User
                  </TableCell>
                </TableRow>
                
                {/* Incorrect pickup Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Incorrect pickup
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    User
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Note Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" sx={{ mt: 3 }}>
            NAF liability is limited to direct damages resulting from verified system or machine failures.
          </Typography>
        </Box>
      </Box>
      
      {/* 25. Service Availability and Maintenance */}
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
           25. Service Availability and Maintenance
          </Typography>
        </Box>
      
        {/*  25.1 Availability Commitments  */}
        <Box sx={{ mb: 6, mt: 4 }}>
          {/* Sub-heading 25.1 */}
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
            25.1 Availability Commitments
          </Typography>
      
          {/* Introduction Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            NAF strives to maintain high availability but does not guarantee uninterrupted service.
          </Typography>
      
          {/* Table Container */}
          <Box sx={{ overflowX: 'auto', mb: 3 }}>
            <Table sx={{ 
              minWidth: 800,
              borderCollapse: 'collapse'
            }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: '#2a2a2a' }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    Event
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc', 
                    fontWeight: 600,
                    border: '1px solid #444',
                    width: '50%'
                  }}>
                    Impact
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Scheduled maintenance Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Scheduled maintenance
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Temporary unavailability
                  </TableCell>
                </TableRow>
                
                {/* Emergency updates Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Emergency updates
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Immediate service interruption
                  </TableCell>
                </TableRow>
                
                {/* Third-party outage Row */}
                <TableRow sx={{ '&:hover': { backgroundColor: '#333' } }}>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Third-party outage
                  </TableCell>
                  <TableCell sx={{ 
                    color: '#fcfcfc',
                    border: '1px solid #444'
                  }}>
                    Partial or full downtime
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
      
          {/* Final Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1">
            Users acknowledge that service interruptions may occur.
          </Typography>
        </Box>
      </Box>
      
      {/* 26. Contractual Hierarchy */}
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
           26. Contractual Hierarchy
          </Typography>
        </Box>
      
        {/* Content Section */}
        <Box>
          {/* First Paragraph */}
          <Typography className='bodyRegularText3 shantellSansFont' variant="body1" paragraph>
            In the event of conflict:
          </Typography>
      
          {/* Hierarchy List */}
          <Box component="ol" sx={{ 
            pl: 4, 
            mb: 3,
            '& li': {
              marginBottom: 1
            }
          }}>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              These Terms of Use
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Privacy Policy
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Platform-specific notices
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              Support communications
            </Typography>
          </Box>
        </Box>
      </Box>
      
      {/*27. Document Control  */}
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
           27. Document Control
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
              DOCUMENT 2 — Terms of Use
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                Applies to:
              </Typography>{' '}
              Vendinaf Website, NAF Cloud System, NAF Mobile App
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                Version:
              </Typography>{' '}
              1.0
            </Typography>
            <Typography component="li" className='bodyRegularText3 shantellSansFont' variant="body1">
              <Typography component="span" sx={{ fontWeight: 600 }}>
                Owner:
              </Typography>{' '}
              New Age of Food UG (haftungsbeschränkt)
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TermsOfUsePage;