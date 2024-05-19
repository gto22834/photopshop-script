# photopshop-script

## i18nOutputImageProcess.jsx
用於輸出 i18n 資料夾圖層的圖片，以方便快速產生多語言按鈕或文字

### 用法

1. 將此腳本放到 Photoshop 腳本中
  - 通常是在 `Photoshop 2022/Presets/Scripts` 中
2. 在 Photoshop 中，要製作按鈕的 psd 裡，先創建一個 i18n 的資料夾
3. 將需要依據 i18n 語言的文字圖層都放入，並依據命名規則命名每個圖層 (e.q. 文字檔案名稱_zh-TW)
4. 點擊 檔案 > 指令碼 > i18nOutputImageProcess
5. 在選擇要輸出的資料夾後，便會開始依據 i18n 裡的圖層命名輸出 png 的圖片檔案
