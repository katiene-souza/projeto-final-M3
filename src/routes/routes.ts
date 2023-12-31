import { Router } from "express";
import { UserModule } from "../app/users/userModule";
import { upload } from "../config/storageConfig";
import { AuthModule } from "../app/auth/authModule";
import { Authenticate } from "../common/middlewares/authenticate";
import { PatientModule } from "../app/patients/patientModule";
import { TimelineModule } from "../app/timeline/timelineModule";
import { occurenceModule } from "../app/occurrences/occurrenceModule";

export const router = Router();

const authController = AuthModule.build().authControler;

const userController = UserModule.build().userControler;
const patientController = PatientModule.build().patientControler;
const timelineController = TimelineModule.build().timelineControler
const occurrenceController = occurenceModule.build().occurrenceController

router.post('/users', upload.single('photo'), userController.createUser.bind(userController));
router.post('/auth', authController.login.bind(authController));

router.use(Authenticate.execute);

router.patch('/users/:userId', userController.userUpdate.bind(userController));
router.delete('/users/:userId', userController.deleteUser.bind(userController));

router.post('/users/:userId/patients', patientController.createPatient.bind(patientController));
router.get('/users/:userId/patients', patientController.findAllPatientByUser.bind(patientController));
router.get('/users/:userId/patients/:patientId', patientController.findPatientById.bind(patientController));
router.patch('/users/:userId/patients/:patientId', patientController.patientUpadate.bind(patientController));

router.post('/patients/:patientId/timelines', timelineController.createTimeline.bind(timelineController));
router.get('/patients/:patientId/timelines/:timelineId', timelineController.findTimelineById.bind(timelineController));
router.patch('/patients/:patientId/timelines/:timelineId', timelineController.timelineUpadate.bind(timelineController));

router.post('/timelines/:timelineId/occurrences', occurrenceController.createOccurrence.bind(occurrenceController));
router.get('/timelines/:timelineId/occurrences', occurrenceController.findAllOccurenceByTimeline.bind(occurrenceController));
router.get('/timelines/:timelineId/occurrences/:occurrenceId', occurrenceController.findOccurenceById.bind(occurrenceController));
router.patch('/timelines/:timelineId/occurrences/:occurrenceId', occurrenceController.occurrenceUpadate.bind(occurrenceController));