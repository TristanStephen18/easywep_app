import { useState } from 'react';

export default function TDBankAccount() {
  const [selectedAccount] = useState('TD UNLIMITED BUSINESS PLAN - 5241534 $19.67');
  
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  // Transaction data remains the same
  const transactions = [
    { date: 'Dec 01, 2025', description: 'DEBITS/FACT. DIV', withdrawals: '146.54', deposits: '', balance: '($3,880.33)' },
    { date: 'Dec 01, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '2,982.53', deposits: '', balance: '($3,733.79)' },
    { date: 'Dec 01, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '1,921.89', deposits: '', balance: '($751.26)' },
    { date: 'Dec 01, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '1,826.49', deposits: '', balance: '$1,170.63' },
    { date: 'Dec 01, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '1,811.94', deposits: '', balance: '$2,997.12' },
    { date: 'Dec 01, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '1,242.45', deposits: '', balance: '$4,809.06' },
    { date: 'Dec 01, 2025', description: 'FRAIS PAIEMENT NSF', withdrawals: '5.00', deposits: '', balance: '$6,051.51', expandable: true },
    { date: 'Dec 01, 2025', description: 'CABLE AU CLIENT', withdrawals: '3,271.72', deposits: '', balance: '$6,056.51' },
    { date: 'Dec 01, 2025', description: 'View more Receipt - VFC ***mrr', withdrawals: '', deposits: '9,000.00', balance: '$9,328.23', link: true },
    { date: 'Dec 01, 2025', description: 'View more Receipt - VFC ***qhe', withdrawals: '', deposits: '1,000.00', balance: '$328.23', link: true },
    { date: 'Nov 28, 2025', description: 'INT.SUR DECOUVERT', withdrawals: '12.34', deposits: '', balance: '($671.77)' },
    { date: 'Nov 28, 2025', description: 'FRAIS MENS PLAN SERV', withdrawals: '125.00', deposits: '', balance: '($659.43)' },
    { date: 'Nov 28, 2025', description: 'CABINET COMPTAB ENT', withdrawals: '1,865.48', deposits: '', balance: '($534.43)' },
    { date: 'Nov 27, 2025', description: 'Paie/Desjardins DIV', withdrawals: '7,382.32', deposits: '', balance: '$1,331.05' },
    { date: 'Nov 26, 2025', description: 'FRAIS DE RETOUR NSF', withdrawals: '48.00', deposits: '', balance: '$8,713.37', expandable: true },
    { date: 'Nov 26, 2025', description: 'View more Receipt - VFC ***8RP', withdrawals: '', deposits: '6,000.00', balance: '$8,761.37', link: true },
    { date: 'Nov 26, 2025', description: 'RTN 5PS', withdrawals: '7,382.32', deposits: '', balance: '$2,761.37' },
    { date: 'Nov 25, 2025', description: 'DEBITS/PAIE DIV', withdrawals: '7,382.32', deposits: '', balance: '($1,620.95)' },
    { date: 'Nov 25, 2025', description: 'DEBITS/FACT. DIV', withdrawals: '45.20', deposits: '', balance: '$2,761.37' },
    { date: 'Nov 24, 2025', description: 'FRAIS GAB INTL', withdrawals: '3.00', deposits: '', balance: '$2,806.57' },
    { date: 'Nov 24, 2025', description: 'FRAIS GAB INTL', withdrawals: '3.00', deposits: '', balance: '$2,809.57' },
    { date: 'Nov 24, 2025', description: 'RETR GAB $INTL', withdrawals: '468.48', deposits: '', balance: '$2,812.57' },
    { date: 'Nov 24, 2025', description: 'RETR GAB $INTL', withdrawals: '468.48', deposits: '', balance: '$3,281.05' },
    { date: 'Nov 18, 2025', description: 'DEBITS/PAIE DIV', withdrawals: '6,373.12', deposits: '', balance: '$3,749.53' },
    { date: 'Nov 05, 2025', description: 'View more Receipt - VFC ***3hb', withdrawals: '', deposits: '8,000.00', balance: '$905.28', link: true },
    { date: 'Nov 04, 2025', description: 'DEBITS/PAIE DIV', withdrawals: '7,473.53', deposits: '', balance: '($7,094.72)' },
    { date: 'Nov 04, 2025', description: 'FRAIS PAIEMENT NSF', withdrawals: '5.00', deposits: '', balance: '$378.81', expandable: true },
    { date: 'Nov 04, 2025', description: 'FRAIS PAIEMENT NSF', withdrawals: '5.00', deposits: '', balance: '$383.81', expandable: true },
    { date: 'Nov 04, 2025', description: 'View more Receipt - VFC ***vcU', withdrawals: '', deposits: '4,000.00', balance: '$388.81', link: true },
    { date: 'Nov 03, 2025', description: 'CABINET COMPTAB ENT', withdrawals: '987.33', deposits: '', balance: '($3,611.19)' },
    { date: 'Nov 03, 2025', description: 'DEBITS/FACT. DIV', withdrawals: '103.78', deposits: '', balance: '($2,623.86)' },
    { date: 'Nov 03, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '2,982.53', deposits: '', balance: '($2,520.08)' },
    { date: 'Nov 03, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '1,921.89', deposits: '', balance: '$462.45' },
    { date: 'Nov 03, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '1,826.49', deposits: '', balance: '$2,384.34' },
    { date: 'Nov 03, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '1,811.94', deposits: '', balance: '$4,210.83' },
    { date: 'Nov 03, 2025', description: 'LOMBARDI AUTOS BAIL', withdrawals: '1,242.45', deposits: '', balance: '$6,022.77' },
    { date: 'Nov 03, 2025', description: 'FRAIS PAIEMENT NSF', withdrawals: '5.00', deposits: '', balance: '$7,265.22', expandable: true },
    { date: 'Nov 03, 2025', description: 'CABLE AU CLIENT', withdrawals: '3,350.99', deposits: '', balance: '$7,270.22' },
    { date: 'Nov 03, 2025', description: 'View more Receipt - VFC ***jFc', withdrawals: '', deposits: '5,000.00', balance: '$10,621.21', link: true },
    { date: 'Nov 03, 2025', description: 'View more Receipt - VFC ***jrW', withdrawals: '', deposits: '10,000.00', balance: '$5,621.21', link: true },
  ];

  const styles = {
    // UPDATED COLORS based on screenshot
    tdGreen: '#007934',
    navBackground: '#00391d', // Much darker green from the screenshot
    navActiveUnderline: '#bed80b', // The bright lime green strip
    linkGreen: '#007934',
    bgGrey: '#f3f3f3',
    borderGrey: '#dcdcdc',
    redText: '#cc0000',
    sidebarHeaderGradient: 'linear-gradient(to bottom, #f7f7f7 0%, #ededed 100%)',
    sidebarHeaderBorder: '1px solid #cccccc',
  };

  const myAccountsMenu = {
  sections: [
    {
      title: 'EasyWeb Online Banking',
      columns: [
        {
          links: [
            { text: 'Accounts', href: '#' },
            { text: 'Pay Bills', href: '#' },
            { text: 'Transfers', href: '#' },
            { text: 'INTERAC e-Transfer', href: '#' }
          ]
        },
        {
          links: [
            { text: 'Investments', href: '#' },
            { text: 'Profile & Settings', href: '#' }
          ]
        }
      ]
    },
    {
      title: 'WebBroker Online Investing',
      columns: [
        {
          links: [
            { text: 'Learn About WebBroker', href: '#' },
            { text: 'Log in', href: '#' }
          ]
        }
      ]
    }
  ]
};


const contactUsMenu = {
  sections: [
    {
      iconPath: 'question_mark.png',
      title: 'How can we help you?',
      links: [
        { text: 'Ask Us', href: '#', hasExternalIcon: true },
        { text: 'Frequently Asked Questions', href: '#' },
        { text: 'TD Helps Community', href: '#', hasExternalIcon: true }
      ]
    },
    {
      iconPath: './Contact_Us_Call_Us_37x37.png',
      title: 'Contact Us',
      links: [
        { text: 'Call Us', href: '#' },
        { text: 'More Ways to Contact Us', href: '#' }
      ]
    },
    {
      iconPath: './icon_meet-us.gif',
      title: 'Come See Us',
      links: [
        { text: 'Find a Branch', href: '#' },
        { text: 'Book an Appointment', href: '#' },
        { text: 'TD Wealth Locations', href: '#' }
      ]
    }
  ]
};

const productsServicesMenu = {
  sections: [
    [
      {
        iconPath: './Products_and_Services_Banking_37x37.png',
        title: 'Banking',
        links: [
          { text: 'Bank Accounts', href: '#' },
          { text: 'Ways to Bank', href: '#' },
          { text: 'Overdraft protection', href: '#' }
        ]
      },
      {
        iconPath: './Products_and_Services_Borrowing_37x37.png',
        title: 'Borrowing',
        links: [
          { text: 'Mortgages', href: '#' },
          { text: 'Loans', href: '#' }
        ]
      },
      {
        iconPath: 'Products_and_Services_Credit_Cards_37x37.png',
        title: 'Credit Cards',
        links: [
          { text: 'See All', href: '#' }
        ]
      },
      {
        iconPath: './Products_and_Services_Insurance_37x37.png',
        title: 'Insurance',
        links: [
          { text: 'See All', href: '#' }
        ]
      }
    ],
    [
      {
        iconPath: './Products_and_Services_Investing_37x37.png',
        title: 'Investing',
        links: [
          { text: 'Savings & Investment Products', href: '#' },
          { text: 'Invest On Your Own', href: '#' },
          { text: 'Invest With An Advisor', href: '#' },
          { text: 'See All', href: '#' }
        ]
      },
      {
        iconPath: './Products_and_Services_Travel_37x37.png',
        title: 'Travel',
        links: [
          { text: 'Cross-Border Banking', href: '#' },
          { text: 'Travel Medical Insurance', href: '#' },
          { text: 'Foreign Exchange', href: '#' }
        ]
      },
      {
        iconPath: './Products_and_Services_SmallBusiness_37x37 (1).png',
        title: 'Small Business',
        links: [
          { text: 'See All', href: '#' }
        ]
      },
      {
        iconPath: './Products_and_Services_Special_Offers_37x37.png',
        title: 'Offers & Promotions',
        links: [
          { text: 'See All', href: '#' }
        ]
      }
    ]
  ]
};


const marketsResearchMenu = {
  columns: [
    { iconPath: './Markets_and_Research_Markets_37x37.png', title: 'Markets', links: [
      { text: 'Markets Overview', href: '#' }
    ]},
    { iconPath: './Markets_and_Research_Research_37x37.png', title: 'Research', links: [
      { text: 'Stocks', href: '#' },
      { text: 'Options', href: '#' },
      { text: 'Mutual Funds', href: '#' },
      { text: 'ETFs', href: '#' }
    ]},
    { iconPath: './Markets_and_Research_Investor_tools_37x37.png', title: 'Investor Tools', links: [
      { text: 'Screeners', href: '#' },
      { text: 'Alerts', href: '#' },
      { text: "Today's Rates", href: '#' }
    ]},
    { iconPath: './Markets_and_Research_Quote_37x37.png', title: 'Quote', links: [] }  // Empty - has widget
  ],
  featureTabs: ['Featured', 'Weekly Expert Videos', 'Investor Seminars', 'Economic Research']
};


const lifePlanningMenu = {
  sections: [
    [
      { iconPath: './life-planning-in-school-52x52.png', title: 'In School', href: '#' },
      { iconPath: './life-planning-got-a-new-job-52x52.png', title: 'Got a New Job', href: '#' },
      { iconPath: './life-planning-buying-a-home-52x52.png', title: 'Buying a Home', href: '#' },
      { iconPath: './life-planning-starting-a-business-52x52.png', title: 'Starting a Business', href: '#' },
      { iconPath: './life-planning-planning-to-retire-52x52.png', title: 'Planning to Retire', href: '#' }
    ],
    [
      { iconPath: './life-planning-new-to-canada-52x52.png', title: 'New to Canada', href: '#' },
      { iconPath: './life-planning-tools-and-calculators-52x52.png', title: 'Tools & Calculators', href: '#' },
      { iconPath: './life-planning-td-helps-community-52x52.png', title: 'TD Helps Community', href: '#' }
    ]
  ],
  featureTabs: ['Featured', 'Advice on Everyday Finances', 'Investing Basics']
};

  return (
    <div style={{ 
      backgroundColor: 'white', 
      minHeight: '100vh',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#333'
    }}>
      
      {/* CSS Keyframes for Spinner */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      {/* 1. TOP UTILITY BAR - ADJUSTED TO MATCH SCREENSHOT */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '15px',
        marginBottom: '6px'
      }}>
        <div style={{
          width: '60%',
          display: 'flex',
          justifyContent: 'flex-end', // Aligned to right as per screenshot
          alignItems: 'center',
          marginTop: '2px',
          marginBottom: '2px',
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <a href="#" style={{ color: '#555', textDecoration: 'none', fontSize: '13px', paddingRight: '4px' }}>TD Home</a>
            <span style={{ color: '#ccc' }}>|</span>
            <a href="#" style={{ color: '#555', textDecoration: 'none', fontSize: '13px', padding: '0 4px' }}>Apply</a>
            <span style={{ color: '#ccc' }}>|</span>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '0 4px' }}>
              <span style={{ color: '#00391d', fontSize: '10px', marginRight: '5px' }}> <img 
              src="./icon-lock.gif" 
              alt="TD Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            /></span>
              <a href="#" style={{ color: styles.navBackground, fontWeight: 'bold', textDecoration: 'none', fontSize: '13px', paddingRight: '20px' }}>My Profile </a>
              
            </div>
            <span style={{ color: '#ccc' }}>|</span>
            
            <button style={{
              background: 'linear-gradient(to bottom, #fcfcfc, #e0e0e0)',
              color: styles.navBackground,
              border: '1px solid',
              padding: '2px 12px',
              borderRadius: '5px',
              fontSize: '11px',
              cursor: 'pointer',
              fontWeight: 'bold',
              marginRight: '15px',
              marginLeft: '5px'
            }}>Logout</button>
            
            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '5px' }}>
              <input 
                type="text" 
                placeholder="Site Search" 
                style={{
                  padding: '2px 5px',
                  border: '1px solid #aaa',
                  borderRight: 'none',
                  fontSize: '11px',
                  width: '210px',
                  height: '24px',
                  borderRadius: '2px 0 0 2px',
                  color: '#333'
                }}
              />
              <button style={{
                background: 'white',
                border: '1px solid #aaa',
                borderLeft: 'none',
                height: '24px',
                width: '24px',
                borderRadius: '0 2px 2px 0',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ transform: 'rotate(-45deg)', fontSize: '25px', color: '#555' }}>⚲</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV BAR - EXACT MATCH */}
      <div 
        style={{
          backgroundColor: styles.navBackground, // Darker Green
          width: '65%',
          display: 'flex',
          justifyContent: 'center',
          height: '40px', // Tighter height matches screenshot
          borderTop: '1px solid #002d17', // Subtle top border
          position: 'relative'  // ← ADD THIS LINE
        }}
        onMouseEnter={() => setHoveredNav('myaccounts')}  // ← ADD THIS LINE
        onMouseLeave={() => setHoveredNav(null)}          // ← ADD THIS LINE
      >
        <div style={{
          width: '970px',
          display: 'flex',
          alignItems: 'flex-start',
          height: '100%',
          position: 'relative'
        }}>
          {/* Logo - Overlapping Green Box */}
          <div style={{
            position: 'absolute',
            left: '0',
            top: '-15px', 
            bottom: '-15px',
            width: '64px',
            height: '70px',
            padding: '0',
            zIndex: 10,
          }}>
             <img 
              src="./td-logo.png" 
              alt="TD Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <nav style={{ display: 'flex', height: '100%', marginLeft: '70px' }}> {/* Margin accounts for logo width */}
            {/* Active Tab - Has the lime green underline */}
           <a 
              href="#" 
              style={{
                color: hoveredNav === 'myaccounts' ? 'black' : 'white',
                textDecoration: 'none',
                marginLeft: '15px',
                padding: '0 15px',
                fontSize: '17px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                height: '100%',
                borderBottom: hoveredNav === 'myaccounts' 
                  ? 'none' 
                  : `4px solid ${styles.navActiveUnderline}`,
                backgroundColor: hoveredNav === 'myaccounts' ? 'white' : 'transparent',
                boxSizing: 'border-box',
                transition: 'all 0.2s ease',
              }}
            >
              My Accounts
            </a>

            {/* Contact Us with menu */}
<a 
  href="#" 
  style={{
    color: hoveredNav === 'contactus' ? 'black' : 'white',
    textDecoration: 'none',
    padding: '0 15px',
    fontSize: '17px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    backgroundColor: hoveredNav === 'contactus' ? 'white' : 'transparent',
    transition: 'all 0.2s ease',
  }}
  onMouseEnter={() => setHoveredNav('contactus')}
  onMouseLeave={() => setHoveredNav(null)}
>
  Contact Us
</a>

{/* Products & Services with hover */}
<a 
  href="#" 
  style={{
    color: hoveredNav === 'products' ? 'black' : 'white',
    textDecoration: 'none',
    padding: '0 15px',
    fontSize: '17px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    backgroundColor: hoveredNav === 'products' ? 'white' : 'transparent',
    transition: 'all 0.2s ease',
  }}
  onMouseEnter={() => setHoveredNav('products')}
  onMouseLeave={() => setHoveredNav(null)}
>
  Products & Services
</a>

<a 
  href="#" 
  style={{
    color: hoveredNav === 'markets' ? 'black' : 'white',
    textDecoration: 'none',
    padding: '0 15px',
    fontSize: '17px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    backgroundColor: hoveredNav === 'markets' ? 'white' : 'transparent',
    transition: 'all 0.2s ease',
  }}
  onMouseEnter={() => setHoveredNav('markets')}
  onMouseLeave={() => setHoveredNav(null)}
>
  Markets & Research
</a>


{/* Life Planning with menu */}
<a 
  href="#" 
  style={{
    color: hoveredNav === 'lifeplanning' ? 'black' : 'white',
    textDecoration: 'none',
    padding: '0 15px',
    fontSize: '17px',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    backgroundColor: hoveredNav === 'lifeplanning' ? 'white' : 'transparent',
    transition: 'all 0.2s ease',
  }}
  onMouseEnter={() => setHoveredNav('lifeplanning')}
  onMouseLeave={() => setHoveredNav(null)}
>
  Life Planning
</a>

{/* MARKETS MENU - FULL WIDTH LINE AND TIGHTER BOTTOM SPACING */}
{hoveredNav === 'markets' && (
  <div style={{
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    width: '100%',
    backgroundColor: '#f5f5f5', // Light background
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}
  
  onMouseEnter={() => setHoveredNav('markets')}
    onMouseLeave={() => setHoveredNav(null)}>
    
    {/* 1. MAIN CONTENT (Centered 970px) */}
    <div style={{ 
        width: '970px', 
        padding: '30px 40px 20px 40px', // Standard padding for top area
        boxSizing: 'border-box' 
    }}>
      
      {/* Columns */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gap: '40px',
      }}>
        {marketsResearchMenu.columns.map((col, colIndex) => (
          <div key={colIndex}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
              {col.iconPath && (
                <img 
                  src={col.iconPath}
                  alt=""
                  style={{
                    width: '28px',
                    height: '28px',
                    objectFit: 'contain'
                  }}
                />
              )}
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', margin: 0 }}>
                {col.title}
              </h3>
            </div>
            
            {col.links.length > 0 && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {col.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    style={{
                      color: styles.navBackground,
                      textDecoration: 'none',
                      fontSize: '13px',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "black"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = styles.navBackground; }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>›</span>
                    <span>{link.text}</span>
                  </a>
                ))}
              </div>
            )}

            {/* LOADING BOX - COLUMN 1 */}
            {colIndex === 0 && (
              <div style={{
                marginTop: '15px',
                width: '100%',
                height: '180px',
                backgroundColor: '#eeeeee',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                 {/* Dark Grey Spinner */}
                 <div style={{
                    width: '40px',
                    height: '40px',
                    border: '4px solid #ddd',
                    borderTop: '4px solid #666', 
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                 }} />
              </div>
            )}

          </div>
        ))}
      </div>
    </div>

    {/* 2. FULL WIDTH DIVIDER LINE */}
    <div style={{ width: '100%', height: '1px', backgroundColor: '#d0d0d0', boxShadow: '0 2px 5px rgba(0,0,0.20,0.40)',
      position: 'relative',
      zIndex: 1}}></div>

    {/* 3. FOOTER TABS (Centered 970px with REDUCED PADDING) */}
    <div style={{ 
        width: '970px', 
        padding: '10px 40px 12px 40px', // Reduced vertical padding
        boxSizing: 'border-box',
    }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          {marketsResearchMenu.featureTabs.map((tab, index) => (
            <a
              key={index}
              href="#"
              style={{
                color: index === 0 ? styles.navBackground : '#666',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: index === 0 ? 'bold' : 'normal',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = styles.navBackground;
                e.currentTarget.style.fontWeight = 'bold';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = index === 0 ? styles.navBackground : '#666';
                e.currentTarget.style.fontWeight = index === 0 ? 'bold' : 'normal';
              }}
            >
              {tab}
            </a>
          ))}
        </div>
      </div>

  </div>
)}




          </nav>
        </div>
         {/* MEGA MENU - FULL WIDTH */}
        {hoveredNav === 'myaccounts' && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            width: '100%',
            backgroundColor: '#f5f5f5',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            display: 'flex',
          }}>
            <div style={{
              width: '970px',
              padding: '30px 40px',
              boxSizing: 'border-box'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '2fr auto 1fr',
                gap: '60px',
                alignItems: 'start'
              }}>
                
                {/* LEFT SECTION: EasyWeb Online Banking with 2 columns */}
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    color: '#666',
                    marginBottom: '20px',
                    marginTop: '0'
                  }}>
                    {myAccountsMenu.sections[0].title}
                  </h3>
                  
                  {/* Two columns under EasyWeb */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '40px'
                  }}>
                    {myAccountsMenu.sections[0].columns.map((column, colIndex) => (
                      <div key={colIndex} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px'
                      }}>
                        {column.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.href}
                            style={{
                              color: styles.navBackground,
                              textDecoration: 'none',
                              fontSize: '13px',
                              transition: 'color 0.2s ease'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = 'black';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = styles.navBackground;
                              e.currentTarget.style.textDecoration = 'none';
                            }}
                          >
                            {link.text}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* VERTICAL DIVIDER */}
                <div style={{
                  width: '1px',
                  backgroundColor: '#d0d0d0',
                  height: '140px'
                }} />

                {/* RIGHT SECTION: WebBroker Online Investing */}
                <div>
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 'normal',
                    color: '#666',
                    marginBottom: '20px',
                    marginTop: '0'
                  }}>
                    {myAccountsMenu.sections[1].title}
                  </h3>
                  
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    {myAccountsMenu.sections[1].columns[0].links.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        style={{
                          color: styles.navBackground,
                          textDecoration: 'none',
                          fontSize: '13px',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "black";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = styles.navBackground;
                          e.currentTarget.style.textDecoration = 'none';
                        }}
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}


        {/* CONTACT US MEGA MENU */}
        {hoveredNav === 'contactus' && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: '0',
            right: '0',
            width: '100%',
            backgroundColor: '#f5f5f5',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center'
          }}
          onMouseEnter={() => setHoveredNav('contactus')}
    onMouseLeave={() => setHoveredNav(null)}
          >
            <div style={{
              width: '970px',
              padding: '30px 40px',
              boxSizing: 'border-box'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '60px',
                alignItems: 'start'
              }}>
                
                {contactUsMenu.sections.map((section, index) => (
                  <div key={index}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '20px'
                    }}>
                      {section.iconPath && (
  <img 
    src={section.iconPath}
    alt=""
    style={{
      width: '28px',
      height: '28px',
      objectFit: 'contain'
    }}
  />
)}

                      <h3 style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#666',
                        margin: 0
                      }}>
                        {section.title}
                      </h3>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '12px'
                    }}>
                      {section.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          style={{
                            color: styles.navBackground,
                            textDecoration: 'none',
                            fontSize: '13px',
                            transition: 'color 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px' 
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = 'black';
                            e.currentTarget.style.textDecoration = 'underline';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = styles.navBackground;
                            e.currentTarget.style.textDecoration = 'none';
                          }}
                        >
                           <span style={{ fontSize: '14px', fontWeight: 'bold', marginRight: '2px' }}>›</span>
                           <span>{link.text}</span>
  
  {/* ✅ Trailing icon */}
  {link.hasExternalIcon && (
    <span style={{ fontSize: '11px', marginLeft: '3px' }}>⧉</span>
  )}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        )}





        {/* PRODUCTS & SERVICES MEGA MENU */}
{hoveredNav === 'products' && (
  <div style={{
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    width: '100%',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center'
  }}
  onMouseEnter={() => setHoveredNav('products')}
    onMouseLeave={() => setHoveredNav(null)}
  >
    <div style={{
      width: '970px',
      padding: '30px 40px',
      boxSizing: 'border-box'
    }}>
      {productsServicesMenu.sections.map((row, rowIndex) => (
        <div 
          key={rowIndex}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: '40px',
            marginBottom: rowIndex === 0 ? '20px' : '0'
          }}
        >
          {row.map((column, colIndex) => (
            <div key={colIndex}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px'
              }}>
                {column.iconPath && (
  <img 
    src={column.iconPath}
    alt=""
    style={{
      width: '28px',
      height: '28px',
      objectFit: 'contain'
    }}
  />
)}
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  color: '#333',
                  margin: 0
                }}>
                  {column.title}
                </h3>
              </div>
              
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    style={{
                      color: styles.navBackground,
                      textDecoration: 'none',
                      fontSize: '12px',
                      transition: 'color 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'black';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = styles.linkGreen;
                    }}
                  >
                    <span style={{ fontSize: '14px', fontWeight: 'bold' }}>›</span>
                    <span>{link.text}</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)}


