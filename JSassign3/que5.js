// Write a function to replace wrong word with correct word in any sentance.
// Like this - correctfn(string, wrong, correct)
// Use string.replace in function

function correctfn(sentence, wrong, correct) {
    let regex = new RegExp("\\b" + wrong + "\\b", "gi");
  
    let correctedSentence = sentence.replace(regex, correct);
  
    return correctedSentence;
  }
  
  let originalSentence =
    "BabarAzam is king of cricket";
  let wrongWord = "BabarAzam";
  let correctWord = "KingKohli";
  
  let correctedSentence = correctfn(originalSentence, wrongWord, correctWord);
  console.log(correctedSentence);