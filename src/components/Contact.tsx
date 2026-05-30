"use client";

import { motion } from "framer-motion";

const contactMethods = [
  {
    label: "Email",
    value: "heratshah50@gmail.com",
    href: "mailto:heratshah50@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "purple",
  },
  {
    label: "Phone",
    value: "+91-7698225335",
    href: "tel:+917698225335",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    color: "pink",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/heratshah1810",
    href: "https://linkedin.com/in/heratshah1810",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    color: "teal",
  },
  {
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "amber",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  purple: { bg: "bg-purple-50", text: "text-purple-600", border: "border-purple-200" },
  pink: { bg: "bg-pink-50", text: "text-pink-600", border: "border-pink-200" },
  teal: { bg: "bg-teal-50", text: "text-teal-600", border: "border-teal-200" },
  amber: { bg: "bg-amber-50", text: "text-amber-600", border: "border-amber-200" },
};

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            <span className="gradient-text-simple">Get In Touch</span>
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto mt-3 text-[15px]">
            I&apos;m always open to new opportunities, collaborations, and conversations.
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            {contactMethods.map((method, i) => {
              const c = colorMap[method.color];
              const content = (
                <div className="group flex items-center gap-4 p-4 rounded-xl card">
                  <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center ${c.text} shrink-0`}>
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-stone-400 font-medium uppercase tracking-wider">{method.label}</p>
                    <p className="text-base font-medium text-stone-700">{method.value}</p>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  {method.href ? (
                    <a href={method.href} target={method.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card rounded-2xl p-7"
          >
            <h3 className="text-xl font-semibold text-stone-800 mb-3">Let&apos;s work together</h3>
            <p className="text-stone-500 text-[15px] mb-6 leading-relaxed">
              Whether you have a project in mind, a role that might be a good fit, or just want to connect — I&apos;d love to hear from you.
            </p>
            <motion.a
              href="mailto:heratshah50@gmail.com"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white text-base font-semibold transition-shadow hover:shadow-xl hover:shadow-purple-200/50 w-full justify-center"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send an Email
            </motion.a>
            <div className="mt-6 pt-6 border-t border-stone-100">
              <motion.a
                href="/Herat_Shah_IT_Project_Coordinator_Resume.docx"
                download
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex w-full items-center justify-center gap-3 px-6 py-3.5 bg-white border-2 border-purple-200 rounded-xl text-purple-700 text-base font-semibold transition-all duration-300 hover:bg-purple-50 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-100/50"
              >
                <svg className="w-5 h-5 text-purple-500 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
                <span className="text-xs text-purple-400 font-normal">(.docx)</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
