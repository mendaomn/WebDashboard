# Release process

- Change README if necessary
- Write release notes
- Change version number in package.json
- Commit and push
- Update version number in bower.json
- Release Update code files in dashboard-release
- Update files in lib
- Create release in GitHub (use an API)
- Tag and provide release notes as .md file as script argument
- Update npm with npm publish (if using node as server side at some point with npm)
- Update Bower by adding tag to dashboard
- Release and pushing tags to GitHub

## References:

- [Semantic versioning](http://semver.org/)
- [Semantic release](https://github.com/boennemann/semantic-release)
- [Gitflow and Semantic release](http://blog.mediarain.com/2014/02/gitflow-and-semantic-versioning/)