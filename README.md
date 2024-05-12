### 参考URL：Windows10 + WSL2 ＋ Docker で Anuglar開発環境を作成する
https://zenn.dev/longbridge/articles/700b99193d5831


### 参考URL：AngularプロジェクトをGitHubにアップする
https://zenn.dev/longbridge/articles/8e3c87f64b3904

### gitignore作成サイト：gitignore.io
https://www.toptal.com/developers/gitignore/

### git入門参考：【Git入門】サルでも分かるGit入門の前に！Git使い方高速入門編【入門は5分で十分だと思います】
https://www.youtube.com/watch?v=i1L3A0SLDyg


---
### docker compose 起動
um790@UM790:~/project/angularOnDocker$ docker compose up -d
um790@UM790:~/project/angularOnDocker$ docker ps -a |grep angular

### コンテナのshに入る
docker exec -it [コンテナID] bash 


### git関連
um790@UM790:~/project/angularOnDocker$ git branch
um790@UM790:~/project/angularOnDocker$ git remote -v
um790@UM790:~/project/angularOnDocker$ git fetch
um790@UM790:~/project/angularOnDocker$ git add --all
um790@UM790:~/project/angularOnDocker$ git commit -m "***"

#### remoteリポジトリに追加（初回）
um790@UM790:~/project/angularOnDocker$ git remote add origin git@github.com:aka999-hub/angularOnDocker.git
#### remoteリポジトリ更新
um790@UM790:~/project/angularOnDocker$ git branch
um790@UM790:~/project/angularOnDocker$ git remote -v
um790@UM790:~/project/angularOnDocker$ git push origin master


#### branch作成
gir branch # 使用中のブランチ確認
git branch [branch名] 
#### branchに切り替え
git checkout [branch名]
gir branch # 使用中のブランチ確認
git status

---
#### 作業ログ：
um790@UM790:~/project/angularOnDocker$ docker compose version
Docker Compose version v2.24.7
um790@UM790:~/project/angularOnDocker$ docker compose up -d
[+] Building 23.7s (8/8) FINISHED                                                         docker:default
 => [angular-app internal] load build definition from Dockerfile                                    0.0s
 => => transferring dockerfile: 107B                                                                0.0s
 => [angular-app internal] load metadata for docker.io/library/node:20                              2.2s
 => [angular-app auth] library/node:pull token for registry-1.docker.io                             0.0s
 => [angular-app internal] load .dockerignore                                                       0.0s
 => => transferring context: 2B                                                                     0.0s
 => [angular-app 1/3] FROM docker.io/library/node:20@sha256:3864be2201676a715cf240cfc17aec1d62459f  5.4s
 => => resolve docker.io/library/node:20@sha256:3864be2201676a715cf240cfc17aec1d62459f92a7cbe7d32d  0.0s
 => => sha256:740804d1d9a2a05282a7a359446398ec5f233eea431824dd42f7ba452fa5ab98 2.00kB / 2.00kB      0.0s
 => => sha256:b39e0b4385dc35a8bdfde21a5c66250ad72b2602c4af44e43ae9af12d0b1cfd7 7.41kB / 7.41kB      0.0s
 => => sha256:e61adbe39f6613cc222b7d3f12aac1cfc0f30fa1cdc42b26234151af17c7e2d5 452B / 452B          1.0s
 => => sha256:3864be2201676a715cf240cfc17aec1d62459f92a7cbe7d32d1675e226e736c9 1.21kB / 1.21kB      0.0s
 => => sha256:0d0c50523b913bafd5bd2633ede982f69c0e3efea5a3b53f89122d6a82e94dcd 48.02MB / 48.02MB    2.4s
 => => sha256:d82ea00ba3b4e489db5a7e199a5d99778596b0272c8f7b7c0b783c47155acdc8 1.25MB / 1.25MB      0.9s
 => => extracting sha256:0d0c50523b913bafd5bd2633ede982f69c0e3efea5a3b53f89122d6a82e94dcd           2.7s
 => => extracting sha256:d82ea00ba3b4e489db5a7e199a5d99778596b0272c8f7b7c0b783c47155acdc8           0.0s
 => => extracting sha256:e61adbe39f6613cc222b7d3f12aac1cfc0f30fa1cdc42b26234151af17c7e2d5           0.0s
 => [angular-app 2/3] WORKDIR /app                                                                  0.1s
 => [angular-app 3/3] RUN npm install -g @angular/cli                                              14.9s
 => [angular-app] exporting to image                                                                0.9s
 => => exporting layers                                                                             0.9s
 => => writing image sha256:90b2ece9840901a9d9f1b6b7318fa9d54101abdf5ddb8ab705bc7098ba8fe1fd        0.0s
 => => naming to docker.io/library/angularondocker-angular-app                                      0.0s
