import React, { Component } from "react";
import * as S from "./styled";

export default class App extends Component {
    state = {
        tarefa: "",
        lista: []
    };

    handleChange = (e) => {
        this.setState({ tarefa: e.target.value });
    };

    add = () => {
        if (this.state.tarefa !== "") {
            this.setState({
                lista: this.state.lista.concat({
                    tarefa: this.state.tarefa,
                    id: Date.now()
                }),
                tarefa: ""
            });
        }
    };

    enter = (e) => {
        if (this.state.tarefa.length > 0 && e.key === "Enter") {
            this.setState({
                lista: this.state.lista.concat({
                    tarefa: this.state.tarefa,
                    id: Date.now()
                }),
                tarefa: ""
            });
        };
    };

    remove = (id) => {
        this.setState({
            lista: this.state.lista.filter((item) => item.id !== id)
        });
    };

    render() {
        return (
            <S.Body>
                <S.Global />
                <S.Title>TO  DO  LIST</S.Title>
                <S.Main>
                    <S.Label>TO DO:</S.Label>
                    <S.Input onChange={this.handleChange} onKeyPress={this.enter} value={this.state.tarefa} title="Write your task" />
                    <S.Button onClick={this.add} title="Add a task" >Add</S.Button>
                </S.Main>
                {this.state.lista.map((item) => (
                    <S.Result key={item.id}>
                        <h3>{item.tarefa}</h3>
                        <S.Check onClick={() => this.remove(item.id)} title="Completed" >X</S.Check>
                    </S.Result>
                ))}
            </S.Body>
        );
    }
}