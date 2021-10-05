/**
 * Author Page.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { SEO } from '../components/seo';
import { Layout } from '../components/layout';

type Props = {
  location: {
    pathname: string;
  };
};

/**
 * About Self Introduce.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function Introduce({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <SEO title={`introduce`} url={pathname} />
      <Layout>
        <article className="introduce">
          <h2>Introduce</h2>
          <p>Q. あなたはどういう人ですか？</p>

          <p>
            A. 約束を果たそうと責任を持って任務に取り組むことができる人です.
          </p>

          <p>根拠</p>

          <p>
            社会生活を送る上で、自分ができることはそれほど多くないと思っています.
          </p>

          <p>
            個人だけではできないことを補うために、家族があり、友人・知人があり、地域があり、会社があり、人間社会が存在していると思っています.
          </p>

          <p>
            私は、他人と力を合わせて任務に取り掛かることは、大なり小なりの約束の積み重ねだと思っています.
          </p>

          <p>
            なので、他人と力を合わせて任務に取り組むためには、自分がまず約束を果たさないと他人に約束を守ってもらうことができないと思っています.
          </p>

          <hr />

          <p>Q. あなたの価値観は何に重きをおいていますか？</p>

          <p>
            A.
            自分の行動の結果は、自分に跳ね返ることに対して価値を持って取り組んでいます.
          </p>

          <p>根拠</p>

          <p>
            短期的、長期的の違いはあれど、自分の行動の結果は、自分に返ってくると思っています.
          </p>

          <p>
            「因果応報」 、自分の専攻に基づくなら「you reap what you
            sow」(種をまけばその刈り取りもする)
            と端的に言い表すことができると思います.
          </p>

          <p>
            良いことも、悪いことも自分が行動を起こした結果なら責任を持って処理をしていかないといけないと思っています.
          </p>

          <p>
            そして、良いことの割合を増やすためにはどうすべきなのかを考えて行動に起こすようにしています.
          </p>

          <p>出典</p>

          <p>「因果応報」</p>

          <p>玄奘三蔵(三蔵法師)の伝記｢大慈恩寺三蔵法師伝｣の七巻</p>

          <p>「you reap what you sow」(種をまけばその刈り取りもする) </p>

          <p>ガラテヤ人への手紙6章7節</p>

          <hr />

          <p>Q. あなたは社会でどういう貢献をしていきたいですか.</p>

          <p>
            A.
            他人が何かを成し遂げたいという思いを手伝いその成果でもって社会への貢献としていきたいと思っています.
          </p>

          <p>根拠</p>

          <p>
            0から枠組みを作るよりも既にあるものから最適なものは何かを考えながら作る方に適正があると思っています.
          </p>

          <p>
            他人が何かを成し遂げたいという思いに共感をしたとき、私がもっている能力、経験を持ってその出口まで共に考え、支えて進んでいけたらと思っています.
          </p>
        </article>
      </Layout>
    </>
  );
}
