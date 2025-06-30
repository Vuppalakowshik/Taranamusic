import React from 'react';
import './HomePageContent.css';
import { Banner } from './Banner';
import mobilelogo from '../assets/images/TARANA 2.0.1 2.png';

export const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <section className="artist-section">
        <div className="content-left">
          <h2 className="section-heading">For Artistes</h2>
          <p className="sub-heading">Connect. Collaborate. Create</p>
          <p className="main-description">
            Tarana empowers musicians at every level. Build your network and amplify your music with tools designed for creative professionals.
          </p>
          <ul className="feature-list">
  <li><span className="bullet"></span><strong>Build Your Community:</strong> Follow and be followed by fellow artists, producers, and global fans who share your passion.</li>
  <li><span className="bullet"></span><strong>Monetize Your Talent:</strong> Land paid gigs and freelance work through our marketplace. Offer lessons, session work, or merchandise.</li>
  <li><span className="bullet"></span><strong>Create Your Band:</strong> Form your band, build a shared profile, manage projects, assign roles, and grow together—all within one powerful platform.</li>
  <li><span className="bullet"></span><strong>Collaborate Effortlessly:</strong> Find bandmates, producers, or session players. Work together on projects in real time and turn ideas into songs.</li>
  <li><span className="bullet"></span><strong>Showcase & Share:</strong> Upload your tracks and videos effortlessly. Build your professional music portfolio and share your work with the world.</li>
</ul>

          <button className="primary-btn">Join as an Artiste</button>
          <p className="footer-note">Ready to rock your career?</p>
        </div>

        <div className="content-right">
          <img src={mobilelogo} alt="Tarana Mobile App" className="mobile-image" />
        </div>
      </section>
    </div>
  );
};
