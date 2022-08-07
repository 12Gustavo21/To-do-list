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
            <section>
                <h1>To-do List</h1>
                <input onChange={this.handleChange} onKeyPress={this.enter} value={this.state.tarefa} />
                <button onClick={this.add}>Adicionar</button>
                {this.state.lista.map((item) => (
                    <section key={item.id}>
                        <h3>{item.tarefa}</h3>
                        <button onClick={() => this.remove(item.id)}>Concluída</button>
                    </section>
                ))}
            </section>
        );
    }
}