import Image from "next/image";

export default function Hero() {
  return (
    <section id="top"
className="max-w-7xl mx-auto px-5 pt-28 pb-16 md:px-16 md:py-32">
                
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        <div>
          
<p className="text-[#7A5A3A] tracking-[0.3em] text-sm mb-8">
  WEB DESIGNER
</p>


          <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-6xl leading-tight mb-8 md:mb-10 font-serif">
            伝わるデザインで、
            <br />
            人と想いをつなぐ。
        </h1>

          
<p className="text-gray-600 text-sm lg:text-base leading-8 md:leading-9 mb-8 md:mb-12">
  見た目だけでなく、想いや価値が届くデザインを。
  <br className="hidden lg:block" />
  一つひとつのプロジェクトに向き合い、
  <br className="hidden lg:block" />
  あなたのビジョンをかたちにします。
</p>


          
<a
  href="#works"
  className="inline-block bg-[#9A7654] text-white px-8 py-4 hover:bg-[#A67C52] hover:-translate-y-1 transition duration-300"
>
  制作実績を見る →
</a>

        </div>

        <div className="flex justify-center">
            
<div className="relative w-full max-w-[500px] aspect-[10/13]">

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