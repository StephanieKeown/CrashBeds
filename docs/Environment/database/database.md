# Local database setup

Creates the CrashBeds app role and the dev/test databases on a local PostgreSQL install.

## Instructions

1. Connect as the superuser:

   ```powershell
   psql -U postgres -h localhost
   ```

2. Run each command below one at a time, at the `postgres=#` prompt.
   - SQL statements must end with `;`. Backslash (`\`) commands don't need one.
   - A confirmation reply (e.g. `CREATE ROLE`, `CREATE DATABASE`) means it ran. No reply means it didn't.
   - If the prompt changes to `postgres-#`, psql is waiting for the statement to finish. Use `\r` to clear the buffer if something went wrong.

## Commands

```sql
-- App role (can log in, not a superuser)
CREATE ROLE crashbeds_app WITH LOGIN;

-- Set the password interactively (keeps it out of psql history)
\password crashbeds_app

-- Dev and test databases, owned by the app role
CREATE DATABASE crashbeds OWNER crashbeds_app;
CREATE DATABASE crashbeds_test OWNER crashbeds_app;

-- By default, every role (PUBLIC) can CONNECT to every database.
-- An empty "Access privileges" column in \l means those defaults apply.
-- Revoke it so only the owner (crashbeds_app) and superusers can connect.
REVOKE CONNECT ON DATABASE crashbeds FROM PUBLIC;
REVOKE CONNECT ON DATABASE crashbeds_test FROM PUBLIC;

-- Check
\l
\du
\q
```

## Verify the app login

```powershell
psql -U crashbeds_app -h localhost -d crashbeds
```

```sql
SELECT current_user, current_database();
```

Expected: `crashbeds_app | crashbeds`

