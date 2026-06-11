// Supabase Configuration (Optional: Fill these to enable database sync across devices)
const SUPABASE_URL = "https://qrnjkhvcifeqewihqcta.supabase.co"; 
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFybmpraHZjaWZlcWV3aWhxY3RhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODExOTI3MzAsImV4cCI6MjA5Njc2ODczMH0.EYhoHxVfMm8hcVDbmoD_ogFuYiUCfYYWvXBJMGYO0Tc"; 

// World Cup 2026 ISO Codes Mapping
const COUNTRY_CODES = {
    "México": "mx", "Sudáfrica": "za", "Corea del Sur": "kr", "República Checa": "cz",
    "Canadá": "ca", "Bosnia y Herzegovina": "ba", "Bosnia y Her.": "ba",
    "Estados Unidos": "us", "EE. UU.": "us", "Paraguay": "py",
    "Qatar": "qa", "Suiza": "ch", "Brasil": "br", "Marruecos": "ma", "Haití": "ht",
    "Escocia": "gb-sct", "Australia": "au", "Turquía": "tr", "Alemania": "de", "Curazao": "cw",
    "Países Bajos": "nl", "Japón": "jp", "Costa de Marfil": "ci", "Ecuador": "ec",
    "Suecia": "se", "Túnez": "tn", "España": "es", "Cabo Verde": "cv", "Bélgica": "be",
    "Egipto": "eg", "Arabia Saudita": "sa", "Uruguay": "uy", "Irán": "ir", "Nueva Zelanda": "nz",
    "Francia": "fr", "Senegal": "sn", "Irak": "iq", "Noruega": "no", "Argentina": "ar",
    "Argelia": "dz", "Austria": "at", "Jordania": "jo", "Portugal": "pt", "RD de Congo": "cd",
    "Inglaterra": "gb-eng", "Croacia": "hr", "Ghana": "gh", "Panamá": "pa", "Uzbekistán": "uz",
    "Colombia": "co"
};

