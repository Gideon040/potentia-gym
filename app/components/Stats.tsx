import React from 'react';

const Stats = () => {
  const stats = [
    {
      number: '400+',
      description: 'mensen naar hun doel geholpen'
    },
    {
      number: '100+',
      description: '5 sterren reviews'
    },
    {
      number: '95%',
      description: 'ziet binnen 3 maanden progressie'
    }
  ];

  return (
    <section 
      className="relative w-full bg-[#001427] flex items-center justify-center py-16 md:py-0"
      style={{ minHeight: '394px' }}
    >
      <div className="w-full max-w-[1130px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-3">
              <h3 className="text-6xl lg:text-[78px] font-normal text-white leading-[89px]">
                {stat.number}
              </h3>
              <p className="text-lg lg:text-[22px] font-light text-gym-gold leading-[30px] lg:leading-[35px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;