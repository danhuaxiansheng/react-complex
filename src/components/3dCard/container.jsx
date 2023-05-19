export default function Page({ children, style }) {
  return (
    <div className="card-container" style={style}>
      {children}
    </div>
  );
}
