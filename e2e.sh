#/bin/bash
cd build
python -m SimpleHTTPServer & >> /dev/null
cd ..
yarn e2e