[+] Running 1/2
 ⠦ Network angularondocker_default          Created                                                 0.5s 
 ✔ Container angularondocker-angular-app-1  Started                                                 0.4s 
um790@UM790:~/project/angularOnDocker$ docker ps -a
CONTAINER ID   IMAGE                                                                                               COMMAND                  CREATED          STATUS                     PORTS                                                  NAMES
fac8e005a6a1   angularondocker-angular-app                                                                         "docker-entrypoint.s…"   48 seconds ago   Up 47 seconds              0.0.0.0:4200->4200/tcp, :::4200->4200/tcp              angularondocker-angular-app-1
4c9ec7de2408   mongo-base                                                                                          "docker-entrypoint.s…"   3 hours ago      Up 3 hours                 0.0.0.0:27017->27017/tcp, :::27017->27017/tcp          mongodb-todo
41297eb17533   getting-started                                                                                     "docker-entrypoint.s…"   4 days ago       Exited (255) 2 days ago    0.0.0.0:3000->3000/tcp, :::3000->3000/tcp              recursing_panini
494332e3d114   multi-container-app-todo-app                                                                        "docker-entrypoint.s…"   5 days ago       Exited (143) 5 days ago                                                           multi-container-app-todo-app-1
4e9352f2164d   0e9f8618df92                                                                                        "docker-entrypoint.s…"   7 days ago       Exited (255) 7 days ago    0.0.0.0:3000->3000/tcp, :::3000->3000/tcp              modest_kirch
bd0ef3d70da8   1b5474586a25                                                                                        "docker-entrypoint.s…"   12 days ago      Exited (255) 9 days ago    0.0.0.0:80->80/tcp, :::80->80/tcp, 3000/tcp            eager_fermat
c723b6a3e1ff   1b5474586a25                                                                                        "docker-entrypoint.s…"   2 weeks ago      Exited (255) 13 days ago   3000/tcp                                               gracious_swartz
553193185c1f   1b5474586a25                                                                                        "docker-entrypoint.s…"   2 weeks ago      Exited (1) 2 weeks ago                                                            blissful_cartwright
b25c83876e61   1b5474586a25                                                                                        "docker-entrypoint.s…"   2 weeks ago      Exited (1) 2 weeks ago                                                            magical_goldwasser
4b39ea62b567   1b5474586a25                                                                                        "docker-entrypoint.s…"   2 weeks ago      Exited (255) 13 days ago   0.0.0.0:3001->3000/tcp, :::3001->3000/tcp              exciting_hodgkin
c7e6a1a59333   a007701b65ab                                                                                        "docker-entrypoint.s…"   2 weeks ago      Created                                                                           flamboyant_greider
10dc2c7377ca   getting-started-master-docs                                                                         "mkdocs serve -a 0.0…"   2 weeks ago      Exited (255) 13 days ago   0.0.0.0:8000->8000/tcp, :::8000->8000/tcp              getting-started-master-docs-1
63ee74250dbd   f11aff97db95                                                                                        "/docker-entrypoint.…"   2 weeks ago      Exited (255) 13 days ago   80/tcp, 0.0.0.0:3000->3000/tcp, :::3000->3000/tcp      zealous_bhabha
0e45e3ad4eb1   docker/getting-started                                                                              "/docker-entrypoint.…"   3 weeks ago      Exited (255) 2 weeks ago   0.0.0.0:80->80/tcp, :::80->80/tcp                      ecstatic_joliot
762ead44819b   node:20.12.1                                                                                        "docker-entrypoint.s…"   3 weeks ago      Exited (255) 2 weeks ago   0.0.0.0:3000->3000/tcp, :::3000->3000/tcp              practice-docker-compose-app-1
8bb6725fcea4   mysql:8                                                                                             "docker-entrypoint.s…"   3 weeks ago      Exited (255) 2 weeks ago   0.0.0.0:3306->3306/tcp, :::3306->3306/tcp, 33060/tcp   practice-docker-compose-db-1
a031e74ef708   hello-world                                                                                         "/hello"                 3 weeks ago      Exited (0) 3 weeks ago                                                            cool_volhard
ab9043290e0a   hello-world                                                                                         "/hello"                 3 weeks ago      Exited (0) 3 weeks ago                                                            sad_snyder
3e38e28be5ca   vsc-practice-java-3615c3f83ac06fb8b64f068b04d414686bdee1d6e37f888c102492f6a2c4e7f2-uid              "/bin/sh -c 'echo Co…"   5 weeks ago      Exited (0) 3 weeks ago                                                            vigorous_williams
6452202da888   hello-world                                                                                         "/hello"                 6 weeks ago      Exited (0) 6 weeks ago                                                            magical_diffie
18e42a455f39   vsc-practice-python-8cf5de7d5b162af9a41a55c1d8fbd6b69a62152b1d4ff8e9d501ebe3ce9d8383-features-uid   "/bin/sh -c 'echo Co…"   6 weeks ago      Exited (0) 3 weeks ago                                                            charming_cray
1f258646df74   hello-world                                                                                         "/hello"                 6 weeks ago      Exited (0) 6 weeks ago                                                            beautiful_wright
9f5a06fff966   vsc-sample-1a77b3e005552a3674a612ebcd750fd14da31a9ef4bb2ea3c439c010087b9626-uid                     "/bin/sh -c 'echo Co…"   7 weeks ago      Exited (0) 3 weeks ago                                                            compassionate_lumiere
4663fee6a177   hello-world                                                                                         "/hello"                 7 weeks ago      Exited (0) 7 weeks ago                                                            happy_wu
88d52c55e4c4   hello-world                                                                                         "/hello"                 7 weeks ago      Exited (0) 7 weeks ago                                                            intelligent_dubinsky
b47893b37305   hello-world                                                                                         "/hello"                 7 weeks ago      Exited (0) 7 weeks ago                                                            relaxed_driscoll
um790@UM790:~/project/angularOnDocker$ docker image ls
REPOSITORY                                                                                          TAG               IMAGE ID       CREATED              SIZE
angularondocker-angular-app                                                                         latest            90b2ece98409   About a minute ago   1.17GB
mongo-base                                                                                          latest            4b52854e2a00   3 hours ago          855MB
<none>                                                                                              <none>            c9f597b11aac   3 hours ago          855MB
<none>                                                                                              <none>            215f63221b2c   3 hours ago          855MB
<none>                                                                                              <none>            f4ad5422e245   4 hours ago          855MB
<none>                                                                                              <none>            e9d54a20ae60   4 hours ago          855MB
<none>                                                                                              <none>            102fbaa44d5e   6 hours ago          855MB
aka999/getting-started                                                                              latest            cb5650c5b119   4 days ago           226MB
getting-started                                                                                     latest            cb5650c5b119   4 days ago           226MB
<none>                                                                                              <none>            c98e4ab3f53c   4 days ago           226MB
bindmount-apps-todo-app                                                                             latest            666521b631f1   4 days ago           197MB
multi-container-app-todo-app                                                                        latest            09b748ab51d1   6 days ago           226MB
welcome-to-docker                                                                                   latest            5362e229fee3   6 days ago           236MB
<none>                                                                                              <none>            0e9f8618df92   7 days ago           479MB
<none>                                                                                              <none>            2001664cec73   7 days ago           54.5MB
<none>                                                                                              <none>            31a570699d41   8 days ago           54.5MB
<none>                                                                                              <none>            4bc825c8ab0d   8 days ago           54.5MB
aka999/getting-started                                                                              <none>            a925c479bf50   8 days ago           54.5MB
mongo                                                                                               6                 392863c7ab98   2 weeks ago          727MB
<none>                                                                                              <none>            1b5474586a25   2 weeks ago          481MB
<none>                                                                                              <none>            f2f4b09413c7   2 weeks ago          481MB
<none>                                                                                              <none>            a007701b65ab   2 weeks ago          481MB
<none>                                                                                              <none>            f11aff97db95   2 weeks ago          48.8MB
getting-started-master-docs                                                                         latest            81f65b409bd6   2 weeks ago          102MB
node                                                                                                20.12.1           8e022d47db62   4 weeks ago          1.1GB
mysql                                                                                               8                 65f3f983cb08   5 weeks ago          632MB
vsc-practice-java-3615c3f83ac06fb8b64f068b04d414686bdee1d6e37f888c102492f6a2c4e7f2-uid              latest            cabfd6c2ff56   5 weeks ago          1.5GB
vsc-practice-java-3615c3f83ac06fb8b64f068b04d414686bdee1d6e37f888c102492f6a2c4e7f2                  latest            4672474dd7a0   5 weeks ago          1.5GB
<none>                                                                                              <none>            d2f86a650f37   5 weeks ago          1.47GB
<none>                                                                                              <none>            94039507e8f6   5 weeks ago          1.47GB
vsc-practice-python-8cf5de7d5b162af9a41a55c1d8fbd6b69a62152b1d4ff8e9d501ebe3ce9d8383-features-uid   latest            6b67f5111391   6 weeks ago          944MB
vsc-practice-python-8cf5de7d5b162af9a41a55c1d8fbd6b69a62152b1d4ff8e9d501ebe3ce9d8383-features       latest            495e652ad9b8   6 weeks ago          944MB
vsc-sample-1a77b3e005552a3674a612ebcd750fd14da31a9ef4bb2ea3c439c010087b9626-uid                     latest            7b752920e362   7 weeks ago          2.51GB
hello-world                                                                                         latest            d2c94e258dcb   12 months ago        13.3kB
docker/getting-started                                                                              latest            3e4394f6b72f   16 months ago        47MB
node                                                                                                14.13.1-stretch   5377c9a2fb1f   3 years ago          943MB
um790@UM790:~/project/angularOnDocker$ docker image ls | grep angular
angularondocker-angular-app                                                                         latest            90b2ece98409   About a minute ago   1.17GB
um790@UM790:~/project/angularOnDocker$ git -version
unknown option: -version
usage: git [--version] [--help] [-C <path>] [-c <name>=<value>]
           [--exec-path[=<path>]] [--html-path] [--man-path] [--info-path]
           [-p | --paginate | -P | --no-pager] [--no-replace-objects] [--bare]
           [--git-dir=<path>] [--work-tree=<path>] [--namespace=<name>]
           [--super-prefix=<path>] [--config-env=<name>=<envvar>]
           <command> [<args>]
