#!/bin/sh
set -ex

$HOME/mirra_backend${_SERVICE_SUFFIX}/_build/prod/rel/$RELEASE/bin/$RELEASE start
