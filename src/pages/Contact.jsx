import React from 'react'

export default function Contact() {
  return (
      <section>
            <div className="py-40 bg-[#192338]">
                <h2 className="text-3xl font-bold text-center mb-8 text-[#D9E1F1]">Contact Us</h2>
                <p className="text-center mb-4 text-[#D9E1F1]">We'd love to hear from you! Reach out to us with any questions or feedback.</p>
                <form className="max-w-md mx-auto">
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-[#D9E1F1]" htmlFor="name">Name</label>
                        <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-[#D9E1F1]" htmlFor="email">Email</label>
                        <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2 text-[#D9E1F1]" htmlFor="message">Message</label>
                        <textarea id="message" rows="4" className="w-full p-2 border border-gray-300 rounded" required></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#31487A] text-white py-2 rounded hover:bg-blue-700 transition duration-200">Send Message</button>
                </form>
            </div>

        </section>
  )
}
