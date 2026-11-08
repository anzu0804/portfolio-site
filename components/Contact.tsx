
"use client";

import { useState } from "react";


export default function Contact() {


const [status, setStatus] = useState<
  "idle" | "sending" | "success" | "error"
>("idle");


async function handleSubmit(
  event: React.SubmitEvent<HTMLFormElement>
) {
  event.preventDefault();
  setStatus("sending");

  const form = event.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("送信に失敗しました");
    }

    form.reset();
    setStatus("success");
  } catch (error) {
    console.error(error);
    setStatus("error");
  }
}

  return (
    <section 
        id="contact"
        className="max-w-7xl mx-auto px-16 py-32">
      
      <div className="grid md:grid-cols-2 gap-20">

        <div>
          <p className="text-[#7A5A3A] tracking-[0.3em] text-sm mb-4">
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
              <span className="text-[#7A5A3A]">
                対応エリア
              </span>
              <span>
                全国（オンライン対応可）
              </span>
            </div>

            <div className="flex gap-8 border-b pb-4">
              <span className="text-[#7A5A3A]">
                稼働状況
              </span>
              <span>
                ご相談ください
              </span>
            </div>
          </div>
        </div>

        

<form
  action="https://formspree.io/f/xoeezbab"
  method="POST"
  onSubmit={handleSubmit}
  className="space-y-8"
>


         <div>
  <label htmlFor="name" className="block mb-2">
    お名前
  </label>
  <input
    id="name"
    name="name"
    type="text"
    required   
className="w-full border-b p-3 outline-none focus-visible:ring-2 focus-visible:ring-[#9B7957] focus-visible:ring-offset-2"
/>
</div>

          
<div>
  <label htmlFor="email" className="block mb-2">
    メールアドレス
  </label>
  <input
    id="email"
    name="email"
    type="email"
    autoComplete="email"
    required
    className="w-full border-b p-3 outline-none resize-none focus-visible:ring-2 focus-visible:ring-[#9B7957] focus-visible:ring-offset-2"
/>
</div>


          
<div>
  <label htmlFor="message" className="block mb-2">
    メッセージ
  </label>
  <textarea
    id="message"
    name="message"
    rows={5}
    required
    minLength={10}
    className="w-full border-b p-3 outline-none resize-none focus-visible:ring-2 focus-visible:ring-[#9B7957] focus-visible:ring-offset-2"
/>
</div>


          
<button
  type="submit"
  disabled={status === "sending"}
  className="bg-[#9B7957] text-white px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
>
  {status === "sending" ? "送信中..." : "送信する"}
</button>


{status === "success" && (
  <p role="status" className="text-green-700">
    お問い合わせを送信しました。
    ありがとうございます！
  </p>
)}

{status === "error" && (
  <p role="alert" className="text-red-600">
    送信に失敗しました。
    時間をおいて再度お試しください。
  </p>
)}

        </form>

      </div>
    </section>
  );
}