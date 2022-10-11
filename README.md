# 備品管理システム概要
## 機能
- 備品の追加、編集、削除機能
- ページネーション
## 使用技術
- フロントエンド: React
- バックエンド: Spring Boot ([リポジトリ](https://github.com/yoichi-muraoka/inventory-app-backend))
## アプリケーションの起動
- React (localhost:3000)
```
npm start
```
- Spring Boot (localhost:8080)
  - Java 17 のインストールが必要
  - バックエンドの起動に際しては、あらかじめMySQLサーバーを立ち上げ、「inventory_app_db」を作成しておく
```
java jar InventoryApp-backend.jar
```
- JSON Server (localhost:5000)
  - Spring Bootの代わりにJSON Serverを利用する場合は、「src/context/ItemContext.js」の6行目を<br>`const API_BASE_URL = 'http://localhost:5000';`に変更する
```
npm run jsonserver
```
