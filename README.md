# Test Navalia / Jest / jest-snapshot-image

## Execute e2e tests

Build docker image to have chrome-headless
```bash
$ docker build -t XXX/chrome-headless .
```

```bash
$ yarn && yarn build
$ docker run -it -v $(pwd):/usr/src/app  --cap-add=SYS_ADMIN XXX/chrome-headless
```