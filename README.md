# cal.moe
Modernized cal.moe website built with svelte, tailwind and ❤️

## How to contribute
Prerequisite: `git`, `node (preferably by nvm)`, `pnpm`

1. Clone the repository
   - Clone the master repo
     `git clone https://github.com/calanimagealpha/cal.moe`
   - Then make your own branch
     `git checkout -b your-branch-name`

2. Install packages
   - Navigate inside the cloned repository
     `cd cal.moe`
   - and run:  
     `pnpm install`
   - then do:
     `npx prisma generate`

4. Make changes
   - Tip: to run a development server, run `pnpm run dev` and open `http://localhost:5173` in your web browser of choice

5. **Commit your changes:**
   - After making your changes, stage and commit them:
     ```bash
     git add .
     git commit -m "Your detailed commit message"
     ```

6. **Push your branch to GitHub:**
   - Push your branch to the remote repository:
     ```bash
     git push origin your-branch-name
     ```

7. **Create the Pull Request (PR):**
   - Go to the repository on GitHub: `https://github.com/calanimagealpha/cal.moe`.
   - Navigate to the "Pull requests" tab.
   - Click the "New pull request" button.
   - Select your branch as the source and compare it to the `main` branch.
   - Add a title and description explaining the changes made in your PR.
   - Once you're ready, click "Create pull request."

8. **Wait for Review:**
   - Your pull request will be reviewed by maintainers. Make sure to address any feedback, and once everything is good, your changes will be merged into the main branch.

... and you're good to go!
