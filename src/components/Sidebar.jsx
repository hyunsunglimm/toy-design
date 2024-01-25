export default function Sidebar() {
  return (
    <div className="w-[300px] py-8 pl-12 fixed top-[80px] h-full border-r-[1px] border-gray-200">
      <div className="flex flex-col justify-between h-full">
        <div>
          <p className="font-bold text-lg mb-8">페이지</p>
          <ul className="text-gray-400">
            <li className="mb-6">메인</li>
            <li className="mb-6">직원관리</li>
            <li className="mb-6">시간관리</li>
            <li className="mb-6">부서확인</li>
          </ul>
        </div>
        <div className="pb-[80px]">
          <p className="font-bold text-lg mb-8">기타기능</p>
          <ul className="text-gray-400">
            <li className="mb-6">설정</li>
            <li className="mb-6">알림</li>
            <li className="mb-6">로그아웃</li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
