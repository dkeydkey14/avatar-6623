'use client';

import { useState, useEffect, useRef } from 'react';

export default function Body() {
  // State để lưu trữ ảnh được chọn, mặc định là ảnh đầu tiên
  const [selectedImage, setSelectedImage] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Danh sách ảnh avatar - đã cập nhật với ảnh mới
  const avatars = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  // Di chuyển sang ảnh tiếp theo (chỉ cho slide, không ảnh hưởng đến ảnh chính)
  const nextSlide = () => {
    const next = currentSlide === avatars.length ? 1 : currentSlide + 1;
    setCurrentSlide(next);
    scrollToImage(next);
  };
  
  // Di chuyển sang ảnh trước đó (chỉ cho slide, không ảnh hưởng đến ảnh chính)
  const prevSlide = () => {
    const prev = currentSlide === 1 ? avatars.length : currentSlide - 1;
    setCurrentSlide(prev);
    scrollToImage(prev);
  };
  
  // Cuộn đến ảnh được chọn
  const scrollToImage = (imageId: number) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const index = imageId - 1;
      const itemWidth = slider.scrollWidth / avatars.length;
      slider.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      });
    }
  };
  
  // Xử lý tự động trượt slide (chỉ cho slide, không ảnh hưởng đến ảnh chính)
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        nextSlide();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [currentSlide, isDragging]);
  
  // Xử lý drag và scroll
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };
  
  const onMouseUp = () => {
    setIsDragging(false);
    
    // Tính toán ảnh gần nhất sau khi kéo (chỉ cập nhật currentSlide, không phải selectedImage)
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const itemWidth = slider.scrollWidth / avatars.length;
      const index = Math.round(slider.scrollLeft / itemWidth) + 1;
      setCurrentSlide(Math.max(1, Math.min(index, avatars.length)));
    }
  };
  
  return (
    <div className="container mx-auto px-2 xs:px-4 py-3 sm:py-8">
      {/* Phần hiển thị khung ảnh ở giữa màn hình */}
      <div className="flex flex-col items-center justify-center mb-4 sm:mb-6 md:mb-12">
        <div className="relative w-full max-w-[220px] xs:max-w-[260px] sm:max-w-sm md:max-w-md lg:max-w-lg">
          {/* Ảnh avatar được chọn */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] sm:w-[75%] sm:h-[75%] flex items-center justify-center overflow-hidden">
            <img 
              src={`/images/avatar/${selectedImage}.png`} 
              alt={`Avatar ${selectedImage}`} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
          
          {/* Khung ảnh - đặt z-index cao hơn để đè lên ảnh */}
          <img 
            src="/images/khungavt.png" 
            alt="Khung ảnh" 
            className="w-full h-auto relative z-10"
            style={{
              animation: 'pulse-scale-avatar 3s infinite ease-in-out'
            }}
          />
          
          {/* Nút tải xuống - đặt z-index cao hơn để nằm trên khung, đặt ở mép dưới của khung */}
          <a 
            href={`/images/avatar/${selectedImage}.png`} 
            download={`avatar-${selectedImage}.png`}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 sm:translate-y-1/2 hover:scale-110 transition-transform duration-300 z-20"
          >
            <img 
              src="/images/TAI XUONG.png" 
              alt="Tải xuống" 
              className="h-8 xs:h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
            />
          </a>
        </div>
      </div>
      
      {/* Slide container */}
      <div className="max-w-[280px] xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-3xl mx-auto bg-black bg-opacity-50 backdrop-blur-sm rounded-lg p-2 sm:p-3 md:p-4 shadow-md relative">
        <button
          onClick={prevSlide}
          className="absolute left-[-8px] xs:left-[-12px] sm:left-[-20px] md:left-[-30px] lg:left-[-40px] top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-0.5 xs:p-1 sm:p-1.5 md:p-2 shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Ảnh trước"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-0 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth py-1 sm:py-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
            onMouseMove={onMouseMove}
            onTouchStart={(e) => {
              if (!sliderRef.current) return;
              setIsDragging(true);
              setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
              setScrollLeft(sliderRef.current.scrollLeft);
            }}
            onTouchMove={(e) => {
              if (!isDragging || !sliderRef.current) return;
              const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
              const walk = (x - startX) * 2;
              sliderRef.current.scrollLeft = scrollLeft - walk;
            }}
            onTouchEnd={() => {
              setIsDragging(false);
              // Tính toán ảnh gần nhất sau khi kéo (chỉ cập nhật currentSlide, không phải selectedImage)
              if (sliderRef.current) {
                const slider = sliderRef.current;
                const itemWidth = slider.scrollWidth / avatars.length;
                const index = Math.round(slider.scrollLeft / itemWidth) + 1;
                setCurrentSlide(Math.max(1, Math.min(index, avatars.length)));
              }
            }}
          >
            {avatars.map((id) => (
              <div
                key={id}
                className="flex-shrink-0 w-1/3 xs:w-1/4 sm:w-1/4 snap-center cursor-pointer transition-all duration-300"
                onClick={() => {
                  setSelectedImage(id);
                  setCurrentSlide(id);
                  scrollToImage(id);
                }}
              >
                <div
                  className={`rounded-lg overflow-hidden border-2 transition-all duration-300 max-w-[80px] xs:max-w-[100px] sm:max-w-[120px] md:max-w-[150px] mx-auto ${
                    currentSlide === id
                      ? 'border-white shadow-md transform scale-110'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={`/images/avatar/${id}.png`}
                    alt={`Avatar ${id}`}
                    className="w-full h-auto"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-[-8px] xs:right-[-12px] sm:right-[-20px] md:right-[-30px] lg:right-[-40px] top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-0.5 xs:p-1 sm:p-1.5 md:p-2 shadow-md transition-all duration-300 hover:scale-110"
          aria-label="Ảnh sau"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="flex justify-center mt-2 sm:mt-4 space-x-1 sm:space-x-2">
          {avatars.map((id) => (
            <button
              key={id}
              className={`w-1.5 h-1.5 xs:w-2 xs:h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                currentSlide === id
                  ? 'bg-white scale-125'
                  : 'bg-gray-500 hover:bg-gray-300'
              }`}
              onClick={() => {
                setCurrentSlide(id);
                scrollToImage(id);
              }}
              aria-label={`Chọn ảnh ${id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}