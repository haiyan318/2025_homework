# Git常用命令

## 向他人仓库提交

### 第一步：Fork（复制）

在他人GitHub仓库的页面点击Fork，将仓库复制到自己的账户下以便后续进行修改、编辑。

### 第二步：clone（克隆）

在Git Bash中输入 `git clone https://github.com/haiyan318/2025_homework.git` 这样的命令（替换链接为实际Fork后的仓库链接）将复制好的仓库克隆到本地。

### 第三步：checkout -b（分支）&add（提交）

1. 在Git Bash中通过 `git checkout -b fanyiming` 新建一个分支（最后的分支名替换为实际要创建的分支名称）。
2. 将要上传和提交的文件、文件夹复制到本地仓库的文件夹中。（此时，可以创建 .gitignore 文件来过滤无用的文件）
3. 在Git Bash中通过下述命令进行提交（将文件提交到本地仓库）。

```bash
git add .
git commit -m "此处填写描述信息"
```

**注意：**必须进行`commit` 才能完成提交！

### 第四步：Push（推送）

将本地提交 push（推送）到GitHub仓库的分支中。

```bash
git push origin fanyiming
```

**注意：**最后的远程分支名与本地创建并提交的分支名保持一致。

### 第五步：Pull Request（PR，拉取请求）

```bash
haiyan@LAPTOP-A47T2J3D MINGW64 /d/haiyan/code_local/2025_homework/2025_homework/第四次git作业总结提交/fanyiming (fanyiming)
$ git push origin fanyiming
Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
Delta compression using up to 32 threads
Compressing objects: 100% (42/42), done.
Writing objects: 100% (43/43), 2.79 MiB | 1.23 MiB/s, done.
Total 43 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 1 local object.
remote:
remote: Create a pull request for 'fanyiming' on GitHub by visiting:
remote:      https://github.com/haiyan318/2025_homework/pull/new/fanyiming
remote:
To https://github.com/haiyan318/2025_homework.git
 * [new branch]      fanyiming -> fanyiming
```

push 后输出的提示信息中包含PR链接（例如`https://github.com/haiyan318/2025_homework/pull/new/fanyiming` ），直接点击链接即可向主分支发起合并请求（该页面可以添加本次请求的描述信息），等待审核。



**最后**，恭喜你，你已经成功向他人仓库发起了一次拉取请求。

## 自建仓库提交

### 第一步：Create a new repository（新建一个仓库）

在GitHub的个人主页新建一个仓库。

### 后续操作

之后也是按顺序进行**clone** 、**checkout -b** 、**add** 、**push** 等操作，只是不需要发起PR（Pull Request）并等待审核。