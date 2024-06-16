import React from "react";
import GridItem from "../gridItem";
import * as C from "./styles";

const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

const incomeItems = itens.filter(item => !item.expense);
const expenseItems = itens.filter(item => item.expense);

return (
  <C.GridContainer>
    <C.GridColumn>
    <C.ColumnTitle>Entradas</C.ColumnTitle>
    <C.Table>    
        <C.Thead>
          <C.Tr>
            <C.Th width={40}>Descrição</C.Th>
            <C.Th width={40}>Valor</C.Th>
            <C.Th width={10} alignCenter>Tipo</C.Th>
            <C.Th width={10}></C.Th>
          </C.Tr>
        </C.Thead>
        <C.Tbody>
          {incomeItems?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}
        </C.Tbody>   
    </C.Table>
    </C.GridColumn>

    <C.GridColumn>
    <C.ColumnTitle>Saídas</C.ColumnTitle>
    <C.Table>    
        <C.Thead>
          <C.Tr>
            <C.Th width={40}>Descrição</C.Th>
            <C.Th width={40}>Valor</C.Th>
            <C.Th width={10} alignCenter>Tipo</C.Th>
            <C.Th width={10}></C.Th>
          </C.Tr>
        </C.Thead>
        <C.Tbody>
          {expenseItems?.map((item, index) => (
            <GridItem key={index} item={item} onDelete={onDelete} />
          ))}
        </C.Tbody>    
    </C.Table>
    </C.GridColumn>
    
  </C.GridContainer>
  );
};

export default Grid;
