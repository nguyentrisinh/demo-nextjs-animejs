import React, { useEffect } from 'react';
import Link from 'next/link';
import anime from 'animejs';

const Logo = () => {
  useEffect(() => {
    const logoAnimation = anime.timeline({
      autoplay: true,
      delay: 200
    });
    logoAnimation
      .add({
        targets: '#logo',
        translateY: [-100, 0],
        opacity: [0, 1],
        elasticity: 600,
        duration: 1600
      })
      .add({
        targets: '#logo',
        rotate: [-360, 0],
        duration: 3000,
        elasticity: 600,
        offset: 100
      })
      .add({
        targets: '#logo-text',
        translateX: ['-100%', 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo',
        offset: 1000
      });
  }, []);
  return (
    <div className="site-logo">
      <Link href="/">
        <a href="/" className="flex items-center text-2xl font-bold text-indigo-400 no-underline hover:no-underline lg:text-4xl">
          <img id="logo" src="/logo.png" alt="logo" className="w-24 mr-2" />
          <div className="site-title">
            <div id="logo-text" className="site-title__text">
              Agile
              <span>Ops</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Logo;
