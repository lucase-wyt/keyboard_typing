//404 页面
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>404 - 页面未找到</h1>
      <button onClick={handleGoBack}>返回上一页</button>
    </div>
  );
};
export default NotFoundPage;