// Full list of 104 Matches of the World Cup 2026
const WC_104_MATCHES = [
    "México vs. Sudáfrica (Grupo A)",
    "Corea del Sur vs. República Checa (Grupo A)",
    "Canadá vs. Bosnia y Herzegovina (Grupo B)",
    "Estados Unidos vs. Paraguay (Grupo D)",
    "Qatar vs. Suiza (Grupo B)",
    "Brasil vs. Marruecos (Grupo C)",
    "Haití vs. Escocia (Grupo C)",
    "Australia vs. Turquía (Grupo D)",
    "Alemania vs. Curazao (Grupo E)",
    "Países Bajos vs. Japón (Grupo F)",
    "Costa de Marfil vs. Ecuador (Grupo E)",
    "Suecia vs. Túnez (Grupo F)",
    "España vs. Cabo Verde (Grupo H)",
    "Bélgica vs. Egipto (Grupo G)",
    "Arabia Saudita vs. Uruguay (Grupo H)",
    "Irán vs. Nueva Zelanda (Grupo G)",
    "Francia vs. Senegal (Grupo I)",
    "Irak vs. Noruega (Grupo I)",
    "Argentina vs. Argelia (Grupo J)",
    "Austria vs. Jordania (Grupo J)",
    "Portugal vs. RD de Congo (Grupo K)",
    "Inglaterra vs. Croacia (Grupo L)",
    "Ghana vs. Panamá (Grupo L)",
    "Uzbekistán vs. Colombia (Grupo K)",
    "República Checa vs. Sudáfrica (Grupo A)",
    "Suiza vs. Bosnia y Herzegovina (Grupo B)",
    "Canadá vs. Qatar (Grupo B)",
    "México vs. Corea del Sur (Grupo A)",
    "Estados Unidos vs. Australia (Grupo D)",
    "Escocia vs. Marruecos (Grupo C)",
    "Brasil vs. Haití (Grupo C)",
    "Turquía vs. Paraguay (Grupo D)",
    "Países Bajos vs. Suecia (Grupo F)",
    "Alemania vs. Costa de Marfil (Grupo E)",
    "Ecuador vs. Curazao (Grupo E)",
    "Túnez vs. Japón (Grupo F)",
    "España vs. Arabia Saudita (Grupo H)",
    "Bélgica vs. Irán (Grupo G)",
    "Uruguay vs. Cabo Verde (Grupo H)",
    "Nueva Zelanda vs. Egipto (Grupo G)",
    "Argentina vs. Austria (Grupo J)",
    "Francia vs. Irak (Grupo I)",
    "Noruega vs. Senegal (Grupo I)",
    "Jordania vs. Argelia (Grupo J)",
    "Portugal vs. Uzbekistán (Grupo K)",
    "Inglaterra vs. Ghana (Grupo L)",
    "Panamá vs. Croacia (Grupo L)",
    "Colombia vs. RD de Congo (Grupo K)",
    "Suiza vs. Canadá (Grupo B)",
    "Bosnia y Herzegovina vs. Qatar (Grupo B)",
    "Marruecos vs. Haití (Grupo C)",
    "Brasil vs. Escocia (Grupo C)",
    "Sudáfrica vs. Corea del Sur (Grupo A)",
    "República Checa vs. México (Grupo A)",
    "Curazao vs. Costa de Marfil (Grupo E)",
    "Ecuador vs. Alemania (Grupo E)",
    "Japón vs. Suecia (Grupo F)",
    "Túnez vs. Países Bajos (Grupo F)",
    "Paraguay vs. Australia (Grupo D)",
    "Turquía vs. Estados Unidos (Grupo D)",
    "Noruega vs. Francia (Grupo I)",
    "Senegal vs. Irak (Grupo I)",
    "Cabo Verde vs. Arabia Saudita (Grupo H)",
    "Uruguay vs. España (Grupo H)",
    "Egipto vs. Irán (Grupo G)",
    "Nueva Zelanda vs. Bélgica (Grupo G)",
    "Croacia vs. Ghana (Grupo L)",
    "Panamá vs. Inglaterra (Grupo L)",
    "Colombia vs. Portugal (Grupo K)",
    "RD de Congo vs. Uzbekistán (Grupo K)",
    "Argelia vs. Austria (Grupo J)",
    "Jordania vs. Argentina (Grupo J)",
    "16avos de Final: P73 - 2º Grupo A vs. 2º Grupo B",
    "16avos de Final: P76 - 1º Grupo E vs. 2º Grupo F",
    "16avos de Final: P74 - 1º Grupo E vs. 3º Grupo A/B/C/D/F",
    "16avos de Final: P75 - 1º Grupo F vs. 2º Grupo C",
    "16avos de Final: P78 - 2º Grupo E vs. 2º Grupo I",
    "16avos de Final: P77 - 1º Grupo I vs. 3º Grupo C/D/F/G/H",
    "16avos de Final: P79 - 1º Grupo A vs. 3º Grupo C/E/F/H/I",
    "16avos de Final: P80 - 1º Grupo L vs. 3º Grupo E/H/I/J/K",
    "16avos de Final: P82 - 1º Grupo G vs. 3º Grupo A/E/H/I/J",
    "16avos de Final: P81 - 1º Grupo D vs. 3º Grupo B/E/F/I/J",
    "16avos de Final: P84 - 1º Grupo H vs. 2º Grupo J",
    "16avos de Final: P83 - 2º Grupo K vs. 2º Grupo L",
    "16avos de Final: P85 - 1º Grupo B vs. 3º Grupo E/F/G/I/J",
    "16avos de Final: P88 - 2º Grupo D vs. 2º Grupo G",
    "16avos de Final: P86 - 1º Grupo J vs. 2º Grupo H",
    "16avos de Final: P87 - 1º Grupo K vs. 3º D/E/I/J/L",
    "Octavos de Final: P90 - Ganador P73 vs. Ganador P75",
    "Octavos de Final: P89 - Ganador P74 vs. Ganador P77",
    "Octavos de Final: P91 - Ganador P76 vs. Ganador P78",
    "Octavos de Final: P92 - Ganador P79 vs. Ganador P80",
    "Octavos de Final: P93 - Ganador P83 vs. Ganador P84",
    "Octavos de Final: P94 - Ganador P81 vs. Ganador P82",
    "Octavos de Final: P95 - Ganador P86 vs. Ganador P88",
    "Octavos de Final: P96 - Ganador P85 vs. Ganador P87",
    "Cuartos de Final: P97 - Ganador P89 vs. Ganador P90",
    "Cuartos de Final: P98 - Ganador P93 vs. Ganador P94",
    "Cuartos de Final: P99 - Ganador P91 vs. Ganador P92",
    "Cuartos de Final: P100 - Ganador P95 vs. Ganador P96",
    "Semifinal: P101 - Ganador P97 vs. Ganador P98",
    "Semifinal: P102 - Ganador P99 vs. Ganador P100",
    "Tercer Puesto: P103 - Perdedor P101 vs. Perdedor P102",
    "Final: P104 - Ganador P101 vs. Ganador P102"
];

// Helper to get FlagCDN Image URL
function getFlagImgHtml(countryName) {
    const cleanName = countryName.trim();
    const code = COUNTRY_CODES[cleanName];
    if (code) {
        return `<img src="https://flagcdn.com/28x21/${code}.png" class="flag-img" alt="${cleanName}" style="width: 20px; height: 15px; border-radius: 2px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); vertical-align: middle; margin-right: 6px;">`;
    }
    return "";
}

// Cleans legacy data strings
function sanitizeMatchString(str) {
    let clean = str;
    Object.keys(COUNTRY_CODES).forEach(name => {
        const codePrefix = new RegExp(`^[A-Z]{2}\\s+(${name})`, 'g');
        clean = clean.replace(codePrefix, '$1');
        const codeMid = new RegExp(`vs\\.?\\s+[A-Z]{2}\\s+(${name})`, 'g');
        clean = clean.replace(codeMid, 'vs. $1');
    });
    return clean;
}

