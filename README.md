# CouchDB Lookout
Web admin dashboard for CouchDBs

### Running with CORS
If you have a CouchDB server with Allow Origin: * enabled, you can use https://kdoran.github.io/lookout/#/

(or enable that domain in CORS settings)

### Running locally:

```
  npm i
  npm start
```

### Running as a CouchDB View doc
On the wishlist is a deploy script for this, but you can add the `index.html` & `dist/lookout.js` as attachments to a CouchDB view doc, you'll have to edit the index file's `src=` url to match your couch url.

### Wishlist:
- [x] view databases
- [x] view docs
- [x] add/delete databases
- [x] add/delete/edit docs
- [x] ACE editor
- [x] run queries interface
- [x] github pages
- [x] view revisions
- [ ] deploy as a couch view to remote couch script
- [ ] replication wizard
- [ ] server config editor (A SAFE ONE!!)
- [ ] download doc as json buttons (and alldocs)
- [ ] CRUD queries in local storage / `_local` docs
- [ ] CRUD batch update scripts in `_local` docs
- [ ] better id search with doc links (right now it's just a query)

### License
MIT

### Disclaimer
I accidentally deleted a test database with this tool already. BE CAREFUL when using it. I recommend testing any functionality first on a localhost server before using elsewhere.
