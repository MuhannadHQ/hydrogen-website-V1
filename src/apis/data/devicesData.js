import { ControlPump } from "assets/icons/ControlPump"
import { ControlWaterStream } from "assets/icons/ControlWaterStream"
import { Devices } from "assets/icons/Devices"
import { LeakDetection } from "assets/icons/LeakDetection"
import { Notification } from "assets/icons/Notification"
import { TankCar } from "assets/icons/TankCar"
import { Warning } from "assets/icons/Warning"
import { WaterLevel } from "assets/icons/WaterLevel"
import alphaApp from "assets/images/alpha-1.png"
import alphaBook from "assets/images/alpha-guide.png"
import alpha from "assets/images/alpha-2.png"
import lamdaApp from "assets/images/lamda-app.png"
import lamda from "assets/images/lamda.png"

export const lastDateUpdated = "10/2/2023"

export const devices = {
  // lamda: {
  //   _id: "device-2",
  //   name: "lamda",
  //   path: "/lamda",
  //   buy_path: "cart",
  //   title: "جهاز لامدا",
  //   description: "تحكم بفاتورة الماء بكل سهولة",
  //   price: "399 ر.س",
  //   images: [
  //     {
  //       src: lamdaApp.src,
  //       width: "196px",
  //     },
  //     {
  //       src: lamda.src,
  //       width: "390px",
  //     },
  //   ],
  //   guarantees: [
  //     "ضمان لمدة سنتين",
  //     "أحقية استرجاع كامل المبلغ خلال 30 يوم",
  //     "ضمان توصيل وتركيب مجاني",
  //   ],
  //   features: [
  //     {
  //       title: "مراقبة لمستوى ماء الخزان",
  //       icon: <WaterLevel />,
  //       description: "يقوم الجهاز بإرسال مستوى الماء بشكل دوري عبر تطبيق الجوال",
  //     },
  //     {
  //       title: "تحكم بتدفق ماء الخزان",
  //       icon: <ControlWaterStream />,
  //       description: "بإمكانك التحكم بتدفق مياه الخزان أو جدولتها عبر تطبيق هيدروجين",
  //     },
  //     {
  //       title: "تنبيه عند انخفاض مستوى الماء",
  //       icon: <Notification />,
  //       description: "يمكنك تحديد مستوى معين من الماء تود تنبيهك عند وصوله إليه",
  //     },
  //     {
  //       title: "إمكانية طلب صهريج مياه",
  //       icon: <TankCar />,
  //       description: "بإمكانك طلب صهريج مياه بكل سهولة عبر تطبيق هيدروجين",
  //     },
  //     {
  //       title: "كشف التسريبات",
  //       icon: <LeakDetection />,
  //       description: "يمكنك عبر التطبيق إجراء اختبار لكشف التسريبات وسيتم تزويدك بالنتائج",
  //     },
  //     {
  //       title: "تحكم في المضخة",
  //       icon: <ControlPump />,
  //       description: "بإمكانك التحكم بتشغيل المضخة او ربطها بمنسوب المياه عبر تطبيق هيدروجين",
  //     },
  //     {
  //       title: "تنبيه عند عطل العوامة",
  //       icon: <Warning />,
  //       description: "سيصلك تنبيه على التطبيق عند عطل عوامة الخزان الأرضي",
  //     },
  //     {
  //       title: "مراقبة عدة أجهزة من حساب واحد",
  //       icon: <Devices />,
  //       description: "باستطاعتك مراقبة أكثر من جهاز من حساب واحد على التطبيق",
  //     },
  //   ],
  //   packages: [
  //     {
  //       title: "الباقة الأساسية",
  //       name: "لامدا - الأساسية (بدون اشتراك)",
  //
  //       price: 1299,
  //       features: {
  //         MonthlySubscription: "بدون اشتراك",
  //         DeliveryAndInstallation: "✔️",
  //         LowWaterAlerts: "✔️",
  //         WaterLevelStatistics: "✔️",
  //         CubicMeterReadings: "✔️",
  //         LeakDetection: "✔️",
  //         ControlOfThePump: "✔️",
  //         ControlOfTheFloat: "✔️",
  //         NumberOfUsers: "+5",
  //       },
  //     }
  //   ],
  //   packagesFeaturesTitles: {
  //     MonthlySubscription: "الاشتراك الشهري",
  //     DeliveryAndInstallation: "التوصيل والتركيب",
  //     LowWaterAlerts: "تنبيهات بإنخفاض الماء",
  //     WaterLevelStatistics: "إحصائيات لمستوى الماء",
  //     CubicMeterReadings: "قراءات بالمتر المكعب",
  //     ControlOfThePump: "التحكم بالمضخة",
  //     ControlOfTheFloat: "التحكم بالعوامة",
  //     LeakDetection: "كشف التسريب داخل الخزان",
  //     NumberOfUsers: "عدد المستخدمين",
  //
  //   }
  // },
  alpha: {
    _id: "device-1",
    name: "alpha",
    path: "/alpha",
    buy_path: "/cart",
    title: "جهاز ألفــا",
    description: "راقب خزان الماء بكل سهولة",
    price: "39 ر.س  لكل شهر",
    images: [
      {
        src: alphaApp.src,
        width: "w-7/12",
        smWidth: "w-full",
      },
      // {
      //   src: alpha.src,
      //   smWidth: "w-196",
      //   width: "w-5/12",
      // },
    ],
    productImage: alpha.src,
    guarantees: [
      "توصيل وتركيب مجاني",
      "ضمان شامل لمدة سنتين",
      "أحقية استرجاع كامل المبلغ خلال 30 يوم",

    ],
    features: [
      {
        title: "مراقبة لمستوى ماء الخزان",
        icon: <WaterLevel />,
        description: "يقوم الجهاز بإرسال مستوى الماء بشكل دوري عبر تطبيق الجوال",
      },
      {
        title: "تنبيه عند انخفاض مستوى الماء",
        icon: <Notification />,
        description: "يمكنك تحديد مستوى معين من الماء تود تنبيهك عند وصوله إليه",
      },
      {
        title: "إمكانية طلب صهريج مياه",
        icon: <TankCar />,
        description: "بإمكانك طلب صهريج مياه بكل سهولة عبر تطبيق هيدروجين",
      },
      {
        title: "تنبيه عند عطل العوامة",
        icon: <Warning />,
        description: "سيصلك تنبيه على التطبيق عند عطل عوامة الخزان الأرضي",
      },
      {
        title: "مراقبة عدة أجهزة من حساب واحد",
        icon: <Devices />,
        description: "باستطاعتك مراقبة أكثر من جهاز من حساب واحد على التطبيق",
      },
    ],
    guideVideos: [
      {
        title: "طريقة تركيب جهاز ألفا - الخزان السفلي",
        link: "https://www.youtube.com/embed/jQmshQVnSHc",
      },
      {
        title: "طريقة تركيب جهاز ألفا - الخزان العلوي",
        link: "https://www.youtube.com/embed/mwtmKsYEZZA",
      }
    ],
    banner: {
      link: "https://www.youtube.com/embed/ncn0yfey5j8",
      title: "ألفا - جهاز ذكي لمراقبة و تحليل مستوى الماء في الخزان: "
    },
    technicalSpecifications: [
    {
        title: "الجهد التشغيلي",
        value: "110 - 240 فولت",
      },
       {
        title: "التيار",
        value: "الى 0.5 أمبير",
      },
      {
        title: "مدى القراءة",
        value: "الى 5 امتار",
      },
      {
        title: "دقة القراءة",
        value: "بمعدل +/- 1 سم",
      },
      {
        title: "طريقة الاتصال",
        value: "بيانات خلوية",
      },
      {
        title: "طول السلك",
        value: "8 امتار",
      }
    ],
    guideBook: alphaBook.src,
    packages: [
      {
        id: "package-1",
        title: "باقة التقسيط",
        type: "installment",
        name: "جهاز + شريحة بيانات شهرية (39 ريال/ شهر) لمدة 24 شهر",
        price: 39,
      //   features: {
      //     // MonthlySubscription: "39 ر.س",
      //     // DeliveryAndInstallation: "✔️",
      //     // LowWaterAlerts: "✔️",
      //     // WaterLevelStatistics: "✔️",
      //     // CubicMeterReadings: "✔️",
      //     //
      //     // NumberOfUsers: 3,
      //   },
      },
      {
        id: "package-2",
        title: "الباقة الأساسية",
        name: "جهاز + شريحة بيانات مفتوحة",
        type: "one-time",
        price: 399,
        features: {
          // MonthlySubscription: "بدون اشتراك",
          // DeliveryAndInstallation: "✔️",
          // LowWaterAlerts: "✔️",
          // WaterLevelStatistics: "✔️",
          // CubicMeterReadings: "✔️",
          // LeakDetection: "❌",
          // ControlOfThePump: "❌",
          // ControlOfTheFloat: "❌",
          // NumberOfUsers: 3,
        },
      },
      // {
      //   title: "الباقة الإحترافية",
      //   name: "ألفا - الاحترافية (بدون اشتراك)",
      //   price: 999,
      //   features: {
      //     MonthlySubscription: "بدون اشتراك",
      //     DeliveryAndInstallation: "✔️",
      //     LowWaterAlerts: "✔️",
      //     WaterLevelStatistics: "✔️",
      //     CubicMeterReadings: "✔️",
      //     NumberOfUsers: "+5",
      //   },
      // },
    ],
    packagesFeaturesTitles: {
      MonthlySubscription: "اشتراك شريحة الاتصال",
      // DeliveryAndInstallation: "التوصيل والتركيب",
      // LowWaterAlerts: "تنبيهات بإنخفاض الماء",
      // WaterLevelStatistics: "إحصائيات لمستوى الماء",
      // CubicMeterReadings: "قراءات بالمتر المكعب",
      // NumberOfUsers: "عدد المستخدمين",

    }

  },


}

export const paths = Object.keys( devices ).map( ( device ) => ( {
  href: devices[ device ].path,
  name: devices[ device ].name,
  title: devices[ device ].title,
} ) )

