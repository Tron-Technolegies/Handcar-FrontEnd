import React from "react";
import { GoDotFill } from "react-icons/go";

export default function ListItem({ content }) {
  return (
    <p className="flex gap-2 items-center">
      <span>
        <GoDotFill />
      </span>
      {content}
    </p>
  );
}
