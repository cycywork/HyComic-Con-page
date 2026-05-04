這是用來整理歷年動漫活動頁，並建立通用模板的專案。

---

## 📁 結構說明

* `202302tica/`：2023 二月 嗨讀動漫節
* `202307ccpa/`：2023 七月 嗨讀漫閱季
* `202401tica/`：2024 一月 嗨讀動漫節
* `202407ccpa/`：2024 七月 嗨讀漫閱季
* `202501tica/`：2025 一月 嗨讀動漫節
* `202507ccpa/`：2025 七月 嗨讀漫閱季
  
🔹 tica/ccpa 固定會有頁面
`index.html`：活動主頁
  
🔹 tica/ccpa 有時會增加頁面
 `quiz.html`：答題頁
 `quiz-end.html`：答題結果頁

---

## 🗂 活動列表

Hyread 動漫節/漫閱季活動頁

* 202302：HyRead IP 捏他《咒術迴戰》視覺主題
  202307：HyRead IP 捏他《我推的孩子》捏他視覺主題
* 202401：HyRead IP 捏他《迷宮飯》捏他視覺主題
  202407：HyRead IP 捏他《葬送的芙莉蓮》捏他視覺主題
* 202501：HyRead IP 捏他《亂碼1/2》捏他視覺主題
  202507：韓國條漫主推主題

---

## 🎯 目的

* 抽出共用區塊，建立可重用模板系統
  
🔹 全域結構（Layout）
Navbar
Footer
Floatboard

🔹 頁面區塊（Sections）
Hero（主視覺）
Award（得獎公告區）
Comic Vote（投票連結）
SNS（社群活動）
Coupon（優惠區）
banner（活動連結）
Pop_up66（快閃優惠）
booklist（推薦書單區）

🔹 浮動擴充
FAQ
CTA 區塊
Gift(點擊儲存獎品)
Pub list(出版社列表)
Quiz / Result（答題頁/答題結果頁)

* 建立可重用模板，單次出現的可依序至於重複區域之後Footer之前
* 減少每次切版時間
* 整理出常用的動態效果，尤其主視覺區域

---

## 🚧 未來規劃

* 建立 component 系統
* 整理 CSS 命名規則
* 使檔案更簡潔去掉無效和重複的css
* 建立通用漫畫相關活動頁骨架

---

## 🧩 新增模板

* `comic-template/`：通用漫畫活動頁骨架
  * `index.html`：主頁（含 Navbar / Hero / Award / Vote / SNS / Coupon / Banner / Pop_up66 / Booklist / Floatboard / Footer）
  * `quiz.html`：答題頁模板
  * `quiz-end.html`：答題結果頁模板
  * `css/design.css`：基本樣式
  * `js/main.js`：基本互動（快閃優惠彈窗）
