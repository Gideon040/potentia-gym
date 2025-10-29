import React from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';
import OutlineButton from './OutlineButton';

const HealthClub = () => {
  return (
    <section className="relative w-full bg-white py-20 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Text & Buttons */}
          <div className="space-y-6 lg:max-w-[522px]">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-gym-navy leading-tight tracking-tight">
              The health club<br />
              of Cranendonck
            </h2>
            
            <p className="text-base lg:text-lg text-gym-navy/80 leading-relaxed font-light">
              Potentia offers a wide selection of state-of-the-art equipment from GymFit and TechnoGym, 
              as well as the right trainers for a wide range of group classes. With 700m² of available 
              space for strength training and group classes, achieving your goals becomes easier than ever. 
              Upon registration, you'll receive a free training and nutrition plan, so you don't miss out on progress.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <PrimaryButton variant="solid">
                I want a free trial
              </PrimaryButton>
              <OutlineButton variant="golden-outline">
                Our offer
              </OutlineButton>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[436px] h-[569px] rounded-[40px] overflow-hidden shadow-2xl">
              <Image
                src="/section2.jpg"
                alt="Health club interior"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HealthClub;