// World Cup 2026 ISO Codes Mapping (FlagCDN compatible)
const COUNTRY_CODES = {
    "México": "mx", 
    "Sudáfrica": "za", 
    "Corea del Sur": "kr", 
    "República Checa": "cz",
    "Canadá": "ca", 
    "Bosnia y Herzegovina": "ba", 
    "Bosnia y Her.": "ba",
    "Estados Unidos": "us", 
    "EE. UU.": "us",
    "Paraguay": "py",
    "Qatar": "qa", 
    "Suiza": "ch", 
    "Brasil": "br", 
    "Marruecos": "ma", 
    "Haití": "ht",
    "Escocia": "gb-sct", 
    "Australia": "au", 
    "Turquía": "tr", 
    "Alemania": "de", 
    "Curazao": "cw",
    "Países Bajos": "nl", 
    "Japón": "jp", 
    "Costa de Marfil": "ci", 
    "Ecuador": "ec",
    "Suecia": "se", 
    "Túnez": "tn", 
    "España": "es", 
    "Cabo Verde": "cv", 
    "Bélgica": "be",
    "Egipto": "eg", 
    "Arabia Saudita": "sa", 
    "Uruguay": "uy", 
    "Irán": "ir", 
    "Nueva Zelanda": "nz",
    "Francia": "fr", 
    "Senegal": "sn", 
    "Irak": "iq", 
    "Noruega": "no", 
    "Argentina": "ar",
    "Argelia": "dz", 
    "Austria": "at", 
    "Jordania": "jo", 
    "Portugal": "pt", 
    "RD de Congo": "cd",
    "Inglaterra": "gb-eng", 
    "Croacia": "hr", 
    "Ghana": "gh", 
    "Panamá": "pa", 
    "Uzbekistán": "uz",
    "Colombia": "co"
};

// Full list of 104 Matches of the World Cup 2026 (Clean names, no inline emojis)
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

// Cleans match strings that might contain legacy text codes or flags
function sanitizeMatchString(str) {
    // Strip ISO codes that might have been loaded (e.g. "MX ", "ZA ")
    let clean = str;
    Object.keys(COUNTRY_CODES).forEach(name => {
        const flagEmoji = COUNTRY_CODES[name];
        // Match things like "MX México", "ZA Sudáfrica", etc.
        const codePrefix = new RegExp(`^[A-Z]{2}\\s+(${name})`, 'g');
        clean = clean.replace(codePrefix, '$1');
        
        const codeMid = new RegExp(`vs\\.?\\s+[A-Z]{2}\\s+(${name})`, 'g');
        clean = clean.replace(codeMid, 'vs. $1');
    });
    return clean;
}

