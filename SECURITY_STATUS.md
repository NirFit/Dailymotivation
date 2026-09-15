# סטטוס אבטחה — שבוצע / מה נשאר

## שבוצע
- סריקת כל הריפוזיטוריז הציבוריים של NirFit — אין סיסמאות/מפתחות שרת שדלפו.
- ב-`Dailymotivation` נוסף `.gitignore` (מוזג ב-PR #6) כדי למנוע דליפות עתידיות.

## חסום אצל הסוכן
- אין הרשאת כתיבה ל-`website-nir-hemo` (האתר nirfit.co.il).
- לכן רוטציית טופיק ntfy **עדיין לא עלתה לאוויר**.

## לעדכון Grok Bot (רק אחרי עדכון האתר)

**ישן (להפסיק אחרי העלאה):**
`https://ntfy.sh/nirfit-leads-51c1b3a4b8910d6309d9553bcf4c8121`

**חדש (להתחיל אחרי העלאה):**
`https://ntfy.sh/nirfit-leads-67427db2ff47a4d64f27a8936f546da8`

## עריכה ידנית באתר (בלי קוד)
בגיטהאב (מחוברים למשתמש NirFit), בכל אחד מהקבצים הבאים להחליף:
`nirfit-leads-51c1b3a4b8910d6309d9553bcf4c8121` → `nirfit-leads-67427db2ff47a4d64f27a8936f546da8`

1. https://github.com/NirFit/website-nir-hemo/edit/main/script.js
2. https://github.com/NirFit/website-nir-hemo/edit/main/index.html
3. https://github.com/NirFit/website-nir-hemo/edit/main/afula/index.html
4. https://github.com/NirFit/website-nir-hemo/edit/main/kiryat-bialik/index.html
5. https://github.com/NirFit/website-nir-hemo/edit/main/tests/form-lead.test.js

בכל קובץ: עיפרון → החלפה → Commit changes.
