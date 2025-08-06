main() {
  # Compiles the extension.
  eai npm run compile

  # Opens VSCode using the development path of the extension at current directory
  eai code --extensionDevelopmentPath="${PWD:?}" ${PWD:?}
}

main "${@}" || exit 1