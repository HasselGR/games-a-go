import gulp from 'gulp'
import { clean, scripts, styles, markup, images, manifest, watch, bundle, javas, javastetris, imagesminesweeper, cssminesweeper, jsminesweeper } from './tasks'
import dotenv from 'dotenv'
dotenv.config()


export const paths = {
  scripts: [
    'src/options.js',
    'src/content.js',
    'src/background.js',
    'src/popup.js',
    'src/engineinvaders.js',
    'src/quitter.js',
  ],

  styles: [
    'src/options.scss',
    'src/popup.scss',
    'src/styletetris.css',
    'src/2048.scss',
    'src/baseinvaders.css',
  ],

  images: 'src/images/**/*',
  
  javas: 'src/javas/*',
  
  javastetris: 'src/javastetris/*',
  
  cssminesweeper: 'src/cssminesweeper/*',

  imagesminesweeper: 'src/imagesminesweeper/*',

  jsminesweeper: 'src/jsminesweeper/*',

  manifest: 'src/manifest.json',

  markup: [
    'src/options.html',
    'src/popup.html',
    'src/tetris.html',
    'src/index.html',
    'src/2048.html',
    'src/indexinvaders.html'
  ],
}


gulp.task('build', gulp.series(clean, gulp.parallel(scripts, styles, markup, images, manifest, javas, javastetris, cssminesweeper, imagesminesweeper, jsminesweeper)))
gulp.task('dev', gulp.series('build', watch))
gulp.task('bundle', gulp.series('build', bundle))