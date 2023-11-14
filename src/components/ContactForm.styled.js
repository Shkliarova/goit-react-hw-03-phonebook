import styled from "styled-components";
import {Form, Field, ErrorMessage} from "formik"

export const ContactsForm = styled(Form)`
display: flex;
gap: 8px;`

export const ContactsField = styled(Field)`
margin-left: 4px;`

export const FormButton = styled.button`
margin-left: 25px;
height: 24px;`

export const FormError = styled(ErrorMessage)`
color: red;`