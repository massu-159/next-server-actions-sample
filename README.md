# next-server-actions-sample

Next14 でstableになったserver Actionsを学習するために、Todoアプリを作成。

ORMにはPrismaを使用。

DBはsqlite。

CSSはtailwindCSSを使用。

urlはこちら
https : //github.com/massu-159/next-server-actions-sample

## 目次
1. 環境構築
2. アプリケーションの仕様

## 1. 環境構築

### 1-1. ライブラリ インストール

```
npm install
# または
yarn
# または
pnpm install
# または
bun install
```

### 1-2. アプリケーション実行

```
npm run dev
# または
yarn dev
# または
pnpm dev
# または
bun dev
```

## 2. アプリケーションの仕様

### 2-1. 仕様
- Todo
  - Todo新規作成
  - Todo一覧表示
  - Todo詳細表示
  - Todo更新
  - Todo削除

### 2-2. 構成技術
  - next: 14.0.2
  - react: ^18
  - typescript: ^5
  - eslint: ^8
  - eslint-config-next: 14.0.2
  - prisma: ^5.5.2
  - @prisma/client: ^5.5.2
  - tailwindcss: ^3.3.0
  - autoprefixer: ^10.0.1
  - postcss: ^8