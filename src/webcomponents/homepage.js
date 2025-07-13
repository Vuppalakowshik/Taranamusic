import React from 'react';
import Card from 'react-bootstrap/Card';
import './HomePageContent.css';
import { Banner } from './Banner';
import mobilelogo from '../assets/images/TARANA 2.0.1 2.png';
import organizaionlogo from '../assets/images/organisation.svg';
import forfans from '../assets/images/fan.svg';
import thub from '../assets/images/thub.svg';
import DPIT from '../assets/images/DPIT.png';
import microsoft from '../assets/images/microsoft.svg';
import { Footer } from './footer';

const features = [
  {
    title: 'All-in-One Platform',
    description: 'Social networking, portfolio showcase, collaboration, job marketplace, and event booking — all built for music.',
   background: 'linear-gradient(90deg, #E6543A 0%, #D389B8 50%)'

  },
  {
    title: 'A Global Music Network',
    description: 'Uniting artistes, organizations, collaborators, and fans into one seamless platform — connecting musicians worldwide.',
    background: 'linear-gradient(90deg, #2688C7 0%, #E6543A 100%)'


  },
  {
    title: 'Creative Freedom',
    description: 'Flexible tools let artists and organizations shape their own careers, on their own terms.',
   background: 'linear-gradient(90deg, #D389B8 0%, #2688C7 100%)'

  },
  {
    title: 'Emotional Connection',
    description: 'We believe music is about people. Tarana centers community where everyone shares the spotlight.',
    background: 'linear-gradient(90deg, #E6543A 0%, #D389B8 50%)'

  },
];

const innovation = [
  {

    image: thub,
    background: 'linear-gradient(90deg, #F66A6A 0%, #F6C26A 100%)'
  },
  {
    image: DPIT,
    background: 'linear-gradient(90deg, #2688C7 0%, #E6543A 100%)'
  },
  {
    image:microsoft,
    background: 'linear-gradient(90deg, #D891EC 0%, #2688C7 100%)'
  },
];





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

     
   <section className="organization-section">
  <div className="org-image">
    <img src={organizaionlogo} alt="Tarana Mobile App" />
  </div>

  <div className="org-content">
    <h2 className="for-organization-heading">For Organizations</h2>
    <p className="org-subheading">Discover, Manage, Grow</p>
    <p className="org-description">
      Whether you're a label, production house, studio, institution, or any other music organization, Tarana gives you a backstage pass to talent, tools, and technology.
    </p>
    <ul className="org-features">
      <li><span className="blue-bullet"></span><strong>Talent Discovery:</strong> Browse thousands of artist profiles...</li>
      <li><span className="blue-bullet"></span><strong>Post Gigs & Projects:</strong> Create events and collaborations...</li>
      <li><span className="blue-bullet"></span><strong>Roster Management:</strong> Manage all your artists in one place...</li>
      <li><span className="blue-bullet"></span><strong>Direct Collaboration:</strong> Communicate and negotiate directly...</li>
      <li><span className="blue-bullet"></span><strong>Brand Building:</strong> Promote your organization’s events...</li>
    </ul>
    <button className="secondary-button">Sign up for Organization</button>
    <p className="org-note">Ready to rock your career?</p>
  </div>
</section>


 <section className="artist-section">
        <div className="content-left">
          <h2 className="Fans-heading">For Fans & Listeners</h2>
          <p className="sub-heading">Discover, Support, CelebrateDiscover, Support, Celebrate</p>
          <p className="main-description">
Love music? Tarana is your personal concert hall and discovery engine. Tune in and engage with your favorite artists like never before.          </p>
          <ul className="feature-list">
  <li><span className="pink-bullet "></span><strong>Book Live Talent:</strong> Planning an event or party? Find and hire talented DJs, bands, and solo performers directly through Tarana's booking system..</li>
  <li><span className="pink-bullet "></span><strong>Dynamic Music Feed:</strong>A constantly updating stream of posts, artist updates, and exclusive content. So you never miss a beat.</li>
  <li><span className="pink-bullet "></span><strong>Curated Music: </strong> Personalized song and video mixes based on your listening habits, mood tags, and favorite genres.</li>
  <li><span className="pink-bullet "></span><strong>Follow & Support Artistes</strong> Get real-time updates on new releases, live streams, and events from the musicians you love. Cheer them on with messages and comments.</li>
</ul>

          <button className="third-btn">Start Exploring</button>
          <p className="footer-note">Ready to rock your career?</p>
        </div>

        <div className="content-right">
          <img src={forfans} alt="Tarana Mobile App" className="mobile-image" />
        </div>
      </section>

  <section className="why-tarana-section">
      <h2 className="section-title">Why <span><span className='Tarana-text'> Tarana</span></span> ?</h2>
      <p className="section-subtitle">Features & Impact that unite every part of the music ecosystem into one vibrant community</p>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="card-line" style={{ background: feature.background }}></div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>

<section className="why-tarana-section">
  <h2 className="section-title">Backed by the <span><span className='Tarana-text'>Best in Innovation</span></span></h2>
  <p style={{ marginBottom: '20px' ,fontFamily:'Clofie',fontSize:'20px'}}>Tarana is proudly supported by some of the world's leading startup enablers</p>
  <div className="fourth-grid">
    {innovation.map((feature, index) => (
      <div key={index} className="backendfeature-card">
        <div className="card-line" style={{ background: feature.background }}></div>
        <div className="image-wrapper">
          <img src={feature.image} alt="feature" className="feature-image" />
        </div>
      </div>
    ))}
  </div>
</section>

<Footer />



    </div>
  );
};
