export const errorUtils = {
  unauthorized: 401,
  conflict: 409,
  not_found: 404,
};

export function unauthorizedError() {
  return { type: "unauthorized" };
}

export function conflictError() {
  return { type: "conflict" };
}

export function notFoundError() {
  return { type: "not_found" };
}
