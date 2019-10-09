import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem var(--lightblue);
  border-color: ${props =>
    props.carts ? "var(--mainYellow)" : "var(--lightblue)"};
  color: var(--lightblue);
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5sec ease-in-out;
  &:hover {
    background: var(--lightblue);
    color: var(--mainblue);
  }
  &:focus {
    outline: none;
  }
`;
export default ButtonContainer;
