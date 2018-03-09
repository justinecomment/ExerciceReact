import React from 'react';

import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './NavigationItems.css';

const NavigationItems = () => (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" active>Home</NavigationItem>
      <NavigationItem link="/Formulaire">Formulaire</NavigationItem>
      <NavigationItem link="/formulaireJustine">Formulaire Justine</NavigationItem>
      <NavigationItem link="/autreFormulaire">Autre Formulaire</NavigationItem>
    </ul>
);

export default NavigationItems;