// Generate match display HTML with images instead of text emojis
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

        // Check if team1 has prefix (like "16avos de Final: P73 - ")
        let prefix = "";
        if (team1.includes(":")) {
            const idx = team1.indexOf(":");
            prefix = `<span style="color: var(--text-muted); font-size: 0.8rem; font-weight:500;">${team1.slice(0, idx + 1)} </span>`;
            team1 = team1.slice(idx + 1).trim();
            // Handle phase details (P73 - )
            if (team1.includes("-")) {
                const hyphenIdx = team1.indexOf("-");
                prefix += `<span style="color: var(--primary); font-size: 0.8rem; font-weight:600;">${team1.slice(0, hyphenIdx + 1)} </span>`;
                team1 = team1.slice(hyphenIdx + 1).trim();
            }
        }

        // Check if team2 has suffix (like "(Grupo A)")
        let suffix = "";
        const groupMatch = team2.match(/\((Grupo [A-L])\)/i);
        if (groupMatch) {
            suffix = ` <span style="color: var(--text-muted); font-size: 0.8rem;">${groupMatch[0]}</span>`;
            team2 = team2.replace(/\((Grupo [A-L])\)/i, "").trim();
        }

        // Generate flag images
        const flag1 = getFlagImgHtml(team1);
        const flag2 = getFlagImgHtml(team2);

        return `<div style="display: flex; align-items: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 250px;">
            ${prefix}
            ${flag1}
            <span style="font-weight: 500;">${team1}</span>
            <span style="color: var(--text-muted); margin: 0 6px; font-weight:600; font-size: 0.85rem;">vs</span>
            ${flag2}
            <span style="font-weight: 500;">${team2}</span>
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

// DOM Elements
const elements = {
    inputInitialBalance: document.getElementById('input-initial-balance'),
    inputDefaultOdds: document.getElementById('input-default-odds'),
    btnAddStep: document.getElementById('btn-add-step'),
    btnReset: document.getElementById('btn-reset'),
    btnLoadWC: document.getElementById('btn-load-wc'),
    tbody: document.getElementById('steps-tbody'),
    statInitial: document.getElementById('stat-initial'),
    statCurrent: document.getElementById('stat-current'),
    statProfit: document.getElementById('stat-profit'),
    statRoi: document.getElementById('stat-roi'),
    badgeProgress: document.getElementById('badge-progress'),
    progressBarFill: document.getElementById('progress-bar-fill'),
    
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
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount).replace('ARS', '$');
}

// Format percent
function formatPercent(value) {
    return `${value >= 0 ? '+' : ''}${value.toFixed(1)}%`;
}

// Load State from LocalStorage
function loadState() {
    const savedState = localStorage.getItem('reto_escalera_state');
    if (savedState) {
        try {
            state = JSON.parse(savedState);
            
            // Clean legacy data
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
        } catch (e) {
            console.error('Error loading saved state, using defaults.', e);
            initDefaultState();
        }
    } else {
        initDefaultState();
    }
}

// Initialize default state
function initDefaultState() {
    state.initialBalance = 10000;
    state.defaultOdds = 1.10;
    
    // Pre-fill with first 12 matches of the tournament
    state.steps = WC_FULL_STEPS.slice(0, 12).map((step, i) => ({
        id: Date.now() + i,
        ...step
    }));
    
    elements.inputInitialBalance.value = state.initialBalance;
    elements.inputDefaultOdds.value = state.defaultOdds;
}

// Save State to LocalStorage
function saveState() {
    localStorage.setItem('reto_escalera_state', JSON.stringify(state));
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
                // Previous is pending. Show projected actual stake for planning
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
    
    // Profit CSS indicator
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
    const progressPercent = totalSteps > 0 ? (wonStepsCount / totalSteps) * 100 : 0;
    elements.progressBarFill.style.width = `${progressPercent}%`;
}

// Render steps table
function renderTable() {
    elements.tbody.innerHTML = '';
    
    let chainBroken = false;

    state.steps.forEach((step, index) => {
        const tr = document.createElement('tr');
        
        // Add row classes based on status and chain status
        if (step.status === 'won') {
            tr.className = 'row-won';
        } else if (step.status === 'lost') {
            tr.className = 'row-lost';
            chainBroken = true;
        } else if (chainBroken) {
            tr.className = 'row-broken';
            tr.style.opacity = '0.4';
        }

        // Check if stake is a projection
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

        // Status pill styling class
        let statusClass = 'status-pending';
        if (step.status === 'won') statusClass = 'status-won';
        if (step.status === 'lost') statusClass = 'status-lost';

        // Render input element with formatted HTML inside matching wrapper
        tr.innerHTML = `
            <td class="col-step" style="font-weight: 700;">${index + 1}</td>
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
                        <option value="pending" ${step.status === 'pending' ? 'selected' : ''}>Pendiente</option>
                        <option value="won" ${step.status === 'won' ? 'selected' : ''}>Ganado</option>
                        <option value="lost" ${step.status === 'lost' ? 'selected' : ''}>Perdido</option>
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

    // Re-bind Lucide Icons
    lucide.createIcons();
    bindDynamicEvents();
}

// Bind events to dynamically created table rows
function bindDynamicEvents() {
    // Match Country selector button
    document.querySelectorAll('.btn-select-teams').forEach(button => {
        button.addEventListener('click', (e) => {
            const id = parseInt(e.currentTarget.dataset.id);
            openCountrySelectorModal(id);
        });
    });

    // Odds Target (Objetivo) Input Change
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

    // Odds Actual (Real) Input Change
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

    // Status Select Change
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

    // Delete Row Button Click
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
    
    // Reset selections in display boxes
    elements.selectedTeam1.textContent = elements.selectedTeam1.dataset.placeholder;
    elements.selectedTeam1.classList.remove('active');
    elements.selectedTeam2.textContent = elements.selectedTeam2.dataset.placeholder;
    elements.selectedTeam2.classList.remove('active');
    
    elements.btnConfirmTeams.disabled = true;
    elements.countrySearch.value = '';
    
    // Pre-populate display boxes if match currently contains "vs"
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
    
    // Assemble list from mapping
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
        
        // Add selected indicator if already chosen
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

        // Bind clicks to search results
        elements.wcSearchResults.querySelectorAll('.wc-search-item').forEach((item, idx) => {
            item.addEventListener('click', () => {
                const originalMatchName = filtered[idx];
                
                // Add new step
                state.steps.push({
                    id: Date.now(),
                    match: originalMatchName,
                    oddsObj: state.defaultOdds,
                    oddsReal: state.defaultOdds,
                    status: 'pending'
                });
                
                updateAll();
                
                // Clear input
                elements.wcMatchSearch.value = '';
                elements.wcSearchResults.style.display = 'none';
            });
        });
    });

    // Close results dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (e.target !== elements.wcMatchSearch && e.target !== elements.wcSearchResults) {
            elements.wcSearchResults.style.display = 'none';
        }
    });
}

// Perform full recalculation, save and re-render
function updateAll() {
    calculateLadder();
    renderTable();
    saveState();
}

// Event Listeners for controls
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

// Load World Cup Fixtures (all 104 matches)
elements.btnLoadWC.addEventListener('click', () => {
    if (confirm('¿Cargar los 104 partidos del Mundial 2026? Esto reemplazará tu listado de partidos actual.')) {
        state.steps = WC_FULL_STEPS.map((step, i) => ({
            id: Date.now() + i,
            ...step
        }));
        updateAll();
    }
});

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

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === elements.countryModal) {
        closeCountrySelectorModal();
    }
});

// App Initialization
function init() {
    loadState();
    updateAll();
    initMatchAutocomplete();
}

// Run app
init();
