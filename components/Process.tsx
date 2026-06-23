export default function Process() {
  const steps = [
    {
      no: "01",
      title: "ヒアリング",
      text: "お客様のビジョン・ターゲット・目的を丁寧にお聞きし、方向性を明確にします。",
    },
    {
      no: "02",
      title: "情報整理",
      text: "ヒアリング内容をもとにサイト構成・コンテンツを整理し、設計を行います。",
    },
    {
      no: "03",
      title: "デザイン制作",
      text: "FigmaやPhotoshopなどを用いてデザインを作成。細部までこだわり制作します。",
    },
    {
      no: "04",
      title: "修正・納品",
      text: "フィードバックを反映し、最終確認後に納品します。",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-16 py-32">
      <p className="text-[#C8B299] tracking-[0.3em] text-sm mb-4">
        PROCESS
      </p>

      <h2 className="text-6xl mb-20">
        制作の流れ
      </h2>

      <div className="grid md:grid-cols-4 border border-[#E5DED7]">
        {steps.map((step) => (
          <div
            key={step.no}
            className="p-10 border-r last:border-r-0 border-[#E5DED7]"
          >
            <p className="text-5xl text-[#D8C4B0] mb-6">
              {step.no}
            </p>

            <h3 className="text-xl mb-4">
              {step.title}
            </h3>

            <p className="text-gray-600 leading-8">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}