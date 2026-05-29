const cities = [
  ["new-york", "纽约", "美国", "北美", 40.71, -74.01, 100, 2100, 17.2, 8],
  ["boston", "波士顿", "美国", "北美", 42.36, -71.06, 95, 2050, 16.7, 7],
  ["san-francisco", "旧金山", "美国", "北美", 37.77, -122.42, 105, 2250, 18.8, 9],
  ["los-angeles", "洛杉矶", "美国", "北美", 34.05, -118.24, 90, 1900, 16.4, 8],
  ["chicago", "芝加哥", "美国", "北美", 41.88, -87.63, 76, 1650, 15.1, 7],
  ["seattle", "西雅图", "美国", "北美", 47.61, -122.33, 88, 1900, 17.4, 8],
  ["austin", "奥斯汀", "美国", "北美", 30.27, -97.74, 72, 1500, 14.5, 7],
  ["toronto", "多伦多", "加拿大", "北美", 43.65, -79.38, 79, 1700, 15.2, 7],
  ["vancouver", "温哥华", "加拿大", "北美", 49.28, -123.12, 83, 1800, 15.8, 7],
  ["montreal", "蒙特利尔", "加拿大", "北美", 45.50, -73.57, 64, 1350, 14.2, 6],
  ["mexico-city", "墨西哥城", "墨西哥", "北美", 19.43, -99.13, 43, 720, 3.8, 14],
  ["guadalajara", "瓜达拉哈拉", "墨西哥", "北美", 20.67, -103.35, 36, 610, 3.3, 14],

  ["london", "伦敦", "英国", "欧洲", 51.51, -0.13, 86, 1850, 14.7, 9],
  ["paris", "巴黎", "法国", "欧洲", 48.86, 2.35, 78, 1600, 12.6, 8],
  ["berlin", "柏林", "德国", "欧洲", 52.52, 13.40, 65, 1250, 13.0, 6],
  ["munich", "慕尼黑", "德国", "欧洲", 48.14, 11.58, 75, 1500, 14.0, 6],
  ["amsterdam", "阿姆斯特丹", "荷兰", "欧洲", 52.37, 4.90, 76, 1600, 13.7, 5],
  ["rotterdam", "鹿特丹", "荷兰", "欧洲", 51.92, 4.48, 65, 1350, 12.9, 5],
  ["copenhagen", "哥本哈根", "丹麦", "欧洲", 55.68, 12.57, 84, 1700, 17.2, 4],
  ["stockholm", "斯德哥尔摩", "瑞典", "欧洲", 59.33, 18.07, 75, 1500, 15.4, 4],
  ["oslo", "奥斯陆", "挪威", "欧洲", 59.91, 10.75, 89, 1800, 18.6, 4],
  ["zurich", "苏黎世", "瑞士", "欧洲", 47.38, 8.54, 105, 2350, 22.0, 5],
  ["geneva", "日内瓦", "瑞士", "欧洲", 46.20, 6.15, 104, 2300, 21.6, 5],
  ["vienna", "维也纳", "奥地利", "欧洲", 48.21, 16.37, 64, 1250, 12.5, 7],
  ["madrid", "马德里", "西班牙", "欧洲", 40.42, -3.70, 58, 1100, 9.6, 8],
  ["barcelona", "巴塞罗那", "西班牙", "欧洲", 41.39, 2.17, 61, 1200, 9.8, 8],
  ["milan", "米兰", "意大利", "欧洲", 45.46, 9.19, 64, 1280, 10.2, 10],
  ["rome", "罗马", "意大利", "欧洲", 41.90, 12.50, 59, 1150, 9.5, 10],
  ["lisbon", "里斯本", "葡萄牙", "欧洲", 38.72, -9.14, 53, 980, 8.1, 9],
  ["dublin", "都柏林", "爱尔兰", "欧洲", 53.35, -6.26, 82, 1800, 14.3, 7],
  ["warsaw", "华沙", "波兰", "欧洲", 52.23, 21.01, 41, 760, 6.1, 8],
  ["prague", "布拉格", "捷克", "欧洲", 50.08, 14.44, 47, 860, 7.1, 8],
  ["budapest", "布达佩斯", "匈牙利", "欧洲", 47.50, 19.04, 38, 690, 5.4, 9],
  ["athens", "雅典", "希腊", "欧洲", 37.98, 23.73, 43, 760, 5.8, 12],
  ["istanbul", "伊斯坦布尔", "土耳其", "欧洲", 41.01, 28.98, 37, 680, 4.7, 18],
  ["helsinki", "赫尔辛基", "芬兰", "欧洲", 60.17, 24.94, 72, 1450, 14.9, 3],
  ["brussels", "布鲁塞尔", "比利时", "欧洲", 50.85, 4.35, 68, 1350, 12.4, 6],

  ["tokyo", "东京", "日本", "亚洲", 35.68, 139.65, 74, 1450, 9.4, 8],
  ["osaka", "大阪", "日本", "亚洲", 34.69, 135.50, 65, 1250, 8.8, 8],
  ["seoul", "首尔", "韩国", "亚洲", 37.57, 126.98, 68, 1300, 8.9, 13],
  ["busan", "釜山", "韩国", "亚洲", 35.18, 129.08, 56, 1050, 7.9, 13],
  ["beijing", "北京", "中国", "亚洲", 39.90, 116.41, 49, 850, 5.5, 11],
  ["shanghai", "上海", "中国", "亚洲", 31.23, 121.47, 56, 1050, 6.4, 10],
  ["shenzhen", "深圳", "中国", "亚洲", 22.54, 114.06, 54, 980, 6.2, 10],
  ["guangzhou", "广州", "中国", "亚洲", 23.13, 113.26, 47, 820, 5.4, 10],
  ["hong-kong", "香港", "中国香港", "亚洲", 22.32, 114.17, 92, 1800, 9.8, 8],
  ["taipei", "台北", "中国台湾", "亚洲", 25.03, 121.56, 57, 1050, 6.8, 7],
  ["singapore", "新加坡", "新加坡", "亚洲", 1.35, 103.82, 84, 1600, 10.2, 9],

  ["bangkok", "曼谷", "泰国", "东南亚", 13.76, 100.50, 40, 690, 3.5, 14],
  ["chiang-mai", "清迈", "泰国", "东南亚", 18.79, 98.99, 29, 520, 2.8, 14],
  ["kuala-lumpur", "吉隆坡", "马来西亚", "东南亚", 3.14, 101.69, 36, 650, 3.4, 12],
  ["penang", "槟城", "马来西亚", "东南亚", 5.41, 100.33, 31, 560, 3.0, 12],
  ["jakarta", "雅加达", "印度尼西亚", "东南亚", -6.21, 106.85, 34, 610, 2.9, 17],
  ["bandung", "万隆", "印度尼西亚", "东南亚", -6.92, 107.62, 27, 480, 2.4, 17],
  ["manila", "马尼拉", "菲律宾", "东南亚", 14.60, 120.98, 37, 650, 3.0, 16],
  ["cebu", "宿务", "菲律宾", "东南亚", 10.32, 123.89, 30, 520, 2.6, 16],
  ["hanoi", "河内", "越南", "东南亚", 21.03, 105.85, 28, 480, 2.3, 13],
  ["ho-chi-minh", "胡志明市", "越南", "东南亚", 10.82, 106.63, 31, 540, 2.6, 13],
  ["phnom-penh", "金边", "柬埔寨", "东南亚", 11.56, 104.93, 26, 460, 2.1, 18],

  ["delhi", "德里", "印度", "南亚", 28.61, 77.21, 25, 420, 1.7, 21],
  ["mumbai", "孟买", "印度", "南亚", 19.08, 72.88, 34, 610, 2.2, 21],
  ["bengaluru", "班加罗尔", "印度", "南亚", 12.97, 77.59, 31, 560, 2.1, 20],
  ["chennai", "金奈", "印度", "南亚", 13.08, 80.27, 27, 480, 1.9, 20],
  ["kolkata", "加尔各答", "印度", "南亚", 22.57, 88.36, 24, 390, 1.6, 21],
  ["dhaka", "达卡", "孟加拉国", "南亚", 23.81, 90.41, 22, 360, 1.4, 24],
  ["colombo", "科伦坡", "斯里兰卡", "南亚", 6.93, 79.86, 26, 430, 1.6, 22],
  ["kathmandu", "加德满都", "尼泊尔", "南亚", 27.71, 85.32, 21, 340, 1.3, 23],
  ["lahore", "拉合尔", "巴基斯坦", "南亚", 31.52, 74.36, 22, 360, 1.4, 25],
  ["karachi", "卡拉奇", "巴基斯坦", "南亚", 24.86, 67.01, 23, 380, 1.5, 25],

  ["dubai", "迪拜", "阿联酋", "中东与非洲", 25.20, 55.27, 73, 1450, 8.2, 12],
  ["abu-dhabi", "阿布扎比", "中东与非洲", "中东与非洲", 24.45, 54.38, 75, 1500, 8.4, 12],
  ["doha", "多哈", "卡塔尔", "中东与非洲", 25.29, 51.53, 78, 1550, 8.5, 11],
  ["tel-aviv", "特拉维夫", "以色列", "中东与非洲", 32.09, 34.78, 86, 1750, 11.6, 10],
  ["riyadh", "利雅得", "沙特阿拉伯", "中东与非洲", 24.71, 46.68, 58, 1100, 6.2, 17],
  ["jeddah", "吉达", "沙特阿拉伯", "中东与非洲", 21.54, 39.17, 50, 950, 5.4, 17],
  ["cairo", "开罗", "埃及", "中东与非洲", 30.04, 31.24, 23, 380, 1.4, 24],
  ["casablanca", "卡萨布兰卡", "摩洛哥", "中东与非洲", 33.57, -7.59, 31, 520, 2.0, 23],
  ["nairobi", "内罗毕", "肯尼亚", "中东与非洲", -1.29, 36.82, 29, 500, 1.9, 26],
  ["johannesburg", "约翰内斯堡", "南非", "中东与非洲", -26.20, 28.04, 36, 650, 2.7, 20],
  ["cape-town", "开普敦", "南非", "中东与非洲", -33.92, 18.42, 38, 700, 3.0, 20],
  ["lagos", "拉各斯", "尼日利亚", "中东与非洲", 6.52, 3.38, 34, 620, 2.2, 28],
  ["accra", "阿克拉", "加纳", "中东与非洲", 5.56, -0.20, 32, 560, 2.1, 24],
  ["tunis", "突尼斯", "突尼斯", "中东与非洲", 36.81, 10.18, 27, 450, 1.7, 22],
  ["addis-ababa", "亚的斯亚贝巴", "埃塞俄比亚", "中东与非洲", 8.98, 38.76, 22, 360, 1.3, 29],

  ["sao-paulo", "圣保罗", "巴西", "拉美", -23.55, -46.63, 45, 760, 3.4, 18],
  ["rio", "里约热内卢", "巴西", "拉美", -22.91, -43.17, 44, 730, 3.2, 18],
  ["buenos-aires", "布宜诺斯艾利斯", "阿根廷", "拉美", -34.60, -58.38, 35, 610, 2.7, 17],
  ["santiago", "圣地亚哥", "智利", "拉美", -33.45, -70.66, 48, 820, 4.1, 16],
  ["lima", "利马", "秘鲁", "拉美", -12.05, -77.04, 34, 580, 2.6, 18],
  ["bogota", "波哥大", "哥伦比亚", "拉美", 4.71, -74.07, 32, 550, 2.4, 19],
  ["medellin", "麦德林", "哥伦比亚", "拉美", 6.25, -75.56, 29, 500, 2.2, 19],
  ["quito", "基多", "厄瓜多尔", "拉美", -0.18, -78.47, 30, 520, 2.3, 18],
  ["montevideo", "蒙得维的亚", "乌拉圭", "拉美", -34.90, -56.16, 48, 830, 4.3, 14],
  ["panama-city", "巴拿马城", "巴拿马", "拉美", 8.98, -79.52, 51, 900, 4.5, 16],
  ["san-jose", "圣何塞", "哥斯达黎加", "拉美", 9.93, -84.08, 45, 780, 3.8, 16],

  ["sydney", "悉尼", "澳大利亚", "大洋洲", -33.87, 151.21, 88, 1850, 16.4, 7],
  ["melbourne", "墨尔本", "澳大利亚", "大洋洲", -37.81, 144.96, 82, 1700, 15.8, 7],
  ["brisbane", "布里斯班", "澳大利亚", "大洋洲", -27.47, 153.03, 76, 1550, 15.0, 7],
  ["auckland", "奥克兰", "新西兰", "大洋洲", -36.85, 174.76, 78, 1600, 14.5, 8],
  ["wellington", "惠灵顿", "新西兰", "大洋洲", -41.29, 174.78, 75, 1500, 14.0, 8]
].map(([id, city, country, region, lat, lon, costIndex, budget, wage, genderGap]) => ({
  id,
  city,
  country,
  region,
  lat,
  lon,
  costIndex,
  budget,
  wage,
  genderGap
}));

