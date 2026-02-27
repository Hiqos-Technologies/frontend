"use client";

import React, { useEffect } from 'react';

import Image from 'next/image';
import { createPortal } from 'react-dom';

export interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  description: string;
  additionalText?: string;
  images?: string[];
}

export default function ServiceModal({
  isOpen,
  onClose,
  heading,
  description,
  additionalText = "Contact us today to learn more about how we can help your business with this service.",
  images = [],
}: ServiceModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        
        <div className="p-6 sm:p-8">
          
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-[var(--secondary)] to-[#1b2232] bg-clip-text text-transparent">
            {heading}
          </h2>

          
          <div className="mb-6">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {description}
            </p>
          </div>

          
          {images.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              {images.map((img, index) => (
                <div key={index} className="flex-1">
                  <Image
                    src={img}
                    alt={`${heading} image ${index + 1}`}
                    width={400}
                    height={500}
                    className="w-full h-48 sm:h-64 object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}

          
          <div>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {additionalText}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
