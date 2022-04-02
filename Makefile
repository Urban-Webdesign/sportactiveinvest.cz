all:
	@awk 'BEGIN {FS = ":.*##"; printf "Usage:\n  make \033[36m<target>\033[0m\n\nTargets:\n"}'
	@grep -h -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-20s\033[0m %s\n", $$1, $$2}'

# QA

cs: ## Check PHP files coding style
	mkdir -p var/tools/PHP_CodeSniffer
	"vendor/bin/phpcs" app --standard=tools/phpcs.xml $(ARGS)

csf: ## Fix PHP files coding style
	mkdir -p var/tools/PHP_CodeSniffer
	"vendor/bin/phpcbf" app --standard=tools/phpcs.xml $(ARGS)

phpstan: ## Analyse code with PHPStan
	mkdir -p var/tools
	"vendor/bin/phpstan" analyse app -c tools/phpstan.src.neon $(ARGS)

