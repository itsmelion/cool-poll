module.exports = {
  extends: ["@dephion", "react-app"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "** /*.test.js",
          "**/*.test.jsx",
          "** /*.test.tsx",
          "**/*.test.ts",
          "** /*.stories.js",
          "**/*.stories.jsx",
          "** /*.stories.tsx",
          "**/*.stories.ts",
        ],
        packageDir: [".", __dirname, process.cwd()],
      },
    ],
  },
};
