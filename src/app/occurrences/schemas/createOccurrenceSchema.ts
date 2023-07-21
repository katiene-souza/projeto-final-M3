import * as yup from "yup";

export const makeCreateOccurenceSchema = () => {
    return yup.object().shape({
        name: yup.string().required(),
        content: yup.string().required(),
        kind: yup.string().required(),
    });
};