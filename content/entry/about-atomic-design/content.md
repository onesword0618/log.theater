---
path: /entry/about-atomic-design
created: '2021-10-23'
updated: '2021-11-03'
title: 'Atomic Designについて所感を述べる.'
tags: [design]
---

## 記事の目的

[Atomic Design](https://atomicdesign.bradfrost.com/) の記事を読み、実際に適用した際に感じた課題に対して考察を深めた回答を作成している.

## 定義

当記事で取り扱う [Atomic Design](https://atomicdesign.bradfrost.com/) は、参考資料に挙げている https://atomicdesign.bradfrost.com/ で指している考えのことである.

## Atomic Design から読み考えた私見

私の私見として、[Atomic Design](https://atomicdesign.bradfrost.com/) から受け取る落とし込んだ考えは以下の一言に絞られます.

「プロダクトの知識を保有する量に基づいて粒度が変わっていく設計手法である.」

## Atomic Design は何を解決するためのものか

「Atomic Design」は、紙をモチーフとした Web ページのデザインからスタートし、ディスプレイのサイズに従ったデザインを組む必要があったため生まれてきた考え方だと思われる.

肥大化していく要望に応えるためには、ページとしてではなく、部品としての単位で UI を構築していく必要があった.

切り刻んでいく中で、部品間でもデザインや共通認識としての一貫性が必要にもなった.

それを分類、整理するための仕組みとしての Design System が必要になった.

そこから導出された階層化を主とした管理方法が「Atomic Design」に繋がっていったと捉えた.

[Brad Frost](https://twitter.com/brad_frost) 氏が提供している [Atomic Design](https://atomicdesign.bradfrost.com/) を元に解決しようとしているものを追っていく.

[序文](https://atomicdesign.bradfrost.com/foreword/)

```
And we lit up: this was a shift in perspective, a way to move away from conceiving a website design as a collection of static page templates, and instead as a dynamic system of adaptable components.
```

[Designing Systems](https://atomicdesign.bradfrost.com/chapter-1/)

```
“How are we ever going to redesign this university website that contains over 30,000 pages?!”
```

[Tearing-up-the-page](https://atomicdesign.bradfrost.com/chapter-1/#tearing-up-the-page)

```
To address this reality while maintaining our sanity, it’s absolutely necessary for us to take a step back and break these giant responsibilities into smaller, more manageable chunks.
```

**課題**

```
1. ディスプレイの大きさが異なる端末が、流通し、その大きさに対応する Web ページを構築する必要性がでてきた.
2. 情報の配信方法が、文書のみから画像、映像、音声その他といったコンテンツを含む配信へ変わっていった.
3. 肥大化する要望に対して迅速に応える必要があった.
```

**アプローチ**

**> 1. ディスプレイの大きさが異なる端末が、流通し、その大きさに対応する Web ページを構築する必要性がでてきた.**

```
ディスプレイの種類が増加するにつれて 1 対 1 の関係でページレイアウトを作ることが困難になっていた.
Web ページを表示する端末が PC・ディスプレイを飛び出して、手元で操作する携帯電話のディスプレイのサイズを始めとして大中小様々なディスプレイが登場するようになった.
ページ単位として捉えていた設計を、パーツ単位で組み合わせていく設計へ転換していくようになった.
```

**> 2. 情報の配信方法が、文書のみから画像、映像、音声その他といったコンテンツを含む配信へ変わっていった.**

```
既存のメタファーとしてページをイメージしてWebサイトが構築されていたが、要望は上回る速度で多岐に肥大化をしていくようになった.
ページとしてのイメージに沿わないようになりその受け皿のメタファーとして「レゴブロック」が使われるようになった.
```

**> 3. 肥大化する要望に対して迅速に応える必要があった.**

```
肥大化する要望に対して正気を保ちながら対処するために、大きい責任をより小さく分割していくことが避けることができなくなってきました.
具体的な対応として、モジュール化、スタイルガイドの定義、デザインパターン化という方法が取られた.
```

## 参考資料

> https://twitter.com/brad_frost

> https://atomicdesign.bradfrost.com/

> https://github.com/bradfrost/atomic-design/
