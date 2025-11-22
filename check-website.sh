#!/bin/bash
# 🚀 سایت چک اور تست اسکریپت
# Website Check & Test Script

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌟 گنجینه دانش‌های کهن آریایی - تست وبسایت"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# بررسی فایل‌ها
echo "📋 بررسی فایل‌های ضروری..."
echo ""

files=(
    "index.html"
    "styles.css"
    "script.js"
    "hero-bg.svg"
    "course1.svg"
    "course2.svg"
    "course3.svg"
    "course4.svg"
)

count=0
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
        ((count++))
    else
        echo "❌ $file (یافت نشد)"
    fi
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 خلاصه:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "فایل‌های موجود: $count / ${#files[@]}"
echo ""

# شمارش خطوط کد
echo "📈 تعداد خطوط کد:"
wc -l index.html styles.css script.js 2>/dev/null | tail -1
echo ""

# سایز فایل‌ها
echo "💾 حجم فایل‌ها:"
du -sh . 2>/dev/null || du -h index.html styles.css script.js 2>/dev/null | awk '{sum+=$1} END {print "کل: " sum}'
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 نحوه استفاده:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "گزینه 1: باز کردن مستقیم"
echo "  open index.html"
echo ""
echo "گزینه 2: سرور محلی (بهتر است)"
echo "  python -m http.server 8000"
echo "  سپس: http://localhost:8000"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ وبسایت آماده است! 🎉"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
