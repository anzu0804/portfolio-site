import Link from "next/link";

export default function PortfolioSitePage() {
  return (
    <main className="bg-[#F7F4F2] min-h-screen px-16 py-24">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-[#9A7654]">
          ← TOPへ戻る
        </Link>

        <p className="text-[#C8B299] tracking-[0.3em] text-sm mt-16 mb-4">
          WORKS
        </p>

        <h1 className="text-6xl mb-10">ANZU Portfolio Site</h1>

        <div className="bg-white p-12 mb-16">
          <p className="text-gray-700 leading-9">
            Webデザイン学習の成果と、インフラエンジニアとしての経験を伝えるために制作したポートフォリオサイトです。
            デザインカンプ作成からNext.jsでの実装、GitHub管理、Vercel公開まで一連の流れを行いました。
          </p>
        </div>

        <section className="space-y-12 text-gray-700 leading-9">
          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">制作概要</h2>
            <p>
              自身のプロフィール、制作実績、スキル、制作の流れ、お問い合わせ導線を1ページにまとめたポートフォリオサイトです。
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">
            制作背景
            </h2>

            <p>
            Webデザインとフロントエンド開発の両方のスキルをアピールできるポートフォリオを目指して制作しました。
            見る人が作品を迷わず閲覧できるよう、シンプルな構成と操作性を意識し、デザインから実装、公開まで一貫して担当しました。
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">ターゲット</h2>
            <p>
              Webデザインやフロントエンド開発の依頼を検討している企業・クライアント、採用担当者。
              短時間で制作実績やスキル、人柄が伝わるような構成を意識しました。
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">使用技術</h2>
            <p>Next.js / TypeScript / Tailwind CSS / GitHub / Vercel</p>
          </div>

          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">担当範囲</h2>
            <p>要件定義 / 画面設計 / デザインカンプ作成 / コーディング / デプロイ</p>
          </div>

          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">工夫したポイント</h2>
            <p>
              ベージュを基調にした落ち着いた配色と余白を活かし、親しみやすさと信頼感が伝わるデザインを意識しました。
              また、作品詳細ページやスムーススクロール、ホバーアニメーションを実装し、閲覧しやすいサイトになるよう調整しています。
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">
            制作期間
            </h2>

            <p>
            約10日間
            </p>
          </div>

          <div>
            <h2 className="text-2xl text-[#9A7654] mb-4">URL</h2>
            <a
              href="https://portfolio-site-psi-lac.vercel.app/"
              target="_blank"
              className="text-[#9A7654] underline"
            >
              公開サイトを見る
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}