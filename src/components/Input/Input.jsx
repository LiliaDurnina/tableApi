export const Input = ({ username, setUserName, placeholder = "" }) => {
  return <input type="text" placeholder={placeholder} value={username} onChange={(e) => setUserName(e.target.value)} />;
};
