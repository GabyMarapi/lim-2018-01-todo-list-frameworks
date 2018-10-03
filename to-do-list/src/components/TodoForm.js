import React, { Component } from 'react'


class TodoForm extends Component{
    constructor(){
        super()
        this.state ={
            text:''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSave = this.handleSave.bind(this)
        
    }
    

    handleInput(e){
        const text = e.target.value;
        this.setState({
            text
        })
        console.log(this.state);
        
    }

    handleSave(e){
        this.props.onAddTodo(this.state)
        e.preventDefault()
        console.log('saving');
        
    }

    render(){
        return(
            <div>
                <input type="text"  onChange={this.handleInput}/>
                <button type="button" className="btn btn-outline-success" onClick={this.handleSave}>Agregar</button>
            </div>
        )
    }
}

export default TodoForm;