# 簡單 CRUD 範例執行方式

這個專案是靜態網站，直接用瀏覽器開啟 `crud.html`/`crud-edit.html` 就能操作。但為了避免瀏覽器本地檔案限制，建議啟動一個簡單的本機 HTTP 伺服器。

## 使用 Python 內建伺服器
1. 安裝好 Python 3 後，在專案根目錄執行：
   ```bash
   python3 -m http.server 4000
   ```
2. 瀏覽器前往 [http://localhost:4000/crud.html](http://localhost:4000/crud.html) 進入清單頁，或 [http://localhost:4000/crud-edit.html](http://localhost:4000/crud-edit.html) 直接新增/編輯。
3. 資料會儲存在瀏覽器的 `localStorage`，重新整理或重開頁面仍會保留。

## 其他靜態伺服器
若你偏好 npm，也可以使用 `npx serve .` 或任何靜態伺服器工具，重點是能提供根目錄的靜態檔案存取。
