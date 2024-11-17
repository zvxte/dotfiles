/*
    This user.js file does not include any settings
    that can be modified through the GUI.
*/

// Apps & Extensions
user_pref("identity.fxaccounts.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("extensions.pocket.enabled", false);

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
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("network.protocol-handler.external.mailto", false);

// UX
user_pref("middlemouse.contentLoadURL", false);
user_pref("ui.key.menuAccessKeyFocuses", false);

// Network
user_pref("media.peerconnection.enabled", false);
user_pref("network.dns.disableIPv6", true);

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
