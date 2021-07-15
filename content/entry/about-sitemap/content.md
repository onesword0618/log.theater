---
path: /entry/about-sitemap
created: '2022-04-29'
updated: '2022-07-15'
title: 'sitemapについて所感を述べる.'
tags: [note]
---

## 記事の目的

Web サイトを運用するにあたって sitemap について言及されているが sitemap が Web サイト上でどのように役割を果たすのかが把握していないため、情報収集、考察を重ねて sitemap について理解を示すようにする.

## 課題

sitemap について記事などで取り上げられることがあるがそれについて理解を深めることができず、Web サイトの運営で必要なのかを判断することができない.

## サイトマップについての情報収集

### 概要

サイトマップは、検索エンジンにクロールしているサイトのページに提供する方法である.

サイトマップを提供することで検索エンジンがより良くサイトをクロールすることができるようになる.

サイトマップに記載しているメタデータを含めて記載されている URL について学習を深めることができる.

サイト側が検索エンジンに対して重要なページや更新頻度を伝えるためのである.

これらは検索エンジンに補足情報を伝える方法なので、Google・Yahoo!などの検索エンジンが提供している拡張に合わせるとより補足情報の範囲を広げて提供することができる.

Web ページが少ない規模の Web サイトでは、利便性は薄いものだが、通販サイトなど、商品単位が増えたりする Web サイトでは、優先の濃淡を付けて検索エンジンに伝えることは有用であると思われる.

### XML タグ定義

ファイルは、UTF-8 でエンコードされていること.

次の条件を満たす必要がある.

- 開始タグで始まり、終了タグで終わること.
- `<urlset>` タグ内で名前空間を指定すること.
- 親 XML タグとして、各 URL のエントリを含めていること.
- 各親タグの子エントリを含めていること

上記に加えて、オプションのタグがあるが、各検索エンジンのドキュメントを参照すること.

| 属性           | 必須? | 説明                                                                        |
| -------------- | ----- | --------------------------------------------------------------------------- |
| `<urlset>`     | ○     | ファイルの他のタグを囲む                                                    |
| `<url>`        | ○     | 各 URL エントリの親タグであり他のタグ内に含めた                             |
| `<loc>`        | ○     | ページの URL.                                                               |
| `<lastmod>`    | -     | ファイルの最終更新日(YYYY-MM-DD).                                           |
| `<changefreq>` | -     | always/hourly/daily/weekly/monthly/yearly/never                             |
| `<priority>`   | -     | サイト内の他の URL と比較したこの URL の優先度(0.0 - 1.0) デフォルトは、0.5 |

| 文字             | エスケープコード |
| ---------------- | ---------------- |
| アンパサンド     | ＆ -> `&amp;`    |
| 一重引用符       | ' -> `&apos;`    |
| 二重引用符       | " -> `&quot;`    |
| 不等記号(より大) | > -> `&gt;`      |
| 不等記号(より小) | < -> `&lt;`      |

> https://www.sitemaps.org/protocol.html

```xml{numberLines: true}:title=single.xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset urlset xmlns = "http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://www.example.com/</loc>
      <lastmod>2005-01-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>
</urlset>
```

```xml:title=multiple.xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
      <loc>http://www.example.com/</loc>
      <lastmod>2005-01-01</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
   </url>

   <url>
      <loc>http://www.example.com/catalog?item=12&amp;desc=vacation_hawaii</loc>
      <changefreq>weekly</changefreq>
   </url>

   <url>
      <loc>http://www.example.com/catalog?item=73&amp;desc=vacation_new_zealand</loc>
      <lastmod>2004-12-23</lastmod>
      <changefreq>weekly</changefreq>
   </url>

   <url>
      <loc>http://www.example.com/catalog?item=74&amp;desc=vacation_newfoundland</loc>
      <lastmod>2004-12-23T18:00:15+00:00</lastmod>
      <priority>0.3</priority>
   </url>

   <url>
      <loc>http://www.example.com/catalog?item=83&amp;desc=vacation_usa</loc>
      <lastmod>2004-11-23</lastmod>
   </url>
</urlset>
```

作成したのは,`robots.txt`を経由して配置場所を知らせる.

### 検索エンジンの対応

「Major Search Engines Unite to Support a Common Mechanism for Website Submission」によると 2006 年 11 月 16 日にサイトマップのサポートを発表していた.

> https://googlepress.blogspot.com/2006/11/major-search-engines-unite-to-support_16.html

Google は利用者が多いと想定されるので、提供されている資料に目を通す価値は大きいと想定される.

## 参考文献

- https://googlepress.blogspot.com/2006/11/major-search-engines-unite-to-support_16.html

- https://www.sitemaps.org/

- https://www.w3.org/TR/REC-xml/

- https://www.w3.org/XML/Schema#Tools

- https://developers.google.com/search/docs/advanced/sitemaps/overview
