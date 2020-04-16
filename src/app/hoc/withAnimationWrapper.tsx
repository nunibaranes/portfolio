import React, { ComponentType, useEffect, useState, useRef } from "react";
import { IRefObject } from "../interfaces/common/ui";
import { IRouteComponentProps } from "../routers/AppRouter";

export type IWithAnimations = IRouteComponentProps<{
  outerRef?: IRefObject<HTMLDivElement>;
}>;

/**
 * This HOC Wraps the component with animated div class
 */
export default function withAnimatedWrapper<P extends object>({
  Component,
  data = { animationClass: "slide-from-right" },
}: {
  Component: ComponentType<P>;
  data?: { animationClass: string };
}) {
  return function WithAnimatedWrapper(props: P) {
    const { animationClass } = data;
    const ref: IRefObject<HTMLDivElement> = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      if (ref.current) {
        if (isVisible) ref.current.classList.add("show");
        else ref.current.classList.remove("show");
      }
    }, [isVisible]);

    useEffect(() => {
      setIsVisible(true);
      return () => {
        setIsVisible(false);
      };
    }, []);

    return (
      <div ref={ref} className={`animated ${animationClass}`}>
        <Component {...props} outerRef={ref} />
      </div>
    );
  };
}
