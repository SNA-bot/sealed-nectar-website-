# Sealed Nectar Academy — Public Website

The public-facing school website: Home, About, Academics, News & Events, Gallery, Contact,
and a link to the Parent & Staff Portal (your school management system).

This site **shares the same Supabase database** as your SMS — it only *reads* News and
Gallery content, which you post through **Admin → Website** inside the SMS itself. No
separate login or content system to learn.

## Deployment (same process as the SMS — you've done this before!)

1. **Environment variables**: copy `.env.example` to `.env` and fill in the **exact same**
   `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` you used for the SMS project. Same database,
   two different websites reading from it.

2. **GitHub**: create a new, empty repository (e.g. `sealed-nectar-website`), and get every file
   in this project onto it — same method as before (create each file with its full path as the
   filename, paste the contents, commit; or upload files directly where that works).

3. **Vercel**: Add New → Project → Import this new repository. Before deploying, add the same
   two environment variables from Step 1. Deploy.

4. You'll get a live URL like `sealed-nectar-website.vercel.app`. Once ready, this is what you'd
   point a real domain (e.g. `sealednectaracademy.com` or `.sch.ng`) at — the SMS can stay on
   its own subdomain or the `.vercel.app` address, since it's for internal use only.

## Posting content

Log into the SMS as Admin → tap **"Website"** in the tab list → post News articles or add Gallery
photos. They'll appear on the public site automatically, usually within a few seconds.

## Notes

- This site is intentionally **read-only** — it has no login, no admin, no way to edit anything
  from the website itself. All editing happens through the SMS, which already has your
  password-protected admin access.
- Placeholder visuals are used for now per your request — swap in real school photos any time by
  posting them through Admin → Website → Gallery.
- Only the school's address is shown publicly for now (Ota, Ogun State) — add phone/email later
  by asking to update the Contact section.
