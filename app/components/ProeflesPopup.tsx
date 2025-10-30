'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PrimaryButton from './PrimaryButton';

interface ProeflesPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProeflesPopup: React.FC<ProeflesPopupProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    naam: '',
    proefles: '',
    telefoon: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const proeflesOpties = [
    'Personal training',
    'Duo training',
    'Small group (Bodypump, HIIT, Boksen, Hyrox, BBB, Krachttraining)',
    'Gym only',
    'Reformer Pilates'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ naam: '', proefles: '', telefoon: '', email: '' });
        setTimeout(() => {
          onClose();
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Popup Container */}
      <div 
        className="relative bg-white rounded-[16px] lg:rounded-[24px] max-w-[1200px] w-full overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxHeight: '95vh'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 lg:top-6 lg:right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 hover:bg-white transition-colors shadow-lg"
          aria-label="Sluiten"
        >
          <svg 
            className="w-5 h-5 text-gym-navy" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto" style={{ maxHeight: '95vh' }}>
          <div className="flex flex-col lg:flex-row">
            
            {/* Left Side - Image */}
            <div className="lg:w-1/2 relative h-[200px] sm:h-[300px] lg:h-[600px]">
              <Image
                src="/1 op 12 group.png"
                alt="Potentia Gym Training"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Right Side - Form */}
            <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12">
              
              {/* Success Message */}
              {submitSuccess && (
                <div className="mb-4 lg:mb-6 p-3 lg:p-4 bg-gym-gold/20 border border-gym-gold rounded-lg">
                  <p 
                    className="text-gym-navy font-semibold text-sm lg:text-base"
                    style={{
                      fontFamily: 'Syne'
                    }}
                  >
                    ✓ Bedankt! We nemen zo snel mogelijk contact met je op.
                  </p>
                </div>
              )}

              {/* Heading */}
              <h2 
                className="text-gym-navy mb-3 lg:mb-4"
                style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 5vw, 35px)',
                  lineHeight: '110%'
                }}
              >
                Boek een gratis proefles
              </h2>

              {/* Subtext */}
              <p 
                className="text-gym-navy mb-6 lg:mb-8"
                style={{
                  fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                  fontWeight: 400,
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  lineHeight: '26px'
                }}
              >
                Zet de eerste stap en ervaar zelf de sfeer en persoonlijke begeleiding bij Potentia Gym. Vul het formulier in voor een gratis proefles
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
                
                {/* Naam */}
                <div>
                  <label 
                    htmlFor="naam"
                    className="block text-gym-navy mb-2"
                    style={{
                      fontFamily: 'Syne',
                      fontWeight: 600,
                      fontSize: '14px'
                    }}
                  >
                    Naam
                  </label>
                  <input
                    type="text"
                    id="naam"
                    name="naam"
                    placeholder="Vul hier je naam in"
                    value={formData.naam}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gym-gold transition-colors text-base"
                    style={{
                      fontFamily: 'Aeonik TRIAL, Inter, sans-serif'
                    }}
                  />
                </div>

                {/* Soort proefles */}
                <div>
                  <label 
                    htmlFor="proefles"
                    className="block text-gym-navy mb-2"
                    style={{
                      fontFamily: 'Syne',
                      fontWeight: 600,
                      fontSize: '14px'
                    }}
                  >
                    Soort proefles
                  </label>
                  <select
                    id="proefles"
                    name="proefles"
                    value={formData.proefles}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gym-gold transition-colors appearance-none bg-white cursor-pointer text-base"
                    style={{
                      fontFamily: 'Aeonik TRIAL, Inter, sans-serif',
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%23002444' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 1rem center',
                      paddingRight: '3rem'
                    }}
                  >
                    <option value="" disabled>Welke proefles?</option>
                    {proeflesOpties.map((optie, index) => (
                      <option key={index} value={optie}>
                        {optie}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Telefoonnummer */}
                <div>
                  <label 
                    htmlFor="telefoon"
                    className="block text-gym-navy mb-2"
                    style={{
                      fontFamily: 'Syne',
                      fontWeight: 600,
                      fontSize: '14px'
                    }}
                  >
                    Telefoonnummer
                  </label>
                  <input
                    type="tel"
                    id="telefoon"
                    name="telefoon"
                    placeholder="Vul hier je telefoonnummer in"
                    value={formData.telefoon}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gym-gold transition-colors text-base"
                    style={{
                      fontFamily: 'Aeonik TRIAL, Inter, sans-serif'
                    }}
                  />
                </div>

                {/* E-mail */}
                <div>
                  <label 
                    htmlFor="email"
                    className="block text-gym-navy mb-2"
                    style={{
                      fontFamily: 'Syne',
                      fontWeight: 600,
                      fontSize: '14px'
                    }}
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Vul hier je e-mail in"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gym-gold transition-colors text-base"
                    style={{
                      fontFamily: 'Aeonik TRIAL, Inter, sans-serif'
                    }}
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <PrimaryButton 
                    variant="solid"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'VERZENDEN...' : 'VERZEND'}
                  </PrimaryButton>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProeflesPopup;