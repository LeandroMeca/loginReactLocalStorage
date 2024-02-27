import React, {useState} from 'react'
import Input from "../../components/inputs";
import Button from "../../components/button";
import * as C from "./styles"; 
import { Link, useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Signup = () => {

  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { signup} = useAuth();


  const handleSignup = () => {
    if(!email | !emailConf | !senha){
      setError("Preencha todos os campos");
      return;
    }else if(email !== emailConf){
      setError("Os e-mails não são iguais");
      return;
    }
    const res = signup(email, senha);

    if(res){
      setError(res);
      return;
    }

    alert("Usuário cadastrado com sucesso!");
    navigate("/");

  };


  return (
    <C.Container>
      <C.Label>CADASTRAMENTO</C.Label>
      <C.Content>
      <Input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme seu email"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        <Input
          type="password"
          placeholder="Digite sua Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}       
        />
        <C.labelError>{error}</C.labelError>
        <Button Text="inscrever-se" onClick={handleSignup}/>
        <C.LabelSignup>
          Já tem uma Conta
          <C.Strong>
            <Link to="/">&nbsp;Entre</Link>
          </C.Strong>
        </C.LabelSignup>
        </C.Content>
    </C.Container>
  );
};

export default Signup;