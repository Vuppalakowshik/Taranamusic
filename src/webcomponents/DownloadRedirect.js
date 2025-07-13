import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const DownloadRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      window.location.href = 'https://play.google.com/store/apps/details?id=com.tarana.taranaMusicApp&pcampaignid=web_share';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      window.location.href = 'https://www.apple.com/app-store/';
    } else {
      // For desktop fallback — go to download page or show QR code
      navigate('/download');
    }
  }, [navigate]);

  return (
    <div style={{ color: 'white', textAlign: 'center', marginTop: '100px' }}>
      Redirecting to the right store...
    </div>
  );
};
