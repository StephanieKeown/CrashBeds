docker compose up -d        # start Postgres in the background
docker compose ps           # check it's running and "healthy"
docker compose logs db      # see Postgres output if something's wrong
docker compose stop         # stop it, keep the container and data
docker compose down         # remove the container, keep the data volume
docker compose down -v      # remove the container AND the volume. This wipes the database.