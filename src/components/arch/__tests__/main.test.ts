import {} from "@testing-library/jest-dom/matchers";
import { screen } from "@testing-library/dom";

describe("type test", () => {
  document.body.innerHTML = '<div role="dialog">test</div>';

  test("enum", () => {
    enum Color {
      Red = 0,
      Green,
      Blue,
    }

    const c = Color.Red;
    expect(c).toBe(0);
  });

  test("dom", () => {
    const div = screen.getByRole("dialog");
  });
});
