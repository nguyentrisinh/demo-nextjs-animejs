import React, { useEffect } from 'react';
import anime from 'animejs';

const Svgillustration = () => {
  const createAnime = () => {
    const planesCard = anime.timeline({
      direction: 'forwards',
      loop: true,
    });
    planesCard
      .add({
        targets: '#card2 .card_text',
        scaleX: [0, 1],
        delay(target, index) {
          return index * 300;
        },
        easing: 'cubicBezier(0.17, 0.17, 0.35, 1.0)',
        duration: 300,
        offset: 0,
      })
      .add({
        targets: '#plane1',
        opacity: {
          value: [0, 1],
          duration: 100,
          delay: 84,
        },
        translateX: {
          value: ['-199', '888'],
        },
        translateY: {
          value: ['-36', '404'],
        },
        rotate: {
          value: -12,
        },
        scale: {
          value: 0,
          duration: 200,
          delay: 300,
        },
        easing: 'cubicBezier(0.17, 0.17, 0.79, 1.0)',
        duration: 541,
        offset: 250,
      })
      .add({
        targets: '#card1',
        opacity: 0,
        loop: true,
        easing: 'cubicBezier(0.68, 0.0, 0.33, 1.0)',
        duration: 750,
        offset: 708,
      })
      .add({
        targets: '#card3_bg-white',
        easing: 'cubicBezier(0.17, 0.11, 0.4, 1.26)',
        duration: 666,
        offset: 625,
        scale: [0, 1],
      })
      .add({
        targets: '#cards',
        easing: 'cubicBezier(0.68, 0.0, 0.33, 1.0)',
        duration: 750,
        offset: 708,
        translateY: ['-=257'],
      })
      .add({
        targets: '#card3_icon',
        translateX: ['+=35', 0],
        translateY: ['+=35', 0],
        scale: [0, 1],
        loop: true,
        easing: 'cubicBezier(0.41, 1.9, 0.59, 0.94)',
        duration: 708,
        offset: 780,
      })
      .add({
        targets: '#card3 .card_text',
        scaleX: [0, 1],
        delay(target, index) {
          return index * 300;
        },
        easing: 'cubicBezier(0.17, 0.17, 0.35, 1.0)',
        duration: 300,
        offset: 989,
      })
      .add({
        targets: '#plane2',
        opacity: {
          value: [0, 1],
          duration: 167,
          delay: 84,
        },
        scaleX: {
          value: -1,
          duration: 0,
        },
        translateX: {
          value: [-1620, -180],
        },
        translateY: {
          value: [-78, 320],
        },
        rotate: {
          value: -12,
          duration: 500,
          delay: 100,
        },
        scale: {
          value: 0,
          duration: 250,
          delay: 285,
        },
        easing: 'cubicBezier(0.17, 0.17, 0.79, 1.0)',
        duration: 600,
        offset: 1380,
      })
      .add({
        targets: '#card2',
        opacity: 0,
        loop: true,
        easing: 'cubicBezier(0.68, 0.0, 0.33, 1.0)',
        duration: 750,
        offset: 1875,
      })
      .add({
        targets: '#card4_bg-white',
        easing: 'cubicBezier(0.17, 0.11, 0.4, 1.26)',
        duration: 666,
        offset: 1793,
        scale: [0, 1],
      })
      .add({
        targets: '#cards',
        easing: 'cubicBezier(0.68, 0.0, 0.33, 1.0)',
        duration: 750,
        offset: 1875,
        translateY: ['-=257'],
      })
      .add({
        targets: '#card4_icon',
        translateX: ['+=35', 0],
        translateY: ['+=35', 0],
        scale: [0, 1],
        loop: true,
        easing: 'cubicBezier(0.41, 1.9, 0.59, 0.94)',
        duration: 708,
        offset: 1957,
      });
  };
  const fitElementToParent = (el, padding) => {
    const resize = (isFirst = false) => {
      const pad = padding || 0;
      const elOffsetWidth = el.clientWidth - pad;
      const parentOffsetWidth = 1200;
      const ratio = parentOffsetWidth / elOffsetWidth;
      const bgEl = document.querySelector('#bg');
      const cardWrapEl = document.querySelector('#cards-wrap');
      const exceptionElWidth = bgEl.getBoundingClientRect().width;
      let exceptionElRealWidth = exceptionElWidth * ratio;
      if (isFirst === true) {
        exceptionElRealWidth *= ratio;
      }
      el.setAttribute('viewBox', `0 0 2400 ${1132 * ratio}`);
      bgEl.setAttribute(
        'transform',
        `translate(${1200 - exceptionElRealWidth}, 123.000000) scale(${ratio})`
      );
      cardWrapEl.setAttribute(
        'transform',
        `translate(${1200 - exceptionElRealWidth}, 243.000000) scale(${ratio})`
      );
    };
    resize(true);
    window.addEventListener('resize', resize);
  };
  useEffect(() => {
    const logoAnimationEl = document.querySelector('#illustrantion');
    fitElementToParent(logoAnimationEl, 0);
    createAnime();
  }, []);
  return (
    <svg
      id="illustrantion"
      viewBox="0 0 2400 1132"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xlink="http://www.w3.org/1999/xlink"
    >
      <title>hello@zajno.com</title>
      <defs>
        <linearGradient
          x1="118.314446%"
          y1="48.8841826%"
          x2="-30.2984871%"
          y2="51.1919321%"
          id="linearGradient-1"
        >
          <stop stopColor="#7F9BFC" offset="0%" />
          <stop stopColor="#839FFC" stopOpacity="0.9563" offset="5.509039%" />
          <stop stopColor="#849FFC" stopOpacity="0.9533" offset="5.884359%" />
          <stop stopColor="#8AA4FC" stopOpacity="0.8154" offset="23.03%" />
          <stop stopColor="#9CB1FD" stopOpacity="0.6239" offset="46.86%" />
          <stop stopColor="#BAC7FD" stopOpacity="0.4019" offset="74.47%" />
          <stop stopColor="#D3DAFE" stopOpacity="0.2445" offset="94.06%" />
          <stop stopColor="#F0F0FF" stopOpacity="0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50.0334507%"
          y1="-143.800704%"
          x2="50.0334507%"
          y2="63.3151408%"
          id="linearGradient-2"
        >
          <stop stopColor="#FFF33B" stopOpacity="0" offset="0%" />
          <stop stopColor="#FFDE46" stopOpacity="0.1416" offset="15.24%" />
          <stop stopColor="#FFA764" stopOpacity="0.4337" offset="46.69%" />
          <stop stopColor="#FF916F" stopOpacity="0.5396" offset="58.08%" />
          <stop stopColor="#FF5782" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="49.8485923%"
          y1="72.7804172%"
          x2="49.8485923%"
          y2="-43.2541461%"
          id="linearGradient-3"
        >
          <stop stopColor="#F7CF83" offset="0%" />
          <stop stopColor="#FFFFFF" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50.0154912%"
          y1="-52.011784%"
          x2="50.0154912%"
          y2="71.9581815%"
          id="linearGradient-4"
        >
          <stop stopColor="#FDFDFE" offset="0%" />
          <stop stopColor="#86DD87" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50.0074976%"
          y1="99.049164%"
          x2="50.0074976%"
          y2="-16.925746%"
          id="linearGradient-5"
        >
          <stop stopColor="#FFF33B" stopOpacity="0" offset="0%" />
          <stop stopColor="#FF57B0" offset="100%" />
        </linearGradient>
        <rect id="path-6" x="0" y="0" width="615" height="851" />
        <linearGradient
          x1="50.0327206%"
          y1="79.0175551%"
          x2="50.0327206%"
          y2="-44.8815257%"
          id="linearGradient-8"
        >
          <stop stopColor="#FE5E85" offset="21.81%" />
          <stop stopColor="#E94B96" offset="40.49%" />
          <stop stopColor="#B21CC1" offset="79.01%" />
          <stop stopColor="#9100DB" offset="99.97%" />
        </linearGradient>
        <linearGradient
          x1="50.0327206%"
          y1="79.0175551%"
          x2="50.0327206%"
          y2="-57.9189338%"
          id="linearGradient-9"
        >
          <stop stopColor="#FE5E85" offset="21.81%" />
          <stop stopColor="#E94B96" offset="40.49%" />
          <stop stopColor="#B21CC1" offset="79.01%" />
          <stop stopColor="#9100DB" offset="99.97%" />
        </linearGradient>
        <linearGradient
          x1="50.0078125%"
          y1="-14.3794118%"
          x2="50.0078125%"
          y2="84.3210478%"
          id="linearGradient-10"
        >
          <stop stopColor="#0025FF" offset="0%" />
          <stop stopColor="#00FFD7" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="92.6689445%"
          y1="127.3586%"
          x2="11.4142528%"
          y2="14.4674737%"
          id="linearGradient-11"
        >
          <stop stopColor="#0025FF" offset="3.619557%" />
          <stop stopColor="#0025FF" stopOpacity="0.8587" offset="16.82%" />
          <stop stopColor="#0025FF" stopOpacity="0" offset="97.01%" />
        </linearGradient>
        <linearGradient
          x1="114.073989%"
          y1="198.165562%"
          x2="-10.8913485%"
          y2="-38.4110424%"
          id="linearGradient-12"
        >
          <stop stopColor="#7F9BFC" offset="0%" />
          <stop stopColor="#C9D3FE" offset="62.89%" />
          <stop stopColor="#F0F0FF" offset="99.91%" />
        </linearGradient>
        <linearGradient
          x1="140.812842%"
          y1="110.913212%"
          x2="45.1242839%"
          y2="33.8259447%"
          id="linearGradient-13"
        >
          <stop stopColor="#CFCFF6" offset="0%" />
          <stop stopColor="#F0F0FF" offset="99.91%" />
        </linearGradient>
        <linearGradient
          x1="101.805599%"
          y1="153.92944%"
          x2="40.0355701%"
          y2="46.5605817%"
          id="linearGradient-14"
        >
          <stop stopColor="#CFCFF6" offset="0%" />
          <stop stopColor="#F0F0FF" offset="99.91%" />
        </linearGradient>
      </defs>
      <g id="planes" transform="translate(-6.000000, -47.000000)">
        <g
          id="bg"
          transform="translate(980.000000, 123.000000)"
          fillRule="nonzero"
        >
          <g id="board-header">
            <path
              d="M615.5,94.5 L0.8,94.5 L0.8,12.8 C0.8,5.9 6.4,0.3 13.3,0.3 L603,0.3 C609.9,0.3 615.5,5.9 615.5,12.8 L615.5,94.5 Z"
              id="header-bg"
              fill="url(#linearGradient-1)"
            />
            <g id="buttons" transform="translate(38.000000, 33.000000)">
              <circle
                id="Oval"
                fill="url(#linearGradient-2)"
                cx="14.7"
                cy="14.3"
                r="14.2"
              />
              <circle
                id="Oval"
                fill="url(#linearGradient-3)"
                cx="63.2"
                cy="14.3"
                r="14.2"
              />
              <circle
                id="Oval"
                fill="url(#linearGradient-4)"
                cx="111.6"
                cy="14.3"
                r="14.2"
              />
            </g>
          </g>
          <path
            d="M603.586617,1065 L12.5121604,1065 C5.60544785,1065 -5.68434189e-14,1059.4 -5.68434189e-14,1052.5 L-5.68434189e-14,120 L616,120 L615.99868,1052.6 C616.098777,1059.4 610.493329,1065 603.586617,1065 Z"
            id="board-bg"
            fill="url(#linearGradient-5)"
          />
        </g>
        <g
          id="cards-wrap"
          transform="translate(980.000000, 243.000000)"
          mask="url(#mask-7)"
        >
          <mask id="mask-7" fill="white">
            <use xlinkHref="#path-6" />
          </mask>
          <g id="Rectangle" />
          <g id="cards">
            <g id="card1">
              <g transform="translate(38.000000, 97.000000)">
                <g id="card1_bg">
                  <g id="Group" opacity="0.15">
                    <g />
                  </g>
                  <g id="Group" />
                  <path
                    d="M519.7,159.304348 L20.2,159.304348 C9.1,159.304348 0,150.360248 0,139.229814 L0,20.7701863 C0,9.73913043 9,0.695652174 20.2,0.695652174 L519.7,0.695652174 C530.8,0.695652174 539.9,9.63975155 539.9,20.7701863 L539.9,139.229814 C539.9,150.360248 530.8,159.304348 519.7,159.304348 Z"
                    fill="#FCDFCE"
                    fillRule="nonzero"
                  />
                  <path
                    id="card1_bg-white"
                    d="M519.796259,0.695652174 L20.2037414,0.695652174 C9.1016855,0.695652174 0,9.66216784 0,20.8204985 L0,139.577017 C0,150.63572 9.00166698,159.701863 20.2037414,159.701863 L519.796259,159.701863 C530.898315,159.701863 540,150.735348 540,139.577017 L540,20.8204985 C540,9.76179579 530.898315,0.695652174 519.796259,0.695652174 Z"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  />
                </g>
                <g
                  id="card1_text"
                  opacity="0.25000"
                  transform="translate(191.000000, 30.00000)"
                >
                  <rect
                    className="card_text"
                    x="30"
                    y="0"
                    width="270"
                    height="16"
                    rx="8"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="30"
                    width="303"
                    height="16"
                    rx="8"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="56"
                    width="303"
                    height="16"
                    rx="8"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="82"
                    width="122"
                    height="16"
                    rx="8"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                </g>
                <g
                  id="card1-icon-wrap"
                  transform="translate(45.000000, 25.838509)"
                >
                  <g id="card1_icon">
                    <g id="Group" fillRule="nonzero">
                      <ellipse
                        id="Oval"
                        fill="url(#linearGradient-8)"
                        cx="54.8"
                        cy="54.1614907"
                        rx="54.4"
                        ry="54.0621118"
                      />
                      <g
                        transform="translate(5.000000, 16.894410)"
                        fill="#FFFFFF"
                      >
                        <path d="M81.6,30.5093168 C77.9,25.9378882 70.8,25.8385093 67,30.5093168 L45.8,56.3478261 L28.2,43.6273292 C24.6,41.0434783 19.6,41.3416149 16.3,44.3229814 L-5.68434189e-14,59.2298137 C8.5,78.2111801 27.6,91.4285714 49.8,91.4285714 C73.7,91.4285714 94,76.1242236 101.3,54.8571429 L81.6,30.5093168 Z" />
                        <ellipse
                          id="Oval"
                          cx="37.7"
                          cy="8.2484472"
                          rx="7.5"
                          ry="7.45341615"
                        />
                      </g>
                    </g>
                    <ellipse
                      id="Oval"
                      fill="url(#linearGradient-9)"
                      fillRule="nonzero"
                      opacity="0.2"
                      cx="54.8"
                      cy="54.1614907"
                      rx="54.4"
                      ry="54.0621118"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="card2">
              <g transform="translate(38.000000, 354.000000)">
                <g id="card2_bg">
                  <path
                    d="M519.796259,159.304348 L20.2037414,159.304348 C9.1016855,159.304348 0,150.337832 0,139.179502 L0,20.4229829 C0,9.36428027 9.00166698,0.298136646 20.2037414,0.298136646 L519.796259,0.298136646 C530.898315,0.298136646 540,9.26465231 540,20.4229829 L540,139.179502 C540,150.238204 530.898315,159.304348 519.796259,159.304348 Z"
                    fill="#FCDFCE"
                    fillRule="nonzero"
                  />
                  <path
                    id="card2_bg-white"
                    d="M519.796259,159.304348 L20.2037414,159.304348 C9.1016855,159.304348 0,150.337832 0,139.179502 L0,20.4229829 C0,9.36428027 9.00166698,0.298136646 20.2037414,0.298136646 L519.796259,0.298136646 C530.898315,0.298136646 540,9.26465231 540,20.4229829 L540,139.179502 C540,150.238204 530.898315,159.304348 519.796259,159.304348 Z"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  />
                </g>
                <g
                  id="card2-icon-wrap"
                  transform="translate(42.000000, 24.844720)"
                >
                  <g id="card2_icon">
                    <ellipse
                      id="Oval"
                      fill="url(#linearGradient-10)"
                      fillRule="nonzero"
                      cx="54.8"
                      cy="54.757764"
                      rx="54.4"
                      ry="54.0621118"
                    />
                    <g
                      id="Group"
                      transform="translate(5.000000, 17.888199)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <path d="M81.6,30.1118012 C77.9,25.5403727 70.8,25.4409938 67,30.1118012 L45.8,55.9503106 L28.2,43.2298137 C24.6,40.6459627 19.6,40.9440994 16.3,43.9254658 L-5.68434189e-14,58.8322981 C8.5,77.8136646 27.6,91.0310559 49.8,91.0310559 C73.7,91.0310559 94,75.7267081 101.3,54.4596273 L81.6,30.1118012 Z" />
                      <ellipse
                        id="Oval"
                        cx="37.7"
                        cy="7.85093168"
                        rx="7.5"
                        ry="7.45341615"
                      />
                    </g>
                    <ellipse
                      id="Oval"
                      fill="url(#linearGradient-10)"
                      fillRule="nonzero"
                      opacity="0.2"
                      cx="54.8"
                      cy="54.757764"
                      rx="54.4"
                      ry="54.0621118"
                    />
                  </g>
                </g>
                <g
                  id="card2_text"
                  opacity="0.25000"
                  transform="translate(191.000000, 30.00000)"
                >
                  <rect
                    className="card_text"
                    x="30"
                    y="0"
                    width="270"
                    height="16"
                    rx="8"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="30"
                    width="303"
                    height="16"
                    rx="8"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="56"
                    width="303"
                    height="16"
                    rx="8"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="82"
                    width="122"
                    height="16"
                    rx="8"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
            <g id="card3">
              <g transform="translate(38.000000, 611.000000)">
                <g id="card3_bg">
                  <path
                    d="M519.796259,159.701863 L20.2037414,159.701863 C9.1016855,159.701863 0,150.735348 0,139.577017 L0,20.8204985 C0,9.76179579 9.00166698,0.695652174 20.2037414,0.695652174 L519.796259,0.695652174 C530.898315,0.695652174 540,9.66216784 540,20.8204985 L540,139.577017 C540,150.735348 530.898315,159.701863 519.796259,159.701863 Z"
                    fill="#FCDFCE"
                    fillRule="nonzero"
                  />
                  <path
                    id="card3_bg-white"
                    d="M519.796259,0.695652174 L20.2037414,0.695652174 C9.1016855,0.695652174 0,9.66216784 0,20.8204985 L0,139.577017 C0,150.63572 9.00166698,159.701863 20.2037414,159.701863 L519.796259,159.701863 C530.898315,159.701863 540,150.735348 540,139.577017 L540,20.8204985 C540,9.76179579 530.898315,0.695652174 519.796259,0.695652174 Z"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  />
                </g>
                <g
                  id="card3_text"
                  opacity="0.25000"
                  transform="translate(191.000000, 30.00000)"
                >
                  <rect
                    className="card_text"
                    x="30"
                    y="0"
                    width="270"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="30"
                    width="303"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="56"
                    width="303"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="82"
                    width="122"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                </g>
                <g
                  id="card3-icon-wrap"
                  transform="translate(45.000000, 25.838509)"
                >
                  <g id="card3_icon" transform="scale(0)">
                    <g id="Group" fillRule="nonzero">
                      <ellipse
                        id="Oval"
                        fill="url(#linearGradient-8)"
                        cx="54.8"
                        cy="54.1614907"
                        rx="54.4"
                        ry="54.0621118"
                      />
                      <g
                        transform="translate(5.000000, 16.894410)"
                        fill="#FFFFFF"
                      >
                        <path d="M81.6,30.5093168 C77.9,25.9378882 70.8,25.8385093 67,30.5093168 L45.8,56.3478261 L28.2,43.6273292 C24.6,41.0434783 19.6,41.3416149 16.3,44.3229814 L-5.68434189e-14,59.2298137 C8.5,78.2111801 27.6,91.4285714 49.8,91.4285714 C73.7,91.4285714 94,76.1242236 101.3,54.8571429 L81.6,30.5093168 Z" />
                        <ellipse
                          id="Oval"
                          cx="37.7"
                          cy="8.2484472"
                          rx="7.5"
                          ry="7.45341615"
                        />
                      </g>
                    </g>
                    <ellipse
                      id="Oval"
                      fill="url(#linearGradient-9)"
                      fillRule="nonzero"
                      opacity="0.2"
                      cx="54.8"
                      cy="54.1614907"
                      rx="54.4"
                      ry="54.0621118"
                    />
                  </g>
                </g>
              </g>
            </g>
            <g id="card4">
              <g transform="translate(38.000000, 868.000000)">
                <g id="card4_bg">
                  <path
                    d="M519.796259,160 L20.2037414,160 C9.1016855,160 0,150.977444 0,139.749373 L0,20.2506266 C0,9.12280702 9.00166698,1.58206781e-13 20.2037414,1.58206781e-13 L519.796259,1.58206781e-13 C530.898315,1.58206781e-13 540,9.02255639 540,20.2506266 L540,139.749373 C540,150.877193 530.898315,160 519.796259,160 Z"
                    fill="#FCDFCE"
                    fillRule="nonzero"
                  />
                  <path
                    id="card4_bg-white"
                    d="M519.796259,159.006211 L20.2037414,159.006211 C9.1016855,159.006211 0,150.039696 0,138.881365 L0,20.1248463 C0,9.06614362 9.00166698,1.58206781e-13 20.2037414,1.58206781e-13 L519.796259,1.58206781e-13 C530.898315,1.58206781e-13 540,8.96651567 540,20.1248463 L540,138.881365 C540,149.940068 530.898315,159.006211 519.796259,159.006211 Z"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  />
                </g>
                <g
                  id="card4-icon-wrap"
                  transform="translate(42.000000, 25.000000)"
                >
                  <g id="card4_icon" transform="scale(0)">
                    <circle
                      id="Oval"
                      fill="url(#linearGradient-10)"
                      fillRule="nonzero"
                      cx="54.8"
                      cy="55.1"
                      r="54.4"
                    />
                    <g
                      id="Group"
                      transform="translate(5.000000, 18.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <path d="M81.6,30.3 C77.9,25.7 70.8,25.6 67,30.3 L45.8,56.3 L28.2,43.5 C24.6,40.9 19.6,41.2 16.3,44.2 L-5.68434189e-14,59.2 C8.5,78.3 27.6,91.6 49.8,91.6 C73.7,91.6 94,76.2 101.3,54.8 L81.6,30.3 Z" />
                      <circle id="Oval" cx="37.7" cy="7.9" r="7.5" />
                    </g>
                    <circle
                      id="Oval"
                      fill="url(#linearGradient-10)"
                      fillRule="nonzero"
                      opacity="0.2"
                      cx="54.8"
                      cy="55.1"
                      r="54.4"
                    />
                  </g>
                </g>
                <g
                  id="card4_text"
                  opacity="0.25000"
                  transform="translate(191.000000, 30.00000)"
                >
                  <rect
                    className="card_text"
                    x="30"
                    y="0"
                    width="270"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="30"
                    width="303"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="56"
                    width="303"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="82"
                    width="122"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
            <g id="card5">
              <g transform="translate(38.000000, 1125.000000)">
                <g id="card5_bg">
                  <path
                    d="M519.796259,160 L20.2037414,160 C9.1016855,160 0,150.977444 0,139.749373 L0,20.2506266 C0,9.12280702 9.00166698,1.58206781e-13 20.2037414,1.58206781e-13 L519.796259,1.58206781e-13 C530.898315,1.58206781e-13 540,9.02255639 540,20.2506266 L540,139.749373 C540,150.877193 530.898315,160 519.796259,160 Z"
                    fill="#FCDFCE"
                    fillRule="nonzero"
                  />
                  <path
                    id="card5_bg-white"
                    d="M519.796259,159.006211 L20.2037414,159.006211 C9.1016855,159.006211 0,150.039696 0,138.881365 L0,20.1248463 C0,9.06614362 9.00166698,1.58206781e-13 20.2037414,1.58206781e-13 L519.796259,1.58206781e-13 C530.898315,1.58206781e-13 540,8.96651567 540,20.1248463 L540,138.881365 C540,149.940068 530.898315,159.006211 519.796259,159.006211 Z"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                  />
                </g>
                <g
                  id="card5-icon-wrap"
                  transform="translate(42.000000, 25.000000)"
                >
                  <g id="card5_icon" transform="scale(0)">
                    <circle
                      id="Oval"
                      fill="url(#linearGradient-10)"
                      fillRule="nonzero"
                      cx="54.8"
                      cy="55.1"
                      r="54.4"
                    />
                    <g
                      id="Group"
                      transform="translate(5.000000, 18.000000)"
                      fill="#FFFFFF"
                      fillRule="nonzero"
                    >
                      <path d="M81.6,30.3 C77.9,25.7 70.8,25.6 67,30.3 L45.8,56.3 L28.2,43.5 C24.6,40.9 19.6,41.2 16.3,44.2 L-5.68434189e-14,59.2 C8.5,78.3 27.6,91.6 49.8,91.6 C73.7,91.6 94,76.2 101.3,54.8 L81.6,30.3 Z" />
                      <circle id="Oval" cx="37.7" cy="7.9" r="7.5" />
                    </g>
                    <circle
                      id="Oval"
                      fill="url(#linearGradient-10)"
                      fillRule="nonzero"
                      opacity="0.2"
                      cx="54.8"
                      cy="55.1"
                      r="54.4"
                    />
                  </g>
                </g>
                <g
                  id="card5_text"
                  opacity="0.25000"
                  transform="translate(191.000000, 30.00000)"
                >
                  <rect
                    className="card_text"
                    x="30"
                    y="0"
                    width="270"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="30"
                    width="303"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="56"
                    width="303"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                  <rect
                    className="card_text"
                    x="0"
                    y="82"
                    width="122"
                    height="16"
                    rx="8"
                    transform="scale(0)"
                    fill="#7F9BFC"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
        <g id="plane2-wrap" transform="translate(320.000000, 30.00000)">
          <g id="plane2" fillRule="nonzero">
            <path
              d="M832.927808,725.921924 L342.327808,31.8219235 C250.027808,-98.7780765 -111.072192,339.321924 46.3278083,403.821924 L832.927808,725.921924 Z"
              fill="url(#linearGradient-11)"
              opacity="0.0458220109"
              transform="translate(420.019183, 366.784851) rotate(1.000000) translate(-420.019183, -366.784851) "
            />
            <polygon
              fill="url(#linearGradient-12)"
              points="832.3 734.9 680.2 679.8 697.9 616"
            />
            <polygon
              fill="url(#linearGradient-13)"
              points="832.3 734.9 697.9 616 738.8 591.3"
            />
            <polygon
              fill="url(#linearGradient-14)"
              points="832.3 734.9 624.1 660.4 671.7 631.8"
            />
          </g>
        </g>
        z
        <g id="plane1-wrap" transform="translate(-320.000000, -30.00000)">
          <g id="plane1" fillRule="nonzero">
            <path
              d="M826.3,718.9 L335.7,24.8 C243.4,-105.8 -117.7,332.3 39.7,396.8 L826.3,718.9 Z"
              fill="url(#linearGradient-11)"
              opacity="0.0536345109"
            />
            <polygon
              fill="url(#linearGradient-12)"
              points="826.3 718.9 674.2 663.8 691.9 600"
            />
            <polygon
              fill="url(#linearGradient-13)"
              points="826.3 718.9 691.9 600 732.8 575.3"
            />
            <polygon
              fill="url(#linearGradient-14)"
              points="826.3 718.9 618.1 644.4 665.7 615.8"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Svgillustration;
