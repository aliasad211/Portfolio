export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black backdrop-blur-md border-t border-slate-700 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright info */}
        <p className="text-sm text-white">
          &copy; {currentYear} <span className="text-[#00a6fb] font-medium">Ali Asad</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-sm flex-wrap gap-y-2">
          <a 
            href="https://github.com/aliasad211" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#00a6fb] transition-colors duration-300 font-medium"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/muhammad-ali-asad-0b34562b1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#00a6fb] transition-colors duration-300 font-medium"
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/its_me_aliasad785?igsh=NmV4NXdwMHFubTBv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#00a6fb] transition-colors duration-300 font-medium"
          >
            Instagram
          </a>
          <a 
            href="http://t.me/ItsAliAsad785" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white hover:text-[#00a6fb] transition-colors duration-300 font-medium"
          >
            Telegram
          </a>
        </div>

      </div>
    </footer>
  );
}