/**
 * Privacy Policy Explain Content Component.
 *
 * Copyright (c) 2021.
 * Kenichi Inoue.
 */
import * as React from 'react';
import { Layout } from '../../components/layout';
import { Head } from '../../components/head';

type Props = {
  location: {
    pathname: string;
  };
};

/**
 * Privacy Explain.
 *
 * @param  {string} location current page
 * @returns {React.ReactElement} component
 */
export default function Privacy({ location }: Props): React.ReactElement {
  const { pathname } = location;
  return (
    <>
      <Head title="privacy policy" url={pathname} />
      <Layout>
        <article className="pricacy">
          <h2>Privacy Policy</h2>
          <p>
            onesword0618（以下「当人」といいます。）は、当人の提供するサービス（以下「本サービス」といいます。）における、ユーザーについての個人情報を含む利用者情報の取扱いについて、以下のとおりプライバシーポリシー（以下「本ポリシー」といいます。）を定めます。
          </p>

          <h3>1. 収集する利用者情報及び収集方法</h3>
          <p>
            本ポリシーにおいて、「利用者情報」とは、ユーザーの識別に係る情報、通信サービス上の行動履歴、その他ユーザーまたはユーザーの端末に関連して生成または蓄積された情報であって、本ポリシーに基づき当人が収集するものを意味するものとします。
            本サービスにおいて当人が収集する利用者情報は、その収集方法に応じて、以下のようなものとなります。
            (1) ユーザーからご提供いただく情報
            本サービスを利用するために、または本サービスの利用を通じてユーザーからご提供いただく情報は以下のとおりです。
            ・氏名、生年月日、性別、職業等プロフィールに関する情報
            ・ユーザーの肖像を含む静止画情報 (2)
            ユーザーが本サービスの利用において、他のサービスと連携を許可することにより、当該他のサービスからご提供いただく情報
            ユーザーが、本サービスを利用するにあたり、ソーシャルネットワーキングサービス等の他のサービスとの連携を許可した場合には、その許可の際にご同意いただいた内容に基づき、以下の情報を当該外部サービスから収集します。
            ・当該外部サービスでユーザーが利用するID
            ・その他当該外部サービスのプライバシー設定によりユーザーが連携先に開示を認めた情報
            (3) ユーザーが本サービスを利用するにあたって、当人が収集する情報
            当人は、本サービスへのアクセス状況やそのご利用方法に関する情報を収集することがあります。これには以下の情報が含まれます。
            ・リファラ ・IPアドレス ・サーバーアクセスログに関する情報
            ・Cookie、ADID、IDFAその他の識別子 (4)
            ユーザーが本サービスを利用するにあたって、当人がユーザーの個別同意に基づいて収集する情報
            当人は、ユーザーが3-1に定める方法により個別に同意した場合、当人は以下の情報を利用中の端末から収集します。
            ・位置情報
          </p>

          <h3>2. 利用目的</h3>
          <p>
            本サービスのサービス提供にかかわる利用者情報の具体的な利用目的は以下のとおりです。
            (1) ユーザーのトラフィック測定及び行動測定のため (2)
            広告の配信、表示及び効果測定のため (3)
            本サービスに関するご案内、お問い合わせ等への対応のため (4)
            本サービスに関する当人の規約、ポリシー等（以下「規約等」といいます。）に違反する行為に対する対応のため
            (5) 本サービスに関する規約等の変更などを通知するため
          </p>

          <h3>3. 通知・公表または同意取得の方法、利用中止要請の方法</h3>
          <p>
            3-1
            以下の利用者情報については、その収集が行われる前にユーザーの同意を得るものとします。
            ・位置情報 3-2
            ユーザーは、本サービスの所定の設定を行うことにより、利用者情報の全部または一部についてその収集又は利用の停止を求めることができ、この場合、当人は速やかに、当人の定めるところに従い、その利用を停止します。なお利用者情報の項目によっては、その収集または利用が本サービスの前提となるため、当人所定の方法により本サービスを退会した場合に限り、当人はその収集又は利用を停止します。
          </p>

          <h3>4. 外部送信、第三者提供、情報収集モジュールの有無</h3>
          <p>
            4-1
            本サービスでは、以下の提携先が、ユーザーの端末にCookieを保存し、これを利用して利用者情報を蓄積及び利用している場合があります。
            (1) 提携先 (2) 上記提携先のプライバシーポリシーのURL (3)
            上記提携先のオプトアウト（無効化）URL 4-2
            本サービスには以下の情報収集モジュールが組み込まれています。これに伴い、以下のとおり情報収集モジュール提供者（日本国外にある者を含みます。）への利用者情報の提供を行います。
            (1) 情報収集モジュールの名称 (2) 情報収集モジュールの提供者 (3)
            提供される利用者情報の項目 (4) 提供の手段・方法 (5)
            上記提供者における利用目的 (6) 上記提供者における第三者提供の有無
            (7) 上記提供者のプライバシーポリシーのURL
          </p>

          <h3>5. 第三者提供</h3>
          <p>
            当人は、利用者情報のうち、個人情報については、あらかじめユーザーの同意を得ないで、第三者（日本国外にある者を含みます。）に提供しません。但し、次に掲げる必要があり第三者（日本国外にある者を含みます。）に提供する場合はこの限りではありません。
            (1)
            当人が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合
            (2) 合併その他の事由による事業の承継に伴って個人情報が提供される場合
            (3)
            第4項の定めに従って、提携先または情報収集モジュール提供者へ個人情報が提供される場合
            (4)
            国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、ユーザーの同意を得ることによって当該事務の遂行に支障を及ぼすおそれがある場合
            (5)
            その他、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）その他の法令で認められる場合
          </p>

          <h3>6. 共同利用</h3>
          <p>
            当人は、以下のとおりユーザーの個人情報を共同利用します。 (1)
            共同して利用される個人情報の項目 (2) 共同して利用する者の範囲 (3)
            共同して利用する者の利用目的 (4)
            個人情報の管理について責任を有する者の氏名または名称
          </p>

          <h3>7. 個人情報の開示</h3>
          <p>
            当人は、ユーザーから、個人情報保護法の定めに基づき個人情報の開示を求められたときは、ユーザーご本人からのご請求であることを確認の上で、ユーザーに対し、遅滞なく開示を行います（当該個人情報が存在しないときにはその旨を通知いたします。）。但し、個人情報保護法その他の法令により、当人が開示の義務を負わない場合は、この限りではありません。なお、個人情報の開示につきましては、手数料（1件あたり1,000円）を頂戴しておりますので、あらかじめ御了承ください。
          </p>

          <h3>8. 個人情報の訂正及び利用停止等</h3>
          <p>
            8-1
            当人は、ユーザーから、(1)個人情報が真実でないという理由によって個人情報保護法の定めに基づきその内容の訂正を求められた場合、及び(2)あらかじめ公表された利用目的の範囲を超えて取扱われているという理由または偽りその他不正の手段により収集されたものであるという理由により、個人情報保護法の定めに基づきその利用の停止を求められた場合には、ユーザーご本人からのご請求であることを確認の上で遅滞なく必要な調査を行い、その結果に基づき、個人情報の内容の訂正または利用停止を行い、その旨をユーザーに通知します。なお、訂正または利用停止を行わない旨の決定をしたときは、ユーザーに対しその旨を通知いたします。
            8-2当人は、ユーザーから、ユーザーの個人情報について消去を求められた場合、当人が当該請求に応じる必要があると判断した場合は、ユーザーご本人からのご請求であることを確認の上で、個人情報の消去を行い、その旨をユーザーに通知します。
            8-3個人情報保護法その他の法令により、当人が訂正等または利用停止等の義務を負わない場合は、8-1および8-2の規定は適用されません。
          </p>

          <h3>9. お問い合わせ窓口</h3>
          <p>
            ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、下記の窓口までお願いいたします。
          </p>

          <p>連絡先：ao.akua.leo@gmail.com</p>

          <h3>10. プライバシーポリシーの変更手続</h3>
          <p>
            当人は、必要に応じて、本ポリシーを変更します。但し、法令上ユーザーの同意が必要となるような本ポリシーの変更を行う場合、変更後の本ポリシーは、当人所定の方法で変更に同意したユーザーに対してのみ適用されるものとします。なお、当人は、本ポリシーを変更する場合には、変更後の本ポリシーの施行時期及び内容を当人のウェブサイト上での表示その他の適切な方法により周知し、またはユーザーに通知します。
          </p>

          <p>【2021年08月08日制定】</p>
        </article>
      </Layout>
    </>
  );
}
