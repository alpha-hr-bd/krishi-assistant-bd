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


  const weatherData = {

    Dhaka: {
      icon: "🌤️",
      temp: "31°C",
      rain: "20%",
      humidity: "70%"
    },

    Chattogram: {
      icon: "🌦️",
      temp: "30°C",
      rain: "40%",
      humidity: "76%"
    },

    Rajshahi: {
      icon: "☀️",
      temp: "33°C",
      rain: "15%",
      humidity: "60%"
    },

    Khulna: {
      icon: "🌤️",
      temp: "32°C",
      rain: "25%",
      humidity: "68%"
    },

    Sylhet: {
      icon: "🌧️",
      temp: "29°C",
      rain: "55%",
      humidity: "82%"
    },

    Barishal: {
      icon: "🌦️",
      temp: "30°C",
      rain: "45%",
      humidity: "78%"
    },

    Rangpur: {
      icon: "🌤️",
      temp: "30°C",
      rain: "30%",
      humidity: "72%"
    },

    Mymensingh: {
      icon: "🌦️",
      temp: "30°C",
      rain: "35%",
      humidity: "74%"
    }

  };


  const data =
    weatherData[city];


  weatherResult.innerHTML = `

    <div class="weather-icon">
      ${data.icon}
    </div>

    <h3>
      ${city}
    </h3>

    <h2>
      ${data.temp}
    </h2>

    <p>
      🌧️ বৃষ্টির সম্ভাবনা:
      <strong>${data.rain}</strong>
    </p>

    <p>
      💧 আর্দ্রতা:
      <strong>${data.humidity}</strong>
    </p>

    <div class="info">
      ℹ️ এটি demo data।
      বাস্তব আবহাওয়ার জন্য API যুক্ত করতে হবে।
    </div>

  `;

}