const regionColors = {
  "北美": "#356dff",
  "欧洲": "#7b4fe8",
  "亚洲": "#0aa39a",
  "东南亚": "#00a6c8",
  "南亚": "#f0b429",
  "中东与非洲": "#e85d4f",
  "拉美": "#f26a2e",
  "大洋洲": "#2f9e44"
};

const baskets = {
  campus: { label: "校园低成本", short: "校园" },
  coffee: { label: "咖啡甜品", short: "咖啡" },
  dinner: { label: "普通晚餐", short: "晚餐" },
  movie: { label: "电影晚餐", short: "电影" },
  premium: { label: "精致夜晚", short: "精致" }
};

const splitModes = {
  equal: "AA",
  male: "男生全付",
  female: "女生全付",
  income: "按收入比例"
};

const state = {
  selectedId: "shanghai",
  basket: "dinner",
  split: "equal",
  region: "全部",
  search: "",
  sort: "burden",
  dates: 2,
  customBudget: null,
  hoveredId: null
};

const dom = {
  regionFilter: document.querySelector("#regionFilter"),
  citySearch: document.querySelector("#citySearch"),
  clearSearch: document.querySelector("#clearSearch"),
  basketTabs: document.querySelector("#basketTabs"),
  splitTabs: document.querySelector("#splitTabs"),
  budgetInput: document.querySelector("#budgetInput"),
  budgetReadout: document.querySelector("#budgetReadout"),
  datesInput: document.querySelector("#datesInput"),
  datesReadout: document.querySelector("#datesReadout"),
  canvas: document.querySelector("#worldMap"),
  tooltip: document.querySelector("#mapTooltip"),
  legend: document.querySelector("#mapLegend"),
  selectedRegionPill: document.querySelector("#selectedRegionPill"),
  selectedCity: document.querySelector("#selectedCity"),
  selectedCountry: document.querySelector("#selectedCountry"),
  dateCost: document.querySelector("#dateCost"),
  budgetShare: document.querySelector("#budgetShare"),
  workHours: document.querySelector("#workHours"),
  monthlyDating: document.querySelector("#monthlyDating"),
  pressureFill: document.querySelector("#pressureFill"),
  pressureLabel: document.querySelector("#pressureLabel"),
  cityNarrative: document.querySelector("#cityNarrative"),
  medianCost: document.querySelector("#medianCost"),
  hotspotCity: document.querySelector("#hotspotCity"),
  leaderboard: document.querySelector("#leaderboard"),
  rankToggle: document.querySelector("#rankToggle"),
  receiptLines: document.querySelector("#receiptLines"),
  basketBadge: document.querySelector("#basketBadge"),
  splitBadge: document.querySelector("#splitBadge"),
  malePay: document.querySelector("#malePay"),
  femalePay: document.querySelector("#femalePay"),
  maleBar: document.querySelector("#maleBar"),
  femaleBar: document.querySelector("#femaleBar"),
  maleBurden: document.querySelector("#maleBurden"),
  femaleBurden: document.querySelector("#femaleBurden"),
  splitNarrative: document.querySelector("#splitNarrative"),
  scatterPlot: document.querySelector("#scatterPlot"),
  cityTable: document.querySelector("#cityTable")
};

