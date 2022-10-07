const handleChangeForms = (e, fieldFunction) => {
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

    fieldFunction((prevData) => ({...prevData, [name]: value }));
};

export default handleChangeForms;