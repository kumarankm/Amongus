## Would you like to contribute?

**1.**  Fork a repository.

**2.**  Clone your forked copy of the project.

```
git clone https://github.com/<your_user_name>/<your_project_repo>.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd <your_project_repo>
```

**4.** Add a reference(remote) to the original repository.

```
git remote add upstream https://github.com/kumarankm/Amongus.git
```

**5.** Check the remotes for this repository.

```
git remote -v
```

**6.** Always take a pull from the upstream repository to your master branch to keep it at par with the main project(updated repository).

```
git pull upstream main
```

**7.** By using this, code in your main branch will also get updated(Upadating forked repository).
```
git push
```

**8.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**9.** Perfom your desired changes to the code base.

**10.** Track your changes:heavy_check_mark: .

```
git add . 
```

**11.** Commit your changes .

```
git commit -m "Relevant message"
```

**12.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**13.** To create a pull request, click on `compare and pull requests`.

**14.** Add appropriate title and description to your pull request explaining your changes and efforts done.

**15.** Click on `Create Pull Request`.
