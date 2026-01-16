export function Button({ children, onClick, variant = "primary", size = "md", className }) {
  const styles = {
    padding: size === "sm" ? "5px 10px" : "10px 20px",
    backgroundColor: variant === "destructive" ? "#ff4d4f" : "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginRight: "5px"
  };

  return (
    <button style={styles} onClick={onClick} className={className}>
      {children}
    </button>
  );
}
