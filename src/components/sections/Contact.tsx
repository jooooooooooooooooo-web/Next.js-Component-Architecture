'use client'
import { Button } from '@/src/components/ui/Button'
import { Card } from '@/src/components/ui/Card'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-[#D6D6D6]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#102336] mb-4">Contact Me</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            I am always open for new opportunities, and new skills to learn as a result. Learning is a two way street, there is always something
            for both of us to gain from each other.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-4 p-4 bg-white/40 rounded-xl border border-white/20">
              <div className="bg-[#102336] p-3 rounded-lg text-white">
                <FaEnvelope size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#102336]">Email</h4>
                <p className="text-sm text-gray-600">jopfel.gafate@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/40 rounded-xl border border-white/20">
              <div className="bg-[#5D88BB] p-3 rounded-lg text-white">
                <FaLinkedin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#102336]">LinkedIn</h4>
                <p className="text-sm text-gray-600">linkedin.com/in/jopfelgafate</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-white/40 rounded-xl border border-white/20">
              <div className="bg-gray-800 p-3 rounded-lg text-white">
                <FaGithub size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#102336]">GitHub</h4>
                <p className="text-sm text-gray-600">github.com/jopfel-dev</p>
              </div>
            </div>
          </div>
          
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-4">
            <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
                <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D88BB] outline-none transition-all text-black"
                placeholder="John Doe"
                />
                </div>
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input 
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D88BB] outline-none transition-all text-black"
                    placeholder="john@example.com"
                    />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                        <textarea 
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#5D88BB] outline-none transition-all text-black"
                        placeholder="How can I help you?"
                    ></textarea>
                </div>
                <Button variant="primary" className="w-full">
                    Send Message
                </Button>
            </form>
        </div>
      </div>
    </section>
  )
}

export { Contact }