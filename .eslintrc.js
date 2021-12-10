module.exports = {
  extends: ["@dephion", "react-app"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  ignorePatterns: ["node_modules", 'src/index.tsx'],
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
