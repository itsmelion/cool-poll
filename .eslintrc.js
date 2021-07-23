module.exports = {
  extends: ["@dephion", "react-app"],
  rules: {
    "promise/always-return": "error",
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