um790@UM790:~/project/angularOnDocker$ git version
git version 2.34.1
um790@UM790:~/project/angularOnDocker$ git init
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint:   git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint:   git branch -m <name>
Initialized empty Git repository in /home/um790/project/angularOnDocker/.git/
um790@UM790:~/project/angularOnDocker$ ls -al
total 28
drwxr-xr-x  4 um790 um790 4096 May  3 16:08 .
drwxr-xr-x 15 um790 um790 4096 May  3 15:33 ..
drwxr-xr-x  7 um790 um790 4096 May  3 16:08 .git
-rw-r--r--  1 um790 um790   70 May  3 15:38 Dockerfile
-rw-r--r--  1 um790 um790  259 May  3 16:08 README.md
drwxr-xr-x  3 root  root  4096 May  3 15:56 app
-rw-r--r--  1 um790 um790  198 May  3 15:43 docker-compose.yml
um790@UM790:~/project/angularOnDocker$ vi .gitignore
um790@UM790:~/project/angularOnDocker$ git add --all
um790@UM790:~/project/angularOnDocker$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   .gitignore
        new file:   Dockerfile
        new file:   README.md
        new file:   app/myapp/.editorconfig
        new file:   app/myapp/.gitignore
        new file:   app/myapp/.vscode/extensions.json
        new file:   app/myapp/.vscode/launch.json
        new file:   app/myapp/.vscode/tasks.json
        new file:   app/myapp/README.md
        new file:   app/myapp/angular.json
        new file:   app/myapp/package-lock.json
        new file:   app/myapp/package.json
        new file:   app/myapp/server.ts
        new file:   app/myapp/src/app/app.component.html
        new file:   app/myapp/src/app/app.component.scss
        new file:   app/myapp/src/app/app.component.spec.ts
        new file:   app/myapp/src/app/app.component.ts
        new file:   app/myapp/src/app/app.config.server.ts
        new file:   app/myapp/src/app/app.config.ts
        new file:   app/myapp/src/app/app.routes.ts
        new file:   app/myapp/src/assets/.gitkeep
        new file:   app/myapp/src/favicon.ico
        new file:   app/myapp/src/index.html
        new file:   app/myapp/src/main.server.ts
        new file:   app/myapp/src/main.ts
        new file:   app/myapp/src/styles.scss
        new file:   app/myapp/tsconfig.app.json
        new file:   app/myapp/tsconfig.json
        new file:   app/myapp/tsconfig.spec.json
        new file:   docker-compose.yml

