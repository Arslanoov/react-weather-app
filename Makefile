dev:
	cd app && npm start

build:
	cd app && npm build

install-deps:
	cd app && npm i

test: test-unit test-e2e

test-unit:
	cd app && npm run test:unit

test-e2e:
	cd app && npm run test:e2e

lint: lint-js lint-style

lint-js:
	cd app && npm run lint:js

lint-js-fix:
	cd app && npm run lint:js:fix

lint-style:
	cd app && npm run lint:style