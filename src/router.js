const routes = {
  login: "/",
  signUp: "/sign-up",
  home: "/home",
  myProfile: "/my-profile",
  patient: "/patient/:profileId",
  createPatient: "/create-patient",
  createRecord: "/patient/:profileId/create-record",
  editPatient: "/edit/:profileId",
  medicalRecord: "/patient/:profileId/:medicalRecordId",
};
export default routes;