const ctx = dom.canvas.getContext("2d");

function money(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 0 : 1
  }).format(value);
}

function pct(value) {
  return `${value.toFixed(value >= 10 ? 0 : 1)}%`;
}

function hours(value) {
  return `${value.toFixed(value >= 10 ? 0 : 1)}h`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function round(value) {
  return Math.round(value * 10) / 10;
}

function selectedCity() {
  return cities.find((city) => city.id === state.selectedId) || cities[0];
}

function currentBudget(city = selectedCity()) {
  return state.customBudget ?? city.budget;
}

function priceLines(city) {
  const index = city.costIndex;
  const meal = round(index * 0.22);
  const coffee = round(Math.max(1.1, index * 0.055));
  const cinema = round(Math.max(2.2, index * 0.16));
  const transit = round(Math.max(0.35, index * 0.032));
  const snack = round(Math.max(0.9, index * 0.04));
  const drinks = round(Math.max(1.6, index * 0.095));
  const ride = round(Math.max(2.0, index * 0.11));
  const grooming = round(Math.max(2.5, index * 0.24));
  const gift = round(Math.max(1.5, index * 0.06));

  const basketMap = {
    campus: [
      ["校内餐/小吃 ×2", snack * 2],
      ["咖啡/奶茶 ×2", coffee * 2],
      ["公共交通 ×2", transit * 2],
      ["低成本活动", round(index * 0.02)]
    ],
    coffee: [
      ["咖啡/奶茶 ×2", coffee * 2],
      ["甜品/小食 ×2", snack * 2],
      ["公共交通 ×2", transit * 2]
    ],
    dinner: [
      ["学生友好餐厅 ×2", meal * 2],
      ["咖啡/饮品 ×1", coffee],
      ["公共交通 ×2", transit * 2]
    ],
    movie: [
      ["学生友好餐厅 ×2", meal * 2],
      ["电影票 ×2", cinema * 2],
      ["公共交通 ×2", transit * 2]
    ],
    premium: [
      ["更正式晚餐 ×2", round(meal * 2.2)],
      ["饮品 ×2", drinks * 2],
      ["网约车/夜间交通 ×2", ride * 2],
      ["打扮/护理", grooming],
      ["小礼物/花", gift]
    ]
  };

  return basketMap[state.basket];
}

function basketCost(city) {
  return round(priceLines(city).reduce((sum, [, value]) => sum + value, 0));
}

function metricsFor(city) {
  const cost = basketCost(city);
  const budget = currentBudget(city);
  const burden = (cost / budget) * 100;
  const work = cost / city.wage;
  return {
    cost,
    budget,
    burden,
    work,
    monthly: cost * state.dates
  };
}

function splitFor(city) {
  const { cost, budget } = metricsFor(city);
  const monthlyHours = 12 * 4.33;
  const baseIncome = city.wage * monthlyHours;
  const maleIncome = baseIncome * (1 + city.genderGap / 200);
  const femaleIncome = baseIncome * (1 - city.genderGap / 200);
  let male = cost / 2;
  let female = cost / 2;

  if (state.split === "male") {
    male = cost;
    female = 0;
  } else if (state.split === "female") {
    male = 0;
    female = cost;
  } else if (state.split === "income") {
    male = cost * (maleIncome / (maleIncome + femaleIncome));
    female = cost - male;
  }

  const maleFlex = budget * 0.22 + maleIncome * 0.35;
  const femaleFlex = budget * 0.22 + femaleIncome * 0.35;

  return {
    male,
    female,
    maleBurden: (male / maleFlex) * 100,
    femaleBurden: (female / femaleFlex) * 100,
    maleIncome,
    femaleIncome
  };
}

function filteredCities() {
  const term = state.search.trim().toLowerCase();
  return cities.filter((city) => {
    const regionMatch = state.region === "全部" || city.region === state.region;
    const textMatch =
      !term ||
      city.city.toLowerCase().includes(term) ||
      city.country.toLowerCase().includes(term) ||
      city.id.toLowerCase().includes(term);
    return regionMatch && textMatch;
  });
}

function sortedCities() {
  const data = filteredCities().map((city) => ({ city, metrics: metricsFor(city), split: splitFor(city) }));
  const sorters = {
    burden: (a, b) => b.metrics.burden - a.metrics.burden,
    cost: (a, b) => b.metrics.cost - a.metrics.cost,
    gap: (a, b) =>
      Math.abs(b.split.maleBurden - b.split.femaleBurden) -
      Math.abs(a.split.maleBurden - a.split.femaleBurden)
  };
  return data.sort(sorters[state.sort]);
}

function initControls() {
  const regions = ["全部", ...Object.keys(regionColors)];
  dom.regionFilter.innerHTML = regions.map((region) => `<option value="${region}">${region}</option>`).join("");

  dom.basketTabs.innerHTML = Object.entries(baskets)
    .map(([key, basket]) => `<button type="button" data-basket="${key}">${basket.label}</button>`)
    .join("");

  dom.splitTabs.innerHTML = Object.entries(splitModes)
    .map(([key, label]) => `<button type="button" data-split="${key}">${label}</button>`)
    .join("");

  dom.legend.innerHTML = Object.entries(regionColors)
    .map(([region, color]) => `<span><i style="background:${color}"></i>${region}</span>`)
    .join("");

  dom.regionFilter.addEventListener("change", (event) => {
    state.region = event.target.value;
    ensureSelectionInFilter();
    renderAll();
  });

  dom.citySearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    ensureSelectionInFilter();
    renderAll();
  });

  dom.clearSearch.addEventListener("click", () => {
    state.search = "";
    dom.citySearch.value = "";
    renderAll();
  });

  dom.basketTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-basket]");
    if (!button) return;
    state.basket = button.dataset.basket;
    renderAll();
  });

  dom.splitTabs.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-split]");
    if (!button) return;
    state.split = button.dataset.split;
    renderAll();
  });

  dom.budgetInput.addEventListener("input", (event) => {
    state.customBudget = Number(event.target.value);
    renderAll(false);
  });

  dom.datesInput.addEventListener("input", (event) => {
    state.dates = Number(event.target.value);
    renderAll(false);
  });

  dom.rankToggle.addEventListener("click", () => {
    state.sort = state.sort === "burden" ? "cost" : state.sort === "cost" ? "gap" : "burden";
    dom.rankToggle.textContent =
      state.sort === "burden" ? "按负担排序" : state.sort === "cost" ? "按金额排序" : "按性别差排序";
    renderRankings();
    renderTable();
  });

  dom.canvas.addEventListener("mousemove", handleMapMove);
  dom.canvas.addEventListener("mouseleave", () => {
    state.hoveredId = null;
    dom.tooltip.style.display = "none";
    drawMap();
  });
  dom.canvas.addEventListener("click", () => {
    if (!state.hoveredId) return;
    selectCity(state.hoveredId);
  });
  window.addEventListener("resize", () => drawMap());
}

