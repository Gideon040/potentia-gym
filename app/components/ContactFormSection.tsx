'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add form submission logic
  };

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        height: '770px'
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contact-image.png"
          alt="Contact Potentia Gym"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(266.76deg, rgba(0, 36, 68, 0) 21.47%, rgba(0, 36, 68, 0.45) 60.12%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 py-12 lg:py-0">
          
          {/* Left Side - Contact Info */}
          <div 
            className="w-full lg:w-auto"
            style={{
              maxWidth: '648px'
            }}
          >
            <h2 
              className="text-white mb-16"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '41px',
                lineHeight: '100%',
                marginTop: '40px'
              }}
            >
              Get in touch
            </h2>

            {/* Contact Details */}
            <div 
              style={{
                height: '315.67px'
              }}
            >
              
              {/* Top Section - Location & Phone */}
              <div 
                className="flex flex-col sm:flex-row gap-8 sm:gap-12 mb-16"
                style={{
                  marginTop: '123px'
                }}
              >
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/locatie-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'Syne',
                        fontWeight: 600,
                        fontSize: '22px',
                        lineHeight: '27px'
                      }}
                    >
                      Potentia Maarheeze
                    </p>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '21px'
                      }}
                    >
                      Rondvan 51<br />
                      6026PX Maarheeze
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/phone.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'Syne',
                        fontWeight: 600,
                        fontSize: '22px',
                        lineHeight: '27px'
                      }}
                    >
                      +316 42 47 14 19
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Email & Instagram */}
              <div 
                className="flex flex-col sm:flex-row gap-6 sm:gap-8"
              >
                {/* Email */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/mail-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'Syne',
                        fontWeight: 600,
                        fontSize: '22px',
                        lineHeight: '27px'
                      }}
                    >
                      info@potentiagym.nl
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/instagram-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p 
                      className="text-white"
                      style={{
                        fontFamily: 'Syne',
                        fontWeight: 600,
                        fontSize: '22px',
                        lineHeight: '27px'
                      }}
                    >
                      @potentiagym
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div 
            className="w-full lg:w-auto"
            style={{
              maxWidth: '503px',
              width: '100%'
            }}
          >
            <h3 
              className="text-white mb-7"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '28px',
                lineHeight: '100%'
              }}
            >
              Have a question? Email us.
            </h3>

            <form 
              onSubmit={handleSubmit}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '28px'
              }}
            >
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '16px'
                }}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '16px'
                }}
              />

              {/* Mobile */}
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '16px'
                }}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors resize-none"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '16px'
                }}
              />

              {/* Submit Button */}
              <PrimaryButton type="submit" variant="solid">
                SEND MESSAGE
              </PrimaryButton>
            </form>
          </div>

        </div>
      </div>

      {/* Mobile: Extra dark overlay for better readability */}
      <div className="absolute inset-0 lg:hidden bg-gradient-to-b from-black/20 via-transparent to-black/20" />
    </section>
  );
};

export default ContactFormSection;