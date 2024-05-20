#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# run x only on tty1
if [ -z "$DISPLAY" ] && [ "$XDG_VTNR" = 1 ]; then
    exec startx
fi

# cargo
. "$HOME/.cargo/env"
