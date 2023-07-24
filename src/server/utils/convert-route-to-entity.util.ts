const mapping: Record<string, string> = {
  schools: 'school',
  students: 'student',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
