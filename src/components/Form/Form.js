import * as React from "react";
import { useFormState } from "react-dom";

const Form = () => {
  const inputRef = React.useRef(null);
  const submitForm = (prevState, queryData) => {
    const name = queryData.get("name");
    // eslint-disable-next-line no-undef
    console.log(prevState);

    const isJohn = name.toLowerCase() === "john";
    return {
      success: isJohn,
      text: isJohn ? "Welcome, John" : "Oops!! Error.. try john...",
    };
  };
  const [message, formAction] = useFormState(submitForm, null);
  return (
    <>
      <h3>React 19 example</h3>
      <form action={formAction} className="env-form">
        <div className="env-form-field">
          <label htmlFor={inputRef.current} className="env-form-label">
            Enter name
          </label>
          <input
            type="text"
            name="name"
            className="env-form-input"
            placeholder="John"
            ref={inputRef}
          />
        </div>
        <button className="env-button env-button--primary">Submit</button>
        {message && <h4 className="env-text">{message.text}</h4>}
      </form>
    </>
  );
};

export default Form;
