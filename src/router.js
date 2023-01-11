const routes = {
  login: "/",
  signUp: "/sign-up",
  home: "/home",
  myProfile: "/my-profile",
  patient: "/patient/:profileId",
  createPatient: "/create-patient",
  editPatient: "/edit/:profileId",
  medicalRecord: "/patient/:profileId/:medicalRecordId",
  createRecord: "/patient/:profileId/create-medical-record",
  editRecord: "/patient/:profileId/:medicalRecordId/edit",
};
export default routes;
