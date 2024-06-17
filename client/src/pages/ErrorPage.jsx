import { useRouteError } from "react-router-dom";
import taxblade from '../assets/taxblade.jpg'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div id="error-page">
       <button onClick={handleGoBack}>Go Back</button>
      <h1>Oops!</h1>
      <p>Sorry, there's a slight mishap in your adventure</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <img src={taxblade} alt="Error" />
    </div>
  );
}