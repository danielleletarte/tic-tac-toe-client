#!/bin/bash

#run below with no # sign in terminal. It will call the script and run it.

#ID=192 TOKEN=BAhJIiVkOTU2MzAwMDQwYzhiYmFiZTFlNWQ1ZThmNmI1MmU4NgY6BkVG--3e5799b9963ab474129733590cf5f9c645611307 sh scripts/game/get-games.sh
API="${API_ORIGIN:-http://localhost:4741}"
  URL_PATH="/games/$ID"
  curl "${API}${URL_PATH}" \
    --include \
    --request GET \
    --header "Authorization: Token token=$TOKEN" \
    --header "Content-Type: application/json" \

# data output from curl doesn't have a trailing newline
echo
