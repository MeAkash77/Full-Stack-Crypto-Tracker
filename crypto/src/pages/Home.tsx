import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaBitcoin, FaWallet, FaGlobe, FaShieldAlt } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { FiArrowRight, FiInfo } from 'react-icons/fi';
import { Link } from "react-router-dom";
import cryptoImage from '../assets/crypto.webp';
import cryptoImage1 from '../assets/crypto1.png';

const Home: React.FC = () => {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const particlesOptions = {
    background: { color: { value: "#0d1117" } },
    particles: {
      color: { value: "#00FFCC" },
      links: { enable: true, color: "#00FFCC", distance: 150 },
      move: { enable: true, speed: 1.5 },
      size: { value: { min: 1, max: 4 } },
      opacity: { value: { min: 0.3, max: 0.7 } },
    },
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100 font-sans min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 text-center relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particlesOptions}
          className="absolute top-0 left-0 h-full w-full"
        />

        <motion.div
          className="max-w-4xl z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 drop-shadow-lg">
            Welcome to Crypto World <FaBitcoin className="inline-block mr-3 text-cyan-500" />
          </h1>
          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300">
            Learn, invest, and explore the future of digital currencies.
          </p>
          <div className="mt-10 flex flex-wrap sm:flex-nowrap justify-center gap-4">
            <Link to="/coins">
              <motion.button
                className="flex items-center justify-center bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-500 hover:from-teal-600 hover:to-cyan-600 text-white py-2 sm:py-3 px-6 sm:px-8 rounded-md text-sm sm:text-base font-medium shadow-md transition duration-300 transform hover:scale-105 gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <FiArrowRight className="text-white" />
                Get Started
              </motion.button>
            </Link>

            <Link to="/compare">
              <motion.button
                className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-cyan-400 py-2 sm:py-3 px-6 sm:px-8 rounded-md text-sm sm:text-base font-medium shadow-md transition duration-300 transform hover:scale-105 gap-2"
                whileHover={{ scale: 1.1 }}
              >
                <FiInfo className="text-cyan-400" />
                Learn More
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* About Sections */}
      {/* ... (the rest of your sections remain unchanged) ... */}

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <motion.h2
          className="text-4xl font-extrabold text-center text-teal-400 mb-16 drop-shadow-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Cryptocurrency?
        </motion.h2>

        <div className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Key <span className="text-teal-400">Features</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <FeatureCard
                icon={<FaShieldAlt className="text-teal-400 text-6xl mb-4" />}
                title="Secure Transactions"
                description="Blockchain ensures secure, transparent, and tamper-proof transactions."
                bg="bg-gray-800"
              />
              <FeatureCard
                icon={<FaBitcoin className="text-teal-400 text-6xl mb-4" />}
                title="Decentralized"
                description="Eliminates the need for intermediaries, offering direct peer-to-peer interactions."
                bg="bg-gray-800"
              />
              <FeatureCard
                icon={<FaGlobe className="text-teal-400 text-6xl mb-4" />}
                title="Global Reach"
                description="Cryptocurrencies enable borderless transactions across the world."
                bg="bg-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black text-center">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Ready to Join the Future?</h2>
        <p className="text-lg text-gray-300 mb-10">
          Start your cryptocurrency journey today. Invest, learn, and grow.
        </p>
        <Link to="/Auth">
          <button className="bg-gradient-to-r from-teal-500 to-teal-600 text-white py-3 px-8 rounded-lg text-lg font-medium shadow-lg transition duration-300 hover:from-teal-600 hover:to-teal-500 hover:shadow-xl">
            Join Now
          </button>
        </Link>
      </section>
    </div>
  );
};

const MarketCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({
  icon,
  title,
  description,
}) => (
  <motion.div
    className="bg-gray-900 p-6 rounded-lg shadow-md text-center border-2 border-transparent hover:border-teal-400 hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-teal-400 mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bg?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, bg = "bg-gray-900" }) => (
  <motion.div
    className={`${bg} p-6 rounded-lg shadow-md text-center border-2 border-transparent hover:border-teal-400 hover:shadow-lg transition duration-300 transform hover:-translate-y-2`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-teal-400 mb-4">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </motion.div>
);

export default Home;
