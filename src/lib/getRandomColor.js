

// 총 13가지 색상 중 랜덤으로 선택하는 함수.
export default function getRandomColor() {
    console.log("====== getRandomColor() ======")
    const colors = [
        '#490557',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6',
        '#1098ad',
        '#0ca678',
        '#37b24d',
        '#74b816',
        '#f59f00',
        '#f76707'
    ]

    // 0부터 12까지 랜덤숫자
    const random = Math.floor(Math.random() * 13);

    // 랜덤 색상 변경
    return colors[random];
}