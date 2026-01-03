'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaWifi, FaSwimmingPool, FaSpa, FaCoffee, FaConciergeBell, FaParking, FaLeaf, FaDumbbell, FaStar, FaCalendarAlt, FaUsers, FaMountain, FaHotTub, FaTree, FaQuoteLeft, FaArrowRight, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('2');

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Split Design */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-home.webp"
            alt="Hotel Izvor d.o.o. mountain wellness resort in Aranđelovac Serbia with peaceful natural surroundings"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover"
            priority
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-primary-600/20 border border-primary-500/30 rounded-full px-4 py-2 mb-6">
                <FaLeaf className="text-primary-400" />
                <span className="text-primary-300 text-sm font-medium">{t.home.wellnessRetreat}</span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight">
                {t.hero.title}
              </h1>

              <p className="text-xl md:text-2xl mb-4 text-gray-200">
                {t.hero.subtitle}
              </p>

              <p className="text-lg mb-8 text-gray-300 max-w-xl">
                {t.hero.description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t.hero.searchRooms}
                  <FaArrowRight />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all font-semibold"
                >
                  {t.nav.about}
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20">
                <div>
                  <div className="text-3xl font-bold text-primary-400">20+</div>
                  <div className="text-gray-400 text-sm">{t.home.stats.yearsExperience}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-400">4★</div>
                  <div className="text-gray-400 text-sm">{t.home.stats.hotelRating}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-400">98%</div>
                  <div className="text-gray-400 text-sm">{t.home.stats.happyGuests}</div>
                </div>
              </div>
            </div>

            {/* Right Side - Booking Widget */}
            <div className="hidden lg:block">
              <div className="bg-white rounded-3xl p-8 shadow-2xl max-w-md ml-auto">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">{t.home.bookYourStay}</h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="check-in-date" className="block text-gray-700 text-sm font-medium mb-2">
                      <FaCalendarAlt className="inline mr-2 text-primary-600" />
                      {t.hero.checkIn}
                    </label>
                    <input
                      id="check-in-date"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="check-out-date" className="block text-gray-700 text-sm font-medium mb-2">
                      <FaCalendarAlt className="inline mr-2 text-primary-600" />
                      {t.hero.checkOut}
                    </label>
                    <input
                      id="check-out-date"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-gray-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="guests-select" className="block text-gray-700 text-sm font-medium mb-2">
                      <FaUsers className="inline mr-2 text-primary-600" />
                      {t.hero.guests}
                    </label>
                    <select
                      id="guests-select"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-900 bg-gray-50"
                    >
                      <option value="1">{t.home.guestsSelect.guest1}</option>
                      <option value="2">{t.home.guestsSelect.guest2}</option>
                      <option value="3">{t.home.guestsSelect.guest3}</option>
                      <option value="4">{t.home.guestsSelect.guest4}</option>
                      <option value="5">{t.home.guestsSelect.guest5plus}</option>
                    </select>
                  </div>

                  <Link
                    href="/booking"
                    className="block w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-all font-semibold text-center text-lg mt-6"
                  >
                    {t.home.checkAvailability}
                  </Link>
                </div>

                <p className="text-center text-gray-500 text-sm mt-4">{t.home.bestRateGuarantee}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Booking Button */}
        <div className="lg:hidden fixed bottom-6 left-4 right-4 z-50">
          <Link
            href="/booking"
            className="block w-full bg-primary-600 text-white py-4 rounded-xl hover:bg-primary-700 transition-all font-semibold text-center shadow-lg"
          >
            {t.home.bookYourStay}
          </Link>
        </div>
      </section>

      {/* Features Section - Card Style */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-medium uppercase tracking-wider">{t.home.whyChoose.title}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-4">{t.home.whyChoose.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.home.whyChoose.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaMountain className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.location.title}</h3>
              <p className="text-gray-600">{t.features.location.description}</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaSpa className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.spa.title}</h3>
              <p className="text-gray-600">{t.features.spa.description}</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaConciergeBell className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.luxury.title}</h3>
              <p className="text-gray-600">{t.features.luxury.description}</p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-3xl border border-primary-100 hover:shadow-xl transition-all group">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaCoffee className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t.features.dining.title}</h3>
              <p className="text-gray-600">{t.features.dining.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - New */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero/hero-home.webp"
                  alt="Hotel Izvor wellness and spa facilities"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-primary-600 text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold">Since</div>
                <div className="text-5xl font-serif">2003</div>
              </div>
            </div>

            <div>
              <span className="text-primary-600 font-medium uppercase tracking-wider">{t.home.aboutSection.badge}</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-6">{t.home.aboutSection.title}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.home.aboutSection.description}
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-primary-600 text-sm" />
                  </div>
                  <span className="text-gray-700">{t.home.aboutSection.features.thermal}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-primary-600 text-sm" />
                  </div>
                  <span className="text-gray-700">{t.home.aboutSection.features.views}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-primary-600 text-sm" />
                  </div>
                  <span className="text-gray-700">{t.home.aboutSection.features.cuisine}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <FaCheck className="text-primary-600 text-sm" />
                  </div>
                  <span className="text-gray-700">{t.home.aboutSection.features.experience}</span>
                </li>
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all font-semibold"
              >
                {t.home.aboutSection.learnMore}
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section - Horizontal Cards */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-medium uppercase tracking-wider">{t.home.accommodation}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-4">{t.rooms.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.rooms.subtitle}</p>
          </div>

          <div className="space-y-8">
            {/* Standard Room */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-72 md:h-auto overflow-hidden">
                  <Image
                    src="/images/rooms/room-standard.webp"
                    alt="Cozy Standard Room at Hotel Izvor featuring comfortable furnishings and mountain views"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">25m²</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">{t.home.roomTags.mountainView}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-3">{t.rooms.types.standard.name}</h3>
                  <p className="text-gray-600 mb-6">{t.rooms.types.standard.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaWifi className="text-primary-600" /> {t.home.roomAmenities.freeWifi}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaCoffee className="text-primary-600" /> {t.home.roomAmenities.miniBar}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaConciergeBell className="text-primary-600" /> {t.home.roomAmenities.roomService}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">{t.rooms.from}</span>
                      <span className="text-3xl font-bold text-primary-700 ml-2">€150</span>
                      <span className="text-gray-500">/{t.rooms.perNight}</span>
                    </div>
                    <Link
                      href="/rooms"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all font-semibold"
                    >
                      {t.home.viewDetails}
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Deluxe Room */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-72 md:h-auto overflow-hidden md:order-2">
                  <Image
                    src="/images/rooms/room-deluxe.webp"
                    alt="Spacious Deluxe Room at Hotel Izvor with private balcony and panoramic nature views"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center md:order-1">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">35m²</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">{t.home.roomTags.privateBalcony}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-3">{t.rooms.types.deluxe.name}</h3>
                  <p className="text-gray-600 mb-6">{t.rooms.types.deluxe.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaWifi className="text-primary-600" /> {t.home.roomAmenities.freeWifi}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaTree className="text-primary-600" /> {t.home.roomAmenities.balcony}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaCoffee className="text-primary-600" /> {t.home.roomAmenities.breakfastIncluded}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">{t.rooms.from}</span>
                      <span className="text-3xl font-bold text-primary-700 ml-2">€250</span>
                      <span className="text-gray-500">/{t.rooms.perNight}</span>
                    </div>
                    <Link
                      href="/rooms"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all font-semibold"
                    >
                      {t.home.viewDetails}
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Suite */}
            <div className="bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl transition-all group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-72 md:h-auto overflow-hidden">
                  <Image
                    src="/images/rooms/room-suite.webp"
                    alt="Luxurious Suite at Hotel Izvor with separate living area, jacuzzi and stunning mountain views"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-gold-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {t.home.roomTags.mostPopular}
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">65m²</span>
                    <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">{t.home.roomTags.livingArea}</span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-3">{t.rooms.types.suite.name}</h3>
                  <p className="text-gray-600 mb-6">{t.rooms.types.suite.description}</p>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaHotTub className="text-primary-600" /> {t.home.roomAmenities.privateJacuzzi}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaSpa className="text-primary-600" /> {t.home.roomAmenities.spaAccess}
                    </span>
                    <span className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaConciergeBell className="text-primary-600" /> {t.home.roomAmenities.butlerService}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm text-gray-500">{t.rooms.from}</span>
                      <span className="text-3xl font-bold text-primary-700 ml-2">€450</span>
                      <span className="text-gray-500">/{t.rooms.perNight}</span>
                    </div>
                    <Link
                      href="/rooms"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-full hover:bg-primary-700 transition-all font-semibold"
                    >
                      {t.home.viewDetails}
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-2 border-2 border-primary-600 text-primary-700 px-8 py-4 rounded-full hover:bg-primary-600 hover:text-white transition-all font-semibold"
            >
              {t.home.viewAllRooms}
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Amenities Section - Grid with Icons */}
      <section className="py-24 bg-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <span className="text-primary-300 font-medium uppercase tracking-wider">{t.home.resortFacilities}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">{t.home.amenities.title}</h2>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">{t.home.amenities.subtitle}</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                <FaWifi className="text-3xl text-primary-300" />
              </div>
              <p className="font-medium">{t.home.amenities.freeWifi}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                <FaSwimmingPool className="text-3xl text-primary-300" />
              </div>
              <p className="font-medium">{t.home.amenities.swimmingPool}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                <FaSpa className="text-3xl text-primary-300" />
              </div>
              <p className="font-medium">{t.home.amenities.spaWellness}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                <FaDumbbell className="text-3xl text-primary-300" />
              </div>
              <p className="font-medium">{t.home.amenities.fitnessCenter}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                <FaParking className="text-3xl text-primary-300" />
              </div>
              <p className="font-medium">{t.home.amenities.freeParking}</p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all">
                <FaConciergeBell className="text-3xl text-primary-300" />
              </div>
              <p className="font-medium">{t.home.amenities.concierge}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary-600 font-medium uppercase tracking-wider">{t.home.guestReviews}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 mb-4">{t.home.testimonials.title}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.home.testimonials.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <FaQuoteLeft className="text-4xl text-primary-200 mb-6" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                &ldquo;{t.home.testimonials.review1.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-lg">M</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.home.testimonials.review1.name}</p>
                  <p className="text-sm text-gray-500">{t.home.testimonials.review1.country}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <FaQuoteLeft className="text-4xl text-primary-200 mb-6" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                &ldquo;{t.home.testimonials.review2.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-lg">A</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.home.testimonials.review2.name}</p>
                  <p className="text-sm text-gray-500">{t.home.testimonials.review2.country}</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all">
              <FaQuoteLeft className="text-4xl text-primary-200 mb-6" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-lg" />
                ))}
              </div>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                &ldquo;{t.home.testimonials.review3.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-lg">S</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.home.testimonials.review3.name}</p>
                  <p className="text-sm text-gray-500">{t.home.testimonials.review3.country}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Split with Image */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/hero-home.webp"
            alt="Hotel Izvor wellness experience"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <FaLeaf className="text-5xl text-primary-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.home.cta.title}</h2>
            <p className="text-xl text-primary-200 mb-10">{t.home.cta.subtitle}</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-lg"
              >
                {t.home.cta.button}
                <FaArrowRight />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all font-semibold"
              >
                {t.home.contactUs}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