// Generate match display HTML with images
function formatMatchDisplayHTML(matchName) {
    const sanitized = sanitizeMatchString(matchName);
    let delimiter = " vs. ";
    if (sanitized.includes(" vs ")) delimiter = " vs ";
    else if (sanitized.includes(" v. ")) delimiter = " v. ";
    else if (sanitized.includes(" v ")) delimiter = " v ";

    const parts = sanitized.split(delimiter);
    if (parts.length === 2) {
        let team1 = parts[0].trim();
        let team2 = parts[1].trim();

        let prefix = "";
        if (team1.includes(":")) {
            const idx = team1.indexOf(":");
            prefix = `<span style="color: var(--text-muted); font-size: 0.8rem; font-weight:500;">${team1.slice(0, idx + 1)} </span>`;
            team1 = team1.slice(idx + 1).trim();
            if (team1.includes("-")) {
                const hyphenIdx = team1.indexOf("-");
                prefix += `<span style="color: var(--primary); font-size: 0.8rem; font-weight:600;">${team1.slice(0, hyphenIdx + 1)} </span>`;
                team1 = team1.slice(hyphenIdx + 1).trim();
            }
        }

        let suffix = "";
        const groupMatch = team2.match(/\((Grupo [A-L])\)/i);
        if (groupMatch) {
            suffix = ` <span style="color: var(--text-muted); font-size: 0.8rem;">${groupMatch[0]}</span>`;
            team2 = team2.replace(/\((Grupo [A-L])\)/i, "").trim();
        }

        const flag1 = getFlagImgHtml(team1);
        const flag2 = getFlagImgHtml(team2);

        return `<div class="match-name-container">
            ${prefix}
            ${flag1}
            <span class="team-name" style="font-weight: 500;">${team1}</span>
            <span class="vs-text" style="color: var(--text-muted); margin: 0 6px; font-weight:600; font-size: 0.85rem;">vs</span>
            ${flag2}
            <span class="team-name" style="font-weight: 500;">${team2}</span>
            ${suffix}
        </div>`;
    }
    return `<span style="font-weight: 500;">${sanitized}</span>`;
}

// Map the list of 104 matches into dynamic steps
const WC_FULL_STEPS = WC_104_MATCHES.map((matchStr) => ({
    match: matchStr,
    oddsObj: 1.10,
    oddsReal: 1.10,
    status: 'pending'
}));

// Multi-User Routing Config
const VALID_USERS = ["dario", "julieta", "fausto", "cuervo", "primazo!"];
let currentUser = "";

// Parse user path using hashes (#dario, #fausto, etc.) for client-side routing (works on any host)
function detectUser() {
    const hash = decodeURIComponent(window.location.hash.toLowerCase().replace('#', ''));
    if (VALID_USERS.includes(hash)) {
        currentUser = hash;
        // Update Title in Header
        const userTitle = currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
        const titleEl = document.getElementById('app-title');
        if (titleEl) {
            titleEl.textContent = `Dale ${userTitle}`;
        }
        document.title = `Dale ${userTitle} - Reto Escalera`;
        
        // Hide user selector overlay if open
        const overlay = document.getElementById('user-selector-overlay');
        if (overlay) overlay.remove();
    } else {
        // Show user selection overlay
        showUserSelectionOverlay();
    }
}

function showUserSelectionOverlay() {
    // Check if selector overlay already exists
    if (document.getElementById('user-selector-overlay')) return;

    const div = document.createElement('div');
    div.id = 'user-selector-overlay';
    div.style.cssText = `
        position: fixed; z-index: 10000; left: 0; top: 0; width: 100%; height: 100%;
        background-color: rgba(10, 11, 16, 0.95); backdrop-filter: blur(15px);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        color: var(--text-primary); text-align: center; padding: 2rem;
    `;
    
    div.innerHTML = `
        <h1 style="font-size: 2.2rem; font-weight:800; margin-bottom: 0.5rem; background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🪜 El elefante se come en fetas</h1>
        <p style="color: var(--text-secondary); margin-bottom: 2rem; font-size:1.1rem;">Selecciona tu usuario para acceder a tu planilla:</p>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; width: 100%; max-width: 440px;">
            ${VALID_USERS.map(u => `
                <button class="btn btn-primary btn-user-select" data-user="${u}" style="font-size:1.1rem; padding: 1rem; text-transform: capitalize; border-radius: var(--radius-md); background: rgba(99, 102, 241, 0.15); border: 1px solid var(--border-color); color: var(--text-primary); transition:all 0.2s;">
                    👤 ${u}
                </button>
            `).join('')}
        </div>
    `;

    document.body.appendChild(div);

    // Style button hover manually or bind events
    div.querySelectorAll('.btn-user-select').forEach(btn => {
        btn.addEventListener('mouseover', (e) => {
            e.target.style.background = 'var(--primary)';
            e.target.style.borderColor = 'var(--primary)';
            e.target.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.4)';
        });
        btn.addEventListener('mouseout', (e) => {
            e.target.style.background = 'rgba(99, 102, 241, 0.15)';
            e.target.style.borderColor = 'var(--border-color)';
            e.target.style.boxShadow = 'none';
        });
        btn.addEventListener('click', (e) => {
            const user = e.target.closest('.btn-user-select').dataset.user;
            window.location.hash = user;
        });
    });
}

// Application State
let state = {
    initialBalance: 10000,
    defaultOdds: 1.10,
    steps: []
};

// Modal Selection Tracker
let activeRowIdForCountrySelect = null;
let selectedLocalTeam = null;
let selectedVisitorTeam = null;

// Filter State
let currentFilter = 'active'; // 'active' or 'all'

