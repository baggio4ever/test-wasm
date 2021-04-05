# TestWasm

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 参考になりました

C/C++からWebAssemblyにコンパイルする

https://developer.mozilla.org/ja/docs/WebAssembly/C_to_wasm

Interacting with code

https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html


ワンライナーWebサーバを集めてみた

https://qiita.com/sudahiroshi/items/e74d61d939f18779970d

Python3 ワンライナーHTTPサーバー
$ python -m http.server 8000


How to make Angular and WebAssembly work together

https://componenthouse.com/2018/02/15/how-to-make-angular-and-webassembly-work-together/

WebAssemblyの使用方法と初期化、エラーハンドリング
https://medium.com/axip/webassembly%E3%81%AE%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95%E3%81%A8%E5%88%9D%E6%9C%9F%E5%8C%96-%E3%82%A8%E3%83%A9%E3%83%BC%E3%83%8F%E3%83%B3%E3%83%89%E3%83%AA%E3%83%B3%E3%82%B0-5b0a8c3968df
モジュール化で参考になりました
書いてあるコードを100％理解は出来ていないけど、複数wasmも扱えるようになった。

Angularのテンプレート内で script タグを読み込む方法
https://qiita.com/kenya-112163/items/c21cb98f8c8a96bf085d
Componentで scriptタグを使う方法。2種類書いてある。

Need to insert Script tag in angular 2
https://stackoverflow.com/questions/42458346/need-to-insert-script-tag-in-angular-2
上のQiita記事の2つ目は、ここを参考に書いてある。上の記事のままでは動かない。こちらが正解。

Call Angular Function From JavaScript
https://www.c-sharpcorner.com/blogs/call-angular-2-function-from-javascript
JavaScriptからAngularのメソッドを呼ぶ方法が書いてある。

Assets not cosidering base href url - not found error
https://stackoverflow.com/questions/51730424/assets-not-cosidering-base-href-url-not-found-error
サブディレクトリにデプロイするためには。
ng build --base-href=/test-wasm/
だけだと assetsフォルダのファイルにアクセスしようとしたら、404エラーになった。
./assets/ とするのが良いみたい。