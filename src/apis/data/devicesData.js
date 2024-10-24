import { Devices } from "assets/icons/Devices";
import { Notification } from "assets/icons/Notification";
import { TankCar } from "assets/icons/TankCar";
import { Warning } from "assets/icons/Warning";
import { WaterLevel } from "assets/icons/WaterLevel";
import alphaApp from "assets/images/alpha-1.png";
import alpha from "assets/images/alpha-2.png";
import alphaBook from "assets/images/alpha-guide.png";
import lamdaApp from "assets/images/lamda-app.png";
import lamda from "assets/images/lamda.png";
// import guideBookFile from "assets/guide-book.pdf"
export const lastDateUpdated = "10/2/2023";

export const devices = {
  lamda: {
    _id: "device-2",

    name: "lamda",
    path: "/lamda",
    buy_path: "cart",
    title: "جهاز لامدا",
    description: "تحكم بفاتورة الماء بكل سهولة",
    price: "1399 ر.س",
    productImage: lamda.src,
    deviceDescription: "جهاز لامدا + شحن وتركيب مجاني",
    priceDescription: "1399 ريال",
    devicePrice: 1399,
    images: [
      // {
      //   src: lamdaApp.src,
      //   width: "196px",
      // },
      {
        src: lamda.src,
        width: "390px",
      },
    ],

    guarantees: [
      "شحن مجاني",
      "اشتراك مجاني لمدة شهر",
      "قيمة الاشتراك 39 ريال/شهر",
      "ضمان لمدة سنتين",
      "أحقية استرجاع كامل المبلغ خلال 30 يوم",
    ],

    features: [
      {
        title: "مراقبة لمستوى ماء الخزان",
        icon: <WaterLevel />,
        description:
          "يقوم الجهاز بإرسال مستوى الماء بشكل دوري عبر تطبيق الجوال",
      },
      // {
      //   title: "تحكم بتدفق ماء الخزان",
      //   icon: <ControlWaterStream />,
      //   description: "بإمكانك التحكم بتدفق مياه الخزان أو جدولتها عبر تطبيق هيدروجين"
      // },
      {
        title: "تنبيه عند انخفاض مستوى الماء",
        icon: <Notification />,
        description:
          "يمكنك تحديد مستوى معين من الماء تود تنبيهك عند وصوله إليه",
      },
      {
        title: "إمكانية طلب صهريج مياه",
        icon: <TankCar />,
        description: "بإمكانك طلب صهريج مياه بكل سهولة عبر تطبيق هيدروجين",
      },
      // {
      //   title: "كشف التسريبات",
      //   icon: <LeakDetection />,
      //   description: "يمكنك عبر التطبيق إجراء اختبار لكشف التسريبات وسيتم تزويدك بالنتائج"
      // },
      // {
      //   title: "تحكم في المضخة",
      //   icon: <ControlPump />,
      //   description: "بإمكانك التحكم بتشغيل المضخة او ربطها بمنسوب المياه عبر تطبيق هيدروجين"
      // },
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
  },
  alpha: {
    _id: "device-1",
    name: "alpha",
    path: "/alpha",
    buy_path: "/cart",
    deviceModel: "جهاز ألفا",
    title: "وداعاً لمفاجآت انقطاع المياه",
    description: "معلومات خزان المياه بين يديك",
    deviceDescription: "جهاز ألفا + توصيل وتركيب مجاني",
    priceDescription: "199 ريال",
    packagePriceDescription: "199 ريال",
    devicePrice: 0,
    price: "199 ريال",
    guarantees: [
      "شحن مجاني",
      "اشتراك مجاني لمدة شهر",
      "قيمة الاشتراك 39 ريال/شهر",
      "ضمان لمدة سنتين",
      "أحقية استرجاع كامل المبلغ خلال 30 يوم",
      "شريحة بيانات مدمجة داخل الجهاز",
      "يتحمل إلى حرارة 60 درجة مئوية",
    ],
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
    features: [
      {
        title: "مراقبة لمستوى ماء الخزان",
        icon: <WaterLevel />,
        description:
          "يقوم الجهاز بإرسال مستوى الماء بشكل دوري عبر تطبيق الجوال",
      },
      {
        title: "تنبيه عند انخفاض مستوى الماء",
        icon: <Notification />,
        description:
          "يمكنك تحديد مستوى معين من الماء تود تنبيهك عند وصوله إليه",
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
        link: "https://youtu.be/7GeIGsEoltU",
      },
      {
        title: "طريقة تركيب جهاز ألفا - الخزان العلوي",
        link: "https://youtu.be/2g__q2PSc3k",
      },
    ],

    banner: {
      link: "https://www.youtube.com/embed/ncn0yfey5j8",
      title: "ألفا - جهاز ذكي لمراقبة و تحليل مستوى الماء في الخزان: ",
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
      },
    ],

    guideBook: alphaBook.src,
    packages: [
      {
        id: "basic",
        title: "اشتراك",
        name: "اشتراك",
        type: "subscription",
        price: 199,
        packagePriceDescription: "199",
        guarantees: [
          "شحن مجاني",
          "اشتراك مجاني لمدة شهر",
          "قيمة الاشتراك 39 ريال/شهر",
          "ضمان لمدة سنتين",
          "أحقية استرجاع كامل المبلغ خلال 30 يوم",
          "شريحة بيانات مدمجة داخل الجهاز",
          "يتحمل إلى حرارة 60 درجة مئوية",
        ],
        features: {
          DeliveryAndInstallation: "✓️",
          Subscription: "39 ريال/الشهر",
          LowWaterAlerts: "✓️",
          WaterLevelStatistics: "✓️",
          waterLevelMonitoring: "✓️",
          LeakDetection: "✓️",
          NumberOfUsers: "+5",
        },
      },

      {
        id: "regular",
        title: "بدون اشتراك",
        type: "one-time",
        name: "بدون اشتراك",
        price: 899,
        packagePriceDescription: "899 ريال",
        guarantees: [
          "شحن مجاني",
          "بدون أي اشتراك شهري",
          "ضمان لمدة سنتين",
          "أحقية استرجاع كامل المبلغ خلال 30 يوم",
          "شريحة بيانات مدمجة داخل الجهاز",
          "يتحمل إلى حرارة 60 درجة مئوية",
        ],
        features: {
          DeliveryAndInstallation: "✓️",
          Subscription: "بدون اشتراك",
          LowWaterAlerts: "✓️",
          WaterLevelStatistics: "✓️",
          waterLevelMonitoring: "✓️",
          LeakDetection: "✓️",
          NumberOfUsers: "+5",
        },
      },
    ],
  },
};
export const packagesFeaturesTitles = {
  DeliveryAndInstallation: "شحن مجاني",
  Subscription: "اشتراك شهري",
  waterLevelMonitoring: "مراقبه مستوى الماء",
  LowWaterAlerts: "تنبيهات بإنخفاض الماء",
  WaterLevelStatistics: "إحصائيات لمستوى الماء",
  // deviceWatch: "مراقبه الجهاز عبر الحاسب الشخصي",
  NumberOfUsers: "عدد المستخدمين",
};
export const paths = Object.keys(devices).map((device) => ({
  href: devices[device].path,
  name: devices[device].name,
  title: devices[device].title,
}));
