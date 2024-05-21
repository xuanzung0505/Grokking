const INPUT = "1+2*3-4";
// const INPUT = "1+2*3";
const OPERATORS = ["+", "-", "*"];

function calc(a: number[], b: number[], op: string) {
  switch (op) {
    case "+": {
      return a.reduce((prev, curr) => {
        return [...prev, ...b.map((valueB) => valueB + curr)];
      }, [] as number[]);
    }
    case "-": {
      return a.reduce((prev, curr) => {
        return [...prev, ...b.map((valueB) => curr - valueB)];
      }, [] as number[]);
    }
    case "*": {
      return a.reduce((prev, curr) => {
        return [...prev, ...b.map((valueB) => curr * valueB)];
      }, [] as number[]);
    }
    default: {
      throw new Error("Not a valid operator");
    }
  }
}

function solve(s: string): number[] | undefined {
  if (s.length === 1) return [Number(s[0])];
  const l = [];
  const r = [];
  for (let c of s) {
    r.push(c);
  }
  //solve
  let res: number[] = [];
  for (let c of s) {
    l.push(c);
    r.shift();
    if (OPERATORS.includes(c)) {
      //   r.shift();
      const copyL = l.slice(0, -1);
      //   console.log("l", copyL);
      //   console.log("r", r);
      const resL = solve(copyL.join(""));
      const resR = solve(r.join(""));
      if (resL && resR) {
        res = [...res, ...calc(resL, resR, c)];
        // console.log("res", res);
      }
    }
  }
  return res;
}

console.log(solve(INPUT));
