# Path to your oh-my-zsh installation.
ZSH=<%- zsh.path_oh_my_zsh %>

# EDITOR
EDITOR="<%- editor %>"

# Set name of the theme to load.
# Look in ~/.oh-my-zsh/themes/
# Optionally, if you set this to "random", it'll load a random theme each
# time that oh-my-zsh is loaded.
ZSH_THEME="<%= zsh.oh_my_zsh_theme %>"

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
# plugins=(git nvm sublime)
plugins=(<%- zsh.oh_my_zsh_plugins %>)

source $ZSH/oh-my-zsh.sh

# User configuration

# Aliases
# source $HOME/.dotfiles/.aliases

# if [[ -f "$HOME/.aliases" ]]; then
#     source $HOME/.aliases
# fi

# NVM
export NVM_DIR="<%- nvm.path_nvm %>"
# This loads nvm
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
