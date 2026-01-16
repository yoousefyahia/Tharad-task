export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: "rgba(0,0,0,0.7)", display: "flex", 
      alignItems: "center", justifyContent: "center", zIndex: 50,
      backdropFilter: "blur(2px)"
    }} onClick={() => onOpenChange(false)}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: '400px', maxWidth: '90%' }}>
        {children}
      </div>
    </div>
  );
}

export function DialogContent({ children }) {
  return (
    <div style={{
      backgroundColor: "#0F1115", 
      padding: "24px", 
      borderRadius: "12px",
      minWidth: "300px", 
      color: "white",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.4)",
      border: "1px solid #1f2937"
    }}>
      {children}
    </div>
  );
}

export function DialogTitle({ children, style }) {
  return <h2 style={{ marginTop: 0, fontSize: '1.1rem', fontWeight: 600, ...style }}>{children}</h2>;
}
