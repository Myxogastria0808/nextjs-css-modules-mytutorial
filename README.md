# Setup

1. typed-css-modules の install

```sh
pnpm add typed-css-modules
```

typed-css-modules を使用することで、css のクラス名を補完してくれる。

https://github.com/Quramy/typed-css-modules

2. package.json に以下を追加

```json
{
  ...
  "scripts": {
    ...
    "tcm": "tcm -p src/**/*.module.css -W"
  },
  ...
}
```

3. \*.module.css ファイルにクラスを追加するたびに以下のコマンドを実行

```sh
pnpm tcm
```

## 参考サイト

https://qiita.com/hikagami/items/356ed165c40daba987e3

https://qiita.com/shino365/items/f8e9f4310604ba3b0128
