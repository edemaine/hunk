/** Convert Unix-style Windows paths to native paths usable as Bun cwd. */
export function normalizeWindowsPath(path: string, platform = process.platform) {
  if (platform !== "win32") {
    return path;
  }

  const normalized = path
    // Some Windows tools can report slash-prefixed drive paths as `/C:/...`.
    .replace(/^\/([a-zA-Z]):(?:[\\/]|$)/, (_, drive) => `${drive.toUpperCase()}:/`)
    // Cygwin commonly reports drive paths as `/cygdrive/c/...`.
    .replace(/^\/cygdrive\/([a-zA-Z])(?:[\\/]|$)/, (_, drive) => `${drive.toUpperCase()}:/`)
    // WSL-style paths are commonly reported as `/mnt/c/...`.
    .replace(/^\/mnt\/([a-zA-Z])(?:[\\/]|$)/, (_, drive) => `${drive.toUpperCase()}:/`)
    // Git Bash/MSYS2 commonly reports drive paths as `/c/...`.
    .replace(/^\/([a-zA-Z])(?:[\\/]|$)/, (_, drive) => `${drive.toUpperCase()}:/`);

  return normalized === path ? path : normalized.replaceAll("/", "\\");
}
