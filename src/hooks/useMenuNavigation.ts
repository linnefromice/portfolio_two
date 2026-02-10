import { useCallback, useState } from "react";
import { MENU_CONFIG } from "../config/menuConfig";

export function useMenuNavigation() {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);
  const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(0);

  const maxMenuIndex = MENU_CONFIG.length;
  const maxSubMenuIndex =
    MENU_CONFIG[activeMenuIndex]?.submenus.length ?? 0;

  const handleDPadLeft = useCallback(() => {
    setActiveMenuIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setActiveSubMenuIndex(0);
  }, []);

  const handleDPadRight = useCallback(() => {
    setActiveMenuIndex((prev) =>
      prev < maxMenuIndex - 1 ? prev + 1 : prev
    );
    setActiveSubMenuIndex(0);
  }, [maxMenuIndex]);

  const handleDPadUp = useCallback(() => {
    if (maxSubMenuIndex > 0) {
      setActiveSubMenuIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }
  }, [maxSubMenuIndex]);

  const handleDPadDown = useCallback(() => {
    if (maxSubMenuIndex > 0) {
      setActiveSubMenuIndex((prev) =>
        prev < maxSubMenuIndex - 1 ? prev + 1 : prev
      );
    }
  }, [maxSubMenuIndex]);

  const handleMenuChange = useCallback((index: number) => {
    setActiveMenuIndex(index);
    setActiveSubMenuIndex(0);
  }, []);

  return {
    activeMenuIndex,
    activeSubMenuIndex,
    maxMenuIndex,
    maxSubMenuIndex,
    handleDPadLeft,
    handleDPadRight,
    handleDPadUp,
    handleDPadDown,
    handleMenuChange,
    setActiveSubMenuIndex,
  };
}
