interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Teacher'],
  tenantName: 'School',
  applicationName: 'GRAPHIC STUDENT MANAGEMENT',
  addOns: ['file'],
};
