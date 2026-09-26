/* ==========================================
   KRISHI ASSISTANT BD
   MAIN JAVASCRIPT
========================================== */


/* =========================
   CROP DATA
========================= */

const crops = [

  {
    name: "ধান",
    icon: "🌾",
    description: "বাংলাদেশের অন্যতম প্রধান ফসল।",
    season: "আউশ, আমন ও বোরো মৌসুমে বিভিন্ন জাতের ধান চাষ হয়।",
    water: "জাত ও মৌসুম অনুযায়ী পানির প্রয়োজন পরিবর্তিত হয়।"
  },

  {
    name: "আলু",
    icon: "🥔",
    description: "বাংলাদেশের গুরুত্বপূর্ণ শীতকালীন ফসল।",
    season: "সাধারণত শীতকালীন মৌসুমে চাষ করা হয়।",
    water: "মাটির আর্দ্রতা অনুযায়ী সেচ প্রয়োজন।"
  },

  {
    name: "ভুট্টা",
    icon: "🌽",
    description: "খাদ্য ও পশুখাদ্য হিসেবে ব্যবহৃত হয়।",
    season: "বাংলাদেশে বিভিন্ন মৌসুমে ভুট্টা চাষ করা যায়।",
    water: "গাছের বৃদ্ধি ও মাটির অবস্থার উপর সেচ প্রয়োজন।"
  },

  {
    name: "আম",
    icon: "🥭",
    description: "বাংলাদেশের জনপ্রিয় ফল।",
    season: "জাত অনুযায়ী ফুল ও ফল ধরার সময় পরিবর্তিত হয়।",
    water: "বয়স, মাটি ও মৌসুম অনুযায়ী পানি প্রয়োজন।"
  },

  {
    name: "টমেটো",
    icon: "🍅",
    description: "জনপ্রিয় সবজি ও বাণিজ্যিক ফসল।",
    season: "শীতকালীন সময়ে ব্যাপকভাবে চাষ করা হয়।",
    water: "নিয়মিত মাটির আর্দ্রতা পর্যবেক্ষণ করা প্রয়োজন।"
  },

  {
    name: "বেগুন",
    icon: "🍆",
    description: "বাংলাদেশের জনপ্রিয় সবজি।",
    season: "বিভিন্ন মৌসুমে চাষ করা যায়।",
    water: "মাটির আর্দ্রতা অনুযায়ী সেচ দিতে হয়।"
  }

];


/* =========================
   SHOW CROPS
========================= */

function showCrops(search = "") {

  const container = document.getElementById("cropList");

  const filtered = crops.filter(crop =>
    crop.name.toLowerCase().includes(search.toLowerCase())
  );

  if (filtered.length === 0) {

    container.innerHTML = `
      <div class="card">
        <div class="card-icon">😕</div>
        <h3>ফসল পাওয়া যায়নি</h3>
        <p>অন্য কোনো ফসলের নাম লিখে দেখুন।</p>
      </div>
    `;

    return;
  }

  container.innerHTML = filtered.map(crop => `

    <div class="card">

      <div class="card-icon">${crop.icon}</div>

      <h3>${crop.name}</h3>

      <p>${crop.description}</p>

      <div class="info">
        <strong>📅 মৌসুম:</strong><br>
        ${crop.season}
      </div>

      <div class="info">
        <strong>💧 পানি:</strong><br>
        ${crop.water}
      </div>

    </div>

  `).join("");

}


/* Search */

document
  .getElementById("cropSearch")
  .addEventListener("input", function() {

    showCrops(this.value);

  });


showCrops();


/* =========================
   PROFIT CALCULATOR
========================= */

function calculateProfit() {

  const seed =
    Number(document.getElementById("seed").value) || 0;

  const fertilizer =
    Number(document.getElementById("fertilizerCost").value) || 0;

  const labor =
    Number(document.getElementById("labor").value) || 0;

  const other =
    Number(document.getElementById("other").value) || 0;

  const sale =
    Number(document.getElementById("sale").value) || 0;


  const totalCost =
    seed +
    fertilizer +
    labor +
    other;


  const profit =
    sale - totalCost;


  const result =
    document.getElementById("result");


  result.classList.remove("hidden");


  if (profit >= 0) {

    result.innerHTML = `

      <h3 class="profit">
        🎉 আনুমানিক লাভ
      </h3>

      <h2 class="profit">
        ৳ ${profit.toLocaleString("en-BD")}
      </h2>

      <p>
        মোট খরচ:
        <strong>
          ৳ ${totalCost.toLocaleString("en-BD")}
        </strong>
      </p>

      <p>
        সম্ভাব্য বিক্রয়:
        <strong>
          ৳ ${sale.toLocaleString("en-BD")}
        </strong>
      </p>

    `;

  } else {

    result.innerHTML = `

      <h3 class="loss">
        ⚠️ আনুমানিক ক্ষতি
      </h3>

      <h2 class="loss">
        ৳ ${Math.abs(profit).toLocaleString("en-BD")}
      </h2>

      <p>
        মোট খরচ:
        <strong>
          ৳ ${totalCost.toLocaleString("en-BD")}
        </strong>
      </p>

      <p>
        সম্ভাব্য বিক্রয়:
        <strong>
          ৳ ${sale.toLocaleString("en-BD")}
        </strong>
      </p>

    `;

  }

}


