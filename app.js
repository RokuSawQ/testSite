"use strict";
/* Данные каталога. Добавляйте категории, подкатегории и дисциплины здесь. */
const sports = [
  {
    name: "Командные",
    icon: "⚽",
    groups: {
      "С мячом": [
        "Футбол",
        "Мини-футбол",
        "Пляжный футбол",
        "Баскетбол",
        "Баскетбол 3×3",
        "Волейбол",
        "Пляжный волейбол",
        "Гандбол",
        "Регби",
        "Регби-7",
        "Американский футбол",
        "Бейсбол",
        "Софтбол",
        "Крикет",
        "Водное поло",
        "Нетбол",
        "Корфбол",
      ],
      "С клюшкой": ["Хоккей", "Хоккей с мячом", "Хоккей на траве", "Флорбол", "Лакросс"],
    },
  },
  {
    name: "Единоборства",
    icon: "🥋",
    groups: {
      Ударные: ["Бокс", "Кикбоксинг", "Муай-тай", "Тхэквондо", "Сават"],
      Карате: ["Киокушин", "Сётокан", "Годзю-рю", "Сито-рю", "Вадо-рю"],
      "Борьба и смешанные": [
        "Дзюдо",
        "Самбо",
        "Боевое самбо",
        "Вольная борьба",
        "Греко-римская борьба",
        "Бразильское джиу-джитсу",
        "Грэпплинг",
        "ММА",
        "Сумо",
        "Ушу-саньда",
      ],
      "С оружием": ["Фехтование", "Кендо"],
    },
  },
  {
    name: "Водные",
    icon: "🏊",
    groups: {
      "В бассейне": ["Плавание", "Артистическое плавание", "Прыжки в воду"],
      "На открытой воде": [
        "Марафонское плавание",
        "Гребля академическая",
        "Гребля на байдарках и каноэ",
        "Гребной слалом",
        "Парусный спорт",
        "Сёрфинг",
        "Виндсёрфинг",
        "Кайтсёрфинг",
        "Сапбординг",
        "Водные лыжи",
        "Вейкбординг",
        "Подводный спорт",
      ],
    },
  },
  {
    name: "Зимние",
    icon: "⛷",
    groups: {
      "На снегу": [
        "Лыжные гонки",
        "Горнолыжный спорт",
        "Биатлон",
        "Фристайл",
        "Сноуборд",
        "Прыжки с трамплина",
        "Лыжное двоеборье",
        "Ски-альпинизм",
      ],
      "На льду": [
        "Фигурное катание",
        "Конькобежный спорт",
        "Шорт-трек",
        "Кёрлинг",
        "Бобслей",
        "Скелетон",
        "Санный спорт",
      ],
    },
  },
  {
    name: "Циклические",
    icon: "🏃",
    groups: {
      "Лёгкая атлетика": [
        "Спринт",
        "Бег на средние дистанции",
        "Бег на длинные дистанции",
        "Марафон",
        "Трейлраннинг",
        "Спортивная ходьба",
        "Прыжки в длину",
        "Прыжки в высоту",
        "Прыжки с шестом",
        "Метание копья",
        "Метание диска",
        "Метание молота",
        "Толкание ядра",
        "Десятиборье",
      ],
      Велоспорт: ["Шоссейный велоспорт", "Велотрек", "Маунтинбайк", "BMX", "Велокросс"],
      Многоборья: ["Триатлон", "Дуатлон", "Современное пятиборье"],
    },
  },
  {
    name: "Ракеточные",
    icon: "🎾",
    groups: {
      "Корт и стол": [
        "Теннис",
        "Настольный теннис",
        "Бадминтон",
        "Сквош",
        "Падел",
        "Пиклбол",
        "Ракетбол",
      ],
    },
  },
  {
    name: "Силовые и гимнастика",
    icon: "🏋",
    groups: {
      Сила: [
        "Тяжёлая атлетика",
        "Пауэрлифтинг",
        "Гиревой спорт",
        "Армрестлинг",
        "Бодибилдинг",
        "Функциональное многоборье",
      ],
      Гимнастика: [
        "Спортивная гимнастика",
        "Художественная гимнастика",
        "Прыжки на батуте",
        "Спортивная акробатика",
        "Спортивная аэробика",
        "Воздушная гимнастика",
        "Чир спорт",
        "Спортивные танцы",
      ],
    },
  },
  {
    name: "Технические и экстремальные",
    icon: "🛹",
    groups: {
      "Колёса и трассы": [
        "Автоспорт",
        "Картинг",
        "Мотоспорт",
        "Мотокросс",
        "Скейтбординг",
        "Роллер-спорт",
      ],
      "Высота и природа": [
        "Скалолазание",
        "Альпинизм",
        "Спортивный туризм",
        "Спортивное ориентирование",
        "Парашютный спорт",
        "Парапланеризм",
        "Планерный спорт",
      ],
    },
  },
  {
    name: "Точность и стратегия",
    icon: "🎯",
    groups: {
      Точность: [
        "Стрельба из лука",
        "Пулевая стрельба",
        "Стендовая стрельба",
        "Дартс",
        "Гольф",
        "Боулинг",
        "Бильярд",
        "Петанк",
      ],
      Интеллектуальные: ["Шахматы", "Шашки", "Го", "Спортивный бридж", "Компьютерный спорт"],
      "Конный спорт": ["Выездка", "Конкур", "Троеборье", "Вольтижировка", "Конное поло"],
    },
  },
  {
    name: "Адаптивный спорт",
    icon: "♿",
    groups: {
      Летние: [
        "Следж-хоккей на роликах",
        "Баскетбол на колясках",
        "Регби на колясках",
        "Теннис на колясках",
        "Волейбол сидя",
        "Голбол",
        "Бочча",
        "Параплавание",
        "Параатлетика",
        "Паратриатлон",
        "Парабадминтон",
      ],
      Зимние: [
        "Следж-хоккей",
        "Парагорнолыжный спорт",
        "Парасноуборд",
        "Лыжные гонки (адаптивные)",
        "Биатлон (адаптивный)",
        "Кёрлинг на колясках",
      ],
    },
  },
];
const allSports = [...new Set(sports.flatMap((c) => Object.values(c.groups).flat()))].sort((a, b) =>
  a.localeCompare(b, "ru"),
);
const news = [
  {
    id: 1,
    sport: "Футбол",
    title: "Команда начинается с тебя: как подготовиться к первому турниру",
    text: "Экипировка, командная работа и спокойствие перед стартом — собрали главное в одном материале.",
    symbol: "⚽",
    tone: "",
    body: "Первый турнир — возможность познакомиться с командой и получить опыт. Заранее уточните регламент и время сбора, проверьте обувь и форму, возьмите воду. Нагрузку и разминку согласуйте с тренером. После игры обсудите не только счёт, но и то, что удалось каждому участнику.",
  },
  {
    id: 2,
    sport: "Киокушин",
    title: "От первого занятия до первого пояса: путь в киокушин",
    text: "Что нужно знать о тренировках, этикете и первых шагах в додзё.",
    symbol: "🥋",
    tone: "gold",
    body: "Начните со знакомства с тренером и правилами додзё. На первых занятиях внимание уделяют стойкам, базовым перемещениям и технике. Условия аттестации зависят от организации и клуба: уточняйте их у своего тренера. Не торопитесь с нагрузкой и сообщайте о дискомфорте.",
  },
  {
    id: 3,
    sport: "Плавание",
    title: "Регулярность важнее рекордов: возвращаемся в бассейн",
    text: "Простой подход к тренировкам после перерыва.",
    symbol: "🏊",
    tone: "green",
    body: "Возвращайтесь к занятиям постепенно. Начните с комфортной продолжительности и уделяйте внимание технике, а не скорости. Обсудите индивидуальную нагрузку с тренером; при заболеваниях или длительном перерыве — с врачом. Оставляйте время для восстановления.",
  },
];
/* Все события и публикации — демонстрационные, не реальные анонсы. */
const baseDate = new Date();
baseDate.setHours(12, 0, 0, 0);
const events = [
  {
    id: 1,
    title: "Открытая тренировка",
    sport: "Футбол",
    offset: 2,
    time: "18:30",
    place: "Стадион «Старт»",
  },
  {
    id: 2,
    title: "Мастер-класс по киокушин",
    sport: "Киокушин",
    offset: 5,
    time: "17:00",
    place: "Спортзал «Круг»",
  },
  {
    id: 3,
    title: "Любительский заплыв",
    sport: "Плавание",
    offset: 9,
    time: "10:00",
    place: "Бассейн «Волна»",
  },
  {
    id: 4,
    title: "Встреча бегового клуба",
    sport: "Бег",
    offset: 13,
    time: "09:00",
    place: "Центральный парк",
  },
].map((e) => ({
  ...e,
  date: new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate() + e.offset),
}));
const menu = [
  ["home", "⌂", "Главная"],
  ["catalog", "▦", "Виды спорта"],
  ["news", "▤", "Лента новостей"],
  ["messages", "✉", "Сообщения"],
  ["awards", "☆", "Достижения"],
  ["calendar", "▦", "Календарь"],
  ["profile", "◉", "Личный кабинет"],
];
const $ = (s) => document.querySelector(s);
const escapeHTML = (v) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
  );
