import styled from 'styled-components';

export const StyledMenu = styled.nav`

  transform: ${({ open }) => open ? 'display: block' : 'display: none'};
`;


