import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnrironment.style";
import { Container } from '@mui/material';

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente Seguro
      </Container>
    </SafeEnvironmentContainer>
  );
}

export default SafeEnvironment;