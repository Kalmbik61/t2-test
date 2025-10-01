import { useState, useCallback } from "react";
import { CardState } from "../types/product";

export const useProductCard = (available: boolean) => {
  const [selected, setSelected] = useState<boolean>(false);
  const [hovered, setHovered] = useState<boolean>(false);
  const [hasLeftAfterSelect, setHasLeftAfterSelect] = useState<boolean>(false);

  const handleClick = useCallback(() => {
    if (!available) return;

    setSelected((prev) => !prev);
    setHasLeftAfterSelect(false);
  }, [available]);

  const handleMouseEnter = useCallback(() => {
    if (!available) return;
    setHovered(true);
  }, [available]);

  const handleMouseLeave = useCallback(() => {
    if (!available) return;
    setHovered(false);

    if (selected) {
      setHasLeftAfterSelect(true);
    }
  }, [available, selected]);

  const getState = useCallback((): CardState => {
    if (!available) return "disabled";

    if (selected) {
      if (hovered && hasLeftAfterSelect) {
        return "selected-hover";
      }
      return "selected";
    }

    if (hovered) {
      return "default-hover";
    }

    return "default";
  }, [available, selected, hovered, hasLeftAfterSelect]);

  return {
    selected,
    state: getState(),
    handleClick,
    handleMouseEnter,
    handleMouseLeave,
  };
};
