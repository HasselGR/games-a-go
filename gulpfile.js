import gulp from 'gulp'
import { clean, scripts, fonts, styles, markup, images, manifest, watch, bundle, javas, javastetris, imagesminesweeper, cssminesweeper, jsminesweeper , _locales} from './tasks'
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
  fonts: 'src/fonts/**/*',

  images: 'src/images/**/*',

  _locales: 'src/_locales/**/*',
  
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


gulp.task('build', gulp.series(clean, gulp.parallel(scripts, fonts, styles, markup, images, manifest, javas, javastetris, cssminesweeper, imagesminesweeper, jsminesweeper, _locales)))
gulp.task('dev', gulp.series('build', watch))
gulp.task('bundle', gulp.series('build', bundle))
