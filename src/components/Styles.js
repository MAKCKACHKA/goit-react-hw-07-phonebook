import styled from 'styled-components';

export const Title1 = styled.h1`
  font-family: georgia, serif;
  font-size: 38px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 20px;
  margin-left: 15px;
`;
export const Title2 = styled.h2`
  font-family: georgia, serif;
  font-size: 32px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;
  margin-top: 30px;
  margin-left: 15px;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  font-family: georgia, serif;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  max-width: 450px;
  margin-left: 20px;
  padding: 20px;
  border: 2px solid #757575;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
export const Group = styled.div`
  position: relative;
  margin-bottom: 25px;
`;
export const Label = styled.label`
  color: #999;
  font-size: 20px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
`;
export const Input = styled.input`
  font-family: georgia, serif;
  font-size: 20px;
  font-weight: normal;
  line-height: 150%;

  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }
  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  appearance: none;
  background-color: transparent;
  border: 1px solid #1a1a1a;
  border-radius: 15px;
  box-sizing: border-box;
  cursor: pointer;
  align-self: end;

  font-family: georgia, serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  padding: 0px;
  max-width: 200px;

  outline: none;
  padding: 6px 8px;
  text-align: center;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  text-transform: uppercase;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: #1a1a1a;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  }

  &:active {
    box-shadow: none;
  }
`;

export const FilterLabel = styled.label`
  font-family: georgia, serif;
  font-size: 24px;
  font-weight: 500;
  line-height: 150%;
  margin-left: 25px;
  font-style: italic;
`;
export const FilterInput = styled.input`
  font-size: 20px;
  font-family: georgia, serif;
  font-weight: normal;
  line-height: 150%;
  margin-left: 15px;
  width: 210px;
  border: none;
  border-bottom: 1px solid #1a1a1a;
  &:focus {
    outline: none;
  }
`;

export const List = styled.ul`
  max-width: 470px;
`;

export const Item = styled.li`
  margin-bottom: 10px;
  list-style: none;
  font-family: georgia, serif;
  font-size: 20px;
  line-height: 125%;
  position: relative;
`;
export const DelButton = styled(Button)`
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  max-width: 200px;
  outline: none;
  padding: 2px 6px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-48%);
`;
export const Text = styled.p`
  max-width: 400px;
  word-wrap: break-word;
`;
