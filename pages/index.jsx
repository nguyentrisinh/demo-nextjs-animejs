import React, { useEffect } from 'react';
import Link from 'next/link';
import anime from 'animejs';

const HomePage = () => {
  useEffect(() => {
    anime
      .timeline()
      .add({
        targets: '#title',
        translateX: 150,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '#title',
        translateX: 0,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '#feature-items',
        opacity: 1,
        easing: 'easeInOutSine',
      })
      .add({
        targets: '#feature-items',
        translateX: {
          value: 150,
          duration: 1500,
        },
        rotate: {
          value: 360,
          duration: 1500,
          easing: 'easeInOutSine',
        },
      })
      .add({
        targets: '#feature-items',
        translateX: {
          value: 0,
          duration: 1500,
        },
      })
      .add({
        targets: '#lauch-demo',
        opacity: 1,
        easing: 'easeInOutSine',
      });
  }, []);
  return (
    <>
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
        <h1
          id="title"
          className="mb-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left"
        >
          Feature
        </h1>
        <div id="feature-items" className="ml-4 opacity-0">
          <p className="leading-normal text-base md:text-2xl text-center md:text-left">
            React
          </p>
          <p className="leading-normal text-base md:text-2xl text-center md:text-left">
            Next
          </p>
          <p className="leading-normal text-base md:text-2xl text-center md:text-left">
            AnimeJs
          </p>
          <p className="leading-normal text-base md:text-2xl text-center md:text-left">
            Tailwind CSS
          </p>
        </div>

        <div
          id="lauch-demo"
          className="flex w-full mt-8 justify-center md:justify-start pb-24 lg:pb-0 opacity-0"
        >
          <Link href="/demo">
            <a
              href="/demo"
              className="px-4 md:px-8 py-2 md:py-3 rounded-full bg-blue-400 text-white font-bold uppercase border-blue-500 border hover:bg-blue-600"
            >
              Lauch More Demo
            </a>
          </Link>
        </div>
      </div>

      <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
        <img
          className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
          src="/devices.svg"
          alt=""
        />
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      contentClass: 'pt-24 md:pt-48',
    },
  };
}

export default HomePage;
