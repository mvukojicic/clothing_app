import styled from "@emotion/styled/macro";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
export const CartIcon = () => {
  return (
    <CartIconContainer>
      <ShoppingIconWrapper>
        <ShoppingBagOutlinedIcon fontSize='large'/>
      </ShoppingIconWrapper>
      <ItemCountWrapper>0</ItemCountWrapper>
    </CartIconContainer>
  );
};

const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const ShoppingIconWrapper = styled.div`
`;
const ItemCountWrapper = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  bottom: 14px;
`;