// DOM Elements
const elements = {
    inputInitialBalance: document.getElementById('input-initial-balance'),
    inputDefaultOdds: document.getElementById('input-default-odds'),
    btnAddStep: document.getElementById('btn-add-step'),
    btnReset: document.getElementById('btn-reset'),
    tbody: document.getElementById('steps-tbody'),
    statInitial: document.getElementById('stat-initial'),
    statCurrent: document.getElementById('stat-current'),
    statProfit: document.getElementById('stat-profit'),
    statRoi: document.getElementById('stat-roi'),
    badgeProgress: document.getElementById('badge-progress'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    
    // New Header/Stats Elements
    badgeProgressHeader: document.getElementById('badge-progress-header'),
    statStepsCount: document.getElementById('stat-steps-count'),
    
    // Collapsible Selectors
    btnToggleConfig: document.getElementById('btn-toggle-config'),
    configCollapsibleContent: document.getElementById('config-collapsible-content'),
    btnToggleHowItWorks: document.getElementById('btn-toggle-how-it-works'),
    howItWorksContent: document.getElementById('how-it-works-content'),
    
    // Filter buttons
    btnFilterActive: document.getElementById('btn-filter-active'),
    btnFilterAll: document.getElementById('btn-filter-all'),
    
    // Search bar for 104 matches
    wcMatchSearch: document.getElementById('wc-match-search'),
    wcSearchResults: document.getElementById('wc-search-results'),
    
    // Modal DOM
    countryModal: document.getElementById('country-modal'),
    closeModal: document.getElementById('close-modal'),
    btnCancelTeams: document.getElementById('btn-cancel-teams'),
    btnConfirmTeams: document.getElementById('btn-confirm-teams'),
    selectedTeam1: document.getElementById('selected-team-1'),
    selectedTeam2: document.getElementById('selected-team-2'),
    countrySearch: document.getElementById('country-search'),
    countriesGrid: document.getElementById('countries-grid')
};

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount).replace('ARS', '$');
}

// Format percent
function formatPercent(value) {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
}

// Load State from LocalStorage or Supabase
async function loadState() {
    if (!currentUser) return;
    
    let loadedState = null;

    // 1. Try Loading from Supabase if configured
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        try {
            const res = await fetch(`${SUPABASE_URL}/rest/v1/ladders?username=eq.${currentUser}`, {
                method: 'GET',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json'
                }
            });
            if (res.ok) {
                const data = await res.json();
                if (data && data.length > 0) {
                    loadedState = {
                        initialBalance: data[0].initial_balance,
                        defaultOdds: data[0].default_odds,
                        steps: data[0].steps
                    };
                }
            }
        } catch (e) {
            console.error('Failed to load from Supabase, falling back to LocalStorage', e);
        }
    }

    // 2. LocalStorage fallback
    if (!loadedState) {
        const savedState = localStorage.getItem(`reto_escalera_${currentUser}`);
        if (savedState) {
            try {
                loadedState = JSON.parse(savedState);
            } catch (e) {
                console.error('Error parsing localStorage state', e);
            }
        }
    }

    // 3. Populate state
    if (loadedState) {
        state = loadedState;
        
        // Clean legacy fields
        state.steps = state.steps.map(step => {
            if (step.odds !== undefined && step.oddsObj === undefined) {
                step.oddsObj = step.odds;
                step.oddsReal = step.odds;
                delete step.odds;
            }
            step.match = sanitizeMatchString(step.match);
            return step;
        });

        elements.inputInitialBalance.value = state.initialBalance;
        elements.inputDefaultOdds.value = state.defaultOdds;
    } else {
        initDefaultState();
    }
}

// Initialize default state
function initDefaultState() {
    state.initialBalance = 10000;
    state.defaultOdds = 1.10;
    
    // Pre-fill with all 104 matches of the tournament
    state.steps = WC_FULL_STEPS.map((step, i) => ({
        id: Date.now() + i,
        ...step
    }));
    
    elements.inputInitialBalance.value = state.initialBalance;
    elements.inputDefaultOdds.value = state.defaultOdds;
}

// Save State to LocalStorage and Supabase
async function saveState() {
    if (!currentUser) return;

    // 1. Save locally first
    localStorage.setItem(`reto_escalera_${currentUser}`, JSON.stringify(state));

    // 2. Sync with Supabase if configured
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
        try {
            // Upsert syntax via REST: using a single POST with Prefer: resolution=merge-duplicates or checking if exists
            const payload = {
                username: currentUser,
                initial_balance: state.initialBalance,
                default_odds: state.defaultOdds,
                steps: state.steps,
                updated_at: new Date().toISOString()
            };
            
            await fetch(`${SUPABASE_URL}/rest/v1/ladders`, {
                method: 'POST',
                headers: {
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
                    'Content-Type': 'application/json',
                    'Prefer': 'resolution=merge-duplicates'
                },
                body: JSON.stringify(payload)
            });
        } catch (e) {
            console.error('Failed to sync to Supabase', e);
        }
    }
}

