'use strict';

/* ========= STATE ========= */
let state = {
  escuelas: [
    { id:1, nombre:'Escuela Élite Fútbol', deporte:'Fútbol', director:'Carlos Mendoza', atletas:8, capacidad:20, estado:'Activa' },
    { id:2, nombre:'Escuela Natación Pro', deporte:'Natación', director:'Ana Quispe', atletas:5, capacidad:16, estado:'Activa' },
    { id:3, nombre:'Escuela Atletismo RUN', deporte:'Atletismo', director:'Luis Torres', atletas:6, capacidad:25, estado:'Activa' },
    { id:4, nombre:'Escuela Basket Stars', deporte:'Baloncesto', director:'María Pérez', atletas:3, capacidad:12, estado:'Inactiva' },
    { id:5, nombre:'Escuela Gimnasia Art', deporte:'Gimnasia', director:'Sofía Ramos', atletas:2, capacidad:15, estado:'Activa' },
  ],
  atletas: [
    { id:1, nombre:'Diego Sánchez', edad:16, deporte:'Fútbol', escuela:'Escuela Élite Fútbol', asistencia:92, estado:'Activo', nivel:'Avanzado' },
    { id:2, nombre:'Valeria López', edad:14, deporte:'Natación', escuela:'Escuela Natación Pro', asistencia:88, estado:'Activo', nivel:'Intermedio' },
    { id:3, nombre:'Sebastián Cruz', edad:17, deporte:'Atletismo', escuela:'Escuela Atletismo RUN', asistencia:95, estado:'Activo', nivel:'Élite' },
    { id:4, nombre:'Isabella Mora', edad:13, deporte:'Gimnasia', escuela:'Escuela Gimnasia Art', asistencia:78, estado:'Activo', nivel:'Principiante' },
    { id:5, nombre:'Andrés Vargas', edad:15, deporte:'Baloncesto', escuela:'Escuela Basket Stars', asistencia:82, estado:'Inactivo', nivel:'Intermedio' },
    { id:6, nombre:'Camila Reyes', edad:16, deporte:'Fútbol', escuela:'Escuela Élite Fútbol', asistencia:90, estado:'Activo', nivel:'Avanzado' },
    { id:7, nombre:'Mateo Jiménez', edad:14, deporte:'Natación', escuela:'Escuela Natación Pro', asistencia:85, estado:'Activo', nivel:'Avanzado' },
    { id:8, nombre:'Luciana Flores', edad:15, deporte:'Atletismo', escuela:'Escuela Atletismo RUN', asistencia:91, estado:'Activo', nivel:'Intermedio' },
  ],
  entrenadores: [
    { id:1, nombre:'Prof. Carlos Mendoza', especialidad:'Fútbol', escuela:'Escuela Élite Fútbol', cert:'FIFA Pro', atletas:8, estado:'Activo' },
    { id:2, nombre:'Prof. Ana Quispe', especialidad:'Natación', escuela:'Escuela Natación Pro', cert:'FINA', atletas:5, estado:'Activo' },
    { id:3, nombre:'Prof. Luis Torres', especialidad:'Atletismo', escuela:'Escuela Atletismo RUN', cert:'Nivel A', atletas:6, estado:'Activo' },
    { id:4, nombre:'Prof. María Pérez', especialidad:'Baloncesto', escuela:'Escuela Basket Stars', cert:'Nivel B', atletas:3, estado:'Activo' },
    { id:5, nombre:'Prof. Sofía Ramos', especialidad:'Gimnasia', escuela:'Escuela Gimnasia Art', cert:'Nivel A', atletas:2, estado:'Activo' },
  ],
  horarios: [
    { nombre:'Técnica de Fútbol', deporte:'Fútbol', dia:'Lun', hora:'08:00', entrenador:'Prof. Carlos Mendoza', lugar:'Cancha A1' },
    { nombre:'Natación Libre', deporte:'Natación', dia:'Lun', hora:'10:00', entrenador:'Prof. Ana Quispe', lugar:'Piscina C' },
    { nombre:'Velocidad', deporte:'Atletismo', dia:'Mar', hora:'07:00', entrenador:'Prof. Luis Torres', lugar:'Pista D' },
    { nombre:'Táctica Basket', deporte:'Baloncesto', dia:'Mar', hora:'09:00', entrenador:'Prof. María Pérez', lugar:'Cancha B2' },
    { nombre:'Acrobacia', deporte:'Gimnasia', dia:'Mié', hora:'08:00', entrenador:'Prof. Sofía Ramos', lugar:'Gimnasio E' },
    { nombre:'Partido Práctica', deporte:'Fútbol', dia:'Jue', hora:'08:00', entrenador:'Prof. Carlos Mendoza', lugar:'Cancha A1' },
    { nombre:'Resistencia Acuática', deporte:'Natación', dia:'Vie', hora:'10:00', entrenador:'Prof. Ana Quispe', lugar:'Piscina C' },
    { nombre:'Cross Training', deporte:'Atletismo', dia:'Sáb', hora:'07:00', entrenador:'Prof. Luis Torres', lugar:'Pista D' },
  ],
  notificaciones: [
    { tipo:'warning', msg:'La piscina C está en mantenimiento hasta el 20 de mayo.', time:'Hace 30 min', leida:false },
    { tipo:'info', msg:'Nuevo atleta registrado: Camila Reyes en Escuela Élite Fútbol.', time:'Hace 2 horas', leida:false },
    { tipo:'danger', msg:'Andrés Vargas marcado como inactivo por baja asistencia.', time:'Hace 1 día', leida:false },
    { tipo:'success', msg:'Reporte mensual de abril generado correctamente.', time:'Hace 2 días', leida:true },
    { tipo:'info', msg:'Actualización del sistema completada v1.0.', time:'Hace 3 días', leida:true },
  ],
  paises: [],
};

