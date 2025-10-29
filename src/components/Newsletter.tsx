import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-20 bg-zinc-950 border-t-4 border-[#FFCC00]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFCC00] rounded-full mb-6">
          <Mail className="w-8 h-8 text-black" />        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Stay Connected to Our Planet
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Get the latest stories, documentaries, and discoveries delivered to your inbox
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 bg-black border-2 border-gray-700 focus:border-[#FFCC00] outline-none text-white rounded-lg transition-colors"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-[#FFCC00] text-black font-bold hover:bg-yellow-400 transition-all transform hover:scale-105 rounded-lg"
          >
            SUBSCRIBE
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates
        </p>
      </div>
    </section>
  );
}
