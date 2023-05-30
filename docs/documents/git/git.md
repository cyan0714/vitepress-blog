# Git

## 如何创建本地分支
```shell
// 只创建一个分支
$ git branch <branch-name>

// 创建一个分支并切换到该分支
$ git checkout -b <branch-name>
```

## 如何创建远程分支, 并关联本地分支
假设当前分支为 master，需要创建的分支是 my-test
```js
git checkout -b my-test  //在当前分支下创建 my-test 的本地分支分支
git push origin my-test  //将 my-test 分支推送到远程
git branch --set-upstream-to=origin/my-test || git push -u origin <本地分支名> //将本地分支 my-test 关联到远程分支 my-test 上
git branch -a //查看远程分支
```

## git pull 和 git push 到指定分支
```txt
// git pull
git pull origin <远程分支名>:<本地分支名> //将远程指定分支 拉取到 本地指定分支上
git pull origin <远程分支名> //将远程指定分支 拉取到 本地指定分支上
git pull //将与本地当前分支同名的远程分支 拉取到 本地当前分支上(需先关联远程分支)

// git push
git push origin <本地分支名>:<远程分支名> //将本地当前分支 推送到 远程指定分支上
git push origin <本地分支名> //将本地当前分支 推送到 与本地当前分支同名的远程分支上
git push //将本地当前分支 推送到 与本地当前分支同名的远程分支上(需先关联远程分支)
```

## 什么是 detached HEAD
当 HEAD 指针和当前分支指向的不是同一个 commit 时被称为 detached HEAD ，比如执行 git checkout dbde7c 时，其中 dbde7c  不是最新 commit 节点

## git reflog 的作用？
当误删一个分支后，仍想找回当初误删分支的最新的 commit 节点，可以使用此命令查看对应 SHA1 值，并用 git checkout SHA1 检出对应的 commit 节点，再使用 git checkout -b dev 创建一个新分支，之后再进行合并等操作

## 什么是 rebase
在一个 dev 分支上执行 git rebase master 时，dev 分支会将它的基底指向 master 的最新的 commit ，相当于从 master 分支的最新 commit 上检出一个分支，并修改自己原先的 SHA1 值。这时再切回 master 分支进行 merge 就会执行 fast-forward 的合并，提交历史就是一条线了

## 如何知道远程仓库代码有更新？
```shell
git remote -v

git remote show origin
```

## 如何回滚代码？
分两种情况：
1. 只 commit 没 push
    1. git reset —soft xxx （xxx 为要去到的版本号，—soft 意思是不需要再执行 add 命令）
    2. git reset —mixed xxx （xxx 为要去到的版本号，—mixed 需要执行 add 在 commit）
2. 已经 push
    1. git reset —hard xxx （xxx 为要去到的版本号，—hard 表示直接从本地代码仓库拉取代码，替换工作区的代码，不会保留之前的提交记录）
    2. git revert xxx （xxx 为要撤销的版本号，会保留之前的提交记录）

## 如何建立多个远程仓库？
1. git remote add xxx(远程仓库名字) 远程仓库地址（如：git remote add github https://github.com/cyan0714/lottery-machine.git）
    当想拉取某个远程仓库的代码时：git pull github main --rebase
    取消关联某个远程仓库：git remote remove github

2. git remote set-url --add origin https://github.com/cyan0714/lottery-machine.git

## 如何解决 fatal: refusing to merge unrelated histories?
git pull github main --allow-unrelated-histories

## 如何解决 There is not anything to compare 问题？
原因：提交历史记录不同

解决方法：

**切换分支至master**

git checkout master

**强制重命名master分支为main分支**

git branch main master -f

**切换分支至main**

git checkout main

**强制推送本地main分支至远程库，并覆盖远程main分支内容**

git push origin main -f