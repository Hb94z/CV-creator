function TextInput({
  value = "",
  handleChange,
  type,
  name,
  id = 0,
  placeholder,
}) {
  return (
    <>
      <p className="text-label">{name}</p>
      <input
        name={name}
        placeholder={placeholder}
        data-id={id}
        type={type}
        value={value}
        onChange={handleChange}
      ></input>
    </>
  );
}

export { TextInput };
