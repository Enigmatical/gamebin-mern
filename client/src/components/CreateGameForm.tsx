import { Formik, Form, Field } from "formik";
import { GoDiffAdded } from "react-icons/go";

const CreateGameForm = ({ onSuccess }: { onSuccess: Function }) => {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await fetch("http://localhost:5000/games/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        setSubmitting(false);
        resetForm();
        onSuccess();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="name" className="border-2 border-black" />
          <button type="submit" disabled={isSubmitting}>
            <GoDiffAdded />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateGameForm;
