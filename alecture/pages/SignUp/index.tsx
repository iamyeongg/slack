import React, { useCallback, useState, VFC } from 'react';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
import { Link } from 'react-router-dom';
import useInput from '@hooks/useInput';
import axios from 'axios';
import { sign } from 'crypto';

const SignUp = () => {
  const [email, setemail] = useState('');
  const [nickname, setnickname] = useState('');
  const [password, setpassword] = useState('');
  const [passwordCheck, setpasswordCheck] = useState('');
  const [mismatchError, setMismatchError] = useState(false);
  const [signuperror, setsignupError] = useState('');
  const [signupsuccess, setsignupSuccess] = useState(false);

  const onChangeEmail = useCallback((e) => {
    setemail(e.target.value);
  }, []);
  const onChangeNickname = useCallback((e) => {
    setnickname(e.target.value);
  }, []);
  const onChangePassword = useCallback(
    (e) => {
      setpassword(e.target.value);
      setMismatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );
  const onChangePasswordCheck = useCallback(
    (e) => {
      setpasswordCheck(e.target.value);
      setMismatchError(e.target.value !== password);
    },
    [password],
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!mismatchError) {
        console.log('서버로 회원가입 진행');
        setsignupError('');
        setsignupSuccess(false);
        axios
          .post('http://localhost:3095/api/users', {
            email,
            nickname,
            password,
          })
          .then((response) => {
            console.log(response);
            setsignupSuccess(true);
          })
          .catch((error) => {
            console.error(error.response);
            setsignupError(error.response.data);
          })
          .finally(() => {});
      }
      console.log(email, nickname, password, passwordCheck);
    },
    [email, nickname, password, passwordCheck, mismatchError],
  );

  return (
    <Form onSubmit={onSubmit}>
      <div id="container">
        <Header>Sleact</Header>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="nickname-label">
          <span>닉네임</span>
          <div>
            <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>
        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input
              type="password"
              id="password-check"
              name="password-check"
              value={passwordCheck}
              onChange={onChangePasswordCheck}
            />
          </div>
          {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
          {signuperror && <Error>{signuperror}</Error>}
          {signupsuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
        </Label>
        <Button type="submit">회원가입</Button>
        <LinkContainer>
          이미 회원이신가요?&nbsp;
          <Link to="/login">로그인 하러가기</Link>
        </LinkContainer>
      </div>
    </Form>
  );
};

export default SignUp;
