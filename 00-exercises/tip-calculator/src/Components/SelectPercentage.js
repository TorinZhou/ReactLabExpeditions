function SelectPercentage({ children, onSelectTipRate }) {
  return (
    <div>
      {children}
      <select onChange={(e) => onSelectTipRate(+e.target.value)}>
        <option value={0}>It sucks 0%</option>
        <option value={0.05}>It's ok 5%</option>
        <option value={0.1}>It's great 10%</option>
        <option value={0.2}>Amazing 20%</option>
      </select>
    </div>
  );
}

export default SelectPercentage;