um790@UM790:~/project/angularOnDocker$ git commit -m "first Commit of angularOnDocker"
[master (root-commit) 21da533] first Commit of angularOnDocker
 30 files changed, 13365 insertions(+)
 create mode 100644 .gitignore
 create mode 100644 Dockerfile
 create mode 100644 README.md
 create mode 100644 app/myapp/.editorconfig
 create mode 100644 app/myapp/.gitignore
 create mode 100644 app/myapp/.vscode/extensions.json
 create mode 100644 app/myapp/.vscode/launch.json
 create mode 100644 app/myapp/.vscode/tasks.json
 create mode 100644 app/myapp/README.md
 create mode 100644 app/myapp/angular.json
 create mode 100644 app/myapp/package-lock.json
 create mode 100644 app/myapp/package.json
 create mode 100644 app/myapp/server.ts
 create mode 100644 app/myapp/src/app/app.component.html
 create mode 100644 app/myapp/src/app/app.component.scss
 create mode 100644 app/myapp/src/app/app.component.spec.ts
 create mode 100644 app/myapp/src/app/app.component.ts
 create mode 100644 app/myapp/src/app/app.config.server.ts
 create mode 100644 app/myapp/src/app/app.config.ts
 create mode 100644 app/myapp/src/app/app.routes.ts
 create mode 100644 app/myapp/src/assets/.gitkeep
 create mode 100644 app/myapp/src/favicon.ico
 create mode 100644 app/myapp/src/index.html
 create mode 100644 app/myapp/src/main.server.ts
 create mode 100644 app/myapp/src/main.ts
 create mode 100644 app/myapp/src/styles.scss
 create mode 100644 app/myapp/tsconfig.app.json
 create mode 100644 app/myapp/tsconfig.json
 create mode 100644 app/myapp/tsconfig.spec.json
 create mode 100644 docker-compose.yml
