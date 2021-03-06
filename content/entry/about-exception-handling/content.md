---
path: /entry/about-exception-handling
created: '2022-04-20'
updated: '2022-04-26'
title: '例外処理について所感を述べる.'
tags: [design]
---

## 記事の目的

例外処理についての設計方針を収集し、考察を重ねることによって今後の開発での例外処理設計の参考にする.

## 定義

当記事で取り扱う 例外処理とは、システムの設計で想定されておらず、ユーザー操作によって解決できない問題に対処するための処理を指す.

## 例外処理に対する課題

個人で作成するプログラム、サンプルで定義されているプログラムでは、例外処理を考慮せずに作成することが多い.
例外処理について取り扱う書籍がなく、例外処理について知見を得るには、業務レベルでのプログラムを作成することで身につける必要がある.

例外処理に対する事項を学習する必要がある.

## 例外処理について

- 例外処理が必要になるケースとは何か.

以下にサンプルを提示する.

```javascript:title=define.js
/**
 * サンプルの関数.
 * 第一引数と第二引数を加算した結果を返却する.
 */
function simpleFunction(firstArgument, secondArgument) {
  return firstArgument + secondArgument;
}

// 関数の狙い通り3を返却する.
console.log(simpleFunction(2, 1));
// > 3

// 関数の想定外でNaNを返却する.
console.log(simpleFunction(2, n));
// > NaN
```

サンプルで提示した関数は、数値を引数にしてその加算した結果の値を関数の呼び出し先に返却するものである.
関数が狙い通りに利用されていた場合は、特筆することがない.

例外が必要になるのは想定外の利用がされた場合である.
サンプルレベルでは、原因箇所の特定は容易であるが、ソフトウェアシステムの場合は内外のライブラリ、ソフトウェアシステムが稼働しているサーバーの容量、アクセス状況によって問題が多岐に渡り複合的に発生している.
そのようなケースが発生した場合、一つ一つの関数に値を入れて実行させて確認をする必要が出てくる.
ソフトウェアシステムでそんな悠長なことをするわけにはいかない.

よって、エラーが起きたことを検知する仕組みを用意することが必要になる.
この動きを「エラーハンドリング(error-handling)」と呼ぶ.

- 例外が起こったことを検知する手段

ここで言及するのは JavaScript だが他の言語でも応用できるものである.

例外という意味あいが話者のバックグラウンドによって捉え方が異なるのでここに定義をまとめた.

|                 | ソフトウェアの災いを表す用語                                                          |
| --------------- | ------------------------------------------------------------------------------------- |
| エラー(error)   | ソフトウェアシステムの開発中になされた誤った決定である.                               |
| 欠陥(defect)    | 意図した振る舞いからシステムが逸れてしまう原因となるソフトウェアシステムの特性である. |
| フォルト(fault) | 何らかの実行中に意図した振る舞いから逸れてしまうソフトウェアシステムのイベントである. |

> Bertrand Meyer(バートランド・メイヤー),"オブジェクト指向入門 第 2 版 原則・コンセプト",449,2007. より引用

欠陥とはプログラムのコード上の不備や、作業成果物上の不備であり、ソフトウェアシステムの動きが意図した動きと一致しない現象ではない.

|                   | ISTQB 上の定義                                                            |
| ----------------- | ------------------------------------------------------------------------- |
| エラー(error)     | 「間違った結果を生み出す人間の行為」と定義している.                       |
| 欠陥(defect)      | 作業成果物に存在する、要件または仕様を満たさない不備または欠点.           |
| フォルト(failure) | コンポーネントやシステムが定義された範囲内で要求する機能を実行しないこと. |

> 大西建児,佐々木方規,鈴木三紀夫,中野直樹,福田里奈,町田欣史,湯本剛,吉澤智美,"ソフトウェアテスト教科書 JSTQB Foundation 第 4 版 シラバス 2018 対応",20-22,2007.

## 参考文献

- 大西建児,佐々木方規,鈴木三紀夫,中野直樹,福田里奈,町田欣史,湯本剛,吉澤智美,ソフトウェアテスト教科書 JSTQB Foundation 第 4 版 シラバス 2018 対応,株式会社翔泳社,2007,978-4-7981-6066-5.
- Bertrand Meyer(バートランド・メイヤー). オブジェクト指向入門 第 2 版 原則・コンセプト,株式会社翔泳社,2007,978-4-7981-1111-7.
- https://tc39.es/ecma262/multipage/ecmascript-language-statements-and-declarations.html#sec-try-statement
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
