export const StringFunctions = {
  wordCount(string) {
    if (!string) {
      return 0;
    }
    return string.trim().split(/\s+/).length;
  },

  truncate(string, maxLength) {
    if (!string) {
      return '';
    }
    if (string.length <= maxLength) {
      return string;
    }
    return string.slice(0, maxLength) + '...';
  }
};
