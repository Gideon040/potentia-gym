'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden lg:h-[770px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contact-image.png"
          alt="Contact Potentia Gym"
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlay - Darker on mobile */}
        <div 
          className="absolute inset-0 lg:bg-gradient-to-r bg-gradient-to-b"
          style={{
            background: 'linear-gradient(266.76deg, rgba(0, 36, 68, 0) 21.47%, rgba(0, 36, 68, 0.45) 60.12%)'
          }}
        />
        
        {/* Mobile: Extra dark overlay */}
        <div className="absolute inset-0 lg:hidden bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-5 lg:px-16">
        
        {/* ===== MOBILE LAYOUT ===== */}
        <div className="block lg:hidden py-12 space-y-10">
          
          {/* Heading */}
          <h2 
            className="text-white"
            style={{
              fontFamily: 'Syne',
              fontWeight: 700,
              fontSize: '28px',
              lineHeight: '34px'
            }}
          >
            Neem contact op
          </h2>

          {/* Contact Info - Stacked */}
          <div className="space-y-6">
            
            {/* Location */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <Image
                  src="/locatie-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <div>
                <p 
                  className="text-white mb-1"
                  style={{
                    fontFamily: 'Syne',
                    fontWeight: 600,
                    fontSize: '16px',
                    lineHeight: '20px'
                  }}
                >
                  Potentia Maarheeze
                </p>
                <p 
                  className="text-white/90"
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '13px',
                    lineHeight: '18px'
                  }}
                >
                  Rondvan 51<br />
                  6026PX Maarheeze
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/phone.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px'
                }}
              >
                +316 42 47 14 19
              </p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/mail-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px'
                }}
              >
                info@potentiagym.nl
              </p>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <Image
                  src="/instagram-icon.svg"
                  alt=""
                  width={20}
                  height={20}
                />
              </div>
              <p 
                className="text-white"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '20px'
                }}
              >
                @potentiagym
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 
              className="text-white mb-5"
              style={{
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '22px',
                lineHeight: '28px'
              }}
            >
              Heb je een vraag? Mail ons.
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Naam"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors disabled:opacity-50"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '15px'
                }}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="E-mailadres"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors disabled:opacity-50"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '15px'
                }}
              />

              {/* Mobile */}
              <input
                type="tel"
                name="mobile"
                placeholder="Telefoonnummer"
                value={formData.mobile}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors disabled:opacity-50"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '15px'
                }}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Bericht"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors resize-none disabled:opacity-50"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '15px'
                }}
              />

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div 
                  className="w-full px-4 py-3 bg-gym-gold/20 border border-gym-gold rounded-md text-gym-gold text-center"
                  style={{
                    fontFamily: 'Syne',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  ✓ Bericht succesvol verzonden!
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div 
                  className="w-full px-4 py-3 bg-red-500/20 border border-red-500 rounded-md text-red-300 text-center"
                  style={{
                    fontFamily: 'Syne',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  ✕ Er ging iets mis. Probeer opnieuw.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-full font-bold uppercase transition-all duration-300 bg-[#E1AC46] text-[#002444] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FFCE71] active:scale-95"
                style={{
                  fontFamily: 'Syne',
                  fontSize: '11px',
                  letterSpacing: '0.15em'
                }}
              >
                {isSubmitting ? 'VERZENDEN...' : 'VERSTUUR BERICHT'}
              </button>
            </form>
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT: EXACT ORIGINEEL ===== */}
        <div className="hidden lg:flex h-full flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 py-12 lg:py-0">
          
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
              Neem contact op
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
              Heb je een vraag? Mail ons.
            </h3>

            <form 
              onSubmit={handleSubmit}
              className="space-y-7"
            >
              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Naam"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors disabled:opacity-50"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '16px'
                }}
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="E-mailadres"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors disabled:opacity-50"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '16px'
                }}
              />

              {/* Mobile */}
              <input
                type="tel"
                name="mobile"
                placeholder="Telefoonnummer"
                value={formData.mobile}
                onChange={handleChange}
                required
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors disabled:opacity-50"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '16px'
                }}
              />

              {/* Message */}
              <textarea
                name="message"
                placeholder="Bericht"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={isSubmitting}
                className="w-full px-4 py-3 bg-transparent border border-white/30 rounded-md text-white placeholder-white/60 focus:outline-none focus:border-gym-gold transition-colors resize-none disabled:opacity-50"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontSize: '16px'
                }}
              />

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div 
                  className="w-full px-4 py-3 bg-gym-gold/20 border border-gym-gold rounded-md text-gym-gold text-center"
                  style={{
                    fontFamily: 'Syne',
                    fontSize: '14px',
                    fontWeight: 600
                  }}
                >
                  ✓ Bericht succesvol verzonden! We nemen zo snel mogelijk contact op.
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div 
                  className="w-full px-4 py-3 bg-red-500/20 border border-red-500 rounded-md text-red-300 text-center"
                  style={{
                    fontFamily: 'Syne',
                    fontSize: '14px',
                    fontWeight: 600
                  }}
                >
                  ✕ Er ging iets mis. Probeer het opnieuw of bel ons.
                </div>
              )}

              {/* Submit Button */}
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center px-[35px] py-5 rounded-full font-syne font-bold text-xs leading-[14px] tracking-[0.15em] uppercase transition-all duration-300 hover:scale-105 bg-[#E1AC46] text-[#002444] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'VERZENDEN...' : 'VERSTUUR BERICHT'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;