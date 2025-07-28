import React, { useState } from 'react';
import styled from 'styled-components';
import { useSettings } from '../contexts/setting';

const PageContainer = styled.div`
  padding: 30px;
  height: 100%;
  overflow-y: auto;
`;

const PageTitle = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  text-align: center;
`;

const SettingsCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 16px;
  padding: 30px;
  margin-bottom: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const SectionTitle = styled.h3`
  color: #333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #667eea;
`;

const SettingGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const SettingLabel = styled.div`
  flex: 1;
`;

const SettingTitle = styled.div`
  font-weight: 500;
  color: #333;
  margin-bottom: 5px;
`;

const SettingDescription = styled.div`
  font-size: 14px;
  color: #666;
`;

const SettingControl = styled.div`
  min-width: 150px;
  display: flex;
  justify-content: flex-end;
`;

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  cursor: pointer;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.3s;
    border-radius: 24px;

    &:before {
      position: absolute;
      content: '';
      height: 18px;
      width: 18px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: 0.3s;
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background-color: #667eea;
  }

  input:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 2px solid #dee2e6;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  min-width: 120px;

  &:focus {
    border-color: #667eea;
  }
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 2px solid #dee2e6;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  min-width: 80px;

  &:focus {
    border-color: #667eea;
  }
`;

const RangeInput = styled.input`
  width: 120px;
  margin: 0 10px;

  &[type='range'] {
    -webkit-appearance: none;
    height: 6px;
    border-radius: 3px;
    background: #ddd;
    outline: none;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #667eea;
      cursor: pointer;
    }

    &::-moz-range-thumb {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: #667eea;
      cursor: pointer;
      border: none;
    }
  }
`;

