import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./Login.css";

import { auth } from "../../firebase";
import { login } from "../../features/userSlice";

function Login() {
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function loginToApp(e) {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  }

  function register() {
    if (!name) {
      return alert("Por favor, insira o  nome completo!");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
      })
      .catch((error) => alert(error));
  }

  return (
    <div className="login">
      <img src="logo.png" alt="" />

      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Nome completo (obrigatório)"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          type="text"
          placeholder="Foto do perfil URL (opcional)"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email (obrigatório)"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Senha (obrigatória)"
        />

        <button type="submit" onClick={loginToApp}>
          Entrar
        </button>
      </form>
      <p>
        Novo no LinkedRM?{" "}
        <span className="login-register" onClick={register}>
          Cadastre-se
        </span>
      </p>
    </div>
  );
}

export default Login;
