#!/bin/bash
#

bash scripts/build-css.sh components &
bash scripts/build-css.sh src &

wait
