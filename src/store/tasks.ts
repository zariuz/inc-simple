export function sum(a: number, b: number) {
  return a + b;
}

export function mult(a: number, b: number) {
  return a * b;
}

export function div(a: number, b: number) {
  return a / b;
}

export function sub(a: number, b: number) {
  return a - b;
}

/// Reducer

export type ActionType = {
  type: "sum" | "mult" | "div" | "sub";
  number: number;
};

export function calculator(state: number, action: ActionType) {
  switch (action.type) {
    case "sum":
      return state + action.number;
    case "mult":
      return state * action.number;
    case "div":
      return state / action.number;
    case "sub":
      return state - action.number;
    default:
      return state;
  }
}
