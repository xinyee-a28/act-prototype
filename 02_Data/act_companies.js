/* Re-verified from PRIMARY SOURCES (SSM filings + audited Annual Reports), 18 Jun 2026.
   Supersedes the AI-Excel-derived version (which had pervasive unit errors + wrong ownership).
   ALL money in RM THOUSANDS as numbers. Arrays are [latest FY, prior FY]. null = not disclosed.
   Provenance + per-company source list: see SOURCES.md. Audit opinions now confirmed for all 9. */
const COMPANY_ORDER=["green_packet", "alphv", "nexg", "censof", "inari", "infomina", "innolytic", "mhnexus", "capital_a"];
const COMPANIES={
 "green_packet": {
  "id": "green_packet",
  "name": "Green Packet Berhad",
  "sector": "Technology · digital services & telecom",
  "raw": {
   "revenue": [532237, 740138],
   "cogs": [-518834, -722455],
   "grossProfit": [13403, 17683],
   "ebitda": [null, null],
   "opProfit": [-15491, -6855],
   "pbt": [-16124, -7677],
   "pat": [-16191, -8361],
   "cash": [23839, 7530],
   "ocf": [4602, -25691],
   "totalAssets": [154709, 232511],
   "totalLiab": [111837, 182094],
   "totalDebt": [400, 3507],
   "totalEquity": [42872, 50417],
   "employees": [null, null],
   "dividends": [0, 0]
  },
  "derived": {
   "revGrowth": [-28.1, null],
   "grossMargin": [2.5, 2.4],
   "netMargin": [-3.0, -1.1],
   "roe": [-37.8, -16.6],
   "roa": [-10.5, -3.6],
   "debtEquity": [0.01, 0.07]
  },
  "qual": {
   "ownership": "As at 24 Sept 2025 the substantial shareholders were Authentic Design Resources Sdn. Bhd. (373,183,000 shares, 14.39% direct), European Credit Investment Bank Ltd. (141,089,600, 5.44% direct), and director Kunal Tayal (200,000 direct + 373,183,000 deemed via Authentic Design Resources = 14.39%). Ownership is otherwise dispersed across public and nominee accounts. Total issued shares 2,593,397,894 (ex-7,707,700 treasury).",
   "remuneration": "Total Directors' remuneration from the Group was RM1,223,000 for FY2025 (15 months) vs RM888,000 for FY2024. Non-Executive fee scale: Chairman RM120,000/yr, Audit Committee Chairman RM60,000/yr, ordinary member RM36,000/yr, plus RM1,000/day meeting allowance.",
   "audit": "Unqualified (clean) opinion — true and fair view under MFRS/IFRS and the Companies Act 2016. Auditor: Moore Stephens Associates PLT (AF002096), report dated 29 October 2025. Key audit matters: impairment of investment in associate (EMASB, carrying RM19.3m) and goodwill/intangibles. No going-concern qualification.",
   "moat": "Weak. Minimal pricing power (group gross margin ~2.5%), competing in commoditised connectivity/digital services and loss-making across its two largest segments. Main durable advantage is licensed fintech/e-wallet and telecom permits — a modest regulatory barrier rather than an economic moat.",
   "market": "Small-cap player; revenue is ~99.6% concentrated in the Digital Services segment (telecom connectivity, internet portal/e-commerce, fintech/e-wallet). The Digital Devices & Infrastructure segment has been effectively wound down (external sales just RM816k). Not a market leader in any segment.",
   "tam": "Operates in Malaysian digital connectivity, e-wallet/fintech and IoT services, with tailwinds from digital-payments adoption, enterprise connectivity and government digitalisation. TAM not quantified.",
   "viability": "Weak. Loss-making, shrinking, and dependent on asset disposals and working-capital releases for liquidity rather than operating profitability. Low debt and positive (but eroding) equity provide a cushion, and the auditor did not raise going-concern doubt, but underlying trading viability is unproven.",
   "risks": "Persistent losses and a ~28% revenue decline (steeper annualised, as FY2025 is a 15-month transition period); RM340.6m accumulated losses driving a court-approved RM340m capital-reduction exercise (confirmed 17 Oct 2025); impairment risk on the associate, goodwill and intangibles (auditor KAM); half of reported cash is restricted fiduciary cash; single low-margin segment dependence; no dividends."
  },
  "assess": {
   "financialQuality": "Poor. Net losses in both periods (RM16.2m / RM8.4m), wafer-thin gross margins (~2.5%), and declining revenue. FY2025 operating cash flow turned positive (RM4.6m) but only via an RM81.5m release from assets-held-for-sale and receivables, not core trading; FY2024 OCF was negative RM25.7m.",
   "growthProfile": "Negative. Revenue fell from RM740.1m to RM532.2m despite FY2025 spanning 15 months versus 12, implying an even sharper underlying contraction (~42% annualised). Two of three segments are deeply loss-making and the devices segment is essentially discontinued.",
   "balanceSheet": "Mixed. Strikingly low gearing — term-loan borrowings fully repaid to nil at 30.06.2025, leaving only RM0.4m of lease liabilities (D/E ~0.01) — and still-positive equity of RM42.9m. But equity is eroding, accumulated losses are large (RM340.6m, prompting a court-approved RM340m capital reduction), and ~RM12.5m of the RM23.8m cash is restricted fiduciary cash.",
   "redFlags": "Chronic losses; ~28% (steeper annualised) revenue decline; RM340.6m accumulated losses necessitating a capital reduction; auditor key audit matters on associate/goodwill/intangible impairment; restricted fiduciary cash inflating headline liquidity; single-segment dependence; no dividends."
  }
 },
 "alphv": {
  "id": "alphv",
  "name": "ALPHV Technologies Sdn. Bhd.",
  "sector": "Technology · software & IT services",
  "raw": {
   "revenue": [579, null],
   "cogs": [null, null],
   "grossProfit": [null, null],
   "ebitda": [null, null],
   "opProfit": [null, null],
   "pbt": [138, null],
   "pat": [113, null],
   "cash": [null, null],
   "ocf": [null, null],
   "totalAssets": [169, null],
   "totalLiab": [55, null],
   "totalDebt": [null, null],
   "totalEquity": [114, null],
   "employees": [null, null],
   "dividends": [0, null]
  },
  "derived": {
   "revGrowth": [null, null],
   "grossMargin": [null, null],
   "netMargin": [20.0, null],
   "roe": [99.0, null],
   "roa": [67.0, null],
   "debtEquity": [null, null]
  },
  "qual": {
   "ownership": "Wholly owned by two founder-directors: Tan De Zhern (30,600 shares, 60%) and Khor Jeng Yee (20,400 shares, 40%). Total 51,000 ordinary shares; no other members.",
   "remuneration": "Not disclosed in the SSM filing.",
   "audit": "Unqualified (clean) report for FYE 31-08-2024; auditor TKNP PLT (AF002323). Accounts non-consolidated; tabled 29-05-2025.",
   "moat": "Limited — a small, founder-led IT services and event-management firm with no disclosed IP or registered charges; offerings are largely commoditised.",
   "market": "Niche, early-stage player in Malaysian IT/software services and event management.",
   "tam": "Operates in Malaysia's IT services / software development market; TAM not quantified.",
   "viability": "Early-stage but profitable in its first full financial year (PAT ~RM113k on revenue ~RM579k) with positive equity and no debt; only one year of data limits the assessment.",
   "risks": "Single year of financials with no comparative; very small scale and capital base; key-person dependency on the two founders; a share-capital amount discrepancy across pages of the filing (RM51,000 issued vs RM1,000 stated in the accounts)."
  },
  "assess": {
   "financialQuality": "Solid first-year result — ~20% net margin, unqualified audit, profits fully retained. But a single reporting period and very small scale mean quality is only provisionally adequate.",
   "growthProfile": "Early-stage: incorporated April 2023, FYE 31-08-2024 is the first full year, so no growth trend can be computed (no prior-year comparative in the filing).",
   "balanceSheet": "Strong for its size — total assets ~RM169k, total liabilities ~RM55k (all current), positive equity ~RM114k, current ratio ~2.7x, and no charges or secured debt.",
   "redFlags": "No multi-year trend; share-capital discrepancy across pages of the filing; concentration/key-person risk with only two owner-directors."
  }
 },
 "nexg": {
  "id": "nexg",
  "name": "NEXG Berhad",
  "sector": "Technology · ICT & security",
  "raw": {
   "revenue": [373454, 368309],
   "cogs": [-126205, -147705],
   "grossProfit": [247249, 220604],
   "ebitda": [168182, 152431],
   "opProfit": [154242, 125694],
   "pbt": [151775, 122476],
   "pat": [115676, 92232],
   "cash": [75879, 106546],
   "ocf": [96563, 57714],
   "totalAssets": [555090, 468280],
   "totalLiab": [107731, 101006],
   "totalDebt": [52304, 59820],
   "totalEquity": [447359, 367274],
   "employees": [805, null],
   "dividends": [57157, 68956]
  },
  "derived": {
   "revGrowth": [1.4, null],
   "grossMargin": [66.2, 59.9],
   "netMargin": [31.0, 25.0],
   "roe": [25.9, null],
   "roa": [20.8, null],
   "debtEquity": [0.12, 0.16]
  },
  "qual": {
   "ownership": "No single controlling shareholder. The three substantial holders are Tan Sri Dato' Seri Mohd Khairul Adib bin Abd Rahman (9.99% deemed, via Kuantum Juang & Skyelimit Alliance), founder and Executive Chairman Datuk Haji Abu Hanifah bin Noordin (7.80% direct + 0.21% deemed), and Kuantum Juang Sdn Bhd (5.86% direct). The remaining ~82% is held by the public and nominee/custodian accounts. Percentages on 2,902,934,350 shares (excl. 188,973,100 treasury).",
   "remuneration": "Directors' remuneration disclosed at both Company and Group levels. Note: the prior AI-extracted figure (RM9.51m group incl. subsidiary directors) could not be re-confirmed from the FY2025 Annual Report at that level — see SOURCES.md / discrepancy log; treat the remuneration quantum as needing a re-check.",
   "audit": "Unqualified (clean) 'true and fair view' opinion from Crowe Malaysia PLT (AF 1018), dated 28 May 2025. Two key audit matters: recoverability of trade receivables (RM99.7m past due but not impaired) and impairment of goodwill. SSM filing independently confirms unqualified status and Crowe as auditor.",
   "moat": "NEXG (formerly Datasonic) is the entrenched supplier of Malaysia's national identity documents, passports and secure chips, and operates the country's largest card-personalisation centre plus a certified Regional Personalisation Centre. Security-clearance requirements, long government relationships and high switching costs create a wide, durable moat — though concentrated in a handful of public-sector contracts.",
   "market": "Market leader in Malaysian secure documents and smart-card/ICT-security solutions, repositioning (and rebranding from Datasonic to NEXG) toward digital identity, e-KYC and national digital-infrastructure enablement, with selective export exposure to ASEAN, the Middle East and Africa.",
   "tam": "Addressable opportunity framed around national Digital ID adoption, e-KYC-driven financial inclusion, recurring smart-card and e-Passport renewal cycles, and regional expansion. No TAM figure quantified.",
   "viability": "Highly viable: FY2025 delivered record revenue and profit, ~31% net margin, ROE ~25.9%, a net-cash balance sheet and RM96.6m operating cash flow.",
   "risks": "Heavy dependence on a few key government contracts; RM99.7m trade receivables past due but not impaired (audit-flagged); goodwill carrying value; significant board/management churn across FY2025 into 2026. For FY2025 the directors did not recommend a final dividend."
  },
  "assess": {
   "financialQuality": "Robust. Revenue essentially flat (+1.4% to RM373.5m) but profitability improved sharply — gross margin rose to 66.2% and PAT climbed 25.4% to RM115.7m (~31% net margin), with operating cash flow of RM96.6m comfortably exceeding reported profit. Clean audit opinion lends high confidence.",
   "growthProfile": "Modest / mature. The headline top line barely moved; the manufacturing segment rose ~19% offset by a ~2% dip in the core smart-card segment, and earnings growth came from margin and mix rather than volume. Upside hinges on converting the Digital ID / e-KYC pipeline into recurring revenue.",
   "balanceSheet": "Exceptionally strong. Total debt of only RM52.3m against RM447.4m equity (D/E ~0.12x) and RM75.9m cash — a net-cash position with negligible gearing and ample liquidity.",
   "redFlags": "Concentration risk in Malaysian government contracts; RM99.7m of trade receivables past due but not impaired (audit judgement area); goodwill impairment risk; unusually high turnover of directors and senior management through FY2025 into 2026. (Prior UI's FY2024 cash of RM126.7m was unsupported by the audited accounts — corrected to RM106.5m.)"
  }
 },
 "censof": {
  "id": "censof",
  "name": "Censof Holdings Berhad",
  "sector": "Technology · financial & enterprise software",
  "raw": {
   "revenue": [101183, 101261],
   "cogs": [-62964, -64611],
   "grossProfit": [38219, 36650],
   "ebitda": [null, null],
   "opProfit": [null, null],
   "pbt": [7730, 7555],
   "pat": [3726, 5113],
   "cash": [28815, 29689],
   "ocf": [7147, 5780],
   "totalAssets": [137021, 132696],
   "totalLiab": [31543, 29321],
   "totalDebt": [1154, 1274],
   "totalEquity": [105478, 103375],
   "employees": [476, 445],
   "dividends": [0, 0]
  },
  "derived": {
   "revGrowth": [-0.1, null],
   "grossMargin": [37.8, 36.2],
   "netMargin": [3.7, 5.0],
   "roe": [2.6, 4.4],
   "roa": [2.7, 3.9],
   "debtEquity": [0.011, 0.012]
  },
  "qual": {
   "ownership": "As at 30 June 2025 there were 7,458 shareholders over 552,281,576 ordinary shares. Largest shareholder is SAAS Global Sdn Bhd with 31.86%, the vehicle through which executive directors Ameer Bin Shaik Mydin, Tamil Selvan A/L M. Durairaj and Ang Hsin Hsien are deemed interested. Other substantial holders: Tan Chean Suan (14.26%) and Tan Sri Dato' Mohd Ibrahim Bin Mohd Zain (6.53% direct). The four holders above 5% hold 47.72% collectively.",
   "remuneration": "FY2025 director remuneration (Group): Ameer RM744k, Tamil Selvan RM838k, Ang RM599k (executives); independent non-executives Mohd Shukor RM129k, Mahathir RM112k, Mohd Redzuan RM110k — total ~RM2.53m. Top senior management disclosed only in RM50k bands.",
   "audit": "Unqualified opinion — true and fair view under MFRS/IFRS and the Companies Act 2016. Auditor: Crowe Malaysia PLT (AF 1018), report dated 30 July 2025. Key audit matter: revenue recognition from contracts with customers (~RM24.38m accrued).",
   "moat": "Moderate moat anchored in entrenched, SAGA-certified government financial-management systems with high switching costs and recurring maintenance/licence income, plus national-scale digital infrastructure contracts (iPayment, i-SPKP). The commercial moat (ABSS accounting software) is shallower.",
   "market": "Niche leader in Malaysian public-sector financial-management software, organised into four divisions: FMS-Government (~RM61.84m, largest), FMS-Commercial & SME / ABSS (~RM22.22m), Digital Technology (~RM17.67m) and Wealth Management Solutions (~RM10.73m).",
   "tam": "TAM not quantified. Demand drivers: government digitalisation, mandatory e-invoicing rollout (favouring ABSS/Financio), SME cloud-ERP adoption, and AI/automation expansion.",
   "viability": "Viable and self-funding: consistently profitable (PBT RM7.73m, +2.2% YoY), strongly cash-generative (OCF RM7.15m), and effectively debt-free (gearing ~0.011x) with RM28.82m cash. The constraint is growth, not solvency.",
   "risks": "Revenue stagnation and dependence on government contract renewals/timing; PAT fell ~27% YoY on a higher tax charge; sizeable deferred tax assets (RM29.8m) and goodwill; meaningful minority interests dilute owner earnings; no dividend declared for FY2025."
  },
  "assess": {
   "financialQuality": "Adequate. Clean (unqualified) Crowe Malaysia audit, ~38% gross margin and positive operating cash flow, but a thin ~3.7% net margin and a ~27% YoY drop in PAT (driven by a jump in income-tax expense to RM4.0m) temper quality.",
   "growthProfile": "Modest / mature. Revenue essentially flat (RM101.18m vs RM101.26m) with PBT up only 2.2%. Growth hinges on new public-sector wins (e.g. RM14.6m PDC contract) and DT/e-invoicing tailwinds.",
   "balanceSheet": "Exceptionally strong. Equity RM105.5m against just RM31.5m total liabilities; total borrowings of only RM1.15m versus RM28.8m cash; negligible gearing of ~0.011x.",
   "redFlags": "PAT decline despite higher PBT; flat top line and heavy government-contract dependence; large deferred tax assets and goodwill; NCI absorbs a notable share of profit (owners' PAT only RM2.68m); FY2025 dividend omitted."
  }
 },
 "inari": {
  "id": "inari",
  "name": "Inari Amertron Berhad",
  "sector": "Technology · semiconductor (OSAT/RF)",
  "raw": {
   "revenue": [1351937, 1478749],
   "cogs": [-1058973, -1155046],
   "grossProfit": [292964, 323703],
   "ebitda": [360156, 435108],
   "opProfit": [154508, 245485],
   "pbt": [220323, 310057],
   "pat": [213147, 300062],
   "cash": [2141413, 2260719],
   "ocf": [331221, 516296],
   "totalAssets": [3401108, 3554114],
   "totalLiab": [310726, 379931],
   "totalDebt": [14682, 16699],
   "totalEquity": [3090382, 3174183],
   "employees": [null, null],
   "dividends": [238266, 292084]
  },
  "derived": {
   "revGrowth": [-8.58, 9.19],
   "grossMargin": [21.67, 21.89],
   "netMargin": [15.77, 20.29],
   "roe": [6.90, 9.45],
   "roa": [6.27, 8.44],
   "debtEquity": [0.00, 0.01]
  },
  "qual": {
   "ownership": "Share base is large and partly institutional. The Insas group is the dominant control bloc: Insas Berhad 13.41% (deemed), Insas Technology Berhad 10.95% (10.42% direct + 0.53% deemed), and Dato' Sri Thong Kok Khee ~13.50% (0.05% direct + 13.45% deemed via Insas/family). EPF holds 13.45% direct and KWAP ~10.12%. Total shares in issue 3,789,014,099 as at 25 Sep 2025.",
   "remuneration": "Total Directors' remuneration FY2025 was RM8.786m at Group level (Executive Directors RM7.750m, Non-Executive Directors RM1.036m). Highest-paid Executive Director in the RM1.30–1.35m band. NEDs paid fees plus allowances only.",
   "audit": "Unqualified (clean) opinion. Auditor: Grant Thornton Malaysia PLT (AF 0737), report dated 25 September 2025. Key audit matter: revenue recognition. FY2025 statutory audit fees RM332k (Group).",
   "moat": "Moderate. A long-qualified OSAT partner providing RF chip assembly and test for a marquee US semiconductor customer; capital intensity and customer-specific qualification create switching friction, but heavy reliance on one flagship customer limits the moat's durability.",
   "market": "Niche but leading — one of Malaysia's premier OSAT specialists in radio-frequency (RF), optoelectronics and photonics packaging, with manufacturing in Malaysia, the Philippines and China.",
   "tam": "Operates in the OSAT market driven by RF content growth in smartphones, AI/datacentre optical connectivity, and supply-chain diversification into Southeast Asia. TAM not quantified.",
   "viability": "Strongly viable: consistently profitable, RM2.14bn cash, zero borrowings, and a long dividend track record — though FY2025 earnings fell sharply on the semiconductor down-cycle.",
   "risks": "Customer and product-cycle concentration; cyclical demand (FY2025 revenue -8.6%, PAT -29%); very high dividend payout (~98%); FX/translation exposure (RM126.7m FX translation loss in OCI for FY2025); concentration of ownership/control in the Insas group."
  },
  "assess": {
   "financialQuality": "Strong. Clean audit opinion, strong cash generation (OCF RM331m > PAT RM213m), and a fortress balance sheet. The main blemish is the cyclical FY2025 decline in revenue and profit, and an aggressive ~98% dividend payout.",
   "growthProfile": "Modest / mature and cyclical. Revenue and PAT have declined for two consecutive years off the FY2022 peak (revenue RM1.55bn, PAT RM391m), reflecting the semiconductor cycle and single-customer dependence.",
   "balanceSheet": "Exceptionally strong. RM2.14bn cash, zero financial borrowings (only RM14.7m lease liabilities), equity RM3.09bn against total liabilities of just RM0.31bn — a deep net-cash position.",
   "redFlags": "Customer concentration, cyclical earnings volatility, near-100% dividend payout reducing reinvestment buffer, concentrated Insas-group control, and meaningful FX exposure (RM126.7m translation loss in OCI)."
  }
 },
 "infomina": {
  "id": "infomina",
  "name": "Infomina Berhad",
  "sector": "Technology · IT infrastructure",
  "raw": {
   "revenue": [196682, 225160],
   "cogs": [-137086, -160799],
   "grossProfit": [59597, 64361],
   "ebitda": [28930, 43500],
   "opProfit": [26793, 41619],
   "pbt": [27016, 41983],
   "pat": [21142, 33051],
   "cash": [94702, 70038],
   "ocf": [48128, -8464],
   "totalAssets": [281916, 262588],
   "totalLiab": [130132, 119622],
   "totalDebt": [3067, 6088],
   "totalEquity": [151784, 142966],
   "employees": [null, null],
   "dividends": [7218, 3]
  },
  "derived": {
   "revGrowth": [-12.6, -10.4],
   "grossMargin": [30.3, 28.6],
   "netMargin": [10.7, 14.7],
   "roe": [13.9, 23.1],
   "roa": [7.5, 12.6],
   "debtEquity": [0.02, 0.04]
  },
  "qual": {
   "ownership": "Controlled by Infomina Holdings Sdn Bhd (55.42%, 333,180,900 shares). Founder/CEO Yee Chee Meng holds a further 6.58% directly plus the deemed interest via Infomina Holdings; Executive Directors Mohd Hoshairy Bin Alias and Nasimah Binti Mohd Zain also share that indirect interest. Other substantial direct holders: Lim Leong Ping @ Raymond Lim (5.94%) and Tan Siang Pin (5.17%). Total 601,250,000 shares; 1,412 shareholders as at 28 Aug 2025.",
   "remuneration": "FY2025 total directors' remuneration RM3,691,000 (Group). Yee Chee Meng total RM1,666k; INEDs receive fees RM52k–72k each plus allowances. Key Senior Management total RM1,943,504 (individual amounts not disclosed on competitive grounds).",
   "audit": "Unqualified (clean) opinion — true and fair view per MFRS/IFRS and Companies Act 2016. Auditor: Baker Tilly Monteiro Heng PLT, report dated 18 September 2025. Key audit matters: trade receivables / expected credit losses (long-outstanding balances) and revenue recognition.",
   "moat": "Specialist position in the mainframe / IBM-Z infrastructure niche with award-winning OEM partnerships (IBM zStack Growth Partner, Broadcom Mainframe Partner of the Year 2021-2024, Hitachi Vantara). Switching costs and recurring maintenance contracts with banks/insurers underpin the high-margin Renewal segment.",
   "market": "Niche specialist serving 90+ active customers (~65% mainframe). Revenue dominated by the recurring Renewal segment (86.9%, RM170.9m) over project-based Turnkey (13.1%, RM25.8m). Financial-services institutions are 63.8% of revenue, government 28.2%; overseas markets 69% (Thailand, Hong Kong, Japan).",
   "tam": "TAM not quantified. Drivers: financial-sector digitisation, rising compute needs, regional banking expansion. Orderbook RM289.0m (82% Renewal) and tenderbook >RM839.0m as at 31 May 2025.",
   "viability": "Strong and self-funding: net-cash balance sheet (RM94.7m cash vs RM3.1m borrowings), operating cash flow recovered to RM48.1m, and a sizeable orderbook/tenderbook provide forward visibility despite two years of revenue decline.",
   "risks": "Concentration in the financial-services Renewal segment; revenue declining for two consecutive years off the FY2023 peak; a RM10.04m impairment against a single Philippine customer (Bank of the Philippine Islands) with related litigation (~RM133m claim) filed Aug 2025; long-outstanding trade receivables (audit KAM); FX exposure (69% overseas revenue)."
  },
  "assess": {
   "financialQuality": "Strong. High-quality earnings backed by a clean audit and strong cash conversion — OCF of RM48.1m exceeds PAT of RM21.1m. Net margin held at 10.7% even after a RM10.04m one-off impairment and RM3.1m FX losses.",
   "growthProfile": "Modest / mature. After a 17% five-year revenue CAGR to a FY2023 peak (RM251m), revenue fell 10.4% in FY2024 and a further 12.6% in FY2025 to RM196.7m, driven by weaker Turnkey project delivery. Renewal gross profit still grew 9.4%.",
   "balanceSheet": "Exceptionally strong. Net cash of ~RM91.6m, net gearing under 0.1x, equity up to RM151.8m. Minimal borrowings (RM3.1m); no final dividend declared for FY2025, conserving capital.",
   "redFlags": "The BPI receivable impairment and ensuing litigation is the standout — both a credit-loss event and an open legal exposure. Long-outstanding trade receivables were a key audit matter. Two consecutive years of revenue decline and high segment/customer concentration warrant monitoring."
  }
 },
 "innolytic": {
  "id": "innolytic",
  "name": "Innolytic Technologies Sdn. Bhd.",
  "sector": "Technology · IT services",
  "raw": {
   "revenue": [534, null],
   "cogs": [null, null],
   "grossProfit": [null, null],
   "ebitda": [null, null],
   "opProfit": [null, null],
   "pbt": [44, null],
   "pat": [36, null],
   "cash": [null, null],
   "ocf": [null, null],
   "totalAssets": [124, null],
   "totalLiab": [30, null],
   "totalDebt": [null, null],
   "totalEquity": [94, null],
   "employees": [null, null],
   "dividends": [0, null]
  },
  "derived": {
   "revGrowth": [null, null],
   "grossMargin": [null, null],
   "netMargin": [6.8, null],
   "roe": [38.5, null],
   "roa": [29.2, null],
   "debtEquity": [null, null]
  },
  "qual": {
   "ownership": "100% owned by Ng Choong Chong, who is also the sole director — 10,000 ordinary shares issued, all paid in cash. Single-shareholder, single-director owner-operator structure. Company secretary is Chua Wei Hsiung.",
   "remuneration": "Not disclosed in the SSM filing.",
   "audit": "Unqualified audit report for FYE 30-06-2025 (non-consolidated). Auditor: Skrastin Lim (AF0992). Accounts tabled 31-12-2025; not an exempt private company.",
   "moat": "Minimal — small service firm with no registered IP, charges or disclosed contracts; competitive advantage rests on the owner's relationships and skills.",
   "market": "Niche player in Malaysian IT services (facilities management, programming, consultancy); no market-position data in the filing.",
   "tam": "Malaysian SME IT-services market is sizeable and growing on digitalisation, but the filing quantifies nothing.",
   "viability": "Profitable, debt-free and cash-generative on a small base; viable but scale- and key-person-constrained.",
   "risks": "Concentration risk — one person is both sole owner and sole director; asset base entirely current (no fixed assets); very small scale; only a single year of audited data."
  },
  "assess": {
   "financialQuality": "Adequate. Clean and profitable for its size: revenue RM534k, PBT RM44k, PAT RM36k (net margin ~6.8%), no debt, unqualified audit. Absolute scale is tiny.",
   "growthProfile": "Indeterminable — the filing provides only FYE 30-06-2025 figures with no prior-year comparatives, so no growth trend can be derived.",
   "balanceSheet": "Strong for its size: total assets RM124k (all current), liabilities RM30k (all current), equity RM94k, zero debt; current ratio ~4.2x.",
   "redFlags": "Concentration risk — one person is both sole owner and sole director. Asset base is entirely current (no fixed assets). Very small scale and only a single year of audited data limit due-diligence confidence."
  }
 },
 "mhnexus": {
  "id": "mhnexus",
  "name": "MHNexus Sdn. Bhd.",
  "sector": "Technology · software trading & development",
  "raw": {
   "revenue": [null, null],
   "cogs": [null, null],
   "grossProfit": [null, null],
   "ebitda": [null, null],
   "opProfit": [null, null],
   "pbt": [null, null],
   "pat": [null, null],
   "cash": [null, null],
   "ocf": [null, null],
   "totalAssets": [null, null],
   "totalLiab": [null, null],
   "totalDebt": [null, null],
   "totalEquity": [null, null],
   "employees": [null, null],
   "dividends": [null, null]
  },
  "derived": {
   "revGrowth": [null, null],
   "grossMargin": [null, null],
   "netMargin": [null, null],
   "roe": [null, null],
   "roa": [null, null],
   "debtEquity": [null, null]
  },
  "qual": {
   "ownership": "Wholly owned by a single individual, Dr Mohamad Azrin Bin Zubir, holding 500,000 shares (100%). He is also the sole director (appointed 02-05-2024) — an owner-managed company. Total issued capital RM3,600,354 across 500,000 ordinary shares (477,503 paid in cash + 22,497 otherwise than cash).",
   "remuneration": "Not disclosed in the SSM profile.",
   "audit": "Auditor: Crowe Malaysia PLT (AF1018). No audited accounts available — an Exempt Private Company certificate was lodged (as at 31-12-2024), so financial statements are not on public record.",
   "moat": "Cannot be assessed; no commercial, customer or competitive information in the filing.",
   "market": "Nature of business is trading of software and software development. No market position or segment financials disclosed.",
   "tam": "Not quantified; addressable market not derivable from the profile.",
   "viability": "Unverifiable — no financial data filed; the EPC certificate route means no accounts are available to judge solvency or profitability.",
   "risks": "An unsatisfied (open) charge to Maybank Islamic Berhad created 15-05-2023 indicating outstanding secured borrowing of an undisclosed amount; absence of public accounts limiting transparency; concentration risk from a single owner-director."
  },
  "assess": {
   "financialQuality": "Unverifiable. No income-statement or balance-sheet figures are disclosed; SSM returned all items NIL because an Exempt Private Company certificate was lodged rather than full accounts.",
   "growthProfile": "Indeterminable. With no revenue or earnings figures for any period, growth cannot be measured.",
   "balanceSheet": "Unverifiable. All balance-sheet items are NIL in the filing. The presence of an unsatisfied charge to Maybank Islamic Berhad implies secured debt, but the amount is not stated (recorded as 'Open Charge').",
   "redFlags": "Open/unsatisfied charge with Maybank Islamic Berhad (15-05-2023); no public accounts (Exempt Private Company); sole-owner/sole-director concentration."
  }
 },
 "capital_a": {
  "id": "capital_a",
  "name": "Capital A Berhad",
  "sector": "Consumer · aviation & travel services",
  "adjust": {"profitDistorted": true, "note": "FY2025 headline profit is dominated by a ~RM11.3bn one-off gain on the aviation divestment — net margin / ROA are not representative of operations; continuing-ops EBITDA was ~RM108m."},
  "raw": {
   "revenue": [18391569, 20324772],
   "cogs": [null, null],
   "grossProfit": [null, null],
   "ebitda": [11439991, 2683709],
   "opProfit": [10711041, -689699],
   "pbt": [13444654, -391093],
   "pat": [13433736, -460468],
   "cash": [432612, 431185],
   "ocf": [5667083, 3823594],
   "totalAssets": [7567895, 30736147],
   "totalLiab": [6646655, 40751114],
   "totalDebt": [1281667, 1475684],
   "totalEquity": [921240, -10014967],
   "employees": [20555, 21851],
   "dividends": [0, 0]
  },
  "derived": {
   "revGrowth": [-9.5, null],
   "grossMargin": [null, null],
   "netMargin": [73.0, -2.3],
   "roe": [null, null],
   "roa": [177.5, -1.5],
   "debtEquity": [1.39, null]
  },
  "qual": {
   "ownership": "Founder-controlled. Co-founders Tan Sri Anthony Francis Fernandes (~22.94% deemed) and Datuk Kamarudin Bin Meranun (~23.03%) hold their stakes chiefly via Tune Air Sdn. Bhd. (11.55%) and Tune Live Sdn. Bhd. (11.39%). Positive Boom Limited holds 7.44%. Institutional names in the top-30 (ASB, Urusharta Jamaah, icapital.biz) are each small. Total issued shares 4,470,480,489.",
   "remuneration": "Executive directors are highly paid: FY2025 Group total remuneration RM54.93m for Fernandes (incl. RM37.5m bonus) and RM52.54m for Kamarudin (incl. RM35.5m bonus). Non-executive directors received only fees+allowances of RM442k–RM577k each. Top-5 senior management not disclosed on a named basis (departure from MCCG, citing talent-poaching risk).",
   "audit": "Unqualified (clean) opinion from BDO PLT, dated 10 April 2026 — true and fair view under MFRS/IFRS. Notably NO 'Material Uncertainty Related to Going Concern' paragraph and no emphasis of matter, despite the company remaining a PN17 issuer pending formal Bursa upliftment. Key audit matter: impairment of CGUs. A post-filing Errata (30 Apr 2026) corrected the borrowings, segmental and net-gearing notes.",
   "moat": "Moderate, asset-light moat anchored on the AirAsia brand (licensed for royalty income after the airline divestment), Asia Digital Engineering's MRO capacity (Malaysia's largest hangar), Teleport's regional air-cargo network, and the AirAsia rewards / BigPay digital ecosystem. Founder entrenchment adds continuity but also key-person risk.",
   "market": "Following the 3 Dec 2025 divestment of the airline operations, Capital A is repositioned as a diversified non-aviation travel-technology and logistics group — logistics (Teleport), MRO (ADE), fintech (BigPay), food (Santan) and brand licensing (AirAsia Next). It is no longer an airline operator.",
   "tam": "Exposed to SE Asian air travel, e-commerce logistics, aircraft MRO and digital payments — all structurally growing, but no TAM quantified.",
   "viability": "Mixed. The PN17 regularisation restored positive equity and reduced debt, and operating cash flow was strong, but FY2025 earnings are dominated by a one-off divestment gain and underlying continuing-operations EBITDA is only ~RM108m. Sustained viability depends on the non-aviation segments scaling profitably while Bursa upliftment is finalised.",
   "risks": "PN17 status (pending upliftment); profitability dependent on a non-recurring ~RM11.3bn divestment gain; thin equity built via capital reduction with RM5.3bn accumulated losses remaining; high founder ownership concentration; very high executive remuneration (two executives took ~RM107m combined); a post-filing errata indicating disclosure-control weaknesses."
  },
  "assess": {
   "financialQuality": "Mixed. The headline FY2025 profit of RM13.4bn is overwhelmingly a one-off ~RM11.3bn gain from divesting the aviation business; strip it out and the continuing group generated only ~RM108m EBITDA on RM1.87bn revenue. The audit opinion is clean (BDO PLT) and operating cash flow looks large (RM5.67bn) but is mostly attributable to the now-divested airlines.",
   "growthProfile": "Indeterminable on a like-for-like basis. Total reported revenue fell ~9.5% (RM20.3bn → RM18.4bn) but spans pre-divestment aviation. Continuing-operations revenue grew ~9.2% (RM1,709.7m → RM1,866.9m). Future growth hinges on Teleport, ADE and BigPay scaling without airline earnings.",
   "balanceSheet": "Improving but still stretched. Equity swung from -RM10.0bn to +RM0.92bn and debt fell to RM1.28bn, but the improvement was engineered via capital reductions rather than retained earnings; accumulated losses remain -RM5.32bn. Net gearing 1.25x; cash of RM432.6m is below total borrowings of RM1.28bn.",
   "redFlags": "PN17 issuer; earnings reliant on a non-recurring gain; equity restored only by capital reduction; large accumulated losses persist; post-filing errata correcting borrowings and segment notes; very high founder ownership and executive remuneration concentration. NOTE: the net-margin/ROA radar values are distorted by the one-off gain — read on a continuing-operations basis."
  }
 }
};
