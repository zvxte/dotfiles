#
# ~/.bash_profile
#

[[ -f ~/.bashrc ]] && . ~/.bashrc

# Run X server
exec startx

# Cargo
. "$HOME/.cargo/env"
