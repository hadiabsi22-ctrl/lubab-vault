# دليل إعدادات Supabase للمبرمج (Technical Handover)

## 1. إعدادات الـ Storage (الحاويات)

### Bucket Configuration:
- **اسم الباكت:** `books` (يجب استخدام هذا الاسم حرفياً في الكود)
- **حالة الباكت:** Public (عام)
- **الموقع:** تم إنشاؤه رسمياً في لوحة تحكم Supabase

## 2. سياسات الوصول (Storage RLS Policies)

### السياسات المفعلة على باكت `books`:
- **SELECT (القراءة):** مسموحة للجميع (anon & authenticated)
- **INSERT (الرفع):** مسموحة فقط للمستخدمين المسجلين (authenticated)

### ملاحظات هامة:
- ⚠️ **لا تقم بتغيير السياسات برمجياً** لتجنب أخطاء الـ 400
- إذا أردت تفعيل الحذف (DELETE) أو التحديث (UPDATE)، يجب إضافتها من لوحة التحكم
- أي تغيير برمجي سيعطي خطأ 403 Forbidden

## 3. توحيد الاتصال (Global Configuration)

### ملف الإعدادات الموحد:
- **اسم الملف:** `config.js`
- **الغرض:** تجنب خطأ `Identifier 'supabase' has already been declared`

### ترتيب الاستدعاء في HTML:
```html
<!-- 1. رابط CDN الخاص بـ Supabase -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<!-- 2. ملف الإعدادات الموحد -->
<script src="config.js"></script>

<!-- 3. باقي ملفات JS -->
<script src="other-scripts.js"></script>
```

### كود الربط المعتمد:
```javascript
// في config.js
if (typeof window.supabaseClient === 'undefined') {
    window.supabaseClient = supabase.createClient(
        'https://fyydjnzmpjwtedrzbzck.supabase.co',
        'sb_publishable_YBDpVlQXcEazTGb-_Aj1Uw_ZIC0YYfO'
    );
}
const supabase = window.supabaseClient;
```

## 4. التعامل مع الجداول (Database Tables)

### الجداول الرئيسية:
- **books:** جدول الكتب
- **users:** جدول المستخدمين

### تطابق الحقول:
عند استخدام `supabase.from('books')` تأكد من تطابق أسماء الحقول:
- `title`, `author`, `category`, `summary`
- `status`, `uploadDate`, `views`, `likes`
- `fileUrl`, `fileName`, `user_email`

## 5. الملفات التي تم ضبطها

### الملفات المعدلة:
1. **profile.html** - الملف الشخصي
2. **upload.html** - رفع الكتب
3. **search.html** - البحث
4. **books.html** - عرض الكتب

### المشاكل التي تم حلها:
- ✅ `Identifier 'supabase' has already been declared`
- ✅ `currentUser is not defined`
- ✅ `Bucket not found` errors
- ✅ `createClient is not defined`

## 6. تعليمات الصيانة

### عند إضافة صفحات جديدة:
1. استدعِ `config.js` بعد رابط CDN
2. لا تقم بتعريف `supabase` مرة أخرى
3. استخدم `window.supabase` مباشرة

### عند تعديل السياسات:
1. استخدم لوحة تحكم Supabase فقط
2. لا تقم بالتعديل برمجياً
3. اختبر التغييرات بعناية

## 7. معلومات الاتصال

### Supabase Project:
- **URL:** `https://fyydjnzmpjwtedrzbzck.supabase.co`
- **Anon Key:** `sb_publishable_YBDpVlQXcEazTGb-_Aj1Uw_ZIC0YYfO`

### ملاحظات أمنية:
- 🔒 لا تشارك الـ Service Role Key في الكود Frontend
- 🔒 استخدم دائماً Anon Key للعمليات من جانب العميل
- 🔒 تأكد من تفعيل RLS Policies على جميع الجداول
