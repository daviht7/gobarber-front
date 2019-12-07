import { takeLatest, call, put, all } from "redux-saga/effects";
import { signFailure } from "./actions";
import { signInRequest } from "../auth/actions";
import api from "~/services/api";
import { toast } from "react-toastify";

export function* signUp({ payload }) {
  try {
    const { email, password, name } = payload;

    yield call(api.post, "users", {
      email,
      password,
      name,
      provider: true
    });

    yield put(signInRequest(email, password));
  } catch (error) {
    toast.error("Falha no cadastro, verifique se os dados estão corretos.");
    yield put(signFailure());
  }
}

export default all([takeLatest("@user/SIGN_UP_REQUEST", signUp)]);
