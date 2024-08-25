import useInput from '@hooks/useInput';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from '@pages/SignUp/styles';
import fetcher from '@utils/fetcher';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import useSWR from 'swr';
const LogIn = () => {
  const { data, error, revalidate } = useSWR('http://localhost:3095/api/users', fetcher, { dedupingInterval: 100000 });
  //fetcher는 주소를 어떻게 처리할지 구현해야하는 함수
  const [logInError, setLogInError] = useState(false);
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  // useInput은 React에서 사용자 입력 상태를 쉽게 관리할 수 있도록 도와주는 커스텀 훅

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      // e.preventDefault(): 이벤트의 기본 동작을 중단한다. 이벤트가 전파되지 않으며, 현재 이벤트가 상위 요소로 전달되지 않는다.
      setLogInError(false);
      axios
        .post(
          'http://localhost:3095/api/users/login',
          { email, password },
          {
            withCredentials: true,
          },
          // withCredentials: true, 서버로 요청 시 쿠키를 전달할 수 있도록 설정
        )
        .then((response) => {
          revalidate();
        })
        .catch((error) => {
          setLogInError(error.response?.status === 401);
        });
    },
    [email, password],
  );

  if (data) {
    return <Redirect to="/workspace/channel" />;
  }

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 조합이 일치하지 않습니다.</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 회원이 아니신가요?&nbsp;
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
