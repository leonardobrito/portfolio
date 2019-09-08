import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  color: #000;
  height: 100%;
  padding: 10px;
  width: 100%;
`;

export const List = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const ListDescription = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  max-width: 1000px;
  padding-left: 10px;
  width: 100%;

  h3 {
    color: #fff;
  }

  p {
    color: #b3b3b3;
    font-size: 13px;
    line-height: 22px;
    margin-top: 5px;
  }
`;

export const ListContent = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Work = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 10px 20px 10px;
  text-decoration: none;

  img {
    border-radius: 5px;
    max-height: 300px;
    max-width: 300px;
    object-fit: contain;
  }

  &:hover img {
    opacity: 0.6;
  }
  &:last-child {
    margin-right: 0;
  }
`;