// Calculate the ladder values
function calculateLadder() {
    let chainBroken = false;
    let currentBalance = state.initialBalance;
    let wonStepsCount = 0;

    state.steps.forEach((step, index) => {
        // --- 1. TARGET CALCULATIONS (Objetivo) ---
        if (index === 0) {
            step.stakeObj = state.initialBalance;
        } else {
            step.stakeObj = state.steps[index - 1].returnObj;
        }
        step.returnObj = step.stakeObj * step.oddsObj;

        // --- 2. ACTUAL CALCULATIONS (Real) ---
        if (index === 0) {
            step.stakeReal = state.initialBalance;
        } else {
            const prevStep = state.steps[index - 1];
            if (chainBroken) {
                step.stakeReal = 0;
            } else if (prevStep.status === 'won') {
                step.stakeReal = prevStep.returnReal;
            } else if (prevStep.status === 'lost') {
                step.stakeReal = 0;
                chainBroken = true;
            } else {
                step.stakeReal = prevStep.returnReal;
            }
        }

        // Return real is stake * odds
        if (chainBroken || step.stakeReal === 0) {
            step.returnReal = 0;
        } else {
            step.returnReal = step.stakeReal * step.oddsReal;
        }

        // Determine current real balance based on resolved status
        if (!chainBroken) {
            if (step.status === 'won') {
                currentBalance = step.returnReal;
                wonStepsCount++;
            } else if (step.status === 'lost') {
                currentBalance = 0;
                chainBroken = true;
            }
        }
    });

    // Update Stats Card UI
    elements.statInitial.textContent = formatCurrency(state.initialBalance);
    elements.statCurrent.textContent = formatCurrency(currentBalance);
    
    const profit = currentBalance - state.initialBalance;
    elements.statProfit.textContent = formatCurrency(profit);
    
    if (profit > 0) {
        elements.statProfit.style.color = 'var(--success)';
    } else if (profit < 0) {
        elements.statProfit.style.color = 'var(--danger)';
    } else {
        elements.statProfit.style.color = 'var(--text-primary)';
    }

    const roi = state.initialBalance > 0 ? (profit / state.initialBalance) * 100 : 0;
    elements.statRoi.textContent = formatPercent(roi);
    if (roi > 0) {
        elements.statRoi.style.color = 'var(--success)';
    } else if (roi < 0) {
        elements.statRoi.style.color = 'var(--danger)';
    } else {
        elements.statRoi.style.color = 'var(--text-primary)';
    }

    // Progress
    const totalSteps = state.steps.length;
    elements.badgeProgress.textContent = `Pasos Ganados: ${wonStepsCount} / ${totalSteps}`;
    if (elements.badgeProgressHeader) {
        elements.badgeProgressHeader.textContent = `${wonStepsCount} / ${totalSteps} pasos completados`;
    }
    if (elements.statStepsCount) {
        elements.statStepsCount.textContent = `${wonStepsCount}/${totalSteps}`;
    }
    const progressPercent = totalSteps > 0 ? (wonStepsCount / totalSteps) * 100 : 0;
    elements.progressBarFill.style.width = `${progressPercent}%`;

    // Dynamic Target Payout Calculation
    if (state.steps.length > 0) {
        const finalStep = state.steps[state.steps.length - 1];
        const targetObjEl = document.getElementById('stat-target-objective');
        if (targetObjEl) {
            targetObjEl.textContent = formatCurrency(finalStep.returnObj);
        }
    }
}

// Render Football horizontal timeline
function renderFootballTimeline() {
    const timelineEl = document.getElementById('football-timeline');
    if (!timelineEl) return;
    timelineEl.innerHTML = '';
    
    let currentActiveIdx = state.steps.findIndex(s => s.status !== 'won');
    if (currentActiveIdx === -1) {
        currentActiveIdx = state.steps.length - 1;
    }
    
    const start = Math.max(0, currentActiveIdx - 2);
    const end = Math.min(state.steps.length - 1, currentActiveIdx + 5);
    
    for (let i = start; i <= end; i++) {
        const step = state.steps[i];
        
        const stepCircle = document.createElement('div');
        stepCircle.className = 'timeline-circle';
        
        let icon = '⚪';
        if (step.status === 'won') {
            stepCircle.classList.add('won');
            icon = '⚽';
        } else if (step.status === 'lost') {
            stepCircle.classList.add('lost');
            icon = '🔴';
        } else if (step.status === 'in_progress') {
            stepCircle.classList.add('in-progress');
            icon = '🔵';
        } else if (i === currentActiveIdx) {
            stepCircle.classList.add('active');
            icon = '🟡';
        } else {
            stepCircle.classList.add('pending');
            icon = '⚪';
        }
        
        stepCircle.innerHTML = `<span class="timeline-icon">${icon}</span><span class="timeline-step-label">Paso ${i + 1}</span>`;
        timelineEl.appendChild(stepCircle);
        
        if (i < end) {
            const connector = document.createElement('div');
            connector.className = 'timeline-connector';
            if (step.status === 'won' && state.steps[i+1].status !== 'pending') {
                connector.classList.add('active');
            }
            timelineEl.appendChild(connector);
        }
    }
}

