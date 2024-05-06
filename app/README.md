\app\README.md

### バージョン確認
root@fac8e005a6a1:/app# ngx ng version

### プロジェクト作成（※プロジェクト：myapp）
root@fac8e005a6a1:/app# npx ng new myapp --strict --skip-git
※gitスキップ

### サーバー起動（※プロジェクト：myapp）
root@fac8e005a6a1:/app/myapp# npx ng serve --host 0.0.0.0 --poll 1



---
ログ： 
 *  実行するタスク: docker exec -it fac8e005a6a18cb4dea1fcf3921d7ca1eb29a47ce8bacb4cc3fafebb61ee177d bash 

root@fac8e005a6a1:/app# ls -al
total 8
drwxr-xr-x 2 root root 4096 May  3 06:46 .
drwxr-xr-x 1 root root 4096 May  3 06:46 ..
root@fac8e005a6a1:/app# pwd
/app
root@fac8e005a6a1:/app# ngx ng version
bash: ngx: command not found
root@fac8e005a6a1:/app# npx ng version
? Would you like to share pseudonymous usage data about this project with the Angular Team
at Google under Google's Privacy Policy at https://policies.google.com/privacy. For more
details and how to change this setting, see https://angular.io/analytics. No
Global setting: disabled
Local setting: No local workspace configuration file.
Effective status: disabled

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 17.3.6
Node: 20.12.2
Package Manager: npm 10.5.0
OS: linux x64

Angular: 
... 

Package                      Version
------------------------------------------------------
@angular-devkit/architect    0.1703.6 (cli-only)
@angular-devkit/core         17.3.6 (cli-only)
@angular-devkit/schematics   17.3.6 (cli-only)
@schematics/angular          17.3.6 (cli-only)
    
