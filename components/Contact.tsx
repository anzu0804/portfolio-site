export default function Contact() {
  return (
    <section 
        id="contact"
        className="max-w-7xl mx-auto px-16 py-32">
      
      <div className="grid md:grid-cols-2 gap-20">

        <div>
          <p className="text-[#C8B299] tracking-[0.3em] text-sm mb-4">
            CONTACT
          </p>

          <h2 className="text-6xl mb-10">
            お問い合わせ
          </h2>

          <p className="text-gray-600 leading-10">
            お仕事のご依頼・ご相談は、
            以下のフォームよりお気軽にどうぞ。
            <br />
            2営業日以内にご返信いたします。
          </p>

          <div className="mt-12 space-y-4">
            <div className="flex gap-8 border-b pb-4">
              <span className="text-[#C8B299]">
                対応エリア
              </span>
              <span>
                全国（オンライン対応可）
              </span>
            </div>

            <div className="flex gap-8 border-b pb-4">
              <span className="text-[#C8B299]">
                稼働状況
              </span>
              <span>
                ご相談ください
              </span>
            </div>
          </div>
        </div>

        <form className="space-y-8">
          <div>
            <label className="block mb-2">
              お名前
            </label>
            <input
              type="text"
              className="w-full border-b p-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2">
              メールアドレス
            </label>
            <input
              type="email"
              className="w-full border-b p-3 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2">
              メッセージ
            </label>
            <textarea
              rows={5}
              className="w-full border-b p-3 outline-none resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-[#9B7957] text-white px-12 py-4"
          >
            送信する
          </button>
        </form>

      </div>
    </section>
  );
}