function ensureSelectionInFilter() {
  const visible = filteredCities();
  if (!visible.some((city) => city.id === state.selectedId) && visible[0]) {
    state.selectedId = visible[0].id;
    state.customBudget = visible[0].budget;
  }
}

function selectCity(id) {
  state.selectedId = id;
  state.customBudget = cities.find((city) => city.id === id).budget;
  renderAll();
}

function syncControls() {
  const city = selectedCity();
  dom.regionFilter.value = state.region;
  dom.budgetInput.value = currentBudget(city);
  dom.budgetReadout.textContent = money(currentBudget(city));
  dom.datesReadout.textContent = `${state.dates} 次`;
  dom.basketTabs.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.basket === state.basket);
  });
  dom.splitTabs.querySelectorAll("button").forEach((button) => {
    button.classList.toggle("active", button.dataset.split === state.split);
  });
}

function renderSummary() {
  const city = selectedCity();
  const metrics = metricsFor(city);
  const split = splitFor(city);
  const regionColor = regionColors[city.region] || "#356dff";

  dom.selectedRegionPill.textContent = city.region;
  dom.selectedRegionPill.style.background = regionColor;
  dom.selectedCity.textContent = city.city;
  dom.selectedCountry.textContent = `${city.country} · 生活成本指数 ${city.costIndex}`;
  dom.dateCost.textContent = money(metrics.cost);
  dom.budgetShare.textContent = pct(metrics.burden);
  dom.workHours.textContent = hours(metrics.work);
  dom.monthlyDating.textContent = money(metrics.monthly);

  const pressure = clamp(metrics.burden * 8, 6, 100);
  dom.pressureFill.style.width = `${pressure}%`;
  dom.pressureLabel.textContent = metrics.burden > 12 ? "High" : metrics.burden > 7 ? "Medium" : "Low";

  const genderDelta = Math.abs(split.maleBurden - split.femaleBurden);
  dom.cityNarrative.textContent =
    `${city.city} 的${baskets[state.basket].label}约会约为 ${money(metrics.cost)}，相当于学生月生活预算的 ${pct(metrics.burden)}。` +
    `按当前付款模式，男女可用现金压力差约 ${pct(genderDelta)}，一次约会需要约 ${hours(metrics.work)} 的学生打工时间。`;
}

