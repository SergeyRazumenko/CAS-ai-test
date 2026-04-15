export const RegistrationStep = {
  PersonalInfo: 1,
  Address: 2,
  Confirmation: 3,
} as const;

export type RegistrationStep =
  (typeof RegistrationStep)[keyof typeof RegistrationStep];
