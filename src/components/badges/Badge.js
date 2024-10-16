export default function Badge({ children, color, shape }) {
  const colorClass = color && `badge-${color}`;
  const shapeClass = shape && `badge-${shape}`;
  const allClassNames = `badge ${colorClass} ${shapeClass}`;

  return <span className={allClassNames}>{children}</span>;
}
