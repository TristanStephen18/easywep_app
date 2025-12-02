import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Eye, EyeOff, ChevronDown } from "lucide-react";
import tdLogo from "../../assets/td-logo.png";
import appleImg from "../../assets/apple.jpg";
import chairImg from "../../assets/footer-chair.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showSolutionsDropdown, setShowSolutionsDropdown] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [username, setUsername] = useState("130******8009");
  const [password, setPassword] = useState("");
  const [showUsernameDropdown, setShowUsernameDropdown] = useState(false);

  // Mock saved credentials
  const savedCredentials = [
    { username: "130******8009", password: "password123" },
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username !== "130******8009" || password !== "Mbosnjak@26") {
      alert("Incorrect Credentials");
    } else {
      navigate("/myaccounts");
    }
  };

  const handleUsernameSelect = (cred: {
    username: string;
    password: string;
  }) => {
    setUsername(cred.username);
    setPassword(cred.password);
    setShowUsernameDropdown(false);
  };

  return (
    <div className="min-h-screen bg-[#ffffff] font-['Webly_Sleek_SemiLight','Helvetica',sans-serif]">
      {/* Header */}
      <header>
        {/* Top Strip - White Background */}
        <div className="bg-white h-9 flex items-center border-b border-gray-200">
          <div className="max-w-[1200px] mx-auto w-full px-[15px] flex items-center justify-between">
            {/* Left Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-700 text-[13px] font-normal hover:text-black"
              >
                Personal
              </a>
              <a
                href="#"
                className="text-[#008a00] text-[13px] font-normal hover:text-black hover:underline"
              >
                Business
              </a>
              <a
                href="#"
                className="text-[#008a00] text-[13px] font-normal hover:text-black hover:underline"
              >
                Investing
              </a>
            </div>

            {/* Right Side - Language/Region */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-gray-700 hover:text-black text-xs">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 480'%3E%3Cpath fill='%23fff' d='M0 0h640v480H0z'/%3E%3Cpath fill='%23d52b1e' d='M0 0h213.3v480H0zm426.7 0H640v480H426.7z'/%3E%3C/svg%3E"
                  alt="Canada"
                  className="w-4 h-3"
                />
                <ChevronDown size={12} />
              </button>
              <a
                href="#"
                className="text-gray-700 hover:text-black text-xs hover:underline"
              >
                Français
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar - Deep Forest Green */}
        <div className="bg-[#11412B] h-[70px] flex items-center">
          <div className="max-w-[1200px] mx-auto px-[15px] w-full flex items-center justify-between">
            {/* Logo and Nav Links */}
            <div className="flex items-center gap-8">
              <img src={tdLogo} alt="TD Bank" className="h-10" />

              <nav className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-white text-[16px] leading-[22px] font-normal hover:underline"
                >
                  My Accounts
                </a>
                <a
                  href="#"
                  className="text-white text-[16px] leading-[22px] font-normal hover:underline"
                >
                  How To
                </a>
                <div
                  className="relative"
                  onMouseEnter={() => setShowProductsDropdown(true)}
                  onMouseLeave={() => setShowProductsDropdown(false)}
                >
                  <button className="flex items-center gap-1 text-white text-[16px] leading-[22px] font-normal hover:underline">
                    Products
                    <ChevronDown size={14} />
                  </button>

                  {showProductsDropdown && (
                    <div className="absolute top-full left-0 mt-0 bg-white shadow-lg min-w-[250px] z-50">
                      <div className="py-4 px-6">
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Bank Accounts
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Credit Cards
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Mortgages
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Borrowing
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Saving & Investing
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Insurance
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          All Products
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setShowSolutionsDropdown(true)}
                  onMouseLeave={() => setShowSolutionsDropdown(false)}
                >
                  <button className="flex items-center gap-1 text-white text-[16px] leading-[22px] font-normal hover:underline">
                    Solutions
                    <ChevronDown size={14} />
                  </button>

                  {showSolutionsDropdown && (
                    <div className="absolute top-full left-0 mt-0 bg-white shadow-lg min-w-[250px] z-50">
                      <div className="py-4 px-6">
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Investors
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Small Businesses
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Commercial Banking
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Students
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          New to Canada
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Cross Border Banking
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Foreign Exchange Services
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Ways to Pay
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Ways to Bank
                        </a>
                        <a
                          href="#"
                          className="block text-[#1c1c1c] text-[16px] leading-10 font-normal hover:bg-gray-100 px-2 -mx-2"
                        >
                          Green Banking
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            {/* Right Utilities */}
            <div className="flex items-center gap-4">
              <button className="text-white hover:text-white/90 p-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </button>
              <button className="text-white hover:text-white/90 p-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
                </svg>
              </button>
              <button className="text-white hover:text-white/90 p-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
              </button>

              {/* Separator */}
              <div className="h-8 w-px bg-white/30"></div>

              <button className="flex items-center gap-1 text-white hover:text-white/90 text-sm font-bold ml-2">
                <span className="flex items-center gap-1">
                  <span className="flex items-center gap-1">
                    <span className="w-5 h-5 flex items-center justify-center">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z" />
                      </svg>
                    </span>
                    Login
                  </span>
                  <ChevronDown size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-[1200px] mx-auto px-[15px] py-6">
        {/* Page Title */}
        <h1 className="text-[#1a5336] text-[28px] leading-[38px] font-thin mb-3 pb-3">
          EasyWeb Login
        </h1>

        {/* 2-Column Grid with Light Green Background */}
        <div className="bg-[#f5f9f7] pt-4 px-8 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-x-12 relative">
          {/* Left Column - Login Form */}
          <div className="border-r border-gray-300 pr-12">
            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Username Input */}
              <div className="relative">
                <label
                  htmlFor="username"
                  className="block text-[#1c1c1c] text-sm font-bold mb-2"
                >
                  Username or Access Card
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    onFocus={() => setShowUsernameDropdown(true)}
                    onBlur={() =>
                      setTimeout(() => setShowUsernameDropdown(false), 200)
                    }
                    className="w-full h-10 px-3 pr-8 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#008a00] focus:border-transparent"
                  />
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />

                  {showUsernameDropdown && savedCredentials.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 shadow-lg z-50 max-h-48 overflow-y-auto">
                      {savedCredentials.map((cred, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleUsernameSelect(cred)}
                          className="w-full px-3 py-2 text-left text-[#1c1c1c] hover:bg-gray-100 flex items-center gap-2"
                        >
                          <span>{cred.username}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setShowDescription(!showDescription)}
                  className="text-[#008a00] text-sm mt-2 hover:underline"
                >
                  + Description (Optional)
                </button>
                {showDescription && (
                  <textarea
                    className="w-full mt-2 px-3 py-2 border border-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-[#008a00] focus:border-transparent"
                    rows={3}
                  />
                )}
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-[#1c1c1c] text-sm font-bold mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full h-10 px-3 pr-10 border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#008a00] focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-[#008a00] border-gray-400 rounded-sm focus:ring-[#008a00]"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-[#1c1c1c]"
                >
                  Remember me
                </label>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="bg-[#008a00] text-white font-bold px-20 py-2 flex items-center gap-2 hover:bg-[#006d00] transition-colors rounded-sm"
              >
                <Lock size={18} />
                <span>Login</span>
              </button>

              {/* Helper Links */}
              <div className="pt-4">
                <a
                  href="#"
                  className="block text-[#008a00] text-sm hover:underline mb-2"
                >
                  Forgot your username or password?
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-[#008a00] text-sm hover:underline"
                >
                  <Lock size={14} />
                  <span>TD Online and Mobile Security Guarantee</span>
                </a>
              </div>
            </form>
          </div>

          {/* Right Column - Help & Registration */}
          <div className="pl-12">
            {/* Welcome Header and Register Button */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-[#1c1c1c] text-[20px] leading-[30px] font-normal">
                Welcome to EasyWeb, let's get started.
              </h2>

              <button className="border-2 border-[#008a00] text-[#008a00] bg-white font-bold px-6 py-2 rounded hover:bg-[#008a00] hover:text-white transition-colors whitespace-nowrap">
                Register online now
              </button>
            </div>

            {/* Description Text */}
            <p className="text-[#1c1c1c] text-sm mb-6 leading-relaxed">
              If you've received your temporary password, use it to log in along
              with your Access Card number. You'll then be prompted to create a
              new Password.
            </p>

            <hr className="my-6 border-gray-300" />

            {/* Login Help */}
            <div className="mb-6">
              <h3 className="text-[#1c1c1c] text-[20px] leading-[30px] font-normal mb-2">
                Login Help
              </h3>
              <div className="space-y-1">
                <a
                  href="#"
                  className="block text-[#008a00] text-[16px] leading-[22px] font-normal hover:underline"
                >
                  Get Login Help ›
                </a>
                <a
                  href="#"
                  className="block text-[#008a00] text-[16px] leading-[22px] font-normal hover:underline"
                >
                  Reset Password ›
                </a>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Enhanced Security */}
            <div className="mb-6">
              <h3 className="text-[#1c1c1c] text-[20px] leading-[30px] font-normal mb-2">
                Enhanced Security
              </h3>
              <div className="space-y-1">
                <a
                  href="#"
                  className="block text-[#008a00] text-[16px] leading-[22px] font-normal hover:underline"
                >
                  Two-Step Verification FAQs ›
                </a>
                <a
                  href="#"
                  className="block text-[#008a00] text-[16px] leading-[22px] font-normal hover:underline"
                >
                  TD Authenticate app: Securely log in from anywhere in the
                  world without texts or phone calls. ›
                </a>
                <a
                  href="#"
                  className="block text-[#008a00] text-[16px] leading-[22px] font-normal hover:underline"
                >
                  Improve Your Protection Against Online Fraud ›
                </a>
              </div>
            </div>

            <hr className="my-6 border-gray-300" />

            {/* Mobile Banking */}
            <div>
              <h3 className="text-[#1c1c1c] text-[20px] leading-[30px] font-normal mb-2">
                Explore mobile banking with the TD app now
              </h3>
              <a
                href="#"
                className="block text-[#008a00] text-[16px] leading-[22px] font-normal hover:underline"
              >
                Take banking and investing almost anywhere ›
              </a>
            </div>
          </div>
        </div>

        {/* Footer Ad - The Apple */}
        <div className="max-w-[900px] mx-auto mt-10 mb-12">
          <div className="flex flex-row items-center justify-center gap-12">
            {/* Apple Image */}
            <img src={appleImg} alt="Sliced Apple" className="w-90" />

            {/* Text Content */}
            <div>
              <h2 className="text-[#008a00] text-2xl font-normal">
                Partial shares from TD Direct Investing.
              </h2>
              <p className="text-[#1c1c1c] text-sm mt-3 mb-6 max-w-md">
                All you have to do is decide how much to spend, then pick a
                stock. It's easy, no matter how you slice it.
              </p>
              <button className="border border-[#008a00] text-[#008a00] bg-white font-medium text-sm px-10 py-2 rounded-sm hover:bg-gray-50">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="max-w-[1000px] mx-auto px-6">
          <p className="text-[16px] leading-[22px] font-normal text-[#1c1c1c]">
            By using EasyWeb, our secured financial services site, offered by TD
            Canada Trust and its affiliates, you agree to the terms and services
            of the{" "}
            <a
              href="#"
              className="text-[#008a00] underline hover:text-[#006d00]"
            >
              Financial Services Terms
            </a>
            ,{" "}
            <a
              href="#"
              className="text-[#008a00] underline hover:text-[#006d00]"
            >
              Access Agreement
            </a>
            ,{" "}
            <a
              href="#"
              className="text-[#008a00] underline hover:text-[#006d00]"
            >
              Digital Banking Agreement
            </a>
            ,{" "}
            <a
              href="#"
              className="text-[#008a00] underline hover:text-[#006d00]"
            >
              Business Access Services Schedule
            </a>
            , and/or{" "}
            <a
              href="#"
              className="text-[#008a00] underline hover:text-[#006d00]"
            >
              Terms and Agreement
            </a>
            ,{" "}
            <a
              href="#"
              className="text-[#008a00] underline hover:text-[#006d00]"
            >
              Disclosure
            </a>
            .
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#153922] text-white py-16">
        <div className="flex justify-center items-center">
          <div className="flex items-center gap-16">
            {/* Chair Image */}
            <img src={chairImg} alt="Green Chair" className="w-52" />

            {/* Content Column */}
            <div className="text-center">
              {/* Main CTA */}
              <div className="mb-8">
                <p className="text-xl font-light">
                  Need to talk to us directly?{" "}
                  <a href="#" className="text-[#4cc263] hover:underline">
                    Contact us &gt;
                  </a>
                </p>
              </div>

              {/* Social Media Block */}
              <div className="mb-10">
                <p className="text-xs text-white mb-3">Connect with TD</p>
                <div className="flex justify-center gap-3">
                  {/* X (Twitter) */}
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#1a4a2e] flex items-center justify-center hover:bg-[#234d35]"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#1a4a2e] flex items-center justify-center hover:bg-[#234d35]"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#1a4a2e] flex items-center justify-center hover:bg-[#234d35]"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#1a4a2e] flex items-center justify-center hover:bg-[#234d35]"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-[#1a4a2e] flex items-center justify-center hover:bg-[#234d35]"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex flex-wrap justify-center gap-6 text-xs">
                <a href="#" className="text-white hover:underline">
                  Privacy and Security
                </a>
                <a href="#" className="text-white hover:underline">
                  Legal
                </a>
                <a href="#" className="text-white hover:underline">
                  Accessibility
                </a>
                <a href="#" className="text-white hover:underline">
                  CDIC member
                </a>
                <a href="#" className="text-white hover:underline">
                  About Us
                </a>
                <a href="#" className="text-white hover:underline">
                  We're Hiring
                </a>
                <a href="#" className="text-white hover:underline">
                  Manage online experience
                </a>
                <a href="#" className="text-white hover:underline">
                  Site Index
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoginPage;
