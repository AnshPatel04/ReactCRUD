import {useState} from 'react';

const Form = ()=>{
    const [form, setForm] = useState({
        name: "",
        rollNumber: "",
        contactNumber: ""
    });

    const [isValid, setIsValid] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, rollNumber, contactNumber } = form;

        if (!name.trim() || !rollNumber.trim() || !contactNumber.trim()) {
            setIsValid(false);
            return;
        }

        setIsValid(true);
        console.log(`Name: ${name}\nRoll Number: ${rollNumber}\nContact Number: ${contactNumber}`);
        setForm({ name: "", rollNumber: "", contactNumber: "" }); // Clear all
    };

    return (
        <>
            {!isValid && <h3 style={{ color: "red" }}>Please fill all fields</h3>}
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={form.name} onChange={handleChange} />
                </label><br />
                <label>
                    Roll Number:
                    <input type="text" name="rollNumber" value={form.rollNumber} onChange={handleChange} />
                </label><br />
                <label>
                    Contact Number:
                    <input type="text" name="contactNumber" value={form.contactNumber} onChange={handleChange} />
                </label><br />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
}

export default Form;