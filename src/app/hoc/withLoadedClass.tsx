import React, { ComponentType, useEffect, useState, useRef } from "react";
import { IRefObject } from "../interfaces/common/ui";

/**
 * This HOC Wraps the component with animated div class
 */
export default function withLoadedClass<P extends object>(
  Component: ComponentType<P>
): ComponentType<P & { loadedClass?: string }> {
  return function WithLoadedClass(props: P) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
      setIsLoaded(true);

      return () => {
        setIsLoaded(false);
      };
    }, []);

    return <Component isLoaded={isLoaded} {...(props as P)} />;
  };
}
