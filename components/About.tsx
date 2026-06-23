export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-16 py-32"
    >
      <div className="grid md:grid-cols-2 gap-24">

        <div>
          <h2 className="text-5xl text-[#9A7654] tracking-widest mb-8">
            ANZU
          </h2>

          <div className="border border-[#E6D8CC] w-fit px-10 py-6 mb-16">
            <p className="tracking-[0.2em]">
              Infrastructure Engineer
            </p>

            <p className="text-center my-4">×</p>

            <p className="tracking-[0.2em]">
              Web Designer
            </p>
          </div>

          <p className="text-[#C8B299] tracking-[0.3em] text-sm mb-4">
            ABOUT
          </p>

          <h3 className="text-6xl mb-10">
            わたしについて
          </h3>

          <p className="text-gray-600 leading-10">
            フリーランスのインフラエンジニアとして働きながら、
            Webデザインを学んでいます。
            <br />
            <br />
            これまで培った論理的思考力と課題解決力を活かし、
            見る人に伝わるデザインを心がけています。
            <br />
            <br />
            ユーザー目線を大切にしながら、
            わかりやすく使いやすいデザイン制作を目指しています。
          </p>
        </div>

        <div>
          <h3 className="text-3xl text-[#9A7654] mb-10">
            経歴
          </h3>

          <div className="space-y-8 text-gray-600">
            <p>2022　インフラエンジニアとしてIT業界へ従事</p>
            <p>202　SHElikesにてWebデザイン学習開始</p>
            <p>2026　ポートフォリオ制作および自主制作を開始</p>
          </div>

          <h3 className="text-3xl text-[#9A7654] mt-20 mb-10">
            Webデザインを始めたきっかけ
          </h3>

          <p className="text-gray-600 leading-10">
            インフラエンジニアとして働く中で、
            システムの機能だけでなく
            「どのように見せるか」
            「どのように伝えるか」
            の重要性を感じるようになりました。
            <br />
            <br />
            技術だけではなく、
            デザインの力でより多くの人の課題解決に
            貢献したいと考え、
            Webデザインの学習を始めました。
          </p>
        </div>

      </div>
    </section>
  );
}