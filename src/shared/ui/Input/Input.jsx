export const Input = ({ type, value = "", onChange, placeholder = "" }) => {
  return <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />;
};

/* export const Input = ({ username, setUserName, placeholder = "" }) => {
  return <input type="text" placeholder={placeholder} value={username} onChange={(e) => setUserName(e.target.value)} />;
};
 */
