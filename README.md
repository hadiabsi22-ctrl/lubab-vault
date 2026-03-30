# لُباب الرقمي - منصة الكتب والمحتوى الثقافي

منصة متخصصة في نشر وتبادل الكتب والمحتوى الثقافي الرقمي.

## الهيكل المشروع

```
LUBAB/
├── index.html          # الصفحة الرئيسية للموقع
├── admin-panel.html    # لوحة تحكم المسؤولين
├── .env.example        # مثال متغيرات البيئة
├── vercel.json         # إعدادات النشر على Vercel
└── README.md           # ملف الشرح
```

## المتطلبات

- موقع ثابت HTML/CSS/JavaScript
- قاعدة بيانات Supabase
- نشر على Vercel

## إعدادات النشر على Vercel

1. **إنشاء ملف البيئة المحلي:**
   ```bash
   cp .env.example .env.local
   ```

2. **إعداد المتغيرات البيئية في Vercel:**
   - اذهب إلى dashboard.vercel.com
   - اختر مشروعك
   - اذهب إلى Settings → Environment Variables
   - أضف المتغيرات التالية:
     ```
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
     SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_key_here
     ```

3. **النشر التلقائي:**
   - ادفع الكود إلى GitHub
   - Vercel سينشر التغييرات تلقائياً

## الوصول إلى الموقع

- **الصفحة الرئيسية:** `https://your-domain.vercel.app`
- **لوحة التحكم:** `https://your-domain.vercel.app/admin-panel.html`

## بيانات المسؤول

- **اسم المستخدم:** admin
- **كلمة المرور:** A7#mK!9v$LqP@2xZ

> **ملاحظة:** قم بتغيير بيانات المسؤول الافتراضية عند النشر لأسباب أمنية

## المميزات

- 📚 مكتبة شاملة من الكتب
- 📤 رفع سهل للمحتوى
- 🔍 بحث متقدم
- 👥 مجتمع نشط
- 🔐 لوحة تحكم آمنة للمسؤولين

## التقنيات المستخدمة

- HTML5
- CSS3 مع Grid و Flexbox
- JavaScript (Vanilla)
- Supabase (قاعدة البيانات)
- Vercel (النشر)

## الدعم الفني

في حال وجود أي مشاكل في النشر أو التشغيل، تأكد من:
1. إضافة المتغيرات البيئية بشكل صحيح في Vercel
2. التحقق من صلاحية مفاتيح Supabase
3. التأكد من أن جميع الملفات موجودة في مجلد المشروع
