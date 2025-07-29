import React from 'react';
import { Spin, Typography, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const LoadingScreen = () => {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 48, color: '#6366f1' }} spin />
  );

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      <Space direction="vertical" align="center" size="large">
        <Spin indicator={antIcon} />
        <Title level={2} style={{ color: '#fff', margin: 0 }}>
          编程词汇打字练习
        </Title>
        <Text style={{ color: '#fff', fontSize: '16px' }}>
          正在加载应用程序...
        </Text>
      </Space>
    </div>
  );
};

export default LoadingScreen;
