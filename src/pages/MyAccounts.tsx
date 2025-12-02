import { useState } from 'react';

export default function TDBankAccount() {
  const [selectedAccount] = useState('TD UNLIMITED BUSINESS PLAN - 5241534 $19.67');
  
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

  return (
    <div style={{ 
      backgroundColor: 'white', 
      minHeight: '100vh',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      color: '#333',
    }}>
      
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
            <a href="#" style={{ color: '#555', textDecoration: 'none', fontSize: '14px', paddingRight: '4px' }}>TD Home</a>
            <span style={{ color: '#ccc' }}>|</span>
            <a href="#" style={{ color: '#555', textDecoration: 'none', fontSize: '14px', padding: '0 4px' }}>Apply</a>
            <span style={{ color: '#ccc' }}>|</span>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', padding: '0 4px' }}>
              <span style={{ color: '#00391d', fontSize: '10px', marginRight: '5px' }}>🔒</span>
              <a href="#" style={{ color: '#000', fontWeight: 'bold', textDecoration: 'none', fontSize: '14px', paddingRight: '20px' }}>My Profile </a>
              
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
                <span style={{ transform: 'rotate(-45deg)', fontSize: '12px', color: '#555' }}>⚲</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV BAR - EXACT MATCH */}
      <div style={{
        backgroundColor: styles.navBackground, // Darker Green
        width: '65%',
        display: 'flex',
        justifyContent: 'center',
        height: '40px', // Tighter height matches screenshot
        borderTop: '1px solid #002d17' // Subtle top border
      }}>
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
            boxShadow: '2px 0 5px rgba(0,0,0,0.1)'
          }}>
             <img 
              src="./td-logo.png" 
              alt="TD Logo" 
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          <nav style={{ display: 'flex', height: '100%', marginLeft: '70px' }}> {/* Margin accounts for logo width */}
            {/* Active Tab - Has the lime green underline */}
            <a href="#" style={{
              color: 'white',
              textDecoration: 'none',
              marginLeft: '15px',
              padding: '0 15px',
              fontSize: '17px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              borderBottom: `4px solid ${styles.navActiveUnderline}`, // The lime green strip
              boxSizing: 'border-box'
            }}>My Accounts</a>
            
            {/* Inactive Tabs */}
            {['Contact Us', 'Products & Services', 'Markets & Research', 'Life Planning'].map((item) => (
                <a key={item} href="#" style={{
                    color: 'white',
                    textDecoration: 'none',
                    padding: '0 15px',
                    fontSize: '17px',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%'
                }}>{item}</a>
            ))}
          </nav>
        </div>
      </div>

      {/* 3. CONTENT AREA */}
      <div style={{
        width: '65%',
        marginTop: '15px',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        paddingTop: '15px',             // Padding on top
        paddingRight: '15px',           // Padding on right
        paddingBottom: '15px',          // Padding on bottom
        paddingLeft: '0',               // NO padding on left - allows sidebar to overflow
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
        


          {/* LEFT SIDEBAR */}
          <div style={{ width: '170px', flexShrink: 0 , marginTop: '10px', }}>


            <div
              style={{ 
                marginBottom: '10px',
                marginLeft: '-10px',           // overflow to the left
                width: 'calc(100% + 10px)',    // keep right edge aligned
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <div
                style={{
                  backgroundColor: '#fffffd',  // ← changed from styles.bgGrey
                  padding: '5px 10px',
                  border: '1px solid #ccc',
                  fontWeight: 800,
                  fontSize: '12px',
                  color: '#4c7b6d',
                }}
              >
                Accounts
              </div>

              <div
                style={{
                  backgroundColor: '#fffffd',  // ← added background
                  border: '1px solid #ccc',
                  borderTop: 'none',
                  borderLeft: '4px solid #4c7b6d',
                  padding: '10px 8px',
                }}
              >
                <div style={{ marginBottom: 'px', fontSize: '11px' }}>
                  <a href="#"
                    style={{ color: '#4c7b6d', textDecoration: 'none', fontWeight: 500 }}
                  >Personal Accounts</a>
                </div>

                {/* Divider Line */}
                <div
                  style={{
                    borderTop: '1px solid #e5e5e5',
                    margin: '10px 0',
                  }}
                ></div>

                <div style={{ marginBottom: '8px', fontSize: '11px', fontWeight: 600 }}>
                  <span style={{ color: '#4c7b6d', marginRight: '4px' }}>▸</span>
                  <a
                    href="#"
                    style={{ color: '#4c7b6d', textDecoration: 'none', fontWeight: 700 }}
                  >
                    Small Business Accounts
                  </a>
                </div>

                <div style={{ marginLeft: '12px', marginBottom: '10px' }}>
                  <div
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#4c7b6d',
                      marginBottom: '4px',
                    }}
                  >
                    <span style={{ fontSize: '9px', verticalAlign: 'middle' }}>▼</span>{' '}
                    View Accounts
                  </div>
                  <div
                    style={{
                      marginLeft: '20px',
                      fontSize: '11px',
                      color: '#4c7b6d',
                      lineHeight: '1.4',
                      fontWeight: 500,
                    }}
                  >
                    Order Cheques &<br />
                    Deposit Bags
                  </div>
                </div>

                {/* Divider Line */}
                <div
                  style={{
                    borderTop: '1px solid #e5e5e5',
                    margin: '10px 0',
                  }}
                ></div>

                <div style={{ fontSize: '11px', marginBottom: '8px' }}>
                  <a
                    href="#"
                    style={{ color: '#4c7b6d', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Statements & Documents
                  </a>
                </div>

                {/* Divider Line */}
                <div
                  style={{
                    borderTop: '1px solid #e5e5e5',
                    margin: '10px 0',
                  }}
                ></div>

                <div style={{ fontSize: '11px', marginBottom: '8px' }}>
                  <a
                    href="#"
                    style={{ color: '#4c7b6d', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Communications
                  </a>
                </div>

                {/* Divider Line */}
                <div
                  style={{
                    borderTop: '1px solid #e5e5e5',
                    margin: '10px 0',
                  }}
                ></div>

                <div style={{ fontSize: '11px' }}>
                  <a
                    href="#"
                    style={{ color: '#4c7b6d', textDecoration: 'none', fontWeight: 600 }}
                  >
                    Order Foreign Currency
                  </a>
                </div>
              </div>
            </div>

          {['Pay Bills', 'Transfers'].map((item) => (
              <div
                key={item}
                style={{
                  marginBottom: '10px',
                  marginLeft: '-10px',
                  width: 'calc(100% + 10px)',
                  backgroundColor: '#f6f7f5',
                  border: '0.5px solid #4c7b6d',  // ← changed border color
                  padding: '6px 10px',
                  fontSize: '12px',
                  cursor: 'pointer',
                  color: '#4c7b6d',
                  fontWeight: '600',
                }}
              >
                {item}
              </div>
            ))}

            <div
              style={{
                marginBottom: '10px',
                marginLeft: '-10px',
                width: 'calc(100% + 10px)',
                backgroundColor: '#f6f7f5',
                border: '0.5px solid #4c7b6d',  // ← changed border color
                padding: '6px 10px',
                fontSize: '12px',
                fontStyle: 'italic',
                color: '#4c7b6d',
                fontWeight: '600',
              }}
            >
              Interac e-Transfer®
            </div>

            {['Investments', 'Profile & Settings'].map((item) => (
              <div
                key={item}
                style={{
                  marginBottom: '10px',
                  marginLeft: '-10px',
                  width: 'calc(100% + 10px)',
                  backgroundColor: '#f6f7f5',
                  border: '0.5px solid #4c7b6d',  // ← changed border color
                  padding: '6px 10px',
                  fontSize: '12px',
                  color: '#4c7b6d',
                  cursor: 'pointer',
                  fontWeight: '600',
                }}
              >
                {item}
              </div>
            ))}


            {/* My Links */}
            <div style={{ marginBottom: '10px' }}>
              <div style={{
                  padding: '6px 10px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  backgroundColor: '#fffffd', 
                  color: '#555',
                  lineHeight: '1.2',
              }}>My Links</div>
              <div style={{ padding: '10px' }}>
                <div style={{ fontSize: '11px', marginBottom: '8px' }}>
                  <a href="#" style={{ color: '#4c7b6d', textDecoration: 'underline', fontWeight: '600' }}>Choose my links</a>
                </div>
                <div style={{ fontSize: '11px', color: '#4c7b6d', marginBottom: '5px', fontWeight: '600' }}>› <a href="#" style={{color: '#4c7b6d', textDecoration: 'none', fontWeight: '600'}}>Pay Bills</a></div>
                <div style={{ fontSize: '11px', color: '#4c7b6d', marginBottom: '5px', fontWeight: '600' }}>› <a href="#" style={{color: '#4c7b6d', textDecoration: 'none', fontWeight: '600'}}>Make a Transfer</a></div>
                <div style={{ fontSize: '11px', color: '#4c7b6d', marginBottom: '5px', fontWeight: '600' }}>› <a href="#" style={{color: '#4c7b6d', textDecoration: 'none', fontWeight: '600'}}>Purchase Mutual Funds</a></div>
                <div style={{ fontSize: '11px', color: '#4c7b6d', fontWeight: '700' }}>› <a href="#" style={{color: '#4c7b6d', textDecoration: 'none', fontWeight: '600'}}>WebBroker</a></div>
              </div>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <div style={{
                  padding: '6px 10px',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  backgroundColor: '#fffffd', 
                  color: '#555',
                  lineHeight: '1.2'
              }}>More Online<br/>Services</div>
              <div style={{ padding: '5px 10px' }}>
                <div style={{ fontSize: '11px', color: '#4c7b6d', fontWeight: '700' }}>› <a href="#" style={{color: '#4c7b6d', textDecoration: 'none', fontWeight: '600'}}>Apply for Products</a></div>
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