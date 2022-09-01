import styled from "styled-components";

export const Container = styled.div`
  --grid: rgba(30, 0, 0, 0.2);
  flex: 1;
  background-color: white;
  background-image: linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px);
  background-size: 25px 25px;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 76px;
`;

export const TagLine = styled.p`
  font-size: 30px;
  max-width: 50rem;
  text-align: center;
  margin-bottom: 5rem;

  span {
    background-color: #f0ff45;
    padding: 3px 10px;
    border-radius: 10px;
    margin-left: 5px;
  }
`;

export const Beta = styled.sup`
  font-size: 30px;
  font-weight: 300;
`;

export const CTA = styled.a`
  background-color: black;
  color: white;
  padding: 15px 50px;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 500;
  border: 2px solid black;

  &:hover {
    background-image: linear-gradient(var(--grid) 1px, transparent 1px),
      linear-gradient(90deg, var(--grid) 1px, transparent 1px);
    border: 2px solid goldenrod;
    text-decoration: none;
  }

  &:active {
    position: relative;
    left: 2px;
    bottom: 2px;
  }
`;

export const Secondary = styled(CTA)`
  background-color: white;
  color: black;
`;

export const Actions = styled.div`
  > a {
    margin: 0 12px;
  }
`;
