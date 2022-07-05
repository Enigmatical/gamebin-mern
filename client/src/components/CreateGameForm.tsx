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
        // <Form>
        //   <Field type="text" name="name" className="border-2 border-black" />
        //   <button type="submit" disabled={isSubmitting}>
        //     <GoDiffAdded />
        //   </button>
        // </Form>
        <Form className="sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <Field
              type="type"
              name="name"
              id="name"
              className="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border rounded-md"
              placeholder="Name"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            <GoDiffAdded className="text-lg mr-2" />
            <span className="whitespace-nowrap">Add Game</span>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default CreateGameForm;
