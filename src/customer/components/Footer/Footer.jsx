import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Company */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Jobs</li>
            <li className="hover:text-white cursor-pointer">Press</li>
            <li className="hover:text-white cursor-pointer">Partners</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Solutions</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Marketing</li>
            <li className="hover:text-white cursor-pointer">Analytics</li>
            <li className="hover:text-white cursor-pointer">Commerce</li>
            <li className="hover:text-white cursor-pointer">Insights</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Documentation */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">
            Documentation
          </h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Guides</li>
            <li className="hover:text-white cursor-pointer">API Status</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Legal</h2>
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer">Claim</li>
            <li className="hover:text-white cursor-pointer">Privacy</li>
            <li className="hover:text-white cursor-pointer">Terms</li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2026 My Company. All rights reserved.</p>
          <p className="text-gray-500">Made with ❤️ by Manish</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;