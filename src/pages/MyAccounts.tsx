import { useState, type SetStateAction } from "react";

import transactionsData from "./transactions_data.json";
import { useNavigate } from "react-router-dom";

// Type definitions
type Transaction = {
  date: string;
  description: string;
  withdrawals: string;
  deposits: string;
  balance: string;
  link?: boolean;
  expandable?: boolean;
};

type MonthData = {
  month: string;
  transactions: Transaction[];
  totals: {
    withdrawals: string;
    deposits: string;
  };
};

type TransactionsData = {
  [key: string]: MonthData;
};

export default function TDBankAccount() {
  const navigate = useNavigate();
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [searchType, setSearchType] = useState("month");

  // Search filter states
  const [searchMonth, setSearchMonth] = useState("Dec");
  const [searchYear, setSearchYear] = useState("2025");
  const [fromMonth, setFromMonth] = useState("Dec");
  const [fromDay, setFromDay] = useState("1");
  const [fromYear, setFromYear] = useState("2024");
  const [toMonth, setToMonth] = useState("Dec");
  const [toDay, setToDay] = useState("2");
  const [toYear, setToYear] = useState("2025");
  const [isFiltered, setIsFiltered] = useState(false);

  const handleSort = (field: SetStateAction<string>) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const getAllTransactions = (): Transaction[] => {
    const allTrans: Transaction[] = [];

    // Get all month keys and sort them in reverse chronological order
    const monthKeys = Object.keys(transactionsData as TransactionsData).sort(
      (a, b) => {
        // Extract month and year from keys like 'january_2025'
        const [monthA, yearA] = a.split("_");
        const [monthB, yearB] = b.split("_");

        const monthOrder = [
          "january",
          "february",
          "febuary",
          "march",
          "april",
          "may",
          "june",
          "july",
          "august",
          "september",
          "october",
          "november",
          "december",
        ];

        // Compare years first
        if (yearA !== yearB) {
          return parseInt(yearB) - parseInt(yearA);
        }

        // If same year, compare months (reverse order)
        return monthOrder.indexOf(monthB) - monthOrder.indexOf(monthA);
      }
    );

    // Iterate through sorted month keys
    monthKeys.forEach((monthKey) => {
      const monthData = (transactionsData as TransactionsData)[monthKey];
      allTrans.push(...monthData.transactions);
    });

    return allTrans;
  };

  const parseTransactionDate = (dateStr: string): Date => {
    const cleaned = dateStr.trim();
    return new Date(cleaned);
  };

  const createDateFromSelectors = (
    month: string,
    day: string,
    year: string
  ): Date => {
    const monthMap: { [key: string]: number } = {
      Jan: 0,
      Feb: 1,
      Mar: 2,
      Apr: 3,
      May: 4,
      Jun: 5,
      Jul: 6,
      Aug: 7,
      Sep: 8,
      Oct: 9,
      Nov: 10,
      Dec: 11,
    };
    return new Date(parseInt(year), monthMap[month], parseInt(day));
  };

  const getFilteredTransactions = (): Transaction[] => {
    const allTransactions = getAllTransactions();

    if (!isFiltered) {
      return allTransactions;
    }

    if (searchType === "month") {
      return allTransactions.filter((transaction) => {
        const transDate = parseTransactionDate(transaction.date);
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const transMonth = monthNames[transDate.getMonth()];
        const transYear = transDate.getFullYear().toString();

        return transMonth === searchMonth && transYear === searchYear;
      });
    } else {
      const fromDate = createDateFromSelectors(fromMonth, fromDay, fromYear);
      const toDate = createDateFromSelectors(toMonth, toDay, toYear);

      return allTransactions.filter((transaction) => {
        const transDate = parseTransactionDate(transaction.date);
        return transDate >= fromDate && transDate <= toDate;
      });
    }
  };

  const calculateTotals = () => {
    const transactions = getFilteredTransactions();
    let totalWithdrawals = 0;
    let totalDeposits = 0;

    transactions.forEach((t) => {
      if (t.withdrawals) {
        const amount = parseFloat(t.withdrawals.replace(/,/g, ""));
        if (!isNaN(amount)) totalWithdrawals += amount;
      }
      if (t.deposits) {
        const amount = parseFloat(t.deposits.replace(/,/g, ""));
        if (!isNaN(amount)) totalDeposits += amount;
      }
    });

    return {
      withdrawals: `$${totalWithdrawals
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
      deposits: `$${totalDeposits
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`,
    };
  };

  const handleSearch = () => {
    setIsFiltered(true);
  };

  const handleClearFilter = () => {
    setIsFiltered(false);
  };

  const transactions = getFilteredTransactions();
  const totals = calculateTotals();
  const allTransactions = getAllTransactions();

  const [selectedAccount] = useState(
    "TD UNLIMITED BUSINESS PLAN - 5241534 $19.67"
  );

  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const styles = {
    // UPDATED COLORS based on screenshot
    tdGreen: "#007934",
    navBackground: "#00391d", // Much darker green from the screenshot
    navActiveUnderline: "#bed80b", // The bright lime green strip
    linkGreen: "#007934",
    bgGrey: "#f3f3f3",
    borderGrey: "#dcdcdc",
    redText: "#cc0000",
    sidebarHeaderGradient:
      "linear-gradient(to bottom, #f7f7f7 0%, #ededed 100%)",
    sidebarHeaderBorder: "1px solid #cccccc",
  };

  const myAccountsMenu = {
    sections: [
      {
        title: "EasyWeb Online Banking",
        columns: [
          {
            links: [
              { text: "Accounts", href: "#" },
              { text: "Pay Bills", href: "#" },
              { text: "Transfers", href: "#" },
              { text: "INTERAC e-Transfer", href: "#" },
            ],
          },
          {
            links: [
              { text: "Investments", href: "#" },
              { text: "Profile & Settings", href: "#" },
            ],
          },
        ],
      },
      {
        title: "WebBroker Online Investing",
        columns: [
          {
            links: [
              { text: "Learn About WebBroker", href: "#" },
              { text: "Log in", href: "#" },
            ],
          },
        ],
      },
    ],
  };

  const contactUsMenu = {
    sections: [
      {
        iconPath: "question_mark.png",
        title: "How can we help you?",
        links: [
          { text: "Ask Us", href: "#", hasExternalIcon: true },
          { text: "Frequently Asked Questions", href: "#" },
          { text: "TD Helps Community", href: "#", hasExternalIcon: true },
        ],
      },
      {
        iconPath: "/Contact_Us_Call_Us_37x37.png",
        title: "Contact Us",
        links: [
          { text: "Call Us", href: "#" },
          { text: "More Ways to Contact Us", href: "#" },
        ],
      },
      {
        iconPath: "/icon_meet-us.gif",
        title: "Come See Us",
        links: [
          { text: "Find a Branch", href: "#" },
          { text: "Book an Appointment", href: "#" },
          { text: "TD Wealth Locations", href: "#" },
        ],
      },
    ],
  };

  const productsServicesMenu = {
    sections: [
      [
        {
          iconPath: "/Products_and_Services_Banking_37x37.png",
          title: "Banking",
          links: [
            { text: "Bank Accounts", href: "#" },
            { text: "Ways to Bank", href: "#" },
            { text: "Overdraft protection", href: "#" },
          ],
        },
        {
          iconPath: "/Products_and_Services_Borrowing_37x37.png",
          title: "Borrowing",
          links: [
            { text: "Mortgages", href: "#" },
            { text: "Loans", href: "#" },
          ],
        },
        {
          iconPath: "Products_and_Services_Credit_Cards_37x37.png",
          title: "Credit Cards",
          links: [{ text: "See All", href: "#" }],
        },
        {
          iconPath: "/Products_and_Services_Insurance_37x37.png",
          title: "Insurance",
          links: [{ text: "See All", href: "#" }],
        },
      ],
      [
        {
          iconPath: "/Products_and_Services_Investing_37x37.png",
          title: "Investing",
          links: [
            { text: "Savings & Investment Products", href: "#" },
            { text: "Invest On Your Own", href: "#" },
            { text: "Invest With An Advisor", href: "#" },
            { text: "See All", href: "#" },
          ],
        },
        {
          iconPath: "/Products_and_Services_Travel_37x37.png",
          title: "Travel",
          links: [
            { text: "Cross-Border Banking", href: "#" },
            { text: "Travel Medical Insurance", href: "#" },
            { text: "Foreign Exchange", href: "#" },
          ],
        },
        {
          iconPath: "/Products_and_Services_SmallBusiness_37x37 (1).png",
          title: "Small Business",
          links: [{ text: "See All", href: "#" }],
        },
        {
          iconPath: "/Products_and_Services_Special_Offers_37x37.png",
          title: "Offers & Promotions",
          links: [{ text: "See All", href: "#" }],
        },
      ],
    ],
  };

  const marketsResearchMenu = {
    columns: [
      {
        iconPath: "/Markets_and_Research_Markets_37x37.png",
        title: "Markets",
        links: [{ text: "Markets Overview", href: "#" }],
      },
      {
        iconPath: "/Markets_and_Research_Research_37x37.png",
        title: "Research",
        links: [
          { text: "Stocks", href: "#" },
          { text: "Options", href: "#" },
          { text: "Mutual Funds", href: "#" },
          { text: "ETFs", href: "#" },
        ],
      },
      {
        iconPath: "/Markets_and_Research_Investor_tools_37x37.png",
        title: "Investor Tools",
        links: [
          { text: "Screeners", href: "#" },
          { text: "Alerts", href: "#" },
          { text: "Today's Rates", href: "#" },
        ],
      },
      {
        iconPath: "/Markets_and_Research_Quote_37x37.png",
        title: "Quote",
        links: [],
      }, // Empty - has widget
    ],
    featureTabs: [
      "Featured",
      "Weekly Expert Videos",
      "Investor Seminars",
      "Economic Research",
    ],
  };

  const lifePlanningMenu = {
    sections: [
      [
        {
          iconPath: "/life-planning-in-school-52x52.png",
          title: "In School",
          href: "#",
        },
        {
          iconPath: "/life-planning-got-a-new-job-52x52.png",
          title: "Got a New Job",
          href: "#",
        },
        {
          iconPath: "/life-planning-buying-a-home-52x52.png",
          title: "Buying a Home",
          href: "#",
        },
        {
          iconPath: "/life-planning-starting-a-business-52x52.png",
          title: "Starting a Business",
          href: "#",
        },
        {
          iconPath: "/life-planning-planning-to-retire-52x52.png",
          title: "Planning to Retire",
          href: "#",
        },
      ],
      [
        {
          iconPath: "/life-planning-new-to-canada-52x52.png",
          title: "New to Canada",
          href: "#",
        },
        {
          iconPath: "/life-planning-tools-and-calculators-52x52.png",
          title: "Tools & Calculators",
          href: "#",
        },
        {
          iconPath: "/life-planning-td-helps-community-52x52.png",
          title: "TD Helps Community",
          href: "#",
        },
      ],
    ],
    featureTabs: [
      "Featured",
      "Advice on Everyday Finances",
      "Investing Basics",
    ],
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        minHeight: "100vh",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "12px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#333",
      }}
    >
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
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "15px",
          marginBottom: "6px",
        }}
      >
        <div
          style={{
            width: "60%",
            display: "flex",
            justifyContent: "flex-end", // Aligned to right as per screenshot
            alignItems: "center",
            marginTop: "2px",
            marginBottom: "2px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <a
              href="#"
              style={{
                color: "#555",
                textDecoration: "none",
                fontSize: "13px",
                paddingRight: "4px",
              }}
            >
              TD Home
            </a>
            <span style={{ color: "#ccc" }}>|</span>
            <a
              href="#"
              style={{
                color: "#555",
                textDecoration: "none",
                fontSize: "13px",
                padding: "0 4px",
              }}
            >
              Apply
            </a>
            <span style={{ color: "#ccc" }}>|</span>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
                padding: "0 4px",
              }}
            >
              <span
                style={{
                  color: "#00391d",
                  fontSize: "10px",
                  marginRight: "5px",
                }}
              >
                {" "}
                <img
                  src="/icon-lock.gif"
                  alt="TD Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </span>
              <a
                href="#"
                style={{
                  color: styles.navBackground,
                  fontWeight: "bold",
                  textDecoration: "none",
                  fontSize: "13px",
                  paddingRight: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                My Profile{" "}
                <span style={{ fontSize: "8px", marginLeft: "5px" }}>▼</span> 
              </a>
            </div>
            <span style={{ color: "#ccc" }}>|</span>

            <button
              onClick={() => {
                navigate("/");
              }}
              style={{
                background: "linear-gradient(to bottom, #fcfcfc, #e0e0e0)",
                color: styles.navBackground,
                border: "1px solid",
                padding: "2px 12px",
                borderRadius: "5px",
                fontSize: "11px",
                cursor: "pointer",
                fontWeight: "bold",
                marginRight: "15px",
                marginLeft: "5px",
              }}
            >
              Logout
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "5px",
              }}
            >
              <input
                type="text"
                placeholder="Site Search"
                style={{
                  padding: "2px 5px",
                  border: "1px solid #aaa",
                  borderRight: "none",
                  fontSize: "11px",
                  width: "210px",
                  height: "24px",
                  borderRadius: "2px 0 0 2px",
                  color: "#333",
                }}
              />
              <button
                style={{
                  background: "white",
                  border: "1px solid #aaa",
                  borderLeft: "none",
                  height: "24px",
                  width: "24px",
                  borderRadius: "0 2px 2px 0",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    transform: "rotate(-45deg)",
                    fontSize: "25px",
                    color: "#555",
                  }}
                >
                  ⚲
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAV BAR - EXACT MATCH */}
      <div
        style={{
          backgroundColor: styles.navBackground, // Darker Green
          width: "65%",
          display: "flex",
          justifyContent: "center",
          height: "40px", // Tighter height matches screenshot
          borderTop: "1px solid #002d17", // Subtle top border
          position: "relative", // ← ADD THIS LINE
        }}
        onMouseEnter={() => setHoveredNav("myaccounts")} // ← ADD THIS LINE
        onMouseLeave={() => setHoveredNav(null)} // ← ADD THIS LINE
      >
        <div
          style={{
            width: "970px",
            display: "flex",
            alignItems: "flex-start",
            height: "100%",
            position: "relative",
          }}
        >
          {/* Logo - Overlapping Green Box */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "-15px",
              bottom: "-15px",
              width: "64px",
              height: "70px",
              padding: "0",
              zIndex: 10,
            }}
          >
            <img
              src="/td-logo.png"
              alt="TD Logo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>

          <nav style={{ display: "flex", height: "100%", marginLeft: "70px" }}>
            {" "}
            {/* Margin accounts for logo width */}
            {/* Active Tab - Has the lime green underline */}
            <a
              href="#"
              style={{
                color: hoveredNav === "myaccounts" ? "black" : "white",
                textDecoration: "none",
                marginLeft: "15px",
                padding: "0 15px",
                fontSize: "17px",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                height: "100%",
                borderBottom:
                  hoveredNav === "myaccounts"
                    ? "none"
                    : `4px solid ${styles.navActiveUnderline}`,
                backgroundColor:
                  hoveredNav === "myaccounts" ? "white" : "transparent",
                boxSizing: "border-box",
                transition: "all 0.2s ease",
              }}
            >
              My Accounts
            </a>
            {/* Contact Us with menu */}
            <a
              href="#"
              style={{
                color: hoveredNav === "contactus" ? "black" : "white",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
                height: "100%",
                backgroundColor:
                  hoveredNav === "contactus" ? "white" : "transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={() => setHoveredNav("contactus")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              Contact Us
            </a>
            {/* Products & Services with hover */}
            <a
              href="#"
              style={{
                color: hoveredNav === "products" ? "black" : "white",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
                height: "100%",
                backgroundColor:
                  hoveredNav === "products" ? "white" : "transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={() => setHoveredNav("products")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              Products & Services
            </a>
            <a
              href="#"
              style={{
                color: hoveredNav === "markets" ? "black" : "white",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
                height: "100%",
                backgroundColor:
                  hoveredNav === "markets" ? "white" : "transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={() => setHoveredNav("markets")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              Markets & Research
            </a>
            {/* Life Planning with menu */}
            <a
              href="#"
              style={{
                color: hoveredNav === "lifeplanning" ? "black" : "white",
                textDecoration: "none",
                padding: "0 15px",
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
                height: "100%",
                backgroundColor:
                  hoveredNav === "lifeplanning" ? "white" : "transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={() => setHoveredNav("lifeplanning")}
              onMouseLeave={() => setHoveredNav(null)}
            >
              Life Planning
            </a>
            {/* MARKETS MENU - FULL WIDTH LINE AND TIGHTER BOTTOM SPACING */}
            {hoveredNav === "markets" && (
              <div
                style={{
                  position: "absolute",
                  top: "100%",
                  left: "0",
                  right: "0",
                  width: "100%",
                  backgroundColor: "#f5f5f5", // Light background
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  zIndex: 1000,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
                onMouseEnter={() => setHoveredNav("markets")}
                onMouseLeave={() => setHoveredNav(null)}
              >
                {/* 1. MAIN CONTENT (Centered 970px) */}
                <div
                  style={{
                    width: "970px",
                    padding: "30px 40px 20px 40px", // Standard padding for top area
                    boxSizing: "border-box",
                  }}
                >
                  {/* Columns */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr 1fr 1fr",
                      gap: "40px",
                    }}
                  >
                    {marketsResearchMenu.columns.map((col, colIndex) => (
                      <div key={colIndex}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            marginBottom: "15px",
                          }}
                        >
                          {col.iconPath && (
                            <img
                              src={col.iconPath}
                              alt=""
                              style={{
                                width: "28px",
                                height: "28px",
                                objectFit: "contain",
                              }}
                            />
                          )}
                          <h3
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                              color: "#333",
                              margin: 0,
                            }}
                          >
                            {col.title}
                          </h3>
                        </div>

                        {col.links.length > 0 && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "7px",
                            }}
                          >
                            {col.links.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.href}
                                style={{
                                  color: styles.navBackground,
                                  textDecoration: "none",
                                  fontSize: "13px",
                                  transition: "color 0.2s ease",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.color = "black";
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.color =
                                    styles.navBackground;
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ›
                                </span>
                                <span>{link.text}</span>
                              </a>
                            ))}
                          </div>
                        )}

                        {/* LOADING BOX - COLUMN 1 */}
                        {colIndex === 0 && (
                          <div
                            style={{
                              marginTop: "15px",
                              width: "100%",
                              height: "180px",
                              backgroundColor: "#eeeeee",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {/* Dark Grey Spinner */}
                            <div
                              style={{
                                width: "40px",
                                height: "40px",
                                border: "4px solid #ddd",
                                borderTop: "4px solid #666",
                                borderRadius: "50%",
                                animation: "spin 1s linear infinite",
                              }}
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. FULL WIDTH DIVIDER LINE */}
                <div
                  style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#d0d0d0",
                    boxShadow: "0 2px 5px rgba(0,0,0.20,0.40)",
                    position: "relative",
                    zIndex: 1,
                  }}
                ></div>

                {/* 3. FOOTER TABS (Centered 970px with REDUCED PADDING) */}
                <div
                  style={{
                    width: "970px",
                    padding: "10px 40px 12px 40px", // Reduced vertical padding
                    boxSizing: "border-box",
                  }}
                >
                  <div style={{ display: "flex", gap: "20px" }}>
                    {marketsResearchMenu.featureTabs.map((tab, index) => (
                      <a
                        key={index}
                        href="#"
                        style={{
                          color: index === 0 ? styles.navBackground : "#666",
                          textDecoration: "none",
                          fontSize: "13px",
                          fontWeight: index === 0 ? "bold" : "normal",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = styles.navBackground;
                          e.currentTarget.style.fontWeight = "bold";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color =
                            index === 0 ? styles.navBackground : "#666";
                          e.currentTarget.style.fontWeight =
                            index === 0 ? "bold" : "normal";
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
        {hoveredNav === "myaccounts" && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              width: "100%",
              backgroundColor: "#f5f5f5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 1000,
              display: "flex",
            }}
          >
            <div
              style={{
                width: "970px",
                padding: "30px 40px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "2fr auto 1fr",
                  gap: "60px",
                  alignItems: "start",
                }}
              >
                {/* LEFT SECTION: EasyWeb Online Banking with 2 columns */}
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      color: "#666",
                      marginBottom: "20px",
                      marginTop: "0",
                    }}
                  >
                    {myAccountsMenu.sections[0].title}
                  </h3>

                  {/* Two columns under EasyWeb */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "40px",
                    }}
                  >
                    {myAccountsMenu.sections[0].columns.map(
                      (column, colIndex) => (
                        <div
                          key={colIndex}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "12px",
                          }}
                        >
                          {column.links.map((link, linkIndex) => (
                            <a
                              key={linkIndex}
                              href={link.href}
                              style={{
                                color: styles.navBackground,
                                textDecoration: "none",
                                fontSize: "13px",
                                transition: "color 0.2s ease",
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.color = "black";
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.color =
                                  styles.navBackground;
                                e.currentTarget.style.textDecoration = "none";
                              }}
                            >
                              {link.text}
                            </a>
                          ))}
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* VERTICAL DIVIDER */}
                <div
                  style={{
                    width: "1px",
                    backgroundColor: "#d0d0d0",
                    height: "140px",
                  }}
                />

                {/* RIGHT SECTION: WebBroker Online Investing */}
                <div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: "normal",
                      color: "#666",
                      marginBottom: "20px",
                      marginTop: "0",
                    }}
                  >
                    {myAccountsMenu.sections[1].title}
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                    }}
                  >
                    {myAccountsMenu.sections[1].columns[0].links.map(
                      (link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          style={{
                            color: styles.navBackground,
                            textDecoration: "none",
                            fontSize: "13px",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "black";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = styles.navBackground;
                            e.currentTarget.style.textDecoration = "none";
                          }}
                        >
                          {link.text}
                        </a>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CONTACT US MEGA MENU */}
        {hoveredNav === "contactus" && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              width: "100%",
              backgroundColor: "#f5f5f5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
            }}
            onMouseEnter={() => setHoveredNav("contactus")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <div
              style={{
                width: "970px",
                padding: "30px 40px",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr",
                  gap: "60px",
                  alignItems: "start",
                }}
              >
                {contactUsMenu.sections.map((section, index) => (
                  <div key={index}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        marginBottom: "20px",
                      }}
                    >
                      {section.iconPath && (
                        <img
                          src={section.iconPath}
                          alt=""
                          style={{
                            width: "28px",
                            height: "28px",
                            objectFit: "contain",
                          }}
                        />
                      )}

                      <h3
                        style={{
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "#666",
                          margin: 0,
                        }}
                      >
                        {section.title}
                      </h3>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                      }}
                    >
                      {section.links.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.href}
                          style={{
                            color: styles.navBackground,
                            textDecoration: "none",
                            fontSize: "13px",
                            transition: "color 0.2s ease",
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.color = "black";
                            e.currentTarget.style.textDecoration = "underline";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.color = styles.navBackground;
                            e.currentTarget.style.textDecoration = "none";
                          }}
                        >
                          <span
                            style={{
                              fontSize: "14px",
                              fontWeight: "bold",
                              marginRight: "2px",
                            }}
                          >
                            ›
                          </span>
                          <span>{link.text}</span>

                          {/* ✅ Trailing icon */}
                          {link.hasExternalIcon && (
                            <span
                              style={{ fontSize: "11px", marginLeft: "3px" }}
                            >
                              ⧉
                            </span>
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
        {hoveredNav === "products" && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              width: "100%",
              backgroundColor: "#f5f5f5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 1000,
              display: "flex",
              justifyContent: "center",
            }}
            onMouseEnter={() => setHoveredNav("products")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            <div
              style={{
                width: "970px",
                padding: "30px 40px",
                boxSizing: "border-box",
              }}
            >
              {productsServicesMenu.sections.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                    gap: "40px",
                    marginBottom: rowIndex === 0 ? "20px" : "0",
                  }}
                >
                  {row.map((column, colIndex) => (
                    <div key={colIndex}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "10px",
                        }}
                      >
                        {column.iconPath && (
                          <img
                            src={column.iconPath}
                            alt=""
                            style={{
                              width: "28px",
                              height: "28px",
                              objectFit: "contain",
                            }}
                          />
                        )}
                        <h3
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                            color: "#333",
                            margin: 0,
                          }}
                        >
                          {column.title}
                        </h3>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        {column.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.href}
                            style={{
                              color: styles.navBackground,
                              textDecoration: "none",
                              fontSize: "12px",
                              transition: "color 0.2s ease",
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "black";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = styles.linkGreen;
                            }}
                          >
                            <span
                              style={{ fontSize: "14px", fontWeight: "bold" }}
                            >
                              ›
                            </span>
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
        {hoveredNav === "lifeplanning" && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              width: "100%",
              backgroundColor: "#f5f5f5",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            onMouseEnter={() => setHoveredNav("lifeplanning")}
            onMouseLeave={() => setHoveredNav(null)}
          >
            {/* 1. MAIN CONTENT (Icons + Wave) */}
            <div
              style={{
                width: "970px",
                padding: "30px 40px 10px 40px", // Standard top padding
                boxSizing: "border-box",
              }}
            >
              {/* Icon Grid - 2 Rows */}
              {lifePlanningMenu.sections.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                    gap: "40px",
                    marginBottom: rowIndex === 0 ? "30px" : "20px",
                    justifyItems: "center",
                  }}
                >
                  {row.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={item.href}
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                        transition: "transform 0.2s ease",
                      }}
                    >
                      <img
                        src={item.iconPath}
                        alt={item.title}
                        style={{
                          width: "52px",
                          height: "52px",
                          objectFit: "contain",
                        }}
                      />
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#333",
                          fontWeight: "normal",
                          textAlign: "center",
                          maxWidth: "120px",
                        }}
                      >
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
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "#d0d0d0",
                boxShadow: "0 2px 5px rgba(0,0,0.20,0.40)",
                position: "relative",
                zIndex: 1,
              }}
            ></div>

            {/* 3. FOOTER TABS (Reduced Padding) */}
            <div
              style={{
                width: "970px",
                padding: "10px 40px 12px 40px", // Reduced vertical padding
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", gap: "20px" }}>
                {lifePlanningMenu.featureTabs.map((tab, index) => (
                  <a
                    key={index}
                    href="#"
                    style={{
                      color: index === 0 ? "black" : styles.navBackground,
                      textDecoration: "none",
                      fontSize: "13px",
                      fontWeight: index === 0 ? "bold" : "normal",
                      paddingBottom: "5px",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "black";
                      e.currentTarget.style.fontWeight = "bold";
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
      <div
        style={{
          width: "65%",
          marginTop: "15px",
          display: "flex",
          gap: "10px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDEBAR */}
        <div style={{ width: "170px", flexShrink: 0, marginTop: "10px" }}>
          {/* Accounts Section (Expanded) */}
          <div style={{ marginBottom: "10px" }}>
            <div
              style={{
                backgroundColor: styles.bgGrey,
                padding: "5px 10px",
                border: "1px solid #ccc",
                fontWeight: "bold",
                fontSize: "12px",
                color: styles.navBackground,
              }}
            >
              Accounts
            </div>
            <div
              style={{
                border: "1px solid #ccc",
                borderTop: "none",
                padding: "10px 8px",
              }}
            >
              <div style={{ marginBottom: "8px", fontSize: "11px" }}>
                <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                  Personal Accounts
                </a>
              </div>
              <div
                style={{
                  marginBottom: "8px",
                  fontSize: "11px",
                  fontWeight: "bold",
                }}
              >
                <span style={{ color: "#333", marginRight: "4px" }}>▸</span>
                <a
                  href="#"
                  style={{ color: styles.tdGreen, textDecoration: "none" }}
                >
                  Small Business Accounts
                </a>
              </div>

              <div style={{ marginLeft: "12px", marginBottom: "10px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "#333",
                    marginBottom: "4px",
                  }}
                >
                  <span style={{ fontSize: "9px", verticalAlign: "middle" }}>
                    ▼
                  </span>{" "}
                  View Accounts
                </div>
                <div
                  style={{
                    marginLeft: "10px",
                    fontSize: "11px",
                    color: "#333",
                    lineHeight: "1.4",
                  }}
                >
                  Order Cheques &<br />
                  Deposit Bags
                </div>
              </div>

              <div style={{ fontSize: "11px", marginBottom: "8px" }}>
                <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                  Statements & Documents
                </a>
              </div>
              <div style={{ fontSize: "11px", marginBottom: "8px" }}>
                <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                  Communications
                </a>
              </div>
              <div style={{ fontSize: "11px" }}>
                <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                  Order Foreign Currency
                </a>
              </div>
            </div>
          </div>

          {/* Collapsed Sections */}
          {["Pay Bills", "Transfers"].map((item) => (
            <div
              key={item}
              style={{
                marginBottom: "10px",
                background: styles.sidebarHeaderGradient,
                border: styles.sidebarHeaderBorder,
                padding: "6px 10px",
                fontSize: "12px",
                cursor: "pointer",
                color: styles.navBackground,
              }}
            >
              {item}
            </div>
          ))}

          {/* Special Section */}
          <div
            style={{
              marginBottom: "10px",
              background: styles.sidebarHeaderGradient,
              border: styles.sidebarHeaderBorder,
              padding: "6px 10px",
              fontSize: "12px",
              fontStyle: "italic",
              color: styles.navBackground,
            }}
          >
            Interac e-Transfer®
          </div>

          {["Investments", "Profile & Settings"].map((item) => (
            <div
              key={item}
              style={{
                marginBottom: "10px",
                background: styles.sidebarHeaderGradient,
                border: styles.sidebarHeaderBorder,
                padding: "6px 10px",
                fontSize: "12px",
                color: styles.navBackground,
                cursor: "pointer",
              }}
            >
              {item}
            </div>
          ))}

          {/* My Links */}
          <div style={{ marginBottom: "10px", border: "1px solid #ccc" }}>
            <div
              style={{
                padding: "6px 10px",
                fontSize: "14px",
                fontWeight: "normal",
                color: "#333",
                borderBottom: "1px solid #eee",
              }}
            >
              My Links
            </div>
            <div style={{ padding: "10px" }}>
              <div style={{ fontSize: "10px", marginBottom: "8px" }}>
                <a
                  href="#"
                  style={{
                    color: styles.linkGreen,
                    textDecoration: "underline",
                  }}
                >
                  Choose my links
                </a>
              </div>
              <div
                style={{ fontSize: "11px", color: "#333", marginBottom: "5px" }}
              >
                ›{" "}
                <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                  Pay Bills
                </a>
              </div>
              <div
                style={{ fontSize: "11px", color: "#333", marginBottom: "5px" }}
              >
                ›{" "}
                <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                  Make a Transfer
                </a>
              </div>
              <div
                style={{ fontSize: "11px", color: "#333", marginBottom: "5px" }}
              >
                ›{" "}
                <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                  Purchase Mutual Funds
                </a>
              </div>
              <div style={{ fontSize: "11px", color: "#333" }}>
                ›{" "}
                <a href="#" style={{ color: "#333", textDecoration: "none" }}>
                  WebBroker
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <div
              style={{
                padding: "6px 0",
                fontSize: "13px",
                fontWeight: "bold",
                color: "#555",
                lineHeight: "1.2",
              }}
            >
              More Online Services
            </div>
            <div style={{ padding: "5px 0" }}>
              <div style={{ fontSize: "11px", color: "#333" }}>
                ›{" "}
                <a
                  href="#"
                  style={{ color: styles.linkGreen, textDecoration: "none" }}
                >
                  Apply for Products
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div style={{ flex: 1, paddingLeft: "10px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "15px",
            }}
          >
            <h1
              style={{
                fontSize: "24px",
                color: styles.tdGreen,
                fontWeight: "normal",
                margin: 0,
                fontFamily: "Arial, sans-serif",
              }}
            >
              Account Activity
            </h1>
            <div style={{ fontSize: "10px", marginTop: "5px" }}>
              <a
                href="#"
                style={{ color: styles.linkGreen, textDecoration: "underline" }}
              >
                Help
              </a>
              <span style={{ margin: "0 5px", color: "#ccc" }}>|</span>
              <a
                href="#"
                style={{ color: styles.linkGreen, textDecoration: "underline" }}
              >
                Print
              </a>
            </div>
          </div>

          <hr
            style={{
              border: "none",
              borderTop: "1px solid #ccc",
              margin: "10px 0 15px 0",
            }}
          />

          {/* Account Selector */}
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                color: "#555",
                marginRight: "5px",
              }}
            >
              Account:
            </span>
            <select
              style={{
                padding: "2px",
                border: "1px solid #aaa",
                fontSize: "11px",
                width: "350px",
                color: "#333",
              }}
            >
              <option>{selectedAccount}</option>
            </select>
          </div>

          {/* Balance Box */}
          <div
            style={{
              backgroundColor: "#f3f3f3",
              border: "1px solid #e0e0e0",
              padding: "10px 15px",
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "10px",
            }}
          >
            <div style={{ marginRight: "40px" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: "#666",
                  marginBottom: "2px",
                }}
              >
                Current Balance
              </div>
              <div
                style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}
              >
                $19.67
              </div>
            </div>

            <div
              style={{
                borderLeft: "1px solid #ccc",
                height: "35px",
                marginRight: "15px",
              }}
            ></div>

            <div style={{ marginRight: "auto" }}>
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: "bold",
                  color: "#666",
                  marginBottom: "2px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Available Balance
                <span
                  style={{
                    marginLeft: "4px",
                    display: "inline-block",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    backgroundColor: "#8bc53f",
                    color: "white",
                    fontSize: "9px",
                    textAlign: "center",
                    lineHeight: "12px",
                    cursor: "help",
                    fontWeight: "bold",
                  }}
                >
                  ?
                </span>
              </div>
              <div
                style={{ fontSize: "16px", color: "#333", fontWeight: "bold" }}
              >
                $19.67
              </div>
            </div>

            <div style={{ alignSelf: "center" }}>
              <a
                href="#"
                style={{
                  color: styles.linkGreen,
                  textDecoration: "underline",
                  fontSize: "10px",
                  fontWeight: "bold",
                }}
              >
                Direct deposit form (PDF)
              </a>
              <span
                style={{
                  display: "inline-block",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: "#8bc53f",
                  color: "white",
                  fontSize: "9px",
                  textAlign: "center",
                  lineHeight: "12px",
                  cursor: "help",
                  fontWeight: "bold",
                  marginLeft: "4px",
                }}
              >
                ?
              </span>
            </div>
          </div>

          <div
            style={{ fontSize: "10px", color: "#666", marginBottom: "20px" }}
          >
            Balance Date: Dec 02, 2025
          </div>

          {/* Table Header Controls */}
          <div
            style={{
              border: "1px solid #ccc",
              borderBottom: "none",
              padding: "8px",
              backgroundColor: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  View
                </span>
                <select
                  style={{
                    padding: "1px",
                    border: "1px solid #999",
                    fontSize: "11px",
                    width: "160px",
                  }}
                >
                  <option>All Transactions</option>
                </select>
              </div>
              <div style={{ fontSize: "10px", color: "#333" }}>
                <span style={{ fontWeight: "bold" }}>30 days</span>
                <span style={{ margin: "0 5px" }}>|</span>
                <a
                  href="#"
                  style={{
                    color: styles.linkGreen,
                    textDecoration: "underline",
                  }}
                >
                  60 days
                </a>
                <span style={{ margin: "0 5px" }}>|</span>
                <a
                  href="#"
                  style={{
                    color: styles.linkGreen,
                    textDecoration: "underline",
                  }}
                >
                  90 days
                </a>
                <span style={{ margin: "0 5px" }}>|</span>
                <a
                  href="#"
                  style={{
                    color: styles.linkGreen,
                    textDecoration: "underline",
                  }}
                >
                  120 days
                </a>
              </div>
            </div>

            <div style={{ fontSize: "11px" }}>
              <a
                href="#"
                style={{
                  color: styles.linkGreen,
                  textDecoration: "none",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  setSearchExpanded(!searchExpanded);
                }}
              >
                {searchExpanded ? "−" : "+"} Search by Month (up to 18 months)
              </a>
            </div>

            {/* Expanded Search Section */}
            {searchExpanded && (
              <div
                style={{
                  marginTop: "15px",
                  paddingTop: "15px",
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                {/* Month Radio Option */}
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    type="radio"
                    id="searchMonth"
                    name="searchType"
                    checked={searchType === "month"}
                    onChange={() => setSearchType("month")}
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="searchMonth"
                    style={{
                      fontSize: "11px",
                      color: "#333",
                      cursor: "pointer",
                    }}
                  >
                    Month
                  </label>

                  <select
                    value={searchMonth}
                    onChange={(e) => setSearchMonth(e.target.value)}
                    style={{
                      padding: "2px",
                      border: "1px solid #999",
                      fontSize: "11px",
                      marginLeft: "10px",
                    }}
                  >
                    <option>Dec</option>
                    <option>Nov</option>
                    <option>Oct</option>
                    <option>Sep</option>
                    <option>Aug</option>
                    <option>Jul</option>
                    <option>Jun</option>
                    <option>May</option>
                    <option>Apr</option>
                    <option>Mar</option>
                    <option>Feb</option>
                    <option>Jan</option>
                  </select>

                  <span
                    style={{
                      fontSize: "11px",
                      color: "#333",
                      marginLeft: "5px",
                    }}
                  >
                    Year
                  </span>

                  <select
                    value={searchYear}
                    onChange={(e) => setSearchYear(e.target.value)}
                    style={{
                      padding: "2px",
                      border: "1px solid #999",
                      fontSize: "11px",
                    }}
                  >
                    <option>2025</option>
                    <option>2024</option>
                  </select>
                </div>

                {/* From/To Radio Option */}
                <div
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <input
                    type="radio"
                    id="searchRange"
                    name="searchType"
                    checked={searchType === "range"}
                    onChange={() => setSearchType("range")}
                    style={{ cursor: "pointer" }}
                  />
                  <label
                    htmlFor="searchRange"
                    style={{
                      fontSize: "11px",
                      color: "#333",
                      cursor: "pointer",
                    }}
                  >
                    From
                  </label>

                  <select
                    value={fromMonth}
                    onChange={(e) => setFromMonth(e.target.value)}
                    style={{
                      padding: "2px",
                      border: "1px solid #999",
                      fontSize: "11px",
                    }}
                  >
                    <option>Dec</option>
                    <option>Nov</option>
                    <option>Oct</option>
                    <option>Sep</option>
                    <option>Aug</option>
                    <option>Jul</option>
                    <option>Jun</option>
                    <option>May</option>
                    <option>Apr</option>
                    <option>Mar</option>
                    <option>Feb</option>
                    <option>Jan</option>
                  </select>

                  <select
                    value={fromDay}
                    onChange={(e) => setFromDay(e.target.value)}
                    style={{
                      padding: "2px",
                      border: "1px solid #999",
                      fontSize: "11px",
                      width: "50px",
                    }}
                  >
                    <option>1</option>
                    {Array.from({ length: 31 }, (_, i) => i + 2).map((day) => (
                      <option key={day}>{day}</option>
                    ))}
                  </select>

                  <select
                    value={fromYear}
                    onChange={(e) => setFromYear(e.target.value)}
                    style={{
                      padding: "2px",
                      border: "1px solid #999",
                      fontSize: "11px",
                    }}
                  >
                    <option>2024</option>
                    <option>2025</option>
                  </select>

                  <span
                    style={{ fontSize: "11px", color: "#333", margin: "0 5px" }}
                  >
                    To
                  </span>

                  <select
                    value={toMonth}
                    onChange={(e) => setToMonth(e.target.value)}
                    style={{
                      padding: "2px",
                      border: "1px solid #999",
                      fontSize: "11px",
                    }}
                  >
                    <option>Dec</option>
                    <option>Nov</option>
                    <option>Oct</option>
                    <option>Sep</option>
                    <option>Aug</option>
                    <option>Jul</option>
                    <option>Jun</option>
                    <option>May</option>
                    <option>Apr</option>
                    <option>Mar</option>
                    <option>Feb</option>
                    <option>Jan</option>
                  </select>

                  <select
                    value={toDay}
                    onChange={(e) => setToDay(e.target.value)}
                    style={{
                      padding: "2px",
                      border: "1px solid #999",
                      fontSize: "11px",
                      width: "50px",
                    }}
                  >
                    <option>2</option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                      <option key={day}>{day}</option>
                    ))}
                  </select>

                  <select
                    value={toYear}
                    onChange={(e) => setToYear(e.target.value)}
                    style={{
                      padding: "2px",
                      border: "1px solid #999",
                      fontSize: "11px",
                    }}
                  >
                    <option>2025</option>
                    <option>2024</option>
                  </select>

                  <button
                    onClick={handleSearch}
                    style={{
                      padding: "4px 15px",
                      border: "1px solid #2e7d32",
                      backgroundColor: "#76b947",
                      color: "white",
                      cursor: "pointer",
                      fontSize: "11px",
                      fontWeight: "bold",
                      borderRadius: "3px",
                      marginLeft: "10px",
                    }}
                  >
                    Search
                  </button>
                </div>

                {/* Show clear filter button if filtered */}
                {isFiltered && (
                  <div style={{ marginTop: "10px" }}>
                    <button
                      onClick={handleClearFilter}
                      style={{
                        padding: "3px 12px",
                        border: "1px solid #999",
                        backgroundColor: "white",
                        color: styles.linkGreen,
                        cursor: "pointer",
                        fontSize: "11px",
                        fontWeight: "bold",
                        borderRadius: "3px",
                      }}
                    >
                      Clear Filter
                    </button>
                    <span
                      style={{
                        marginLeft: "10px",
                        fontSize: "11px",
                        color: "#555",
                      }}
                    >
                      Showing {transactions.length} of {allTransactions.length}{" "}
                      transactions
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Transaction Table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "13px",
              border: `0.5px solid #95C1A3`,
              backgroundColor: "white",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#f9f9f9",
                  borderBottom: "0.5px solid #95C1A3",
                }}
              >
                <th
                  style={{
                    padding: "8px 10px",
                    textAlign: "left",
                    fontWeight: "bold",
                    color: "#176940",
                    fontSize: "13px",
                    width: "105px",
                    borderRight: "0.5px solid #ddd",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("date")}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    Date
                    <img
                      src="src/assets/sort-ascending.gif"
                      alt="sort"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        width: "9px",
                        height: "9px",
                      }}
                    />
                  </span>
                </th>
                <th
                  style={{
                    padding: "8px 10px",
                    textAlign: "left",
                    fontWeight: "normal",
                    color: "#176940",
                    fontSize: "13px",
                    width: "320px",
                    borderRight: "0.5px solid #ddd",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("description")}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    Transaction Description
                    <img
                      src="src/assets/sort-unsorted.gif"
                      alt="sort"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        width: "9px",
                        height: "9px",
                      }}
                    />
                  </span>
                </th>
                <th
                  style={{
                    padding: "8px 10px",
                    textAlign: "right",
                    fontWeight: "normal",
                    color: "#176940",
                    fontSize: "13px",
                    width: "110px",
                    borderRight: "0.5px solid #ddd",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("withdrawals")}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "flex-end",
                    }}
                  >
                    Withdrawals
                    <img
                      src="src/assets/sort-unsorted.gif"
                      alt="sort"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        width: "9px",
                        height: "9px",
                      }}
                    />
                    <span
                      style={{
                        display: "inline-block",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        backgroundColor: "#7dc242",
                        color: "white",
                        fontSize: "10px",
                        textAlign: "center",
                        lineHeight: "14px",
                        cursor: "help",
                        fontWeight: "bold",
                      }}
                    >
                      ?
                    </span>
                  </span>
                </th>
                <th
                  style={{
                    padding: "8px 10px",
                    textAlign: "right",
                    fontWeight: "normal",
                    color: "#176940",
                    fontSize: "13px",
                    width: "110px",
                    borderRight: "0.5px solid #ddd",
                    cursor: "pointer",
                  }}
                  onClick={() => handleSort("deposits")}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "5px",
                      justifyContent: "flex-end",
                    }}
                  >
                    Deposits
                    <img
                      src="src/assets/sort-unsorted.gif"
                      alt="sort"
                      style={{
                        display: "inline-block",
                        verticalAlign: "middle",
                        width: "9px",
                        height: "9px",
                      }}
                    />
                    <span
                      style={{
                        display: "inline-block",
                        width: "14px",
                        height: "14px",
                        borderRadius: "50%",
                        backgroundColor: "#7dc242",
                        color: "white",
                        fontSize: "10px",
                        textAlign: "center",
                        lineHeight: "14px",
                        cursor: "help",
                        fontWeight: "bold",
                      }}
                    >
                      ?
                    </span>
                  </span>
                </th>
                <th
                  style={{
                    padding: "8px 10px",
                    textAlign: "right",
                    fontWeight: "normal",
                    color: "#95C1A3",
                    fontSize: "13px",
                    width: "110px",
                  }}
                >
                  Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction: Transaction, index: number) => {
                const isNegative = transaction.balance.includes("(");
                const balColor = isNegative ? "#8B0000" : "#333";
                const bg = index % 2 === 0 ? "white" : "#fafafa";

                return (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: bg,
                      borderBottom: "0.5px solid #f0f0f0",
                    }}
                  >
                    <td
                      style={{
                        padding: "7px 10px",
                        color: "#333",
                        fontSize: "13px",
                        whiteSpace: "nowrap",
                        borderRight: "0.5px solid #ddd",
                      }}
                    >
                      {transaction.expandable && (
                        <span
                          style={{
                            color: "#95C1A3",
                            fontWeight: "bold",
                            marginRight: "4px",
                            cursor: "pointer",
                          }}
                        >
                          +{" "}
                        </span>
                      )}
                      {transaction.date}
                    </td>
                    <td
                      style={{
                        padding: "7px 10px",
                        fontSize: "13px",
                        color: transaction.link ? "#333" : "#333",
                        borderRight: "0.5px solid #ddd",
                      }}
                    >
                      {transaction.link ? (
                        <>
                          <a
                            href="#"
                            style={{
                              color: "#176940",
                              textDecoration: "underline",
                            }}
                          >
                            View more
                          </a>
                          <span style={{ color: "#333" }}>
                            {" "}
                            {transaction.description.replace("View more ", "")}
                          </span>
                        </>
                      ) : (
                        transaction.description
                      )}
                    </td>
                    <td
                      style={{
                        padding: "7px 10px",
                        textAlign: "right",
                        fontSize: "13px",
                        color: "#333",
                        borderRight: "0.5px solid #ddd",
                      }}
                    >
                      {transaction.deposits}
                    </td>
                    <td
                      style={{
                        padding: "7px 10px",
                        textAlign: "right",
                        fontSize: "13px",
                        color: "#333",
                        borderRight: "0.5px solid #ddd",
                      }}
                    >
                      {transaction.withdrawals}
                    </td>
                    <td
                      style={{
                        padding: "7px 10px",
                        textAlign: "right",
                        fontSize: "13px",
                        color: balColor,
                      }}
                    >
                      {transaction.balance}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Totals Section */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "8px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 90px 90px 90px",
                textAlign: "right",
                fontSize: "11px",
                fontWeight: "bold",
                color: "#333",
                marginTop: "10px",
              }}
            >
              <div style={{ padding: "4px 10px" }}>Total :</div>
              <div
                style={{
                  padding: "4px 8px",
                  borderTop: "1px solid #999",
                  borderBottom: "3px double #999",
                }}
              >
                {totals.deposits}
              </div>
              <div
                style={{
                  padding: "4px 8px",
                  borderTop: "1px solid #999",
                  borderBottom: "3px double #999",
                }}
              >
                {totals.withdrawals}
              </div>
              <div></div> {/* Empty for balance column */}
            </div>
          </div>

          {/* Download Section */}
          <div
            style={{
              backgroundColor: "#f9f9f9",
              border: "1px solid #ccc",
              borderTop: "none",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <div style={{ display: "flex", gap: "5px" }}>
              <select
                style={{
                  padding: "2px",
                  border: "1px solid #999",
                  fontSize: "11px",
                  width: "180px",
                }}
              >
                <option>Microsoft Money</option>
              </select>
              <button
                style={{
                  background:
                    "linear-gradient(to bottom, #efffdf 0%, #d0eeb4 100%)",
                  color: "#333",
                  border: "1px solid #8fb564",
                  padding: "2px 10px",
                  borderRadius: "3px",
                  fontSize: "11px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Download
              </button>
            </div>

            <div style={{ fontSize: "10px", color: "#333" }}>
              All transactions to the close of the previous BUSINESS day will be
              downloaded.{" "}
              <a
                href="#"
                style={{ color: styles.linkGreen, textDecoration: "underline" }}
              >
                View supported versions of the software downloads.
              </a>
            </div>
          </div>

          {/* Footer Links */}
          <div
            style={{
              marginTop: "20px",
              fontSize: "11px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <a
              href="#"
              style={{
                color: styles.linkGreen,
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              +Legal Notes
            </a>
            <a
              href="#"
              style={{ color: styles.linkGreen, textDecoration: "underline" }}
            >
              Print
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
