module Main exposing (..)

import Browser
import Html exposing (div, text, input, button)
import Html.Events exposing (onClick)
import String exposing (fromInt)
import Debug exposing (log)

add a b = a + b

type Message =
    Add

init = 
    {value = 12}

view model = div [] 
    [ text (fromInt model.value)
    , div [] []
    , input [] []
    , button [onClick Add] [text "Add"]
    ]

update msg model =
    let
        log0 = log "Debug" "..."
        log1 = log "msg" msg
        log2 = log "mdl" model
    in

    case msg of
       Add -> 
        {model | value = 70}


main = Browser.sandbox 
    { init = init
    , view = view
    , update = update
    }