root@fac8e005a6a1:/app# npx ng new myapp --strict --skip-git
? Which stylesheet format would you like to use? Sass (SCSS)     [ 
https://sass-lang.com/documentation/syntax#scss                ]
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? Yes
CREATE myapp/README.md (1059 bytes)
CREATE myapp/.editorconfig (274 bytes)
CREATE myapp/.gitignore (548 bytes)
CREATE myapp/angular.json (2907 bytes)
CREATE myapp/package.json (1260 bytes)
CREATE myapp/tsconfig.json (857 bytes)
CREATE myapp/tsconfig.app.json (324 bytes)
CREATE myapp/tsconfig.spec.json (273 bytes)
CREATE myapp/server.ts (1703 bytes)
CREATE myapp/.vscode/extensions.json (130 bytes)
CREATE myapp/.vscode/launch.json (470 bytes)
CREATE myapp/.vscode/tasks.json (938 bytes)
CREATE myapp/src/main.ts (250 bytes)
CREATE myapp/src/favicon.ico (15086 bytes)
CREATE myapp/src/index.html (291 bytes)
CREATE myapp/src/styles.scss (80 bytes)
CREATE myapp/src/main.server.ts (264 bytes)
CREATE myapp/src/app/app.component.scss (0 bytes)
CREATE myapp/src/app/app.component.html (19903 bytes)
CREATE myapp/src/app/app.component.spec.ts (913 bytes)
CREATE myapp/src/app/app.component.ts (302 bytes)
CREATE myapp/src/app/app.config.ts (321 bytes)
CREATE myapp/src/app/app.routes.ts (77 bytes)
CREATE myapp/src/app/app.config.server.ts (350 bytes)
CREATE myapp/src/assets/.gitkeep (0 bytes)
✔ Packages installed successfully.
root@fac8e005a6a1:/app# cd myapp
root@fac8e005a6a1:/app/myapp# ls -al
total 520
drwxr-xr-x   5 root root   4096 May  3 06:59 .
drwxr-xr-x   3 root root   4096 May  3 06:56 ..
-rw-r--r--   1 root root    274 May  3 06:56 .editorconfig
-rw-r--r--   1 root root    548 May  3 06:56 .gitignore
drwxr-xr-x   2 root root   4096 May  3 06:56 .vscode
-rw-r--r--   1 root root   1059 May  3 06:56 README.md
-rw-r--r--   1 root root   2907 May  3 06:56 angular.json
drwxr-xr-x 552 root root  20480 May  3 06:59 node_modules
-rw-r--r--   1 root root 458307 May  3 06:59 package-lock.json
-rw-r--r--   1 root root   1260 May  3 06:56 package.json
-rw-r--r--   1 root root   1703 May  3 06:56 server.ts
drwxr-xr-x   4 root root   4096 May  3 06:56 src
-rw-r--r--   1 root root    324 May  3 06:56 tsconfig.app.json
-rw-r--r--   1 root root    857 May  3 06:56 tsconfig.json
-rw-r--r--   1 root root    273 May  3 06:56 tsconfig.spec.json
root@fac8e005a6a1:/app/myapp# npx ng serve --host 0.0.0.0 --poll 1

Warning: This is a simple server for use in testing or debugging Angular applications
locally. It hasn't been reviewed for security issues.

Binding this server to an open connection can result in compromising your application or
computer. Using a different host than the one passed to the "--host" flag might result in
websocket connection issues. You might need to use "--disable-host-check" if that's the
case.
    
Browser bundles        
Initial chunk files     | Names               |  Raw size
polyfills.js            | polyfills           |  85.81 kB | 
main.js                 | main                |  22.06 kB | 
styles.css              | styles              |  96 bytes | 

                        | Initial total       | 107.97 kB


Server bundles         
Initial chunk files     | Names               |  Raw size
chunk-2GU7D7LV.mjs      | -                   |   1.70 MB | 
polyfills.server.mjs    | polyfills.server    | 557.17 kB | 
main.server.mjs         | main.server         | 216.19 kB | 
chunk-VPSODEBW.mjs      | -                   |   2.51 kB | 
render-utils.server.mjs | render-utils.server | 423 bytes | 

Lazy chunk files        | Names               |  Raw size
chunk-OTT6LQ5K.mjs      | xhr2                |  39.10 kB | 

Application bundle generation complete. [3.383 seconds]

Watch mode enabled. Watching for file changes...
  ➜  Local:   http://localhost:4200/
  ➜  Network: http://172.21.0.2:4200/
  ➜  press h + enter to show help
Browser bundles    
Initial chunk files | Names       |  Raw size
main.js             | main        |  22.06 kB | 


Server bundles     
Initial chunk files | Names       |  Raw size
main.server.mjs     | main.server | 216.19 kB | 

Application bundle generation complete. [0.321 seconds]

Page reload sent to client(s).
^C
root@fac8e005a6a1:/app/myapp# pwd
/app/myapp
root@fac8e005a6a1:/app/myapp# cd ..
root@fac8e005a6a1:/app# ls
myapp
root@fac8e005a6a1:/app# mkdir first-app
root@fac8e005a6a1:/app# cd first-app/
root@fac8e005a6a1:/app/first-app# npm install
npm ERR! code ENOENT
npm ERR! syscall open
npm ERR! path /app/first-app/package.json
npm ERR! errno -2
npm ERR! enoent Could not read package.json: Error: ENOENT: no such file or directory, open '/app/first-app/package.json'
npm ERR! enoent This is related to npm not being able to find a file.
npm ERR! enoent 

npm ERR! A complete log of this run can be found in: /root/.npm/_logs/2024-05-03T07_34_20_322Z-debug-0.log
root@fac8e005a6a1:/app/first-app# ls -al
total 12
drwxr-xr-x 2 root root 4096 May  3 07:34 .
drwxr-xr-x 4 root root 4096 May  3 07:34 ..
-rw-r--r-- 1 root root   88 May  3 07:34 package-lock.json
root@fac8e005a6a1:/app/first-app# rm *
root@fac8e005a6a1:/app/first-app# cd ..                                
root@fac8e005a6a1:/app# ls
first-app  myapp
root@fac8e005a6a1:/app# rm first-app
rm: cannot remove 'first-app': Is a directory
root@fac8e005a6a1:/app# rmdir first-app
root@fac8e005a6a1:/app# ls -al
total 12
drwxr-xr-x 3 root root 4096 May  3 07:35 .
drwxr-xr-x 1 root root 4096 May  3 07:05 ..
drwxr-xr-x 6 root root 4096 May  3 07:00 myapp
root@fac8e005a6a1:/app# npx ng new first-app --strict --skip-git
? Which stylesheet format would you like to use? Sass (SCSS)     [ 
https://sass-lang.com/documentation/syntax#scss                ]
? Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)? No
CREATE first-app/README.md (1062 bytes)
CREATE first-app/.editorconfig (274 bytes)
CREATE first-app/.gitignore (548 bytes)
CREATE first-app/angular.json (2781 bytes)
CREATE first-app/package.json (1040 bytes)
CREATE first-app/tsconfig.json (857 bytes)
CREATE first-app/tsconfig.app.json (263 bytes)
CREATE first-app/tsconfig.spec.json (273 bytes)
CREATE first-app/.vscode/extensions.json (130 bytes)
CREATE first-app/.vscode/launch.json (470 bytes)
CREATE first-app/.vscode/tasks.json (938 bytes)
CREATE first-app/src/main.ts (250 bytes)
CREATE first-app/src/favicon.ico (15086 bytes)
CREATE first-app/src/index.html (294 bytes)
CREATE first-app/src/styles.scss (80 bytes)
CREATE first-app/src/app/app.component.scss (0 bytes)
CREATE first-app/src/app/app.component.html (19903 bytes)
CREATE first-app/src/app/app.component.spec.ts (925 bytes)
CREATE first-app/src/app/app.component.ts (306 bytes)
CREATE first-app/src/app/app.config.ts (227 bytes)
CREATE first-app/src/app/app.routes.ts (77 bytes)
CREATE first-app/src/assets/.gitkeep (0 bytes)
✔ Packages installed successfully.
root@fac8e005a6a1:/app# ng serve
Error: This command is not available when running the Angular CLI outside a workspace.
root@fac8e005a6a1:/app# 