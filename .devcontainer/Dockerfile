FROM ubuntu:22.04

# Setup workspace directory
RUN mkdir /workspace
WORKDIR /workspace

# Install useful system utilities
ENV TZ=America/New_York
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
    && apt-get install --yes \
    apt-transport-https \
    ca-certificates \
    curl \
    debian-keyring \
    debian-archive-keyring \
    git \
    gnupg \
    locales \
    postgresql-client \
    software-properties-common \
    sudo \
    tzdata \
    wget \
    zsh \
    unzip \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 22 (Keeping this as requested, but Bun can run JS independently)
ENV NODE_MAJOR 22
RUN mkdir -p /etc/apt/keyrings \ 
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install nodejs -y \
    && npm install -g npm \
    && rm -rf /var/lib/apt/lists/*

# Use a non-root user
ARG USERNAME=vscode
ARG USER_UID=1000
ARG USER_GID=$USER_UID

RUN groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID -m $USERNAME -s /usr/bin/zsh \
    && echo $USERNAME ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME

# Set code to default git commit editor & Set Safe Directory
RUN git config --system core.editor "code --wait" \
    && git config --system safe.directory '/workspace'

# Switch to non-root user
USER $USERNAME
ENV HOME /home/$USERNAME

# --- Install Bun ---
RUN curl -fsSL https://bun.sh/install | bash

# Add Bun to the PATH (so it works during the build process if needed)
ENV PATH="/home/vscode/.bun/bin:${PATH}"

# Configure zsh and add Oh My Zsh
RUN curl https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh | bash - \
    && sed -i 's/robbyrussell/kennethreitz/g' ~/.zshrc \
    && echo 'export BUN_INSTALL="$HOME/.bun"' >> ~/.zshrc \
    && echo 'export PATH="$BUN_INSTALL/bin:$PATH"' >> ~/.zshrc \
    && echo 'export PATH=$PATH:$HOME/.local/bin' >> ~/.zshrc

# Set Locale
RUN sudo locale-gen en_US.UTF-8