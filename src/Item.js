import React from "react";

export default function Item({ stories }) {
  const items = stories;
  items.push({ id: "create", label: "Create Story" });
  return (
    <>
      {items.map((s) => (
        <li key={s.id}>{s.label}</li>
      ))}
    </>
  );
}