const readStore = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
};
const store = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    toast("Хранилище недоступно: изменения сохранятся только до закрытия страницы.");
  }
};
let theme = readStore(
  "sk-theme",
  matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
);
document.documentElement.dataset.theme = theme;
let view = "home",
  category = "",
  query = "",
  month = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1),
  joined = readStore("sk-joined", []),
  saved = readStore("sk-saved", []),
  profile = null,
  authMode = "login",
  chatContact = "Тренер",
  lastFocus = null;
/* Профиль и пароль не записываются на диск. Демо-аккаунт живёт только в памяти вкладки. */
let registeredAccount = null;
const conversations = {
  Тренер: [
    {
      text: "Привет! Здесь будет переписка с вашим тренером. Это демонстрационный чат.",
      mine: false,
    },
  ],
  Команда: [
    {
      text: "Добро пожаловать в командный чат! Сообщения в прототипе видны только в этой вкладке.",
      mine: false,
    },
  ],
};
function toast(text) {
  $("#toast").textContent = text;
  $("#toast").classList.remove("hidden");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => $("#toast").classList.add("hidden"), 4500);
}
function openInfo(title, body) {
  $("#info-title").textContent = title;
  $("#info-body").innerHTML = body;
  lastFocus = document.activeElement;
  $("#info").showModal();
}
function openAuth(mode = "login") {
  lastFocus = document.activeElement;
  authMode = mode;
  renderAuth();
  $("#auth").showModal();
}
function go(next) {
  view = next;
  render();
  window.scrollTo({ top: 0, behavior: "instant" });
}
function initials() {
  return profile
    ? profile.name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "СК";
}
const dateLabel = (d) => d.toLocaleDateString("ru-RU", { day: "numeric", month: "long" });
function eventList() {
  return events
    .map(
      (e) =>
        `<div class="event"><div class="date-tile"><strong>${e.date.getDate()}</strong>${e.date.toLocaleDateString("ru-RU", { month: "short" }).replace(".", "")}</div><div><strong>${e.title}</strong><small>${e.sport} · ${e.time}</small><small>${e.place}</small><button class="text-btn" data-join="${e.id}">${joined.includes(e.id) ? "✓ Вы записаны · отменить" : "Записаться →"}</button></div></div>`,
    )
    .join("");
}
function newsList() {
  return news
    .map(
      (n) =>
        `<article class="news-card"><div class="news-image ${n.tone}" aria-hidden="true">${n.symbol}</div><div><span class="tag">${n.sport}</span><h3><button class="text-btn" style="color:var(--text);font-size:inherit;text-align:left;font-weight:700;line-height:1.35" data-article="${n.id}">${n.title}</button></h3><p>${n.text}</p><div class="news-meta"><span>Редакция · Пример материала</span><button class="save" data-save="${n.id}" aria-label="Сохранить статью" aria-pressed="${saved.includes(n.id)}">${saved.includes(n.id) ? "★" : "☆"}</button></div></div></article>`,
    )
    .join("");
}
function rightRail() {
  return `<div class="right-rail"><section class="panel"><div class="profile-mini"><div class="profile-avatar">${escapeHTML(initials())}</div><div><strong>${profile ? escapeHTML(profile.name.split(" ")[0]) : "Твой спортивный круг"}</strong><div><small>${profile ? escapeHTML(profile.role) : "Всё важное — в одном месте"}</small></div></div></div><div class="mini-stat"><div><b>${joined.length}</b>мероприятия</div><div><b>${saved.length}</b>сохранено</div></div><button class="wide" data-action="${profile ? "profile" : "register"}">${profile ? "Личный кабинет" : "Создать профиль →"}</button></section><section class="panel"><div class="section-head"><h3>Ближайшие события</h3></div><small>Демонстрационное расписание</small>${eventList()}</section><section class="panel blue-panel"><span class="eyebrow">Каждый старт важен</span><h3>Найди свой спорт</h3><p>От первого занятия до нового личного рекорда.</p><button class="text-btn" data-action="catalog">Открыть каталог →</button></section></div>`;
}
function home() {
  return `<div class="layout"><div><section class="hero"><div class="track" aria-hidden="true"></div><div class="hero-copy"><span class="hero-badge">ОДНО СООБЩЕСТВО. МНОГО ВОЗМОЖНОСТЕЙ.</span><h2>Твой спорт.<br>Твои люди.<br>Твой следующий шаг.</h2><p>Выбирай дисциплину, находи события и собирай свою историю достижений.</p><button data-action="catalog">Найти свой спорт ↗</button></div></section><section><div class="section-head"><h2>Выбери направление</h2><button class="text-btn" data-action="catalog">Все виды →</button></div><div class="sport-grid">${sports
    .slice(0, 4)
    .map(
      (c) =>
        `<button class="sport-tile" data-category="${c.name}"><span class="sport-symbol">${c.icon}</span><strong>${c.name}</strong><small>${Object.values(c.groups).flat().length} дисциплин ↗</small></button>`,
    )
    .join(
      "",
    )}</div></section><section class="panel"><div class="section-head"><h2>В центре внимания</h2><button class="text-btn" data-action="news">Вся лента →</button></div>${newsList()}</section></div>${rightRail()}</div>`;
}
function catalog() {
  let found = 0;
  const cards = sports
    .filter((c) => !category || c.name === category)
    .map((c) => {
      let groups = Object.entries(c.groups)
        .map(([name, items]) => {
          const list = items.filter((s) =>
            `${s} ${name} ${c.name}`.toLowerCase().includes(query.toLowerCase()),
          );
          found += list.length;
          return list.length
            ? `<div class="subheading">${name}</div><div class="discipline">${list.map((s) => `<button data-sport="${escapeHTML(s)}">${escapeHTML(s)}</button>`).join("")}</div>`
            : "";
        })
        .join("");
      return groups ? `<section class="panel"><h2>${c.icon} ${c.name}</h2>${groups}</section>` : "";
    })
    .join("");
  return `<div class="notice">Расширяемый каталог: ${allSports.length} дисциплин и направлений. Это не полный официальный реестр: список можно дополнять в коде.</div><div class="filter-row"><button data-category="" class="${!category ? "active" : ""}">Все категории</button>${sports.map((c) => `<button data-category="${c.name}" class="${category === c.name ? "active" : ""}">${c.name}</button>`).join("")}</div><p class="muted" style="margin-bottom:20px">${query ? "Поиск: «" + escapeHTML(query) + "» · " : ""}Найдено: ${found}</p><div class="catalog">${cards || '<div class="panel empty">Ничего не найдено. Попробуйте другой запрос или категорию.</div>'}</div>`;
}
function calendar() {
  const y = month.getFullYear(),
    m = month.getMonth(),
    start = (new Date(y, m, 1).getDay() + 6) % 7,
    total = new Date(y, m + 1, 0).getDate();
  let cells = Array(start).fill('<div class="day blank"></div>').join("");
  for (let d = 1; d <= total; d++) {
    let matches = events.filter(
      (e) => e.date.getFullYear() === y && e.date.getMonth() === m && e.date.getDate() === d,
    );
    cells += `<div class="day ${baseDate.getFullYear() === y && baseDate.getMonth() === m && baseDate.getDate() === d ? "today" : ""}">${d}${matches.map((e) => `<span>${e.time} ${e.sport}</span>`).join("")}</div>`;
  }
  return `<div class="layout"><section class="panel"><div class="section-head"><h2>${month.toLocaleDateString("ru-RU", { month: "long", year: "numeric" })}</h2><div><button data-month="-1" aria-label="Предыдущий месяц">‹</button> <button data-month="1" aria-label="Следующий месяц">›</button></div></div><div class="calendar-grid">${["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((d) => `<div class="day-name">${d}</div>`).join("")}${cells}</div><p class="form-note">Все события — примеры. Записи сохраняются только в этом браузере.</p></section><section class="panel"><h3>События и записи</h3>${eventList()}</section></div>`;
}
function awards() {
  return `<div class="notice">Это примеры оформления наград, а не подтверждённые достижения пользователя. Реальные награды появятся после подключения клуба и сервера.</div><div class="awards">${[
    ["🥇", "Первый старт", "Участие в первом соревновании"],
    ["🏆", "Личный рекорд", "Новый лучший результат"],
    ["🎖", "В ритме", "Регулярные тренировки"],
  ]
    .map(
      ([icon, title, text]) =>
        `<section class="panel award"><div class="medal">${icon}</div><span class="tag">Образец · не получено</span><h3 style="margin-top:12px">${title}</h3><p>${text}</p></section>`,
    )
    .join(
      "",
    )}</div><section class="panel"><h2>Твоя история ещё впереди</h2><p class="form-note">Начни с выбора дисциплины и запланируй первое мероприятие.</p><button class="primary" data-action="calendar">К мероприятиям →</button></section>`;
}
function messages() {
  return `<div class="notice">Локальное демо: сообщения не отправляются другим людям и исчезнут после перезагрузки страницы. Не вводите личную информацию.</div><section class="panel chat"><div class="contacts">${Object.keys(
    conversations,
  )
    .map(
      (c) =>
        `<button data-contact="${c}" class="${c === chatContact ? "active" : ""}">${c === "Тренер" ? "◉" : "◌"} ${c}</button>`,
    )
    .join(
      "",
    )}</div><div class="conversation"><h3>${chatContact}</h3><small>Демонстрационная переписка</small><div class="bubbles" aria-live="polite">${conversations[chatContact].map((m) => `<div class="bubble ${m.mine ? "mine" : ""}">${escapeHTML(m.text)}</div>`).join("")}</div><form class="composer" id="message-form"><input name="text" aria-label="Сообщение" placeholder="Написать сообщение…" required maxlength="1000"><button class="primary" aria-label="Отправить сообщение">↑</button></form></div></section>`;
}
function profilePage() {
  if (!profile)
    return `<section class="panel" style="max-width:680px;padding:36px"><div class="profile-avatar" style="margin-bottom:20px">СК</div><h2>Твоя территория спорта</h2><p class="form-note">Создай профиль, выбери дисциплину и роль. Расписание, записи и награды будут под рукой.</p><button class="primary" data-action="register">Создать профиль</button> <button data-action="login">Войти</button><p class="form-note">Демо-вход: sport / demo2026. Не используйте настоящие пароли и персональные данные.</p></section>`;
  return `<div class="profile-grid"><section class="panel"><div class="profile-mini"><div class="profile-avatar">${escapeHTML(initials())}</div><div><h2>${escapeHTML(profile.name)}</h2><small>${escapeHTML(profile.role)} · ${escapeHTML(profile.sport)}</small></div></div><p class="form-note">Демонстрационный профиль. Данные хранятся только в памяти открытой вкладки.</p><div class="mini-stat"><div><b>${joined.length}</b>записи</div><div><b>${saved.length}</b>сохранено статей</div></div><button data-action="edit-profile">Редактировать</button> <button data-action="logout">Выйти</button></section><section class="panel"><div class="section-head"><h2>Моё расписание</h2><button class="text-btn" data-action="calendar">Календарь →</button></div>${
    joined.length
      ? `<table class="schedule">${events
          .filter((e) => joined.includes(e.id))
          .map(
            (e) =>
              `<tr><td><b>${e.title}</b><br><small>${dateLabel(e.date)} · ${e.place}</small></td><td>${e.time}</td></tr>`,
          )
          .join("")}</table>`
      : '<p class="empty">Пока нет записей. Выберите мероприятие в календаре.</p>'
  }</section><section class="panel"><h2>Сохранённые материалы</h2>${
    saved.length
      ? news
          .filter((n) => saved.includes(n.id))
          .map(
            (n) =>
              `<p style="margin-top:16px"><button class="text-btn" style="text-align:left" data-article="${n.id}">${n.title} →</button></p>`,
          )
          .join("")
      : '<p class="form-note">Нажмите ☆ у статьи, чтобы вернуться к ней позже.</p>'
  }</section><section class="panel"><h2>Награды и достижения</h2><p class="form-note">Подтверждённых наград пока нет.</p><button data-action="awards">Посмотреть витрину →</button></section></div>`;
}
function render() {
  const titles = {
    home: ["ТВОЙ ЕЖЕДНЕВНЫЙ ИМПУЛЬС", "Больше, чем спорт"],
    catalog: ["ОТКРОЙ НОВОЕ", "Каталог дисциплин"],
    news: ["ИДЕИ. ЛЮДИ. ДВИЖЕНИЕ.", "Лента новостей"],
    messages: ["БУДЬ НА СВЯЗИ", "Сообщения"],
    awards: ["КАЖДЫЙ ШАГ ИМЕЕТ ЗНАЧЕНИЕ", "Достижения и награды"],
    calendar: ["ВРЕМЯ ДВИГАТЬСЯ", "Календарь мероприятий"],
    profile: ["ВСЁ О ТВОЁМ СПОРТЕ", "Личный кабинет"],
  };
  $("#nav").innerHTML = menu
    .map(
      ([id, icon, title]) =>
        `<button data-action="${id}" class="${view === id ? "active" : ""}" ${view === id ? 'aria-current="page"' : ""}><span class="nav-icon" aria-hidden="true">${icon}</span>${title}</button>`,
    )
    .join("");
  $("#account").textContent = profile ? profile.name.split(" ")[0] : "Войти →";
  $("#main").innerHTML =
    `<div class="topline"><div><p class="eyebrow">${titles[view][0]}</p><h1>${titles[view][1]}</h1></div><small>${baseDate.toLocaleDateString("ru-RU", { day: "numeric", month: "long", weekday: "long" })}</small></div>${{ home, catalog, news: () => `<div class="layout"><section class="panel"><div class="section-head"><h2>Материалы сообщества</h2><span class="tag">Демо</span></div>${newsList()}</section>${rightRail()}</div>`, messages, awards, calendar, profile: profilePage }[view]()}<footer><span>© ${baseDate.getFullYear()} ЕПСД · !!!Прототип!!!</span><button class="text-btn" data-action="policy" style="font-size:12px">Конфиденциальность</button><span>Без реальных публикаций и платежей</span></footer>`;
}
function sportOptions(selected = "Футбол") {
  return allSports
    .map((s) => `<option ${s === selected ? "selected" : ""}>${escapeHTML(s)}</option>`)
    .join("");
}
function profileFields(p = {}) {
  return `<label class="full">ФИО<input name="name" autocomplete="name" placeholder="Иванов Иван Иванович" required minlength="3" maxlength="100" value="${escapeHTML(p.name || "")}"></label><label>Дата рождения<input type="date" name="birth" required min="1900-01-01" max="${new Date().toISOString().slice(0, 10)}" value="${escapeHTML(p.birth || "")}"></label><label>Роль<select name="role">${["Участник", "Родитель", "Тренер", "Представитель клуба", "Организатор", "Болельщик"].map((r) => `<option ${p.role === r ? "selected" : ""}>${r}</option>`).join("")}</select></label><label class="full">Основной вид спорта<select name="sport">${sportOptions(p.sport)}</select></label>`;
}
function renderAuth() {
  const reg = authMode === "register";
  $("#login-tab").classList.toggle("active", !reg);
  $("#register-tab").classList.toggle("active", reg);
  $("#auth-body").innerHTML =
    `<div class="notice">Демонстрация интерфейса. Используйте вымышленные данные и отдельный тестовый пароль. Сервер не подключён.</div><form id="auth-form"><div class="form-grid">${reg ? profileFields() : ""}<label class="full">Логин<input name="login" autocomplete="${reg ? "off" : "username"}" placeholder="${reg ? "Например, sport_user" : "sport"}" pattern="[A-Za-z0-9_]{3,30}" title="От 3 до 30 латинских букв, цифр или символов подчёркивания" required minlength="3" maxlength="30"></label><label class="full">Пароль<input type="password" name="password" autocomplete="${reg ? "new-password" : "current-password"}" placeholder="${reg ? "Не менее 8 символов" : "demo2026"}" required minlength="8" maxlength="128"></label>${reg ? '<label class="check full"><input type="checkbox" name="consent" required><span>Согласен с обработкой данных и <button type="button" data-action="policy">политикой конфиденциальности</button>. Для несовершеннолетних требуется участие законного представителя.</span></label>' : ""}<button class="primary full">${reg ? "Создать демо-профиль" : "Войти"}</button></div><p id="auth-error" role="alert" style="color:var(--muted);font-size:14px;margin-top:10px"></p></form><div class="social"><button class="vk" data-oauth="VK ID">Войти через VK</button><button data-oauth="Госуслуги (ЕСИА)"><span style="color:var(--blue)">гос</span>услуги</button></div><p class="form-note">${reg ? "Данные аккаунта сохраняются только до перезагрузки вкладки." : "Демо-аккаунт: sport / demo2026. Новый аккаунт доступен после регистрации в этой вкладке."}</p>`;
}
function policy() {
  openInfo(
    "Политика конфиденциальности",
    `<div class="policy"><div class="notice">Шаблон для прототипа, не готовый юридический документ.</div><p><b>Как работает эта версия.</b> Сервер отсутствует. Введённые ФИО, дата рождения, роль, дисциплина, логин и тестовый пароль обрабатываются только в памяти вкладки и удаляются при её перезагрузке. Ничего не отправляется в VK или ЕСИА.</p><p><b>В браузере.</b> Настройка темы, номера сохранённых статей и записей на демонстрационные события сохраняются в localStorage. Очистить их можно кнопкой ниже. Не вводите настоящие персональные данные.</p><p><b>Перед запуском.</b> Укажите оператора и его контакты, цели и правовые основания обработки, состав данных, сроки хранения, порядок отзыва согласия и удаления, меры защиты, сведения о передаче третьим лицам и обработке данных несовершеннолетних. Организуйте отдельное корректное согласие и юридическую проверку требований 152-ФЗ.</p><button data-action="clear-data">Удалить локальные данные</button></div>`,
  );
}
/* Делегирование событий: обработчики работают после любой перерисовки. */
document.addEventListener("click", (e) => {
  const b = e.target.closest("button");
  if (!b) return;
  if (b.hasAttribute("data-close")) {
    b.closest("dialog").close();
    return;
  }
  if (b.dataset.action) {
    const a = b.dataset.action;
    if (a === "login" || a === "register") openAuth(a);
    else if (a === "policy") policy();
    else if (a === "logout") {
      profile = null;
      registeredAccount = null;
      Object.keys(conversations).forEach(
        (c) => (conversations[c] = conversations[c].filter((m) => !m.mine)),
      );
      render();
      toast("Вы вышли. Данные демо-аккаунта удалены из памяти.");
    } else if (a === "edit-profile") {
      openInfo(
        "Редактировать профиль",
        `<form id="edit-form"><div class="form-grid">${profileFields(profile)}<button class="primary full">Сохранить</button></div></form>`,
      );
    } else if (a === "clear-data") {
      ["sk-theme", "sk-joined", "sk-saved"].forEach((k) => {
        try {
          localStorage.removeItem(k);
        } catch {}
      });
      joined = [];
      saved = [];
      profile = null;
      registeredAccount = null;
      Object.keys(conversations).forEach(
        (c) => (conversations[c] = conversations[c].filter((m) => !m.mine)),
      );
      document.querySelectorAll("dialog[open]").forEach((d) => d.close());
      render();
      toast("Локальные данные удалены.");
    } else if (menu.some((m) => m[0] === a)) {
      if (a === "catalog") {
        query = "";
        category = "";
        $("#search").value = "";
      }
      go(a);
    }
  }
  if (b.hasAttribute("data-category")) {
    category = b.dataset.category;
    query = "";
    $("#search").value = "";
    go("catalog");
  }
  if (b.dataset.sport) {
    const sport = b.dataset.sport;
    openInfo(
      sport,
      `<span class="tag">Спортивная дисциплина</span><p class="form-note">Добавьте ${escapeHTML(sport)} в профиль и планируйте занятия. Каталог и события в этой версии демонстрационные.</p><button class="primary" id="choose-sport">${profile ? "Сделать основным видом спорта" : "Создать профиль"}</button>`,
    );
    $("#choose-sport").onclick = () => {
      $("#info").close();
      if (profile) {
        profile.sport = sport;
        render();
        toast("Вид спорта обновлён");
      } else {
        openAuth("register");
        $("#auth-form [name=sport]").value = sport;
      }
    };
  }
  if (b.dataset.article) {
    const n = news.find((n) => n.id === +b.dataset.article);
    openInfo(
      n.title,
      `<span class="tag">${n.sport} · Пример статьи</span><p style="margin-top:20px;line-height:1.8">${n.body}</p>`,
    );
  }
  if (b.dataset.save) {
    const id = +b.dataset.save;
    saved = saved.includes(id) ? saved.filter((x) => x !== id) : [...saved, id];
    store("sk-saved", saved);
    render();
  }
  if (b.dataset.join) {
    if (!profile) {
      openAuth("login");
      return;
    }
    const id = +b.dataset.join;
    joined = joined.includes(id) ? joined.filter((x) => x !== id) : [...joined, id];
    store("sk-joined", joined);
    render();
    toast(
      joined.includes(id)
        ? "Демо-запись добавлена в расписание. Организатор не уведомлён."
        : "Демо-запись отменена",
    );
  }
  if (b.dataset.month) {
    month = new Date(month.getFullYear(), month.getMonth() + Number(b.dataset.month), 1);
    render();
  }
  if (b.dataset.contact) {
    chatContact = b.dataset.contact;
    render();
  }
  if (b.dataset.oauth)
    openInfo(
      `Вход: ${b.dataset.oauth}`,
      `<div class="notice">Внешняя авторизация пока не подключена.</div><p>Для настоящего входа через ${b.dataset.oauth} нужны зарегистрированное приложение, разрешения провайдера и серверный обмен кодом авторизации. Пароли от этих сервисов здесь не запрашиваются.</p><p class="form-note">Используйте демо-вход по логину или регистрацию для проверки интерфейса.</p>`,
    );
});
$("#theme").onclick = () => {
  theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = theme;
  store("sk-theme", theme);
};
$("#account").onclick = () => (profile ? go("profile") : openAuth());
$("#login-tab").onclick = () => {
  authMode = "login";
  renderAuth();
};
$("#register-tab").onclick = () => {
  authMode = "register";
  renderAuth();
};
$("#global-search").onsubmit = (e) => {
  e.preventDefault();
  query = $("#search").value.trim();
  category = "";
  go("catalog");
};
document.addEventListener("submit", (e) => {
  if (e.target.id === "auth-form") {
    e.preventDefault();
    const f = new FormData(e.target),
      login = f.get("login"),
      password = f.get("password");
    if (authMode === "register") {
      const birth = new Date(f.get("birth") + "T12:00:00");
      if (birth > new Date() || birth.getFullYear() < 1900) {
        $("#auth-error").textContent = "Проверьте дату рождения";
        return;
      }
      profile = {
        name: f.get("name").trim(),
        birth: f.get("birth"),
        role: f.get("role"),
        sport: f.get("sport"),
      };
      registeredAccount = { login, password, profile };
    } else if (login === "sport" && password === "demo2026") {
      profile = { name: "Алексей Спортов", role: "Участник", sport: "Футбол", birth: "2000-01-01" };
    } else if (
      registeredAccount &&
      registeredAccount.login === login &&
      registeredAccount.password === password
    ) {
      profile = { ...registeredAccount.profile };
    } else {
      $("#auth-error").textContent = "Неверный логин или пароль. Демо: sport / demo2026.";
      return;
    }
    $("#auth").close();
    go("profile");
    toast("Вы вошли в демо-профиль");
  }
  if (e.target.id === "message-form") {
    e.preventDefault();
    const input = e.target.elements.text,
      text = input.value.trim();
    if (!text) return;
    conversations[chatContact].push({ text, mine: true });
    render();
    $(".bubbles").scrollTop = $(".bubbles").scrollHeight;
    $("#message-form input").focus();
  }
  if (e.target.id === "edit-form") {
    e.preventDefault();
    const f = new FormData(e.target);
    profile = {
      ...profile,
      name: f.get("name").trim(),
      birth: f.get("birth"),
      role: f.get("role"),
      sport: f.get("sport"),
    };
    if (registeredAccount) registeredAccount.profile = { ...profile };
    $("#info").close();
    render();
    toast("Профиль обновлён");
  }
});
document.querySelectorAll("dialog").forEach((d) => {
  d.addEventListener("click", (e) => {
    if (e.target === d) {
      const r = d.getBoundingClientRect();
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
        d.close();
    }
  });
  d.addEventListener("close", () => {
    if (lastFocus?.isConnected) lastFocus.focus();
  });
});
render();
