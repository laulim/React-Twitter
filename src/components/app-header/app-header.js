import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({liked, allPosts}) => {
  return (
    <Header>
      <h1>Mila Kovtun</h1>
      <h2>{allPosts} {endOfNum(allPosts, ['запись', 'записи', 'записей'])}, из них понравилось {liked}</h2>
    </Header>
  )
}

let endOfNum = (num, titles) => {
  const cases = [2, 0, 1 , 1, 1, 2];
  return titles[ (num%100>4 && num%100<20)? 2 : cases[(num%10<5)?num%10:5]];
};


export default AppHeader