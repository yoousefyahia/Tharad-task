export function Card({ children, className }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", background: "#fff", color: "black" }} className={className}>
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div style={{ padding: "10px" }} className={className}>{children}</div>;
}
