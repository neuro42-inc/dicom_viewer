import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function NotFound({
  message = 'The page you are looking for does not exist.',
  showGoBackButton = true,
}) {
  // const context = useAppContext();

  return (
    <div className={'not-found'}>
      <div>
        <h1>404</h1>
        <h4>{message}</h4>
        {/* {showGoBackButton && context.appConfig.showStudyList && (
          <h5>
            <Link to={'/'}>Go back to the Study List</Link>
          </h5>
        )} */}
      </div>
    </div>
  );
}
