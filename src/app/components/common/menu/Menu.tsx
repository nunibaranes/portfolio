import React from "react";

import { StyledButton } from "../../../styles/common/ui.styles";
import {
  IStyledWrapper,
  StyledWrapper,
} from "../../../styles/common/layout.styles";
import { StyledNav } from "../../../styles/common/ui.styles";
import { Link } from "react-router-dom";
import { IMenuItem, MenuType } from "../../../interfaces/common/ui";
import { IRoute } from "../../../interfaces/common/router";

type Item = IMenuItem | IRoute;

type MenuProps = {
  items: Item[];
  wrapperStyles?: IStyledWrapper;
  type?: MenuType;
  activeItemChanged?: (id: string) => void;
};

export function Menu(props: MenuProps) {
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
  onClickItem: (id: string) => void;
}) {
  const { item, onClickItem } = props;
  return (
    <li>
      <StyledButton onClick={() => onClickItem(item.id)}>
        {item.title}
      </StyledButton>
    </li>
  );
}

function RouteMenuItem(item: IRoute) {
  const { title, path } = item;
  return (
    <li>
      <Link to={`${path}`}>{title}</Link>
    </li>
  );
}
