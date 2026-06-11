import { describe, expect, test } from "bun:test";
import { normalizeWindowsPath } from "./windowsPath";

describe("normalizeWindowsPath", () => {
  test("normalizes Unix-style Windows paths for native subprocess cwd", () => {
    expect(normalizeWindowsPath("/cygdrive/c/work/repo", "win32")).toBe("C:\\work\\repo");
    expect(normalizeWindowsPath("/c/work/repo", "win32")).toBe("C:\\work\\repo");
    expect(normalizeWindowsPath("/mnt/c/work/repo", "win32")).toBe("C:\\work\\repo");
    expect(normalizeWindowsPath("/c:/work/repo", "win32")).toBe("C:\\work\\repo");
    expect(normalizeWindowsPath("/home/project", "win32")).toBe("/home/project");
    expect(normalizeWindowsPath("/cygdrive/c/work/repo", "linux")).toBe("/cygdrive/c/work/repo");
    expect(normalizeWindowsPath("C:\\work\\repo", "win32")).toBe("C:\\work\\repo");
    expect(normalizeWindowsPath("C:/work/repo", "win32")).toBe("C:/work/repo");
  });
});
