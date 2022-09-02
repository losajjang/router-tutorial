import React from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';

const WithRouterSample = () => {
  const params = useParams(); // url 에 대한 정보
  const location = useLocation(); // 현재 페이지에 대한 정보
  const navigation = useNavigate();

  console.log(params);
  console.log(navigation);

  return (
    <div>
      <h4>params</h4>
      <textarea value={JSON.stringify(params)} readOnly />
      <h4>location</h4>
      <textarea value={JSON.stringify(location)} readOnly />
      <button onClick={() => navigation('/')}>홈으로</button>
    </div>
  );
};

export default WithRouterSample;
