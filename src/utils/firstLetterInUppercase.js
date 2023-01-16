export function firstLetterInUppercase(value) {
  const textSplited = value.split(" ");
  const allWordsInUpperCase = textSplited.map((x) => {
    const wordSplited = x.split("");
    wordSplited[0] = wordSplited[0].toUpperCase();
    return wordSplited.join("");
  });
  return allWordsInUpperCase.join(" ");
}
