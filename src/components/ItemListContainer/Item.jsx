import styled from "styled-components";
import { truncarString } from "../../utils/utils";

const BoxTop = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
  margin-bottom: 36px;
`;

const BoxImage = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  object-position: 50% 20%;
`;

const TitleFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 1.5em;
  font-weight: 700;
  border-left: 3px solid hsl(240, 80%, 89%);
  padding-left: 12px;
`;

const Price = styled.p`
  font-size: 1em;
  line-height: 1.7;
  font-weight: 300;
  color: hsl(0, 0%, 60%);
`;

const Description = styled.p`
  font-size: 1em;
  line-height: 1.7;
  font-weight: 300;
  color: hsl(0, 0%, 30%);
  white-space: wrap;
`;

const Button = styled.button`
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;

  &:hover {
    opacity: 0.7;
  }
`;

const Item = ({ producto }) => {
  return (
    <div class="box">
      <BoxTop>
        <BoxImage src={producto.image} alt={producto.title} />
        <TitleFlex>
          <Title class="box-title">{producto.title}</Title>
          <Price>$ {producto.price}</Price>
        </TitleFlex>
        <Description>{truncarString(producto.description, 200)}</Description>
      </BoxTop>
      <Button>Agregar al Carrito</Button>
    </div>
  );
};

export default Item;
