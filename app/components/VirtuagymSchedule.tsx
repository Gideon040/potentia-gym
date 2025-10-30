import React from 'react';

const VirtuagymSchedule = () => {
  return (
    <section className="relative w-full bg-[#001427] pt-32 lg:pt-40 pb-20 lg:pb-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-white mb-4"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '41px',
              lineHeight: '100%'
            }}
          >
            Plan jouw training
          </h2>
          <p 
            className="text-gym-gold max-w-[600px] mx-auto"
            style={{
              fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
              fontSize: '18px',
              lineHeight: '35px'
            }}
          >
            Bekijk ons complete lesrooster en reserveer direct jouw favoriete training.
          </p>
        </div>

        {/* Virtuagym Iframe */}
        <div 
          className="relative w-full mx-auto overflow-hidden rounded-[24px]"
          style={{
            maxWidth: '1200px',
            boxShadow: '30px 20px 99px 0px rgba(225, 172, 70, 0.15)'
          }}
        >
          <iframe 
            src="https://potentiagym.virtuagym.com/classes/week/?event_type=2&embedded=1" 
            width="100%" 
            height="1500px"
            style={{
              border: 'none',
              display: 'block'
            }}
            title="Potentia Gym Lesrooster"
          />
        </div>

      </div>
    </section>
  );
};

export default VirtuagymSchedule;