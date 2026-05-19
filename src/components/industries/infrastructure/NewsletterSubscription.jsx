import React from "react";
import { Mail, Send } from "lucide-react";

export default function NewsletterSubscription() {
  return (
    <section className="
      relative
      overflow-hidden
      bg-gradient-to-r
      from-[#3B82F6]
      via-[#69B3F5]
      to-[#9FE6D8]
      py-14
      md:py-20
    ">

      {/* LEFT DECORATION */}
      <div className="
        absolute
        left-4
        md:left-12
        top-1/2
        -translate-y-1/2
        opacity-80
        hidden
        md:block
      ">
        <Mail
          size={50}
          strokeWidth={1.2}
          className="text-white"
        />
      </div>

      {/* RIGHT DECORATION */}
      <div className="
        absolute
        right-4
        md:right-5
        top-1/2
        -translate-y-1/2
        opacity-80
        hidden
        md:block
      ">
        <Send
          size={50}
          strokeWidth={1.2}
          className="text-white rotate-[-15deg]"
        />
      </div>

      {/* CONTENT */}
      <div className="container">

        <div className="
          grid
          lg:grid-cols-2
          gap-12
          lg:gap-20
          items-center
        ">

          {/* LEFT SIDE */}
          <div className="lg:pl-24">

            {/* SMALL TEXT */}
            <p className="
              text-white/80
              uppercase
              tracking-[4px]
              text-[14px]
              md:text-[18px]
              font-medium
              mb-2
            ">
              Newsletter Subscription
            </p>

            {/* TITLE */}
            <h2 className="
              text-white
              font-bold
              text-[30px]
              sm:text-[40px]
              md:text-[40px]
   
            ">
              Get Instant Industry Updates
            </h2>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {/* FORM */}
            <div className="
              flex
              flex-row
              sm:flex-row
              w-full
              overflow-hidden
              rounded-[4px]
              shadow-xl
            ">

              {/* INPUT */}
              <input
                type="email"
                placeholder="Enter your email address"
                className="
                  flex-1
                  h-[60px]
                  md:h-[60px]
                  px-6
                  text-[16px]
                  md:text-[16px]
                  bg-white
                  outline-none
                  border-none
                  text-black
                "
              />

              {/* BUTTON */}
              <button className="
                bg-black
                text-white
                px-8
                md:px-12
                h-[60px]
                md:h-[60px]
                text-[18px]
                md:text-[24px]
                font-medium
                transition-all
                duration-300
                hover:bg-[#111]
              ">
                Subscribe
              </button>

            </div>

            {/* CHECKBOX TEXT */}
            <div className="
              flex
              items-start
              gap-3
              mt-2
            ">

              <input
                type="checkbox"
                className="
                  mt-1
                  w-[14px]
                  h-[14px]
                  accent-white
                "
              />

              <p className="
                text-white/85
                text-[14px]
                font-light
              ">
                Your email is safe with us. We do not spam.
                <span className="underline cursor-pointer ml-1">
                  Privacy Policy
                </span>
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}