import React, {Component} from 'react';

import InputJustine from '../InputJustine/InputJustine.js';
import classes from './FormulaireJustine.css';


class FormulaireJustine extends Component{

    state={
        form:{
            nom:{
                elementType: 'input',
                elementConfig:{
                    type : 'text',
                    placeholder : "votre nom",
                },
                value : ''
            },
            age:{
                elementType: 'input',
                elementConfig:{
                    type : 'text',
                    placeholder : "votre age",
                },
                value : ''
            },
            sexe:{
                elementType: 'input',
                elementConfig:{
                    type : 'text',
                    placeholder : "votre sexe",
                },
                value : ''
            }
        }
    }

    handleChange = (event, input) =>{
        const formRecup ={ ...this.state.form };
        const updatedForm = { ...formRecup[input] };

        updatedForm.value = event.target.value;
        formRecup[input] = updatedForm;
        this.setState({form : formRecup});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const formData = {};
        for (let inputType in this.state.form){
            formData[inputType] = this.state.form[inputType].value;
        }
        const data ={
            data : formData
        }
        console.log(data);
    }

    render(){
        const formArray = [];
        for (let key in this.state.form){
            formArray.push({
                id : key,
                config : this.state.form[key]
            })
        };
        
        let form =(
            <form onSubmit={this.handleSubmit} className={classes.form} >
                {formArray.map(formElement => (
                    <InputJustine 
                        key={formElement.id}
                        elementType = {formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        changed={(evt) => this.handleChange(evt, formElement.id)} />
                ))}
                <button>Valider</button>
            </form>
        )


        return(
            <div>
                <p>Formulaire</p>
                {form}
            </div>
        );
    }
}

export default FormulaireJustine;