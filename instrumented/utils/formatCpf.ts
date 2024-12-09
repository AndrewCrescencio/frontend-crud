function cov_2o2caxwpx4() {
  var path = "/home/zeze/Documentos/github/andrewcrescencio/frontend-crud/src/utils/formatCpf.ts";
  var hash = "38841637949cb79339ac040d762ac65ee2d3816f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/home/zeze/Documentos/github/andrewcrescencio/frontend-crud/src/utils/formatCpf.ts",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 17
        },
        end: {
          line: 2,
          column: 50
        }
      },
      "1": {
        start: {
          line: 4,
          column: 2
        },
        end: {
          line: 6,
          column: 3
        }
      },
      "2": {
        start: {
          line: 5,
          column: 4
        },
        end: {
          line: 5,
          column: 53
        }
      },
      "3": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 8,
          column: 95
        }
      }
    },
    fnMap: {
      "0": {
        name: "formatCpf",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 33
          }
        },
        loc: {
          start: {
            line: 1,
            column: 64
          },
          end: {
            line: 9,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        }, {
          start: {
            line: 4,
            column: 2
          },
          end: {
            line: 6,
            column: 3
          }
        }],
        line: 4
      },
      "1": {
        loc: {
          start: {
            line: 4,
            column: 6
          },
          end: {
            line: 4,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 4,
            column: 6
          },
          end: {
            line: 4,
            column: 26
          }
        }, {
          start: {
            line: 4,
            column: 30
          },
          end: {
            line: 4,
            column: 54
          }
        }],
        line: 4
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "38841637949cb79339ac040d762ac65ee2d3816f"
  };
  var coverage = global[gcv] || (global[gcv] = {});
  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }
  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2o2caxwpx4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}
cov_2o2caxwpx4();
export default function formatCpf(cpf: number | string): string {
  cov_2o2caxwpx4().f[0]++;
  const cpfStr = (cov_2o2caxwpx4().s[0]++, cpf.toString().replace(/\D/g, ''));
  cov_2o2caxwpx4().s[1]++;
  if ((cov_2o2caxwpx4().b[1][0]++, cpfStr.length !== 11) || (cov_2o2caxwpx4().b[1][1]++, !/^\d{11}$/.test(cpfStr))) {
    cov_2o2caxwpx4().b[0][0]++;
    cov_2o2caxwpx4().s[2]++;
    throw new Error('CPF must be a 11-digit number.');
  } else {
    cov_2o2caxwpx4().b[0][1]++;
  }
  cov_2o2caxwpx4().s[3]++;
  return `${cpfStr.slice(0, 3)}.${cpfStr.slice(3, 6)}.${cpfStr.slice(6, 9)}-${cpfStr.slice(9)}`;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm8yY2F4d3B4NCIsImFjdHVhbENvdmVyYWdlIiwiZm9ybWF0Q3BmIiwiY3BmIiwiZiIsImNwZlN0ciIsInMiLCJ0b1N0cmluZyIsInJlcGxhY2UiLCJiIiwibGVuZ3RoIiwidGVzdCIsIkVycm9yIiwic2xpY2UiXSwic291cmNlcyI6WyJmb3JtYXRDcGYudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0Q3BmKGNwZjogbnVtYmVyIHwgc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgY3BmU3RyID0gY3BmLnRvU3RyaW5nKCkucmVwbGFjZSgvXFxEL2csICcnKVxuXG4gIGlmIChjcGZTdHIubGVuZ3RoICE9PSAxMSB8fCAhL15cXGR7MTF9JC8udGVzdChjcGZTdHIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDUEYgbXVzdCBiZSBhIDExLWRpZ2l0IG51bWJlci4nKVxuICB9XG5cbiAgcmV0dXJuIGAke2NwZlN0ci5zbGljZSgwLCAzKX0uJHtjcGZTdHIuc2xpY2UoMywgNil9LiR7Y3BmU3RyLnNsaWNlKDYsIDkpfS0ke2NwZlN0ci5zbGljZSg5KX1gXG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWVZO0lBQUFBLGNBQUEsWUFBQUEsQ0FBQTtNQUFBLE9BQUFDLGNBQUE7SUFBQTtFQUFBO0VBQUEsT0FBQUEsY0FBQTtBQUFBO0FBQUFELGNBQUE7QUFmWixlQUFlLFNBQVNFLFNBQVNBLENBQUNDLEdBQUcsRUFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUUsTUFBTSxDQUFDO0VBQUFILGNBQUEsR0FBQUksQ0FBQTtFQUM5RCxNQUFNQyxNQUFNLElBQUFMLGNBQUEsR0FBQU0sQ0FBQSxPQUFHSCxHQUFHLENBQUNJLFFBQVEsQ0FBQyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDO0VBQUFSLGNBQUEsR0FBQU0sQ0FBQTtFQUVoRCxJQUFJLENBQUFOLGNBQUEsR0FBQVMsQ0FBQSxVQUFBSixNQUFNLENBQUNLLE1BQU0sS0FBSyxFQUFFLE1BQUFWLGNBQUEsR0FBQVMsQ0FBQSxVQUFJLENBQUMsVUFBVSxDQUFDRSxJQUFJLENBQUNOLE1BQU0sQ0FBQyxHQUFFO0lBQUFMLGNBQUEsR0FBQVMsQ0FBQTtJQUFBVCxjQUFBLEdBQUFNLENBQUE7SUFDcEQsTUFBTSxJQUFJTSxLQUFLLENBQUMsZ0NBQWdDLENBQUM7RUFDbkQsQ0FBQztJQUFBWixjQUFBLEdBQUFTLENBQUE7RUFBQTtFQUFBVCxjQUFBLEdBQUFNLENBQUE7RUFFRCxPQUFPLEdBQUdELE1BQU0sQ0FBQ1EsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSVIsTUFBTSxDQUFDUSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJUixNQUFNLENBQUNRLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUlSLE1BQU0sQ0FBQ1EsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQy9GIiwiaWdub3JlTGlzdCI6W119