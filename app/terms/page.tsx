
export const metadata = {
    title: '이용약관 | VibeCheck',
    description: 'VibeCheck의 이용약관입니다.',
}

export default function TermsPage() {
    return (
        <div className="max-w-prose mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-6">이용약관</h1>
            <div className="space-y-4 text-sm text-gray-700">
                <h2 className="text-lg font-semibold mt-6 mb-2">제1조 (목적)</h2>
                <p>
                    본 약관은 VibeCheck(이하 '회사')가 제공하는 모든 서비스(이하 '서비스')의 이용조건 및 절차, 회사와 회원의 권리, 의무 및 책임사항 등을 규정함을 목적으로 합니다.
                </p>

                <h2 className="text-lg font-semibold mt-6 mb-2">제2조 (약관의 효력 및 변경)</h2>
                <p>
                    본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다. 회사는 필요하다고 인정되는 면 약관을 변경할 수 있으며, 변경된 약관은 서비스 화면에 공지함으로써 효력이 발생합니다.
                </p>

                <h2 className="text-lg font-semibold mt-6 mb-2">제3조 (서비스의 제공 및 변경)</h2>
                <p>
                    회사는 이용자에게 다양한 심리테스트 및 관련 콘텐츠를 제공합니다. 서비스의 내용, 이용방법, 이용시간 등은 회사의 사정에 따라 변경될 수 있습니다.
                </p>

                <h2 className="text-lg font-semibold mt-6 mb-2">제4조 (지적재산권)</h2>
                <p>
                    회사가 작성한 저작물에 대한 저작권 및 기타 지적재산권은 회사에 귀속됩니다. 이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.
                </p>

                <h2 className="text-lg font-semibold mt-6 mb-2">제5조 (면책조항)</h2>
                <p>
                    회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다. 또한 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
                </p>

                <p className="text-xs text-gray-500 mt-8">이 약관은 2025년 5월 27일부터 시행됩니다.</p>
            </div>
        </div>
    )
}
