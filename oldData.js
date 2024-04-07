export let product = {
  "path": "alpha-device",
  "price": 399,
  "types": [
    {
      value: "upperTank",
      name: "فايبر جلاس / بولي ايثيلين",
      image: "/assets/images/Water level notification.webp",
    },
    {
      value: "lowerTank",
      name: "خرساني",
      image: "/assets/images/Water level notification.webp",
    },
  ],
  features: [
    "شريحة بيانات مجانية بدون اشتراك سنوي",
    "ضمان شامل لمدة سنتين",
    " أحقية استرجاع كامل المبلغ خلال 30 يوم",
  ],
  values_titles: [
    "الاشتراك الشهري",
    "التوصيل والتركيب",
    "تنبيهات بإنخفاض الماء",
    "إحصائيات لمستوى الماء ",
    "قراءات بالمتر المكعب",
    "عدد المستخدمين",
    // "معدل القراءة",
  ],
  "plans": [
    {
      value: "FREE",
      "name": "الباقة البدائية",
      value: "basic",
      "price": 399,

      values: [
        "19 ريال",
        "true",
        "true",
        "true",
        "true",
        "3",
        // "true",
        // "كل 24 ساعة",
      ],
    },
    {
      "name": "الباقة الأساسية",
      value: "regular",
      "price": 799,

      values: [
        "بدون اشتراك",
        "true",
        "true",
        "true",
        "true",
        "3",
        // "true",
        // "كل ساعة",
      ],
    },
    {
      "name": "الباقة الإحترافية",
      value: "premium",
      "price": 999,

      values: [
        "بدون اشتراك",
        "true",
        "true",
        "true",
        "true",
        "5+",
        // "true",
        // "كل ساعة",
      ],
    },
  ],
  "additions": [
    {
      "name": "تحديث القراءة",
      "value": "dataPlan",
      "type": "radio",
      selected: [],
      "options": [
        {
          "name": "قراءة مستوى الماء كل 24 ساعة",
          "value": "free",
          "price": "مجاني",
        },
        // {
        //   "name": "قراءة مستوى الماء كل ساعة",
        //   "value": "1hour",

        //   "price": 99
        // },
        // {
        //   "name": "قراءة مستوى الماء كل 30 دقيقة",
        //   "value": "halfHour",
        //   "price": 399
        // }
      ],
    },
  ],
  "options": [
    {
      "value": "shippingMethod",
      "name": "التوصيل",
      selected: [],

      "options": [

        {
          "name": "توصيل عادي ( 5 إلى 7 أيام عمل ) ",
          "price": "مجاني",
        },
      ],
    },
    {

      "value": "installationMethod",
      "fieldValue": "installationCompany",
      "name": "التركيب",
      "note": "* التركيب متاح داخل مدينة الرياض ومكة المكرمة وجدة  والطائف والمنطقة الشرقية",
      "type": "radio",
      selected: [],
      "options": [
        {
          "company": "ODA",
          "name": "تركيب مع اودا",
          "price": 150,
          "value": "regular",
          "image": "https://pbs.twimg.com/profile_images/1432108240670691337/hpTT37gd_400x400.jpg",
        },
        {
          "value": "without",

          "name": "بدون تركيب",
          "price": "مجاني",
        },
      ],
    },

  ],
}