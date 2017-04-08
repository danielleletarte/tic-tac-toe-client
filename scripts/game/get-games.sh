#!/bin/bash

#run below with no # sign in terminal. It will call the script and run it.

#ID=2 TOKEN=BAhJIiU3ZWNiZDhjZWM2YjIzNDM1N2ViMmRjYTU5YmEzMjhmMgY6BkVG--205cdd34b740e4d760717b50759c45e43e867645 sh scripts/game/get-games.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/games/$ID"
  curl "${API}${URL_PATH}" \
    --include \
    --request GET \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \

# data output from curl doesn't have a trailing newline
echo
