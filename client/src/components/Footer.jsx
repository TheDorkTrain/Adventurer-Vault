import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate(); 

    return (
      <footer className="w-100 mt-auto p-4">
        <div className="container text-center mb-5"></div>
          {location.pathname !== '/' && (
          <h4>
            Made with {'MERN'}
            <span
              className="emoji"
              role="img"
              aria-label="sword"
              aria-hidden="false"
            >
              ⚔️
              </span>{' '}
          by team 4
        </h4>
        )}
    </footer>
  );
};


export default Footer;