const sportColors = {
  Fútbol:'#0d6efd',
  Natación:'#0d9488',
  Atletismo:'#ff5722',
  Baloncesto:'#8b5cf6',
  Gimnasia:'#ec4899'
};

const avatarColors = [
  '#0d6efd',
  '#ff5722',
  '#1a9e6e',
  '#8b5cf6',
  '#ec4899',
  '#e09300',
  '#0d9488'
];

let paisesAll = [];

/* ========= NAVIGATION ========= */
function navigate(sec) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));

  document.getElementById(`sec-${sec}`)?.classList.add('active');

  const titles = {
    dashboard:'DASHBOARD',
    clima:'CLIMA & CANCHAS',
    escuelas:'ESCUELAS',
    atletas:'ATLETAS',
    entrenadores:'ENTRENADORES',
    horarios:'HORARIOS',
    paises:'DATOS DE PAÍSES',
    reportes:'REPORTES',
    notificaciones:'NOTIFICACIONES'
  };

  document.getElementById('header-title').textContent = titles[sec] || sec.toUpperCase();

  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.textContent.trim().toLowerCase().startsWith(titles[sec]?.slice(0,5).toLowerCase() ?? '')) {
      n.classList.add('active');
    }
  });

  if (sec === 'clima') loadClima();
  if (sec === 'paises') loadPaises();
  if (sec === 'reportes') renderReportes();

  renderAll();
  closeSidebar();
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

/* ========= RENDER ========= */
function renderAll() {
  renderEscuelas();
  renderAtletas();
  renderEntrenadores();
  renderHorarios();
  renderDashboard();
  renderNotif();
  updateSelects();
}

function avatarColor(i) {
  return avatarColors[i % avatarColors.length];
}

function initials(n) {
  return n.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
}

