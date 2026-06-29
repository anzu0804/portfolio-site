import Image from "next/image";
import Link from "next/link";

export default function Works() {
  return (
    <section
      id="works"
      className="max-w-7xl mx-auto px-16 py-32"
    >
      <p className="text-[#C8B299] tracking-[0.3em] text-sm mb-4">
        WORKS
      </p>

      <h2 className="text-6xl mb-16">
        制作実績
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        <Link
  href="/works/exchange-banner"
  className="block bg-white border border-[#E8DED4] rounded-xl overflow-hidden hover:-translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer"
>
          <div className="relative h-64">
            <Image
            src="/images/exchange-banner.jpg"
            alt="Webデザイナー交流会バナー"
            fill
            className="object-cover"
          />
</div>

          <div className="p-6">
            <p className="text-xs text-[#C8B299] mb-2">
              バナーデザイン
            </p>

            <h3 className="text-2xl mb-4">
              Webデザイナー交流会バナー
            </h3>

            <p className="text-gray-600">
              女性Webデザイナー向け交流会の
              告知バナー制作。
            </p>
          </div>
        </Link>

<Link
  href="/works/portfolio-site"
  className="block bg-white hover:-translate-y-2 hover:shadow-xl transition duration-300 cursor-pointer"
>
   <div className="relative h-64">
            <Image
            src="/images/portforio.jpg"
            alt="っポートフォリオサイト"
            fill
            className="object-cover"
          />
</div>

  <div className="p-6">
    <p className="text-xs text-[#C8B299] mb-2">Webサイト制作</p>
    <h3 className="text-2xl mb-4">ポートフォリオサイト</h3>
    <p className="text-gray-600">
      Next.jsで制作した自身のポートフォリオサイト。
    </p>
  </div>
</Link>

        <div className="bg-white">
          <div className="h-64 bg-gray-200"></div>

          <div className="p-6">
            <p className="text-xs text-[#C8B299] mb-2">
              UIデザイン
            </p>

            <h3 className="text-2xl mb-4">
              シフト作成システム
            </h3>

            <p className="text-gray-600">
              看護師向けシフト作成システムの
              UIデザイン。
            </p>
          </div>
        </div>

        <div className="bg-white">
          <div className="h-64 bg-gray-200"></div>

          <div className="p-6">
            <p className="text-xs text-[#C8B299] mb-2">
              SNSデザイン
            </p>

            <h3 className="text-2xl mb-4">
              自己紹介バナー
            </h3>

            <p className="text-gray-600">
              ポートフォリオ・SNS用の
              自己紹介バナー。
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}