function renderGlobalStats() {
  const values = filteredCities().map((city) => metricsFor(city).cost).sort((a, b) => a - b);
  if (!values.length) return;
  const median = values[Math.floor(values.length / 2)];
  const top = sortedCities()[0];
  dom.medianCost.textContent = money(median);
  dom.hotspotCity.textContent = top.city.city;
}

function renderReceipt() {
  const city = selectedCity();
  const lines = priceLines(city);
  dom.basketBadge.textContent = baskets[state.basket].label;
  dom.receiptLines.innerHTML = lines
    .map(([label, value]) => `<div class="receipt-line"><span>${label}</span><strong>${money(value)}</strong></div>`)
    .join("");
}

function renderSplit() {
  const city = selectedCity();
  const split = splitFor(city);
  const total = Math.max(split.male, split.female, 1);
  dom.splitBadge.textContent = splitModes[state.split];
  dom.malePay.textContent = money(split.male);
  dom.femalePay.textContent = money(split.female);
  dom.maleBar.style.width = `${(split.male / total) * 100}%`;
  dom.femaleBar.style.width = `${(split.female / total) * 100}%`;
  dom.maleBurden.textContent = `${pct(split.maleBurden)} 可用现金压力`;
  dom.femaleBurden.textContent = `${pct(split.femaleBurden)} 可用现金压力`;

  const ratio = split.male + split.female === 0 ? 0 : (split.male / (split.male + split.female)) * 100;
  dom.splitNarrative.textContent =
    `当前模式下男生承担 ${pct(ratio)}、女生承担 ${pct(100 - ratio)}。` +
    `收入比例分摊使用本地学生打工收入和性别收入差代理，不代表“应该由谁付钱”。`;
}