function renderEscuelas() {
  const tb = document.getElementById('escuelas-table');
  if (!tb) return;

  tb.innerHTML = state.escuelas.map((e,i) => `
    <tr>
      <td>
        <div class="cell-athlete">
          <div class="ath-avatar" style="background:${avatarColor(i)}">${initials(e.nombre)}</div>
          <strong>${e.nombre}</strong>
        </div>
      </td>
      <td>${e.deporte}</td>
      <td>${e.director}</td>
      <td>${e.atletas}</td>
      <td>
        <div class="progress" style="width:100px">
          <div class="progress-fill" style="width:${Math.round(e.atletas / e.capacidad * 100)}%"></div>
        </div>
        <span style="font-size:12px;color:var(--muted)">${e.atletas}/${e.capacidad}</span>
      </td>
      <td>
        <span class="badge ${e.estado === 'Activa' ? 'badge-success' : 'badge-warning'}">${e.estado}</span>
      </td>
      <td>
        <div class="actions">
          <button class="btn btn-outline btn-sm" onclick="editEscuela(${e.id})">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="eliminarEscuela(${e.id})">🗑</button>
        </div>
      </td>
    </tr>
  `).join('');

  document.getElementById('kpi-escuelas').textContent =
    state.escuelas.filter(e => e.estado === 'Activa').length;
}

function renderAtletas(filtro = '') {
  const tb = document.getElementById('atletas-table');
  if (!tb) return;

  const lista = filtro ? state.atletas.filter(a => a.deporte === filtro) : state.atletas;

  tb.innerHTML = lista.map((a,i) => `
    <tr>
      <td>
        <div class="cell-athlete">
          <div class="ath-avatar" style="background:${avatarColor(i)}">${initials(a.nombre)}</div>
          <strong>${a.nombre}</strong>
        </div>
      </td>
      <td>${a.edad} años</td>
      <td>
        <span class="badge badge-info" style="background:${sportColors[a.deporte]}22;color:${sportColors[a.deporte]}">
          ${a.deporte}
        </span>
      </td>
      <td>${a.escuela}</td>
      <td>
        <div style="display:flex;align-items:center;gap:8px">
          <div class="progress" style="width:70px">
            <div class="progress-fill" style="width:${a.asistencia}%;background:${a.asistencia > 90 ? 'var(--success)' : a.asistencia > 75 ? 'var(--warning)' : 'var(--danger)'}"></div>
          </div>
          <span style="font-size:12px;font-weight:600">${a.asistencia}%</span>
        </div>
      </td>
      <td>
        <span class="badge ${a.estado === 'Activo' ? 'badge-success' : 'badge-danger'}">${a.estado}</span>
      </td>
      <td>
        <div class="actions">
          <button class="btn btn-outline btn-sm" onclick="toast('Editar próximamente','info')">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="eliminarAtleta(${a.id})">🗑</button>
        </div>
      </td>
    </tr>
  `).join('');

  document.getElementById('kpi-atletas').textContent =
    state.atletas.filter(a => a.estado === 'Activo').length;

  document.getElementById('badge-atletas').textContent = state.atletas.length;
}

function renderEntrenadores() {
  const tb = document.getElementById('entrenadores-table');
  if (!tb) return;

  tb.innerHTML = state.entrenadores.map((e,i) => `
    <tr>
      <td>
        <div class="cell-athlete">
          <div class="ath-avatar" style="background:${avatarColor(i + 2)}">${initials(e.nombre)}</div>
          <strong>${e.nombre}</strong>
        </div>
      </td>
      <td>${e.especialidad}</td>
      <td>${e.escuela}</td>
      <td><span class="badge badge-purple">${e.cert}</span></td>
      <td>${e.atletas}</td>
      <td>
        <span class="badge ${e.estado === 'Activo' ? 'badge-success' : 'badge-danger'}">${e.estado}</span>
      </td>
      <td>
        <div class="actions">
          <button class="btn btn-outline btn-sm" onclick="toast('Editar próximamente','info')">✏️</button>
          <button class="btn btn-sm btn-danger" onclick="eliminarEntrenador(${e.id})">🗑</button>
        </div>
      </td>
    </tr>
  `).join('');

  document.getElementById('kpi-entrenadores').textContent =
    state.entrenadores.filter(e => e.estado === 'Activo').length;
}

const dias = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];

