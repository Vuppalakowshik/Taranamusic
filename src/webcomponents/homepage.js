import React from 'react';
import './HomePageContent.css';
import { Banner } from './Banner';
import mobilelogo from '../assets/images/TARANA 2.0.1 2.png';

export const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />

      <div className="main-section">
        <div className="content-section">
          <h2>For Artistes</h2>
          <p className="section-description">Connect. Collaborate. Create</p>
          <ul className="features-list">
            <li><strong>Build Your Community:</strong> Follow and be followed by fellow artists, producers, and labels.</li>
            <li><strong>Monetize Your Talent:</strong> Land paid gigs and monetize work via our marketplace.</li>
            <li><strong>Create Your Brand:</strong> Build an online profile, manage projects, gigs, and audience.</li>
            <li><strong>Collaborate Effortlessly:</strong> Find beatmakers, producers, sound engineers, and songwriters.</li>
            <li><strong>Showcase & Share:</strong> Upload tracks and media effortlessly.</li>
          </ul>
          <button className="primary-btn">Join as an Artiste</button>
        </div>

        <div className="image-section">
          <img src={mobilelogo} alt="Mobile App" className="mobile-image" />
        </div>
      </div>
    </div>
  );
};
