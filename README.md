## Node
```bash
16.14.2
```

## 環境構築

```bash
yarn install

yarn dev
```

## Linter
eslint, stylelint, 型チェック spellチェック, jestのテストが走ります 

```bash
yarn check-all
```

## storybook
```bash
yarn storybook
```

---
## Directory構成

```
├── configs -> 設定ファイル系
│   ├── aspida
│   ├── cspell
│   ├── eslint
│   └── test
├── spec -> OpenAPIから作成したAPI定義
└── src -> 作業ディレクトリ
    ├── api -> 利用するAPI用の関数
    │   ├── modules
    │   └── resas
    ├── components -> atomicデザインに寄せたcomponent構成
    │   ├── atoms
    │   ├── molecules
    │   └── template
    ├── libs -> Apsidaから生成されるファイル 手動では触らない
    │   └── apiClient
    ├── pages
    │   └── modules
    ├── public
    └── shared -> 共通の型定義やutils関数
        ├── types
        └── utils
```


---

## 実装したこと(環境構築)
- Linter系の導入
- githubActionsでlintの管理
- Jestでの単体テスト
- OpenAPIによる型定義管理
- OpenAPI2Aspidaによる、APIの型管理
- Storybook導入
- Storybook,play関数の初期動作まで

## 実装したこと(実装)
- 画面全体の実装
- APIのキャッシュ処理
- API系のエラー処理

## 実装できてないこと
- Componentのテスト
- E2Eテスト