function renderHorarios() {
  const sg = document.getElementById('schedule-grid');
  if (!sg) return;

  sg.innerHTML = dias.map(d => `
    <div class="day-col">
      <div class="day-header">${d}</div>
      <div class="day-body">
        ${state.horarios.filter(h => h.dia === d).map(h => `
          <div class="sched-item" style="--item-color:${sportColors[h.deporte] ?? 'var(--brand)'}">
            <strong>${h.hora}</strong>
            ${h.nombre}<br>
            <span style="font-size:10px;color:var(--muted)">${h.lugar}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderDashboard() {
  const bc = document.getElementById('bar-chart-sports');
  if (!bc) return;

  const sportCount = {};

  state.atletas.forEach(a => {
    sportCount[a.deporte] = (sportCount[a.deporte] || 0) + 1;
  });

  const max = Math.max(...Object.values(sportCount));

  bc.innerHTML = Object.entries(sportCount).map(([s,c]) => `
    <div class="bar-row">
      <div class="bar-label">${s}</div>
      <div class="bar-track">
        <div class="bar-fill" style="width:${Math.round(c / max * 100)}%;background:${sportColors[s]}"></div>
      </div>
      <div class="bar-val">${c}</div>
    </div>
  `).join('');

  const actList = document.getElementById('actividad-list');

  if (actList) {
    const items = [
      '🏃 Diego Sánchez asistió a Técnica de Fútbol',
      '🆕 Nueva atleta: Luciana Flores registrada',
      '📅 Clase de Cross Training programada para sábado',
      '⚠️ Piscina C en mantenimiento',
      '✅ Reporte de abril generado',
    ];

    actList.innerHTML = items.map(i => `
      <div style="padding:9px 0;border-bottom:1px solid var(--surface2);font-size:13px">${i}</div>
    `).join('');
  }

  const dat = document.getElementById('dash-atletas-table');

  if (dat) {
    dat.innerHTML = state.atletas.slice(0,5).map((a,i) => `
      <tr>
        <td>
          <div class="cell-athlete">
            <div class="ath-avatar" style="background:${avatarColor(i)}">${initials(a.nombre)}</div>
            ${a.nombre}
          </div>
        </td>
        <td>${a.escuela}</td>
        <td>${a.deporte}</td>
        <td>${a.asistencia}%</td>
        <td>
          <span class="badge ${a.estado === 'Activo' ? 'badge-success' : 'badge-danger'}">${a.estado}</span>
        </td>
      </tr>
    `).join('');
  }
}

function renderNotif() {
  const nl = document.getElementById('notif-list');
  if (!nl) return;

  nl.innerHTML = state.notificaciones.map((n,i) => `
    <div class="notif-item" style="--notif-color:${n.tipo === 'success' ? 'var(--success)' : n.tipo === 'danger' ? 'var(--danger)' : n.tipo === 'warning' ? 'var(--warning)' : 'var(--brand)'}; opacity:${n.leida ? .6 : 1}">
      <div style="flex:1">
        <div class="notif-body">${n.msg}</div>
        <div class="notif-time">${n.time}${n.leida ? ' · Leída' : ' · <strong>Nueva</strong>'}</div>
      </div>
      <button class="btn btn-outline btn-sm" onclick="leerNotif(${i})">${n.leida ? '✓' : 'Leer'}</button>
    </div>
  `).join('');
}

function renderReportes() {
  const rm = document.getElementById('rep-mensual');

  if (rm) {
    const meses = [['Ene',18],['Feb',20],['Mar',22],['Abr',24],['May',24]];
    const max = Math.max(...meses.map(m => m[1]));

    rm.innerHTML = meses.map(([m,v]) => `
      <div class="bar-row">
        <div class="bar-label">${m}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${Math.round(v / max * 100)}%"></div>
        </div>
        <div class="bar-val">${v}</div>
      </div>
    `).join('');
  }

  const ra = document.getElementById('rep-asistencia');

  if (ra) {
    const data = Object.entries(sportColors).map(([s]) => ({
      s,
      v: Math.round(78 + Math.random() * 18)
    }));

    ra.innerHTML = data.map(d => `
      <div class="bar-row">
        <div class="bar-label">${d.s}</div>
        <div class="bar-track">
          <div class="bar-fill" style="width:${d.v}%;background:${sportColors[d.s]}"></div>
        </div>
        <div class="bar-val">${d.v}%</div>
      </div>
    `).join('');
  }
}

/* ========= CLIMA ========= */
async function loadClima() {
  const wc = document.getElementById('weather-card');

  if (!wc || wc.dataset.loaded) return;

  wc.dataset.loaded = '1';

  try {
    const lat = -1.0228;
    const lon = -79.4609;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weathercode,precipitation&timezone=auto`;

    const res = await fetch(url);
    const d = await res.json();
    const c = d.current;

    const icons = {
      0:'☀️',
      1:'🌤️',
      2:'⛅',
      3:'☁️',
      45:'🌫️',
      61:'🌧️',
      71:'❄️',
      80:'🌦️',
      95:'⛈️'
    };

    const descs = {
      0:'Despejado',
      1:'Mayormente despejado',
      2:'Parcialmente nublado',
      3:'Nublado',
      45:'Niebla',
      61:'Lluvia',
      71:'Nieve',
      80:'Chubascos',
      95:'Tormenta'
    };

    const code = c.weathercode;
    const icon = icons[code] ?? '🌤️';
    const desc = descs[code] ?? 'Variable';
    const temp = Math.round(c.temperature_2m);
    const hum = c.relative_humidity_2m;
    const wind = Math.round(c.wind_speed_10m);
    const rain = c.precipitation;

    wc.innerHTML = `
      <div class="weather-main">
        <div class="weather-icon">${icon}</div>
        <div>
          <div class="weather-temp">${temp}°C</div>
          <div class="weather-desc">${desc}</div>
          <div class="weather-meta">📍 Quevedo, Los Ríos, Ecuador</div>
        </div>
      </div>
      <div class="weather-details">
        <div class="w-detail">
          <div class="w-detail-val">${hum}%</div>
          <div class="w-detail-lbl">Humedad</div>
        </div>
        <div class="w-detail">
          <div class="w-detail-val">${wind} km/h</div>
          <div class="w-detail-lbl">Viento</div>
        </div>
        <div class="w-detail">
          <div class="w-detail-val">${rain} mm</div>
          <div class="w-detail-lbl">Precipit.</div>
        </div>
      </div>
    `;

    renderCondiciones(temp, code, wind, rain);
  } catch (e) {
    wc.innerHTML = `<div style="color:#fff;padding:20px">⚠️ No se pudo cargar el clima. Revisa tu conexión.</div>`;
  }
}

function renderCondiciones(temp, code, wind, rain) {
  const cl = document.getElementById('condicion-list');
  if (!cl) return;

  const deportes = [
    {
      d:'Fútbol (Cancha A1)',
      ok: code < 61 && wind < 40,
      msg: code >= 61 ? 'Lluvia detectada – evaluar' : wind >= 40 ? 'Viento fuerte' : 'Condiciones óptimas ✅'
    },
    {
      d:'Natación (Piscina C)',
      ok: true,
      msg: 'Interior – siempre disponible ✅'
    },
    {
      d:'Atletismo (Pista D)',
      ok: code < 45 && rain < 1,
      msg: code >= 45 ? 'Niebla o lluvia – precaución' : 'Pista seca ✅'
    },
    {
      d:'Baloncesto (Cancha B2)',
      ok: code < 61,
      msg: code >= 61 ? 'Lluvia ligera – cubierta recomendada' : 'Condiciones normales ✅'
    },
    {
      d:'Gimnasia (Gimnasio E)',
      ok: true,
      msg: 'Interior – sin restricciones ✅'
    },
  ];

  cl.innerHTML = deportes.map(d => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--surface2)">
      <span style="font-size:14px;font-weight:500">${d.d}</span>
      <span class="badge ${d.ok ? 'badge-success' : 'badge-warning'}">${d.msg}</span>
    </div>
  `).join('');
}

/* ========= API REST COUNTRIES ========= */
async function loadPaises() {
  if (paisesAll.length > 0) return;

  const grid = document.getElementById('paises-grid');
  const loading = document.getElementById('paises-loading');

  try {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,languages,area,sports');
    const data = await res.json();

    paisesAll = data.sort((a,b) => a.name.common.localeCompare(b.name.common));

    document.getElementById('pais-count').textContent = `${paisesAll.length} países cargados`;

    loading.style.display = 'none';
    grid.style.display = 'grid';

    renderPaises(paisesAll.slice(0,12));
  } catch(e) {
    loading.innerHTML = `<p style="color:var(--danger)">⚠️ Error al cargar países. Verifica tu conexión a internet.</p>`;
  }
}

function renderPaises(lista) {
  const grid = document.getElementById('paises-grid');
  if (!grid) return;

  grid.innerHTML = lista.slice(0,12).map(p => {
    const langs = p.languages ? Object.values(p.languages).slice(0,2).join(', ') : 'N/A';
    const cap = p.capital?.[0] ?? 'N/A';
    const pop = p.population
      ? p.population >= 1e6
        ? (p.population / 1e6).toFixed(1) + 'M'
        : p.population.toLocaleString()
      : 'N/A';

    return `
      <div class="fact-card">
        <div style="display:flex;align-items:center;gap:10px">
          <img src="${p.flags?.png}" alt="${p.name.common}" style="width:40px;height:26px;object-fit:cover;border-radius:3px;border:1px solid var(--border)" />
          <div class="fact-sport">${p.name.common}</div>
        </div>
        <div class="fact-text">
          🏛️ Capital: <strong>${cap}</strong><br>
          🌍 Región: ${p.region}<br>
          👥 Población: ${pop}<br>
          🗣️ Idiomas: ${langs}
        </div>
        <div class="fact-source">REST Countries API · restcountries.com</div>
      </div>
    `;
  }).join('');
}

function buscarPais(val) {
  if (!paisesAll.length) return;

  const q = val.toLowerCase().trim();

  const filtrados = q
    ? paisesAll.filter(p =>
        p.name.common.toLowerCase().includes(q) ||
        (p.region || '').toLowerCase().includes(q)
      )
    : paisesAll;

  document.getElementById('pais-count').textContent = `${filtrados.length} resultado(s)`;

  renderPaises(filtrados.slice(0,12));
}

/* ========= MODALES ========= */
function openModal(id) {
  updateSelects();
  document.getElementById(id)?.classList.add('open');
}

function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
}

document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    closeModal(e.target.id);
  }
});

