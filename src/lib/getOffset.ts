
export const getInitialOffsets = (index: number, width: number) => {
  const full = width;
  const mid = width / 2;
  const quarter = width / 4;
  const fortieth = width / 40;

  const offsets = [
    { x: -full, y: -mid },
    { x: fortieth, y: -quarter },
    { x: quarter, y: fortieth },
    { x: full, y: -mid },
    { x: -full, y: mid },
    { x: -quarter, y: -fortieth },
    { x: -fortieth, y: quarter },
    { x: full, y: mid },
  ];

  return offsets[index % 8];
};