const RangeValue = styled.span`
  min-width: 40px;
  color: #667eea;
  font-weight: 500;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
  }

  &.secondary {
    background: #6c757d;
    color: white;
  }

  &.danger {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
    color: white;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SaveIndicator = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px 20px;
  background: ${(props) => (props.success ? '#26de81' : '#ff6b6b')};
  color: white;
  border-radius: 8px;
  font-size: 14px;
  z-index: 1000;
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

function SettingsPage() {
  const { settings, updateSetting, resetSettings, isLoading } = useSettings();
  const [showSaveIndicator, setShowSaveIndicator] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(true);

  const handleSettingChange = async (key, value) => {
    try {
      await updateSetting(key, value);
      setSaveSuccess(true);
      showSaveMessage();
    } catch (error) {
      console.error('保存设置失败:', error);
      setSaveSuccess(false);
      showSaveMessage();
    }
  };

  const showSaveMessage = () => {
    setShowSaveIndicator(true);
    setTimeout(() => setShowSaveIndicator(false), 2000);
  };

  const handleReset = async () => {
    if (window.confirm('确定要重置所有设置为默认值吗？')) {
      try {
        await resetSettings();
        setSaveSuccess(true);
        showSaveMessage();
      } catch (error) {
        console.error('重置设置失败:', error);
        setSaveSuccess(false);
        showSaveMessage();
      }
    }
  };

  if (isLoading) {
    return (
      <PageContainer>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            color: 'white',
            fontSize: '18px',
          }}
        >
          正在加载设置...
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <PageTitle>⚙️ 设置</PageTitle>

      {showSaveIndicator && (
        <SaveIndicator success={saveSuccess}>
          {saveSuccess ? '✅ 设置已保存' : '❌ 保存失败'}
        </SaveIndicator>
      )}

      <SettingsCard>
        <SectionTitle>🎨 界面设置</SectionTitle>
        <SettingGroup>
          <SettingItem>
            <SettingLabel>
              <SettingTitle>主题</SettingTitle>
              <SettingDescription>选择应用程序的显示主题</SettingDescription>
            </SettingLabel>
            <SettingControl>
              <Select
                value={settings.theme}
                onChange={(e) => handleSettingChange('theme', e.target.value)}
              >
                <option value="default">默认</option>
                <option value="dark">深色</option>
                <option value="light">浅色</option>
                <option value="colorful">彩色</option>
              </Select>
            </SettingControl>
          </SettingItem>

          <SettingItem>
            <SettingLabel>
              <SettingTitle>字体大小</SettingTitle>
              <SettingDescription>调整练习文本的字体大小</SettingDescription>
            </SettingLabel>
            <SettingControl style={{ alignItems: 'center' }}>
              <RangeInput
                type="range"
                min="12"
                max="24"
                value={settings.fontSize}
                onChange={(e) =>
                  handleSettingChange('fontSize', parseInt(e.target.value))
                }
              />
              <RangeValue>{settings.fontSize}px</RangeValue>
            </SettingControl>
          </SettingItem>

          <SettingItem>
            <SettingLabel>
              <SettingTitle>显示虚拟键盘</SettingTitle>
              <SettingDescription>在练习时显示虚拟键盘提示</SettingDescription>
            </SettingLabel>
            <SettingControl>
              <Switch>
                <input
                  type="checkbox"
                  checked={settings.showKeyboard}
                  onChange={(e) =>
                    handleSettingChange('showKeyboard', e.target.checked)
                  }
                />
                <span className="slider"></span>
              </Switch>
            </SettingControl>
          </SettingItem>

          <SettingItem>
            <SettingLabel>
              <SettingTitle>显示进度条</SettingTitle>
              <SettingDescription>在练习时显示完成进度</SettingDescription>
            </SettingLabel>
            <SettingControl>
              <Switch>
                <input
                  type="checkbox"
                  checked={settings.showProgress}
                  onChange={(e) =>
                    handleSettingChange('showProgress', e.target.checked)
                  }
                />
                <span className="slider"></span>
              </Switch>
            </SettingControl>
          </SettingItem>
        </SettingGroup>
      </SettingsCard>

      <SettingsCard>
        <SectionTitle>🎯 练习设置</SectionTitle>
        <SettingGroup>
          <SettingItem>
            <SettingLabel>
              <SettingTitle>难度级别</SettingTitle>
              <SettingDescription>设置默认的练习难度</SettingDescription>
            </SettingLabel>
            <SettingControl>
              <Select
                value={settings.difficulty}
                onChange={(e) =>
                  handleSettingChange('difficulty', e.target.value)
                }
              >
                <option value="easy">简单</option>
                <option value="normal">普通</option>
                <option value="hard">困难</option>
                <option value="expert">专家</option>
              </Select>
            </SettingControl>
          </SettingItem>

          <SettingItem>
            <SettingLabel>
              <SettingTitle>练习时长</SettingTitle>
              <SettingDescription>
                设置单次练习的时间限制（秒）
              </SettingDescription>
            </SettingLabel>
            <SettingControl style={{ alignItems: 'center' }}>
              <RangeInput
                type="range"
                min="60"
                max="600"
                step="30"
                value={settings.practiceTime}
                onChange={(e) =>
                  handleSettingChange('practiceTime', parseInt(e.target.value))
                }
              />
              <RangeValue>
                {Math.floor(settings.practiceTime / 60)}分
              </RangeValue>
            </SettingControl>
          </SettingItem>

          <SettingItem>
            <SettingLabel>
              <SettingTitle>自动下一题</SettingTitle>
              <SettingDescription>
                完成当前练习后自动开始下一题
              </SettingDescription>
            </SettingLabel>
            <SettingControl>
              <Switch>
                <input
                  type="checkbox"
                  checked={settings.autoNext}
                  onChange={(e) =>
                    handleSettingChange('autoNext', e.target.checked)
                  }
                />
                <span className="slider"></span>
              </Switch>
            </SettingControl>
          </SettingItem>

          <SettingItem>
            <SettingLabel>
              <SettingTitle>显示提示</SettingTitle>
              <SettingDescription>
                在练习时显示输入提示和建议
              </SettingDescription>
            </SettingLabel>
            <SettingControl>
              <Switch>
                <input
                  type="checkbox"
                  checked={settings.showHints}
                  onChange={(e) =>
                    handleSettingChange('showHints', e.target.checked)
                  }
                />
                <span className="slider"></span>
              </Switch>
            </SettingControl>
          </SettingItem>
        </SettingGroup>
      </SettingsCard>

      <SettingsCard>
        <SectionTitle>🔊 音效设置</SectionTitle>
        <SettingGroup>
          <SettingItem>
            <SettingLabel>
              <SettingTitle>启用音效</SettingTitle>
              <SettingDescription>
                在练习时播放按键音效和提示音
              </SettingDescription>
            </SettingLabel>
            <SettingControl>
              <Switch>
                <input
                  type="checkbox"
                  checked={settings.soundEnabled}
                  onChange={(e) =>
                    handleSettingChange('soundEnabled', e.target.checked)
                  }
                />
                <span className="slider"></span>
              </Switch>
            </SettingControl>
          </SettingItem>
        </SettingGroup>
      </SettingsCard>

      <SettingsCard>
        <SectionTitle>🌐 语言设置</SectionTitle>
        <SettingGroup>
          <SettingItem>
            <SettingLabel>
              <SettingTitle>界面语言</SettingTitle>
              <SettingDescription>选择应用程序的显示语言</SettingDescription>
            </SettingLabel>
            <SettingControl>
              <Select
                value={settings.language}
                onChange={(e) =>
                  handleSettingChange('language', e.target.value)
                }
              >
                <option value="zh-CN">简体中文</option>
                <option value="zh-TW">繁体中文</option>
                <option value="en-US">English</option>
              </Select>
            </SettingControl>
          </SettingItem>
        </SettingGroup>
      </SettingsCard>

      <ButtonGroup>
        <Button className="secondary" onClick={() => window.location.reload()}>
          🔄 刷新应用
        </Button>
        <Button className="danger" onClick={handleReset}>
          🔧 重置设置
        </Button>
      </ButtonGroup>
    </PageContainer>
  );
}

export default SettingsPage;
