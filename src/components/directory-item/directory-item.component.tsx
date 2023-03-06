import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles';
import { FC } from 'react';
import { Category } from '../directory/directory.component';

import { useNavigate } from 'react-router-dom';

type DirectoryItemProps = {
  category: Category
}

const DirectoryItem:FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
