#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# run x only on tty1
if [ -z "$DISPLAY" ] && [ "$XDG_VTNR" = 1 ]; then
    exec startx
fi

# run sway on tty2
if [ -z "$WAYLAND_DISPLAY" ] && [ "$XDG_VTNR" -eq 2 ]; then
  export WLR_NO_HARDWARE_CURSORS=1
  exec sway --unsupported-gpu
fi

# cargo
. "$HOME/.cargo/env"
