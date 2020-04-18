import React, { ComponentType, useEffect, useState, useRef } from "react";
import { IRefObject } from "../interfaces/common/ui";

/**
 * This HOC Wraps the component with animated div class
 */
export default function withAnimatedWrapper<P extends object>({
  Component,
  data,
}: {
  Component: ComponentType<P>;
  data: { animationClass?: string; className: string };
}) {
  return function WithAnimatedWrapper(props: P) {
    const { animationClass = "slide-from-right", className } = data;
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
      <div ref={ref} className={`${className} animated ${animationClass}`}>
        <Component {...props} withProps={{ outerRef: ref }} />
      </div>
    );
  };
}