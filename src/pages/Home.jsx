// src/pages/Home.jsx
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import AmericanFootballUniform from "../assets/prodoct/img1.png";
import BaseballUniform from "../assets/prodoct/img2.png";
import BasketballUniform from "../assets/prodoct/img3.png";
import RugbyUniform from "../assets/prodoct/img4.png";
import SoccerUniform from "../assets/prodoct/img5.png";
import IceHockeyUniform from "../assets/prodoct/img6.png";
import GolfUniform from "../assets/prodoct/img7.png";
import TennisUniform from "../assets/prodoct/img8.png";
import CyclingUniform from "../assets/prodoct/img9.png";
import CricketUniform from "../assets/prodoct/img10.png";

// Replace these with your actual images
import img1 from "../assets/bg1.png";
import img2 from "../assets/bg2.png";
import img3 from "../assets/bg3.png";

const images = [img1, img2, img3];

export default function Home() {
  // State hooks
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide for desktop
  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const imageSrc = isMobile ? images[0] : images[currentIndex];

  // Imports

  // Sports Data
  const sports = [
    {
      title: "American Football Uniforms",
      desc: "We are one of the best sportswear manufacturer and exporter, We can manufacture American football uniforms in any size and design for both men and women.",
      img: AmericanFootballUniform,
      link: "/sportswear/american-football-uniforms",
      men: "/sportswear/american-football-uniforms/?wpf_filter_cat_0=114",
      women: "/sportswear/american-football-uniforms/?wpf_filter_cat_0=115",
    },
    {
      title: "Baseball Uniforms",
      desc: "We make premium quality uniforms & jerseys for basketball in all sizes for both men and women, share your requirements with us and we will manufacture them for you.",
      img: BaseballUniform,
      link: "/sportswear/baseball-uniforms",
      men: "/sportswear/baseball-uniforms/?wpf_filter_cat_0=120",
      women: "/sportswear/baseball-uniforms/?wpf_filter_cat_0=121",
    },
    {
      title: "Basketball Uniforms",
      desc: "We are the leading provider of basketball uniforms, including jerseys and shorts. We serve customers ranging from youth to professional teams which play in leagues & tournaments.",
      img: BasketballUniform,
      link: "/sportswear/basketball-uniforms",
      men: "/sportswear/basketball-uniforms/?wpf_filter_cat_0=126",
      women: "/sportswear/basketball-uniforms/?wpf_filter_cat_0=127",
    },
    {
      title: "Soccer / Football Uniforms",
      desc: "We are one of the best sportswear manufacturer, supplier & exporter, We can manufacture custom soccer uniform & football uniform in any size and design for both men and women.",
      img: SoccerUniform,
      link: "/sportswear/soccer-uniforms",
      men: "/sportswear/soccer-uniforms/?wpf_filter_cat_0=165",
      women: "/sportswear/soccer-uniforms/?wpf_filter_cat_0=166",
    },
    {
      title: "Rugby Uniforms",
      desc: "You are in the right place for rugby uniforms and jerseys, custom warm-ups, team kits, and much more. We have everything you need to look stunning on the pitch.",
      img: RugbyUniform,
      link: "/sportswear/rugby-uniforms",
      men: "/sportswear/rugby-uniforms/?wpf_filter_cat_0=159",
      women: "/sportswear/rugby-uniforms/?wpf_filter_cat_0=160",
    },
    {
      title: "Ice Hockey Uniforms",
      desc: "We make high-performance custom hockey jerseys & uniforms for professional teams and clubs. We manufacture custom-made uniforms that provide comfort and are durable as well.",
      img: IceHockeyUniform,
      link: "/sportswear/ice-hockey-uniforms",
      men: "/sportswear/ice-hockey-uniforms/?wpf_filter_cat_0=152",
      women: "/sportswear/ice-hockey-uniforms/?wpf_filter_cat_0=153",
    },
    {
      title: "Golf Clothing",
      desc: "We are one of the best sportswear manufacturer and exporter, We can manufacture customized golf clothing in any size and design for both men and women.",
      img: GolfUniform,
      link: "/sportswear/golf-clothing",
      men: "/sportswear/golf-clothing/?wpf_filter_cat_0=144",
      women: "/sportswear/golf-clothing/?wpf_filter_cat_0=145",
    },
    {
      title: "Tennis Clothing",
      desc: "We manufacture premium quality tennis clothing at competitive prices of any size for both men and women, share your requirements with us and we will manufacture them for you.",
      img: TennisUniform,
      link: "/sportswear/tennis-clothing",
      men: "/sportswear/tennis-clothing/?wpf_filter_cat_0=171",
      women: "/sportswear/tennis-clothing/?wpf_filter_cat_0=172",
    },
    {
      title: "Cycling Clothing",
      desc: "We are the manufacturer of premium quality cycling clothing with a lot of customization options available which includes a very vast collection of colors, designs, and features.",
      img: CyclingUniform,
      link: "/sportswear/cycling-clothing",
      men: "/sportswear/cycling-clothing/?wpf_filter_cat_0=138",
      women: "/sportswear/cycling-clothing/?wpf_filter_cat_0=139",
    },
    {
      title: "Cricket Uniforms",
      desc: "We make premium quality cricket uniforms at competitive prices of any size for both men and women, share your requirements with us and we will take care of the rest.",
      img: CricketUniform,
      link: "/sportswear/cricket-uniforms",
      men: "/sportswear/cricket-uniforms/?wpf_filter_cat_0=132",
      women: "/sportswear/cricket-uniforms/?wpf_filter_cat_0=133",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-red-700 to-red-900 text-white py-16 px-4">
        <div className="max-w-[1200px] mx-auto">
          {/* Hero Image Slider */}
          <div
            className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/50 flex items-center justify-start">
              <div className="max-w-2xl text-white px-6 md:px-12 lg:ml-16">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mt-12">
                  Sportswear &amp; Team Uniforms Manufacturer
                </h1>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition">
                    Shop Now
                  </button>
                  <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold bg-transparent hover:bg-white/10 transition">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Private Label Sportswear &amp; Team Uniform Manufacturer and
              Exporter
            </h2>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed">
              Customizable Sportswear Manufacturer, Exporter, &amp; distributor
              from Sialkot, Pakistan. Get High-Quality Custom Sports apparel and
              Team uniforms including jerseys, pants, and shorts for men. We
              also make clothing for women &amp; youth at competitive prices.
            </p>
          </div>
        </div>
      </section>

      {/* SPORTS GRID */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {sports.map((sport, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                } bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow`}
              >
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-3 text-gray-800">
                    <Link
                      to={sport.link}
                      className="hover:text-red-600 transition"
                    >
                      {sport.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    {sport.desc}
                  </p>
                  <div className="flex gap-3">
                    <Link
                      to={sport.men}
                      className="bg-red-700 text-white px-5 py-2.5 rounded-md font-medium hover:bg-red-800 transition"
                    >
                      Men
                    </Link>
                    <Link
                      to={sport.women}
                      className="bg-gray-800 text-white px-5 py-2.5 rounded-md font-medium hover:bg-black transition"
                    >
                      Women
                    </Link>
                  </div>
                </div>
                <div className="flex-1">
                  <Link to={sport.link}>
                    <img
                      src={sport.img}
                      alt={sport.title}
                      className="w-full h-64 md:h-full object-cover"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & CATALOGS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg border">
            <h4 className="text-2xl font-bold text-center mb-6 text-red-700">
              CONTACT US
            </h4>
            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition"
                />
                <input
                  type="email"
                  placeholder="Your Email*"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition"
                />
              </div>
              <input
                type="text"
                placeholder="Your Country*"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition"
              />
              <input
                type="tel"
                placeholder="Your Contact Number*"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition"
              />
              <textarea
                placeholder="Enter Your Message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600 transition resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-700 text-white py-3.5 rounded-lg font-bold text-lg hover:bg-red-800 transition shadow-md"
              >
                Submit Message
              </button>
            </form>
          </div>

          {/* Catalogs & Categories */}
          <div className="space-y-8">
            {/* Catalogs */}
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h4 className="text-xl font-bold text-center mb-5 text-gray-800">
                <a
                  href="https://janleticsports.com/catalogs/"
                  target="_blank"
                  rel="noopener"
                  className="hover:text-red-600 transition"
                >
                  CATALOGS
                </a>
              </h4>
              <ul className="space-y-3">
                {[
                  {
                    text: "Sportswear Catalog",
                    link: "https://janleticsports.com/3d-flip-book/sportswear-catalog-janletic-sports-sialkot-pakistan/",
                  },
                  {
                    text: "Activewear Catalog",
                    link: "https://janleticsports.com/3d-flip-book/activewear-catalog-janletic-sports-sialkot-pakistan/",
                  },
                  {
                    text: "Casual Wear Catalog",
                    link: "https://janleticsports.com/3d-flip-book/casual-wear-catalog-janletic-sports-sialkot-pakistan/",
                  },
                  {
                    text: "Gloves Catalog",
                    link: "https://janleticsports.com/3d-flip-book/gloves-catalog-janletic-sports-sialkot-pakistan/",
                  },
                  {
                    text: "Accessories Catalog",
                    link: "https://janleticsports.com/3d-flip-book/accessories-catalog-janletic-sports-sialkot-pakistan/",
                  },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-red-600 text-lg">→</span>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-red-600 font-medium transition"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other Categories */}
            <div className="bg-white p-6 rounded-xl shadow-md border">
              <h4 className="text-xl font-bold text-center mb-5 text-gray-800">
                OTHER CATEGORIES
              </h4>
              <ul className="space-y-3">
                {[
                  { text: "Sportswear", link: "/sportswear" },
                  { text: "Activewear", link: "/activewear" },
                  { text: "Casual Wear", link: "/casual-wear" },
                  { text: "Gloves", link: "/gloves" },
                  { text: "Accessories", link: "/accessories" },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-red-600 text-lg">→</span>
                    <Link
                      to={item.link}
                      className="text-gray-700 hover:text-red-600 font-medium transition"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
