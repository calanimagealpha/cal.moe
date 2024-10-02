# cal.moe
Modernized cal.moe website built with svelte, tailwind and ❤️

## How to contribute
Prerequisite: `git`, `node (preferably by nvm)`, `pnpm`

1. Fork the repository or create a new branch
   - Both forking and branching are good options for contributing
   - Choose the method that best suits your workflow
   
   What's the difference?
   - Fork: A fork is a copy of the repository in your own GitHub account. It allows you to freely experiment with changes without affecting the original project.
   - Branch: A branch is a separate line of development within the same repository. It's useful for developing features or fixing bugs in isolation without affecting the original project.

2. Clone the repository
   - If you forked: `git clone https://github.com/<YOUR_USERNAME_HERE>/cal.moe.git`
   - If you're branching: `git clone https://github.com/original-repo/cal.moe.git`

3. Install packages
   - Navigate inside the cloned repository, and run:  
     `pnpm install`
   - Then do:
     `npx prisma generate`

4. Make changes and commit
   - If you forked, commit to your forked repository
   - If you branched, commit to your new branch
   - Tip: to run a development server, run `pnpm run dev` and open `http://localhost:5173` in your web browser of choice

5. Make a Pull Request
   - If you forked, make a PR from your fork to the main repository
   - If you branched, make a PR from your branch to the main branch

... and you're good to go!
