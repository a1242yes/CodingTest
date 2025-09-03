function solution(score) {
  // 1️⃣ 평균 구하기
  const averages = score.map(inner => {
    const sum = inner.reduce((a, b) => a + b, 0);
    return sum / inner.length;
  });

  // 2️⃣ 평균 내림차순으로 정렬한 배열 만들기
  const sorted = [...averages].sort((a, b) => b - a);

  // 3️⃣ 각 평균의 등수를 계산
  const ranks = averages.map(avg => sorted.indexOf(avg) + 1);

  return ranks;
}
