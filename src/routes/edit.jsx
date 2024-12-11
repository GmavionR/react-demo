import { Form, useLoaderData, redirect, useNavigate } from "react-router-dom";
import { updateContact } from "../contacts";
export default function EditContact() {
  const { contact } = useLoaderData();
  const navigator = useNavigate();
  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input type="text" name="first" defaultValue={contact?.first} />
        <input type="text" name="last" defaultValue={contact?.last} />
      </p>
      <label> 
        <span>Twitter</span>
        <input name="twitter" defaultValue={contact?.twitter} />
      </label>
      <label>
        <span>Avatar Url</span>
        <input type="text" name="avatar" defaultValue={contact?.avatar} />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        ></textarea>
      </label>
      <p>
        <button type="submit">save</button>
        <button
          type="button"
          onClick={() => {
            navigator(-1);
          }}
        >
          Cancel
        </button>
      </p>
    </Form>
  );
}

export async function action({ request, params }) {
  console.log("request", request, "params", params);

  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  await updateContact(params.contactId, updates);
  return redirect(`/contacts/${params.contactId}`);
}
