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
└── src -> 作業ディレクトリ
    ├── components -> atomicデザインに寄せたcomponent構成
    │   ├── atoms
    │   ├── molecules
    │   └── template
    ├── libs -> Apsidaから生成されるファイル 手動では触らない
    └── shared -> 共通の型定義やutils関数
        ├── types
        └── utils
```


---
