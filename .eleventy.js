module.exports = function(eleventyConfig) {
  eleventyConfig.setUseGitIgnore(false);

  return {
    dir: {
      input: 'build/pages',
      output: 'public'
    }
  };
};
