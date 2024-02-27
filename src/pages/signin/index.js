import React, { useState } from 'react'
import * as C from "./styles";
import Input from "../../components/inputs";
import Button from "../../components/button";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Signin = () => {

  const { signin } = useAuth();
  const navigate = useNavigate();

  const[email, setEmail] = useState("");
  const[senha, setSenha] = useState("");
  const[error, setError] = useState("");

  const handleLogin = () => {

    if(!email | !senha){
      setError("Preencha todos os campos");
      return;
    }

    const res = signin(email, senha);

    if(res){
      setError(res);
      return;
    }

    navigate("/home");

  };

  return (
    <C.Container>
      <C.Label>SISTEMA DE LOGIN</C.Label>
      <C.Content>
        <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}       
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="Entrar" onClick={handleLogin}/>
        <C.LabelSignup>
          Não tem uma Conta
          <C.Strong>
            <Link to="/signup">&nbsp;Registre-se</Link>
          </C.Strong>
        </C.LabelSignup>
      </C.Content>
    </C.Container>
  );
};

export default Signin;