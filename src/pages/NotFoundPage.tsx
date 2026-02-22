import React from "react";
import "../styles/NotFoundPage.scss";

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <h2 className="not-found-page__subtitle">Page Not Found</h2>
      <p className="not-found-page__message">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <a className="not-found-page__home-link" href="/">
        Go Home
      </a>
    </div>
  );
};

export default NotFoundPage;
