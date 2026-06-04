export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/60 backdrop-blur-md border-t border-slate-900 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Copyright info */}
        <p className="text-sm">
          &copy; {currentYear} <span className="text-[#00a6fb] font-medium">Ali Asad</span>. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-sm">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#00a6fb] transition-colors duration-300 font-medium"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#00a6fb] transition-colors duration-300 font-medium"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}