
export const metadata = {
    title: '개인정보처리방침 | VibeCheck',
    description: 'VibeCheck의 개인정보처리방침입니다.',
}

export default function PrivacyPage() {
    return (
        <div className="max-w-prose mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">개인정보처리방침</h1>
            <div className="space-y-4 text-sm text-gray-700">
                <p>
                    VibeCheck(이하 '회사')은(는) 이용자의 개인정보를 중요시하며, '정보통신망 이용촉진 및 정보보호 등에 관한 법률' 등 관련 법령을 준수하고 있습니다.
                </p>

                <h2 className="text-lg font-semibold mt-6 mb-2">1. 개인정보의 수집 및 이용 목적</h2>
                <p>회사는 다음의 목적을 위해 개인정보를 수집 및 이용합니다.</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>서비스 제공 및 운영</li>
                    <li>사용자 분석 및 서비스 개선 (Google Analytics 등)</li>
                    <li>광고 게재 (Google AdSense 등)</li>
                </ul>

                <h2 className="text-lg font-semibold mt-6 mb-2">2. 수집하는 개인정보 항목</h2>
                <p>회사는 서비스 이용 과정에서 다음과 같은 정보들이 자동으로 생성/수집될 수 있습니다.</p>
                <ul className="list-disc list-inside ml-2 space-y-1">
                    <li>IP 주소, 쿠키, 방문 기록, 서비스 이용 기록, 기기 정보</li>
                </ul>

                <h2 className="text-lg font-semibold mt-6 mb-2">3. 쿠키(Cookie)의 운용 및 거부</h2>
                <p>
                    회사는 이용자에게 개별적인 맞춤서비스를 제공하기 위해 이용정보를 저장하고 수시로 불러오는 '쿠키(cookie)'를 사용합니다.
                    이용자는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹브라우저 옵션 설정을 통해 모든 쿠키를 허용하거나, 거부할 수 있습니다.
                </p>
                <p className="mt-2">
                    * 설정 방법 예(Chrome의 경우): 웹브라우저 우측 상단의 설정 &gt; 개인정보 및 보안 &gt; 쿠키 및 기타 사이트 데이터
                </p>

                <h2 className="text-lg font-semibold mt-6 mb-2">4. 제3자 광고 서비스</h2>
                <p>
                    회사는 Google AdSense와 같은 타사 광고 회사를 이용하여 광고를 게재할 수 있습니다.
                    이러한 회사는 이용자의 관심사에 맞는 광고를 제공하기 위해 쿠키 등을 사용하여 방문 기록 정보를 수집할 수 있습니다.
                </p>

                <h2 className="text-lg font-semibold mt-6 mb-2">5. 개인정보 보호책임자</h2>
                <p>이메일: (준비 중)</p>

                <p className="text-xs text-gray-500 mt-8">이 방침은 2025년 5월 27일부터 시행됩니다.</p>
            </div>
        </div>
    )
}