// Render steps table
function renderTable() {
    elements.tbody.innerHTML = '';
    let chainBroken = false;

    // Find the first index that is NOT won (pending or lost)
    let currentActiveIdx = state.steps.findIndex(s => s.status !== 'won');
    if (currentActiveIdx === -1) {
        currentActiveIdx = state.steps.length - 1;
    }

    state.steps.forEach((step, index) => {
        // Filter logic: show last resolved, current active, and next 3
        if (currentFilter === 'active') {
            const startShow = Math.max(0, currentActiveIdx - 1);
            const endShow = currentActiveIdx + 3;
            if (index < startShow || index > endShow) {
                return;
            }
        }

        const tr = document.createElement('tr');
        
        if (step.status === 'won') {
            tr.className = 'row-won';
        } else if (step.status === 'lost') {
            tr.className = 'row-lost';
            chainBroken = true;
        } else if (chainBroken) {
            tr.className = 'row-broken';
            tr.style.opacity = '0.4';
        }

        let isProjected = false;
        if (index > 0) {
            const prevStep = state.steps[index - 1];
            if (prevStep.status === 'pending') {
                isProjected = true;
            }
        }

        const stakeRealText = isProjected && step.stakeReal > 0
            ? `<span style="color: var(--text-muted); font-style: italic;" title="Proyectado (Paso anterior pendiente)">${formatCurrency(step.stakeReal)}*</span>`
            : formatCurrency(step.stakeReal);

        const returnRealText = isProjected && step.returnReal > 0
            ? `<span style="color: var(--text-muted); font-style: italic;" title="Proyectado">${formatCurrency(step.returnReal)}*</span>`
            : formatCurrency(step.returnReal);

        let statusClass = 'status-pending';
        if (step.status === 'won') statusClass = 'status-won';
        if (step.status === 'lost') statusClass = 'status-lost';
        if (step.status === 'in_progress') statusClass = 'status-in-progress';

        tr.innerHTML = `
            <td class="col-step" style="font-weight: 700;">
                <div class="col-step-header-wrapper">
                    <span class="step-label-mobile">${index + 1}</span>
                    <div class="capital-growth-indicator">
                        <span class="growth-stake">${formatCurrency(step.stakeReal)}</span>
                        <span class="growth-arrow">➔</span>
                        <span class="growth-return">${formatCurrency(step.returnReal)}</span>
                    </div>
                </div>
            </td>
            <td class="col-match">
                <div class="match-cell-container">
                    <div style="flex: 1; display: flex; align-items: center; gap: 0.5rem; background: rgba(0, 0, 0, 0.15); border: 1px solid var(--border-color); border-radius: 4px; padding: 0.4rem 0.6rem;">
                        ${formatMatchDisplayHTML(step.match)}
                    </div>
                    <button class="btn-select-teams" data-id="${step.id}" title="Seleccionar equipos del Mundial 2026">⚽</button>
                </div>
            </td>
            <td class="col-odds-obj">
                <input type="number" class="td-input-odds-obj td-input-odds" value="${step.oddsObj.toFixed(2)}" step="0.01" min="1.01" data-id="${step.id}">
            </td>
            <td class="col-odds-real">
                <input type="number" class="td-input-odds-real td-input-odds" value="${step.oddsReal.toFixed(2)}" step="0.01" min="1.01" data-id="${step.id}">
            </td>
            <td class="col-stake-obj">${formatCurrency(step.stakeObj)}</td>
            <td class="col-return-obj">${formatCurrency(step.returnObj)}</td>
            <td class="col-stake-real">${stakeRealText}</td>
            <td class="col-return-real">${returnRealText}</td>
            <td class="col-status">
                <div class="status-pill ${statusClass}">
                    <select class="status-select" data-id="${step.id}">
                        <option value="pending" ${step.status === 'pending' ? 'selected' : ''}>🟡 Por jugar</option>
                        <option value="in_progress" ${step.status === 'in_progress' ? 'selected' : ''}>🔵 En curso</option>
                        <option value="won" ${step.status === 'won' ? 'selected' : ''}>🟢 Ganado</option>
                        <option value="lost" ${step.status === 'lost' ? 'selected' : ''}>🔴 Perdido</option>
                    </select>
                    <i data-lucide="chevron-down" style="width: 12px; height: 12px; pointer-events: none;"></i>
                </div>
            </td>
            <td class="col-action">
                <button class="btn-delete-row" data-id="${step.id}" title="Eliminar paso">
                    <i data-lucide="trash-2" style="width: 18px; height: 18px;"></i>
                </button>
            </td>
        `;

        elements.tbody.appendChild(tr);
    });

    lucide.createIcons();
    bindDynamicEvents();
}

// Bind events to dynamically created table rows
function bindDynamicEvents() {
    document.querySelectorAll('.btn-select-teams').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            openCountrySelectorModal(id);
        });
    });

    document.querySelectorAll('.td-input-odds-obj').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            const step = state.steps.find(s => s.id === id);
            if (step) {
                let val = parseFloat(e.target.value);
                if (isNaN(val) || val < 1.01) val = 1.01;
                
                const wasSynced = step.oddsReal === step.oddsObj;
                step.oddsObj = val;
                if (wasSynced) {
                    step.oddsReal = val;
                }
                
                e.target.value = val.toFixed(2);
                updateAll();
            }
        });
    });

    document.querySelectorAll('.td-input-odds-real').forEach(input => {
        input.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            const step = state.steps.find(s => s.id === id);
            if (step) {
                let val = parseFloat(e.target.value);
                if (isNaN(val) || val < 1.01) val = 1.01;
                step.oddsReal = val;
                e.target.value = val.toFixed(2);
                updateAll();
            }
        });
    });

    document.querySelectorAll('.status-select').forEach(select => {
        select.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            const step = state.steps.find(s => s.id === id);
            if (step) {
                step.status = e.target.value;
                updateAll();
            }
        });
    });

    document.querySelectorAll('.btn-delete-row').forEach(button => {
        button.addEventListener('click', (e) => {
            const btn = e.target.closest('.btn-delete-row');
            const id = parseInt(btn.dataset.id);
            state.steps = state.steps.filter(s => s.id !== id);
            updateAll();
        });
    });
}