/* =========================
   DISEASE DATA
========================= */

const diseases = [

  {
    icon: "🌾",
    name: "ধানের রোগ",
    description:
      "ধানের পাতায় দাগ, বিবর্ণতা বা অস্বাভাবিক বৃদ্ধি দেখা গেলে স্থানীয় কৃষি বিশেষজ্ঞের পরামর্শ নেওয়া উচিত।"
  },

  {
    icon: "🐛",
    name: "পাতা খেকো পোকা",
    description:
      "পাতায় ছিদ্র বা কাটা দাগ দেখা যেতে পারে। পোকা শনাক্ত করে স্থানীয় কৃষি কর্মকর্তার পরামর্শ নিন।"
  },

  {
    icon: "🥔",
    name: "আলুর রোগ",
    description:
      "আলুর পাতায় দাগ বা শুকিয়ে যাওয়ার মতো সমস্যা দেখা দিতে পারে। সঠিক রোগ শনাক্ত করা গুরুত্বপূর্ণ।"
  },

  {
    icon: "🍅",
    name: "টমেটোর সমস্যা",
    description:
      "পাতা, কান্ড বা ফলে অস্বাভাবিক দাগ দেখা দিলে রোগের কারণ শনাক্ত করতে বিশেষজ্ঞের পরামর্শ নিন।"
  },

  {
    icon: "🌿",
    name: "পাতার দাগ",
    description:
      "পাতায় বিভিন্ন ধরনের দাগ পরিবেশ, রোগ বা পোকার কারণে হতে পারে।"
  },

  {
    icon: "🐜",
    name: "পোকামাকড়",
    description:
      "ফসলের চারপাশে পোকামাকড় দেখা গেলে আগে পোকাটি শনাক্ত করার চেষ্টা করুন।"
  }

];


function showDiseases() {

  const container =
    document.getElementById("diseaseList");

  container.innerHTML = diseases.map(item => `

    <div class="card">

      <div class="card-icon">
        ${item.icon}
      </div>

      <h3>
        ${item.name}
      </h3>

      <p>
        ${item.description}
      </p>

      <div class="info">
        💡 সঠিক রোগ বা পোকার পরিচয় নিশ্চিত করতে
        স্থানীয় কৃষি বিশেষজ্ঞের পরামর্শ নিন।
      </div>

    </div>

  `).join("");

}


showDiseases();


/* =========================
   AGRICULTURE CALENDAR
========================= */

const calendar = [

  {
    month: "জানুয়ারি",
    work: "শীতকালীন সবজি, আলু ও অন্যান্য শীতকালীন ফসলের পরিচর্যা।"
  },

  {
    month: "ফেব্রুয়ারি",
    work: "শীতকালীন ফসল সংগ্রহ ও বসন্তকালীন ফসলের প্রস্তুতি।"
  },

  {
    month: "মার্চ",
    work: "বোরো ধানের পরিচর্যা এবং গ্রীষ্মকালীন ফসলের প্রস্তুতি।"
  },

  {
    month: "এপ্রিল",
    work: "বোরো ধানের পরিচর্যা ও মৌসুম অনুযায়ী ফসলের প্রস্তুতি।"
  },

  {
    month: "মে",
    work: "বোরো ধান সংগ্রহ এবং পরবর্তী মৌসুমের প্রস্তুতি।"
  },

  {
    month: "জুন",
    work: "বর্ষাকালীন ফসল ও আমন ধানের প্রস্তুতি।"
  },

  {
    month: "জুলাই",
    work: "আমন ধান ও বর্ষাকালীন ফসলের পরিচর্যা।"
  },

  {
    month: "আগস্ট",
    work: "আমন ধান ও বিভিন্ন বর্ষাকালীন ফসলের পরিচর্যা।"
  },

  {
    month: "সেপ্টেম্বর",
    work: "আমন ধানের পরিচর্যা এবং শীতকালীন ফসলের পরিকল্পনা।"
  },

  {
    month: "অক্টোবর",
    work: "শীতকালীন ফসলের জমি প্রস্তুতি ও বপনের প্রস্তুতি।"
  },

  {
    month: "নভেম্বর",
    work: "আলু ও বিভিন্ন শীতকালীন সবজি চাষ।"
  },

  {
    month: "ডিসেম্বর",
    work: "শীতকালীন সবজি ও আলুর পরিচর্যা।"
  }

];


function showCalendar() {

  const container =
    document.getElementById("calendarList");

  container.innerHTML = calendar.map(item => `

    <div class="month-card">

      <h3>
        📅 ${item.month}
      </h3>

      <p>
        ${item.work}
      </p>

    </div>

  `).join("");

}


showCalendar();


/* =========================
   WEATHER DEMO
========================= */

/*
   This is DEMO weather.

   Later we can connect a real
   weather API.
*/

