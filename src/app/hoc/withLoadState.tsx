import React, { ComponentType, useEffect, useState, useRef } from "react";
import { IRefObject } from "../interfaces/common/ui";

/**
 * This HOC Wraps the component with animated div class
 */
export default function withLoadState<P extends object>(
  Component: ComponentType<P>,
  loadingTimeOut?: number
): ComponentType<P & { loadedClass?: string }> {
  return function WithLoadState(props: P) {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      if (loadingTimeOut) {
        setTimeout(() => {
          setIsLoaded(true);
          setIsLoading(false);
        }, loadingTimeOut * 1000);
      } else {
        setIsLoaded(true);
        setIsLoading(false);
      }

      return () => {
        setIsLoaded(false);
        setIsLoading(true);
      };
    }, []);

    return <Component isLoaded={isLoaded} {...(props as P)} />;
  };
}
