import React, { PureComponent } from 'react';
import styles from '../styles';
import Radium from 'radium';

// Disclaimer for purchasing animals
let Disclaimer = (props) => {
  return (
    // <div style={[styles.disclaimerDiv.base]} key={'disclaimer-div'}>
    <div>
      <h1
        style={[styles.disclaimer.base]}
      >
        * animals are only sold if buyers meet strict 
        guidelines for animal rights and housing needs.
      </h1>
    </div>
  )
}

// Radium function for styling
Disclaimer = Radium(Disclaimer);
export default Disclaimer;