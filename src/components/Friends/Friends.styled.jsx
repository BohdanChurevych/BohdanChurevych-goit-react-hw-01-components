import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin-top: 60px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #dfec98;
`;
const Item = styled.li`
  margin-left: 60px;
  display: flex;
  align-items: center;
  gap: 50px;
  width: 100%;
`;
const Offline = styled.span`
  width: 20px;
  height: 20px;
  background-color: green;
  color: red;
`;
const Online = styled.span`
  width: 20px;
  height: 20px;
  background-color: orange;
  color: green;
`;
export { List, Item, Offline, Online };
