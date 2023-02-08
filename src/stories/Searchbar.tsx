import React from "react";

interface SearchbarProps {
  placeholder?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Searchbar = ({
  placeholder = "Search...",
  ...props
}: SearchbarProps) => {
  return (
    <button type="button" className="bg-red-500 text-xl" {...props}>
      {placeholder}
    </button>
  );
};
