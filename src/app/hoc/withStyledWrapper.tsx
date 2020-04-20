import React, { ComponentType, useEffect, useState, useRef } from "react";
import { StyledWrapper, IStyledWrapper } from "../styles/common/layout.styles";

/**
 * This HOC Wraps the component with animated div class
 */
export default function withStyledWrapper<P extends object>({
  Component,
  styledWrapperProps,
}: {
  Component: ComponentType<P>;
  styledWrapperProps?: IStyledWrapper;
}) {
  return function WithStyledWrapper(props: P) {
    return (
      <StyledWrapper {...styledWrapperProps}>
        <Component {...props} />
      </StyledWrapper>
    );
  };
}
