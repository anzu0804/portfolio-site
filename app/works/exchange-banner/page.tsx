import Image from "next/image";
import Link from "next/link";

export default function ExchangeBannerPage() {
  return (
    <main className="bg-[#F7F4F2] min-h-screen px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-[#9A7654]">
          ← TOPへ戻る
        </Link>

        <p className="text-[#C8B299] tracking-[0.3em] text-sm mt-16 mb-4">
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
            <h2 className="text-2xl text-[#9A7654] mb-4">制作概要</h2>
            <p>
              女性Webデザイナー向け交流会の告知を目的としたバナーを制作しました。
              イベントの雰囲気が伝わるよう、親しみやすさと上品さを意識しています。
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">
            制作背景
            </h2>

            <p>
            スクールの課題で制作しました。
            同業者とのつながりを求める女性が安心して参加できるよう、
            親しみやすさと信頼感を意識してデザインしました。
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">ターゲット</h2>
            <p>
              Webデザイナーとして活動している女性、または同業者とのつながりを作りたい女性。
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">使用ツール</h2>
            <p>Photoshop / Figma</p>
          </div>
          
          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">
            デザイン意図
            </h2>

            <p>
            メインカラーには柔らかいグリーンを使用し、
            落ち着きと安心感を演出しました。

            また、人物写真を大きく配置することで、
            交流会の楽しさや参加後のイメージが伝わるよう工夫しています。

            CTAボタンには暖色を使用し、
            視線を自然に申し込み導線へ誘導しています。
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">工夫したポイント</h2>
            <p>
              柔らかい配色と余白を使い、女性向けイベントらしい安心感のあるデザインにしました。
              申し込みにつながるよう、イベント名や日時が一目で伝わる情報設計を意識しています。
            </p>
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