/* ========= SELECTS ========= */
function updateSelects() {
  const escNames = state.escuelas.map(e => e.nombre);
  const entNames = state.entrenadores.map(e => e.nombre);

  const fills = [
    ['atl-escuela', escNames],
    ['ent-escuela', escNames],
    ['hor-entrenador', entNames],
  ];

  fills.forEach(([id, opts]) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.innerHTML = opts.map(o => `<option>${o}</option>`).join('');
  });
}

/* ========= GUARDAR ========= */
function guardarEscuela() {
  const n = document.getElementById('esc-nombre').value.trim();

  if (!n) {
    toast('Ingresa el nombre de la escuela','error');
    return;
  }

  const nueva = {
    id: Date.now(),
    nombre: n,
    deporte: document.getElementById('esc-deporte').value,
    director: document.getElementById('esc-director').value || 'Sin asignar',
    atletas: 0,
    capacidad: parseInt(document.getElementById('esc-capacidad').value) || 20,
    estado: 'Activa'
  };

  state.escuelas.push(nueva);

  closeModal('modal-escuela');
  renderAll();

  toast(`Escuela "${n}" registrada`,'success');
}

function guardarAtleta() {
  const n = document.getElementById('atl-nombre').value.trim();
  const ap = document.getElementById('atl-apellido').value.trim();

  if (!n || !ap) {
    toast('Ingresa nombre y apellido','error');
    return;
  }

  const fecha = document.getElementById('atl-fecha').value;
  const edad = fecha ? Math.floor((new Date() - new Date(fecha)) / 31557600000) : 16;

  const nuevo = {
    id: Date.now(),
    nombre: `${n} ${ap}`,
    edad,
    deporte: document.getElementById('atl-deporte').value,
    escuela: document.getElementById('atl-escuela').value,
    asistencia: 100,
    estado: 'Activo',
    nivel: document.getElementById('atl-nivel').value
  };

  state.atletas.push(nuevo);

  closeModal('modal-atleta');
  renderAll();

  toast(`Atleta "${n} ${ap}" registrado`,'success');
}

