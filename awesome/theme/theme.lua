local xresources = require("beautiful.xresources")
local dpi = xresources.apply_dpi

local gfs = require("gears.filesystem")
local theme_dir = gfs.get_configuration_dir() .. "theme/"

local theme = {}

theme.font          = "JetBrains Mono 12"

theme.bg_normal     = "#1a1a1a"
theme.bg_focus      = "#333333"
theme.bg_urgent     = "#1a1a1a"
theme.bg_minimize   = "#1a1a1a"

theme.bg_systray    = theme.bg_normal

theme.fg_normal     = "#8e8e8e"
theme.fg_focus      = "#b4b4b4"
theme.fg_urgent     = "#8e8e8e"
theme.fg_minimize   = "#8e8e8e"

theme.useless_gap   = dpi(8)
theme.border_width  = dpi(0)
-- theme.border_normal = "#272727"
-- theme.border_focus  = "#353535"
-- theme.border_marked = "#272727"

theme.wallpaper = theme_dir.."background.jpg"

theme.icon_theme = nil
theme.tasklist_plain_task_name = true

return theme
