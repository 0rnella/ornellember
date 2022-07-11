11 July 2022 | 0rnella<https://github.com/0rnella>
* fix(readonly): make necessary properties read-only
    commit: c66595ec53c48bc78719591bdc1c3db7cee712e8
    Description: there was a bug where a user could reassign properties in the ornellember object that shouldn't be, for example, could set date.day = something (which wouldn't reflect the raw date). Used Object.assignProperties to make said properties read-only.

* feat(lint): add linting
    commit: dca0e8940cf5ccdd17ef571efd123eecb864a692
    Description: Added Eslint and package.json scripts for it

* cleanup(*): apply linting rules
    commit: eebffac717813c2d87cdce84ebe2fa34b9cc00fe
    Description: Applied eslint rules defined in previous commit and fix errors


08 July 2022 | 0rnella<https://github.com/0rnella>
* another fix to rollup bundle: save output to a named variable called ornellember --  published @2.2.2

08 July 2022 | 0rnella<https://github.com/0rnella>
* Add rollup to bundle output into a file consumable by the browser as-is directly in a script --  published @2.2.0
* fix said bundle by compiling it from the typescript  --  published @2.2.1