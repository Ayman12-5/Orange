export const OFFERS = [
  {
    id: "20-lines-100-egp",
    title: "عرض 20 خط",
    price: 100,
    lines: 20,
    internet: "13 جيجابايت",
    duration: "3 شهور",
    firstMonthPayment: 100,
    followingMonthsPayment: 150,
    notes: ["الأسعار شاملة الضريبة", "العرض ساري لفترة محدودة"],
    isBestOffer: true,
    isPopular: false
  },
  {
    id: "20-lines-200-egp",
    title: "عرض 20 خط بلس",
    price: 200,
    lines: 20,
    internet: "30 جيجابايت",
    duration: "3 شهور",
    firstMonthPayment: 200,
    followingMonthsPayment: 250,
    notes: ["دقائق مجانية داخل الشبكة", "باقة إنترنت قابلة للترحيل"],
    isBestOffer: false,
    isPopular: true
  },
  {
    id: "10-lines-80-egp",
    title: "عرض 10 خطوط",
    price: 80,
    lines: 10,
    internet: "10 جيجابايت",
    duration: "6 شهور",
    firstMonthPayment: 80,
    followingMonthsPayment: 100,
    notes: ["رقم مميز هدية", "500 دقيقة شبكات أخرى"],
    isBestOffer: false,
    isPopular: false
  }
];

export const PRODUCT_CATEGORIES = [
  { id: "phones", title: "موبايلات" },
  { id: "chargers", title: "شواحن" },
  { id: "earphones", title: "سماعات" },
  { id: "accessories", title: "إكسسوارات" }
];

export const PRODUCTS = [
  {
    id: "iphone-15",
    categoryId: "phones",
    name: "آيفون 15 برو",
    description: "شاشة 6.1 بوصة، معالج A17، كاميرا 48 ميجابكسل",
    price: 45000,
    oldPrice: 48000,
    image: "https://picsum.photos/seed/iphone/400/400"
  },
  {
    id: "samsung-s24",
    categoryId: "phones",
    name: "سامسونج S24 ألترا",
    description: "شاشة 6.8 بوصة، كاميرا 200 ميجابكسل، قلم S-Pen",
    price: 42000,
    oldPrice: 45000,
    image: "https://picsum.photos/seed/samsung/400/400"
  },
  {
    id: "fast-charger-20w",
    categoryId: "chargers",
    name: "شاحن سريع 20 وات",
    description: "يدعم الشحن السريع PD لمختلف الأجهزة",
    price: 350,
    oldPrice: 500,
    image: "https://picsum.photos/seed/charger/400/400"
  },
  {
    id: "wireless-earbuds",
    categoryId: "earphones",
    name: "سماعات بلوتوث لاسلكية",
    description: "بطارية تدوم 20 ساعة مع عزل ضوضاء",
    price: 800,
    oldPrice: 1200,
    image: "https://picsum.photos/seed/earphones/400/400"
  },
  {
    id: "silicone-case",
    categoryId: "accessories",
    name: "جراب سيليكون أصلي",
    description: "حماية كاملة مع ملمس ناعم بألوان متعددة",
    price: 200,
    oldPrice: null,
    image: "https://picsum.photos/seed/case/400/400"
  }
];

export const STATS = [
  { label: "عميل سعيد", value: "+15K" },
  { label: "عرض متاح", value: "50+" },
  { label: "منتج أصلي", value: "200+" }
];

export const REVIEWS = [
  { id: 1, name: "أحمد محمود", text: "خدمة ممتازة وعروض الخطوط وفرتلي كتير في الشركة.", rating: 5 },
  { id: 2, name: "منى علي", text: "اشتريت موبايل والإكسسوارات بأسعار أحسن من السوق، والضمان حقيقي.", rating: 5 },
  { id: 3, name: "كريم حسن", text: "تجاوب سريع جداً على الواتساب وتسليم الخطوط كان في نفس اليوم.", rating: 4 }
];
