dev:
	cd app && npm run dev

build:
	cd app && npm run build

lint:
	cd app && npm run lint

lint-fix:
	cd app && npm run lint:fix

test: test-unit

test-unit:
	cd app && npm run test:unit
