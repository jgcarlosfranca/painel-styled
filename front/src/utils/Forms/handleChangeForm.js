const handleChangeInput = (e, setStateFn) => {
    const type = e.target.type;
    const name = e.target.name;
    let value = "";
    if (type === "checkbox") {
        value = e.target.checked;
    } else if (type === "multicombo") {
        value = Array.isArray(e) ? e : [];
    } else {
        value = e.target.value;
    }

    setStateFn((prevData) => ({...prevData, [name]: value }));
};

export default handleChangeInput;