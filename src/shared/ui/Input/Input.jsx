export const Input = ({ type, value = "", onChange, placeholder = "" }) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />;
};
