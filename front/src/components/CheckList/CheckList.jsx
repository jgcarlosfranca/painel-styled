import React, { useState } from "react";
import { Container, Item, Checkbox } from "./CheckList.styles";

const CheckList = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxChange = (event) => {
    const itemId = event.target.id;
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  return (
    <Container>
      {items.map((item) => (
        <Item key={item.id}>
          <Checkbox
            type="checkbox"
            id={item.id}
            checked={checkedItems.includes(item.id)}
            onChange={handleCheckboxChange}
          />
          <span>{item.label}</span>
        </Item>
      ))}
    </Container>
  );
};

export default CheckList;