um790@UM790:~/project/angularOnDocker$ git status
On branch master
nothing to commit, working tree clean
um790@UM790:~/project/angularOnDocker$ git branch
* master
um790@UM790:~/project/angularOnDocker$ git log
commit 21da53329e30acb5f01870bb6c3c20b0d561cc3a (HEAD -> master)
Author: aka999-hub <hoge999@gmail.com>
Date:   Fri May 3 16:18:59 2024 +0900

    first Commit of angularOnDocker
um790@UM790:~/project/angularOnDocker$ git remote add origin git@github.com:aka999-hub/angularOnDocker.git
um790@UM790:~/project/angularOnDocker$ git remote -v
origin  git@github.com:aka999-hub/angularOnDocker.git (fetch)
origin  git@github.com:aka999-hub/angularOnDocker.git (push)
um790@UM790:~/project/angularOnDocker$ git push -u origin main
error: src refspec main does not match any
error: failed to push some refs to 'github.com:aka999-hub/angularOnDocker.git'
um790@UM790:~/project/angularOnDocker$ git push -u origin master
Enter passphrase for key '/home/um790/.ssh/id_rsa': 
Enumerating objects: 37, done.
Counting objects: 100% (37/37), done.
Delta compression using up to 16 threads
Compressing objects: 100% (34/34), done.
Writing objects: 100% (37/37), 122.93 KiB | 801.00 KiB/s, done.
Total 37 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
To github.com:aka999-hub/angularOnDocker.git
 * [new branch]      master -> master
Branch 'master' set up to track remote branch 'master' from 'origin'.
um790@UM790:~/project/angularOnDocker$ 

---