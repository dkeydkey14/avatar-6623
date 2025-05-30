'use client';

export default function Header() {
  return (
    <header className="w-full z-50 absolute bg-[#1C1C1C] shadow-md">
      <div className="w-full sm:w-[90%] md:w-[80%] mx-auto px-3 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="block transition-transform duration-200 hover:scale-105">
            <img
              src="/images/Untitled-7 (3).png"
              alt="Logo"
              className="h-12 xs:h-14 sm:h-16 md:h-20"
            />
          </a>
        </div>
        <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-4">
          <a href="https://t.me/thongbaochinhthuc6623" className="hidden sm:block transition-transform duration-200 hover:scale-105 hover:drop-shadow-lg">
            <img
              src="/images/tb.png"
              alt="Thông báo"
              className="h-6 sm:h-9 md:h-10"
              style={{
                animation: 'pulse-scale 2.5s infinite alternate',
              }}
            />
          </a>
          <a href="https://www.6623wbs.xyz/home/event?eventCurrent=10003" className="block transition-transform duration-200 hover:scale-105 hover:drop-shadow-lg">
            <img
              src="/images/dang-nhap.png"
              alt="Đăng nhập"
              className="h-6 xs:h-7 sm:h-9 md:h-10"
              style={{
                animation: 'pulse-scale 2.5s infinite alternate',
              }}
            />
          </a>
          <a href="https://www.6623wbs.xyz/home/event?eventCurrent=10003" className="block transition-transform duration-200 hover:scale-105 hover:drop-shadow-lg">
            <img
              src="/images/dang-kí.png"
              alt="Đăng ký"
              className="h-6 xs:h-7 sm:h-9 md:h-10"
              style={{
                animation: 'pulse-scale 2.5s infinite alternate',
              }}
            />
          </a>
        </div>
      </div>
      <a
        href="https://t.me/thongbaochinhthuc6623"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-2 left-2 w-[81px] h-[81px] block sm:hidden z-50"
      >
        <img
          src="/images/kenh-thon-gbao.gif"
          alt="Kênh thông báo"
          className="w-full h-full"
        />
      </a>
    </header>
  );
}
