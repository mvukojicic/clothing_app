import { Button } from "../Button";
import styled from "@emotion/styled/macro";

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <ProductContainerWrapper>
      <ImgWrapper src={imageUrl} alt={`${name}`} />
      <FooterWrapper>
        <TitleWrapper>{name}</TitleWrapper>
        <PriceWrapper>{price}</PriceWrapper>
      </FooterWrapper>
      <ButtonWrapper>
        <Button buttonType="inverted">Add to card</Button>
      </ButtonWrapper>
    </ProductContainerWrapper>
  );
};

const ImgWrapper = styled.img`
  width: 100%;
  height: 95%;
  object-fit: cover;
  margin-bottom: 5px;
`;
const TitleWrapper = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;
const PriceWrapper = styled.span``;
const FooterWrapper = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;
const ButtonWrapper = styled.div`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
`;
const ProductContainerWrapper = styled.div`
  &:hover ${ButtonWrapper} {
    opacity: 0.85;
    display: flex;
  }
  &:hover ${ImgWrapper} {
    opacity: 0.8;
  }
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
`;
