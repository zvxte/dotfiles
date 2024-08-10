#
# ~/.bashrc
#

# If not running interactively, don't do anything
[[ $- != *i* ]] && return

alias ls='ls --color=auto'
alias grep='grep --color=auto'

# Primary prompt displayed before each command
PS1='\w '

# Cargo
. "$HOME/.cargo/env"
