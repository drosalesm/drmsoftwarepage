import { Outlet, useLocation } from 'react-router-dom'; // 1. Import useLocation
import Header from './Header';
import Footer from './Footer';
import BackgroundAnimation from './BackgroundAnimation';
import { useTranslation } from '@/hooks/useTranslation';

const MainLayout = () => {
  const { isFading } = useTranslation();
  const location = useLocation(); // 2. Get the current page's location object

  // 3. Check if the current URL path starts with '/service/'. This is true only on the detail page.
  const isServiceDetailPage = location.pathname.startsWith('/service/');

  return (
    <>
      <BackgroundAnimation />
      <div className="page-content">
        {/* 4. Only render the Header if it is NOT a service detail page */}
        {!isServiceDetailPage && <Header />}
        
        <main className={isFading ? 'is-fading' : ''}>
          <Outlet />
        </main>

        {/* 5. Only render the Footer if it is NOT a service detail page */}
        {!isServiceDetailPage && <Footer />}
      </div>
    </>
  );
};

export default MainLayout;