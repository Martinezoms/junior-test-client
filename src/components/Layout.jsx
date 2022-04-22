import { Outlet } from 'react-router-dom';
import { Footer } from './index';

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
