const button = ({ onClick, children, ...props }) => (
  <button onClick={onClick} {...props}>
    {children}
  </button>
);

export default button;