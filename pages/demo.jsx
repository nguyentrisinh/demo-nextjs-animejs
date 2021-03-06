import React from 'react';
import AnimeLogo from '@/components/partials/demo/AnimeLogo';
import Svgillustration from '@/components/partials/demo/Svgillustration';
import HandWrittenSvgText from '@/components/partials/demo/HandWrittenSvgText';

const DemoPage = () => (
  <>
    <div className="py-10 flex flex-col w-full items-center">
      <h2 className="py-5 text-blue-700 text-2xl font-extrabold">Logo Anime</h2>
      <AnimeLogo />
    </div>
    <div className="py-10 flex flex-col w-full text-2xl items-center">
      <h2 className="py-5 text-blue-700 font-extrabold">Svg illustration Anime</h2>
      <Svgillustration />
    </div>
    <div className="py-10 flex flex-col w-full items-center">
      <h2 className="py-5 text-blue-700 text-2xl font-extrabold">Hand Written Svg Text Anime</h2>
      <HandWrittenSvgText />
    </div>
  </>
);

export async function getStaticProps() {
  return {
    props: {
      background: false,
      contentClass: 'py-5'
    }
  };
}

export default DemoPage;
