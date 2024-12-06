/*
    This user.js file does not include any settings
    that can be modified through the GUI.
*/

// UI
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.preferences.experimental", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("findbar.highlightAll", true);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("network.protocol-handler.external.mailto", false);
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("devtools.accessibility.enabled", false);

// UX
user_pref("middlemouse.contentLoadURL", false);
user_pref("ui.key.menuAccessKeyFocuses", false);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.quitShortcut.disabled", true);

// Apps & Extensions
user_pref("identity.fxaccounts.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("extensions.pocket.enabled", false);

// Developing (works on Firefox Developer Edition)
user_pref("xpinstall.signatures.required", false);

// Telemetry
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

// Network
user_pref("media.peerconnection.enabled", false);
user_pref("network.dns.disableIPv6", true);
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);

// GPU
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("gfx.webrender.all", true);
user_pref("media.av1.enabled", false);
user_pref("gfx.x11-egl.force-enabled", true);
user_pref("widget.dmabuf.force-enabled", true);
user_pref("webgl.disabled", true);

// Smooth Scrolling
user_pref("apz.overscroll.enabled", true);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 300);

// Performance
user_pref("media.memory_cache_max_size", 65536); // default=8192
user_pref("image.mem.decode_bytes_at_a_time", 32768); // default=16384
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.http.pacing.requests.min-parallelism", 10); // default=6
user_pref("network.http.pacing.requests.burst", 14); // default=10
user_pref("network.dnsCacheEntries", 1000); // default=400
user_pref("network.dnsCacheExpiration", 3600); // default=60
user_pref("network.ssl_tokens_cache_capacity", 10240); // default=2048
