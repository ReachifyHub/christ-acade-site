
import { MessageCircle as WhatsApp, Video as TikTok } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="mt-8">
      <h3 className="font-medium text-lg text-school-primary mb-4">Connect With Us</h3>
      <div className="flex space-x-4">
        <a
          href="https://wa.me/2348102473418"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors"
          aria-label="WhatsApp"
        >
          <WhatsApp className="w-5 h-5" />
        </a>
        <a
          href="https://www.tiktok.com/@christacadegroup"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="TikTok"
        >
          <TikTok className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
