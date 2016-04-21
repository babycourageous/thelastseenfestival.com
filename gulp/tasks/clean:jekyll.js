module.exports = function(gulp, plugins, config) {
	return function() {
		// Only deletes what's in the site folder but not the folder itself
		return plugins.del(['dist/**', '!dist']);
	}
};