function guardarEntrenador() {
  const n = document.getElementById('ent-nombre').value.trim();

  if (!n) {
    toast('Ingresa el nombre del entrenador','error');
    return;
  }

  const nuevo = {
    id: Date.now(),
    nombre: n,
    especialidad: document.getElementById('ent-esp').value,
    escuela: document.getElementById('ent-escuela').value,
    cert: document.getElementById('ent-cert').value,
    atletas: 0,
    estado: 'Activo'
  };

  state.entrenadores.push(nuevo);

  closeModal('modal-entrenador');
  renderAll();

  toast(`Entrenador "${n}" registrado`,'success');
}

function guardarHorario() {
  const n = document.getElementById('hor-nombre').value.trim();

  if (!n) {
    toast('Ingresa el nombre de la clase','error');
    return;
  }

  const nuevo = {
    nombre: n,
    deporte: document.getElementById('hor-deporte').value,
    dia: document.getElementById('hor-dia').value,
    hora: document.getElementById('hor-hora').value,
    entrenador: document.getElementById('hor-entrenador').value,
    lugar: document.getElementById('hor-lugar').value || 'Por asignar'
  };

  state.horarios.push(nuevo);

  closeModal('modal-horario');
  renderAll();

  toast(`Clase "${n}" añadida al horario`,'success');
}