function renderRankings() {
  const rows = sortedCities().slice(0, 12);
  const maxValue = Math.max(
    ...rows.map((row) =>
      state.sort === "cost"
        ? row.metrics.cost
        : state.sort === "gap"
          ? Math.abs(row.split.maleBurden - row.split.femaleBurden)
          : row.metrics.burden
    ),
    1
  );

  dom.leaderboard.innerHTML = rows
    .map((row, index) => {
      const value =
        state.sort === "cost"
          ? row.metrics.cost
          : state.sort === "gap"
            ? Math.abs(row.split.maleBurden - row.split.femaleBurden)
            : row.metrics.burden;
      const label = state.sort === "cost" ? money(value) : pct(value);
      const width = (value / maxValue) * 100;
      return `
        <div class="rank-row">
          <button type="button" data-city="${row.city.id}" aria-label="选择 ${row.city.city}">
            <span class="rank-index">${index + 1}</span>
            <span class="rank-name"><strong>${row.city.city}</strong><small>${row.city.country} · ${row.city.region}</small></span>
            <span class="rank-value">${label}</span>
            <span class="rank-track"><span style="width:${width}%"></span></span>
          </button>
        </div>
      `;
    })
    .join("");

  dom.leaderboard.querySelectorAll("button[data-city]").forEach((button) => {
    button.addEventListener("click", () => selectCity(button.dataset.city));
  });
}

