// estudando jest + test library no react

const sum = (x, y) => {
  return x + y;
};

describe("App componente", () => {
  it("should sum correctly", () => {
    expect(sum(4, 4)).toBe(8);
  });
});
