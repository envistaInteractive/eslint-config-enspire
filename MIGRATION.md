# Migration path

In order to bring all JS projects (internal & external) to comply with new JS standard, the following steps are proposed:

1. Identify and list repos requiring upgrade.
1. Verify scope configuration is available. ie: are `browser,node,angular,react ...` available?
    * if not available, create issue in config repo.
1. Create a new branch `style/eslint-migration` of current `master`
1. Apply our `eslint-config-enspire` and make approppriate changes.
1. Create pull request, add reviewers and assignees.
