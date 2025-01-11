/*
You have a Form type that contains information about the form, including the errors field.
You want to create a new Params type that includes all the fields from the Form except errors.
*/

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params to disable the 'errors' field from the Form type
type Params = Form;

export {};

// 2.8
type Params = Omit<Form, "errors">;

// Now `Params` contains `email`, `firstName`, `lastName`, and `phone`,
// but not `errors`.
