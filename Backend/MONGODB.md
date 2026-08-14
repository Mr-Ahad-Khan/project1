# MongoDB Atlas and Compass setup

1. Create a free MongoDB Atlas cluster and create a database user with `readWrite` access.
2. In Atlas **Network Access**, add your current IP address. For development only, you can allow `0.0.0.0/0`.
3. In Atlas **Connect > Drivers**, copy the Node.js connection string. Set its database name to `blinkit` and add it as `MONGODB_URI` in `backend/.env`.
4. If the password has special characters, URL-encode it before placing it in the URI.
5. Install MongoDB Compass locally. Use the same `MONGODB_URI` in Compass to browse the cloud `blinkit` database and its `users` collection.
6. Run `npm start` from `backend`.

The API endpoints are unchanged:

- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`

Keep `MONGODB_URI` in `.env`; never commit it or expose it to the frontend.