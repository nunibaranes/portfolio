import React, { useState, useEffect, memo } from "react";

import { StyledButton } from "../../../styles/common/ui.styles";
import {
  IStyledWrapper,
  StyledWrapper,
} from "../../../styles/common/layout.styles";
import { StyledNav } from "../../../styles/common/ui.styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { IMenuItem, MenuType } from "../../../interfaces/common/ui";
import { IRoute } from "../../../interfaces/common/router";

type Item = IMenuItem | IRoute;

type MenuProps = {
  items: Item[];
  className?: string;
  wrapperStyles?: IStyledWrapper;
  type?: MenuType;
  activeItemChanged?: (id: string) => void;
};

export const cloneItems = (items: Item[]) => JSON.parse(JSON.stringify(items));

export function parseIsActiveByIdOrPath<T extends IRoute>({
  items,
  targetValue,
  searchById = false,
}: {
  items: T[];
  targetValue: string;
  searchById?: boolean;
}): T[] {
  const copiedItems = cloneItems(items);
  return copiedItems.map((item: T) => {
    return {
      ...item,
      isActive: searchById
        ? item.id === targetValue
        : item.path === targetValue,
    };
  });
}

export default memo(function Menu(props: MenuProps) {
  const defaultStyles = {
    alignItems: "center",
  };
  const {
    className = "",
    items,
    wrapperStyles = defaultStyles,
    type = MenuType.Default,
    activeItemChanged = () => {},
  } = props;
  const { pathname } = useLocation();

  const parseItemsById = (items: Item[], id: string) =>
    parseIsActiveByIdOrPath({
      items,
      targetValue: id,
      searchById: true,
    });

  const [itemsState, setItemsState] = useState(items);

  const handleOnClickItem = (itemId: string) => {
    activeItemChanged(itemId);
    const updatedItems = parseItemsById(itemsState, itemId);
    setItemsState(updatedItems);
  };

  useEffect(() => {
    if (type === MenuType.Route) {
      const updatedItems = parseIsActiveByIdOrPath({
        items,
        targetValue: pathname,
      });
      setItemsState(updatedItems);
    } else {
      const updatedItems = parseItemsById(items, items[0].id);
      setItemsState(updatedItems);
    }
  }, []);

  return (
    <StyledWrapper className={`menu ${className}`} {...wrapperStyles}>
      <StyledNav>
        {itemsState.map((item: Item) => {
          return (
            <MenuItem
              key={`${type}-${item.id}`}
              item={item}
              type={type}
              onClickItem={handleOnClickItem}
            />
          );
        })}
      </StyledNav>
    </StyledWrapper>
  );
});

function MenuItem<T extends IRoute>(props: {
  item: T;
  type: MenuType;
  onClickItem: (id: string) => void;
}) {
  let history = useHistory();

  const {
    item: { title, path, id, isActive },
    onClickItem,
    type,
  } = props;
  const activeClass = isActive ? "active" : "";
  const handleClick = () => {
    onClickItem(id);
    if (type === MenuType.Route && path) {
      history.push(path);
    }
  };

  return (
    <li className="nav-item">
      <StyledButton
        className={activeClass}
        isActive={isActive}
        onClick={handleClick}
      >
        <span className="label">{title}</span>
      </StyledButton>
    </li>
  );
}