function renderScatter() {
  const data = filteredCities().map((city) => ({ city, metrics: metricsFor(city) }));
  const maxCost = Math.max(...data.map((d) => d.metrics.cost), 1);
  const maxBurden = Math.max(...data.map((d) => d.metrics.burden), 1);

  dom.scatterPlot.innerHTML = `<span class="axis-label y">预算占比</span><span class="axis-label x">约会成本</span>`;

  data.forEach(({ city, metrics }) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `scatter-dot${city.id === state.selectedId ? " selected" : ""}`;
    dot.style.left = `${8 + (metrics.cost / maxCost) * 86}%`;
    dot.style.bottom = `${10 + (metrics.burden / maxBurden) * 80}%`;
    dot.style.background = regionColors[city.region] || "#356dff";
    dot.title = `${city.city}: ${money(metrics.cost)}, ${pct(metrics.burden)}`;
    dot.setAttribute("aria-label", dot.title);
    dot.addEventListener("click", () => selectCity(city.id));
    dom.scatterPlot.appendChild(dot);
  });
}

function renderTable() {
  const rows = sortedCities().slice(0, 40);
  dom.cityTable.innerHTML = rows
    .map((row) => {
      const delta = Math.abs(row.split.maleBurden - row.split.femaleBurden);
      return `
        <tr data-city="${row.city.id}" class="${row.city.id === state.selectedId ? "selected" : ""}">
          <td><strong>${row.city.city}</strong><br><small>${row.city.country}</small></td>
          <td>${row.city.region}</td>
          <td>${money(row.metrics.cost)}</td>
          <td>${pct(row.metrics.burden)}</td>
          <td>${hours(row.metrics.work)}</td>
          <td>${pct(delta)}</td>
        </tr>
      `;
    })
    .join("");

  dom.cityTable.querySelectorAll("tr[data-city]").forEach((row) => {
    row.addEventListener("click", () => selectCity(row.dataset.city));
  });
}

function project(lon, lat, width, height) {
  return {
    x: ((lon + 180) / 360) * width,
    y: ((90 - lat) / 180) * height
  };
}

