---
path: /entry/commit-message
created: '2022-01-22'
updated: '2022-01-22'
title: 'Git Commit Messageについて所感を述べる.'
tags: [design]
---

## 記事の目的

コミットメッセージについての方針を収集し、考察を重ねることによって今後のチーム開発でのコミットメッセージ作成の参考にする.

## 定義

当記事で取り扱う コミットメッセージとは、Git の機能として指しているコミットメッセージのことである.

- 過去の修正や追加がどんな背景で変更したのかをコミットメッセージから追うことができない.

## コミットメッセージを改善することで得られる利点

- 役立つ説明を提供することで、トラブルがシューティング中に自分や同僚の時間を節約できます。

- より良いコミットメッセージを書くためのステップ

1. 大文字と句読点: 最初の単語を大文字にし、句読点で終わらせない
2. 件名には、命令法を使用する
3. コミットのタイプを指定する
4. 最初は５０文字以内で、本文は７２文字に制限

## 内容について

- なぜこれらの変更を加えたのか？
- 変更はどのような影響を及ぼしたのか？
- なぜ変更が必要だったのですか？
- 参照の変更点は何ですか？

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]

```

feat ... 変更に伴い新機能が導入されました
fix ... バグ修正が発生しました
chore ... 修正または機能に関連せず、テスト、プロダクトの変更しない変更
refactor ... バグを修正せず、機能を追加しないリファクタリングされたコード
docs ... README やその他の Markdown File などのドキュメントの更新
style ... コードの意味に影響を与えない変更
test ... 新規または以前のテストの修正を含む
perf ... パフォーマンスの向上
ci ... 継続的インテグレーション関連
build ... ビルドシステムまたは外部の依存関係に影響を与える変更
revert ... 以前のコミットを元に戻します

```
fix: fix foo to enable bar

This fixes the broken behavior of the component by doing xyz.

BREAKING CHANGE
Before this fix foo wasn't enabled at all, behavior changes from <old> to <new>

Closes D2IQ-12345
```

プロジェクト内の貢献ファイルまたは README にコミットのガイドラインを含めると便利

## 参考資料

> https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/

> https://docs.github.com/en/get-started/using-git/about-git

> https://commitizen-tools.github.io/commitizen/

> https://www.conventionalcommits.org/en/v1.0.0/
