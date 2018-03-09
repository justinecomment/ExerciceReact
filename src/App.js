import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import NavigationItems from './components/Navigation/NavigationItems/NavigationItems';
import Layout from './components/Layout/Layout';
import Formulaire from './components/Formulaire/Formulaire';
import Home from './components/Home/Home';
import FormulaireJustine from './components/FormulaireJustine/FormulaireJustine';
import AutreFormulaire from './components/AutreFormulaire/AutreFormulaire';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <NavigationItems />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/formulaire" component={Formulaire} />
            <Route path="/formulaireJustine" component={FormulaireJustine} />
            <Route path="/autreFormulaire" component={AutreFormulaire} />
          </Switch>
        </Layout>

      </div>
    );
  }
}

export default App;