function showWeather() {

  const city =
    document.getElementById("city").value;

  const weatherResult =
    document.getElementById("weatherResult");


 /* =========================
   LIVE WEATHER - OPEN METEO
========================= */

const cityCoordinates = {

  Dhaka: {
    name: "ঢাকা",
    lat: 23.8103,
    lon: 90.4125
  },

  Chattogram: {
    name: "চট্টগ্রাম",
    lat: 22.3569,
    lon: 91.7832
  },

  Rajshahi: {
    name: "রাজশাহী",
    lat: 24.3745,
    lon: 88.6042
  },

  Khulna: {
    name: "খুলনা",
    lat: 22.8456,
    lon: 89.5403
  },

  Sylhet: {
    name: "সিলেট",
    lat: 24.8949,
    lon: 91.8687
  },

  Barishal: {
    name: "বরিশাল",
    lat: 22.7010,
    lon: 90.3535
  },

  Rangpur: {
    name: "রংপুর",
    lat: 25.7439,
    lon: 89.2752
  },

  Mymensingh: {
    name: "ময়মনসিংহ",
    lat: 24.7471,
    lon: 90.4203
  }

};


/* Weather code → Emoji + Bangla */

function getWeatherInfo(code) {

  if (code === 0) {
    return {
      icon: "☀️",
      text: "পরিষ্কার আকাশ"
    };
  }

  if (code === 1 || code === 2) {
    return {
      icon: "🌤️",
      text: "আংশিক মেঘলা"
    };
  }

  if (code === 3) {
    return {
      icon: "☁️",
      text: "মেঘলা"
    };
  }

  if (
    code === 45 ||
    code === 48
  ) {
    return {
      icon: "🌫️",
      text: "কুয়াশা"
    };
  }

  if (
    code === 51 ||
    code === 53 ||
    code === 55
  ) {
    return {
      icon: "🌦️",
      text: "হালকা গুঁড়ি বৃষ্টি"
    };
  }

  if (
    code === 61 ||
    code === 63 ||
    code === 65
  ) {
    return {
      icon: "🌧️",
      text: "বৃষ্টি"
    };
  }

  if (
    code === 71 ||
    code === 73 ||
    code === 75
  ) {
    return {
      icon: "❄️",
      text: "তুষারপাত"
    };
  }

  if (
    code === 80 ||
    code === 81 ||
    code === 82
  ) {
    return {
      icon: "🌦️",
      text: "বৃষ্টির ঝরনা"
    };
  }

  if (
    code === 95 ||
    code === 96 ||
    code === 99
  ) {
    return {
      icon: "⛈️",
      text: "বজ্রঝড়"
    };
  }

  return {
    icon: "🌤️",
    text: "আবহাওয়া"
  };

}


/* =========================
   GET LIVE WEATHER
========================= */

async function showWeather() {

  const city =
    document.getElementById("city").value;

  const result =
    document.getElementById("weatherResult");

  const location =
    cityCoordinates[city];


  /* Loading */

  result.innerHTML = `

    <div class="weather-icon">
      ⏳
    </div>

    <h3>
      আবহাওয়ার তথ্য নেওয়া হচ্ছে...
    </h3>

    <p>
      একটু অপেক্ষা করুন 🌱
    </p>

  `;


  try {

    const url =
      `https://api.open-meteo.com/v1/forecast` +
      `?latitude=${location.lat}` +
      `&longitude=${location.lon}` +
      `&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m` +
      `&temperature_unit=celsius` +
      `&wind_speed_unit=kmh` +
      `&timezone=Asia%2FDhaka`;


    const response =
      await fetch(url);


    if (!response.ok) {
      throw new Error("Weather API error");
    }


    const data =
      await response.json();


    const current =
      data.current;


    const weather =
      getWeatherInfo(
        current.weather_code
      );


    result.innerHTML = `

      <div class="weather-icon">
        ${weather.icon}
      </div>

      <h3>
        ${location.name}
      </h3>

      <p>
        ${weather.text}
      </p>

      <h2>
        ${current.temperature_2m}°C
      </h2>

      <div class="info">

        💧 আর্দ্রতা:
        <strong>
          ${current.relative_humidity_2m}%
        </strong>

        <br><br>

        🌧️ বৃষ্টি:
        <strong>
          ${current.precipitation} mm
        </strong>

        <br><br>

        💨 বাতাস:
        <strong>
          ${current.wind_speed_10m} km/h
        </strong>

      </div>

      <div class="info">

        🕐 আপডেট:
        <strong>
          ${current.time.replace("T", " ")}
        </strong>

      </div>

      <p style="margin-top:15px;font-size:12px;color:#718277;">
        Weather data by Open-Meteo
      </p>

    `;


  } catch (error) {

    console.error(error);


    result.innerHTML = `

      <div class="weather-icon">
        ❌
      </div>

      <h3>
        আবহাওয়ার তথ্য পাওয়া যায়নি
      </h3>

      <p>
        ইন্টারনেট connection check করুন
        এবং আবার চেষ্টা করুন।
      </p>

      <button
        onclick="showWeather()"
        class="calculate-btn"
      >
        🔄 আবার চেষ্টা করুন
      </button>

    `;

  }

}
