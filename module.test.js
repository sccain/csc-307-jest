import mut from "./module.js";

test("Testing sum -- success", () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test("Testing div: 2/2 -- success", () => {
  const expected = 1;
  const got = mut.div(2, 2);
  expect(got).toBe(expected);
});

test("Testing div: 4/2 -- success", () => {
  const expected = 2;
  const got = mut.div(4, 2);
  expect(got).toBe(expected);
});

test("Testing div: 2/4 -- success", () => {
  const expected = 0.5;
  const got = mut.div(2, 4);
  expect(got).toBe(expected);
});

test("Testing div: 1/0 -- success", () => {
  const expected = 1;
  const got = mut.sum(1, 0);
  expect(got).toBe(expected);
});

test("Testing containsNumbers: T1 -- success", () => {
  const expected = true;
  const got = mut.containsNumbers("Hellow1");
  expect(got).toBe(expected);
});

test("Testing containsNumbers: T2 -- success", () => {
  const expected = true;
  const got = mut.containsNumbers("111");
  expect(got).toBe(expected);
});

test("Testing containsNumbers: F1 -- fail", () => {
  const expected = true;
  const got = mut.containsNumbers("Hellow");
  expect(got).toBe(expected);
});

test("Testing containsNumbers: F2 -- success", () => {
  const expected = false;
  const got = mut.containsNumbers("");
  expect(got).toBe(expected);
});
