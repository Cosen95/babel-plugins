const traverseModule = require("./traverseModule");
const path = require("path");

const dependencyGraph = traverseModule(
  path.resolve(__dirname, "../test-case/index.js")
);
console.log(JSON.stringify(dependencyGraph, null, 4));

const dependencyGraphResult = {
  root: {
    path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/index.js",
    imports: {
      "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/a.js":
        [
          {
            type: "deconstruct",
            imported: "aa1",
            local: "aa1",
          },
          {
            type: "deconstruct",
            imported: "aa2",
            local: "aa2",
          },
        ],
    },
    exports: [],
    subModules: {
      "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/a.js":
        {
          path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/a.js",
          imports: {
            "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js":
              [
                {
                  type: "default",
                  local: "b",
                },
              ],
          },
          exports: [
            {
              type: "named",
              exported: "aa1",
              local: "aa1",
            },
            {
              type: "named",
              exported: "aa2",
              local: "aa2",
            },
          ],
          subModules: {
            "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js":
              {
                path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js",
                imports: {
                  "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js":
                    [
                      {
                        type: "deconstruct",
                        imported: "cc",
                        local: "renamedCc",
                      },
                    ],
                },
                exports: [
                  {
                    type: "default",
                    exported: "b",
                  },
                ],
                subModules: {
                  "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js":
                    {
                      path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js",
                      imports: {},
                      exports: [
                        {
                          type: "named",
                          exported: "cc",
                          local: "cc",
                        },
                      ],
                      subModules: {},
                    },
                },
              },
          },
        },
    },
  },
  allModules: {
    "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js":
      {
        path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js",
        imports: {},
        exports: [
          {
            type: "named",
            exported: "cc",
            local: "cc",
          },
        ],
        subModules: {},
      },
    "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js":
      {
        path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js",
        imports: {
          "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js":
            [
              {
                type: "deconstruct",
                imported: "cc",
                local: "renamedCc",
              },
            ],
        },
        exports: [
          {
            type: "default",
            exported: "b",
          },
        ],
        subModules: {
          "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js":
            {
              path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js",
              imports: {},
              exports: [
                {
                  type: "named",
                  exported: "cc",
                  local: "cc",
                },
              ],
              subModules: {},
            },
        },
      },
    "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/a.js":
      {
        path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/a.js",
        imports: {
          "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js":
            [
              {
                type: "default",
                local: "b",
              },
            ],
        },
        exports: [
          {
            type: "named",
            exported: "aa1",
            local: "aa1",
          },
          {
            type: "named",
            exported: "aa2",
            local: "aa2",
          },
        ],
        subModules: {
          "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js":
            {
              path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js",
              imports: {
                "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js":
                  [
                    {
                      type: "deconstruct",
                      imported: "cc",
                      local: "renamedCc",
                    },
                  ],
              },
              exports: [
                {
                  type: "default",
                  exported: "b",
                },
              ],
              subModules: {
                "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js":
                  {
                    path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js",
                    imports: {},
                    exports: [
                      {
                        type: "named",
                        exported: "cc",
                        local: "cc",
                      },
                    ],
                    subModules: {},
                  },
              },
            },
        },
      },
    "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/index.js":
      {
        path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/index.js",
        imports: {
          "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/a.js":
            [
              {
                type: "deconstruct",
                imported: "aa1",
                local: "aa1",
              },
              {
                type: "deconstruct",
                imported: "aa2",
                local: "aa2",
              },
            ],
        },
        exports: [],
        subModules: {
          "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/a.js":
            {
              path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/a.js",
              imports: {
                "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js":
                  [
                    {
                      type: "default",
                      local: "b",
                    },
                  ],
              },
              exports: [
                {
                  type: "named",
                  exported: "aa1",
                  local: "aa1",
                },
                {
                  type: "named",
                  exported: "aa2",
                  local: "aa2",
                },
              ],
              subModules: {
                "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js":
                  {
                    path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/b.js",
                    imports: {
                      "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js":
                        [
                          {
                            type: "deconstruct",
                            imported: "cc",
                            local: "renamedCc",
                          },
                        ],
                    },
                    exports: [
                      {
                        type: "default",
                        exported: "b",
                      },
                    ],
                    subModules: {
                      "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js":
                        {
                          path: "/Users/fengshuan/Desktop/workspace/babel-plugins/module-iterator/test-case/c/index.js",
                          imports: {},
                          exports: [
                            {
                              type: "named",
                              exported: "cc",
                              local: "cc",
                            },
                          ],
                          subModules: {},
                        },
                    },
                  },
              },
            },
        },
      },
  },
};
