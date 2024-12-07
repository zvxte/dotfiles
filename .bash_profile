#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# themes
export GTK_THEME="Adwaita-dark"
export GTK2_RC_FILES="$HOME/.themes/Adwaita-dark/gtk-2.0/gtkrc"

export PATH=$PATH:~/bin
export PATH=$PATH:$(go env GOPATH)/bin

# run sway on tty1
if [ -z "$WAYLAND_DISPLAY" ] && [ "$XDG_VTNR" -eq 1 ]; then
  export GBM_BACKEND=nvidia-drm
  export __GLX_VENDOR_LIBRARY_NAME=nvidia
  export QT_QPA_PLATFORM=wayland
  export ELECTRON_OZONE_PLATFORM_HINT=wayland
  export WLR_NO_HARDWARE_CURSORS=1
  exec sway --unsupported-gpu
fi

# run x on tty2
if [ -z "$DISPLAY" ] && [ "$XDG_VTNR" = 2 ]; then
    exec startx
fi

# run hyperland on tty3
if [ -z "$DISPLAY" ] && [ "$XDG_VTNR" = 3 ]; then
    exec Hyprland
fi

# cargo
. "$HOME/.cargo/env"
