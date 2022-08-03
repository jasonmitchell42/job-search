import { evenOrOdd } from "@/playground";
import { isReactive } from "vue";

describe("basic math", () => {
  it("adds two numbers", () => {
    expect(1 + 1).toBe(2);
  });

  it("subtract two numbers", () => {
    expect(5 - 3).toBe(2);
  });

  describe("evenOrOdd", () => {
    describe("when the number is even", () => {
      it("indicates the number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });
    describe("when the number is odd", () => {
      it("indicates the number is odd", () => {
        expect(evenOrOdd(7)).toBe("Odd");
      });
    });
  });
});
