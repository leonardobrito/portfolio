import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #000;
`;

export const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const Work = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  margin: 0 10px 20px 10px;
  text-decoration: none;

  img {
    height: 250px;
    border-radius: 5px;
  }
  strong {
    font-size: 13px;
    margin-top: 10px;
    color: #fff;
  }

  p {
    line-height: 22px;
    margin-top: 5px;
    font-size: 13px;
    color: #b3b3b3;
  }

  &:hover img {
    opacity: 0.6;
  }
  &:last-child {
    margin-right: 0;
  }
`;
