#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# run sway on tty1
if [ -z "$WAYLAND_DISPLAY" ] && [ "$XDG_VTNR" -eq 1 ]; then
  export PATH=$PATH:~/bin
  export GBM_BACKEND=nvidia-drm
  export __GLX_VENDOR_LIBRARY_NAME=nvidia
  export QT_QPA_PLATFORM=wayland
  export ELECTRON_OZONE_PLATFORM_HINT=wayland
  export WLR_NO_HARDWARE_CURSORS=1
  exec sway --unsupported-gpu
fi
