/* Normalized "fixed-form" layer — RE-VERIFIED from primary sources (SSM + audited ARs), 18 Jun 2026.
   Drives structured UI components (level badges, segment charts, rating pills, ownership bars).
   Schema per company:
     moat:      {level, factors[]}
     market:    {position, note, segments:[{name, change(±% or null), dir, note}]}
     tam:       {sector, drivers[], tam}
     viability: {level, note}
     financialQuality / growthProfile / balanceSheet: {rating, points[]}
     redFlags:  {points[]}
   OWN: holders[] {name, pct?/shares?, type}; complete=true → proportional bar; remainder{label};
        board[] {init,name,role,tag?}; charges[] {amount,name,status}; gov[] {amount?,label}; note.
   Holder lists use DIRECT registered stakes to avoid double-counting deemed/indirect interests
   (deemed control is explained in note/board). */
const STRUCT = {
  nexg: {
    moat:{level:"High",factors:["Sole/dominant supplier of national ID & passport documents","Certified secure-document & regional personalisation centre","Entrenched government contracts, high switching cost","Security clearance / regulatory barriers to entry"]},
    market:{position:"Market leader",note:"Leading Malaysian secure-document & ICT-security group transitioning into digital ID and e-KYC infrastructure.",segments:[{name:"Customised smart card solutions",change:-2,dir:"down",note:"FY25 RM294.3m vs FY24 RM301.5m"},{name:"Manufacturing of cards & booklets",change:19,dir:"up",note:"FY25 RM79.1m vs FY24 RM66.8m"},{name:"Investment holding",change:null,dir:"flat",note:"no external revenue"}]},
    tam:{sector:"Digital identity, secure documents & ICT security",drivers:["National Digital ID rollout","e-KYC / financial inclusion","Smart-card & e-Passport renewal cycles","Regional expansion (ASEAN, ME, Africa)"],tam:"Not quantified"},
    viability:{level:"Strong",note:"Record profits, net-cash balance sheet and strong operating cash conversion."},
    financialQuality:{rating:"Robust",points:["Revenue +1.4% to RM373.5m — a record","PAT +25.4% to RM115.7m; ~31% net margin","Gross margin expanded to 66.2% from 59.9%","Operating cash flow RM96.6m (+67%)","Unqualified audit (Crowe Malaysia PLT)"]},
    growthProfile:{rating:"Modest / mature",points:["Top-line near-flat (+1.4%)","Profit growth driven by margin/mix, not volume","Manufacturing +19%; smart-card solutions −2%","Upside tied to Digital ID / e-KYC pipeline"]},
    balanceSheet:{rating:"Exceptionally strong",points:["Net cash position; negligible gearing","Total debt RM52.3m vs equity RM447.4m (D/E ~0.12x)","Cash & equivalents RM75.9m","Equity grew on retained earnings + ESOS"]},
    redFlags:{points:["Heavy government-contract concentration","RM99.7m trade receivables past due, not impaired (audit KAM)","Goodwill impairment a key audit matter","Heavy board/management turnover FY25–FY26","No final dividend recommended for FY2025"]}
  },
  green_packet: {
    moat:{level:"Low",factors:["No pricing power — gross margin ~2.5%","Loss-making across core segments","Licensed fintech/e-wallet permits = modest barrier","Telecom connectivity is commoditised"]},
    market:{position:"Niche",note:"Small-cap digital-services group with ~99.6% of revenue from low-margin connectivity services.",segments:[{name:"Digital Services (connectivity, fintech)",change:null,dir:"down",note:"~99.6% of revenue; segment loss RM15.7m"},{name:"Digital Devices & Infrastructure",change:null,dir:"down",note:"external revenue only RM0.8m — wound down"},{name:"Investment holding",change:null,dir:"flat",note:"only profitable segment (RM3.6m)"}]},
    tam:{sector:"Malaysian digital connectivity, e-wallet/fintech & IoT",drivers:["Digital payments adoption","Enterprise connectivity / managed services","Government digitalisation"],tam:"Not quantified"},
    viability:{level:"Weak",note:"Loss-making for both periods; survives on a debt-light, equity-funded balance sheet and asset disposals. Auditor flagged associate-impairment risk but issued a clean opinion with no going-concern qualification."},
    financialQuality:{rating:"Poor",points:["Net loss RM16.2m (FY25) and RM8.4m (FY24)","Gross margin razor-thin at ~2.5%","Revenue −28% even over a longer 15-month period","FY25 OCF positive only after a working-capital release","Earnings rely on disposals, not core trading"]},
    growthProfile:{rating:"Negative",points:["Revenue fell RM740m → RM532m over a longer period","Two largest segments deeply loss-making","Devices segment effectively discontinued"]},
    balanceSheet:{rating:"Mixed",points:["Very low gearing — borrowings repaid to nil (D/E ~0.01)","Positive equity RM42.9m but eroding","Accumulated losses RM340.6m → RM340m capital reduction (court-approved 17 Oct 2025)","~RM12.5m of RM23.8m cash is restricted fiduciary cash"]},
    redFlags:{points:["Persistent losses + ~28% revenue decline (steeper annualised)","RM340.6m accumulated losses → capital reduction","Auditor KAM: associate & goodwill/intangible impairment","Half of reported cash is restricted fiduciary cash","No dividends; reliant on disposals for liquidity"]}
  },
  alphv: {
    moat:{level:"Low",factors:["Small founder-led firm","No IP/charges disclosed","Commoditised IT services"]},
    market:{position:"Niche",note:"Tiny early-stage IT/software & event-management firm with a single full financial year on record.",segments:[]},
    tam:{sector:"Malaysian IT services & software",drivers:["Digitalisation demand","SME software needs"],tam:"Not quantified"},
    viability:{level:"Early",note:"Profitable in first full FY with strong margins but only one year of data and a very small capital base."},
    financialQuality:{rating:"Adequate",points:["~20% net margin in first full FY","Unqualified audit (TKNP PLT)","PAT fully retained, no dividends","Single year limits assessment"]},
    growthProfile:{rating:"Early-stage",points:["Incorporated Apr 2023","Only one full FY reported","No prior-year comparative"]},
    balanceSheet:{rating:"Strong",points:["Positive equity ~RM114k","No non-current liabilities","No charges / secured debt","Current ratio ~2.7x"]},
    redFlags:{points:["Only one year of financials — no trend","Share-capital figure conflicts between pages of the filing","Very small scale; key-person dependency on 2 founders"]}
  },
  censof: {
    moat:{level:"Moderate",factors:["Entrenched SAGA-certified government accounting systems","High switching costs on mission-critical platforms","National digital-infrastructure contracts (iPayment, i-SPKP)","Recurring maintenance & licence revenue"]},
    market:{position:"Niche",note:"Established niche leader in Malaysian public-sector financial-management software, with commercial/SME accounting and a digital-technology arm.",segments:[{name:"FMS — Government",change:null,dir:"up",note:"~RM61.84m; largest division"},{name:"FMS — Commercial & SME (ABSS)",change:null,dir:"flat",note:"~RM22.22m"},{name:"Digital Technology",change:null,dir:"up",note:"~RM17.67m"},{name:"Wealth Management",change:null,dir:"flat",note:"~RM10.73m"}]},
    tam:{sector:"Malaysian govtech / fintech enterprise software",drivers:["Government digitalisation","Mandatory e-invoicing rollout","SME cloud-ERP adoption","AI / automation expansion"],tam:"Not quantified"},
    viability:{level:"Viable",note:"Consistently profitable, strongly cash-generative, near-zero gearing; revenue broadly flat/mature with modest margins."},
    financialQuality:{rating:"Adequate",points:["Unqualified audit (Crowe Malaysia PLT)","Healthy gross margin ~38%; PBT +2.2%","Strong operating cash flow RM7.15m","Net margin thin ~3.7%; PAT down ~27% YoY","Cash RM28.8m far exceeds borrowings RM1.15m"]},
    growthProfile:{rating:"Modest / mature",points:["Revenue essentially flat YoY","PBT +2.2% but PAT fell on higher tax","Growth depends on lumpy public-sector contract timing","New SAGA-division wins support pipeline"]},
    balanceSheet:{rating:"Exceptionally strong",points:["Equity RM105.5m vs liabilities RM31.5m","Gearing negligible ~0.011x","Cash RM28.8m dwarfs borrowings RM1.15m","No bank-loan-funded leverage"]},
    redFlags:{points:["PAT −27% YoY despite higher PBT (tax jump)","Revenue stagnant; government-cycle reliance","Large deferred tax assets (RM29.8m) and goodwill","NCI takes a meaningful share (owners' PAT only RM2.68m)","No dividend declared for FY2025"]}
  },
  inari: {
    moat:{level:"Moderate",factors:["Long-qualified OSAT supplier to a marquee US RF customer","High capital intensity & customer-specific test capability","Customer concentration limits durability of the moat"]},
    market:{position:"Niche",note:"A leading Malaysian OSAT player specialising in RF chip assembly & test, anchored by a dominant US smartphone-chip customer.",segments:[{name:"Revenue",change:-8.6,dir:"down",note:"FY25 revenue −8.6% to RM1.35bn"},{name:"Profit after tax",change:-29.0,dir:"down",note:"PAT −29% on lower volumes"}]},
    tam:{sector:"Outsourced semiconductor assembly & test (OSAT), RF / photonics",drivers:["5G/RF content growth in smartphones","AI-driven datacentre optical connectivity","Supply-chain diversification into SE Asia"],tam:"Not quantified"},
    viability:{level:"Strong",note:"Profitable, deeply cash-rich (RM2.14bn cash, zero borrowings) and consistently dividend-paying, despite a cyclical FY25 earnings decline."},
    financialQuality:{rating:"Strong",points:["Unqualified audit (Grant Thornton Malaysia PLT)","Cash RM2.14bn vs effectively zero financial debt","Operating cash flow RM331m exceeds PAT","High dividend payout (~98% of earnings)","FY25 revenue −8.6%, PAT −29%"]},
    growthProfile:{rating:"Modest / mature",points:["Revenue & PAT declined two consecutive years from FY22 peak","Highly cyclical, tied to one flagship customer","Optionality from new RF/AI-optical & China+1 capacity"]},
    balanceSheet:{rating:"Exceptionally strong",points:["Zero borrowings; D/E ~0.00 (only small leases)","RM2.14bn cash & bank balances","Equity RM3.09bn vs liabilities RM0.31bn","Net cash covers all liabilities several times over"]},
    redFlags:{points:["High customer concentration (flagship US RF customer)","FY25 PAT −29% — cyclical earnings vulnerability","~98% dividend payout leaves little for downturns","Insas group + EPF/KWAP large holders — concentrated influence","FX exposure — RM126.7m translation loss in OCI"]}
  },
  infomina: {
    moat:{level:"Moderate",factors:["IBM-Z / mainframe niche specialist","Top-tier OEM partner awards (IBM, Broadcom, Hitachi Vantara)","High recurring Renewal revenue from financial institutions","Long-term maintenance contracts with banks"]},
    market:{position:"Niche",note:"Specialist mainframe/IBM-Z infrastructure provider serving 90+ active customers (~65% mainframe).",segments:[{name:"Renewal (recurring)",change:null,dir:"up",note:"RM170.9m, 86.9% of revenue"},{name:"Turnkey (project)",change:null,dir:"down",note:"RM25.8m, 13.1% — main driver of decline"}]},
    tam:{sector:"IT infrastructure / mainframe & enterprise software",drivers:["Banking/insurance digitisation","Rising compute & processing demand","Regional banking expansion (Thailand, HK, Japan)"],tam:"Not quantified · orderbook RM289m / tenderbook RM839m"},
    viability:{level:"Strong",note:"Profitable, net-cash, strong OCF recovery and a sizeable orderbook/tenderbook as at 31 May 2025."},
    financialQuality:{rating:"Strong",points:["Unqualified audit (Baker Tilly Monteiro Heng PLT)","Net cash: borrowings only RM3.1m vs RM94.7m cash","OCF rebounded to RM48.1m from −RM8.5m","Net margin 10.7% despite one-off impairment","High recurring-revenue base"]},
    growthProfile:{rating:"Modest / mature",points:["Revenue −12.6% (FY25) and −10.4% (FY24) off FY23 peak","5-yr revenue CAGR ~17%","Decline concentrated in Turnkey segment","Renewal gross profit grew 9.4% YoY"]},
    balanceSheet:{rating:"Exceptionally strong",points:["Net cash position; net gearing <0.1x","Cash RM94.7m vs total debt RM3.1m","Equity RM151.8m, up from RM143.0m","No final dividend declared — capital retained"]},
    redFlags:{points:["RM10.04m impairment on single Philippine customer (BPI); related litigation (~RM133m claim)","Long-outstanding trade receivables — key audit matter","FX losses ~RM3.1m (69% of revenue overseas)","Revenue declining two consecutive years","High customer/segment concentration"]}
  },
  innolytic: {
    moat:{level:"Low",factors:["Owner-operator micro-firm","No registered charges or IP","Service-based, low switching cost"]},
    market:{position:"Niche",note:"A very small owner-run IT services firm (facilities management, programming, consultancy); no market-share data disclosed.",segments:[]},
    tam:{sector:"Malaysian IT services / software consultancy",drivers:["SME digitalisation","Cloud & managed IT adoption"],tam:"Not quantified"},
    viability:{level:"Viable",note:"Profitable and debt-free with positive retained earnings three years post-incorporation, but tiny scale and entirely dependent on one owner-director."},
    financialQuality:{rating:"Adequate",points:["Profitable: PAT RM36k on revenue RM534k","Net margin ~6.8%","Debt-free, no charges","Positive retained earnings RM84k","Unqualified audit (Skrastin Lim)"]},
    growthProfile:{rating:"Indeterminable",points:["Only one year of financials disclosed","Incorporated Jul 2022; no prior-year comparatives"]},
    balanceSheet:{rating:"Strong",points:["No debt and no non-current liabilities","Current ratio ~4.2x","Equity RM94k all internally funded"]},
    redFlags:{points:["Single shareholder & sole director — key-person concentration","Balance sheet is current assets only (no fixed assets)","Very small absolute scale","Only one year of audited financials"]}
  },
  mhnexus: {
    moat:{level:"None",factors:[]},
    market:{position:"Not disclosed",note:"Nature of business: trading of software and software development. No market position or financials in the SSM profile.",segments:[]},
    tam:{sector:"Software trading & development (Malaysia)",drivers:[],tam:"Not quantified"},
    viability:{level:"Unverifiable",note:"No accounts lodged — Exempt Private Company certificate filed. Financial viability cannot be assessed."},
    financialQuality:{rating:"Unverifiable",points:["No accounts available (EPC certificate)","All P&L and balance-sheet items NIL","FYE not stated"]},
    growthProfile:{rating:"Indeterminable",points:["No revenue or financial figures disclosed for any period"]},
    balanceSheet:{rating:"Unverifiable",points:["All balance-sheet items NIL in the filing","Unsatisfied (open) charge to Maybank Islamic implies secured borrowing of undisclosed amount"]},
    redFlags:{points:["Unsatisfied (open) charge with Maybank Islamic Berhad (15-05-2023)","No public accounts — Exempt Private Company, reduced transparency","Single shareholder / single director — concentration risk"]}
  },
  capital_a: {
    moat:{level:"Moderate",factors:["AirAsia brand licensing (asset-light royalty income)","Asia Digital Engineering — Malaysia's largest MRO hangar","Teleport — SE Asia air-cargo network scale","BigPay / AirAsia rewards platform","Founder-led, entrenched ecosystem"]},
    market:{position:"Diversified",note:"Post-divestment, a diversified non-aviation travel-tech group (logistics, MRO, fintech, food, brand licensing) after spinning off the airlines.",segments:[{name:"Engineering (ADE/MRO)",change:null,dir:"up"},{name:"AirAsia Move (OTA)",change:null,dir:"flat"},{name:"Teleport (logistics)",change:null,dir:"up"},{name:"Santan (food)",change:null,dir:"flat"},{name:"Brand licensing / BigPay",change:null,dir:"up"}]},
    tam:{sector:"SE Asia travel, logistics, MRO & fintech",drivers:["Regional air-travel growth","E-commerce / air-cargo demand","MRO capacity shortage in Asia","Digital payments adoption"],tam:"Not quantified"},
    viability:{level:"Mixed",note:"Restructuring complete and equity restored to positive, but FY25 profitability is driven almost entirely by a one-off divestment gain; underlying continuing-ops EBITDA is thin (~RM108m) and the group remains a PN17 issuer pending upliftment."},
    financialQuality:{rating:"Mixed",points:["FY25 'profit' RM13.4bn dominated by a ~RM11.3bn one-off divestment gain","Underlying continuing-ops EBITDA only ~RM108m","Operating cash flow strong (RM5.67bn) but largely from now-divested aviation","Equity positive (RM921m) only via PN17 capital reductions","Unqualified audit (BDO PLT), no going-concern emphasis"]},
    growthProfile:{rating:"Indeterminable",points:["Reported revenue −9.5% but spans pre-divestment aviation","Continuing-ops revenue grew +9.2% to RM1,866.9m","Future depends on Teleport/ADE/BigPay scaling without airline earnings"]},
    balanceSheet:{rating:"Improving",points:["Equity swung from −RM10.0bn to +RM0.92bn","Total debt reduced to RM1.28bn","Total assets shrank RM30.7bn → RM7.6bn after deconsolidating aviation","Net gearing 1.25x; cash RM432.6m below borrowings RM1.28bn"]},
    redFlags:{points:["Profitability entirely reliant on one-off divestment gain","Still a PN17 (distressed) issuer pending Bursa upliftment","Thin equity via capital reduction; accumulated losses still −RM5.32bn","Errata issued post-filing correcting borrowings & segment notes","Founder-concentrated control + ~RM107m combined exec pay"]}
  }
};

