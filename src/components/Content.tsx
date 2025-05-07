'use client';

export default function Content() {
  return (
    <div className="container mx-auto px-2 xs:px-4 py-4 sm:py-8 max-w-full sm:max-w-3xl bg-[#1C1C1C] bg-opacity-90 rounded-lg backdrop-blur-sm shadow-lg">
      <div className="bg-[#2A2A2A] bg-opacity-95 rounded-lg shadow-lg overflow-hidden text-white">
        {/* Nội dung */}
        <div className="p-3 xs:p-4 sm:p-6">
          <div className="space-y-4 xs:space-y-5 sm:space-y-8">
            {/* Đối tượng tham gia */}
            <div className="border-l-4 border-[#FEB705] pl-3 sm:pl-5 py-2">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#FEB705] mb-2 sm:mb-3 flex items-center">
                <span className="bg-[#FEB705] text-[#1C1C1C] rounded-full w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </span>
                ĐỐI TƯỢNG THAM GIA
              </h2>
              <p className="text-sm xs:text-base sm:text-lg ml-7 xs:ml-8 sm:ml-11 font-medium text-gray-300">
                Tất cả hội viên của 6623
              </p>
            </div>

            {/* Cách thức tham gia */}
            <div className="border-l-4 border-[#FEB705] pl-3 sm:pl-5 py-2">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#FEB705] mb-2 sm:mb-3 flex items-center">
                <span className="bg-[#FEB705] text-[#1C1C1C] rounded-full w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                CÁCH THỨC THAM GIA
              </h2>
              <p className="text-sm xs:text-base sm:text-lg ml-7 xs:ml-8 sm:ml-11 font-medium text-gray-300">
                Tạo hình đại diện Facebook có logo của 6623
              </p>
            </div>

            {/* Quy định thời gian */}
            <div className="bg-[#333333] p-3 sm:p-5 rounded-lg">
              <h3 className="text-lg sm:text-xl font-bold text-[#FEB705] mb-3 sm:mb-4 pb-2 border-b border-gray-600">
                Quy định thời gian giữ hình đại diện:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-white font-bold mr-2 flex-shrink-0">👉</span>
                  <p className="text-sm xs:text-base sm:text-lg ml-7 xs:ml-8 sm:ml-11 font-medium text-gray-300">
                    Hình đại diện cần được giữ nguyên tối thiểu <span className="font-bold text-[#FEB705]">5 ngày liên tục</span>.
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-white font-bold mr-2 flex-shrink-0">👉</span>
                  <p className="text-sm xs:text-base sm:text-lg ml-7 xs:ml-8 sm:ml-11 font-medium text-gray-300">
                    Ví dụ: Nếu cập nhật hình đại diện vào ngày <span className="font-bold text-[#FEB705]">01/02/2025</span>, đến <span className="font-bold text-[#FEB705]">06/02/2025</span> là đủ điều kiện xét duyệt.
                  </p>
                </div>
              </div>
            </div>

            {/* Yêu cầu tham gia */}
            <div className="border-l-4 border-[#FEB705] pl-3 sm:pl-5 py-2">
              <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-[#FEB705] mb-3 sm:mb-4 flex items-center">
                <span className="bg-[#FEB705] text-[#1C1C1C] rounded-full w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </span>
                YÊU CẦU THAM GIA
              </h2>
              <ul className="space-y-3 sm:space-y-4 ml-7 xs:ml-8 sm:ml-11">
                <li className="flex items-start">
                  <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#444444] text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 sm:mr-3 font-bold">•</span>
                  <p className="text-sm xs:text-base sm:text-lg ml-7 xs:ml-8 sm:ml-11 font-medium text-gray-300">
                    Trang Facebook cá nhân có từ <span className="font-bold text-[#FEB705]">500 bạn bè</span> trở lên.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#444444] text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 sm:mr-3 font-bold">•</span>
                  <p className="text-sm xs:text-base sm:text-lg ml-7 xs:ml-8 sm:ml-11 font-medium text-gray-300">
                    Bài đăng cập nhật hình đại diện ở <span className="font-bold text-[#FEB705]">chế độ công khai</span>. Nhận được ít nhất <span className="font-bold text-[#FEB705]">20 lượt like</span> và <span className="font-bold text-[#FEB705]">10 comment</span> từ bạn bè.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-[#444444] text-white flex items-center justify-center flex-shrink-0 mt-0.5 mr-2 sm:mr-3 font-bold">•</span>
                  <p className="text-sm xs:text-base sm:text-lg ml-7 xs:ml-8 sm:ml-11 font-medium text-gray-300">
                    Chia sẻ hình đại diện của bạn qua <span className="font-bold text-[#FEB705]">3 hội nhóm Facebook công khai</span> có trên <span className="font-bold text-[#FEB705]">5.000 thành viên</span>. Kèm Hashtag:
                  </p>
                </li>
              </ul>
              <div className="mt-2 xs:mt-3 sm:mt-4 bg-[#333333] p-3 sm:p-4 rounded-lg ml-7 xs:ml-8 sm:ml-11">
                <p className="text-center font-bold text-[#FEB705] text-sm xs:text-base sm:text-lg tracking-wider">
                  #6623 #6623trangchu #6623dangnhap
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 