/* ========= ELIMINAR ========= */
function eliminarEscuela(id) {
  if (confirm('¿Eliminar esta escuela?')) {
    state.escuelas = state.escuelas.filter(e => e.id !== id);
    renderAll();
    toast('Escuela eliminada','info');
  }
}

function eliminarAtleta(id) {
  if (confirm('¿Eliminar este atleta?')) {
    state.atletas = state.atletas.filter(a => a.id !== id);
    renderAll();
    toast('Atleta eliminado','info');
  }
}

function eliminarEntrenador(id) {
  if (confirm('¿Eliminar este entrenador?')) {
    state.entrenadores = state.entrenadores.filter(e => e.id !== id);
    renderAll();
    toast('Entrenador eliminado','info');
  }
}

function editEscuela(id) {
  toast('Función de edición próximamente','info');
}

/* ========= FILTROS ========= */
function filtrarAtletas() {
  const val = document.getElementById('filtro-deporte')?.value || '';
  renderAtletas(val);
}

/* ========= BÚSQUEDA GLOBAL ========= */
function globalSearch(val) {
  const q = val.toLowerCase();

  if (!q) return;

  const found = [
    ...state.atletas
      .filter(a => a.nombre.toLowerCase().includes(q))
      .map(a => `Atleta: ${a.nombre}`),

    ...state.escuelas
      .filter(e => e.nombre.toLowerCase().includes(q))
      .map(e => `Escuela: ${e.nombre}`),

    ...state.entrenadores
      .filter(e => e.nombre.toLowerCase().includes(q))
      .map(e => `Entrenador: ${e.nombre}`),
  ];

  if (found.length) {
    toast(found.slice(0,3).join(' | '),'info');
  }
}

/* ========= NOTIFICACIONES ========= */
function leerNotif(i) {
  state.notificaciones[i].leida = true;
  renderNotif();
}

function marcarLeidas() {
  state.notificaciones.forEach(n => n.leida = true);
  renderNotif();
  toast('Todas las notificaciones marcadas como leídas','success');
}

/* ========= TOAST ========= */
function toast(msg, type = 'info') {
  const c = document.getElementById('toast-container');
  const t = document.createElement('div');

  const emojis = {
    success:'✅',
    error:'❌',
    info:'ℹ️',
    warning:'⚠️'
  };

  t.className = `toast ${type}`;
  t.innerHTML = `<span>${emojis[type] ?? 'ℹ️'}</span><span>${msg}</span>`;

  c.appendChild(t);

  setTimeout(() => t.remove(), 3500);
}

/* ========= INIT ========= */
renderAll();