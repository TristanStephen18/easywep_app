import { useState, type SetStateAction } from 'react';

export default function TDBankAccount() {
  const [selectedAccount] = useState('TD UNLIMITED BUSINESS PLAN - 5241534 $19.67');
  const [sortField, setSortField] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  
  const handleSort = (field: SetStateAction<string>) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
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
      backgroundColor: '#F1F1F1', 
      minHeight: '100vh',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '12px',
      display: 'flex',
      flexDirection: 'column',
      color: '#333'
    }}>
      
      {/* GREEN HEADER - TOP UTILITY BAR + NAV */}
      <div style={{
        backgroundColor: styles.navBackground,
        width: '100%',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        {/* Top Utility Bar */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '15px',
          paddingBottom: '6px',
          backgroundColor: 'white'
        }}>
          <div style={{
            width: '1200px',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
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

        {/* Main Nav Bar */}
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          height: '40px',
          borderTop: '1px solid #002d17'
        }}>
          <div style={{
            width: '1200px',
            display: 'flex',
            alignItems: 'flex-start',
            height: '100%',
            position: 'relative'
          }}>
            {/* Logo */}
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

            <nav style={{ display: 'flex', height: '100%', marginLeft: '70px' }}>
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
                borderBottom: `4px solid ${styles.navActiveUnderline}`,
                boxSizing: 'border-box'
              }}>My Accounts</a>
              
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
      </div>

      {/* MAIN CONTENT AREA - RED SIDEBAR + DOCUMENT AREA */}
      <div style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
      }}>
        <div style={{
          width: '1200px',
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start'
        }}>
          
          {/* RED - LEFT SIDEBAR */}
          <div style={{ width: '200px', flexShrink: 0 }}>
            
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
              <div style={{ border: '1px solid #ccc', borderTop: 'none', padding: '10px 8px', backgroundColor: 'white' }}>
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
            <div style={{ marginBottom: '10px', border: '1px solid #ccc', backgroundColor: 'white' }}>
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
                  color: '#333',
                  lineHeight: '1.2'
              }}>More Online Services</div>
              <div style={{ padding: '5px 0' }}>
                <div style={{ fontSize: '11px', color: '#333' }}>› <a href="#" style={{color: styles.linkGreen, textDecoration: 'none'}}>Apply for Products</a></div>
              </div>
            </div>

          </div>

          {/* DOCUMENT AREA (YELLOW + PURPLE) - WITH SHADOW */}
          <div style={{ 
            flex: 1,
            backgroundColor: 'white',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            borderRadius: '2px'
          }}>
            
            {/* ACCOUNT DETAILS SECTION */}
            <div style={{ padding: '20px', backgroundColor: 'white' }}>
              
              {/* Header */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px'
              }}>
                <h1 style={{
                  fontSize: '32px',
                  color: '#2d5016',
                  fontWeight: 'normal',
                  margin: 0,
                  fontFamily: 'Arial, sans-serif'
                }}>Account Activity</h1>
                <div style={{ fontSize: '13px' }}>
                  <a href="#" style={{ color: '#176940', textDecoration: 'underline' }}>Help</a>
                  <span style={{ margin: '0 5px', color: '#ccc' }}>|</span>
                  <a href="#" style={{ color: '#176940', textDecoration: 'underline' }}>Print</a>
                </div>
              </div>

              {/* Account Selector */}
              <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#333', marginRight: '8px', fontWeight: 'bold' }}>Account:</span>
                <select style={{
                  padding: '4px 8px',
                  border: '1px solid #999',
                  fontSize: '13px',
                  minWidth: '420px',
                  color: '#476a5e',
                  fontFamily: 'Arial, sans-serif',
                  backgroundColor: 'white'
                }}>
                  <option>{selectedAccount}</option>
                </select>
              </div>

              {/* Balance Box */}
              <div style={{
                backgroundColor: '#f9f9f9',
                border: '1px solid #d6d6d6',
                padding: '15px 20px',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '60px', paddingBottom: '15px', borderBottom: '1px solid #d6d6d6' }}>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#555', marginBottom: '8px' }}>Current Balance</div>
                    <div style={{ fontSize: '24px', color: '#333', fontWeight: 'normal' }}>$19.67</div>
                  </div>
                  
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#555', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      Available Balance
                      <span style={{
                        display: 'inline-block',
                        width: '14px',
                        height: '14px',
                        borderRadius: '50%',
                        backgroundColor: '#7dc242',
                        color: 'white',
                        fontSize: '10px',
                        textAlign: 'center',
                        lineHeight: '14px',
                        cursor: 'help',
                        fontWeight: 'bold'
                      }}>?</span>
                    </div>
                    <div style={{ fontSize: '24px', color: '#333', fontWeight: 'normal' }}>$19.67</div>
                  </div>

                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <a href="#" style={{ color: '#176940', textDecoration: 'underline', fontSize: '13px' }}>
                      Direct deposit form (PDF)
                    </a>
                    <span style={{
                      display: 'inline-block',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      backgroundColor: '#7dc242',
                      color: 'white',
                      fontSize: '10px',
                      textAlign: 'center',
                      lineHeight: '14px',
                      cursor: 'help',
                      fontWeight: 'bold'
                    }}>?</span>
                  </div>
                </div>

                {/* Balance Date */}
                <div style={{ fontSize: '13px', color: '#555', marginTop: '12px' }}>
                  Balance Date:  Dec 02, 2025
                </div>
              </div>

              {/* Table Controls */}
              <div style={{
                backgroundColor: 'white',
                border: '1px solid #c0c0c0',
                padding: '12px 15px'
              }}>
                  <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '15px'
                  }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '13px', color: '#333' }}>View</span>
                          <select style={{
                          padding: '4px 8px',
                          border: '1px solid #999',
                          fontSize: '13px',
                          minWidth: '240px',
                          fontFamily: 'Arial, sans-serif',
                          backgroundColor: 'white',
                          color: '#333'
                          }}>
                          <option>All Transactions</option>
                          </select>
                      </div>
                      <div style={{ fontSize: '13px', color: '#333' }}>
                          <span style={{ fontWeight: 'bold' }}>30 days</span>
                          <span style={{ margin: '0 6px' }}>|</span>
                          <a href="#" style={{ color: '#176940', textDecoration: 'underline' }}>60 days</a>
                          <span style={{ margin: '0 6px' }}>|</span>
                          <a href="#" style={{ color: '#176940', textDecoration: 'underline' }}>90 days</a>
                          <span style={{ margin: '0 6px' }}>|</span>
                          <a href="#" style={{ color: '#176940', textDecoration: 'underline' }}>120 days</a>
                      </div>
                  </div>
                  
                  <div style={{ fontSize: '13px' }}>
                      <a href="#" style={{ color: '#176940', textDecoration: 'none' }}>
                          Search by Month (up to 18 months)
                      </a>
                  </div>
              </div>
            </div>

            {/* PURPLE SECTION - Transaction Table */}
            <div style={{ padding: '0 20px 20px 20px' }}>
              
              {/* Transaction Table */}
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '13px',
                border: `0.5px solid #95C1A3`,
                backgroundColor: 'white'
              }}>
              <thead>
                <tr style={{ 
                    background: '#f9f9f9',
                    borderBottom: '0.5px solid #95C1A3'
                }}>
                  <th style={{ 
                      padding: '8px 10px', 
                      textAlign: 'left', 
                      fontWeight: 'bold', 
                      color: '#176940',
                      fontSize: '13px',
                      width: '105px',
                      borderRight: '0.5px solid #ddd',
                      cursor: 'pointer'
                  }}
                  onClick={() => handleSort('date')}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      Date
                      <img src="src/assets/sort-ascending.gif" alt="sort" style={{ display: 'inline-block', verticalAlign: 'middle', width: '9px', height: '9px' }} />
                    </span>
                  </th>
                  <th style={{ 
                      padding: '8px 10px', 
                      textAlign: 'left', 
                      fontWeight: 'normal', 
                      color: '#176940',
                      fontSize: '13px',
                      width: '320px',
                      borderRight: '0.5px solid #ddd',
                      cursor: 'pointer'
                  }}
                  onClick={() => handleSort('description')}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                      Transaction Description
                      <img src="src/assets/sort-unsorted.gif" alt="sort" style={{ display: 'inline-block', verticalAlign: 'middle', width: '9px', height: '9px' }} />
                    </span>
                  </th>
                  <th style={{ 
                      padding: '8px 10px', 
                      textAlign: 'right', 
                      fontWeight: 'normal', 
                      color: '#176940',
                      fontSize: '13px',
                      width: '110px',
                      borderRight: '0.5px solid #ddd',
                      cursor: 'pointer'
                  }}
                  onClick={() => handleSort('withdrawals')}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                      Withdrawals
                      <img src="src/assets/sort-unsorted.gif" alt="sort" style={{ display: 'inline-block', verticalAlign: 'middle', width: '9px', height: '9px' }} />
                    </span>
                  </th>
                  <th style={{ 
                      padding: '8px 10px', 
                      textAlign: 'right', 
                      fontWeight: 'normal', 
                      color: '#176940',
                      fontSize: '13px',
                      width: '110px',
                      borderRight: '0.5px solid #ddd',
                      cursor: 'pointer'
                  }}
                  onClick={() => handleSort('deposits')}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', justifyContent: 'flex-end' }}>
                      Deposits
                      <img src="src/assets/sort-unsorted.gif" alt="sort" style={{ display: 'inline-block', verticalAlign: 'middle', width: '9px', height: '9px' }} />
                    </span>
                  </th>
                  <th style={{ 
                      padding: '8px 10px', 
                      textAlign: 'right', 
                      fontWeight: 'normal', 
                      color: '#95C1A3',
                      fontSize: '13px',
                      width: '110px'
                  }}>
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => {
                    const isNegative = transaction.balance.includes('(');
                    const balColor = isNegative ? '#8B0000' : '#333';
                    const bg = index % 2 === 0 ? 'white' : '#fafafa';

                    return (
                        <tr 
                            key={index}
                            style={{
                            backgroundColor: bg,
                            borderBottom: '0.5px solid #f0f0f0'
                            }}
                        >
                            <td style={{ 
                                padding: '7px 10px',
                                color: '#333',
                                fontSize: '13px',
                                whiteSpace: 'nowrap',
                                borderRight: '0.5px solid #ddd'
                            }}>
                                {transaction.expandable && (
                                    <span style={{ color: '#95C1A3', fontWeight: 'bold', marginRight: '4px', cursor: 'pointer' }}>+ </span>
                                )}
                                {transaction.date}
                            </td>
                            <td style={{ 
                                padding: '7px 10px',
                                fontSize: '13px',
                                color: transaction.link ? '#333' : '#333',
                                borderRight: '0.5px solid #ddd'
                            }}>
                                {transaction.link ? (
                                    <>
                                      <a href="#" style={{ color: '#176940', textDecoration: 'underline' }}>View more</a>
                                      <span style={{ color: '#333' }}> {transaction.description.replace('View more ', '')}</span>
                                    </>
                                ) : (
                                    transaction.description
                                )}
                            </td>
                            <td style={{ 
                                padding: '7px 10px', 
                                textAlign: 'right', 
                                fontSize: '13px',
                                color: '#333',
                                borderRight: '0.5px solid #ddd'
                            }}>
                                {transaction.withdrawals}
                            </td>
                            <td style={{ 
                                padding: '7px 10px', 
                                textAlign: 'right', 
                                fontSize: '13px',
                                color: '#333',
                                borderRight: '0.5px solid #ddd'
                            }}>
                                {transaction.deposits}
                            </td>
                            <td style={{ 
                                padding: '7px 10px', 
                                textAlign: 'right', 
                                fontSize: '13px',
                                color: balColor 
                            }}>
                                {transaction.balance}
                            </td>
                        </tr>
                    );
                })}
              </tbody>
            </table>

            {/* Totals Section */}
            <div style={{
                backgroundColor: 'white',
                border: '0.5px solid #95C1A3',
                borderTop: 'none',
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: '10px',
                paddingTop: '10px',
                paddingBottom: '10px'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'auto 110px 110px 110px',
                    textAlign: 'right',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    color: '#333',
                    gap: '0'
                }}>
                    <div style={{ padding: '4px 10px' }}>Total :</div>
                    <div style={{ padding: '4px 10px' }}>$87,844.20</div>
                    <div style={{ padding: '4px 10px' }}>$92,242.66</div>
                    <div></div>
                </div>
            </div>

            {/* Download Section */}
            <div style={{
              backgroundColor: 'white',
              border: '0.5px solid #ddd',
              borderTop: 'none',
              padding: '15px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px'
            }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <select style={{
                        padding: '5px 8px',
                        border: '1px solid #999',
                        fontSize: '13px',
                        width: '200px',
                        fontFamily: 'Arial, sans-serif',
                        color: '#176940'
                    }}>
                        <option>Microsoft Money</option>
                        <option>Intuit Quicken</option>
                        <option>Intuit QuickBooks</option>
                        <option>Spreadsheet (.CSV)</option>
                        <option>Simply Accounting</option>
                    </select>
                    <button 
                        style={{
                            background: '#DDEBC5',
                            color: '#176940',
                            border: '1px solid #999',
                            padding: '5px 20px',
                            fontSize: '13px',
                            cursor: 'pointer',
                            fontWeight: 'bold',
                            fontFamily: 'Arial, sans-serif',
                            transition: 'background 0.2s',
                            borderRadius: '4px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#CBE1A3'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#DDEBC5'}
                    >
                        Download
                    </button>
                </div>
                
                <div style={{ fontSize: '12px', color: '#333' }}>
                    All transactions to the close of the previous BUSINESS day will be downloaded. {' '}
                    <a href="#" style={{ color: '#176940', textDecoration: 'underline' }}>
                        View supported versions of the software downloads.
                    </a>
                </div>
            </div>

            {/* Footer Links - Inside Document Area */}
            <div style={{
              padding: '20px',
              fontSize: '13px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
                 <a href="#" style={{ color: styles.linkGreen, textDecoration: 'none', fontWeight: 'normal' }}>Legal Notes</a>
                 <a href="#" style={{ color: styles.linkGreen, textDecoration: 'underline' }}>Print</a>
            </div>

            </div> {/* End PURPLE Section */}
          </div> {/* End Document Area */}

        </div> {/* End Main Content Container */}
      </div> {/* End Background Container */}

    </div>
  );
}