const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const fs = require("fs");
const path = require("path");
const DependencyNode = require("./DependencyNode");

const IMPORT_TYPE = {
  deconstruct: "deconstruct",
  default: "default",
  namespace: "namespace",
};

const EXPORT_TYPE = {
  all: "all",
  default: "default",
  named: "named",
};

function resolveBabelSyntaxtPlugins(modulePath) {
  const plugins = [];
  if ([".tsx", ".jsx"].some((ext) => modulePath.endsWith(ext))) {
    plugins.push("jsx");
  }
  if ([".ts", ".tsx"].some((ext) => modulePath.endsWith(ext))) {
    plugins.push("typescript");
  }
  return plugins;
}

function isDirectory(filePath) {
  try {
    return fs.statSync(filePath).isDirectory();
  } catch (e) {
    return false;
  }
}

function completeModulePath(modulePath) {
  const EXTS = [".tsx", ".ts", ".jsx", ".js"];
  if (modulePath.match(/\.[a-zA-Z]+$/)) {
    return modulePath;
  }

  function tryCompletePath(resolvePath) {
    for (let i = 0; i < EXTS.length; i++) {
      let tryPath = resolvePath(EXTS[i]);
      if (fs.existsSync(tryPath)) {
        return tryPath;
      }
    }
  }

  function reportModuleNotFoundError(modulePath) {
    throw "module not found: " + modulePath;
  }
}
