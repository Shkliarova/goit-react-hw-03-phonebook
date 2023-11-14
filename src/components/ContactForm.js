import {Formik} from "formik"
import * as Yup from 'yup';
import { ContactsForm, ContactsField, FormButton, FormError } from "./ContactForm.styled";

const contactSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/g, 'Number format: xxx-xx-xx')
    .required('Required')
})

export const ContactForm = ({onAdd}) => {
    return(
        <Formik initialValues={{
            name: '',
            number: ''
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
            onAdd(values);
            actions.resetForm();
        }}>
            <ContactsForm>
                <label>
                    Name
                    <ContactsField type="text" name="name" required /><br/>
                </label>
                <label>
                    Number
                    <ContactsField type="tel" name="number" placeholder="xxx-xx-xx" required /><br/>
                    <FormError name="number" component="span"/>
                </label>

                <FormButton type="submit">Add contact</FormButton>
            </ContactsForm>
        </Formik>
    )
}