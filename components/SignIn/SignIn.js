import React from 'react';
import { Container, FormInput, Icon, FormWrap, FormContent, FormH1, FormButton, Text, Form, FormLabel } from './signinElements';

const SignIn = () => {
    return (
        <Container>
            <FormWrap>
                <Icon to="/" >dolla</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign in to your account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required />
                        <FormInput type="password" required />
                        <FormButton type="submit">Continue</FormButton>
                        <Text>Forget password</Text>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default SignIn;
