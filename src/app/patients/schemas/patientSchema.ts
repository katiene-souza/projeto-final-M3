import * as yup from "yup";

export const makeCreatePatientSchema = () => {
    return yup.object().shape({
        name: yup.string().required(),
        contact: yup.string().required(),
        birthdate: yup.string().required(),
        demands: yup.string().required(),
        personalAnnotations: yup.string().required(),
    });
};

export const makeAssociatePatient = () => {
    return yup.object().shape({
        userId: yup.string().required(),
        patientId: yup.string().required(),
    })
}