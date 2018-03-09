import React, { Component } from 'react';

import classes from './Formulaire.css';
import Input from '../Input/Input.js';

class Formulaire extends Component {

    state = {
        myForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            firstname: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your firstname'
                },
                value: ''
            }
        }
    }

    inputChangedHandler = (event, inputType) =>{
        const updatedmyForm = {
            ...this.state.myForm
        }
        const updatedFormElement = {
            ...updatedmyForm[inputType]
        };
        updatedFormElement.value = event.target.value;
        updatedmyForm[inputType] = updatedFormElement;
        this.setState({myForm : updatedmyForm});
    }

    submithandler = (event) => {
        event.preventDefault();
        const formData = {};
        for (let inputType in this.state.myForm){
            formData[inputType] = this.state.myForm[inputType].value;
        }
        const data ={
            orderData : formData
        }
        console.log(data);
    }

    render() {
        const formArray = [];
        for (let key in this.state.myForm) {
            formArray.push({
                id : key,
                config : this.state.myForm[key]
            })
        }

        let form = (
            <form onSubmit={this.submithandler}>
                {formArray.map(f => (
                    <Input 
                        key={f.id}
                        elementType={f.config.elementType}
                        elementConfig={f.config.elementConfig} 
                        value={f.config.value} 
                        changed={(event) => this.inputChangedHandler(event, f.id)} />
                ))}

                <button>Valider</button>
            </form>
        )

        return (
            <div className={classes.Formulaire}>
            {form}
            </div>
        );
    };
};

export default Formulaire;