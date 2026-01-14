import './App.css';
import React, { Suspense, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Navigate, useNavigate, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CookieConsent from "react-cookie-consent";

import './i18n';
import { NavigationProvider, useNavigation } from './Preload/NavigationProvider';
import PreloadLinkHandler from './Preload/PreloadLinkHandler';
import CustomCursor from './Componenets/NoiseEffect/CustomCursor';
import Preloader from './Preload/preload';
import ChatBot from './Componenets/ChatBot/ChatBot';
import ProtectedRoute from './Componenets/ProtectedRoute';

// Lazy-loaded pages
import Header from './Componenets/HeaderComponent/Header';
import Footer from './Componenets/FooterComponent/Footer';
import NoiseEffect from './Componenets/NoiseEffect/NoiseEffect';

// home page Who we serve paths
import HotelPage from './Pages/HomePage/whowepages/HotelPage';
import CampGrounds from './Pages/HomePage/whowepages/Campground';
import Schools from './Pages/HomePage/whowepages/Schools';
import FactoryPage from './Pages/HomePage/whowepages/Factorypage';
import ClinicsPage from './Pages/HomePage/whowepages/Clinicspage';
import CitiesPage from './Pages/HomePage/whowepages/CitiesPage';
import SeniorHomes from './Pages/HomePage/whowepages/SeniorHomes';
import Transpotationpage from './Pages/HomePage/whowepages/Transpotationpage';
import EventsPage from './Pages/HomePage/whowepages/EventsPage';
import OfficesPage from './Pages/HomePage/whowepages/OfficesPage';


//home page solution section subpages
import NafCloud from './Pages/SoftwarePage/SoftwarePage';
import NafAi from './Pages/HomePage/solutionpages/Solutions-NafAiPage';
import Telemetry  from './Pages/HomePage/solutionpages/Telemetry';
import Payment from './Pages/HomePage/solutionpages/Payments';
import ReuseReturn from './Pages/HomePage/solutionpages/ReuseReturnPage';
import CloudKitchen from './Pages/HomePage/solutionpages/CloudKitchen';
import SoftwareIntegrationPage from './Pages/HomePage/solutionpages/SoftwareIntegrationpage';


//automats product page
import GourmetVendingMachine from './Pages/ProductsPage/gourmet-vending-machine';
import SoftIceVendingMachine from './Pages/ProductsPage/soft-ice-vending-machine';
import PizzaVendingMachine from './Pages/ProductsPage/pizza-vending-machine';


// import SupporT from './Pages/Membership/Support';
import Support from './Pages/Membership/support';

const HomePage = React.lazy(() => import('./Pages/HomePage/HomePage'));
const MachinesPage = React.lazy(() => import('./Pages/MachinesPage/MachinesPage'));
const Menu = React.lazy(() => import('./Pages/Company/Menu/Menu'));
const SoftwarePage = React.lazy(() => import('./Pages/SoftwarePage/SoftwarePage'));
const AboutPage = React.lazy(() => import('./Pages/Company/AboutPage/AboutPage'));
const ContactPage = React.lazy(() => import('./Pages/ContactPage/ContactPage'));
const MantaincePage = React.lazy(() => import('./Pages/MachinesPage/MantaincePage/MantaincePage'));
const PrivacyPolicyPage = React.lazy(() => import('./Pages/PrivacyPolicy/privacypolicy'));
const Membership = React.lazy(() => import('./Pages/Membership/Membership'));
const Dashboard = React.lazy(() => import('./Pages/Membership/Dashboard'));
const PaymentPage = React.lazy(() => import('./Pages/Membership/PaymentPage'));
const ImprintsPage = React.lazy(() => import('./Pages/PrivacyPolicy/imprints'));

const preloadHeavyPages = () => {
  import('./Pages/MachinesPage/MachinesPage');      // Vending Machine
  import('./Pages/SoftwarePage/SoftwarePage');      // Software
  import('./Pages/Company/Menu/Menu');              // Food Menu
  import('./Pages/Company/AboutPage/AboutPage');    // Discover NAF
};

const LanguageWrapper = React.memo(() => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { i18n, t } = useTranslation();
  const location = useLocation();
  const { setLoading } = useNavigation();
  const preloaderRef = useRef();

  useEffect(() => {
    preloadHeavyPages(); // Preload heavy pages in background
  }, []);

  useEffect(() => {
    if (!preloaderRef.current) return;
    preloaderRef.current.style.opacity = "1";
    preloaderRef.current.style.pointerEvents = "all";
    setLoading(true);

    const timer = setTimeout(() => {
      preloaderRef.current.style.transition = "opacity 0.3s ease";
      preloaderRef.current.style.opacity = "0";
      preloaderRef.current.style.pointerEvents = "none";
      setLoading(false);
    }, 50);

    return () => clearTimeout(timer);
  }, [location, setLoading]);

  useEffect(() => {
    const supported = ['de', 'en', 'fr', 'es', 'pl'];
    i18n.changeLanguage(supported.includes(lang) ? lang : 'de');
  }, [lang, i18n]);

  return (
    <>
      <div ref={preloaderRef} className="preloader-wrapper">
        <Preloader />
      </div>

      {/* Header and NoiseEffect render immediately */}
      <Header />
      {/* <NoiseEffect /> */}

      {/* Cookie Consent */}
      <CookieConsent
        location="bottom"
        enableDeclineButton
        buttonText={t("Header.accept")}
        declineButtonText={t("Header.reject")}
        containerClasses="cookie-container"
        contentClasses="cookie-content"
        buttonClasses="cookie-accept-button"
        declineButtonClasses="cookie-decline-button"
      >
        <div className="cookie-text bodyMediumText2" style={{ color: '#FCFCFC' }}>
          {t("Header.cookieMessage")}&nbsp;
          <a onClick={() => navigate(`/${lang}/privacy-policy`)} style={{ color: '#FCFCFC' }} className="cookie-link bodyMediumText2">
            {t("Header.privacyPolicy")}
          </a>
        </div>
      </CookieConsent>

      {/* Main page content */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="hotelsresorts" element={<HotelPage />} />
        <Route path="campgrounds" element={<CampGrounds/>}/>
        <Route path="schools-universities" element={<Schools/>}/>
        <Route path="factories" element={<FactoryPage/>}/>
        <Route path="clinics" element={<ClinicsPage/>}/>
        <Route path="municipalities" element={<CitiesPage/>}/>
        <Route path="senior-homes" element={<SeniorHomes/>}/>
        <Route path="transportation" element={<Transpotationpage/>}/>
        <Route path='events-festivals' element={<EventsPage/>}/>
        <Route path='offices' element={<OfficesPage/>}/>


        <Route path="software" element={<NafCloud/>}/>
        <Route path="nafai" element={<NafAi/>}/>
        <Route path="telemetry-monitoring" element={<Telemetry />}/>
        <Route path="payment" element={<Payment />}/>
        <Route path="reuse-return" element={<ReuseReturn/>}/>
        <Route path="cloudKitchenPayments" element={<CloudKitchen/>}/>
        <Route path='software-integration' element={<SoftwareIntegrationPage/>}/>

        <Route path="machine" element={<MachinesPage />}/>
        <Route path="maintaince" element={<MantaincePage />} />
        <Route path="products/gourmet-machine" element={<GourmetVendingMachine />} />
        <Route path="products/ice-cream-machine" element={<SoftIceVendingMachine />} />
        <Route path="products/pizza-machine" element={<PizzaVendingMachine />} />
        <Route path="software" element={<SoftwarePage />} />
        <Route path="company/about" element={<AboutPage />} />
        <Route path="company/menu" element={<Menu />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="membership" element={<Membership />} />
         <Route path="support" element={<Support/>} /> 
        <Route path="/login" element={<Membership />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="/payment/:machineNumber/:amount" element={<PaymentPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="imprint" element={<ImprintsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>

      <ChatBot />
      <Footer />
    </>
  );
});

function App() {
  return (
    <NavigationProvider>
      <BrowserRouter>
        <CustomCursor />
        <PreloadLinkHandler>
          {/* Single Suspense boundary wrapping everything */}
          <Suspense fallback={<Preloader />}>
            <Routes>
              <Route path="/" element={<Navigate to="/de" />} />
              <Route path="/:lang/*" element={<LanguageWrapper />} />
            </Routes>
          </Suspense>
        </PreloadLinkHandler>
      </BrowserRouter>
    </NavigationProvider>
  );
}

export default App;