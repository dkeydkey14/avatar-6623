import Body from '@/components/Body'
import Content from '@/components/Content'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen relative" style={{
      backgroundImage: 'url(/BACKGROUND.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* Header */}
      <Header />
      
      {/* Wrapper để đẩy nội dung xuống dưới header */}
      <div className="pt-16 sm:pt-20 md:pt-24">
        {/* Hình ảnh tiêu đề */}
        <div className="w-full title-gradient-bg py-4 sm:py-3 md:py-4 relative overflow-visible">
          {/* Hiệu ứng trang trí */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-5 left-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-700 opacity-20 blur-xl"></div>
            <div className="absolute bottom-2 right-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-600 opacity-20 blur-xl"></div>
          </div>
          
          <div className="container mx-auto px-0 flex justify-center items-center overflow-visible relative">
            {/* Mũi tên bên trái */}
            <div className="absolute left-1 sm:left-8 md:left-20 lg:left-36 xl:left-48 z-10">
              <div className="flex items-center">
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-l-[1.5px] sm:border-l-2 border-white arrow-animation transform -rotate-45"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-l-[1.5px] sm:border-l-2 border-white arrow-animation transform -rotate-45 -ml-1 sm:-ml-2"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-l-[1.5px] sm:border-l-2 border-white arrow-animation transform -rotate-45 -ml-1 sm:-ml-2"></div>
                <div className="h-[1.5px] sm:h-[2px] bg-white line-animation w-6 sm:w-12 md:w-20 lg:w-28"></div>
              </div>
            </div>
            
            <h1 
              className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider relative z-10 hover:scale-105 transition-transform duration-300 py-2 px-2 xs:px-4 text-center title-animation"
              style={{
                animation: 'pulse-scale-title 3s infinite ease-in-out, color-change 2s infinite'
              }}
            >
              AVATAR NHẬN CODE GIÁ TRỊ
            </h1>
            
            {/* Mũi tên bên phải */}
            <div className="absolute right-1 sm:right-8 md:right-20 lg:right-36 xl:right-48 z-10">
              <div className="flex items-center">
                <div className="h-[1.5px] sm:h-[2px] bg-white line-animation w-6 sm:w-12 md:w-20 lg:w-28"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-r-[1.5px] sm:border-r-2 border-white arrow-animation transform rotate-45 -mr-1 sm:-mr-2"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-r-[1.5px] sm:border-r-2 border-white arrow-animation transform rotate-45 -mr-1 sm:-mr-2"></div>
                <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-r-[1.5px] sm:border-r-2 border-white arrow-animation transform rotate-45"></div>
              </div>
            </div>
          </div>
          
          {/* Gợn sóng trang trí */}
          <div className="absolute bottom-0 left-0 w-full h-2 sm:h-4 bg-transparent" style={{ 
            clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 75% 50%, 50% 0%, 25% 50%, 0% 0%)' 
          }}></div>
        </div>
        
        {/* Body Content */}
        <Body />
        
        {/* Phần thể lệ */}
        <div className="mt-8 sm:mt-12">
          {/* Hình ảnh tiêu đề thể lệ */}
          <div className="w-full title-gradient-bg py-4 sm:py-3 md:py-4 relative overflow-visible">
            {/* Hiệu ứng trang trí */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-5 left-10 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-700 opacity-20 blur-xl"></div>
              <div className="absolute bottom-2 right-20 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-600 opacity-20 blur-xl"></div>
            </div>
            
            <div className="container mx-auto px-0 flex justify-center items-center overflow-visible relative">
              {/* Mũi tên bên trái */}
              <div className="absolute left-1 sm:left-8 md:left-20 lg:left-36 xl:left-48 z-10">
                <div className="flex items-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-l-[1.5px] sm:border-l-2 border-white arrow-animation transform -rotate-45"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-l-[1.5px] sm:border-l-2 border-white arrow-animation transform -rotate-45 -ml-1 sm:-ml-2"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-l-[1.5px] sm:border-l-2 border-white arrow-animation transform -rotate-45 -ml-1 sm:-ml-2"></div>
                  <div className="h-[1.5px] sm:h-[2px] bg-white line-animation w-6 sm:w-12 md:w-20 lg:w-28"></div>
                </div>
              </div>
              
              <h2 
                className="text-base xs:text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider relative z-10 hover:scale-105 transition-transform duration-300 py-2 px-2 xs:px-4 text-center glow-animation"
                style={{
                  animation: 'pulse-scale-title 3s infinite ease-in-out, color-change 2s infinite'
                }}
              >
                THỂ LỆ SỰ KIỆN
              </h2>
              
              {/* Mũi tên bên phải */}
              <div className="absolute right-1 sm:right-8 md:right-20 lg:right-36 xl:right-48 z-10">
                <div className="flex items-center">
                  <div className="h-[1.5px] sm:h-[2px] bg-white line-animation w-6 sm:w-12 md:w-20 lg:w-28"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-r-[1.5px] sm:border-r-2 border-white arrow-animation transform rotate-45 -mr-1 sm:-mr-2"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-r-[1.5px] sm:border-r-2 border-white arrow-animation transform rotate-45 -mr-1 sm:-mr-2"></div>
                  <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 border-t-[1.5px] sm:border-t-2 border-r-[1.5px] sm:border-r-2 border-white arrow-animation transform rotate-45"></div>
                </div>
              </div>
            </div>
            
            {/* Gợn sóng trang trí */}
            <div className="absolute bottom-0 left-0 w-full h-2 sm:h-4 bg-transparent" style={{ 
              clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 75% 50%, 50% 0%, 25% 50%, 0% 0%)' 
            }}></div>
          </div>
          
          {/* Content Component */}
          <div className="mt-4 sm:mt-6">
            <Content />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white border-opacity-20 mt-6 sm:mt-8 py-3 sm:py-4 bg-black bg-opacity-70 backdrop-blur-sm text-[#FEB705] text-center text-xs sm:text-sm shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <p>
            © 2025 <span className="font-semibold"><a href="https://www.6623wbs.xyz/home/event?eventCurrent=10003" className="hover:text-gray-400 transition-colors">6623</a></span>. <a href="https://www.6623wbs.xyz/home/event?eventCurrent=10003" className="hover:text-gray-400 transition-colors"></a> THIÊN ĐƯỜNG GIẢI TRÍ BẠC TỶ!.
          </p>
        </div>
      </footer>
    </main>
  )
}