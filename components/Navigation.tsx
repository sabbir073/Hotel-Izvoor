'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaBars, FaTimes, FaGlobe, FaPhone, FaEnvelope, FaChevronDown } from 'react-icons/fa';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLanguageChange = (langCode: 'en' | 'sr' | 'hr') => {
    setLanguage(langCode);
    setLangDropdownOpen(false);
  };

  const languages = [
    { code: 'en' as const, name: 'English', flag: '🇬🇧' },
    { code: 'sr' as const, name: 'Srpski', flag: '🇷🇸' },
    { code: 'hr' as const, name: 'Hrvatski', flag: '🇭🇷' },
  ];

  const currentLang = languages.find(l => l.code === language) || languages[0];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div className="hidden lg:block bg-primary-900 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+381000000000" className="flex items-center gap-2 hover:text-primary-300 transition-colors">
                <FaPhone className="text-primary-400" />
                <span>+381 00 000 0000</span>
              </a>
              <a href="mailto:info@hotelizvordoo.com" className="flex items-center gap-2 hover:text-primary-300 transition-colors">
                <FaEnvelope className="text-primary-400" />
                <span>info@hotelizvordoo.com</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-primary-300">Mišarska BB, Aranđelovac, Serbia</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-2'
          : 'bg-white/95 backdrop-blur-md py-4'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-44 h-14">
                <Image
                  src="/logo.webp"
                  alt="Hotel Izvor d.o.o."
                  fill
                  sizes="(max-width: 768px) 150px, 176px"
                  quality={95}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/rooms"
                className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium"
              >
                {t.nav.rooms}
              </Link>
              <Link
                href="/careers"
                className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium"
              >
                {t.nav.careers}
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium"
              >
                {t.nav.contact}
              </Link>

              {/* Language Dropdown - Desktop */}
              <div className="relative ml-2" ref={langDropdownRef}>
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all font-medium"
                  aria-label="Select language"
                >
                  <FaGlobe className="text-lg" />
                  <span>{currentLang.code.toUpperCase()}</span>
                  <FaChevronDown className={`text-xs transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {langDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[150px] z-50 border border-gray-100">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full px-4 py-2.5 text-left text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors flex items-center gap-3 ${
                          language === lang.code ? 'bg-primary-50 text-primary-600' : ''
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/booking"
                className="ml-2 bg-primary-600 text-white px-6 py-2.5 rounded-full hover:bg-primary-700 transition-all font-semibold shadow-md hover:shadow-lg"
              >
                {t.nav.bookNow}
              </Link>
            </div>

            <div className="lg:hidden flex items-center gap-3">
              {/* Mobile Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="text-gray-700 hover:text-primary-600 transition-colors p-2 flex items-center gap-1"
                  aria-label="Select language"
                >
                  <FaGlobe className="text-xl" />
                  <FaChevronDown className="text-xs" />
                </button>
                {langDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[140px] z-50 border border-gray-100">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`w-full px-4 py-2.5 text-left text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors flex items-center gap-3 ${
                          language === lang.code ? 'bg-primary-50 text-primary-600' : ''
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary-600 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden bg-white border-t border-gray-100 mt-4 rounded-2xl shadow-xl overflow-hidden">
              <div className="py-4">
                <Link
                  href="/"
                  className="block px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.home}
                </Link>
                <Link
                  href="/about"
                  className="block px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.about}
                </Link>
                <Link
                  href="/rooms"
                  className="block px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.rooms}
                </Link>
                <Link
                  href="/careers"
                  className="block px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.careers}
                </Link>
                <Link
                  href="/contact"
                  className="block px-6 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {t.nav.contact}
                </Link>
                <div className="px-6 pt-4 pb-2">
                  <Link
                    href="/booking"
                    className="block w-full bg-primary-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-primary-700 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.bookNow}
                  </Link>
                </div>
                <div className="px-6 py-3 border-t border-gray-100 mt-2">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <FaPhone className="text-primary-500" />
                    <a href="tel:+381000000000">+381 00 000 0000</a>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                    <FaEnvelope className="text-primary-500" />
                    <a href="mailto:info@hotelizvordoo.com">info@hotelizvordoo.com</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
