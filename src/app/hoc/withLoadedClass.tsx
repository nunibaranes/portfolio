import React, { ComponentType, useEffect, useState, useRef } from "react";
import { IRefObject } from "../interfaces/common/ui";

/**
 * This HOC Wraps the component with animated div class
 */
export default function withLoadedClass<P extends object>(
  Component: ComponentType<P>
): ComponentType<P & { loadedClass?: string }> {
  return function WithLoadedClass(props: P) {
    const [loadedClass, setLoadedClass] = useState("");

    useEffect(() => {
      setLoadedClass("loaded");

      setTimeout(() => {
        setLoadedClass("");
      }, 3000);
    }, []);

    return <Component loadedClass={loadedClass} {...(props as P)} />;
  };
}