function drawPolygon(points, width, height) {
  ctx.beginPath();
  points.forEach(([lon, lat], index) => {
    const point = project(lon, lat, width, height);
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  ctx.fill();
}

function resizeCanvas() {
  const rect = dom.canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const width = Math.max(320, rect.width);
  const height = Math.max(360, rect.height);
  const nextWidth = Math.floor(width * dpr);
  const nextHeight = Math.floor(height * dpr);
  if (dom.canvas.width !== nextWidth || dom.canvas.height !== nextHeight) {
    dom.canvas.width = nextWidth;
    dom.canvas.height = nextHeight;
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { width, height };
}

function drawMap() {
  const { width, height } = resizeCanvas();
  ctx.clearRect(0, 0, width, height);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#eef5ff");
  gradient.addColorStop(0.52, "#f9fbff");
  gradient.addColorStop(1, "#edf8f5");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(101, 112, 132, 0.16)";
  ctx.lineWidth = 1;
  for (let lon = -150; lon <= 150; lon += 30) {
    const a = project(lon, 85, width, height);
    const b = project(lon, -60, width, height);
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }
  for (let lat = -60; lat <= 60; lat += 30) {
    const a = project(-180, lat, width, height);
    const b = project(180, lat, width, height);
    ctx.beginPath();
    ctx.moveTo(a.x, a.y);
    ctx.lineTo(b.x, b.y);
    ctx.stroke();
  }

  ctx.fillStyle = "rgba(53, 109, 255, 0.07)";
  [
    [[-165, 70], [-55, 72], [-50, 18], [-88, 7], [-120, 22], [-136, 52]],
    [[-82, 12], [-36, 5], [-45, -55], [-74, -54], [-81, -20]],
    [[-12, 70], [42, 70], [45, 35], [-10, 35]],
    [[-20, 35], [52, 30], [45, -35], [14, -35], [-18, -5]],
    [[35, 70], [180, 66], [170, 5], [103, -10], [60, 5], [39, 28]],
    [[110, -10], [180, -10], [180, -48], [105, -45]]
  ].forEach((shape) => drawPolygon(shape, width, height));

  const visible = filteredCities();
  visible.forEach((city) => {
    const point = project(city.lon, city.lat, width, height);
    const metrics = metricsFor(city);
    const radius = city.id === state.selectedId ? 9 : city.id === state.hoveredId ? 8 : clamp(3 + metrics.cost / 18, 4, 8);
    ctx.beginPath();
    ctx.fillStyle = regionColors[city.region] || "#356dff";
    ctx.globalAlpha = city.id === state.selectedId || city.id === state.hoveredId ? 1 : 0.78;
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
    ctx.lineWidth = city.id === state.selectedId ? 4 : 2;
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();

    if (city.id === state.selectedId) {
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius + 8, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(53, 109, 255, 0.35)";
      ctx.lineWidth = 3;
      ctx.stroke();
    }
  });
}

function handleMapMove(event) {
  const { width, height } = dom.canvas.getBoundingClientRect();
  const rect = dom.canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  let closest = null;
  let minDistance = 18;

  filteredCities().forEach((city) => {
    const point = project(city.lon, city.lat, width, height);
    const distance = Math.hypot(point.x - x, point.y - y);
    if (distance < minDistance) {
      minDistance = distance;
      closest = city;
    }
  });

  state.hoveredId = closest?.id ?? null;
  drawMap();

  if (!closest) {
    dom.tooltip.style.display = "none";
    return;
  }

  const metrics = metricsFor(closest);
  dom.tooltip.innerHTML = `<strong>${closest.city}</strong><span>${closest.country} · ${closest.region}</span><span>${money(metrics.cost)} · ${pct(metrics.burden)} 月预算</span>`;
  dom.tooltip.style.display = "block";
  dom.tooltip.style.left = `${clamp(x + 14, 8, rect.width - 205)}px`;
  dom.tooltip.style.top = `${clamp(y + 14, 8, rect.height - 96)}px`;
}

function renderAll(syncBudget = true) {
  if (syncBudget && state.customBudget === null) {
    state.customBudget = selectedCity().budget;
  }
  syncControls();
  renderSummary();
  renderGlobalStats();
  renderReceipt();
  renderSplit();
  renderRankings();
  renderScatter();
  renderTable();
  drawMap();
}

initControls();
state.customBudget = selectedCity().budget;
renderAll();
