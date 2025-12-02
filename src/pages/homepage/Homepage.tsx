import { useState } from 'react';
import { Search, ChevronDown, User, LogOut, Download, Printer, Plus } from 'lucide-react';
import tdLogo from '../../assets/td-logo.png';
import cdicBadgeImage from '../../assets/cdic-badge.jpeg';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const [activeTab, setActiveTab] = useState('Personal');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center gap-8">
              <img src={tdLogo} alt="TD Bank" className="h-14" />

              <nav className="flex items-center gap-8">
                <a href="#" className="text-[#1a5336] font-medium hover:underline">
                  My Accounts
                </a>
                <button className="flex items-center gap-1 text-[#008a00] font-medium hover:underline">
                  Products
                  <ChevronDown size={16} />
                </button>
                <button className="flex items-center gap-1 text-[#008a00] font-medium hover:underline">
                  Payment Solutions
                  <ChevronDown size={16} />
                </button>
                <button className="flex items-center gap-1 text-[#008a00] font-medium hover:underline">
                  Learn
                  <ChevronDown size={16} />
                </button>
              </nav>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="text-[#008a00] hover:text-[#006600]">
                <Search size={20} />
              </button>
              <div className="h-6 w-px bg-gray-300"></div>
              <button className="flex items-center gap-1 text-[#008a00] hover:text-[#006600]">
                <User size={20} />
                <ChevronDown size={14} />
              </button>
              
              <button className="flex items-center gap-2 text-[#008a00] font-bold hover:underline">
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Green Banner */}
      <div className="bg-[#008a00] text-white py-8 pb-12">
        <div className="max-w-[1400px] mx-auto px-6">
          <h1 className="text-2xl font-normal mb-12">Good evening</h1>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 relative -mb-16.5">
            <button className="bg-white text-[#008a00] px-6 py-2 rounded-full font-medium hover:bg-gray-100 shadow-md">
              Pay Bills
            </button>
            <button className="bg-white text-[#008a00] px-6 py-2 rounded-full font-medium hover:bg-gray-100 shadow-md">
              Make a Transfer
            </button>
            <button className="bg-white text-[#008a00] px-6 py-2 rounded-full font-medium hover:bg-gray-100 italic shadow-md">
              Interac e-Transfer®
            </button>
            <button className="bg-white text-[#008a00] px-6 py-2 rounded-full font-medium hover:bg-gray-100 shadow-md">
              Statements & Documents
            </button>
            <button className="bg-white text-[#008a00] w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 shadow-md">
              <Plus size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-6 pt-24 pb-8">
        <div className="flex gap-8">
          {/* Left Sidebar */}
          <aside className="w-64 shrink-0">
            <nav className="space-y-1">
              <a href="#" className="block text-[#1a5336] font-bold py-2">My Accounts</a>
              <a href="#" className="block text-[#008a00] py-2 hover:underline">Pay Bills</a>
              <a href="#" className="block text-[#1a5336] py-2 hover:underline">Transfers</a>
              <a href="#" className="block text-[#008a00] py-2 hover:underline italic">Interac e-Transfer®</a>
              <a href="#" className="block text-[#008a00] py-2 hover:underline">Investments</a>
              <a href="#" className="block text-[#008a00] py-2 hover:underline">My Profile & Settings</a>
            </nav>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Header with Tabs */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#1a5336] text-3xl font-normal">My Accounts</h2>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveTab('Personal')}
                    className={`px-6 py-2 border border-gray-300 rounded-full ${activeTab === 'Personal' ? 'bg-white text-[#1a5336] font-medium' : 'bg-gray-50 text-gray-600'}`}
                  >
                    Personal
                  </button>
                  <button
                    onClick={() => setActiveTab('Business')}
                    className={`px-6 py-2 border rounded-full ${activeTab === 'Business' ? 'bg-white text-[#1a5336] border-[#008a00] font-medium' : 'bg-gray-50 text-gray-600 border-[#008a00]'}`}
                  >
                    Business
                  </button>
                </div>

                <button className="text-[#008a00] hover:underline">
                  <Download size={20} />
                </button>
                <button className="text-[#008a00] hover:underline">
                  <Printer size={20} />
                </button>
                <button className="flex items-center gap-1 text-[#008a00] font-medium hover:underline">
                  Help
                  <ChevronDown size={14} className="-rotate-90" />
                </button>
              </div>
            </div>

            {/* Account Section */}
            <div className="border border-gray-200 rounded mb-6">
              {/* Account Header */}
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h3 className="text-gray-700 font-medium">CONCEPT ELITE CONSTRUCTION INC.</h3>
              </div>

              {/* Account Type */}
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Banking</span>
                  <span className="text-xl font-medium">$19.67</span>
                </div>
              </div>

              {/* Account Details */}
              <div className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[#008a00] font-medium cursor-pointer" onClick={()=>{
                      navigate('/waw/ezw/servlet/TransferInFromNorthStarServlet');
                    }}>TD UNLIMITED BUSINESS PLAN</div>
                    <div className="text-gray-600 text-sm">4928 5241534</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-base font-medium text-gray-600">$19.67</span>
                    <button className="text-gray-400">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="border border-[#008a00] p-2">
              <div className="grid grid-cols-4 gap-4">
                <button className="flex flex-row items-center gap-2 p-2 hover:bg-gray-50 rounded">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#008a00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#008a00] font-medium text-sm text-left">
                    Open a new banking account
                  </span>
                </button>

                <button className="flex flex-row items-center gap-2 p-2 hover:bg-gray-50 rounded">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#008a00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                      <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#008a00] font-medium text-sm text-left">
                    Apply for a credit card
                  </span>
                </button>

                <button className="flex flex-row items-center gap-2 p-2 hover:bg-gray-50 rounded">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#008a00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-[#008a00] font-medium text-sm text-left">
                    Apply for a loan
                  </span>
                </button>

                <button className="flex flex-row items-center gap-2 p-2 hover:bg-gray-50 rounded">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#008a00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <span className="text-[#008a00] font-medium text-sm text-left">
                    Invest with TD
                  </span>
                </button>
              </div>
            </div>

            {/* Legal Notes */}
            <div className="mt-6">
              <button className="flex items-center gap-2 text-[#008a00] text-sm hover:underline">
                <Plus size={16} className="text-[#008a00]" />
                Legal notes
              </button>
            </div>

            {/* CDIC Notice */}
            <div className="mt-4 flex items-center gap-3 p-4 bg-gray-50 rounded">
              <div className="w-24 h-24 shrink-0">
                <img src={cdicBadgeImage} alt="CDIC" className="w-full h-full object-contain" />
              </div>
              <p className="text-sm text-gray-700">
                Your deposits may be insurable by the Canada Deposit Insurance Corporation{' '}
                <a href="#" className="text-[#008a00] hover:underline inline-flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
