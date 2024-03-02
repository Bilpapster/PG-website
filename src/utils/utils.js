export const getRankLiteral = (rank) => {
  return `${rank}${
    rank === 1 ? 
        "st" : 
    rank === 2 ? 
        "nd" : 
    rank === 3 ? 
        "rd" : 
        "th"
  }`;
};