const OWN = {
  nexg: {
    holders:[{name:"Tan Sri Mohd Khairul Adib",pct:9.99,type:"deemed/indirect (via Kuantum Juang & Skyelimit)"},{name:"Datuk Abu Hanifah Noordin",pct:7.80,type:"Executive Chairman, direct"},{name:"Kuantum Juang Sdn Bhd",pct:5.86,type:"substantial, direct"}],
    remainder:{label:"Other / public & nominees"},
    board:[{init:"AH",name:"Datuk Haji Abu Hanifah Noordin",role:"Executive Chairman & CEO · 7.80% direct",tag:"Founder"},{init:"KA",name:"Tan Sri Mohd Khairul Adib",role:"Executive Deputy Chairman · 9.99% deemed"},{init:"EI",name:"Hajah Erna bt Ismail",role:"Executive Director & CFO"},{init:"MY",name:"Michelle Yong Voon Sze",role:"Independent NED · Chair, Audit & Risk Committee"},{init:"ZA",name:"Datuk Zainal Abidin Abu Hassan",role:"Independent NED · Chair, NRC & ESOS"}],
    charges:[{amount:"RM40,000,000",name:"Kenanga Investment Bank · created 16 Jul 2025",status:"Active"},{amount:"Open charge",name:"CIMB Islamic Bank · 2014",status:"Active"},{amount:"RM20,000",name:"AmIslamic Bank · 2014",status:"Satisfied"}],
    gov:[{amount:"RM99.7M",label:"Trade receivables past due but not impaired — auditor key audit matter"},{amount:"~RM49.6M",label:"Contingent liability — corporate guarantees to subsidiaries (off balance sheet)"}],
    note:"No single controlling shareholder — only ~24% is individually/substantially disclosed; the rest is public/nominee-held. Board heavily reconstituted across FY25–26."
  },
  green_packet: {
    holders:[{name:"Authentic Design Resources Sdn Bhd",pct:14.39,type:"substantial, direct"},{name:"European Credit Investment Bank Ltd",pct:5.44,type:"substantial, direct"}],
    remainder:{label:"Other / public & nominees"},
    board:[{init:"YI",name:"Datuk Seri Dr. Yusof bin Ismail",role:"Independent NED / Chairman"},{init:"SH",name:"Datuk Wira Shahul Hameed",role:"Managing Director & Group CEO"},{init:"KT",name:"Kunal Tayal",role:"Non-Independent NED · ~14.39% deemed via Authentic Design"},{init:"NF",name:"Nor Faizah Othman",role:"Non-Independent NED · former Exec Director/CFO"}],
    charges:[{amount:"Secured (term loans repaid to nil)",name:"Legal charge over investment properties + corporate guarantee",status:"Satisfied"}],
    gov:[{amount:"RM340,000,000",label:"Court-approved capital reduction to offset accumulated losses (17 Oct 2025)"},{amount:"RM1.22M",label:"Total directors' remuneration FY2025 (Group, 15-month period)"}],
    note:"Top holder is Authentic Design Resources (14.39%); director Kunal Tayal is deemed interested in that block. 2,593,397,894 shares (ex-treasury) as at 24 Sep 2025. (Prior data named a holder who does not appear in the real register.)"
  },
  alphv: {
    holders:[{name:"Tan De Zhern",pct:60,shares:30600,type:"founder-director"},{name:"Khor Jeng Yee",pct:40,shares:20400,type:"founder-director"}],complete:true,
    board:[{init:"TD",name:"Tan De Zhern",role:"Director · 60% (30,600 shares)"},{init:"KJ",name:"Khor Jeng Yee",role:"Director · 40% (20,400 shares)"},{init:"CL",name:"Chua Li Wah",role:"Company Secretary"}],
    note:"Private company — two founder-directors hold 100% (51,000 ordinary shares); clear, concentrated control. No company charges registered."
  },
  censof: {
    holders:[{name:"SAAS Global Sdn Bhd",pct:31.86,type:"substantial, direct (executives' vehicle)"},{name:"Tan Chean Suan",pct:14.26,type:"substantial, direct"},{name:"Tan Sri Dato' Mohd Ibrahim",pct:6.53,type:"substantial, direct"}],
    remainder:{label:"Other / public & nominees"},
    board:[{init:"MS",name:"Tan Sri Datuk Wira Dr. Mohd Shukor",role:"Independent NED / Chairman"},{init:"AS",name:"Ameer bin Shaik Mydin",role:"Group MD · deemed via SAAS Global"},{init:"TS",name:"Tamil Selvan A/L M. Durairaj",role:"Deputy Group MD · deemed via SAAS Global"},{init:"AH",name:"Ang Hsin Hsien",role:"Executive Director · deemed via SAAS Global"},{init:"MR",name:"Dato' Mohd Redzuan Hasan",role:"Independent NED · Chair, Audit Committee"}],
    gov:[{amount:"RM2.53M",label:"Total directors' remuneration FY2025 (Group)"},{label:"Top senior management disclosed only in RM50k bands (Practice 8.3 not adopted)"}],
    note:"Founders/executives (Ameer, Tamil Selvan, Ang) control via SAAS Global (31.86%). 552,281,576 shares; 7,458 shareholders as at 30 Jun 2025; the four >5% holders hold 47.72%."
  },
  inari: {
    holders:[{name:"Employees Provident Fund (EPF)",pct:13.45,type:"institutional, direct"},{name:"Insas Technology Berhad",pct:10.42,type:"substantial, direct"},{name:"KWAP (Retirement Fund)",pct:8.50,type:"institutional, direct"}],
    remainder:{label:"Other / public & nominees"},
    board:[{init:"TA",name:"Y.A.M. Tengku Puteri Seri Kemala",role:"Non-Independent NED / Chairman"},{init:"TS",name:"Dato' Dr. Tan Seng Chuan",role:"Executive Vice Chairman"},{init:"LC",name:"Lau Kean Cheong",role:"Executive Director cum Group CEO"},{init:"TK",name:"Dato' Sri Thong Kok Khee",role:"Non-Independent NED · ~13.5% deemed (Insas group)"},{init:"PA",name:"Datuk Phang Ah Tong",role:"Senior Independent NED · Chair, Remuneration"}],
    gov:[{amount:"RM8.79M",label:"Total directors' remuneration FY2025 (Exec RM7.75m + NED RM1.04m)"}],
    note:"Large, partly-institutional register. The Insas group (Insas Berhad, Insas Technology, Dato' Sri Thong Kok Khee) is the dominant ~13–14% deemed control bloc; EPF and KWAP are major institutional holders. 3,789,014,099 shares. Zero borrowings — no security charges."
  },
  infomina: {
    holders:[{name:"Infomina Holdings Sdn Bhd",pct:55.42,type:"holding company"},{name:"Yee Chee Meng",pct:6.58,type:"CEO/MD, direct"},{name:"Lim Leong Ping (Raymond Lim)",pct:5.94,type:"Exec Director, direct"},{name:"Tan Siang Pin",pct:5.17,type:"substantial, direct"}],
    remainder:{label:"Other / public & nominees"},
    board:[{init:"SA",name:"Saleena binti Mohd Ali",role:"Independent Non-Executive Chairperson"},{init:"YC",name:"Yee Chee Meng",role:"CEO cum Managing Director · controls Infomina Holdings"},{init:"LL",name:"Lim Leong Ping (Raymond Lim)",role:"Executive Director · 5.94% direct"},{init:"NS",name:"Nor'Azamin bin Salleh",role:"Independent NED · Chair, Audit & Risk"},{init:"TW",name:"Tay Weng Hwee",role:"Independent NED · Chair, NRC"}],
    gov:[{amount:"RM3.69M",label:"Total directors' remuneration FY2025 (Group)"},{label:"Key senior management remuneration RM1.94M — individual amounts not disclosed"}],
    note:"Founder-controlled via Infomina Holdings Sdn Bhd (55.42%), itself controlled by Yee Chee Meng, Mohd Hoshairy & Nasimah. 601,250,000 shares; 1,412 shareholders as at 28 Aug 2025."
  },
  innolytic: {
    holders:[{name:"Ng Choong Chong",pct:100,shares:10000,type:"sole shareholder & director"}],complete:true,
    board:[{init:"NC",name:"Ng Choong Chong",role:"Sole shareholder & director · 100% (10,000 shares)"},{init:"CW",name:"Chua Wei Hsiung",role:"Company Secretary"}],
    gov:[{label:"Key-person dependency — one person is both sole owner and sole director"}],
    note:"Entirely owned and controlled by one individual — high key-person risk. No company charges registered."
  },
  mhnexus: {
    holders:[{name:"Dr Mohamad Azrin bin Zubir",pct:100,shares:500000,type:"sole shareholder & director"}],complete:true,
    board:[{init:"MA",name:"Dr Mohamad Azrin bin Zubir",role:"Director (appointed 2024) · 100% (500,000 shares)"},{init:"MY",name:"Mak Yee Hong",role:"Company Secretary"}],
    charges:[{amount:"Open charge (amount not stated)",name:"Maybank Islamic Berhad · created 15-05-2023",status:"Active"}],
    gov:[{label:"Exempt Private Company — no public accounts lodged (transparency risk)"}],
    note:"Single shareholder/director (owner-managed). Issued capital RM3.6m across 500,000 shares. An unsatisfied secured charge to Maybank Islamic is on file."
  },
  capital_a: {
    holders:[{name:"Tune Air Sdn Bhd",pct:11.55,type:"founders' vehicle (Fernandes/Kamarudin)"},{name:"Tune Live Sdn Bhd",pct:11.39,type:"founders' vehicle (Fernandes/Kamarudin)"},{name:"Positive Boom Limited",pct:7.44,type:"substantial, direct"}],
    remainder:{label:"Other / public & nominees"},
    board:[{init:"KM",name:"Datuk Kamarudin bin Meranun",role:"Executive Director / Chairman · ~23% (mainly via Tune entities)",tag:"Co-founder"},{init:"AF",name:"Tan Sri Anthony Francis Fernandes",role:"Executive Director / Group CEO · ~23% (mainly via Tune entities)",tag:"Co-founder"},{init:"MK",name:"Dato' Mohamed Khadar Merican",role:"Independent NED · Chair, Audit Committee"},{init:"FL",name:"Dato' Fam Lee Ee",role:"Senior Independent NED · Chair, NRC"}],
    gov:[{amount:"~RM107M",label:"Combined FY2025 remuneration of the two executive directors (Fernandes RM54.9m + Kamarudin RM52.5m)"},{label:"Top-5 senior management not named (departure from Practice 8.2)"},{label:"PN17 issuer — pending formal Bursa upliftment"}],
    note:"Founder-controlled: Fernandes (~22.94%) and Kamarudin (~23.03%) hold mainly via Tune Air & Tune Live (deemed interests overlap those vehicles, not additive). 4,470,480,489 shares. No security charges disclosed."
  }
};
