import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            // 避免混淆，創建 Vue 的檔案名稱改為 main.js
            input: ["resources/css/app.css", "resources/js/main.js"],
            refresh: true,
        }),
        vue(),
    ],
});
