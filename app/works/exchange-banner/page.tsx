import Image from "next/image";
import Link from "next/link";

export default function ExchangeBannerPage() {
  return (
    <main className="bg-[#F7F4F2] min-h-screen px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-[#9A7654]">
          ← TOPへ戻る
        </Link>

        <p className="text-[#7A5A3A] tracking-[0.3em] text-sm mt-16 mb-4">
          WORKS
        </p>

        <h1 className="text-6xl mb-10">
          Webデザイナー交流会バナー
        </h1>

        <div className="relative w-full h-[520px] bg-white mb-16">
          <Image
            src="/images/exchange-banner.jpg"
            alt="Webデザイナー交流会バナー"
            fill
            className="object-contain"
          />
        </div>

        <section className="space-y-12 text-gray-700 leading-9">
          
<div>
  <h2 className="text-2xl text-[#9A7654] mb-4">
    制作概要
  </h2>
  <p>
    Webデザイナー同士の交流を目的とした
    イベントの告知バナーを制作しました。
    女性Webデザイナーをターゲットに、
    親しみやすさと信頼感が伝わるデザインを
    目指しました。
    イベント内容がひと目で伝わり、
    参加への興味につながる情報設計を
    意識しています。
  </p>
</div>


          
<div>
  <h2 className="text-2xl text-[#9A7654] mb-4">
    制作背景
  </h2>
  <p>
    Webデザインスクールの課題として制作しました。
    同業者との交流を求める女性Webデザイナーが、
    イベントに興味を持ち、安心して参加を検討できるよう、
    親しみやすさと信頼感の両立を意識しました。
  </p>
</div>

          
          
<div>
  <h2 className="text-2xl text-[#9A7654] mb-4">
    ターゲット
  </h2>
  <p>
    Webデザイナーとして活動している女性や、
    Webデザインを学びながら同業者との
    つながりを広げたい女性を想定しています。
    交流会への参加に興味があっても、
    初めての参加に不安を感じる人にも
    安心感を与えられるデザインを目指しました。
  </p>
</div>


          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">使用ツール</h2>
            <p>Photoshop</p>
          </div>
          

<div>
  <h2 className="text-2xl text-[#9A7654] mb-4">
    担当範囲
  </h2>
  <p>
    情報整理 / レイアウト設計 /
    配色・文字組み / バナーデザイン制作
  </p>
</div>

         
<div>
  <h2 className="text-2xl text-[#9A7654] mb-4">
    デザイン意図
  </h2>
  <p>
    メインカラーには柔らかいグリーンを使用し、
    落ち着きと安心感を表現しました。
    人物写真を大きく配置することで、
    交流会の雰囲気や参加後のイメージが
    伝わるようにしています。
  </p>
  <p className="mt-4">
    また、イベント名や開催情報を
    見つけやすいように情報の優先順位を整理し、
    申し込みにつながるCTAには暖色を使用しました。
    配色によるメリハリをつけることで、
    視線が自然に申し込み導線へ向かうよう
    工夫しています。
  </p>
</div>

          
          
<div>
  <h2 className="text-2xl text-[#9A7654] mb-4">
    工夫したポイント
  </h2>

  <ul className="list-disc pl-6 space-y-4">
    <li>
      <strong>情報の優先順位</strong>
      <p>
        イベント名や開催日時など、
        参加を検討する際に必要な情報を
        見つけやすい構成にしました。
      </p>
    </li>

    <li>
      <strong>配色と雰囲気</strong>
      <p>
        柔らかいグリーンと暖色を組み合わせ、
        安心感と親しみやすさを表現しました。
      </p>
    </li>

    <li>
      <strong>申し込みへの導線</strong>
      <p>
        CTAを目立たせることで、
        次のアクションにつながる視線誘導を
        意識しました。
      </p>
    </li>
  </ul>
</div>


          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">
            制作期間
            </h2>

            <p>
            約3日間
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}