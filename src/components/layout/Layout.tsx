import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SplashCursor from '@/components/ui/SplashCursor';
import { useScrollTop } from '@/hooks/useScrollTop';

export default function Layout() {
  useScrollTop();

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={2}
        PRESSURE={0.1}
        CURL={3}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={10}
        SHADING
        RAINBOW_MODE={false}
        COLOR="#EC4899"
      />
      <Header />
      <main style={{ flex: 1, paddingTop: '60px' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
