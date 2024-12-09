function cov_1gcdabsxcm() {
  var path = "/home/zeze/Documentos/github/andrewcrescencio/frontend-crud/src/types/api/users/UsersResponse.type.ts";
  var hash = "483a5ec41fd01cba565dd69b6eaa53259ea3df2a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/zeze/Documentos/github/andrewcrescencio/frontend-crud/src/types/api/users/UsersResponse.type.ts",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "483a5ec41fd01cba565dd69b6eaa53259ea3df2a"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1gcdabsxcm = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_1gcdabsxcm();
import type { User } from '~/types/user/user.type';
export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWdjZGFic3hjbSIsImFjdHVhbENvdmVyYWdlIiwiVXNlciIsIlVzZXJzUmVzcG9uc2UiLCJ1c2VycyIsInRvdGFsIiwic2tpcCIsImxpbWl0Il0sInNvdXJjZXMiOlsiVXNlcnNSZXNwb25zZS50eXBlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgVXNlciB9IGZyb20gJ34vdHlwZXMvdXNlci91c2VyLnR5cGUnXG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlcnNSZXNwb25zZSB7XG4gIHVzZXJzOiBVc2VyW11cbiAgdG90YWw6IG51bWJlclxuICBza2lwOiBudW1iZXJcbiAgbGltaXQ6IG51bWJlclxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsY0FBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsY0FBQTtBQWZaLGNBQWNFLElBQUksUUFBUSx3QkFBd0I7QUFFbEQsT0FBTyxVQUFVQyxhQUFhLENBQUM7RUFDN0JDLEtBQUssRUFBRUYsSUFBSSxFQUFFO0VBQ2JHLEtBQUssRUFBRSxNQUFNO0VBQ2JDLElBQUksRUFBRSxNQUFNO0VBQ1pDLEtBQUssRUFBRSxNQUFNO0FBQ2YiLCJpZ25vcmVMaXN0IjpbXX0=