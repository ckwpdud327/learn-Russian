import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  // Footer 스타일링
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>&copy; 2024 LeanRussian. All rights reserved.</p>
      // 추가적인 Footer 내용
    </FooterWrapper>
  );
};

export default Footer;

export {};
