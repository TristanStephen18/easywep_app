import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, ChevronDown, Lock, CircleHelp, Globe, CreditCard, PiggyBank, Home, TrendingUp, HandCoins, Laptop, UserCheck, Percent, ChevronRight, Smartphone, ChevronUp, Calendar, Pencil } from 'lucide-react';
import tdLogo from '../../assets/td-logo.png';
import productsIcon from '../../assets/925-products-icon.svg';
import planYourMoveImage from '../../assets/plan-your-move-to-canada.jpeg';
import youthImage from '../../assets/youth.jpeg';
import studentImage from '../../assets/student.jpeg';
import postImage from '../../assets/post.jpeg';
import hero1Image from '../../assets/hero1.png';
import estatePlanImage from '../../assets/estateplan-smp-320x180.svg';
import digitalBanking1 from '../../assets/1.svg';
import digitalBanking2 from '../../assets/2.svg';
import adviceImage from '../../assets/advice.jpeg';
import digitalToolsImage from '../../assets/digital-tools-en.jpeg';
import manyWaysToBankImage from '../../assets/manywaystobank-en.svg';
import sustainabilityImage from '../../assets/sustainability.jpeg';
import readyCommitmentImage from '../../assets/ready-comitmnt-en.jpeg';
import customerImage from '../../assets/customer.jpg';
import publicationImage from '../../assets/publication.jpeg';
import footerChairImage from '../../assets/footer-chair.png';
import cdicBadgeImage from '../../assets/cdic-badge.jpeg';
import ciroLogoImage from '../../assets/ciro-logo-english.jpeg';

