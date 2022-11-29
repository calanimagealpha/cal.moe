#!/bin/bash
cd "$(dirname "$0")"

jq_args=( )
jq_query='.'

idx=0

shopt -s globstar
for pdf in **/*.pdf; do
    jq_args+=( --arg "volume$idx" "$(sed -E 's/^(.+)\/.+/\1/' <<< $pdf)" )
    jq_args+=( --arg "issue$idx" "$(sed -E 's/^.+\/(.+)\.pdf/\1/' <<< $pdf)" )

    jq_query+=" + [{\"volume\": \$volume${idx}, \"issue\": \$issue${idx}}]"
    
    idx=$((idx+1))
done

jq -c "${jq_args[@]}" "$jq_query" <<< '[]' > index.json