import { takeLatest, call, put, all } from "redux-saga/effects";
import { signFailure } from "./actions";
import { signInRequest } from "../auth/actions";
import { updateProfileFailure, updateProfileSuccess } from "../user/actions";
import api from "~/services/api";
import { toast } from "react-toastify";

export function* updateProfile({ payload }) {
  console.log(payload.data);
  try {
    const { email, name, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );
    console.log(profile);

    const response = yield call(api.put, "users", profile);
    console.log("response.data", response.data);
    yield put(updateProfileSuccess(response.data));

    toast.success("Perfil atualizado com sucesso!");
  } catch (err) {
    toast.error("Ocorreu algum problema ao tentar atualizar o perfil.");
    console.log(err);
    yield put(updateProfileFailure());
  }
}

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

export default all([
  takeLatest("@user/SIGN_UP_REQUEST", signUp),
  takeLatest("@user/UPDATE_PROFILE_REQUEST", updateProfile)
]);
