function cov_w4ohf9wv1() {
  var path = "/home/zeze/Documentos/github/andrewcrescencio/frontend-crud/src/composables/useFormatCpf.ts";
  var hash = "7cb3aee3c29ed969b219cc867260ec9ddddb8355";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/zeze/Documentos/github/andrewcrescencio/frontend-crud/src/composables/useFormatCpf.ts",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 17
        },
        end: {
          line: 4,
          column: 3
        }
      },
      "1": {
        start: {
          line: 3,
          column: 4
        },
        end: {
          line: 3,
          column: 25
        }
      },
      "2": {
        start: {
          line: 5,
          column: 2
        },
        end: {
          line: 7,
          column: 3
        }
      }
    },
    fnMap: {
      "0": {
        name: "useFormatCpf",
        decl: {
          start: {
            line: 1,
            column: 16
          },
          end: {
            line: 1,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1,
            column: 31
          },
          end: {
            line: 8,
            column: 1
          }
        },
        line: 1
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 2,
            column: 17
          },
          end: {
            line: 2,
            column: 18
          }
        },
        loc: {
          start: {
            line: 2,
            column: 43
          },
          end: {
            line: 4,
            column: 3
          }
        },
        line: 2
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7cb3aee3c29ed969b219cc867260ec9ddddb8355"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_w4ohf9wv1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_w4ohf9wv1();
export function useFormatCpf() {
  cov_w4ohf9wv1().f[0]++;
  cov_w4ohf9wv1().s[0]++;
  const format = (cpf: number | string) => {
    cov_w4ohf9wv1().f[1]++;
    cov_w4ohf9wv1().s[1]++;
    return formatCpf(cpf);
  };
  cov_w4ohf9wv1().s[2]++;
  return {
    format
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfdzRvaGY5d3YxIiwiYWN0dWFsQ292ZXJhZ2UiLCJ1c2VGb3JtYXRDcGYiLCJmIiwicyIsImZvcm1hdCIsImNwZiIsImZvcm1hdENwZiJdLCJzb3VyY2VzIjpbInVzZUZvcm1hdENwZi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gdXNlRm9ybWF0Q3BmKCkge1xuICBjb25zdCBmb3JtYXQgPSAoY3BmOiBudW1iZXIgfCBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gZm9ybWF0Q3BmKGNwZilcbiAgfVxuICByZXR1cm4ge1xuICAgIGZvcm1hdCxcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7SUFBQUEsYUFBQSxZQUFBQSxDQUFBO01BQUEsT0FBQUMsY0FBQTtJQUFBO0VBQUE7RUFBQSxPQUFBQSxjQUFBO0FBQUE7QUFBQUQsYUFBQTtBQWZaLE9BQU8sU0FBU0UsWUFBWUEsQ0FBQSxFQUFHO0VBQUFGLGFBQUEsR0FBQUcsQ0FBQTtFQUFBSCxhQUFBLEdBQUFJLENBQUE7RUFDN0IsTUFBTUMsTUFBTSxHQUFHQSxDQUFDQyxHQUFHLEVBQUUsTUFBTSxHQUFHLE1BQU0sS0FBSztJQUFBTixhQUFBLEdBQUFHLENBQUE7SUFBQUgsYUFBQSxHQUFBSSxDQUFBO0lBQ3ZDLE9BQU9HLFNBQVMsQ0FBQ0QsR0FBRyxDQUFDO0VBQ3ZCLENBQUM7RUFBQU4sYUFBQSxHQUFBSSxDQUFBO0VBQ0QsT0FBTztJQUNMQztFQUNGLENBQUM7QUFDSCIsImlnbm9yZUxpc3QiOltdfQ==