// Country Modal Operations
function openCountrySelectorModal(rowId) {
    activeRowIdForCountrySelect = rowId;
    selectedLocalTeam = null;
    selectedVisitorTeam = null;
    
    elements.selectedTeam1.textContent = elements.selectedTeam1.dataset.placeholder;
    elements.selectedTeam1.classList.remove('active');
    elements.selectedTeam2.textContent = elements.selectedTeam2.dataset.placeholder;
    elements.selectedTeam2.classList.remove('active');
    
    elements.btnConfirmTeams.disabled = true;
    elements.countrySearch.value = '';
    
    const step = state.steps.find(s => s.id === rowId);
    if (step) {
        const sanitized = sanitizeMatchString(step.match);
        if (sanitized.includes("vs")) {
            const parts = sanitized.split(/ vs\.? /);
            if (parts.length === 2) {
                const t1 = parts[0].trim();
                const t2 = parts[1].split("(")[0].trim();
                
                const found1 = Object.keys(COUNTRY_CODES).find(name => name.toLowerCase() === t1.toLowerCase());
                const found2 = Object.keys(COUNTRY_CODES).find(name => name.toLowerCase() === t2.toLowerCase());
                if (found1) selectCountryItem({ name: found1, flag: COUNTRY_CODES[found1] });
                if (found2) selectCountryItem({ name: found2, flag: COUNTRY_CODES[found2] });
            }
        }
    }
    
    renderCountriesGrid();
    elements.countryModal.style.display = 'block';
}

function closeCountrySelectorModal() {
    elements.countryModal.style.display = 'none';
    activeRowIdForCountrySelect = null;
}

function renderCountriesGrid(searchQuery = '') {
    elements.countriesGrid.innerHTML = '';
    
    const list = Object.keys(COUNTRY_CODES).map(name => ({
        name: name,
        code: COUNTRY_CODES[name]
    }));
    
    const query = searchQuery.toLowerCase().trim();
    const filtered = list.filter(c => c.name.toLowerCase().includes(query));
    
    filtered.forEach(country => {
        const div = document.createElement('div');
        div.className = 'country-item';
        div.style.display = 'flex';
        div.style.flexDirection = 'column';
        div.style.alignItems = 'center';
        div.style.padding = '0.5rem';
        
        const isSelected = 
            (selectedLocalTeam && selectedLocalTeam.name === country.name) ||
            (selectedVisitorTeam && selectedVisitorTeam.name === country.name);
            
        if (isSelected) {
            div.classList.add('selected');
        }
        
        div.innerHTML = `
            <img src="https://flagcdn.com/32x24/${country.code}.png" style="width: 24px; height: 18px; border-radius: 1px; margin-bottom: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.3);" alt="${country.name}">
            <span style="font-size: 0.8rem; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; max-width:90px;">${country.name}</span>
        `;
        
        div.addEventListener('click', () => {
            selectCountryItem(country);
            renderCountriesGrid(elements.countrySearch.value);
        });
        
        elements.countriesGrid.appendChild(div);
    });
}

function selectCountryItem(country) {
    if (selectedLocalTeam && selectedLocalTeam.name === country.name) {
        selectedLocalTeam = null;
        elements.selectedTeam1.textContent = elements.selectedTeam1.dataset.placeholder;
        elements.selectedTeam1.classList.remove('active');
    } else if (selectedVisitorTeam && selectedVisitorTeam.name === country.name) {
        selectedVisitorTeam = null;
        elements.selectedTeam2.textContent = elements.selectedTeam2.dataset.placeholder;
        elements.selectedTeam2.classList.remove('active');
    }
    else if (!selectedLocalTeam) {
        selectedLocalTeam = country;
        const flagHtml = getFlagImgHtml(country.name);
        elements.selectedTeam1.innerHTML = `${flagHtml} ${country.name}`;
        elements.selectedTeam1.classList.add('active');
    } else if (!selectedVisitorTeam) {
        selectedVisitorTeam = country;
        const flagHtml = getFlagImgHtml(country.name);
        elements.selectedTeam2.innerHTML = `${flagHtml} ${country.name}`;
        elements.selectedTeam2.classList.add('active');
    } else {
        selectedVisitorTeam = country;
        const flagHtml = getFlagImgHtml(country.name);
        elements.selectedTeam2.innerHTML = `${flagHtml} ${country.name}`;
        elements.selectedTeam2.classList.add('active');
    }
    
    elements.btnConfirmTeams.disabled = !(selectedLocalTeam && selectedVisitorTeam);
}

