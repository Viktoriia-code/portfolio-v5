import React from 'react';
import PropTypes from 'prop-types';
import '../styles/global.css';
import Header from './Header';

const Layout = ({ children, location }) => {
  /*const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(isHome);

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll('a'));
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute('rel', 'noopener noreferrer');
          link.setAttribute('target', '_blank');
        }
      });
    }
  };

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

    handleExternalLinks();
  }, [isLoading]);*/

  return (
    <div id="root" className='bg-[#030014]'>
      <div className='flex mx-auto max-w-screen-xl px-5 py-10 md:px-12 md:py-16 lg:px-24 lg:py-0 lg:flex lg:justify-between lg:gap-20'>
        <Header />
        <main id="content" className='pt-14 lg:w-[56%] lg:py-24 flex flex-col gap-12 md:gap-16 lg:gap-22'>
          {children}
        </main>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

export default Layout;