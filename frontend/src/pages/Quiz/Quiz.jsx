import React from 'react';

import Nav from '../../components/Nav';
import Foot from '../../components/Foot';
import { Container, Button, Text } from '@nextui-org/react';
import Question from '../../components/Question';
function Quiz() {
  return (
    <div>
      <Nav/>
      <Text
        h2
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",pl:"2rem"
        }}
        weight="bold"
      >Attempting quiz ...</Text>
      <Container fluid>
        <Question item={Object}/>


        <hr/>
        <Button shadow color="success" auto style={{display:'inline-block'}}>Save and next</Button>
        <Button shadow color="warning" auto style={{display:'inline-block'}}> Next</Button>
      </Container>
      <Foot/>
    </div>
  )
}

export default Quiz;