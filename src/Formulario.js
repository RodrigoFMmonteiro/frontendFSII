import {Container, Form, FormGroup, Button} from "react-bootstrap";
import BarraBusca from "./BarraBusca";
import { useEffect, useState } from "react";

export default function Formulario(propd){
  const [lista, setLista] = useState([])

  useEffect(()=>{
    fetch("https://129.146.68.51/aluno39-pfsii/sugestoes", {method: "GET"}).then((resposta)=>{
      return resposta.json();
    }).then((dados)=>{
      setLista(dados);
    });
  },[])
  
  const [pessoaSlecionada, setPessoaSelecionada] = useState({});
    return (
        <Container>
            <h2 className="text-center ms-5">Cadastro</h2>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Melhoria</Form.Label>
                    <Form.Control type="text" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="">
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <FormGroup>
                    <BarraBusca 
                        placeHolder={"Pesquise o autor da sugestão"}
                        dados={lista}
                        campoChave={"ID"}
                        campoBusca={"nome"}
                        funcaoSelecao={setPessoaSelecionada}
                        valor={""}>
                    </BarraBusca>
                </FormGroup>

                <Button className="mt-3" variant="primary" type="submit"> Cadastrar</Button>
                {' '}
                <Button className="mt-3" variant="dark" type="button">Voltar</Button>
            </Form>
        </Container>
    );

}