#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# Theme
export GTK_THEME="Adwaita-dark"
export GTK2_RC_FILES="$HOME/.themes/Adwaita-dark/gtk-2.0/gtkrc"

# Binaries
export PATH=$PATH:~/bin
export PATH=$PATH:$(go env GOPATH)/bin

# Run hyperland on tty1
if [ -z "$DISPLAY" ] && [ "$XDG_VTNR" = 1 ]; then
    exec Hyprland
fi

# Cargo
. "$HOME/.cargo/env"
