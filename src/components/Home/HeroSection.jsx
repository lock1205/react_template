import React from 'react';
import { heroLinks } from '../../constants/data';
import { Link } from 'react-router-dom';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';

const HeroSection = () => {
  return (
    <div className="flex flex-col item-center mt-6 lg:mt-20 gap:20px">
      <h1 className="text-4xl lg:text-7xl sm:text-6xl font-customFontEn tracking-tight text-neutral-700 dark:text-neutral-300 font-bold  text-center">
        AceDot Build Tools{' '}
        <span className="bg-gradient-to-r from-indigo-200 to-indigo-800 text-transparent bg-clip-text">
          for Developers
        </span>
      </h1>
      <p className=" text-center font-customFontKr text-neutral-400 max-w-4xl  text-base   mb:text-sm lg:text-lg">
        국민의 모든 자유와 권리는 국가안전보장·질서유지 또는 공공복리를 위하여
        필요한 경우에 한하여 법률로써 제한할 수 있으며, 제한하는 경우에도 자유와
        권리의 본질적인 내용을 침해할 수 없다. 의원을 제명하려면 국회재적의원
        3분의 2 이상의 찬성이 있어야 한다. 대통령은 국가의 독립·영토의
        보전·국가의 계속성과 헌법을 수호할 책무를 진다.
      </p>
      <div className="flex gap-4 justify-center">
        {heroLinks.map((item, idx) => (
          <Link
            to={item.to}
            key={idx}
            className={`font-customFontEn border  border-neutral-500 py-1 px-4 rounded-md ${
              idx === 0 &&
              'bg-gradient-to-r from-indigo-500 to-indigo-700 text-white border-0'
            }`}
          >
            {item.text}
          </Link>
        ))}
      </div>
      <div className="flex mt-10 gap-4 justify-center flex-col md:flex-row items-center">
        <video autoPlay muted loop className="vid md:w-1/3 ">
          <source src={video1} />
        </video>
        <video autoPlay muted loop className="vid md:w-1/3 ">
          <source src={video2} />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
