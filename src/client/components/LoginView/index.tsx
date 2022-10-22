import React, {useState} from 'react';
import {FormContainer, Input, Submit, ViewStyle} from './style';

const View = (): JSX.Element => {
  const [auth, setAuth] = useState<{ user: string; pass: string }>({user: '', pass: ''});

  const sendAuthRequest = (): void => {
    fetch('/auth/login', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(auth),
    }).then((response) => {
      response.json().then((auth) => {
        if (auth.token) {
          localStorage.setItem('token', auth.token);
          window.location.reload();
        } else {
          alert('Auth failed');
        }
      });
    }).catch(console.log);
  };

  const updateField = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {target: {value, name}} = e;
    setAuth(() => ({...auth, [name]: value}));
  };

  return (
    <ViewStyle>
      <FormContainer>
        <Input type="text" placeholder="Name" onChange={updateField} name="user"/>
        <Input type="password" placeholder="Password" onChange={updateField} name="pass"/>
        <Submit onClick={sendAuthRequest}>Submit</Submit>
      </FormContainer>
    </ViewStyle>
  );
};

export default View;
