import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from '../router'; // 导入路由配置

const SidebarContainer = styled.aside`
  width: 250px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

const LogoTitle = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 5px;
`;

const LogoSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
`;

const Navigation = styled.nav`
  flex: 1;
`;

const NavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px 20px;
  margin-bottom: 8px;
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transform: translateX(5px);
  }

  &.active {
    background: rgba(255, 255, 255, 0.2);
    color: white;
    border-color: rgba(255, 255, 255, 0.3);
  }

  .icon {
    margin-right: 12px;
    font-size: 20px;
  }
`;

const Footer = styled.div`
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 12px;
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <Logo>
        <LogoTitle>⌨️ Typing</LogoTitle>
        <LogoSubtitle>Lucase 的编程记忆</LogoSubtitle>
      </Logo>

      <Navigation>
        {routes
          .filter((route) => !route.menuHidden)
          .map((route) => (
            <NavItem key={route.path} to={route.path}>
              <span className="icon">{route.icon}</span>
              {route.name}
            </NavItem>
          ))}
      </Navigation>

      <Footer>版本 1.0.0</Footer>
    </SidebarContainer>
  );
}

export default Sidebar;
