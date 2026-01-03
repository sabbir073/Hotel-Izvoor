'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLeaf, FaArrowRight } from 'react-icons/fa';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-primary-700">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-serif font-bold mb-2">{t.footer.newsletterTitle}</h3>
              <p className="text-primary-100">{t.footer.newsletterDescription}</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder={t.footer.enterEmail}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-white/60 w-full sm:w-80"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold whitespace-nowrap"
              >
                {t.footer.subscribe}
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="relative w-48 h-14 mb-6">
              <Image
                src="/logo.webp"
                alt="Hotel Izvor d.o.o."
                fill
                sizes="192px"
                quality={95}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="flex items-center gap-2 text-primary-400 font-medium">
              <FaLeaf />
              <span>Est. 2003</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all"
                aria-label="Visit our Facebook page"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all"
                aria-label="Follow us on Twitter"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all"
                aria-label="Follow us on Instagram"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-full flex items-center justify-center transition-all"
                aria-label="Connect with us on LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative">
                {t.footer.quickLinks}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-500"></span>
              </span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link href="/rooms" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.rooms}</span>
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.footer.reservations}</span>
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.careers}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 group">
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{t.nav.contact}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative">
                {t.footer.ourServices}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-500"></span>
              </span>
            </h3>
            <ul className="space-y-3">
              <li className="text-gray-400">{t.footer.services.spaWellness}</li>
              <li className="text-gray-400">{t.footer.services.thermalPool}</li>
              <li className="text-gray-400">{t.footer.services.restaurantBar}</li>
              <li className="text-gray-400">{t.footer.services.fitnessCenter}</li>
              <li className="text-gray-400">{t.footer.services.conferenceRooms}</li>
              <li className="text-gray-400">{t.footer.services.roomService}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative">
              <span className="relative">
                {t.footer.contact}
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-primary-500"></span>
              </span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{t.footer.contactLabels.address}</p>
                  <p className="text-gray-400 text-sm">Mišarska BB, 34300<br />Aranđelovac, Serbia</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{t.footer.contactLabels.phone}</p>
                  <a
                    href="tel:+381000000000"
                    className="text-gray-400 text-sm hover:text-primary-400 transition-colors"
                  >
                    +381 00 000 0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{t.footer.contactLabels.email}</p>
                  <a
                    href="mailto:info@hotelizvordoo.com"
                    className="text-gray-400 text-sm hover:text-primary-400 transition-colors"
                  >
                    info@hotelizvordoo.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {t.footer.rights}
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-primary-400 transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-primary-400 transition-colors">
                {t.footer.termsOfService}
              </Link>
            </div>
            <div className="text-gray-500 text-sm">
              PIB: 102705684 | MB: 17772503
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
