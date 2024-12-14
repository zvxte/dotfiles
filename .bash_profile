#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# themes
export GTK_THEME="Adwaita-dark"
export GTK2_RC_FILES="$HOME/.themes/Adwaita-dark/gtk-2.0/gtkrc"

# binaries
export PATH=$PATH:~/bin
export PATH=$PATH:$(go env GOPATH)/bin

# run hyperland on tty1
if [ -z "$DISPLAY" ] && [ "$XDG_VTNR" = 1 ]; then
    exec Hyprland
fi

# cargo
. "$HOME/.cargo/env"
