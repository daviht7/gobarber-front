export function signUpRequest(name, email, password) {
  return {
    type: "@user/SIGN_UP_REQUEST",
    payload: { name, email, password }
  };
}

export function signUpSuccess(token, user) {
  return {
    type: "@user/SIGN_UP_SUCCESS",
    payload: { user }
  };
}

export function signFailure() {
  return {
    type: "@user/SIGN_FAILURE"
  };
}
