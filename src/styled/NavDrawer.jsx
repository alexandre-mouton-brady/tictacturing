import React from 'react';
import styled from 'styled-components';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Menu from 'material-ui/svg-icons/navigation/menu';

const StayVisible = styled.div`
  position: absolute;
  margin-left: ${props => (props.open ? `${props.width}px` : 'none')};
  transition: margin 300ms;
`;

export function NavButtonToggle(props) {
  return (
    <StayVisible {...props}>
      <FloatingActionButton onTouchTap={props.toggle}>
        <Menu />
      </FloatingActionButton>
    </StayVisible>
  );
}