{/* LIFE PLANNING MEGA MENU - UPDATED TO MATCH MARKETS STYLE */}
{hoveredNav === 'lifeplanning' && (
  <div style={{
    position: 'absolute',
    top: '100%',
    left: '0',
    right: '0',
    width: '100%',
    backgroundColor: '#f5f5f5',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }}
  
  onMouseEnter={() => setHoveredNav('lifeplanning')}
    onMouseLeave={() => setHoveredNav(null)}
    >
    
    {/* 1. MAIN CONTENT (Icons + Wave) */}
    <div style={{ 
        width: '970px', 
        padding: '30px 40px 10px 40px', // Standard top padding
        boxSizing: 'border-box' 
    }}>
      
      {/* Icon Grid - 2 Rows */}
      {lifePlanningMenu.sections.map((row, rowIndex) => (
        <div 
          key={rowIndex}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
            gap: '40px',
            marginBottom: rowIndex === 0 ? '30px' : '20px',
            justifyItems: 'center'
          }}
        >
          {row.map((item, itemIndex) => (
            <a
              key={itemIndex}
              href={item.href}
              style={{
                textDecoration: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                transition: 'transform 0.2s ease'
              }}
            >
              <img 
                src={item.iconPath}
                alt={item.title}
                style={{ width: '52px', height: '52px', objectFit: 'contain' }}
              />
              <span style={{
                fontSize: '13px',
                color: '#333',
                fontWeight: 'normal',
                textAlign: 'center',
                maxWidth: '120px'
              }}>
                {item.title}
              </span>
            </a>
          ))}
          
          {rowIndex === 1 && (
            <>
              <div />
              <div />
            </>
          )}
        </div>
      ))}

   

    </div>

    {/* 2. FULL WIDTH DIVIDER LINE */}
    <div style={{ width: '100%', height: '1px', backgroundColor: '#d0d0d0', boxShadow: '0 2px 5px rgba(0,0,0.20,0.40)',
      position: 'relative',
      zIndex: 1 }}></div>

    {/* 3. FOOTER TABS (Reduced Padding) */}
    <div style={{ 
        width: '970px', 
        padding: '10px 40px 12px 40px', // Reduced vertical padding
        boxSizing: 'border-box' 
    }}>
        <div style={{ display: 'flex', gap: '20px' }}>
          {lifePlanningMenu.featureTabs.map((tab, index) => (
            <a
              key={index}
              href="#"
              style={{
                color: index === 0 ? 'black' : styles.navBackground,
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: index === 0 ? 'bold' : 'normal',
                paddingBottom: '5px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'black';
                e.currentTarget.style.fontWeight = 'bold';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = styles.navBackground;
              }}
            >
              {tab}
            </a>
          ))}
        </div>
      </div>

  </div>
)}





      </div>

      

      {/* 3. CONTENT AREA */}
      <div style={{
        width: '65%',
        marginTop: '15px',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start'
      }}>
        
        {/* LEFT SIDEBAR */}
        <div style={{ width: '170px', flexShrink: 0 , marginTop: '10px', }}>
          
          {/* Accounts Section (Expanded) */}
          <div style={{ marginBottom: '10px' }}>
            <div style={{
              backgroundColor: styles.bgGrey,
              padding: '5px 10px',
              border: '1px solid #ccc',
              fontWeight: 'bold',
              fontSize: '12px',
               color: styles.navBackground
            }}>Accounts</div>
            <div style={{ border: '1px solid #ccc', borderTop: 'none', padding: '10px 8px' }}>
              <div style={{ marginBottom: '8px', fontSize: '11px' }}>
                <a href="#" style={{color: '#333', textDecoration: 'none'}}>Personal Accounts</a>
              </div>
              <div style={{ marginBottom: '8px', fontSize: '11px', fontWeight: 'bold' }}>
                <span style={{color: '#333', marginRight: '4px'}}>▸</span>
                <a href="#" style={{color: styles.tdGreen, textDecoration: 'none'}}>Small Business Accounts</a>
              </div>
              
              <div style={{ marginLeft: '12px', marginBottom: '10px' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#333', marginBottom: '4px' }}>
                  <span style={{fontSize: '9px', verticalAlign: 'middle'}}>▼</span> View Accounts
                </div>
                <div style={{ marginLeft: '10px', fontSize: '11px', color: '#333', lineHeight: '1.4' }}>
                  Order Cheques &<br/>Deposit Bags
                </div>
              </div>

              <div style={{ fontSize: '11px', marginBottom: '8px' }}>
                <a href="#" style={{color: '#333', textDecoration: 'none'}}>Statements & Documents</a>
              </div>
              <div style={{ fontSize: '11px', marginBottom: '8px' }}>
                <a href="#" style={{color: '#333', textDecoration: 'none'}}>Communications</a>
              </div>
              <div style={{ fontSize: '11px' }}>
                <a href="#" style={{color: '#333', textDecoration: 'none'}}>Order Foreign Currency</a>
              </div>
            </div>
          </div>

          {/* Collapsed Sections */}
          {['Pay Bills', 'Transfers'].map((item) => (
            <div key={item} style={{
              marginBottom: '10px',
              background: styles.sidebarHeaderGradient,
              border: styles.sidebarHeaderBorder,
              padding: '6px 10px',
              fontSize: '12px',
              cursor: 'pointer',
            color: styles.navBackground
            }}>{item}</div>
          ))}

          {/* Special Section */}
          <div style={{
            marginBottom: '10px',
            background: styles.sidebarHeaderGradient,
            border: styles.sidebarHeaderBorder,
            padding: '6px 10px',
            fontSize: '12px',
            fontStyle: 'italic',
             color: styles.navBackground
          }}>Interac e-Transfer®</div>

          {['Investments', 'Profile & Settings'].map((item) => (
            <div key={item} style={{
              marginBottom: '10px',
              background: styles.sidebarHeaderGradient,
              border: styles.sidebarHeaderBorder,
              padding: '6px 10px',
              fontSize: '12px',
               color: styles.navBackground,
              cursor: 'pointer'
            }}>{item}</div>
          ))}

          {/* My Links */}
          <div style={{ marginBottom: '10px', border: '1px solid #ccc' }}>
             <div style={{
                padding: '6px 10px',
                fontSize: '14px',
                fontWeight: 'normal',
                color: '#333',
                borderBottom: '1px solid #eee'
            }}>My Links</div>
            <div style={{ padding: '10px' }}>
              <div style={{ fontSize: '10px', marginBottom: '8px' }}>
                <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>Choose my links</a>
              </div>
              <div style={{ fontSize: '11px', color: '#333', marginBottom: '5px' }}>› <a href="#" style={{color: '#333', textDecoration: 'none'}}>Pay Bills</a></div>
              <div style={{ fontSize: '11px', color: '#333', marginBottom: '5px' }}>› <a href="#" style={{color: '#333', textDecoration: 'none'}}>Make a Transfer</a></div>
              <div style={{ fontSize: '11px', color: '#333', marginBottom: '5px' }}>› <a href="#" style={{color: '#333', textDecoration: 'none'}}>Purchase Mutual Funds</a></div>
              <div style={{ fontSize: '11px', color: '#333' }}>› <a href="#" style={{color: '#333', textDecoration: 'none'}}>WebBroker</a></div>
            </div>
          </div>

          <div style={{ marginBottom: '10px' }}>
             <div style={{
                padding: '6px 0',
                fontSize: '13px',
                fontWeight: 'bold',
                color: '#555',
                lineHeight: '1.2'
            }}>More Online Services</div>
            <div style={{ padding: '5px 0' }}>
              <div style={{ fontSize: '11px', color: '#333' }}>› <a href="#" style={{color: styles.linkGreen, textDecoration: 'none'}}>Apply for Products</a></div>
            </div>
          </div>

        </div>

        {/* CENTER CONTENT */}
        <div style={{ flex: 1, paddingLeft: '10px' }}>
            
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '15px'
            }}>
              <h1 style={{
                fontSize: '24px',
                color: styles.tdGreen,
                fontWeight: 'normal',
                margin: 0,
                fontFamily: 'Arial, sans-serif'
              }}>Account Activity</h1>
              <div style={{ fontSize: '10px', marginTop: '5px' }}>
                <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>Help</a>
                <span style={{ margin: '0 5px', color: '#ccc' }}>|</span>
                <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>Print</a>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '10px 0 15px 0' }} />

            {/* Account Selector */}
            <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#555', marginRight: '5px' }}>Account:</span>
              <select style={{
                padding: '2px',
                border: '1px solid #aaa',
                fontSize: '11px',
                width: '350px',
                color: '#333'
              }}>
                <option>{selectedAccount}</option>
              </select>
            </div>

            {/* Balance Box */}
            <div style={{
              backgroundColor: '#f3f3f3',
              border: '1px solid #e0e0e0',
              padding: '10px 15px',
              display: 'flex',
              alignItems: 'flex-start',
              marginBottom: '10px'
            }}>
              <div style={{ marginRight: '40px' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#666', marginBottom: '2px' }}>Current Balance</div>
                <div style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>$19.67</div>
              </div>
              
              <div style={{ borderLeft: '1px solid #ccc', height: '35px', marginRight: '15px' }}></div>

              <div style={{ marginRight: 'auto' }}>
                <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#666', marginBottom: '2px', display: 'flex', alignItems: 'center' }}>
                  Available Balance
                  <span style={{
                    marginLeft: '4px',
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#8bc53f',
                    color: 'white',
                    fontSize: '9px',
                    textAlign: 'center',
                    lineHeight: '12px',
                    cursor: 'help',
                    fontWeight: 'bold'
                  }}>?</span>
                </div>
                <div style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>$19.67</div>
              </div>

              <div style={{ alignSelf: 'center' }}>
                <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline', fontSize: '10px', fontWeight: 'bold' }}>
                  Direct deposit form (PDF)
                </a>
                <span style={{ 
                    display: 'inline-block',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#8bc53f',
                    color: 'white',
                    fontSize: '9px',
                    textAlign: 'center',
                    lineHeight: '12px',
                    cursor: 'help',
                    fontWeight: 'bold',
                    marginLeft: '4px'
                  }}>?</span>
              </div>
            </div>

            <div style={{ fontSize: '10px', color: '#666', marginBottom: '20px' }}>
              Balance Date: Dec 02, 2025
            </div>

            {/* Table Header Controls */}
            <div style={{
              border: '1px solid #ccc',
              borderBottom: 'none',
              padding: '8px',
              backgroundColor: 'white'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '10px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#333' }}>View</span>
                        <select style={{
                        padding: '1px',
                        border: '1px solid #999',
                        fontSize: '11px',
                        width: '160px'
                        }}>
                        <option>All Transactions</option>
                        </select>
                    </div>
                    <div style={{ fontSize: '10px', color: '#333' }}>
                        <span style={{ fontWeight: 'bold' }}>30 days</span>
                        <span style={{ margin: '0 5px' }}>|</span>
                        <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>60 days</a>
                        <span style={{ margin: '0 5px' }}>|</span>
                        <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>90 days</a>
                        <span style={{ margin: '0 5px' }}>|</span>
                        <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>120 days</a>
                    </div>
                </div>
                
                <div style={{ fontSize: '11px' }}>
                    <a href="#" style={{ color: styles.linkGreen, textDecoration: 'none', fontWeight: 'bold' }}>
                        + Search by Month (up to 18 months)
                    </a>
                </div>
            </div>

            {/* Transaction Table */}
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: '11px',
              border: '1px solid #ccc'
            }}>
              <thead>
                <tr style={{ 
                    background: 'linear-gradient(to bottom, #ffffff 0%, #f2f2f2 100%)', 
                    borderBottom: '1px solid #ccc' 
                }}>
                  <th style={{ padding: '5px 8px', textAlign: 'left', fontWeight: 'bold', color: '#333', width: '80px' }}>
                    Date <span style={{ fontSize: '9px' }}>▲</span>
                  </th>
                  <th style={{ padding: '5px 8px', textAlign: 'left', fontWeight: 'normal', color: '#333' }}>
                    Transaction Description
                    <span style={{ marginLeft: '4px', color: '#8bc53f', fontSize: '10px' }}>⚲</span>
                  </th>
                  <th style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 'normal', color: '#333', width: '90px' }}>
                    Withdrawals
                    <span style={{
                      marginLeft: '3px',
                      display: 'inline-block',
                      width: '11px',
                      height: '11px',
                      borderRadius: '50%',
                      backgroundColor: '#8bc53f',
                      color: 'white',
                      fontSize: '9px',
                      textAlign: 'center',
                      lineHeight: '11px',
                      cursor: 'help'
                    }}>?</span>
                  </th>
                  <th style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 'normal', color: '#333', width: '90px' }}>
                    Deposits
                    <span style={{
                      marginLeft: '3px',
                      display: 'inline-block',
                      width: '11px',
                      height: '11px',
                      borderRadius: '50%',
                      backgroundColor: '#8bc53f',
                      color: 'white',
                      fontSize: '9px',
                      textAlign: 'center',
                      lineHeight: '11px',
                      cursor: 'help'
                    }}>?</span>
                  </th>
                  <th style={{ padding: '5px 8px', textAlign: 'right', fontWeight: 'normal', color: '#333', width: '90px' }}>
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => {
                    const isNegative = transaction.balance.includes('(');
                    const balColor = isNegative ? styles.redText : '#333';
                    const bg = index % 2 === 0 ? 'white' : '#fcfcfc';

                    return (
                        <tr 
                            key={index}
                            style={{
                            backgroundColor: bg,
                            borderBottom: '1px solid #eee'
                            }}
                        >
                            <td style={{ 
                                padding: '4px 8px',
                                color: '#333',
                                whiteSpace: 'nowrap'
                            }}>
                                {transaction.expandable ? (
                                    <span style={{ color: styles.linkGreen, fontWeight: 'bold', marginRight: '3px', cursor: 'pointer' }}>+ </span>
                                ) : null}
                                {transaction.date}
                            </td>
                            <td style={{ 
                                padding: '4px 8px',
                                color: transaction.link ? styles.linkGreen : '#333'
                            }}>
                                {transaction.link ? (
                                    <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>
                                    {transaction.description}
                                    </a>
                                ) : (
                                    transaction.description
                                )}
                            </td>
                            <td style={{ padding: '4px 8px', textAlign: 'right', color: '#333' }}>
                                {transaction.withdrawals}
                            </td>
                            <td style={{ padding: '4px 8px', textAlign: 'right', color: '#333' }}>
                                {transaction.deposits}
                            </td>
                            <td style={{ padding: '4px 8px', textAlign: 'right', color: balColor }}>
                                {transaction.balance}
                            </td>
                        </tr>
                    );
                })}
              </tbody>
            </table>

            {/* Totals Section */}
            <div style={{
                backgroundColor: '#f9f9f9',
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: '8px'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 90px 90px 90px',
                    textAlign: 'right',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: '#333',
                    marginTop: '10px'
                }}>
                    <div style={{ padding: '4px 10px' }}>Total :</div>
                    <div style={{ padding: '4px 8px', borderTop: '1px solid #999', borderBottom: '3px double #999' }}>$87,844.20</div>
                    <div style={{ padding: '4px 8px', borderTop: '1px solid #999', borderBottom: '3px double #999' }}>$88,342.66</div>
                    <div></div> {/* Empty for balance column */}
                </div>
            </div>

            {/* Download Section */}
            <div style={{
              backgroundColor: '#f9f9f9',
              border: '1px solid #ccc',
              borderTop: 'none',
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px'
            }}>
                <div style={{ display: 'flex', gap: '5px' }}>
                    <select style={{
                        padding: '2px',
                        border: '1px solid #999',
                        fontSize: '11px',
                        width: '180px'
                    }}>
                        <option>Microsoft Money</option>
                    </select>
                    <button style={{
                        background: 'linear-gradient(to bottom, #efffdf 0%, #d0eeb4 100%)',
                        color: '#333',
                        border: '1px solid #8fb564',
                        padding: '2px 10px',
                        borderRadius: '3px',
                        fontSize: '11px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}>
                        Download
                    </button>
                </div>
                
                <div style={{ fontSize: '10px', color: '#333' }}>
                    All transactions to the close of the previous BUSINESS day will be downloaded. {' '}
                    <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>
                        View supported versions of the software downloads.
                    </a>
                </div>
            </div>

            {/* Footer Links */}
            <div style={{
              marginTop: '20px',
              fontSize: '11px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
                 <a href="#" style={{ color: styles.linkGreen, textDecoration: 'none', fontWeight: 'bold' }}>+Legal Notes</a>
                 <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>Print</a>
            </div>

        </div>
      </div>
    </div>
  );
}