// Sub-component: Header - Complete 3-Tier Structure
const Header = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Tier 1: Top Utility Bar (Dark Green) */}
      <div className="bg-[#008a00] text-white h-[35px] flex items-center">
        <div className="max-w-[1440px] mx-auto w-full px-8 flex items-center justify-between">
          {/* Left Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="font-td text-[11px] leading-[15px] font-normal text-white">
              Personal
            </a>
            <a href="#" className="font-td text-[11px] leading-[15px] font-normal text-white/90 hover:text-white hover:underline">
              Small Business
            </a>
            <a href="#" className="font-td text-[11px] leading-[15px] font-normal text-white/90 hover:text-white hover:underline">
              Commercial
            </a>
            <a href="#" className="font-td text-[11px] leading-[15px] font-normal text-white/90 hover:text-white hover:underline">
              Investing
            </a>
            <a href="#" className="font-td text-[11px] leading-[15px] font-normal text-white/90 hover:text-white hover:underline">
              About TD
            </a>
          </div>

          
        </div>
      </div>

      {/* Tier 2: Brand & Actions Bar (White) */}
      <div className="bg-white h-[80px] flex items-center border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto w-full px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src={tdLogo} alt="TD Bank" className="h-12" />
          </div>

          {/* Right Utilities */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <button className="text-[#008a00] hover:text-black p-2 hover:bg-gray-50 rounded transition-colors">
              <Search size={20} />
            </button>

            {/* Location Icon */}
            <button className="text-[#008a00] hover:text-black p-2 hover:bg-gray-50 rounded transition-colors">
              <MapPin size={20} />
            </button>

            {/* Help Icon */}
            <button className="text-[#008a00] hover:text-black p-2 hover:bg-gray-50 rounded transition-colors">
              <CircleHelp size={20} />
            </button>


            {/* Region Selector */}
            <button className="flex items-center gap-1 text-[#008a00] hover:text-black hover:bg-gray-50 px-3 py-2 rounded transition-colors">
              <Globe size={18} />
              <span className="text-sm font-medium hover:underline">Canada</span>
              <ChevronDown size={14} />
            </button>

            {/* Language Selector */}
            <button className="flex items-center gap-1 text-[#008a00] hover:text-black hover:bg-gray-50 px-3 py-2 rounded transition-colors">
              <span className="text-sm font-medium hover:underline">English</span>
              <ChevronDown size={14} />
            </button>

            {/* Login Button with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center gap-2 bg-[#f4f8f4] text-[#1a5336] font-bold px-6 py-3 rounded transition-colors hover:bg-[#e8f0e8]"
              >
                <span className="text-sm">Login</span>
                <ChevronDown
                  size={14}
                  className={`text-[#008a00] transition-transform ${isLoginOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown Menu */}
              {isLoginOpen && (
                <div className="absolute right-0 top-full mt-2 min-w-[200px] bg-white shadow-xl rounded z-50 border border-gray-100">
                  <Link
                    to="/login"
                    className="block text-gray-700 px-4 py-3 hover:bg-gray-50 hover:text-[#008a00] transition-colors"
                  >
                    EasyWeb
                  </Link>
                  <a
                    href="#"
                    className="block text-gray-700 px-4 py-3 hover:bg-gray-50 hover:text-[#008a00] transition-colors"
                  >
                    WebBroker
                  </a>
                  <a
                    href="#"
                    className="block text-gray-700 px-4 py-3 hover:bg-gray-50 hover:text-[#008a00] transition-colors"
                  >
                    U.S. Banking
                  </a>
                  <a
                    href="#"
                    className="block text-gray-700 px-4 py-3 hover:bg-gray-50 hover:text-[#008a00] transition-colors"
                  >
                    My Accounts
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tier 3: Main Navigation (White) */}
      <div className="bg-white border-b border-gray-300">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <nav className="flex items-center gap-8 h-[60px]">
            {['Accounts', 'Credit Cards', 'Mortgages', 'Borrowing', 'Personal Investing', 'Insurance', 'Advice'].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-[#008a00] hover:text-black font-semibold text-[15px] flex items-center gap-1 transition-colors"
              >
                {link}
                <ChevronDown size={14} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

// Sub-component: ProductExploreGrid
const ProductExploreGrid = () => {
  const products = [
    {
      icon: CreditCard,
      title: "Find a chequing account",
      description: "For daily spending, making bill payments and more"
    },
    {
      icon: PiggyBank,
      title: "Find a savings account",
      description: "Accounts to help you grow your savings"
    },
    {
      icon: CreditCard,
      title: "Find a credit card",
      description: "TD credit cards offer a host of benefits and features"
    },
    {
      icon: Home,
      title: "Explore mortgage options",
      description: "Get specialized advice to help with your home ownership journey"
    },
    {
      icon: TrendingUp,
      title: "Personal investing",
      description: "Registered plans and investments to help you reach your goals"
    },
    {
      icon: HandCoins,
      title: "Borrowing",
      description: "Find a borrowing option that fits your life"
    },
    {
      icon: Laptop,
      title: "Invest and trade online",
      description: "TD Direct Investing – innovative tools for self-directed investors"
    },
    {
      icon: UserCheck,
      title: "Personalized wealth advice",
      description: "Goals-based planning and advice with a TD Wealth advisor"
    },
    {
      icon: Percent,
      title: "Today's rates",
      description: "Current rates for borrowing & investing products"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Headers */}
        <h2 className="text-center text-[#1a5336] text-[30px] font-bold mb-3">
          Welcome to TD Personal Banking
        </h2>
        <p className="text-center text-[#1a5336] text-[22px] leading-[31px] font-medium mb-12">
          Explore TD Canada Trust and related products and services
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                {/* Icon Bubble */}
                <div className="w-20 h-20 rounded-full border border-[#008a00] flex items-center justify-center shrink-0 hover:bg-[#008a00] transition-colors group cursor-pointer">
                  <IconComponent size={32} className="text-[#1a5336] group-hover:text-white transition-colors" />
                </div>

                {/* Text Group */}
                <div className="flex-1">
                  <h3 className="text-[#008a00] font-bold text-[15px] flex items-center gap-1">
                    {product.title}
                    <ChevronDown size={14} className="rotate-[-90deg]" />
                  </h3>
                  <p className="text-gray-600 text-[14px] leading-relaxed mt-1">
                    {product.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Sub-component: ProductFinder
const ProductFinder = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Column 1: Text Content */}
          <div className="max-w-xl">
            <h2 className="text-[#1a5336] text-[22px] leading-[31px] font-medium">
              Need help finding the right TD products?
            </h2>
            <p className="text-[rgb(28,28,28)] mt-4 mb-8 text-[15px] leading-[23px] font-normal">
              Just answer a few questions and we can better help direct you to achieving your goals.
            </p>
            <button className="bg-[#008a00] text-white font-bold px-16 py-3 rounded-none hover:bg-[#006d00] transition-colors">
              Get started
            </button>
          </div>

          {/* Column 2: Illustration */}
          <div className="relative flex items-center justify-center h-[200px]">
            <img src={productsIcon} alt="TD Products" className="w-auto h-[180px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component: PlanYourMove
const PlanYourMove = () => {
  return (
    <section className="bg-[#f4f8f4] py-16">
      <div className="max-w-[1000px] mx-auto px-6">
        {/* Headline */}
        <h2 className="text-[#1a5336] text-2xl font-bold text-center mb-8">
          Plan your move to Canada
        </h2>

        {/* Content Layout - Flex Row */}
        <div className="flex items-start gap-8">
          {/* Left Column: Image */}
          <div className="flex-shrink-0">
            <img
              src={planYourMoveImage}
              alt="Person planning move to Canada"
              className="w-[500px] h-auto"
            />
          </div>

          {/* Right Column: Text & Action */}
          <div>
            <p className="text-gray-700 text-[14px] leading-relaxed mb-6">
              Start learning about the Canadian banking system, the immigration process and what you could expect when you arrive.
            </p>
            <button className="bg-[#008a00] text-white font-bold text-sm px-10 py-3 hover:bg-[#006d00] transition-colors">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component: TDAdvice
const TDAdvice = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Headline */}
        <h2 className="text-[#1a5336] text-3xl font-bold mb-6">
          TD Advice - ready to help you move forward
        </h2>

        {/* Body Paragraph */}
        <p className="text-[#1d1d1d] text-base leading-relaxed max-w-3xl mb-10">
          Looking for financial advice? Read through our articles, videos, and tools with helpful information for everyday banking, borrowing, saving and financial planning needs.
        </p>

        {/* Button */}
        <button className="bg-[#008a00] text-white font-bold px-20 py-3 rounded-none hover:bg-[#006d00] transition-colors">
          Learn more
        </button>
      </div>
    </section>
  );
};

// Sub-component: FinancialFuture
const FinancialFuture = () => {
  const cards = [
    {
      image: youthImage,
      title: "I'm a teen/parent",
      description: "It's never too late - or too early - to plan for your financial future. Check out our convenient banking options to help you grow and manage your money.",
      buttonText: "Get started"
    },
    {
      image: studentImage,
      title: "I'm a student",
      description: "Discover TD banking solutions and resources to help you gain confidence about staying on top of your finances while in school.",
      buttonText: "Start planning"
    },
    {
      image: postImage,
      title: "I'm a post grad/young adult",
      description: "From everyday banking to investment advice, we're here to help you improve your financial game.",
      buttonText: "Enter your next phase"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Headline */}
        <h2 className="text-[#1a5336] text-3xl font-bold text-center mb-12">
          Plan for your financial future with our unique banking solutions
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col">
              {/* Image */}
              <div className="w-full">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content Box */}
              <div className="bg-[#f9fcf9] p-8 text-center flex-1 flex flex-col">
                <h3 className="text-gray-900 font-bold text-lg mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  {card.description}
                </p>
                <button className="w-full border-2 border-[#008a00] text-[#008a00] font-bold py-3 bg-transparent hover:bg-[#008a00] hover:text-white transition-colors mt-auto">
                  {card.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component: FraudProtection
const FraudProtection = () => {
  const cards = [
    {
      heading: "How TD protects you",
      text: "Using security features and tools like TD Fraud Alerts, TD Transaction Alerts, Two-Step Verification, Card Controls, and more, we're trying our best to help you safeguard your finances and protect you and your family from being victims of fraud.",
      buttonText: "Explore more"
    },
    {
      heading: "Protecting yourself and your family",
      text: "Some scams are common to everyone, while the others are designed to the specifically target the youth, seniors and newcomers to Canada. We can help you learn how to the spot various fraud and scams aimed both at you and your loved the ones.",
      buttonText: "Find out how"
    }
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-[#1a5336] text-3xl font-bold text-center mb-6">
          Protect yourself against fraud
        </h2>

        {/* Section Description */}
        <p className="text-[#1d1d1d] text-base text-center max-w-5xl mx-auto mb-12 leading-relaxed">
          While we make every effort to secure your personal information, there's plenty you can do to avoid falling prey to fraud and identity theft. Through awareness and good online habits, you can spot scam attempts and significantly reduce your risk before it happens.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div key={index} className="bg-[#f9f9f9] p-10 text-center">
              <h3 className="text-gray-900 font-bold text-lg mb-4">
                {card.heading}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-8">
                {card.text}
              </p>
              <button className="w-full bg-[#008a00] text-white font-bold py-3 rounded-sm hover:bg-[#006d00] transition-colors">
                {card.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component: EstatePlanning
const EstatePlanning = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-[900px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <h2 className="text-[#1a5336] text-[22px] leading-[31px] font-bold mb-6">
              Estate planning and settlement advice
            </h2>
            <p className="text-[rgb(28,28,28)] text-[15px] leading-[23px] font-normal mb-8">
              If you are looking for information on how to plan your own Estate or need support with settling an Estate of a loved one, we're here to help.
            </p>
            <button className="bg-[#008a00] text-white font-bold px-16 py-3 rounded-none hover:bg-[#006d00] transition-colors">
              Learn more
            </button>
          </div>

          {/* Right Column: Icon */}
          <div className="flex items-center justify-center">
            <img src={estatePlanImage} alt="Estate Planning" className="w-64 h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component: DigitalBanking
const DigitalBanking = () => {
  return (
    <section className="bg-white">
      {/* Part 1: Financial Health */}
      <div className="py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#1a5336] text-2xl font-bold mb-4">
            Check your financial health
          </h2>
          <p className="text-gray-700 mb-8">
            Try the Financial Health Assessment Tool. This tool can help assess your financial health and provide tips and information by answering a few questions.
          </p>
          <button className="bg-[#008a00] text-white font-bold px-32 py-3 rounded-none hover:bg-[#006d00] transition-colors">
            Get started
          </button>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 my-4" />

      {/* Part 2: Digital Banking */}
      <div className="py-12 px-6">
        <h2 className="text-[#1a5336] text-2xl font-bold text-center mb-12">
          It's never been more important to bank digitally
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          {/* Column 1: Easy, safe and secure banking */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img src={digitalBanking1} alt="Digital Banking" className="w-48 h-auto" />
            </div>
            <h3 className="text-gray-900 font-bold text-lg mb-2">
              Easy, safe and secure banking from home
            </h3>
            <p className="text-gray-600 mb-6">
              At this time, we encourage you to bank digitally.
            </p>
            <button className="bg-[#008a00] text-white font-bold px-24 py-3 rounded-none hover:bg-[#006d00] transition-colors">
              Learn more
            </button>
          </div>

          {/* Column 2: Bank from anywhere with confidence */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <img src={digitalBanking2} alt="Digital Banking Tutorials" className="w-48 h-auto" />
            </div>
            <h3 className="text-gray-900 font-bold text-lg mb-2">
              Bank from anywhere with confidence
            </h3>
            <p className="text-gray-600 mb-6">
              It's easy to get started with online and mobile banking.
            </p>
            <button className="bg-[#008a00] text-white font-bold px-24 py-3 rounded-none hover:bg-[#006d00] transition-colors">
              View All Tutorials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component: UpdatesFromUs
const UpdatesFromUs = () => {
  return (
    <section className="bg-[#f4f8f4] py-16">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-[#1a5336] text-2xl font-bold text-center mb-10">
          Updates from us
        </h2>

        {/* Grid Part 1: Top Row - Text Cards (3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-gray-900 font-bold text-sm mb-4">
              Personal TD Chequing Accounts
            </h3>
            <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
              Pay bills, send money, make purchases, and manage your cash flow.
            </p>
            <a href="#" className="text-[#008a00] font-bold text-sm flex items-center gap-1">
              Learn more
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-gray-900 font-bold text-sm mb-4">
              Accelerate your savings
            </h3>
            <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
              Get a premium rate with TD Growth Savings Account
            </p>
            <a href="#" className="text-[#008a00] font-bold text-sm flex items-center gap-1">
              Find out more
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-sm">
            <h3 className="text-gray-900 font-bold text-sm mb-4">
              Looking for a TD Credit Card?
            </h3>
            <p className="text-gray-600 text-sm mb-6 min-h-[40px]">
              Our Credit Card Selector Tool can help you choose.
            </p>
            <a href="#" className="text-[#008a00] font-bold text-sm flex items-center gap-1">
              Learn more
              <ChevronRight size={16} />
            </a>
          </div>
        </div>

        {/* Grid Part 2: Bottom Row - Rich Cards (2 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Card Left */}
          <div className="bg-white flex flex-row">
            {/* Image */}
            <div className="w-1/3 p-6">
              <img
                src={adviceImage}
                alt="Get advice virtually or in person"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="text-gray-900 font-bold text-sm mb-2">
                Get advice virtually, or in person.
              </h3>
              <p className="text-gray-600 text-xs mb-4">
                Ask a TD advisor and get the advice you need.
              </p>
              <button className="w-full border-2 border-[#008a00] text-[#008a00] font-bold py-2 bg-transparent hover:bg-[#008a00] hover:text-white transition-colors mt-auto">
                Learn more
              </button>
            </div>
          </div>

          {/* Card Right */}
          <div className="bg-white flex flex-row">
            {/* Image */}
            <div className="w-1/3 p-6">
              <img
                src={digitalToolsImage}
                alt="Digital Tools"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="flex-1 p-6 flex flex-col">
              <h3 className="text-gray-900 font-bold text-sm mb-2">
                Digital Tools
              </h3>
              <p className="text-gray-600 text-xs mb-4">
                Our digital tools are safe and secure, and help make everyday banking easy.
              </p>
              <button className="w-full border-2 border-[#008a00] text-[#008a00] font-bold py-2 bg-transparent hover:bg-[#008a00] hover:text-white transition-colors mt-auto">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sub-component: WhyBankWithTD
const WhyBankWithTD = () => {
  const communityCards = [
    {
      image: sustainabilityImage,
      title: "Sustainability",
      description: "Learn how we're embedding sustainability into our business"
    },
    {
      image: readyCommitmentImage,
      title: "TD Ready Commitment",
      description: "We're targeting $1 billion in community giving by 2030"
    },
    {
      image: customerImage,
      title: "Customer Appreciation",
      description: "We're celebrating 10 years of #TDThanksYou with chances for our customers to win prizes"
    },
    {
      image: publicationImage,
      title: "Publications",
      description: "2024 Public Accountability Statement is now available"
    }
  ];

  return (
    <section className="bg-white">
      {/* Part 1: Why Bank with TD */}
      <div className="max-w-[1000px] mx-auto py-16 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column: Text */}
          <div className="flex-1">
            <h2 className="text-[#1a5336] text-2xl font-bold mb-6">
              Why Bank with TD
            </h2>
            <h3 className="text-[#1d1d1d] font-bold text-lg mb-2">
              Convenient banking
            </h3>
            <p className="text-gray-600 text-sm max-w-md">
              At TD, there are so many ways to bank. You can bank online, in branch, on the phone and with the TD apps.
            </p>
          </div>

          {/* Right Column: SVG Illustration */}
          <div>
            <img src={manyWaysToBankImage} alt="Many ways to bank" className="w-auto h-24" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-50">
        <hr className="border-t border-gray-300 my-12" />
      </div>

      {/* Part 2: TD Enriches Lives */}
      <div className="px-6 pb-16">
        <h2 className="text-[#1a5336] text-2xl font-bold text-center mb-10">
          See the ways in which TD enriches lives
        </h2>

        {/* 4-Column Grid - Gap Between Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 max-w-[1440px] mx-auto px-6">
          {communityCards.map((card, index) => (
            <div
              key={index}
              className="relative h-[400px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              {/* White Card Container - Compact at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white px-4 py-6 flex flex-col items-center text-center">
                {/* Title */}
                <a href="#" className="text-[#008a00] font-bold text-base flex items-center justify-center gap-1 mb-3 hover:underline">
                  {card.title}
                  <ChevronRight size={16} />
                </a>
                {/* Description */}
                <p className="text-[#1d1d1d] text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sub-component: QuestionSection
const QuestionSection = () => {
  return (
    <section className="bg-[#f1f1f1] py-16 px-6">
      <div className="max-w-[1000px] mx-auto">
        {/* Heading */}
        <h2 className="text-[#1a5336] text-2xl font-bold mb-6">
          Have a question? Find answers here
        </h2>

        {/* Search Bar and Button */}
        <div className="flex gap-4">
          {/* Search Input */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="What's your question?"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 focus:outline-none focus:border-[#008a00]"
            />
          </div>

          {/* Ask Us Button */}
          <button className="bg-[#008a00] text-white font-bold px-12 py-3 hover:bg-[#006d00] transition-colors">
            Ask Us
          </button>
        </div>

        {/* Popular Questions Link */}
        <div className="mt-4">
          <a href="#" className="text-[#008a00] font-bold text-sm flex items-center gap-1 hover:underline">
            Popular questions
            <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

// Sub-component: Footer
const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Zone 1: Main Footer */}
      <div className="bg-[#f9f9f9] border-t border-gray-200 pt-10 pb-20">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Part A: Top Utilities */}
          <div className="flex justify-between items-center mb-10">
            {/* Left Side: Find Us & Help */}
            <div className="flex items-center gap-8">
              <a href="#" className="flex items-center gap-2 text-gray-800 font-bold hover:underline">
                <MapPin size={20} className="text-[#008a00]" />
                Find Us
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-800 font-bold hover:underline">
                <CircleHelp size={20} className="text-[#008a00]" />
                Help
              </a>
            </div>

            {/* Right Side: Back to Top Button */}
            <button
              onClick={handleBackToTop}
              className="bg-white border border-[#008a00] text-[#008a00] font-bold px-4 py-2 rounded-sm flex items-center gap-2 hover:bg-[#008a00] hover:text-white transition-colors"
            >
              Back to top
              <ChevronUp size={16} />
            </button>
          </div>

          {/* Part B: 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Column 1: Contact Us (Special) */}
            <div>
              <h3 className="text-gray-900 text-lg font-bold mb-6">Contact Us</h3>
              <div className="flex flex-col gap-4">
                <a href="#" className="flex items-center gap-2 text-gray-600 text-sm hover:underline">
                  <Smartphone size={18} className="text-[#008a00]" />
                  Call us
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-600 text-sm hover:underline">
                  <Calendar size={18} className="text-[#008a00]" />
                  Book an appointment
                </a>
                <a href="#" className="flex items-center gap-2 text-gray-600 text-sm hover:underline">
                  <Pencil size={18} className="text-[#008a00]" />
                  Give feedback
                </a>
              </div>
            </div>

            {/* Column 2: Products */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Products</h3>
              <div className="flex flex-col">
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Bank Accounts</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Credit Cards</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Mortgages</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Loans & Lines of Credit</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Investing</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Insurance</a>
              </div>
            </div>

            {/* Column 3: Ways to Bank */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Ways to Bank</h3>
              <div className="flex flex-col">
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">TD app</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">EasyWeb</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Ways to send money</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Branch & ATM Locator</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Accessible banking</a>
              </div>
            </div>

            {/* Column 4: Banking Advice */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">Banking Advice</h3>
              <div className="flex flex-col">
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">TD Advice</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Calculators</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Fraud prevention</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Financial literacy</a>
              </div>
            </div>

            {/* Column 5: About Us */}
            <div>
              <h3 className="text-gray-900 font-bold mb-4">About Us</h3>
              <div className="flex flex-col">
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Who we are</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Our impact</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Careers</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Investor relations</a>
                <a href="#" className="text-gray-600 text-sm mb-3 hover:underline">Newsroom</a>
              </div>
            </div>
          </div>

          {/* Part C: Bottom Legal Row & The Chair */}
          <div className="mt-16 relative">
            {/* Green Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4">
              <a href="#" className="text-[#008a00] font-bold text-xs hover:underline">Privacy and Security</a>
              <a href="#" className="text-[#008a00] font-bold text-xs hover:underline">Legal</a>
              <a href="#" className="text-[#008a00] font-bold text-xs hover:underline">Accessibility</a>
              <a href="#" className="text-[#008a00] font-bold text-xs hover:underline">CDIC Member</a>
              <a href="#" className="text-[#008a00] font-bold text-xs hover:underline">About Us</a>
              <a href="#" className="text-[#008a00] font-bold text-xs hover:underline">Careers</a>
              <a href="#" className="text-[#008a00] font-bold text-xs hover:underline">Site Index</a>
            </div>

            {/* Address */}
            <p className="text-gray-600 text-xs mt-4">
              Toronto-Dominion Centre - Corporate Office: 66 Wellington Street West, Toronto, Ontario M5K 1A2
            </p>

            {/* The Chair Image */}
            <div className="absolute bottom-0 right-0 hidden md:block">
              <img
                src={footerChairImage}
                alt="TD Green Chair"
                className="w-32 h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Zone 2: Sub-Footer (Regulatory) */}
      <div className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* Row 1: Social Icons & Regulatory Logos */}
          <div className="flex justify-between items-start mb-8 flex-wrap gap-6">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-[#008a00] hover:text-[#006d00]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-[#008a00] hover:text-[#006d00]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-[#008a00] hover:text-[#006d00]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-[#008a00] hover:text-[#006d00]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="text-[#008a00] hover:text-[#006d00]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Regulatory Logos */}
            <div className="flex items-center gap-6">
              {/* CDIC Badge */}
              <div className="flex flex-col items-center">
                <img src={cdicBadgeImage} alt="CDIC Member" className="w-32 h-32 object-contain" />
              </div>

              {/* CIRO Logo */}
              <div className="flex flex-col items-center">
                <img src={ciroLogoImage} alt="CIRO Regulated" className="w-32 h-32 object-contain" />
              </div>
            </div>
          </div>

          {/* Row 2: Legal Text Blocks */}
          <div className="cmp--margin-top-default aem-GridColumn aem-GridColumn--default--12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CDIC Block */}
              <div>
                <h4 className="text-gray-900 font-bold text-xs mb-2">Canada Deposit Insurance Corporation</h4>
                <p className="text-gray-600 text-[10px] leading-relaxed mb-2">
                  TD Canada Trust offers a full range of business banking services to help you manage your day-to-day
                  operations, plan for growth and evolve your business. Eligible deposits with TD Canada Trust are
                  guaranteed by the Canada Deposit Insurance Corporation up to the maximum allowed by law.
                </p>
                <a href="#" className="text-[#008a00] font-bold text-xs hover:underline">Learn more</a>
              </div>

              {/* CIRO Block */}
              <div>
                <h4 className="text-gray-900 font-bold text-xs mb-2">
                  Canada Investment Regulatory Organization (CIRO)
                </h4>
                <p className="text-gray-600 text-[10px] leading-relaxed mb-2">
                  TD Direct Investing is a division of TD Waterhouse Canada Inc., a subsidiary of The Toronto-Dominion Bank.
                  TD Waterhouse Canada Inc. is a member of the Canadian Investment Regulatory Organization (CIRO) and
                  the Canadian Investor Protection Fund (CIPF).
                </p>
                <a href="#" className="text-[#008a00] font-bold text-xs hover:underline">www.ciro.ca</a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-xs">
              © The Toronto-Dominion Bank. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Sub-component: HeroSection
const HeroSection = () => {
  return (
    <div className="max-w-[1440px]">
      <div className="flex gap-0">
        {/* Main Banner (Left Side - Flex Container with Relative Positioning) */}
        <div className="flex flex-1 min-h-[360px] relative">
          {/* Item 1: Image Background - Full Width Behind Everything */}
          <div
            className="absolute inset-0 w-[53%] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${hero1Image})` }}
          >
          </div>

          {/* Content Wrapper */}
          <div className="relative z-10 flex w-full items-center">
            {/* Spacer for Image */}
            <div className="w-[41%] shrink-0"></div>

            {/* Item 2: The Green Box (Overlapping) */}
            <div className="w-[280px] h-[280px] shrink-0 bg-[#008a00] flex items-center justify-center px-6">
              <h2 className="text-white text-[38px] font-bold leading-[41px] text-left">
                You are <br />never alone
              </h2>
            </div>

            {/* Item 3: The White Promo */}
            <div className="flex-1 bg-white flex flex-col items-start justify-center px-10 py-6 gap-5">
              <p className="text-gray-800 text-[15px] leading-relaxed">
                Get top notch support from direct investing professionals.
              </p>
              <button className="border-2 border-[#008a00] text-[#008a00] bg-white px-8 py-2.5 text-[14px] font-bold hover:bg-[#008a00] hover:text-white transition-colors">
                Open an account
              </button>
            </div>
          </div>
        </div>

        {/* Login Sidebar (Right Side - Vertical Stack / 340px) */}
        <div className="w-[340px] shrink-0 border-l border-gray-300 pl-8">
          <div className="flex flex-col">
            {/* EasyWeb Widget */}
            <div className="py-6">
              <h3 className="text-[#1a5336] font-medium text-[22px] leading-[31px] mb-4">EasyWeb: Online Banking</h3>
              <button className="w-full bg-[#008a00] text-white font-bold py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-[#006d00] transition-colors mb-4">
                <Lock size={18} />
                Login
              </button>
              <div className="flex items-center gap-4 text-[13px]">
                <a href="#" className="text-[#008a00] font-bold hover:underline flex items-center gap-1">
                  Register <ChevronDown size={12} className="rotate-[-90deg]" />
                </a>
                <a href="#" className="text-[#008a00] font-bold hover:underline flex items-center gap-1">
                  Security Guarantee <ChevronDown size={12} className="rotate-[-90deg]" />
                </a>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="border-b border-gray-300"></div>

            {/* WebBroker Widget */}
            <div className="py-6">
              <h3 className="text-[#1a5336] font-bold text-[18px] mb-4">WebBroker: Online Trading</h3>
              <button className="w-full bg-[#008a00] text-white font-bold py-3 rounded-sm flex items-center justify-center gap-2 hover:bg-[#006d00] transition-colors mb-4">
                <Lock size={18} />
                Login
              </button>
              <div className="flex items-center gap-4 text-[13px]">
                <a href="#" className="text-[#008a00] font-bold hover:underline flex items-center gap-1">
                  Register <ChevronDown size={12} className="rotate-[-90deg]" />
                </a>
                <a href="#" className="text-[#008a00] font-bold hover:underline flex items-center gap-1">
                  Security Guarantee <ChevronDown size={12} className="rotate-[-90deg]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
const Dashboard = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <div className="aem-GridColumn aem-GridColumn--default--12"></div>
            <div className="cmp--margin-top-default cmp--margin-bottom-default aem-GridColumn aem-GridColumn--default--12"></div>
      <ProductExploreGrid />
      <div className="cmp--margin-top-default cmp--margin-bottom-default aem-GridColumn aem-GridColumn--default--12 px-8"></div>
      <ProductFinder />
      <PlanYourMove />
      <TDAdvice />
      <FinancialFuture />
      <FraudProtection />
      <EstatePlanning />
      <DigitalBanking />
      <UpdatesFromUs />
      <WhyBankWithTD />
      <QuestionSection />
      <Footer />
    </div>
  );
};

export default Dashboard;
