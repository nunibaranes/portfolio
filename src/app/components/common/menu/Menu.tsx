import React from "react";

import { IRoute } from "../../../interfaces/common/router";
import {
  IStyledWrapper,
  StyledWrapper,
  StyledButton,
} from "../../../styles/common/common.styles";
import { StyledNav } from "../../../styles/ui/ui.styles";
import { Link } from "react-router-dom";
import { IMenuItem, MenuType } from "../../../interfaces/common/ui";

export function Menu(props: {
  items: IMenuItem[];
  wrapperStyles?: IStyledWrapper;
  type?: MenuType;
  activeItemChanged?: (item: IMenuItem) => void;
}) {
  const defaultStyles = {
    alignItems: "center",
  };
  const {
    items,
    wrapperStyles = defaultStyles,
    type = MenuType.Default,
    activeItemChanged = () => {},
  } = props;

  return (
    <StyledWrapper {...wrapperStyles}>
      <StyledNav>
        {items.map((item) => {
          return type === "default" ? (
            <MenuItem
              key={`${type}-${item.id}`}
              item={item}
              onClickItem={activeItemChanged}
            />
          ) : (
            <RouteMenuItem key={`${type}-${item.id}`} {...item} />
          );
        })}
      </StyledNav>
    </StyledWrapper>
  );
}

function MenuItem(props: {
  item: IMenuItem;
  onClickItem: (item: IMenuItem) => void;
}) {
  const { item, onClickItem } = props;
  return (
    <li>
      <StyledButton onClick={() => onClickItem(item)}>
        {item.title}
      </StyledButton>
    </li>
  );
}

function RouteMenuItem(item: IMenuItem) {
  const { title, path, id } = item;
  return (
    <li>
      <Link to={`${path}`}>{title}</Link>
    </li>
  );
}
