import Image from "next/image";

export default function Hero() {
  return (
    <section id="top"
             className="max-w-7xl mx-auto px-16 py-32">
                
      <div className="grid md:grid-cols-2 gap-20 items-center">

        <div>
          <p className="text-[#C8B299] tracking-[0.3em] text-sm mb-8">
            WEB DESIGNER
          </p>

          <h2 className="text-6xl leading-tight mb-10 font-serif">
            伝わるデザインで、
            <br />
            人と想いをつなぐ。
        </h2>

          <p className="text-gray-600 leading-9 mb-12">
            見た目だけでなく、想いや価値が届くデザインを。
            <br />
            一つひとつのプロジェクトに向き合い、
            <br />
            あなたのビジョンをかたちにします。
          </p>

          <button className="bg-[#9A7654] text-white px-8 py-4 hover:bg-[#A67C52] hover:-translate-y-1
                  transition duration-300">
            <a href="#works"
                className="inline-block bg-[#9A7654] text-white px-8 py-4 hover:opacity-80 transition"
            >
            制作実績を見る →
                </a>
          </button>
        </div>

        <div className="flex justify-center">
            <div className="relative w-[500px] h-[650px]">
                 <Image
                     src="/images/profile.jpg"
                     alt="ANZUのプロフィール写真"
                    fill
                    className="object-cover"
            />
             </div>
        </div>

      </div>
    </section>
  );
}