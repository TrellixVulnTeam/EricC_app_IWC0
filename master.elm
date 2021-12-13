module master exposing (main)

import Browser exposing (Document, UrlRequest)
import Browser.Navigation exposing (Key)
import Html exposing (Html)
import Url exposing (Url)

type alias Flags = {}

type alias Model = {name : String}

type Msg = NoOp

init : Flags -> Url -> Key -> (Model, Cmd Msg)
init flags url key =
    let
        _ = Debug.log "url" url
    in
    (Model "EricC", Cmd.none)

view : Model -> Document Msg
view model =
    {
        title = "EricC",
        body = [
            Html.p [] [Html.text "Hello"]
        ]
    }

onUrlRequest : UrlRequest -> Msg
onUrlRequest urlRequest = NoOp

onUrlChange : Url -> Msg
onUrlChange url = NoOp

update : Msg -> Model -> (Model, Cmd Msg)
update =
    case msg of
        NoOp ->
            (Model, Cmd.none)

main = Browser.application 
    {
        init = init,
        view = view,
        update = update,
        subscriptions = \_ -> Sub.none,
        onUrlRequest = onUrlRequest,
        onUrlChange = onUrlChange
    }