// Match autocomplete search logic
function initMatchAutocomplete() {
    elements.wcMatchSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (!query) {
            elements.wcSearchResults.style.display = 'none';
            return;
        }

        const filtered = WC_104_MATCHES.filter(m => m.toLowerCase().includes(query));
        
        if (filtered.length === 0) {
            elements.wcSearchResults.innerHTML = '<div style="padding: 0.75rem; color: var(--text-muted); font-size: 0.85rem;">No se encontraron partidos</div>';
        } else {
            elements.wcSearchResults.innerHTML = filtered.map(match => {
                const flaggedMatchHTML = formatMatchDisplayHTML(match);
                return `<div class="wc-search-item" style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--border-color); cursor: pointer; font-size: 0.85rem; color: var(--text-primary); transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.05)'" onmouseout="this.style.background='transparent'">${flaggedMatchHTML}</div>`;
            }).join('');
        }
        
        elements.wcSearchResults.style.display = 'block';

        elements.wcSearchResults.querySelectorAll('.wc-search-item').forEach((item, idx) => {
            item.addEventListener('click', () => {
                const originalMatchName = filtered[idx];
                
                state.steps.push({
                    id: Date.now(),
                    match: originalMatchName,
                    oddsObj: state.defaultOdds,
                    oddsReal: state.defaultOdds,
                    status: 'pending'
                });
                
                updateAll();
                
                elements.wcMatchSearch.value = '';
                elements.wcSearchResults.style.display = 'none';
            });
        });
    });

    document.addEventListener('click', (e) => {
        if (e.target !== elements.wcMatchSearch && e.target !== elements.wcSearchResults) {
            elements.wcSearchResults.style.display = 'none';
        }
    });
}

// Recalculate, save and render
function updateAll() {
    calculateLadder();
    renderTable();
    renderFootballTimeline();
    saveState();
}

// Event Listeners for controls
if (elements.btnFilterActive && elements.btnFilterAll) {
    elements.btnFilterActive.addEventListener('click', () => {
        currentFilter = 'active';
        elements.btnFilterActive.classList.add('active');
        elements.btnFilterAll.classList.remove('active');
        renderTable();
    });
    
    elements.btnFilterAll.addEventListener('click', () => {
        currentFilter = 'all';
        elements.btnFilterActive.classList.remove('active');
        elements.btnFilterAll.classList.add('active');
        renderTable();
    });
}

elements.inputInitialBalance.addEventListener('change', (e) => {
    let val = parseFloat(e.target.value);
    if (isNaN(val) || val < 1) val = 10000;
    state.initialBalance = val;
    e.target.value = val;
    updateAll();
});

elements.inputDefaultOdds.addEventListener('change', (e) => {
    let val = parseFloat(e.target.value);
    if (isNaN(val) || val < 1.01) val = 1.10;
    state.defaultOdds = val;
    e.target.value = val.toFixed(2);
    saveState();
});

elements.btnAddStep.addEventListener('click', () => {
    const nextNum = state.steps.length + 1;
    state.steps.push({
        id: Date.now(),
        match: `Partido ${nextNum}`,
        oddsObj: state.defaultOdds,
        oddsReal: state.defaultOdds,
        status: 'pending'
    });
    updateAll();
});

elements.btnReset.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que deseas reiniciar todo el reto a los valores iniciales? Se perderá el progreso guardado.')) {
        initDefaultState();
        updateAll();
    }
});

// Collapsible Config & Info Accordion Listeners
if (elements.btnToggleConfig && elements.configCollapsibleContent) {
    elements.btnToggleConfig.addEventListener('click', () => {
        elements.configCollapsibleContent.classList.toggle('open');
        elements.btnToggleConfig.classList.toggle('open');
    });
}

if (elements.btnToggleHowItWorks && elements.howItWorksContent) {
    elements.btnToggleHowItWorks.addEventListener('click', () => {
        elements.howItWorksContent.classList.toggle('open');
        elements.btnToggleHowItWorks.classList.toggle('open');
    });
}

// Modal Events
elements.closeModal.addEventListener('click', closeCountrySelectorModal);
elements.btnCancelTeams.addEventListener('click', closeCountrySelectorModal);
elements.countrySearch.addEventListener('input', (e) => {
    renderCountriesGrid(e.target.value);
});

elements.btnConfirmTeams.addEventListener('click', () => {
    if (selectedLocalTeam && selectedVisitorTeam && activeRowIdForCountrySelect !== null) {
        const step = state.steps.find(s => s.id === activeRowIdForCountrySelect);
        if (step) {
            step.match = `${selectedLocalTeam.name} vs. ${selectedVisitorTeam.name}`;
            updateAll();
        }
        closeCountrySelectorModal();
    }
});

window.addEventListener('click', (e) => {
    if (e.target === elements.countryModal) {
        closeCountrySelectorModal();
    }
});

// App Initialization
async function init() {
    detectUser();
    
    // Listen to hash changes (dynamic user switching)
    window.addEventListener('hashchange', () => {
        window.location.reload();
    });

    if (currentUser) {
        await loadState();
        calculateLadder();
        renderTable();
        renderFootballTimeline();
        initMatchAutocomplete();
    }
}

// Run app
init();
