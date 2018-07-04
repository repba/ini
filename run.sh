#!/bin/sh -

cd /srv/http/ext/Rocket/examples/static_files
fuser -k 4000/tcp  &> /dev/null
killall static_files &> /dev/null
nohup cargo run --verbose &
#rustup update

