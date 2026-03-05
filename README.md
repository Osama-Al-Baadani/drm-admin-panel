# 🔐 DRM Admin Panel - نظام ذكي لحماية المحتوى الرقمي

<div dir="rtl">

## 📖 نظرة عامة

لوحة تحكم إدارية متكاملة لنظام حماية المحتوى الرقمي (DRM) مستوحاة من منصة **Locklizard**. يوفر النظام:

- ✅ إدارة المستخدمين وصلاحياتهم
- 🎥 حماية الفيديوهات والملفات PDF
- 📊 تقارير وإحصائيات مفصلة
- 🔒 تشفير متقدم وحماية من النسخ
- 📱 تحكم بالأجهزة وجلسات المستخدمين
- 🌐 دعم كامل للغة العربية والإنجليزية

</div>

---

## 🚀 التقنيات المستخدمة

| Technology | Purpose |
|------------|----------|
| ⚛️ **React 18** | Frontend Framework |
| 🔄 **Redux Toolkit** | State Management |
| 🎨 **Tailwind CSS** | Styling |
| 🛣️ **React Router** | Navigation |
| 📡 **Axios** | API Calls |
| 📊 **Recharts** | Data Visualization |
| 🔥 **React Hot Toast** | Notifications |
| ⚡ **Vite** | Build Tool |

---

## 📁 هيكل المشروع

```
drm-admin-panel/
├── src/
│   ├── features/              # الوحدات الرئيسية (Feature-Based)
│   │   ├── auth/             # تسجيل الدخول والمصادقة
│   │   ├── users/            # إدارة المستخدمين
│   │   ├── videos/           # إدارة الفيديوهات
│   │   ├── publications/     # إدارة المنشورات/الكورسات
│   │   ├── reports/          # التقارير والإحصائيات
│   │   ├── access/           # الصلاحيات والتحكم
│   │   └── settings/         # الإعدادات العامة
│   ├── components/
│   │   ├── common/          # مكونات مشتركة (Buttons, Cards...)
│   │   ├── layout/          # Layout components
│   │   └── charts/          # رسوم بيانية
│   ├── services/            # API Services
│   ├── store/               # Redux Store (Global)
│   ├── routes/              # Routing Configuration
│   ├── utils/               # Helper Functions
│   ├── hooks/               # Custom React Hooks
│   ├── constants/           # Constants & Enums
│   └── assets/              # Static Assets
├── public/                   # Public Assets
└── [Config Files]           # vite, tailwind, eslint...
```

---

## ⚙️ التثبيت والإعداد

### 1️⃣ استنساخ المشروع

```bash
git clone https://github.com/Osama-Al-Baadani/drm-admin-panel.git
cd drm-admin-panel
```

### 2️⃣ تثبيت المكتبات

```bash
npm install
```

### 3️⃣ إعداد البيئة

أنشئ ملف `.env` في المجلد الرئيسي:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=DRM Admin Panel
```

### 4️⃣ تشغيل السيرفر

```bash
npm run dev
```

✅ افتح المتصفح: `http://localhost:5173`

---

## 📦 الأوامر المتاحة

```bash
npm run dev       # تشغيل السيرفر التطويري
npm run build     # بناء المشروع للإنتاج
npm run preview   # معاينة النسخة المبنية
npm run lint      # فحص الأكواد
```

---

## 🎯 الميزات الرئيسية

### 🔐 نظام المصادقة
- تسجيل دخول آمن
- HttpOnly Cookies + Refresh Tokens
- حماية من XSS و CSRF

### 👥 إدارة المستخدمين
- إضافة/تعديل/حذف المستخدمين
- تحديد عدد الأجهزة المسموحة
- تحديد تاريخ انتهاء الحساب
- تصدير/استيراد بيانات المستخدمين (CSV)

### 🎥 إدارة المحتوى
- رفع وحماية الفيديوهات
- حماية ملفات PDF
- تنظيم المحتوى في كورسات/منشورات
- تقارير المشاهدات

### 🔒 التحكم بالصلاحيات
- صلاحيات على مستوى الملف
- صلاحيات على مستوى الكورس
- تحديد تاريخ انتهاء لكل محتوى
- منع النسخ والتحميل

### 📊 التقارير والإحصائيات
- إحصائيات المستخدمين النشطين
- تقارير المشاهدات
- أكثر المحتوى مشاهدة
- رسوم بيانية تفاعلية

---

## 🛡️ الأمان

- ✅ HTTPS إلزامي في الإنتاج
- ✅ CORS محدود بالدومينات المسموحة
- ✅ Rate Limiting على API Endpoints
- ✅ Input Validation & Sanitization
- ✅ HttpOnly Cookies للـ Tokens
- ✅ تشفير البيانات الحساسة

---

## 🌐 دعم اللغات

- 🇸🇦 العربية (افتراضي)
- 🇬🇧 English

---

## 📝 الترخيص

هذا المشروع مشروع تخرج أكاديمي - جميع الحقوق محفوظة © 2026

---

## 👨‍💻 المطور

**Osama Al-Baadani**
- GitHub: [@Osama-Al-Baadani](https://github.com/Osama-Al-Baadani)
- المشروع: نظام ذكي لحماية المحتوى الرقمي وربطه

---

## 🤝 المساهمة

المشروع مفتوح للمساهمات! يرجى:
1. Fork المشروع
2. إنشاء Branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push إلى Branch (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

---

<div align="center">

**صُنع بـ ❤️ في اليمن 🇾🇪**

⭐ إذا أعجبك المشروع، لا تنسى إعطاء نجمة!

</div>
